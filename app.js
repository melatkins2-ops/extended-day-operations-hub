const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const pages=$$('.page');
function go(id){pages.forEach(p=>p.classList.toggle('active',p.id===id));window.scrollTo(0,0);if(id==='status'){renderPrograms();}}
$$('[data-go]').forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.go;if(['home','status','change','faq','action','whatsnew','nextstep','guide','decisions'].includes(id))go(id);else showContent(id)}));

const content={
plan:['PLAN A PROGRAM','Start with scholar need, then design the program.',['Identify the scholar need or opportunity.','Define target scholars and realistic projected participation.','Define program model, provider, schedule, site, staffing and intended outcomes.','Use the current Extended Day application.']],
fund:['BUDGET & FUNDING','Identify the funding source before applying funding-specific rules.',['Confirm current allocation.','Identify 31a, 32n, 21st CCLC, Other, or Blended funding.','Build the proposed budget and calculate proposed cost per scholar.','Confirm allowability before committing funds.','Confirmed BOE threshold for this work: $30,321.']],
launch:['APPROVAL & LAUNCH','Approved and cleared to launch are not the same status.',['Confirm program decision.','Confirm final budget and funding.','Complete MOU/vendor requirements.','Complete BOE approval when applicable.','Do not launch while required approvals remain incomplete.']],
operate:['RUN MY PROGRAM','Manage the approved program without creating parallel processes.',['Track accurate attendance.','Use existing supply and inventory processes.','Use existing invoice/documentation procedures.','Follow closure/emergency procedures when needed.']],
evaluate:['MONITOR & EVALUATE','Use existing observation and evaluation tools.',['Review participation and delivery against what was approved.','Use the existing Observation Tool.','Assign action owner, due date and follow-up when improvement is needed.','Evaluate participation, implementation, quality, outcomes, investment, operations and partner performance.']],
vendor:['WORKING WITH A VENDOR','Use the existing vendor process from intake through closeout.',['Vendor intake/review.','Program and budget approval.','Insurance, staffing/background and other applicable requirements.','MOU/agreement.','Attendance, invoice and documentation expectations.','Evaluation and closeout.']],
resources:['FORMS & RESOURCES','Use authoritative GRPS tools rather than duplicate forms.',['2026–27 Submission Tracker','Current Extended Day application','School/quadrant allocation information','Vendor Intake / Third-Party Vendor Protocol','MOU / approval materials','Attendance resources','Supply ordering and inventory','Observation Tool','Vendor Evaluation Template','Extended Day Evaluation Plan','Closure / emergency SOP']],
faq:['2026–27 FAQ','Extended Day changes, approvals, funding, operations, monitoring, and next steps.',["Why is GRPS changing the Extended Day process? — GRPS is strengthening how programs are planned, reviewed, approved, monitored, and evaluated. The goal is clearer decisions, stronger alignment to scholar need, intentional use of resources, and better information about participation and results—not more paperwork.", "What is changing for 2026–27? — Greater emphasis is being placed on scholar need, projected participation, program design, available funding, total and per-scholar cost, funding-source requirements, partner responsibilities, approval status, actual attendance, observations, spending, and results.", "Does every school receive the same Extended Day allocation? — No. Schools should use current district allocation information when planning. Available funds do not automatically mean every proposed expense or program will be approved.", "Should schools design a program around the amount of money available? — No. Start with Scholar Need → Program Design → Expected Participation → Cost → Funding.", "What will be considered when a program is reviewed? — Need, design, expected participation, schedule/duration, outcomes, total cost, per-scholar cost, staffing, vendor/administrative costs, funding requirements, feasibility, prior performance when available, and evaluation approach.", "Why is per-scholar cost being reviewed? — It provides another lens on the proposed investment: Total Proposed Cost ÷ Expected Participating Scholars. It is one factor, not an automatic approval rule.", "Is there a maximum allowable cost per scholar? — The reviewed GRPS materials do not establish one universal maximum. Cost should be considered with design, participation, outcomes, funding requirements, and overall investment.", "What is the Board of Education approval threshold? — The confirmed GRPS threshold for this process is $30,321. Programs above the applicable threshold require the additional approval pathway. Other approvals may still apply below the threshold.", "Does submitting an application mean the program is approved? — No. Submission begins review. Program decisions should use Approved, Approved with Conditions, Revision Required, or Not Recommended.", "Is an approved program automatically ready to begin? — Not necessarily. Program approval and clearance to launch are separate. Final budget, funding, BOE approval when required, MOU, onboarding, site readiness, staffing, and other requirements may still be outstanding.", "Can a school use an outside vendor or community partner? — Yes. Existing GRPS procedures require intake/review and may include program information, schedule, reporting capacity, staff/background requirements, insurance, outcomes, MOU, and other documentation.", "Are all Extended Day programs funded through 31a? — No. Programs may use 31a, 32n, 21st CCLC, other sources, or blended funding. Identify the funding source before final approval.", "How does Section 32n affect Extended Day? — GRPS has partnered with outside organizations on 32n applications. An outside organization may be the applicant/fiscal agent while GRPS serves as a program or site partner. GRPS expectations and final grant/partnership requirements both apply.", "What happens if a 32n or other grant award is different from the application? — Reconcile the final award before implementation: amount, sites, budget, dosage, participation, activities, outcomes, reporting, and responsibilities. The final award/approved operating plan controls.", "What attendance information is required? — Maintain accurate attendance and compare projected participation, enrollment, actual scholars served, and attendance patterns. Attendance may also support invoices, evaluation, or grant requirements.", "What happens if participation is much lower than projected? — Identify the cause, understand barriers, adjust when appropriate, monitor the response, and involve OEL if concerns persist. GRPS has not established one automatic districtwide cancellation percentage. On Track / Watch / Action Required is the recommended management approach pending leadership decision.", "Can a vendor invoice GRPS for programming that did not occur? — No. Existing procedures require invoices to reflect services actually delivered and be supported by applicable documentation.", "What if something changes after the program is approved? — Material changes involving budget, funding source, vendor/partner, design, schedule, location, staffing model, projected participation, or other major elements should be routed through OEL. The proposed routing levels are Document Only, OEL Review, Funding/MOU Review, and Additional Approval; final districtwide routing standards still require leadership action.", "What should be confirmed before Day 1? — Program and budget approval, funding, MOU/agreements, required clearance/onboarding, staffing, sites, schedule, family communication, attendance/data expectations, invoicing expectations, supplies/technology, and applicable safety/operational readiness.", "What are the supervision expectations? — A districtwide GRPS baseline is still a leadership decision. Any stricter licensing, age, activity, facility, grant, provider, or program requirement governs when applicable.", "What are the dismissal, transportation, and late-pickup expectations? — A minimum districtwide framework is still being finalized. Before launch, programs should have a defined dismissal process, authorized release/pickup expectations, transportation responsibility, late-pickup procedure, family contact process, and escalation route.", "What happens if a program cannot operate on a scheduled day? — Use the existing closure/emergency procedure. Follow applicable notification, supervision, documentation, make-up, and billing requirements. GRPS should not be billed for programming that did not occur.", "What documentation is expected for payment and operations? — Use existing vendor invoice procedures and applicable attendance, lesson/topic, staffing, receipt/inventory, MOU, and funding-source documentation.", "How are supplies, equipment, and district property handled? — Use existing ordering and inventory processes: Approve → Purchase → Receive → Inventory → Use → Store/Return.", "How will programs be monitored? — Use existing observation and evaluation tools to review participation, implementation, engagement, quality, staffing, alignment, documentation, funding/program requirements, and follow-up actions. Management follow-up should identify an action owner, due date, follow-up, and resolution.", "How will GRPS decide whether a program should continue? — Use multiple evidence domains: participation, implementation, quality, outcomes, investment, operations, and partner performance. The next-year recommendation should be Continue, Improve, Expand, or Redesign/End; no single measure determines the decision.", "What happens at program closeout? — Finalize attendance, documentation, invoices, expenditures, evaluation, corrective actions, inventory/property, unresolved concerns, and the next-year recommendation.", "Where will schools find forms, procedures, and program status? — The Extended Day Operations Hub should be the primary entry point and link to current authoritative tools rather than creating duplicate forms or parallel processes.", "Who should I contact when I am unsure? — Start with the Office of Extended Learning. OEL can route questions requiring State & Federal Programs, Finance, Human Resources, Legal, another district department, or an external grant partner."]]
};
function showContent(key){const d=content[key];$('#contentEyebrow').textContent=d[0];$('#contentTitle').textContent=d[0];$('#contentIntro').textContent=d[1];$('#contentBody').innerHTML='<div class="contentlist">'+d[2].map((x,i)=>`<div class="contentitem"><b>${i+1}.</b> ${x}</div>`).join('')+'</div>';go('content')}

