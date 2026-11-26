// Site check: opens the site in a real browser at desktop and phone widths and
// clicks through it the way a person would. It fails on JavaScript errors, missing
// local files, sideways scrolling, a page that renders empty, a broken in-site link,
// or a tracker row that does not map to any school.
import { chromium } from 'playwright';
import { readdirSync } from 'node:fs';

const BASE = process.env.SITE_URL || 'http://localhost:8000/';
const pages = readdirSync('.').filter(f => f.endsWith('.html') && !/[()]/.test(f)).sort();
const widths = [1366, 390];
const problems = [];
const note = (where, msg) => problems.push(`${where}: ${msg}`);

const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 } });
  // Outside sites are not part of this check; keep the run fast and offline-safe.
  await context.route(u => !u.href.startsWith(BASE), r => r.abort());
  for (const page of pages) {
    const tab = await context.newPage();
    const errors = [];
    tab.on('pageerror', e => errors.push(`JavaScript error: ${e.message.split('\n')[0]}`));
    tab.on('response', r => { if (r.url().startsWith(BASE) && r.status() >= 400) errors.push(`Missing file (${r.status()}): ${r.url().slice(BASE.length)}`); });
    const where = (route = '') => `${page}${route} @ ${width}px`;
    const sideways = async route => {
      const extra = await tab.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      if (extra > 1) note(where(route), `page scrolls sideways by ${extra}px`);
    };
    try {
      await tab.goto(BASE + page, { waitUntil: 'load', timeout: 30000 });
      await tab.waitForTimeout(500);
      await sideways('');

      if (page === 'index.html') {
        // Every view the site can show, including each school and journey step.
        const routes = await tab.evaluate(() => [
          ...Object.keys(P).map(k => '#/' + k),
          ...GRPS_SCHOOLS.map(s => '#/schools/' + slug(s)),
          ...STAGE_ORDER.map(s => '#/step/' + s),
          ...Object.keys(GUIDANCE).map(g => '#/guidance/' + g),
          '#/faq?who=principal', '#/faq?topic=invoice', '#/journey', '#/start', '#/'
        ]);
        const linked = new Set();
        for (const r of routes) {
          await tab.evaluate(h => { location.hash = h; }, r);
          await tab.waitForTimeout(30);
          const info = await tab.evaluate(() => {
            const active = document.querySelector('.page.active');
            return {
              id: active && active.id,
              h1: (active && active.querySelector('h1') || {}).textContent || '',
              links: [...document.querySelectorAll('a[href^="#/"]')].map(a => a.getAttribute('href'))
            };
          });
          const isHome = ['#/', '#/journey', '#/start'].includes(r);
          if (!isHome && (info.id !== 'panel' || !info.h1.trim())) note(where(r), 'view did not open or has no heading');
          if (isHome && info.id !== 'home') note(where(r), 'did not return to Home');
          info.links.forEach(l => linked.add(l));
          if (width === 390 || r.startsWith('#/schools/aberdeen') || r === '#/manage') await sideways(r);
        }
        // Every in-site link must lead to a real view, not a blank page.
        for (const l of linked) {
          const ok = await tab.evaluate(h => {
            const [path] = h.replace(/^#\/?/, '').split('?'); const [k, a] = path.split('/');
            if (!k || k === 'journey' || k === 'start') return true;
            if (k === 'step') return !!STAGES[a];
            if (!P[k]) return false;
            if (k === 'schools' && a) return !!schoolBySlug(a);
            if (P[k].tasks && a) return P[k].tasks.includes(a);
            if (k === 'guidance' && a) return !!GUIDANCE[a];
            return true;
          }, l);
          if (!ok) note(where(), `link goes nowhere: ${l}`);
        }
        // Choosing a school from the list opens that school and changes the address.
        await tab.evaluate(() => { location.hash = '#/schools'; });
        await tab.selectOption('#schoolSelect', 'aberdeen-academy');
        await tab.waitForTimeout(50);
        if (!(await tab.url()).endsWith('#/schools/aberdeen-academy')) note(where(), 'choosing a school did not update the address');
        const progs = await tab.locator('.prog').count();
        if (!progs) note(where(), 'Aberdeen Academy shows no programs');
        // Browser Back returns to the previous view.
        await tab.goBack(); await tab.waitForTimeout(50);
        if (!(await tab.url()).endsWith('#/schools')) note(where(), 'browser Back did not return to Schools & Programs');
        // Program Guidance and FAQ controls respond.
        await tab.evaluate(() => { location.hash = '#/guidance'; });
        await tab.selectOption('#q', 'launch'); await tab.waitForTimeout(50);
        if (!/clearance/i.test(await tab.locator('#result').textContent())) note(where(), 'Program Guidance did not show a result');
        await tab.evaluate(() => { location.hash = '#/faq'; });
        await tab.fill('#faqSearch', 'invoice');
        const faqs = await tab.locator('#faqList details').count();
        if (!faqs || faqs === (await tab.evaluate(() => FAQS.length))) note(where(), 'FAQ search did not filter');
        // Pathway pages are tools: every task opens and builds something.
        for (const path of ['principal', 'partner', 'manage']) {
          await tab.evaluate(h => { location.hash = h; }, '#/' + path);
          await tab.waitForTimeout(50);
          for (const s of await tab.locator('.task > summary').all()) {
            const d = s.locator('xpath=..');
            if (!(await d.evaluate(e => e.open))) await s.click();
            await tab.waitForTimeout(20);
            if (!(await d.locator('.task-body').evaluate(e => e.innerHTML.trim().length))) note(where('#/' + path), `task "${(await s.textContent()).trim().slice(0, 40)}" opened empty`);
          }
        }
        await tab.evaluate(() => { location.hash = '#/partner/myprograms'; }); await tab.waitForTimeout(50);
        await tab.locator('#task-myprograms select').selectOption({ index: 1 }); await tab.waitForTimeout(50);
        if (!(await tab.locator('#task-myprograms .lookup-result .prog').count())) note(where(), 'partner lookup showed no programs');
        await tab.evaluate(() => { location.hash = '#/principal/launch'; }); await tab.waitForTimeout(50);
        for (const box of await tab.locator('#task-launch input[type=checkbox]').all()) if (!(await box.isChecked())) await box.check();
        if (!(await tab.locator('#task-launch .ck-result.ok').count())) note(where(), 'launch checklist did not show Ready when every item was checked');
        await tab.locator('#task-launch .ck-reset').click();
        await tab.evaluate(() => { location.hash = '#/change'; }); await tab.waitForTimeout(50);
        await tab.locator('.router button[data-k="cost"]').click();
        if (!(await tab.locator('.rt-result').textContent()).includes('MOU')) note(where(), 'change router did not answer');
        // Every tracker row must belong to at least one school, or it would never be shown.
        if (width === widths[0]) {
          const lost = await tab.evaluate(() => trackerRows().filter(r => !schoolsForRow(r).length).map(r => `${r['Program Name']} (${r['Location/schools']})`));
          lost.forEach(l => note('tracker-data.js', `program not matched to any school: ${l}. Add its spelling to SCHOOL_MATCH in app.js.`));
          // Privacy guard: names, decline reasons and exact budgets must never reach the public file.
          const leaked = await tab.evaluate(() => { const banned = ['VP', 'Program Lead', 'Staff Names', 'Changes/Decline Reason', 'Original Budget', 'Adjusted Budget', 'Final Budget', 'Vendor/ Principal in Charge']; return [...new Set((window.EXTENDED_DAY_TRACKER || []).flatMap(r => Object.keys(r).filter(k => banned.includes(k))))]; });
          leaked.forEach(k => note('tracker-data.js', `contains a private column that must not be published: ${k}. Regenerate it with tools/update-tracker.mjs.`));
        }
      }
    } catch (e) { note(where(), `could not finish: ${e.message.split('\n')[0]}`); }
    for (const f of new Set(errors)) note(where(), f);
    console.log(`checked ${page} @ ${width}px`);
    await tab.close();
  }
  await context.close();
}
await browser.close();

if (problems.length) {
  console.log('\nProblems found:\n' + [...new Set(problems)].map(p => '  - ' + p).join('\n'));
  process.exit(1);
}
console.log('\nAll checks passed.');
