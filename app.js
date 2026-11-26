/* GRPS Extended Day Operations Hub
   Every view has its own address (for example #/schools/aberdeen-academy), so the browser
   Back button works and any page can be bookmarked or shared. */

/* ---------- Page content ---------- */
const P = {
  principal: {
    ey: 'PRINCIPAL / SCHOOL LEADER', title: 'Own the program. Know the guardrails.',
    why: 'Your school is closest to scholar need. Principal voice should shape the program—but choices must fit the school allocation, 31a requirements, district criteria, and approval pathway before commitments are made.',
    actions: [['1. Start with need', 'Use school data and scholar need to define what Extended Day should accomplish.'], ['2. Know my budget', 'See the available allocation before selecting or expanding a program.'], ['3. Choose an approach', 'Select the program/provider that best fits the need within GRPS criteria.'], ['4. Check before committing', 'Use Program Guidance for funding, vendor, schedule, cost, or program questions.'], ['5. Track launch readiness', 'Approval is not the same as clearance to launch.'], ['6. Manage what was approved', 'Monitor participation, quality, spending, changes, and partner performance.'], ['7. Decide from evidence', 'Continue, modify, expand, replace, or discontinue based on results.']],
    next: [['See my school’s programs', '#/schools'], ['Check a situation in Program Guidance', '#/guidance'], ['Principal FAQs', '#/faq?who=principal']]
  },
  partner: {
    ey: 'COMMUNITY PARTNER / VENDOR', title: 'Clear expectations. Strong partnership. No surprises.',
    why: 'Community partners remain essential to Extended Day. As the model has expanded, GRPS is making expectations clearer so partners know what is required, why it matters, what support to expect, and how successful implementation will be determined.',
    custom: 'partner',
    actions: [['Budget comes from the principal', 'The principal at each school decides how much budget is available. Confirm it directly; don’t assume a figure. Revised budgets go to the principal, who submits them to OEL.'], ['Before services begin', 'Signed MOU, OEL approval, Board approval if over $31,321, staff list, and cleared fingerprint background checks for every staff member. Time run before full approval is not reimbursed.'], ['Every month', 'One package to Dr. Kyle Krol on your MOU schedule: Invoice Checklist on page 1, then invoice, attendance, lesson plans, and a Time and Effort Log. Missing pieces delay payment.'], ['Invoices (Section 31a)', 'Show each date of service, what students did, hours, staff who delivered it, students served, rates matching the MOU, an attendance roster, and a signed statement that services were delivered.'], ['Same-day changes by 10:00 a.m.', 'Tell families, the school secretary, your program staff, and OEL. OEL also contacts families by email and phone.'], ['Staff or contact changes', 'Send OEL new or substitute staff names right away. New staff need a cleared background check on file before working with students.'], ['When the program changes', 'Days, times, location, or session length changes go to OEL. Material changes need review before you act.']],
    next: [['Before-launch checklist', '#/step/clear'], ['Something changed', '#/change'], ['Partner FAQs', '#/faq?who=partner']]
  },
  manage: {
    ey: 'OFFICE OF EXTENDED LEARNING', title: 'Manage the portfolio, not a collection of disconnected tasks.',
    why: 'OEL needs one management view that shows what is approved, what is cleared, what is at risk, what has changed, what requires intervention, and what the evidence says about continuation.',
    custom: 'portfolio',
    actions: [['Pipeline', 'PLAN → SUBMIT → REVIEW → APPROVE → CLEAR → OPERATE → MONITOR → ADJUST → EVALUATE → CLOSE → DECIDE'], ['Attention queue', 'Surface missing MOU/vendor clearance, budget conflicts, pending approvals, launch blockers, and unresolved changes.'], ['Participation', 'Compare projected and actual participation using On Track / Watch / Action Required checkpoints.'], ['Quality', 'Connect observations to required follow-up rather than storing observations as isolated records.'], ['Fiscal', 'Use the confirmed $31,321 BOE threshold consistently; reconcile funding-source requirements.'], ['Closeout', 'Connect final invoices, documentation, evaluation, and next-year decisions.']]
  },
  change: {
    ey: 'SOMETHING CHANGED', title: 'Route the change before acting.',
    why: 'Changes are normal. The risk comes when a program changes materially after approval without the budget, agreement, or approval being updated.',
    actions: [['Document Only', 'Minor operational update that does not change scope, cost, provider, funding, or core approved design.'], ['OEL Review', 'Operational change that needs district awareness/review but does not yet require fiscal or agreement revision.'], ['Funding / MOU Review', 'Change affects cost, funding, provider terms, scope, or agreement language.'], ['Additional Approval', 'Material change triggers an additional approval requirement.']],
    next: [['Schedule, days, or location changed', '#/guidance/schedule'], ['Program or activity changed', '#/guidance/scope'], ['Cost or funds changed', '#/guidance/cost']]
  },
  resources: {
    ey: 'SOURCE OF TRUTH', title: 'Use the existing tool. Do not create a duplicate process.',
    why: 'GRPS already has substantial Extended Day infrastructure. The Hub should connect people to the authoritative source and explain when to use it.',
    actions: [['Program application', 'Current Extended Day application/application folder.'], ['Funding / allocation', 'Current allocation workbook; apply current funding rules and confirmed threshold.'], ['Submission status', '2026–27 Master Program Doc is the current status backbone.'], ['Vendor onboarding', 'Third-Party Vendor Protocol + Intake.'], ['MOU / agreements', 'Existing MOU and approval materials connected to the program record.'], ['Launch', 'Orientation, packets, and SOPs consolidated into a launch-readiness view.'], ['Attendance', 'Existing attendance process connected to projected vs. actual participation.'], ['Monitoring', 'Existing observation tool plus action/follow-up.'], ['Evaluation', 'Existing evaluation plan as the backbone.'], ['Closeout', 'One connected pathway for final documentation, invoice, evaluation, and decision.']]
  },
  schools: {
    ey: 'SCHOOLS & PROGRAMS', title: 'Start with your school.',
    why: 'Extended Day decisions happen in a school context. Choose your school to see its programs, where each one stands, and what comes next.',
    custom: 'schools'
  },
  guidance: {
    ey: 'PROGRAM GUIDANCE', title: 'What are you trying to do?',
    why: 'Start with the situation you are working through. Guidance should explain what applies, why it matters, and the next action before a commitment is made.',
    custom: 'guidance'
  },
  faq: {
    ey: 'FREQUENTLY ASKED QUESTIONS', title: 'Find an answer without hunting for it.',
    why: 'FAQs should make recurring Extended Day questions easy to answer for principals, partners, and staff—and connect the answer to the right next step.',
    custom: 'faq'
  }
};