function renderPrograms(q=''){const list=$('#programList');if(!list)return;const term=(q||$('#programSearch').value||'').toLowerCase();const rows=PROGRAMS.filter(p=>Object.values(p).join(' ').toLowerCase().includes(term));list.innerHTML=rows.length?rows.map((p,i)=>`<div class="programrow"><span>${p.school}</span><button data-prog="${PROGRAMS.indexOf(p)}">${p.program}</button><span>${p.provider}</span><span class="badge ${p.decision.startsWith('Approve')?'approve':'revise'}">${p.decision}</span></div>`).join(''):'<div class="result muted">No matching program found.</div>';$$('[data-prog]').forEach(b=>b.onclick=()=>showProgram(PROGRAMS[+b.dataset.prog]));}
function showProgram(p){$('#programDetail').innerHTML=`<div class="detail"><p class="eyebrow">PROGRAM DETAIL</p><h2>${p.program}</h2><p>${p.school} • ${p.provider}</p><div class="metrics"><div class="metric"><small>DECISION</small><b>${p.decision}</b></div><div class="metric"><small>OEL</small><b>${p.oel}</b></div><div class="metric"><small>MOU</small><b>${p.mou}</b></div><div class="metric"><small>REVIEW</small><b>${p.tier}</b></div><div class="metric"><small>START</small><b>${p.start}</b></div><div class="metric"><small>DURATION</small><b>${p.duration}</b></div></div><p><b>Schedule:</b> ${p.schedule}</p><p><b>Outcomes connection:</b> ${p.outcomes}</p><p><b>Threshold shown in source:</b> ${p.threshold}</p>${p.threshold.includes('31,320')?'<p class="revise"><b>Source correction needed:</b> this source label conflicts with the confirmed $30,321 BOE threshold.</p>':''}</div>`}
$('#programSearch').addEventListener('input',e=>renderPrograms(e.target.value));

SCHOOLS.forEach((s,i)=>$('#schoolSelect').insertAdjacentHTML('beforeend',`<option value="${i}">${s.school}</option>`));
$('#schoolSelect').addEventListener('change',e=>{const el=$('#schoolResult');if(e.target.value===''){el.className='result muted';el.textContent='Choose a school to see its budget and program decisions.';return}const s=SCHOOLS[+e.target.value];el.className='result';el.innerHTML=`<h2>${s.school}</h2><p>${s.principal}</p><div class="metrics"><div class="metric"><small>REQUESTED</small><b>${s.requested}</b></div><div class="metric"><small>AVAILABLE BUDGET</small><b>${s.budget}</b></div><div class="metric"><small>REMAINING</small><b>${s.remaining}</b></div></div>${s.items.map(x=>`<div class="programrow"><span>${x[0]}</span><span>${x[1]}</span><span class="badge ${x[2].toLowerCase()}">${x[2]}</span><span></span></div>`).join('')}<p><b>Revision due:</b> ${s.due}</p>`});

const changes={
'Budget':['FUNDING / MOU REVIEW','Check total cost, line items, funding source, vendor scope, MOU, and whether approval requirements change.'],
'Funding source':['FUNDING REVIEW','Do not switch funding sources informally. Route through OEL and applicable funding staff.'],
'Schedule':['OEL REVIEW','Meaningful schedule or dosage changes require review; minor operational adjustments may only need documentation.'],
'Location':['OEL REVIEW','Check site readiness, safety/licensing implications, agreement terms, and program approval.'],
'Staffing':['OEL REVIEW','Check budget, supervision, clearance, MOU, and funding implications.'],
'Vendor / partner':['ADDITIONAL REVIEW','A new provider may require intake, clearance, insurance, MOU, budget, and approval review.'],
'Program design':['OEL REVIEW','Determine whether the change materially alters the approved program or award requirements.'],
'Participation':['PROGRAM REVIEW','Compare projected and actual participation, identify barriers, adjust, monitor, and escalate persistent concerns.'],
'Program cannot operate today':['USE CLOSURE SOP','Follow the existing closure/emergency procedure and applicable notification, supervision, documentation, make-up, and billing rules.']
};
Object.entries(changes).forEach(([k,v])=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>{$('#changeResult').className='result';$('#changeResult').innerHTML=`<p class="eyebrow">${v[0]}</p><h2>${k}</h2><p>${v[1]}</p>`};$('#changeButtons').appendChild(b)});

$('#findBtn').onclick=()=>{const q=$('#homeSearch').value;go('status');$('#programSearch').value=q;renderPrograms(q);$('#programSearch').focus()};
$('#homeSearch').addEventListener('keydown',e=>{if(e.key==='Enter')$('#findBtn').click()});
renderPrograms();

