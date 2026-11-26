// Refresh the program snapshot from the 2026-27 Master Program Doc.
//
//   1. Open the Master Program Doc, go to the "Program Tracking" tab, and choose
//      File → Download → Comma-separated values (.csv).
//   2. Run:  node tools/update-tracker.mjs path/to/export.csv
//   3. Commit the updated tracker-data.js on a branch and open a pull request.
//
// Privacy: only the fields below are written. Principal (VP), Program Lead and staff
// names, decline reasons, exact budgets, links and document IDs are never published.
// Budgets are reduced to the same ranges the district uses for review tiers.
import { readFileSync, writeFileSync } from 'node:fs';

export const BOE_THRESHOLD = 31321;

export function parseCsv(text) {
  const rows = []; let row = [], field = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') q = false;
      else field += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); rows.push(row); row = []; field = '';
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

const money = v => { const n = parseFloat(String(v || '').replace(/[^0-9.]/g, '')); return isNaN(n) ? null : n; };
export function budgetRange(n) {
  if (n == null || n <= 0) return '';
  if (n < 2500) return 'Under $2,500';
  if (n < 10000) return '$2,500–$9,999';
  if (n <= BOE_THRESHOLD) return `$10,000–$${BOE_THRESHOLD.toLocaleString('en-US')}`;
  return `Above $${BOE_THRESHOLD.toLocaleString('en-US')} (Board approval)`;
}
export function providerName(label) {
  const s = String(label || '').trim();
  if (/^grps run$/i.test(s)) return 'District-run';
  const tidy = { 'Boys&GirlsClub': 'Boys & Girls Clubs of Grand Rapids', 'YES,Inc, Youth Empowerment Serivces, Inc': 'Youth Empowerment Services (YES), Inc.', 'THE PLAYGROUNDgr': 'The PLAYGROUNDgr' };
  const name = s.replace(/\s*\(vendor\)\s*$/i, '').replace(/\s+vendor\s+(cont|new)\s*$/i, '').trim();
  return tidy[name] || name;
}

export function toSnapshot(csvText) {
  const rows = parseCsv(csvText.replace(/^﻿/, ''));
  const headerAt = rows.findIndex(r => r.includes('Program Name') && r.includes('School'));
  if (headerAt < 0) throw new Error('Could not find "Program Name" and "School" columns. Is this the Program Tracking tab of the Master Program Doc?');
  const h = rows[headerAt], get = (r, k) => (h.includes(k) ? String(r[h.indexOf(k)] ?? '') : '').trim();
  const need = ['Program Name', 'School', 'OEL Approval', 'APPROVAL LETTER SENT', 'Principal Decision', 'Status', 'Final Budget', 'Provider label'];
  const missing = need.filter(k => !h.includes(k));
  if (missing.length) console.warn('Warning: these columns are missing from the export: ' + missing.join(', '));
  return rows.slice(headerAt + 1)
    .filter(r => /[a-z]/i.test(get(r, 'Program Name')) && (get(r, 'School') || get(r, 'Building')))
    .map(r => ({
      'Program Name': get(r, 'Program Name'),
      'School': get(r, 'School'),
      'Building': get(r, 'Building'),
      'Provider': providerName(get(r, 'Provider label')),
      'Category': get(r, 'Category'),
      'Expected Students': get(r, 'Expected # Students'),
      'OEL Approval': get(r, 'OEL Approval'),
      'Approval Letter': get(r, 'APPROVAL LETTER SENT'),
      'Principal Decision': get(r, 'Principal Decision'),
      'Status': get(r, 'Status'),
      'Budget Range': budgetRange(money(get(r, 'Final Budget')) ?? money(get(r, 'Adjusted Budget')) ?? money(get(r, 'Original Budget'))),
      'Start Date': get(r, 'Start Date'),
      'Duration': get(r, 'Duration'),
      'Days/Times': get(r, 'Days/Times')
    }));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [file, date = new Date().toISOString().slice(0, 10)] = process.argv.slice(2);
  if (!file) { console.error('Usage: node tools/update-tracker.mjs <export.csv> [YYYY-MM-DD]'); process.exit(1); }
  const data = toSnapshot(readFileSync(file, 'utf8'));
  const out = `/* Snapshot of the "2026-27 Master Program Doc" (Program Tracking tab), taken ${date}. Only the fields the site displays are kept: no principal, program lead or staff names, decline reasons, or exact budgets. The Master Program Doc is the official record. Refresh with: node tools/update-tracker.mjs export.csv */\n` +
    `window.EXTENDED_DAY_TRACKER_DATE=${JSON.stringify(date)};\n` +
    `window.EXTENDED_DAY_TRACKER=${JSON.stringify(data)};\n`;
  writeFileSync('tracker-data.js', out);
  console.log(`Wrote tracker-data.js: ${data.length} programs, snapshot date ${date}. Run the site check before merging.`);
}