const GUIDANCE = {
  vendor: { label: 'Use a new community partner/vendor', tag: 'REVIEW REQUIRED', text: 'Confirm provider eligibility/clearance, agreement requirements, budget fit, and whether the change affects the approved program before committing.', go: ['Partner expectations', '#/partner'] },
  cost: { label: 'Increase program cost or use remaining funds', tag: 'REVIEW REQUIRED', text: 'Confirm available allocation and funding allowability before committing funds. A change affecting approved cost may require funding/MOU review or additional approval.', go: ['See the four change levels', '#/change'] },
  schedule: { label: 'Change program days, times, or location', tag: 'DEPENDS ON IMPACT', text: 'Document minor operational updates. Route changes that affect scope, cost, transportation/dismissal, staffing, provider terms, or the approved design for review.', go: ['See the four change levels', '#/change'] },
  scope: { label: 'Change the program/activity after approval', tag: 'REVIEW REQUIRED', text: 'Use the four-level change pathway: Document Only → OEL Review → Funding/MOU Review → Additional Approval.', go: ['See the four change levels', '#/change'] },
  low: { label: 'Participation is lower than projected', tag: 'ACTION CHECKPOINT', text: 'Use On Track / Watch / Action Required rather than an automatic cancellation percentage. Review causes, access, staffing, cost, and improvement action.', go: ['Monitoring guidance', '#/step/monitor'] },
  launch: { label: 'Start services after program approval', tag: 'NOT YET—CHECK CLEARANCE', text: 'Program approval and clearance to launch are separate. Do not begin until all applicable pre-launch requirements are complete.', go: ['Get cleared to launch', '#/step/clear'] }
};