// V10 focused FAQ: topic landing, quick answers, reveal-on-demand
const FAQ_DATA=[{"cat": "Start Here", "q": "Why is GRPS changing the Extended Day process?", "a": "GRPS is strengthening how programs are planned, reviewed, approved, monitored, and evaluated. The goal is clearer decisions, stronger alignment to scholar need, intentional use of resources, and better information about participation and results—not more paperwork.", "flag": ""}, {"cat": "Start Here", "q": "What is changing for 2026–27?", "a": "Greater emphasis is being placed on scholar need, projected participation, program design, available funding, total and per-scholar cost, funding-source requirements, partner responsibilities, approval status, actual attendance, observations, spending, and results.", "flag": ""}, {"cat": "Plan & Review", "q": "Does every school receive the same Extended Day allocation?", "a": "No. Schools should use current district allocation information when planning. Available funds do not automatically mean every proposed expense or program will be approved.", "flag": ""}, {"cat": "Plan & Review", "q": "Should schools design a program around the amount of money available?", "a": "No. Start with Scholar Need → Program Design → Expected Participation → Cost → Funding.", "flag": ""}, {"cat": "Plan & Review", "q": "What will be considered when a program is reviewed?", "a": "Need, design, expected participation, schedule and duration, outcomes, total cost, per-scholar cost, staffing, vendor or administrative costs, funding requirements, feasibility, prior performance when available, and evaluation approach.", "flag": ""}, {"cat": "Budget & Funding", "q": "Why is per-scholar cost being reviewed?", "a": "It provides another lens on the proposed investment. Calculate Total Proposed Cost ÷ Expected Participating Scholars. It is one factor, not an automatic approval rule.", "flag": ""}, {"cat": "Budget & Funding", "q": "Is there a maximum allowable cost per scholar?", "a": "The reviewed GRPS materials do not establish one universal maximum. Cost should be considered with design, participation, outcomes, funding requirements, and overall investment.", "flag": ""}, {"cat": "Approval & Launch", "q": "What is the Board of Education approval threshold?", "a": "The confirmed GRPS threshold for this process is $30,321. Programs above the applicable threshold require the additional approval pathway. Other approvals may still apply below the threshold.", "flag": ""}, {"cat": "Approval & Launch", "q": "Does submitting an application mean the program is approved?", "a": "No. Submission begins review. Program decisions should use Approved, Approved with Conditions, Revision Required, or Not Recommended.", "flag": ""}, {"cat": "Approval & Launch", "q": "Is an approved program automatically ready to begin?", "a": "No. Program approval and clearance to launch are separate. Final budget, funding, BOE approval when required, MOU, onboarding, site readiness, staffing, and other requirements may still be outstanding.", "flag": ""}, {"cat": "Approval & Launch", "q": "What should be confirmed before Day 1?", "a": "Confirm program and budget approval, funding, MOU or agreements, required clearance and onboarding, staffing, sites, schedule, family communication, attendance and data expectations, invoicing expectations, supplies and technology, and applicable safety or operational readiness.", "flag": ""}, {"cat": "Partners & Vendors", "q": "Can a school use an outside vendor or community partner?", "a": "Yes. Existing GRPS procedures require intake and review and may include program information, schedule, reporting capacity, staff and background requirements, insurance, outcomes, MOU, and other documentation.", "flag": ""}, {"cat": "Budget & Funding", "q": "Are all Extended Day programs funded through 31a?", "a": "No. Programs may use 31a, 32n, 21st CCLC, other sources, or blended funding. Identify the funding source before final approval.", "flag": ""}, {"cat": "32n & Grants", "q": "How does Section 32n affect Extended Day?", "a": "GRPS has partnered with outside organizations on 32n applications. An outside organization may be the applicant or fiscal agent while GRPS serves as a program or site partner. GRPS expectations and final grant or partnership requirements both apply.", "flag": ""}, {"cat": "32n & Grants", "q": "What happens if a 32n or other grant award is different from the application?", "a": "Reconcile the final award before implementation: amount, sites, budget, dosage, participation, activities, outcomes, reporting, and responsibilities. The final award or approved operating plan controls.", "flag": ""}, {"cat": "Operate", "q": "What attendance information is required?", "a": "Maintain accurate attendance and compare projected participation, enrollment, actual scholars served, and attendance patterns. Attendance may also support invoices, evaluation, or grant requirements.", "flag": ""}, {"cat": "Operate", "q": "What happens if participation is much lower than projected?", "a": "Identify the cause, understand barriers, adjust when appropriate, monitor the response, and involve OEL if concerns persist. GRPS has not established one automatic districtwide cancellation percentage. On Track / Watch / Action Required is the recommended management approach pending leadership decision.", "flag": "Leadership decision pending"}, {"cat": "Partners & Vendors", "q": "Can a vendor invoice GRPS for programming that did not occur?", "a": "No. Existing procedures require invoices to reflect services actually delivered and be supported by applicable documentation.", "flag": ""}, {"cat": "Changes", "q": "What if something changes after the program is approved?", "a": "Material changes involving budget, funding source, vendor or partner, design, schedule, location, staffing model, projected participation, or other major elements should be routed through OEL. The proposed routing levels are Document Only, OEL Review, Funding/MOU Review, and Additional Approval.", "flag": "Leadership decision pending"}, {"cat": "Safety & Logistics", "q": "What are the supervision expectations?", "a": "A districtwide GRPS baseline is still a leadership decision. Any stricter licensing, age, activity, facility, grant, provider, or program requirement governs when applicable.", "flag": "Leadership decision pending"}, {"cat": "Safety & Logistics", "q": "What are the dismissal, transportation, and late-pickup expectations?", "a": "A minimum districtwide framework is still being finalized. Before launch, programs should have a defined dismissal process, authorized release and pickup expectations, transportation responsibility, late-pickup procedure, family contact process, and escalation route.", "flag": "Leadership decision pending"}, {"cat": "Safety & Logistics", "q": "What happens if a program cannot operate on a scheduled day?", "a": "Use the existing closure or emergency procedure. Follow applicable notification, supervision, documentation, make-up, and billing requirements. GRPS should not be billed for programming that did not occur.", "flag": ""}, {"cat": "Operate", "q": "What documentation is expected for payment and operations?", "a": "Use existing vendor invoice procedures and applicable attendance, lesson or topic, staffing, receipt and inventory, MOU, and funding-source documentation.", "flag": ""}, {"cat": "Operate", "q": "How are supplies, equipment, and district property handled?", "a": "Use existing ordering and inventory processes: Approve → Purchase → Receive → Inventory → Use → Store/Return.", "flag": ""}, {"cat": "Monitor & Close", "q": "How will programs be monitored?", "a": "Use existing observation and evaluation tools to review participation, implementation, engagement, quality, staffing, alignment, documentation, funding or program requirements, and follow-up actions. Management follow-up should identify an action owner, due date, follow-up, and resolution.", "flag": ""}, {"cat": "Monitor & Close", "q": "How will GRPS decide whether a program should continue?", "a": "Use multiple evidence domains: participation, implementation, quality, outcomes, investment, operations, and partner performance. The next-year recommendation should be Continue, Improve, Expand, or Redesign/End. No single measure determines the decision.", "flag": ""}, {"cat": "Monitor & Close", "q": "What happens at program closeout?", "a": "Finalize attendance, documentation, invoices, expenditures, evaluation, corrective actions, inventory or property, unresolved concerns, and the next-year recommendation.", "flag": ""}, {"cat": "Help & Resources", "q": "Where will schools find forms, procedures, and program status?", "a": "The Extended Day Operations Hub should be the primary entry point and link to current authoritative tools rather than creating duplicate forms or parallel processes.", "flag": ""}, {"cat": "Help & Resources", "q": "Who should I contact when I am unsure?", "a": "Start with the Office of Extended Learning. OEL can route questions requiring State & Federal Programs, Finance, Human Resources, Legal, another district department, or an external grant partner.", "flag": ""}];
const FAQ_TOPICS=[
  ['I am planning or revising a program',['Start Here','Plan & Review'],'What changed, what to consider, and how to start'],
  ['I need an approval or want to launch',['Approval & Launch'],'BOE threshold, decisions, clearance, and Day 1'],
  ['I have a budget or funding question',['Budget & Funding','32n & Grants'],'31a, 32n, 21st CCLC, cost, and grant changes'],
  ['I am working with a partner or vendor',['Partners & Vendors'],'Review, MOU, invoices, and responsibilities'],
  ['My program is already running',['Operate','Safety & Logistics'],'Attendance, supplies, closures, and operations'],
  ['Something changed or I need to close out',['Changes','Monitor & Close'],'Route a change, monitor, evaluate, and close']
];
let faqMode='start';
function esc2(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function faqCard(x){
 return `<details class="faq-card"><summary><span>${esc2(x.q)}</span><i>+</i></summary><div class="faq-card-answer">${x.flag?`<b class="decision-flag">${esc2(x.flag)}</b>`:''}<p>${esc2(x.a)}</p></div></details>`;
}
function showFaqList(label,items){
 faqMode='browse';
 document.getElementById('faqStart').hidden=true;
 document.getElementById('faqBrowse').hidden=false;
 document.getElementById('faqBrowseLabel').textContent=label;
 document.getElementById('faqCount').textContent=`${items.length} answer${items.length===1?'':'s'}`;
 document.getElementById('faqEmpty').hidden=items.length>0;
 document.getElementById('faqResults').innerHTML=items.map(faqCard).join('');
 window.scrollTo({top:0,behavior:'smooth'});
}
function showFaqTopics(){
 faqMode='start';
 document.getElementById('faqStart').hidden=false;
 document.getElementById('faqBrowse').hidden=true;
 document.getElementById('faqSearch').value='';
}
const topicWrap=document.getElementById('faqTopicCards');
if(topicWrap){
 topicWrap.innerHTML=FAQ_TOPICS.map((t,i)=>`<button data-topic="${i}"><span class="topic-dot"></span><b>${esc2(t[0])}</b><span>${esc2(t[2])}</span><strong>Show me →</strong></button>`).join('');
 topicWrap.querySelectorAll('button').forEach(b=>b.onclick=()=>{const t=FAQ_TOPICS[+b.dataset.topic];showFaqList(t[0],FAQ_DATA.filter(x=>t[1].includes(x.cat))) });
}
const quickQs=['What is the Board of Education approval threshold?','Is an approved program automatically ready to begin?','Are all Extended Day programs funded through 31a?','What if something changes after the program is approved?'];
const quick=document.getElementById('faqQuick');
if(quick)quick.innerHTML='<button class="faq-help-cta" onclick="document.getElementById(\'faqSearch\').focus()"><b>Not sure where to start?</b><span>Search one word—budget, vendor, 32n, attendance, transportation, approval…</span></button>';
function searchFAQ(){
 const q=(document.getElementById('faqSearch').value||'').trim().toLowerCase();
 if(!q){showFaqTopics();return}
 const items=FAQ_DATA.filter(x=>`${x.q} ${x.a} ${x.cat}`.toLowerCase().includes(q));
 showFaqList(`Search: “${document.getElementById('faqSearch').value.trim()}”`,items);
}
document.getElementById('faqSearchBtn')?.addEventListener('click',searchFAQ);
document.getElementById('faqSearch')?.addEventListener('keydown',e=>{if(e.key==='Enter')searchFAQ()});
document.getElementById('faqBackTopics')?.addEventListener('click',showFaqTopics);

// V19 next-action resolver: resolves common real-world situations without forcing users to search.
const V19_RESOLUTIONS={
 approved:{label:'APPROVED PROGRAM',title:'Confirm launch readiness before Day 1.',text:'Approval is a program decision. Confirm that the budget/funding, required agreements or vendor steps, staffing, schedule/location, and other launch requirements are complete before the program begins.',go:'launch',cta:'Open launch readiness →'},
 revision:{label:'REVISION REQUESTED',title:'Update the item identified in the review.',text:'Use the review feedback to revise the affected part of the program or budget, then return it through the established review route. Do not rebuild unrelated parts of the submission unless the feedback requires it.',go:'plan',cta:'Open plan/revise workflow →'},
 budget:{label:'BUDGET / FUNDING CHANGE',title:'Recheck the funding and approval implications.',text:'A budget or funding-source change can affect allowability, the approved amount, and whether another approval step is needed. Route the change before treating the revised budget as final.',go:'fund',cta:'Open funding guidance →'},
 partner:{label:'PARTNER / VENDOR CHANGE',title:'Recheck responsibilities, agreements, and purchasing steps.',text:'A partner or vendor change may affect the scope of work, agreement/MOU, purchasing requirements, budget, and launch readiness. Route the change rather than substituting a provider informally.',go:'change',cta:'Route the change →'},
 schedule:{label:'PROGRAM CHANGE',title:'Route the change and check whether the original decision is affected.',text:'Changes to schedule, location, staffing, or participation can affect implementation and the basis on which the program was reviewed. Document the change and use the change route.',go:'change',cta:'Route the change →'},
 running:{label:'PROGRAM OPERATING',title:'Track participation, delivery, documentation, and emerging issues.',text:'Once the program is running, keep participation/attendance, implementation, required documentation, expenditures, and significant changes visible so monitoring and closeout are based on actual delivery.',go:'operate',cta:'Open operating guidance →'}
};
document.querySelectorAll('[data-resolve]').forEach(btn=>btn.addEventListener('click',()=>{
 const x=V19_RESOLUTIONS[btn.dataset.resolve], box=document.getElementById('v19Resolution');
 if(!x||!box)return;
 box.hidden=false;
 box.innerHTML=`<span>${x.label}</span><h2>${x.title}</h2><p>${x.text}</p><button data-resolution-go="${x.go}">${x.cta}</button>`;
 box.querySelector('button').addEventListener('click',()=>showContent(x.go));
 box.scrollIntoView({behavior:'smooth',block:'nearest'});
}));

// V20 role-aware prioritization. Nothing is hidden; the role only changes emphasis.
const V20_ROLE_HINTS={
 school:'Prioritizing program status, launch readiness, changes, funding, and school actions.',
 partner:'Prioritizing agreements, vendor responsibilities, budget/funding, launch, and documentation.',
 csa:'Prioritizing review, decision status, funding, changes, monitoring, and closeout.',
 general:'Showing the Decision Center without role-based emphasis.'
};
document.querySelectorAll('[data-role]').forEach(b=>b.addEventListener('click',()=>{
 const role=b.dataset.role;
 document.body.dataset.role=role;
 document.querySelectorAll('[data-role]').forEach(x=>x.classList.toggle('active',x===b));
 const hint=document.getElementById('v20RoleHint'); if(hint)hint.textContent=V20_ROLE_HINTS[role];
}));

// V20 branching decision router. It avoids inventing a final policy where leadership decisions remain pending.
const V20_TREE={
 start:{q:'What best describes your situation?',choices:[
  ['My program was approved','approved'],['We were asked to revise something','revision'],
  ['Something changed after submission/approval','changed'],['My program is already running','running']
 ]},
 changed:{q:'What changed?',choices:[
  ['Budget or funding','budgetChange'],['Partner or vendor','partnerChange'],
  ['Staffing, schedule, or location','opsChange'],['Participation / enrollment','participationChange']
 ]},
 budgetChange:{q:'Did the total cost or funding source change?',choices:[
  ['Yes','budgetMaterial'],['No — allocation within the approved budget changed','budgetInternal'],['I am not sure','budgetUnknown']
 ]},
 partnerChange:{q:'Is this a new or replacement partner/vendor?',choices:[
  ['Yes','partnerNew'],['No — scope/responsibility changed','partnerScope'],['I am not sure','partnerUnknown']
 ]},
 approved:{result:['APPROVED PROGRAM','Confirm launch readiness before Day 1.','Approval is a decision point. Confirm funding/budget, applicable agreements or vendor steps, staffing, schedule/location, and other launch requirements before beginning.','launch','Open launch readiness →','district']},
 revision:{result:['REVISION REQUESTED','Revise only what the review identified.','Use the review feedback to update the affected program or budget item and return it through the established review route. Avoid rebuilding unrelated parts unless the feedback requires it.','plan','Open plan/revise workflow →','district']},
 budgetMaterial:{result:['BUDGET / FUNDING CHANGE','Route the change before treating the revised budget as final.','A change in total cost or funding source can affect allowability, the approved amount, and approval steps. Recheck the funding rules and BOE implications where applicable.','fund','Open budget & funding →','funding']},
 budgetInternal:{result:['BUDGET ADJUSTMENT','Document the adjustment and verify whether re-review is required.','The current source materials do not establish one universal rule for every internal budget adjustment. Use the funding guidance and change route rather than assuming no review is needed.','change','Route the change →','pending']},
 budgetUnknown:{result:['BUDGET QUESTION','Start with the funding source and approved amount.','Compare the proposed change with the approved budget and funding rules. If the effect on approval is unclear, route the change for review.','fund','Check funding guidance →','funding']},
 partnerNew:{result:['PARTNER / VENDOR CHANGE','Recheck agreement, purchasing, budget, and launch implications.','A new or replacement provider can affect scope, agreement/MOU, purchasing requirements, budget, and readiness. Route the change before substituting the provider.','change','Route partner/vendor change →','district']},
 partnerScope:{result:['PARTNER SCOPE CHANGE','Document the changed responsibility and route it for review.','A material scope or responsibility change may affect the reviewed program, agreement, budget, or monitoring expectations.','vendor','Open partner/vendor guidance →','district']},
 partnerUnknown:{result:['PARTNER / VENDOR QUESTION','Do not assume the original approval covers the change.','Review the partner/vendor guidance and route the issue if the provider, scope, agreement, purchasing, or budget may be affected.','vendor','Open partner/vendor guidance →','district']},
 opsChange:{result:['PROGRAM OPERATING CHANGE','Document and route the change.','Staffing, schedule, or location changes can affect implementation and the basis of the original review. The current materials support routing material changes rather than silently absorbing them.','change','Route the change →','district']},
 participationChange:{result:['PARTICIPATION CHANGE','Compare actual participation with the approved plan and monitor the effect.','Participation is part of implementation and results. Where low participation triggers a specific intervention or closure decision, use the Decision Center only if that leadership standard has been finalized.','operate','Open operating guidance →','pending']},
 running:{result:['PROGRAM OPERATING','Keep actual delivery visible.','Track participation/attendance, implementation, required documentation, expenditures, and significant changes so monitoring and closeout reflect what actually occurred.','operate','Open operating guidance →','practice']}
};
let v20Node='start',v20Trail=[];
function renderV20(node='start'){
 v20Node=node; const data=V20_TREE[node],q=document.getElementById('v20Question'),c=document.getElementById('v20Choices'),r=document.getElementById('v20Result'),trail=document.getElementById('v20Trail'),restart=document.getElementById('v20Restart');
 if(!q||!c||!r)return;
 restart.hidden=node==='start'&&v20Trail.length===0;
 trail.innerHTML='<span>START</span>'+v20Trail.map(x=>`<i>→</i><b>${x}</b>`).join('');
 if(data.result){
   const [label,title,text,go,cta,type]=data.result;
   q.innerHTML='';c.innerHTML='';r.hidden=false;
   r.innerHTML=`<span class="v20-type ${type}">${type.toUpperCase()}</span><small>${label}</small><h2>${title}</h2><p>${text}</p><button data-v20-go="${go}">${cta}</button>`;
   r.querySelector('button').onclick=()=>showContent(go);
 }else{
   r.hidden=true;q.innerHTML=`<h2>${data.q}</h2>`;
   c.innerHTML=data.choices.map(([label,next])=>`<button data-next="${next}">${label}<strong>→</strong></button>`).join('');
   c.querySelectorAll('button').forEach(btn=>btn.onclick=()=>{v20Trail.push(btn.childNodes[0].textContent.trim());renderV20(btn.dataset.next)});
 }
}
document.getElementById('v20Restart')?.addEventListener('click',()=>{v20Trail=[];renderV20('start')});
renderV20('start');

// V21 honest status interpreter: useful now without fabricating program-specific data.
const V21_STATUS={
 submitted:{badge:'SUBMITTED',title:'Awaiting review.',text:'The submission is in the review stage. Keep the submitted program and budget available and respond to review questions or requested revisions when they are issued.',owner:'CSA review → school/partner response as needed',go:'plan',cta:'Open planning & review →'},
 revision:{badge:'REVISION NEEDED',title:'Address the review feedback.',text:'Revise the identified program or budget item and return it through the established review route. Focus on the requested change rather than rebuilding unrelated parts.',owner:'School / partner',go:'plan',cta:'Open revision workflow →'},
 approved:{badge:'APPROVED',title:'Move from decision to launch readiness.',text:'Approval does not by itself confirm that every launch requirement is complete. Check funding/budget, applicable agreements or vendor steps, staffing, schedule/location, and readiness before Day 1.',owner:'School / partner + applicable district functions',go:'launch',cta:'Check launch readiness →'},
 launch:{badge:'PREPARING TO LAUNCH',title:'Clear the remaining readiness items.',text:'Confirm that the approved plan can actually begin: funding and budget are aligned, applicable partner/vendor steps are complete, staffing and logistics are ready, and unresolved conditions are closed.',owner:'School / partner',go:'launch',cta:'Open launch checklist →'},
 operating:{badge:'OPERATING',title:'Keep actual delivery visible.',text:'Track participation/attendance, implementation, required documentation, expenditures, and material changes so monitoring and closeout reflect the program that actually occurred.',owner:'Program lead',go:'operate',cta:'Open operating guidance →'},
 closeout:{badge:'CLOSEOUT',title:'Connect results, spending, and the next decision.',text:'Bring together participation, implementation, outcomes, expenditures, documentation, and recommendations for continuation, revision, or closure.',owner:'Program lead + CSA review',go:'evaluate',cta:'Open monitoring & closeout →'}
};
document.getElementById('v21Interpret')?.addEventListener('click',()=>{
 const key=document.getElementById('v21KnownStatus')?.value, x=V21_STATUS[key], box=document.getElementById('v21StatusResult');
 if(!box)return;
 if(!x){box.hidden=false;box.innerHTML='<p>Please choose the status you are working from.</p>';return}
 box.hidden=false;
 box.innerHTML=`<span>${x.badge}</span><h2>${x.title}</h2><p>${x.text}</p><div><small>NEXT OWNER</small><b>${x.owner}</b></div><button data-status-go="${x.go}">${x.cta}</button>`;
 box.querySelector('button').onclick=()=>showContent(x.go);
 box.scrollIntoView({behavior:'smooth',block:'nearest'});
});

// V21 role cue: label the most relevant homepage action without hiding other choices.
const V21_ROLE_PRIORITY={school:0,partner:3,csa:0,general:-1};
document.querySelectorAll('[data-role]').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.v18-action').forEach((a,i)=>a.classList.toggle('role-priority',i===V21_ROLE_PRIORITY[btn.dataset.role]));
}));

// V22 Find My Program search shell. It is intentionally read-only until the existing tracker is connected.
function v22Search(){
 const q=document.getElementById('v22ProgramSearch')?.value.trim(), box=document.getElementById('v22SearchResult');
 if(!box)return;
 box.hidden=false;
 if(!q){box.innerHTML='<b>Enter a school, program, provider, funding source, or status.</b>';return}
 box.innerHTML=`<span>SEARCH READY</span><h2>${q}</h2><p>The Decision Center is mapped to the existing Submission Tracker structure, but this package does not contain live tracker rows. Connect the source tracker to return the current program decision, launch status, outstanding actions, and next owner here.</p><button data-go-fallback="1">I already know the status →</button>`;
 box.querySelector('button').onclick=()=>document.getElementById('v21KnownStatus')?.focus();
}
document.getElementById('v22SearchBtn')?.addEventListener('click',v22Search);
document.getElementById('v22ProgramSearch')?.addEventListener('keydown',e=>{if(e.key==='Enter')v22Search()});

// V23 Something Changed — operational triage grounded in the implementation package.
const V23_CHANGES = {
 budget:{label:'Budget', q:'What changed in the budget?', options:[
   ['Total program cost increased','budget_total'],['Funding source changed','fund_source'],['Cost moved within the approved budget','budget_internal']
 ]},
 funding:{label:'Funding', q:'What changed with funding?', options:[
   ['Funding source changed','fund_source'],['Award/allocation changed','fund_amount'],['32n award/operating commitment changed','fund_32n']
 ]},
 vendor:{label:'Vendor / Partner', q:'What changed with the vendor or partner?', options:[
   ['New or replacement provider','vendor_new'],['Scope/responsibilities changed','vendor_scope'],['Agreement/MOU information changed','vendor_mou']
 ]},
 schedule:{label:'Schedule', q:'What changed?', options:[
   ['Days or hours changed','schedule_time'],['Program duration changed','schedule_duration']
 ]},
 location:{label:'Location', q:'What changed?', options:[
   ['Program moved to another site/space','location_move'],['Facility conditions affect delivery','location_issue']
 ]},
 staffing:{label:'Staffing', q:'What changed?', options:[
   ['Staffing model or positions changed','staff_model'],['Staffing issue affects ability to operate','staff_issue']
 ]},
 design:{label:'Program Design', q:'What changed?', options:[
   ['Activities/services changed materially','design_service'],['Target scholars or program purpose changed','design_target']
 ]},
 participation:{label:'Participation', q:'What is happening?', options:[
   ['Participation is below projection','part_low'],['Participation mix/target group changed','part_group']
 ]},
 cannot:{label:'Cannot Operate Today', q:'What is preventing operation?', options:[
   ['Staffing/supervision','cannot_staff'],['Transportation/dismissal','cannot_transport'],['Facility/site issue','cannot_site'],['Other immediate operational issue','cannot_other']
 ]}
};