const STAGE_ORDER = ['plan', 'submit', 'review', 'approve', 'clear', 'operate', 'monitor', 'adjust', 'evaluate', 'close', 'decide'];
const STAGES = {
  plan: { phase: 'BUILD IT', title: 'Plan the right program.', why: 'Start with scholar need before selecting an activity or provider.', required: 'Define the need, intended scholars, proposed model, provider approach, schedule, projected participation, intended result, and available budget.', next: 'Confirm the idea fits the school allocation and current funding/program guardrails before making a commitment.', route: 'Check the idea against the principal pathway or Program Guidance before submission.', go: [['Principal pathway', '#/principal'], ['Program Guidance', '#/guidance']] },
  submit: { phase: 'BUILD IT', title: 'Submit one complete proposal.', why: 'A complete submission reduces back-and-forth and helps GRPS review the actual program the school intends to run.', required: 'Use the existing Extended Day application/process and provide the required program and budget information. Do not create a parallel submission.', next: 'Submit through the current GRPS process, then follow the review with your principal and OEL.', route: 'Find the authoritative application in the Source of Truth list.', go: [['Source of Truth', '#/resources']] },
  review: { phase: 'BUILD IT', title: 'Know what GRPS is reviewing.', why: 'Review confirms the proposal is aligned, fundable, feasible, and ready for an approval decision.', required: 'OEL checks program fit, budget, funding allowability, cost, provider, projected participation, required agreements, and applicable approvals. The principal then decides whether the building takes the program on, based on need and the budget available.', next: 'Respond to requested revisions before treating the proposal as approved. Revised budgets go to the principal, who submits them to OEL.', route: 'See where your school’s proposals stand. The Master Program Doc remains the official record.', go: [['My school’s programs', '#/schools']] },
  approve: { phase: 'GET READY', title: 'Understand the program decision.', why: 'Approval confirms the program decision; it does not automatically mean services can begin.', required: 'OEL records its review decision and any conditions. The principal accepts or declines the program for the building, sometimes with budget changes. Programs over $31,321 also go to the Finance Committee and then the full Board of Education.', next: 'If approved, move to launch clearance and complete every remaining condition.', route: 'See each program’s decision on your school page.', go: [['My school’s programs', '#/schools']] },
  clear: { phase: 'GET READY', title: 'Get cleared to launch.', why: 'Separating approval from launch clearance prevents a program from starting before required operational conditions are complete.', required: 'Signed MOU on file with OEL · OEL approval · Board of Education approval if the budget is over $31,321 · staff list submitted · a cleared fingerprint background check (Michigan State Police and FBI) for every staff member, with proof sent to OEL · start date, days, times, and site confirmed with OEL · one main contact named.', next: 'Begin services only when every item applies and is complete. Time spent running without full approval is not eligible for reimbursement, even if the program is approved later. Do not contact families until a signed MOU is in place unless OEL says otherwise.', route: 'Not sure the program is fully cleared? Confirm with your principal or the OEL Director before you begin.', go: [['Partner checklist & contacts', '#/partner'], ['Launch FAQs', '#/faq?topic=approval']] },
  operate: { phase: 'RUN & IMPROVE IT', title: 'Run what was approved.', why: 'Clear operating expectations protect the scholar experience and keep the school, partner, and GRPS aligned.', required: 'Deliver the approved scope and keep a daily attendance roster for every session. Send same-day changes (cancellations, schedule changes, staffing gaps) by 10:00 a.m. to families, the school secretary, your staff, and OEL. Send OEL updated staff lists, with cleared background checks, whenever staff change. Copy OEL on field-trip and attendance communication.', next: 'Submit the monthly documentation package on the MOU schedule, and surface issues early rather than waiting for an invoice, observation, or closeout. OEL staff observe programs while they run.', route: 'Use operating resources for attendance, vendors, supplies, documentation, and invoicing.', go: [['Source of Truth', '#/resources']] },
  monitor: { phase: 'RUN & IMPROVE IT', title: 'Know whether the program is on track.', why: 'Monitoring should lead to support and improvement—not simply collect information.', required: 'Review projected versus actual participation, implementation quality, spending, documentation, partner performance, and emerging issues.', next: 'Use On Track / Watch / Action Required checkpoints and document the response when attention is needed.', route: 'Connect observations and participation data to a specific follow-up action.', go: [['Low participation guidance', '#/guidance/low']] },
  adjust: { phase: 'RUN & IMPROVE IT', title: 'Route a change before acting.', why: 'Programs evolve. The key is making sure material changes remain aligned with the approved scope, funding, and agreement.', required: 'Identify whether the change affects scope, cost, provider, funding, schedule, location, staffing, transportation/dismissal, or core design.', next: 'Route it as Document Only, OEL Review, Funding/MOU Review, or Additional Approval.', route: 'Find the right review level for the change.', go: [['Something changed', '#/change']] },
  evaluate: { phase: 'LEARN & DECIDE', title: 'Understand what the investment produced.', why: 'Evaluation connects implementation and participation to what GRPS and the school should learn from the program.', required: 'Review implementation quality, participation, intended outcomes, stakeholder feedback, and other evidence in the existing evaluation framework.', next: 'Identify what should continue, improve, change, or be investigated before the next decision.', route: 'Use the existing evaluation plan as the backbone rather than a separate scorecard.', go: [['Source of Truth', '#/resources']] },
  close: { phase: 'LEARN & DECIDE', title: 'Close the program cleanly.', why: 'Closeout ensures fiscal, program, partner, and documentation responsibilities are resolved before the work is considered complete.', required: 'Complete final invoices, required supporting records, inventory/equipment steps, outstanding documentation, and evaluation requirements.', next: 'Resolve open items and confirm the program is ready for a continuation decision.', route: 'Use one connected closeout pathway instead of separate end-of-program requests.', go: [['Invoicing & closeout FAQs', '#/faq?topic=invoice']] },
  decide: { phase: 'LEARN & DECIDE', title: 'Use evidence to decide what comes next.', why: 'The next program decision should reflect scholar need, implementation evidence, participation, quality, cost, and partnership performance.', required: 'Bring together the school perspective, program evidence, fiscal information, partner performance, and unresolved issues.', next: 'Determine whether to continue, modify, expand, replace, or discontinue the program.', route: 'Record the rationale so the next cycle begins with what was learned.', go: [['Portfolio view', '#/manage']] }
};