const V23_RESULTS = {
 budget_total:['BUDGET CHANGE','Recheck the approved budget, funding rules, and approval implications.','A higher total cost can affect the approved investment and may implicate the BOE pathway when the applicable agreement/purchase reaches $30,321. Route the change before treating the revised amount as approved.','Funding / MOU Review or Additional Approval may apply','fund'],
 fund_source:['FUNDING SOURCE CHANGE','Recheck allowability and funding-specific requirements.','The implementation model requires identifying the funding source before applying funding-specific rules. A change in source can change what is allowable, documented, monitored, or approved.','Funding / MOU Review may apply','fund'],
 budget_internal:['INTERNAL BUDGET ADJUSTMENT','Document the proposed adjustment and verify whether re-review is required.','The reviewed materials do not establish one universal adopted rule for every internal budget movement. Do not assume that an internal shift is automatically exempt from review.','Final routing level pending leadership decision','fund'],
 fund_amount:['FUNDING AMOUNT CHANGE','Reconcile the program plan to the amount actually available.','Available funding and approved program design should remain aligned. Recheck scope, participation assumptions, budget, and any approval conditions affected by the change.','Funding review may apply','fund'],
 fund_32n:['32N CHANGE','Reconcile the award to the approved operating plan.','The implementation package specifically calls for reconciling 32n budget, site, or program-day discrepancies against the final award/approved operating plan before implementation.','Funding review required before relying on the changed commitment','fund'],
 vendor_new:['NEW / REPLACEMENT PROVIDER','Recheck intake, agreement, purchasing, budget, and readiness.','A provider substitution can affect program information, reporting capacity, staff/background requirements, insurance, outcomes, MOU/agreement, purchasing, and launch readiness.','Funding / MOU Review or Additional Approval may apply','vendor'],
 vendor_scope:['VENDOR / PARTNER SCOPE CHANGE','Document the changed responsibilities and review the affected agreement and program design.','A material scope change can alter the reviewed program, cost, responsibilities, outcomes, documentation, or monitoring expectations.','OEL Review and/or Funding / MOU Review may apply','vendor'],
 vendor_mou:['AGREEMENT / MOU CHANGE','Keep the program record and agreement status aligned.','The source-of-truth model connects MOU/agreement status to the program record. A material agreement change should not be handled outside the program workflow.','Funding / MOU Review may apply','vendor'],
 schedule_time:['SCHEDULE CHANGE','Compare the revised schedule with the approved program design.','Days/hours affect dosage, participation, staffing, transportation, cost, and delivery. Document the change and review any downstream effects.','OEL Review may apply','change'],
 schedule_duration:['DURATION CHANGE','Recheck dosage, cost, participation, and outcomes.','Program duration is part of the design reviewed for feasibility and investment. A material change should be visible in the program record.','OEL Review may apply','change'],
 location_move:['LOCATION CHANGE','Confirm site readiness and downstream operational impacts.','A location change can affect facilities, dismissal/pickup, transportation, supervision, partner responsibilities, and implementation.','OEL Review may apply','change'],
 location_issue:['SITE / FACILITY ISSUE','Resolve safe operation before normal delivery continues.','Document the issue, determine whether the program can operate as planned, and route any resulting schedule/location/design change.','Operational review; additional routing depends on the resulting change','operate'],
 staff_model:['STAFFING MODEL CHANGE','Recheck feasibility, budget, and delivery-as-approved.','Staffing is one of the factors considered in program review. A material staffing-model change can affect cost, supervision, design, and implementation.','OEL Review and/or funding review may apply','change'],
 staff_issue:['STAFFING ISSUE','Determine whether the program can operate as planned today.','If staffing affects supervision or safe delivery, resolve the immediate operating issue first and document any resulting program change.','Operational review; supervision baseline remains a pending leadership standard','operate'],
 design_service:['PROGRAM DESIGN CHANGE','Compare the new design with what was reviewed and approved.','Material changes to activities/services can affect need alignment, outcomes, participation, cost, staffing, funding requirements, and evaluation.','OEL Review; additional review may apply','plan'],
 design_target:['TARGET / PURPOSE CHANGE','Recheck scholar need, design, expected participation, and outcomes.','The operating model begins with scholar need and connects program design, expected participation, cost, and funding. A material change to the target group or purpose should be re-examined.','OEL Review may apply','plan'],
 part_low:['LOW PARTICIPATION','Use the data as an early management signal—not an automatic cancellation rule.','The recommended model is On Track / Watch / Action Required using projected vs. actual participation, attendance frequency, program type, dosage, cause, cost implications, and improvement trend. The final district standard is still pending leadership decision.','PENDING leadership standard','operate'],
 part_group:['PARTICIPATION MIX CHANGE','Compare actual reach with the approved target and purpose.','Participation should be reviewed alongside program design, need, outcomes, and investment. Document material differences and determine whether program design or funding commitments are affected.','OEL Review may apply','operate'],
 cannot_staff:['CANNOT OPERATE — STAFFING / SUPERVISION','Address the immediate operating condition before proceeding.','Document what prevented operation, communicate through the appropriate program channel, and determine whether a schedule, staffing, or program change must be routed. The districtwide supervision baseline is still pending leadership decision.','Immediate operational action + follow-up routing as needed','operate'],
 cannot_transport:['CANNOT OPERATE — TRANSPORTATION / DISMISSAL','Resolve the immediate dismissal/transportation issue and document the disruption.','The recommended district framework covers release/pickup, transportation responsibility, late pickup, family contact, and escalation, but the final minimum standard remains pending leadership decision.','Immediate operational action; districtwide standard pending','operate'],
 cannot_site:['CANNOT OPERATE — SITE','Do not treat a site disruption as a silent schedule change.','Document the issue and determine whether relocation, cancellation, schedule adjustment, or another operational response is needed. Route any material resulting change.','Immediate operational action + follow-up routing as needed','operate'],
 cannot_other:['CANNOT OPERATE — OTHER','Document the issue and identify the affected part of the approved plan.','Determine whether the issue changes staffing, schedule, location, vendor/partner, funding, program design, or participation, then use the corresponding change pathway.','Routing depends on the underlying change','change']
};