const FAQS = [
  { audience: 'principal', topic: 'funding', q: 'How much flexibility does a principal have in choosing an Extended Day program?', a: 'Principals have meaningful voice in selecting the program or partner that best responds to scholar need, within the school allocation, 31a requirements, GRPS program criteria, and applicable approval requirements. Start with the need and available budget before making a commitment.' },
  { audience: 'principal', topic: 'funding', q: 'Can I use remaining Extended Day funds for something different?', a: 'Possibly. First confirm that funds remain available and the proposed use is allowable. If the change affects the approved scope, cost, provider, agreement, or another condition, route it through Program Guidance before committing funds.' },
  { audience: 'principal', topic: 'partner', q: 'Can I select a new community partner or vendor?', a: 'Yes. Principals may propose a community partner or vendor that meets scholar need and fits within the school’s approved Extended Day budget. Before services begin, the provider must complete applicable GRPS intake, clearance, agreement, budget, and approval requirements. Do not make a final commitment until the required GRPS review is complete.' },
  { audience: 'shared', topic: 'approval', q: 'Does program approval mean we can start?', a: 'No. Before a program operates it needs every item that applies: a signed MOU, OEL approval, and Board of Education approval if the budget is over $31,321. Every staff member also needs a cleared background check on file with OEL. Time spent running without full approval is not eligible for reimbursement, even if the program is approved later. If you are not sure, confirm with your principal or Dr. Kyle Krol before you begin.' },
  { audience: 'principal', topic: 'approval', q: 'When is Board of Education approval required?', a: 'When the budget is over $31,321. Programs at or below that amount do not need Finance Committee or Board review. Programs above it are reviewed by the Finance Committee on its monthly schedule and then approved by the full Board, and their MOUs are ready to sign only after Board approval, so plan ahead. Dr. Kyle Krol can confirm which applies.' },
  { audience: 'principal', topic: 'operations', q: 'What if program participation is lower than projected?', a: 'Do not wait until closeout. Review the cause, access barriers, staffing, cost, and program design using On Track / Watch / Action Required checkpoints, then document the improvement action and any change that requires review.' },
  { audience: 'shared', topic: 'operations', q: 'What if the schedule, location, staffing, partner, or program design changes?', a: 'Route the change before acting. Depending on its impact, the change may be Document Only, OEL Review, Funding/MOU Review, or Additional Approval. Program Guidance shows the correct route.' },
  { audience: 'partner', topic: 'operations', q: 'What is expected of community partners while a program is operating?', a: 'Deliver the approved program, maintain required attendance and program records, communicate issues early, follow applicable staffing and operating expectations, and provide documentation needed for monitoring and payment.' },
  { audience: 'partner', topic: 'invoice', q: 'What does a partner need to submit for payment?', a: 'Submit a complete invoice with the supporting documentation required for the approved services. Missing or inconsistent documentation should be resolved before payment is processed.' },
  { audience: 'shared', topic: 'invoice', q: 'What happens at program closeout?', a: 'Complete final invoices, required records, inventory or equipment steps, outstanding documentation, and evaluation requirements so the program can move to a continuation decision.' },
  { audience: 'partner', topic: 'funding', q: 'Who decides how much budget is available for my program?', a: 'The principal at each school where your program operates. Don’t assume a figure; confirm it directly with the principal. If the program can’t be delivered within the available budget, tell the principal early. OEL will work with you both on next steps if the building still wants the programming.' },
  { audience: 'partner', topic: 'funding', q: 'How do I submit a revised budget?', a: 'Send it to the building principal, who submits budget revisions to OEL. Include an updated line-item budget with the revised total, a short narrative of what changed and why (for example, fewer staffing hours or sessions), and any impact on the program.' },
  { audience: 'partner', topic: 'invoice', q: 'What goes in the monthly documentation package?', a: 'Put the Invoice Checklist (attached to your MOU) on page 1, then your invoice, attendance, lesson plans, and a Time and Effort Log or itemized staffing. Add staffing changes, program changes, mileage, updated contacts, or supplies inventory when they apply. Send everything together to Dr. Kyle Krol (krolk@grps.org) on your MOU schedule; most vendors submit monthly.' },
  { audience: 'partner', topic: 'approval', q: 'What background checks do program staff need?', a: 'Every staff member who works with GRPS students needs a cleared Michigan State Police and FBI fingerprint check before their first day, under GRPS Policy 3740. Vendors arrange and pay for the checks and send OEL proof. GRPS also runs a statewide ICHAT check on all program staff. Contact Dr. Kyle Krol with questions.' },
  { audience: 'shared', topic: 'operations', q: 'We have to cancel or change a program day. Who do we tell?', a: 'Tell four groups by 10:00 a.m., or as soon as possible: families, the school secretary, your program staff, and OEL. That way scholars get safely to the right place. OEL also sends updates to families by email and phone.' },
  { audience: 'principal', topic: 'operations', q: 'Where do I go if I am not sure which rule applies?', a: 'Start with Program Guidance. Choose the situation you are working through to see the current routing guidance, why it applies, and the next action.' },
  { audience: 'shared', topic: 'why', q: 'Why are Extended Day expectations changing?', a: 'Extended Day has expanded significantly. GRPS is strengthening clarity, alignment, stewardship, and implementation support as the model grows. Community partners remain essential, and principals retain meaningful ownership within clear district and funding guardrails.' }
];
const FAQ_AUDIENCES = { principal: 'Principal / School Leader', partner: 'Community Partner / Vendor', shared: 'Shared questions' };
const FAQ_TOPICS = { funding: 'Funding & Budget', partner: 'Partner Selection & Agreements', approval: 'Approval & Launch', operations: 'Operating & Changes', invoice: 'Invoicing & Closeout', why: 'Why the Model Is Evolving' };