function v23Start(){
 const choices=document.getElementById('v23ChangeChoices'), follow=document.getElementById('v23ChangeFollowup'), result=document.getElementById('v23ChangeResult'), restart=document.getElementById('v23ChangeRestart');
 if(!choices)return;
 follow.hidden=true; result.hidden=true; restart.hidden=true;
 choices.innerHTML=Object.entries(V23_CHANGES).map(([k,v])=>`<button data-v23-change="${k}"><b>${v.label}</b><span>Choose →</span></button>`).join('');
 choices.querySelectorAll('button').forEach(b=>b.onclick=()=>v23Follow(b.dataset.v23Change));
}
function v23Follow(key){
 const x=V23_CHANGES[key], follow=document.getElementById('v23ChangeFollowup'), result=document.getElementById('v23ChangeResult'), restart=document.getElementById('v23ChangeRestart');
 result.hidden=true; restart.hidden=false; follow.hidden=false;
 follow.innerHTML=`<span>STEP 2 • ${x.label.toUpperCase()}</span><h2>${x.q}</h2><div>${x.options.map(([l,k])=>`<button data-v23-result="${k}">${l}<strong>→</strong></button>`).join('')}</div>`;
 follow.querySelectorAll('button').forEach(b=>b.onclick=()=>v23Result(b.dataset.v23Result));
 follow.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function v23Result(key){
 const x=V23_RESULTS[key], result=document.getElementById('v23ChangeResult');
 if(!x)return; result.hidden=false;
 result.innerHTML=`<span>${x[0]}</span><h2>${x[1]}</h2><p>${x[2]}</p><div><small>ROUTING SIGNAL</small><b>${x[3]}</b></div><button data-v23-go="${x[4]}">Open relevant guidance →</button>`;
 result.querySelector('button').onclick=()=>showContent(x[4]);
 result.scrollIntoView({behavior:'smooth',block:'nearest'});
}
document.getElementById('v23ChangeRestart')?.addEventListener('click',v23Start);
v23Start();

// V24 Answer Center — answer first, then implication and action.
const V24_ANSWERS = [
 {id:'approval-start',topic:'approval',type:'district',q:'Can the program start as soon as it is approved?',keys:['approved','approval','start','launch','begin','day 1'],a:'Not necessarily. Program approval and launch readiness are separate decision points.',means:'Before Day 1, confirm the approved budget/funding, applicable agreements or vendor steps, staffing, schedule/location, and any remaining conditions.',next:'Check launch readiness.',go:'launch'},
 {id:'revision',topic:'approval',type:'district',q:'What if we are asked to revise the application or budget?',keys:['revision','revise','resubmit','feedback','application'],a:'Revise the item identified in the review and return it through the established review route.',means:'Do not rebuild unrelated parts of the submission unless the review feedback requires it.',next:'Open the plan/revise workflow.',go:'plan'},
 {id:'fund-source',topic:'funding',type:'funding',q:'Why does the funding source matter?',keys:['funding','31a','32n','21st','source','allowable','allowability'],a:'Funding rules are not interchangeable. The source determines which requirements apply to the program and budget.',means:'A change in funding source can change allowability, documentation, monitoring, or approval requirements.',next:'Identify the source before applying funding-specific rules.',go:'fund'},
 {id:'32n',topic:'funding',type:'funding',q:'What if the 32n award does not match the original budget, site, or program days?',keys:['32n','award','program days','site','budget discrepancy'],a:'Reconcile the operating plan to the final 32n award before relying on the original assumptions.',means:'Budget, site, or program-day differences should be resolved against the final award/approved operating plan.',next:'Open funding guidance and route the discrepancy before implementation.',go:'fund'},
 {id:'boe',topic:'boe',type:'district',q:'When does the BOE threshold matter?',keys:['boe','board','30321','$30,321','threshold','purchase','agreement'],a:'The current BOE threshold being used for this work is $30,321.',means:'When an applicable agreement or purchase reaches the threshold, the BOE pathway must be considered as part of readiness. The threshold does not replace other purchasing, agreement, or funding requirements.',next:'Check the amount, agreement/purchase structure, and applicable approval pathway.',go:'fund'},
 {id:'vendor-change',topic:'vendor',type:'district',q:'What if the vendor or partner changes?',keys:['vendor','partner','provider','replacement','new vendor'],a:'Do not substitute a provider informally.',means:'A new or replacement provider can affect scope, budget, agreement/MOU, purchasing, documentation, and launch readiness.',next:'Route the change and recheck partner/vendor requirements.',go:'change'},
 {id:'vendor-approval',topic:'vendor',type:'district',q:'Does program approval complete the vendor or agreement process?',keys:['vendor approval','mou','agreement','contract','purchasing','insurance','background'],a:'No. Program approval does not replace applicable vendor, agreement, purchasing, or onboarding requirements.',means:'A program may be approved while partner/vendor readiness items remain outstanding.',next:'Check the partner/vendor and launch requirements.',go:'vendor'},
 {id:'budget-change',topic:'changes',type:'funding',q:'What if our budget or funding changes after approval?',keys:['budget change','funding change','increase','amount changed','after approval'],a:'Route the change before treating the revised budget as approved.',means:'A change in total cost or funding source can affect allowability, the approved investment, and approval steps, including BOE implications when applicable.',next:'Use Something Changed → Budget/Funding.',go:'change'},
 {id:'schedule-change',topic:'changes',type:'district',q:'What if the schedule, location, staffing, or program design changes?',keys:['schedule','location','staffing','design','hours','days','move'],a:'Document the material change and route it rather than silently absorbing it.',means:'These changes can affect feasibility, dosage, cost, supervision, transportation, outcomes, or the basis of the original review.',next:'Use Something Changed to identify the affected pathway.',go:'change'},
 {id:'low-participation',topic:'participation',type:'pending',q:'What happens if participation is low?',keys:['low participation','enrollment low','attendance low','participation','cancel','closure'],a:'There is not yet a finalized districtwide automatic cancellation rule in the materials used for this Center.',means:'The recommended direction is On Track / Watch / Action Required using projected vs. actual participation, attendance frequency, program type, dosage, cause, cost implications, and improvement trend.',next:'Monitor the data and use the operating guidance; do not present a proposed threshold as adopted policy.',go:'operate'},
 {id:'supervision',topic:'operations',type:'pending',q:'What is the district supervision baseline?',keys:['supervision','ratio','staff ratio','adult','baseline'],a:'The districtwide GRPS supervision baseline is still pending leadership decision.',means:'Stricter licensing, age, activity, facility, grant, provider, or program requirements still govern when applicable.',next:'Follow the applicable existing requirement and do not use the proposed baseline as final district policy.',go:'decisions'},
 {id:'transport',topic:'operations',type:'pending',q:'What are the districtwide dismissal and transportation expectations?',keys:['dismissal','transportation','pickup','late pickup','release','bus'],a:'A districtwide minimum standard is still pending leadership decision.',means:'The recommended framework addresses release/pickup, transportation responsibility, late pickup, family contact, and escalation.',next:'Use applicable current procedures and review the pending leadership decision.',go:'decisions'},
 {id:'cannot-operate',topic:'operations',type:'practice',q:'What should we do if the program cannot operate as planned today?',keys:['cannot operate','cancel today','staffing issue','site issue','transportation issue','closed'],a:'Address the immediate operating condition first, document what happened, and identify whether the disruption creates a material program change.',means:'The follow-up route depends on whether staffing, schedule, location, vendor/partner, funding, program design, or participation is affected.',next:'Use Something Changed → Cannot Operate Today.',go:'change'},
 {id:'monitor',topic:'closeout',type:'practice',q:'What should we track while the program is running?',keys:['monitor','track','attendance','documentation','operating','running','expenditures'],a:'Keep actual delivery visible throughout implementation.',means:'Track participation/attendance, implementation, required documentation, expenditures, and significant changes so monitoring and closeout reflect what actually occurred.',next:'Open program operations guidance.',go:'operate'},
 {id:'closeout',topic:'closeout',type:'practice',q:'What should closeout include?',keys:['closeout','end of program','results','outcomes','evaluation'],a:'Closeout should connect implementation, participation, outcomes, expenditures, documentation, and the next program decision.',means:'The purpose is not simply to confirm that funds were spent; it is to understand what was delivered, what happened, and what should change next.',next:'Open monitoring and closeout guidance.',go:'evaluate'}
];

const V24_TYPE_LABEL={district:'DISTRICT',funding:'FUNDING',practice:'PRACTICE',pending:'PENDING'};

function v24Render(x){
 const box=document.getElementById('v24Answer'); if(!box||!x)return;
 box.hidden=false;
 box.innerHTML=`<div class="v24-answer-head"><span class="v20-type ${x.type}">${V24_TYPE_LABEL[x.type]}</span><small>${x.q}</small></div>
 <div class="v24-answer-main"><span>ANSWER</span><h2>${x.a}</h2></div>
 <div class="v24-answer-detail"><div><span>WHAT THIS MEANS</span><p>${x.means}</p></div><div><span>YOUR NEXT MOVE</span><p><b>${x.next}</b></p></div></div>
 <button data-v24-go="${x.go}">Go to the relevant guidance →</button>`;
 box.querySelector('button').onclick=()=>showContent(x.go);
 box.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function v24Search(){
 const input=document.getElementById('v24Ask'), box=document.getElementById('v24Suggestions');
 const q=(input?.value||'').toLowerCase().trim();
 if(!box)return;
 if(!q){box.innerHTML='<span>Try a question about approval, funding, BOE, vendors, changes, participation, operations, or closeout.</span>';return}
 const words=q.split(/\s+/).filter(w=>w.length>2);
 const scored=V24_ANSWERS.map(x=>{
   const hay=(x.q+' '+x.keys.join(' ')+' '+x.a).toLowerCase();
   const score=words.reduce((n,w)=>n+(hay.includes(w)?1:0),0)+(x.keys.some(k=>q.includes(k))?3:0);
   return [score,x];
 }).filter(x=>x[0]>0).sort((a,b)=>b[0]-a[0]).slice(0,5);
 if(!scored.length){box.innerHTML='<span>No exact answer found. Browse a topic below or use the Operations Guide. The Center will not invent an answer.</span>';return}
 box.innerHTML=scored.map(([s,x])=>`<button data-v24-id="${x.id}"><span class="v20-type ${x.type}">${V24_TYPE_LABEL[x.type]}</span><b>${x.q}</b><strong>→</strong></button>`).join('');
 box.querySelectorAll('button').forEach(b=>b.onclick=()=>v24Render(V24_ANSWERS.find(x=>x.id===b.dataset.v24Id)));
}
document.getElementById('v24AskBtn')?.addEventListener('click',v24Search);
document.getElementById('v24Ask')?.addEventListener('keydown',e=>{if(e.key==='Enter')v24Search()});
document.querySelectorAll('[data-v24-topic]').forEach(b=>b.addEventListener('click',()=>{
 const items=V24_ANSWERS.filter(x=>x.topic===b.dataset.v24Topic), box=document.getElementById('v24Suggestions');
 box.innerHTML=items.map(x=>`<button data-v24-id="${x.id}"><span class="v20-type ${x.type}">${V24_TYPE_LABEL[x.type]}</span><b>${x.q}</b><strong>→</strong></button>`).join('');
 box.querySelectorAll('button').forEach(x=>x.onclick=()=>v24Render(V24_ANSWERS.find(a=>a.id===x.dataset.v24Id)));
 box.scrollIntoView({behavior:'smooth',block:'nearest'});
}));

// V25 task-first Resource Center. Links should be connected to authoritative source URLs only.
const V25_RESOURCES = {
 apply:{
  title:'Apply / revise a program',
  items:[
   ['Extended Day application','Use the current application/source used for 2026–27 submissions.','SOURCE LINK NEEDED','plan'],
   ['Submission Tracker','Source of truth for submission/review status; do not duplicate it in the Decision Center.','TRACKER CONNECTION','status'],
   ['Review / revision guidance','Use when review feedback requires a change to the program or budget.','IN CENTER','plan']
  ]},
 budget:{
  title:'Build or revise a budget',
  items:[
   ['Budget tool / approved budget','Use the current source budget rather than a downloaded duplicate.','SOURCE LINK NEEDED','fund'],
   ['Funding guidance','Identify the source first: 31a, 32n, 21st CCLC, blended, or other.','IN CENTER','fund'],
   ['BOE pathway guidance','Current threshold used for this work: $30,321 when applicable.','IN CENTER','fund']
  ]},
 partner:{
  title:'Work with a partner / vendor',
  items:[
   ['Vendor submission materials','Use the current vendor submission source.','SOURCE LINK NEEDED','vendor'],
   ['MOU / agreement materials','Use the current agreement source and keep agreement status tied to the program record.','SOURCE LINK NEEDED','vendor'],
   ['Partner/vendor guidance','Review scope, documentation, purchasing, readiness, and change implications.','IN CENTER','vendor']
  ]},
 launch:{
  title:'Prepare to launch',
  items:[
   ['Approval information','Confirm the program decision and any conditions.','TRACKER CONNECTION','status'],
   ['Launch readiness','Check budget/funding, agreements/vendor steps, staffing, schedule/location, and remaining conditions.','IN CENTER','launch'],
   ['Approval letter information','Connect to the current Approval Letter Info source rather than reproducing letters here.','SOURCE LINK NEEDED','status']
  ]},
 operate:{
  title:'Operate / document the program',
  items:[
   ['Attendance / participation process','Use the current district process for recording participation and attendance.','SOURCE LINK NEEDED','operate'],
   ['Something Changed','Route material budget, funding, vendor, staffing, schedule, location, design, or participation changes.','IN CENTER','change'],
   ['Operations guidance','Use for implementation, documentation, expenditures, and emerging issues.','IN CENTER','operate']
  ]},
 close:{
  title:'Monitor / close out',
  items:[
   ['Monitoring / observation tools','Use current district tools at their source.','SOURCE LINK NEEDED','evaluate'],
   ['Evaluation / outcome materials','Connect participation, implementation, outcomes, expenditures, and recommendations.','SOURCE LINK NEEDED','evaluate'],
   ['Closeout guidance','Use the Center to structure the final review and next program decision.','IN CENTER','evaluate']
  ]}
};
function v25RenderResources(key){
 const x=V25_RESOURCES[key], box=document.getElementById('v25ResourceResult'); if(!x||!box)return;
 box.hidden=false;
 box.innerHTML=`<div class="v25-resource-head"><span>RESOURCE PATH</span><h2>${x.title}</h2></div>
 <div class="v25-resource-list">${x.items.map((i,n)=>`<button data-v25-go="${i[3]}"><i>0${n+1}</i><div><b>${i[0]}</b><p>${i[1]}</p></div><span class="${i[2]==='IN CENTER'?'ready':'source'}">${i[2]}</span><strong>→</strong></button>`).join('')}</div>`;
 box.querySelectorAll('button').forEach(b=>b.onclick=()=>showContent(b.dataset.v25Go));
 box.scrollIntoView({behavior:'smooth',block:'nearest'});
}
document.querySelectorAll('[data-v25-resource]').forEach(b=>b.addEventListener('click',()=>v25RenderResources(b.dataset.v25Resource)));

// V26 Operations Guide section navigation.
document.querySelectorAll('[data-v26-section]').forEach(b=>b.addEventListener('click',()=>{
 const el=document.getElementById(b.dataset.v26Section);
 if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
}));

const v27Utility=document.getElementById('v27Utility');
document.getElementById('v27Start')?.addEventListener('click',()=>{v27Utility?.classList.add('open');v27Utility?.setAttribute('aria-hidden','false')});
document.getElementById('v27UtilityClose')?.addEventListener('click',()=>{v27Utility?.classList.remove('open');v27Utility?.setAttribute('aria-hidden','true')});
v27Utility?.addEventListener('click',e=>{if(e.target===v27Utility){v27Utility.classList.remove('open');v27Utility.setAttribute('aria-hidden','true')}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){v27Utility?.classList.remove('open');v27Utility?.setAttribute('aria-hidden','true')}});
v27Utility?.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>{showContent(b.dataset.go);v27Utility.classList.remove('open');v27Utility.setAttribute('aria-hidden','true')}));