/* ---------- Schools and the tracker snapshot ---------- */
const GRPS_SCHOOLS = ["Aberdeen Academy", "Blandford", "Brookside Elementary", "Buchanan Elementary", "Burton Elementary", "Burton Middle School", "C.A. Frost Environmental Science Academy Elementary", "C.A. Frost Environmental Science Academy Middle/High School", "Campus Elementary", "Center for Economicology", "Cesar E. Chavez Elementary", "City Middle/High School", "Coit Creative Arts Academy", "Congress Elementary", "Dickinson Academy", "Gerald R. Ford Academic Center", "Grand Rapids Learning Center", "Grand Rapids Montessori Academy Elementary", "Grand Rapids Montessori Academy Middle/High School", "Grand Rapids Museum Middle School", "Grand Rapids Museum High School", "Grand Rapids University Preparatory Academy", "Harrison Park Academy", "Innovation Central Middle School", "Innovation Central High School", "Ken-O-Sha Park Elementary", "Kent Hills Elementary", "Martin Luther King Jr. Leadership Academy", "Mulick Park Elementary", "Newcomers Community Schools", "North Park Montessori", "Ottawa Hills Middle School", "Ottawa Hills High School", "Palmer Elementary", "Ridgemoor Park Montessori", "Shawmut Hills Elementary", "Sherwood Park Global Studies Academy", "Sibley Elementary", "Southeast Career Pathways", "Southwest Elementary - Academia Bilingüe", "Southwest Middle High School - Academia Bilingüe", "Union High School", "Westwood Middle School", "Zoo School"];

/* The source tracker writes school names in many short forms, so each official school has a
   pattern for the names the tracker uses. The site check fails if a tracker row matches none. */
const SCHOOL_MATCH = [['Aberdeen Academy', /aberdeen/], ['Blandford', /blandford/], ['Brookside Elementary', /brookside/], ['Buchanan Elementary', /buchanan/], ['Burton Elementary', /burton el/], ['Burton Middle School', /burton ms/], ['C.A. Frost Environmental Science Academy Elementary', /frost el/], ['C.A. Frost Environmental Science Academy Middle/High School', /frost mhs/], ['Campus Elementary', /(^|, *)campus/], ['Cesar E. Chavez Elementary', /chavez/], ['City Middle/High School', /city mhs|city high/], ['Coit Creative Arts Academy', /coit/], ['Congress Elementary', /congress/], ['Dickinson Academy', /dickinson/], ['Gerald R. Ford Academic Center', /ford/], ['Grand Rapids Learning Center', /learning center/], ['Grand Rapids Montessori Academy Elementary', /montessori el/], ['Grand Rapids Montessori Academy Middle/High School', /grmontessori mhs|gr montessori hs/], ['Grand Rapids Museum High School', /museum hs/], ['Grand Rapids University Preparatory Academy', /university prep/], ['Harrison Park Academy', /harrison/], ['Innovation Central Middle School', /innovation (cms|central ?ms)/], ['Innovation Central High School', /innovation (chs|central ?hs)/], ['Ken-O-Sha Park Elementary', /ken-o-sha/], ['Kent Hills Elementary', /kent hills/], ['Martin Luther King Jr. Leadership Academy', /mlk/], ['Mulick Park Elementary', /mulick/], ['North Park Montessori', /north ?park/], ['Ottawa Hills Middle School', /ottawa ?hms|ottawahillsms/], ['Ottawa Hills High School', /ottawa hills hs/], ['Ridgemoor Park Montessori', /ridgemoor/], ['Shawmut Hills Elementary', /shawmut/], ['Sherwood Park Global Studies Academy', /sherwood/], ['Sibley Elementary', /sibley/], ['Southwest Elementary - Academia Bilingüe', /southwest el/], ['Southwest Middle High School - Academia Bilingüe', /southwest mhs/], ['Union High School', /union/], ['Westwood Middle School', /westwood/], ['Zoo School', /zoo/]];

const slug = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const schoolBySlug = s => GRPS_SCHOOLS.find(n => slug(n) === s);
const esc_ = v => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function trackerRows() { return Array.isArray(window.EXTENDED_DAY_TRACKER) ? window.EXTENDED_DAY_TRACKER.filter(r => String(r['Program Name'] || '').trim()) : []; }
/* Match on the tracker's School column; fall back to the Building column if the short name is unfamiliar. */
function schoolsForRow(r) {
  const find = v => { const loc = String(v || '').toLowerCase(); return loc ? SCHOOL_MATCH.filter(m => m[1].test(loc)).map(m => m[0]) : []; };
  const hit = find(r['School'] || r['Location/schools']);
  return hit.length ? hit : find(r['Building']);
}
function programsFor(school) { return trackerRows().filter(r => schoolsForRow(r).includes(school)); }

/* Programs move through OEL review, then the principal decides whether the building takes it on.
   The Status column (Accepted / Declined / Pending) is the building's final word. */
function programStatus(r) {
  const t = k => String(r[k] || '').trim().toLowerCase();
  const status = t('Status'), principal = t('Principal Decision'), oel = t('OEL Approval'), letter = t('Approval Letter');
  if (oel === 'denied' || /^deny/.test(letter)) return ['denied', 'Not approved by OEL'];
  if (status === 'declined' || principal === 'no') return ['declined', 'Declined by school'];
  if (status === 'pending' || /waiting/.test(principal)) return ['pending', 'Awaiting principal decision'];
  if (status === 'accepted') {
    if (oel === 'revise' || (!oel && /revise/.test(letter))) return ['revise', 'Accepted · revision needed'];
    return ['approved', /budget|adjust/.test(principal + letter) ? 'Moving forward · budget adjusted' : 'Moving forward'];
  }
  if (oel === 'revise' || /revise/.test(letter)) return ['revise', 'Revise & resubmit'];
  if (oel === 'approved') return ['pending', 'Awaiting principal decision'];
  return ['review', 'In review'];
}

/* What comes next for each status, with a link to the guidance that helps. */
const NEXT_STEP = {
  revise: ['OEL asked for revisions. Update the proposal or budget and the principal resubmits it to OEL.', 'What GRPS reviews', '#/step/review'],
  pending: ['The principal has not decided yet. Partners should confirm the available budget with the principal.', 'How decisions work', '#/step/approve'],
  review: ['OEL has not recorded a review decision yet.', 'What GRPS reviews', '#/step/review'],
  approved: ['Moving forward is not cleared to launch. A signed MOU, cleared background checks, and Board approval when the budget is over the threshold come first.', 'Get cleared to launch', '#/step/clear'],
  declined: ['The school chose not to take this program on, most often because of available funding. Talk with the principal about what the building can support.', 'Plan the right program', '#/step/plan'],
  denied: ['This proposal was not approved. Talk with OEL about whether a different approach could meet the need.', 'Plan the right program', '#/step/plan']
};

function fmtDate(v) {
  const s = String(v || '').trim(); let m = s.match(/^(\d{4})-(\d{2})-(\d{2})/), d = null;
  if (m) d = new Date(+m[1], +m[2] - 1, +m[3]);
  else if ((m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/))) d = new Date(+(m[3].length === 2 ? '20' + m[3] : m[3]), +m[1] - 1, +m[2]);
  return d && !isNaN(d) ? d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : s;
}
const snapshotNote = () => `<p class="snap-note">From a snapshot of the 2026–27 Master Program Doc${window.EXTENDED_DAY_TRACKER_DATE ? ' taken ' + fmtDate(window.EXTENDED_DAY_TRACKER_DATE) : ''}. The Master Program Doc is the official, most current record. Budgets are shown as ranges; programs over $31,321 need Finance Committee review and Board of Education approval.</p>`;
const linkBtns = (list, cls = 'next-link') => list.map(([t, h]) => `<a class="${cls}" href="${h}">${esc_(t)} <span aria-hidden="true">→</span></a>`).join('');

/* ---------- Views ---------- */
function panelHead(p) { return `<p class="eyebrow">${p.ey}</p><h1 tabindex="-1">${p.title}</h1><div class="why"><b>Why this matters</b><br>${p.why}</div>`; }
function actionGrid(p) { return p.actions ? `<div class="actiongrid">${p.actions.map(x => `<div class="action"><b>${x[0]}</b><span>${x[1]}</span></div>`).join('')}</div>` : ''; }
function nextRow(p) { return p.next ? `<div class="next-row"><p class="eyebrow">GO TO THE WORK</p><div>${linkBtns(p.next)}</div></div>` : ''; }

function viewPage(key, arg, query) {
  const p = P[key]; let c = `<div class="panelwrap">${panelHead(p)}`;
  if (p.custom === 'portfolio') c += portfolioView();
  if (p.custom === 'partner') c += contactsView();
  c += actionGrid(p) + nextRow(p);
  if (p.custom === 'schools') c += schoolsView(arg);
  if (p.custom === 'guidance') c += guidanceView(arg);
  if (p.custom === 'faq') c += faqView(query);
  return c + '</div>';
}

/* From the OEL Vendor Staffing & Documentation Guide (Nov 20, 2026). */
const OEL_CONTACTS = [
  ['Dr. Kyle Krol', 'Director, Office of Extended Learning', 'Approval status, Board threshold, monthly submissions, staff paperwork and background checks', 'krolk@grps.org', '616-819-7394'],
  ['Laura Brevis', 'OEL Coordinator', 'Proposal reviews, onboarding, program updates, questions', 'brevisl@grps.org', '616-819-3136'],
  ['LyRee Adams', 'Academic OEL Coordinator', 'Proposal reviews, onboarding, program updates, questions', 'adamsl@grps.org', '616-819-2114'],
  ['Leonidia Tolbert', 'Secretary', 'Office operations and submissions', 'tolbertl@grps.org', '616-819-2165']
];
function contactsView() {
  return `<section class="contacts"><h2>Who to contact at OEL</h2><p>Budget questions start with the principal at your school. For everything else:</p><div class="contact-grid">${OEL_CONTACTS.map(([n, r, f, e, ph]) => `<div><b>${n}</b><small>${r}</small><span>${f}</span><a href="mailto:${e}">${e}</a><a href="tel:+1${ph.replace(/-/g, '')}">${ph}</a></div>`).join('')}</div></section>`;
}

function schoolsView(schoolSlug) {
  const school = schoolBySlug(schoolSlug || '');
  const opts = GRPS_SCHOOLS.map(n => `<option value="${slug(n)}"${n === school ? ' selected' : ''}>${esc_(n)}</option>`).join('');
  return `<div class="school-finder"><label for="schoolSelect"><b>Choose a school</b></label><select id="schoolSelect" class="check" onchange="go(this.value?'#/schools/'+this.value:'#/schools')"><option value="">Select a GRPS school…</option>${opts}</select><div id="schoolWorkspace" class="school-workspace">${school ? schoolWorkspace(school) : '<div class="school-empty"><b>Your school is the starting point.</b><span>Select a school to see its programs. Each school has its own link you can bookmark or share.</span></div>'}</div></div>`;
}

function schoolWorkspace(school) {
  const progs = programsFor(school).map(r => ({ r, st: programStatus(r) }));
  const n = k => progs.filter(p => p.st[0] === k).length;
  const order = { revise: 0, pending: 1, review: 2, approved: 3, declined: 4, denied: 5 };
  progs.sort((a, b) => order[a.st[0]] - order[b.st[0]]);
  const fld = (lab, v) => String(v || '').trim() ? `<span><small>${lab}</small>${esc_(String(v).trim())}</span>` : '';
  const list = progs.length ? `<div class="prog-list">${progs.map(({ r, st }) => {
    const ns = NEXT_STEP[st[0]];
    return `<details class="prog"><summary><span class="prog-name"><b>${esc_(r['Program Name'])}</b><small>${esc_(r['Provider'] || r['Vendor/ Principal in Charge'] || '')}${r['Category'] ? ' · ' + esc_(r['Category']) : ''}</small></span><span class="prog-st ${st[0]}">${st[1]}</span></summary><div class="prog-next"><p><b>What comes next:</b> ${ns[0]}</p><a href="${ns[2]}">${ns[1]} →</a></div><div class="prog-body">${fld('Provider', r['Provider'])}${fld('Budget range', r['Budget Range'])}${fld('Expected students', r['Expected Students'])}${fld('Start date', fmtDate(r['Start Date']))}${fld('Duration', r['Duration'])}${fld('Days / times', r['Days/Times'])}${fld('OEL review', r['OEL Approval'])}${fld('Principal decision', r['Principal Decision'])}${fld('Building', r['Building'])}</div></details>`;
  }).join('')}</div>` : `<div class="live-pending"><b>No programs for this school in the tracker snapshot.</b><span>If this school has a program, check the Master Program Doc, which is the official record.</span></div>`;
  return `<div class="school-head"><div><p class="eyebrow">MY SCHOOL</p><h2>${esc_(school)}</h2><p>Extended Day • 2026–27</p></div><a class="pill-btn" href="#/guidance">Open Program Guidance</a></div>
  <div class="school-dashboard"><div class="ok"><small>MOVING FORWARD</small><b>${n('approved')}</b></div><div class="warn"><small>NEEDS ATTENTION</small><b>${n('revise') + n('pending') + n('review')}</b><span>${n('revise')} revision · ${n('pending') + n('review')} awaiting decision</span></div><div><small>DECLINED</small><b>${n('declined') + n('denied')}</b></div></div>
  <p class="dash-note">${progs.length} programs proposed for this school. Moving forward is not clearance to launch; open a program to see what comes next.</p>
  <div class="program-area"><h3>Programs at ${esc_(school)}</h3>${list}${snapshotNote()}</div>`;
}

function portfolioView() {
  const rows = trackerRows(); if (!rows.length) return '';
  const st = rows.map(programStatus), c = (...k) => st.filter(s => k.includes(s[0])).length;
  const boe = rows.filter(r => /board approval/i.test(r['Budget Range'] || '')).length;
  const bySchool = GRPS_SCHOOLS.map(s => { const ps = programsFor(s).map(programStatus); return { s, total: ps.length, open: ps.filter(x => ['revise', 'pending', 'review'].includes(x[0])).length, ok: ps.filter(x => x[0] === 'approved').length, no: ps.filter(x => ['declined', 'denied'].includes(x[0])).length }; }).filter(x => x.total).sort((a, b) => b.open - a.open || b.total - a.total);
  const tile = (lab, v, cls) => `<div class="${cls || ''}"><small>${lab}</small><b>${v}</b></div>`;
  return `<section class="portfolio"><h2>District portfolio at a glance</h2><div class="school-dashboard six">${tile('PROPOSED', rows.length)}${tile('MOVING FORWARD', c('approved'), 'ok')}${tile('REVISION NEEDED', c('revise'), 'warn')}${tile('AWAITING DECISION', c('pending', 'review'), 'warn')}${tile('DECLINED', c('declined', 'denied'))}${tile('OVER BOARD THRESHOLD', boe)}</div>
  <details class="attention"><summary><b>Schools by open items</b><span>${bySchool.filter(x => x.open).length} schools have programs to revise or decide</span></summary><table><thead><tr><th scope="col">School</th><th scope="col">Proposed</th><th scope="col">Moving forward</th><th scope="col">Declined</th><th scope="col">Open</th></tr></thead><tbody>${bySchool.map(x => `<tr><td><a href="#/schools/${slug(x.s)}">${esc_(x.s)}</a></td><td>${x.total}</td><td>${x.ok}</td><td>${x.no}</td><td>${x.open ? `<b class="open-n">${x.open}</b>` : '0'}</td></tr>`).join('')}</tbody></table></details>${snapshotNote()}</section>`;
}

function guidanceView(k) {
  const g = GUIDANCE[k];
  const opts = Object.entries(GUIDANCE).map(([key, v]) => `<option value="${key}"${key === k ? ' selected' : ''}>${esc_(v.label)}</option>`).join('');
  const result = g ? `<span class="result-tag">${g.tag}</span><p>${g.text}</p>${linkBtns([g.go])}` : 'Choose a situation to see the current routing guidance.';
  return `<label for="q"><b>What are you trying to do?</b></label><select id="q" class="check" onchange="go(this.value?'#/guidance/'+this.value:'#/guidance')"><option value="">Choose a situation…</option>${opts}</select><div id="result" class="result" aria-live="polite">${result}</div>`;
}

function faqView(query) {
  const who = FAQ_AUDIENCES[query.get('who')] ? query.get('who') : 'all', topic = FAQ_TOPICS[query.get('topic')] ? query.get('topic') : 'all';
  const sel = (id, label, all, map, cur) => `<label><b>${label}</b><select id="${id}" class="check" onchange="renderFaq()"><option value="all">${all}</option>${Object.entries(map).map(([k, v]) => `<option value="${k}"${k === cur ? ' selected' : ''}>${v}</option>`).join('')}</select></label>`;
  return `<div class="faqtools"><input id="faqSearch" class="check" type="search" placeholder="Search FAQs…" aria-label="Search FAQs" oninput="renderFaq()"><div class="faq-selects">${sel('faqAudience', 'Who are you?', 'Everyone', FAQ_AUDIENCES, who)}${sel('faqTopic', 'Topic', 'All topics', FAQ_TOPICS, topic)}</div><p id="faqCount" class="faq-count" aria-live="polite"></p><div id="faqList" class="faqlist"></div></div>`;
}

function renderFaq() {
  const el = document.getElementById('faqList'); if (!el) return;
  const search = (document.getElementById('faqSearch')?.value || '').toLowerCase().trim();
  const audience = document.getElementById('faqAudience')?.value || 'all';
  const topic = document.getElementById('faqTopic')?.value || 'all';
  /* "Shared" questions apply to everyone, so they appear for principals and partners too. */
  const rows = FAQS.filter(x => (audience === 'all' || x.audience === audience || x.audience === 'shared') && (topic === 'all' || x.topic === topic) && (!search || (x.q + ' ' + x.a).toLowerCase().includes(search)));
  document.getElementById('faqCount').textContent = `${rows.length} of ${FAQS.length} questions`;
  el.innerHTML = rows.length ? rows.map(x => `<details><summary>${x.q}</summary><div class="faq-meta">${FAQ_AUDIENCES[x.audience]} · ${FAQ_TOPICS[x.topic]}</div><p>${x.a}</p></details>`).join('') : '<p>No FAQs match those filters. Try clearing the search or choosing “Everyone.”</p>';
}

function viewStage(k) {
  const s = STAGES[k], i = STAGE_ORDER.indexOf(k), prev = STAGE_ORDER[i - 1], next = STAGE_ORDER[i + 1];
  const cap = x => x[0].toUpperCase() + x.slice(1);
  return `<div class="panelwrap stage-detail"><p class="eyebrow">${s.phase} · STEP ${i + 1} OF ${STAGE_ORDER.length}</p><h1 tabindex="-1">${s.title}</h1><div class="why"><b>Why this matters</b><br>${s.why}</div><div class="stage-detail-grid"><div><small>WHAT IS REQUIRED?</small><p>${s.required}</p></div><div><small>WHAT DO I DO NEXT?</small><p>${s.next}</p></div><div class="route"><small>GO TO THE WORK</small><p>${s.route}</p><div>${linkBtns(s.go)}</div></div></div><nav class="stage-nav" aria-label="Journey steps">${prev ? `<a href="#/step/${prev}">← ${cap(prev)}</a>` : '<span></span>'}<a href="#/journey">All steps</a>${next ? `<a href="#/step/${next}">${cap(next)} →</a>` : '<span></span>'}</nav></div>`;
}

/* ---------- Routing ---------- */
const NAV_FOR = { schools: 'schools', guidance: 'guidance', faq: 'faq' };
function go(hash) { if (location.hash === hash) render(); else location.hash = hash; }
function home() { go('#/'); }
function show(k) { go('#/' + ({ status: 'schools', decision: 'guidance', stage: 'journey' }[k] || k)); }
function showStage(k) { go('#/step/' + k); }

function render() {
  const raw = location.hash.replace(/^#\/?/, ''), [path, qs] = raw.split('?'), [key, arg] = path.split('/');
  const query = new URLSearchParams(qs || '');
  const homeEl = document.getElementById('home'), panel = document.getElementById('panel'), content = document.getElementById('content');
  let html = null, title = '';
  if (P[key]) { html = viewPage(key, arg, query); title = P[key].ey.toLowerCase().replace(/(^|[\s/])\S/g, t => t.toUpperCase()); if (key === 'schools' && schoolBySlug(arg || '')) title = schoolBySlug(arg); }
  else if (key === 'step' && STAGES[arg]) { html = viewStage(arg); title = STAGES[arg].title; }
  const isHome = html === null;
  homeEl.classList.toggle('active', isHome); panel.classList.toggle('active', !isHome);
  document.querySelectorAll('nav [data-nav]').forEach(b => b.toggleAttribute('aria-current', b.dataset.nav === (isHome ? 'home' : NAV_FOR[key])));
  document.title = (isHome ? '' : title + ' · ') + 'GRPS Extended Day Operations Hub';
  if (isHome) {
    content.innerHTML = '';
    if (key === 'journey') { const j = document.querySelector('.phasejourney'); j && j.scrollIntoView(); }
    else if (key === 'start') { const r = document.getElementById('roleStart'); r && r.scrollIntoView(); }
    else scrollTo(0, 0);
    return;
  }
  content.innerHTML = html;
  if (key === 'faq') renderFaq();
  scrollTo(0, 0);
  if (render.ready) { const h = content.querySelector('h1'); h && h.focus({ preventScroll: true }); }
}
window.addEventListener('hashchange', render);
render(); render.ready = true;
