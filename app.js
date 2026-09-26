const views=[...document.querySelectorAll('.view')];function show(id){views.forEach(v=>v.classList.toggle('active',v.id===id));scrollTo(0,0)}document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>show(b.dataset.view));
const panels={
start:['START OR CHANGE A PROGRAM','Begin with scholar need—not available dollars.','Need → Design → Participation → Cost → Funding',['Identify the scholar need or opportunity.','Define target scholars and realistic projected participation.','Define program model, provider, schedule, site, staffing and intended outcomes.','Use the current application and existing review process.','For a material change after approval, use “Something Changed.”']],
fund:['BUDGET & FUNDING','Identify the funding source before applying funding-specific rules.','31a • 32n • 21st CCLC • Other • Blended',['Confirm current allocation.','Build the proposed budget.','Calculate proposed cost per participating scholar.','Confirm allowability before committing funds.','For 32n/partner awards, reconcile the final award against the application before launch.']],
run:['RUN MY PROGRAM','Clear the program to launch, then manage attendance, delivery, documentation and resources.','APPROVED ≠ CLEARED TO LAUNCH',['Confirm final budget, funding, MOU and applicable approvals.','Confirm staffing/vendor clearance and site readiness.','Communicate schedule, attendance and dismissal/transportation information to families.','Track accurate attendance and deliver the approved program.','Use existing supply, inventory, invoice and closure procedures.']],
monitor:['MONITOR & EVALUATE','Use existing GRPS observation and evaluation tools; add follow-up, not duplicate forms.','OBSERVE → ACT → FOLLOW UP → RESOLVE',['Review participation and delivery against what was approved.','Use the existing Observation Tool for program quality.','Classify findings: Commendation / Improvement Needed / Immediate Action.','Assign action owner, due date and resolution status.','Evaluate participation, implementation, quality, outcomes, investment, operations and partner performance.','Next-year decision: Continue / Improve / Expand / Redesign-End.']],
application:['APPLICATION','Use the current Extended Day application as the source tool.','LIVE LINK TO BE CONNECTED',['Do not create a duplicate application in the Hub.','The live Hub should open the authoritative GRPS application directly.']],
attendance:['ATTENDANCE','Track projected participation against actual scholars served and attendance patterns.','PROJECTED → ENROLLED → ACTUAL → PATTERN',['Use the existing attendance process.','Low participation should trigger Identify → Understand → Adjust → Monitor → Escalate.','Pending leadership decision: no automatic districtwide cancellation percentage has been adopted in this prototype.']],
supplies:['SUPPLY ORDER','Use the existing Extended Day supply-order process.','LIVE LINK TO BE CONNECTED',['Confirm allowability before ordering.','Use existing purchasing and inventory procedures.','District-funded property remains subject to district inventory/return expectations.']],
observation:['OBSERVATION','Keep the existing Extended Day Observation Tool and strengthen action tracking.','LIVE LINK TO BE CONNECTED',['Add funding/program alignment rather than a 31a-only lens.','Add attendance health, delivery-as-approved, staffing and documentation status.','Track action owner, due date, follow-up and resolution.']],
resources:['RESOURCE DIRECTORY','One place to open the authoritative GRPS tools.','CONNECT VERIFIED LIVE LINKS',['Application / program proposal','2026–27 Submission Tracker','School / quadrant allocation information','Per-scholar review tool','Vendor Intake / Third-Party Vendor Protocol','MOU / approval materials','Attendance resources','Supply ordering and inventory','Observation Tool','Vendor Evaluation Template','Extended Day Evaluation Plan','Closure / emergency SOP','FAQ and Operations Guide']],
faq:['FAQ','The FAQ explains the 2026–27 changes without becoming the operating manual.','22 WORKING QUESTIONS',['Why the process is changing','Review and per-scholar cost','BOE threshold: $30,321','Approval vs. launch clearance','Vendor/partner process','31a / 32n / 21st CCLC / blended funding','Attendance and low participation','Monitoring, evaluation and next-year decisions']]
};
function panel(key){const p=panels[key];document.getElementById('panelEyebrow').textContent=p[0];document.getElementById('panelTitle').textContent=p[0];document.getElementById('panelIntro').textContent=p[1];document.getElementById('panelBody').innerHTML=`<div class="contentbox"><span class="tag">${p[2]}</span><div class="steps">${p[3].map((x,i)=>`<div class="step"><b>${i+1}.</b> ${x}</div>`).join('')}</div><div class="source">Prototype note: live resource URLs will be connected only to verified authoritative GRPS tools.</div></div>`;show('panel')}
document.querySelectorAll('[data-panel]').forEach(b=>b.onclick=()=>panel(b.dataset.panel));
const changes={Budget:['FUNDING/MOU REVIEW','Determine whether total cost, line-item use, funding source, vendor scope, MOU, or approval threshold changes.'],Funding:['FUNDING REVIEW','Do not switch funding sources informally. OEL + applicable funding staff review requirements and allowability.'],Schedule:['OEL REVIEW','Minor operational adjustments may only need documentation; meaningful schedule/dosage changes require review.'],Location:['OEL REVIEW','Check site readiness, licensing/safety implications, partner agreement, and program approval before moving.'],Staffing:['OEL REVIEW','Determine whether staffing changes affect budget, supervision, clearance, MOU, or funding requirements.'],Vendor:['ADDITIONAL REVIEW','A new vendor/partner may require intake, clearance, insurance, MOU, budget and approval review.'],['Program Design']:['OEL REVIEW','Determine whether the revised design materially changes what GRPS approved or what a grant/partner award requires.'],Participation:['PROGRAM REVIEW','Compare projected vs. actual participation, identify barriers, adjust, monitor, and escalate persistent concerns.'],['Program Cannot Operate Today']:['USE CLOSURE SOP','Follow the existing Extended Day closure/emergency procedure, including notification, scholar supervision, documentation, make-up/billing rules as applicable.']};
const cb=document.getElementById('changebuttons');Object.keys(changes).forEach(k=>{let b=document.createElement('button');b.textContent=k;b.onclick=()=>{let [tag,text]=changes[k];document.getElementById('changeresult').innerHTML=`<span class="tag">${tag}</span><h3>${k}</h3><p>${text}</p><p class="note">Final routing remains subject to the leadership-approved post-approval change standard.</p>`};cb.appendChild(b)});


const trackerPrograms=[
 {school:'Aberdeen',program:'Nutrition and Agricultural Education',provider:'Kids Food Basket',type:'Vendor Led • Vendor New',threshold:'above $31,320',letter:'Revise and Resubmit',oel:'—',mou:'—',fund:'—',start:'9/14/26',duration:'Full Year',schedule:'1x week in each school',tier:'Comprehensive Review',outcomes:'Attendance Support',principal:'—'},
 {school:'Aberdeen',program:'Tutoring',provider:'Kathleen Pool',type:'—',threshold:'—',letter:'Approve',oel:'—',mou:'—',fund:'—',start:'—',duration:'—',schedule:'—',tier:'—',outcomes:'—',principal:'—'},
 {school:'Brookside',program:'Green Team',provider:'Caitlyn Dykehouse',type:'District Led • Non-Ac New',threshold:'—',letter:'Approve',oel:'Approved',mou:'2',fund:'—',start:'9/29/26',duration:'Full Year',schedule:'Tuesday 3:45–5:00pm (3rd or 4th Tues of Month)',tier:'—',outcomes:'—',principal:'Aware'},
 {school:'Brookside',program:'Poetry Empowered',provider:'The Diatribe',type:'Vendor Led • Vendor Cont',threshold:'10,000-31,319',letter:'Revise and Resubmit',oel:'—',mou:'—',fund:'—',start:'9/7/26',duration:'Semester',schedule:'10 weeks, 1 hour, 1x/week',tier:'Tier 3',outcomes:'3rd Grade Reading Support, Attendance Support',principal:'—'},
 {school:'Brookside',program:'Project Emma',provider:'Project Emma',type:'Vendor Led • Vendor Cont',threshold:'above $31,320',letter:'Revise and Resubmit',oel:'—',mou:'—',fund:'—',start:'9/1/26',duration:'Full Year',schedule:'2 hour 3 days/week',tier:'Comprehensive Review',outcomes:'3rd Grade Reading Support, 8th Grade Math Support, Attendance Support, 11th Grade College and Career Readiness',principal:'Aware'},
 {school:'Buchanan',program:'Girls Choral Academy',provider:'Girls Choral Academy',type:'Vendor Led • Vendor Cont',threshold:'above $31,320',letter:'Revise and Resubmit',oel:'—',mou:'—',fund:'—',start:'9/4/26',duration:'Full Year',schedule:'1x/week, Mon–Thur 3:30–4:45pm',tier:'Comprehensive Review',outcomes:'Attendance Support',principal:'Aware'},
 {school:'Buchanan',program:'Nutrition and Agricultural Education',provider:'Kids Food Basket',type:'Vendor Led • Vendor New',threshold:'above $31,320',letter:'Revise and Resubmit',oel:'—',mou:'—',fund:'—',start:'9/14/26',duration:'Full Year',schedule:'1x week in each school',tier:'Comprehensive Review',outcomes:'Attendance Support',principal:'Not Aware'},
 {school:'Burton Elementary',program:'Builders and Inventors',provider:'Amarena Nelson',type:'District Led • Academic Continue',threshold:'$2,500-$9,999',letter:'Approve',oel:'Approved',mou:'2',fund:'—',start:'9/2/26',duration:'Full Year',schedule:'Wednesday 3:30–4:30',tier:'Tier 2',outcomes:'Attendance Support',principal:'—'},
 {school:'Burton Elementary',program:'Little Red Hawks Jump Club',provider:'Amarena Nelson',type:'District Led • Non-Ac New',threshold:'$2,500-$9,999',letter:'Approve',oel:'—',mou:'1',fund:'—',start:'9/23/26',duration:'Full Year',schedule:'Wednesday 3:30–4:30',tier:'Tier 1',outcomes:'Attendance Support',principal:'—'}
];
function renderPrograms(){
 const body=document.getElementById('programRows'); if(!body) return;
 const q=(document.getElementById('programSearch')?.value||'').toLowerCase();
 const f=document.getElementById('fundFilter')?.value||'';
 body.innerHTML='';
 trackerPrograms.filter(p=>(!f||p.fund===f)&&Object.values(p).join(' ').toLowerCase().includes(q)).forEach((p,i)=>{
  const tr=document.createElement('tr');
  tr.innerHTML=`<td>${p.school}</td><td><button class="rowlink" data-i="${i}">${p.program}</button></td><td>${p.provider}</td><td>${p.type}</td><td>${p.threshold}</td><td>${p.letter}</td><td>${p.oel}</td><td>${p.mou}</td>`;
  body.appendChild(tr);
 });
 document.querySelectorAll('.rowlink').forEach(b=>b.onclick=()=>showProgram(trackerPrograms[+b.dataset.i]));
}
function showProgram(p){
 const d=document.getElementById('programDetail'); if(!d) return;
 const correctedThreshold=p.threshold==='above $31,320'?'Tracker currently says “above $31,320” — update needed to align with confirmed $30,321 BOE threshold.':p.threshold;
 d.innerHTML=`<div class="detailhead"><div><span class="tag">${p.type}</span><h2>${p.program}</h2><p>${p.school} • ${p.provider}</p></div><div class="decision"><small>APPROVAL LETTER</small><b>${p.letter}</b><small>OEL APPROVAL</small><b>${p.oel}</b></div></div>
 <div class="metrics"><div><small>PRIMARY TIER</small><b>${p.tier}</b></div><div><small>DOLLAR THRESHOLD</small><b>${p.threshold}</b></div><div><small>MOU STATUS</small><b>${p.mou}</b></div><div><small>START DATE</small><b>${p.start}</b></div><div><small>DURATION</small><b>${p.duration}</b></div><div><small>PRINCIPAL AWARENESS</small><b>${p.principal}</b></div></div>
 <div class="outstanding"><h3>Tracker detail</h3><p><b>Schedule:</b> ${p.schedule}</p><p><b>31a Program Outcomes Connection:</b> ${p.outcomes}</p><p><b>Threshold note:</b> ${correctedThreshold}</p></div>
 <p class="note">This record reflects fields read from the existing tracker. Blank/— fields are not inferred.</p>`;
}
document.getElementById('programSearch')?.addEventListener('input',renderPrograms);
document.getElementById('fundFilter')?.addEventListener('change',renderPrograms);
renderPrograms();


const schoolApprovals=[
 {school:'Aberdeen Elementary',principal:'Kathleen Pool',requested:'$42,000.00',budget:'$25,514.36',remaining:'-$16,485.64',due:'September 30, 2026',letter:'Aberdeen Elementary Program Status Letter',budgetLetter:'2026 Aberdeen Elementary Principal Budget Revision',programs:[['Tutoring','$9,000.00','Clear'],['KFB Nutrition and Agricultural Education','$33,000.00','Revise']]},
 {school:'Blanford School',principal:'Erin Shadowens',requested:'$0.00',budget:'$2,580.10',remaining:'$2,580.10',due:'September 30, 2026',letter:'—',budgetLetter:'2026 Blanford School Principal Budget Revision',programs:[['Camps','not submitted','Revise']]},
 {school:'Brookside Elementary',principal:'Wayne Hill',requested:'$85,362.50',budget:'$28,237.80',remaining:'-$57,124.70',due:'September 30, 2026',letter:'Brookside Elementary Program Status Letter',budgetLetter:'2026 Brookside Elementary Principal Budget Revision',programs:[['KFB Nutrition and Agricultural Education','$33,000.00','Revise'],['Poetry Empowered','$6,302.50','Revise'],['Girls Choral Academy','$10,660.00','Revise'],['Green Team','$800.00','Clear'],['Project Emma','$2,400.00','Revise']]},
 {school:'Buchanan Elementary',principal:'Michael Thomasma',requested:'$49,962.50',budget:'$49,738.67',remaining:'-$223.83',due:'September 30, 2026',letter:'Buchanan Elementary Program Status Letter',budgetLetter:'2026 Buchanan Elementary Principal Budget Revision',programs:[['Poetry Empowered','$6,302.50','Revise'],['Girls Choral Academy','$10,660.00','Revise'],['KFB Nutrition and Agricultural Education','$33,000.00','Revise']]},
 {school:'Burton Elementary',principal:'Amarena Nelson',requested:'$50,469.29',budget:'$43,431.75',remaining:'-$7,037.54',due:'September 30, 2026',letter:'Burton Elementary Program Status Letter',budgetLetter:'2026 Burton Elementary Principal Budget Revision',programs:[["Mrs. Singh's Creative Corner",'$3,559.16','Clear'],['Little Red Hawks Jump Club','$3,407.15','Clear'],['First Lego League Robotics Club','$1,168.00','Clear'],['KFB Nutrition and Agricultural Education','$33,000.00','Revise'],['Mind Crafters','$4,792.61','Revise'],['Builders & Inventors','$4,542.37','Clear'],['RPM OST Enrichment','$0.00','Clear']]},
 {school:'Burton Middle School',principal:'Arnaldo Melendez',requested:'$81,802.50',budget:'$58,195.68',remaining:'-$23,606.82',due:'September 30, 2026',letter:'Burton Middle Program Status Letter',budgetLetter:'2026 Burton Middle School Principal Budget Revision',programs:[['Resurgence','$46,967.50','Revise'],['STEM Scholars','$34,835.00','Revise'],['RPM OST Enrichment','$0.00','Clear']]},
 {school:'CA Frost Elementary',principal:'Erin Shadowens',requested:'$13,800.00',budget:'$30,674.57',remaining:'$16,874.57',due:'September 30, 2026',letter:'—',budgetLetter:'2026 CA Frost Elementary Principal Budget Revision',programs:[['CAFrost Environmental Experiences (Amy)','$13,800.00','Clear'],['Camps (Crystal)','not submitted','Revise']]}
];
const approvalLetters={
 'Aberdeen|Nutrition and Agricultural Education':{approval:'Revise and Resubmit',due:'September 30, 2026',budget:'$33,000.00',vendorBudget:'$297,000.00',notes:['Submit an itemized, per-site budget covering all 9 school sites','Reduce the overall program budget (adjustments to program duration, length/frequency of scholar sessions, curriculum/program offerings, staffing, or other components)'],letter:'Revise Nutrition and Agricultural Education at Aberdeen',vendorLetter:'Kids FoodBasket Nutrition and Agricultural Education Revision Request'},
 'Aberdeen|Tutoring':{approval:'Approve',due:'September 30, 2026',budget:'—',vendorBudget:'—',notes:[],letter:'Approval Letter Aberdeen Tutoring',vendorLetter:'—'},
 'Brookside|Poetry Empowered':{approval:'Revise and Resubmit',due:'September 30, 2026',budget:'$6,302.50',vendorBudget:'$31,512.50',notes:['Reduce the overall program budget through adjustments to program duration, session length/frequency, curriculum/program offerings, staffing, or other components'],letter:'Revise Poetry Empowered at Brookside Elementary',vendorLetter:'The Diatribe Poetry Empowered Revision Request'},
 'Brookside|Project Emma':{approval:'Revise and Resubmit',due:'September 30, 2026',budget:'$24,000.00',vendorBudget:'$360,000.00',notes:['Submit an itemized, per-site budget covering all 15 school sites','Reduce the overall program budget through adjustments to program duration, session length/frequency, curriculum/program offerings, staffing, or other components'],letter:'Revise Project Emma at Brookside Elementary',vendorLetter:'Project Emma Project Emma Revision Request'},
 'Buchanan|Girls Choral Academy':{approval:'Revise and Resubmit',due:'September 30, 2026',budget:'$10,660.00',vendorBudget:'$63,960.00',notes:['Reduce the overall program budget through adjustments to program duration, session length/frequency, curriculum/program offerings, staffing, or other components'],letter:'Revise Girls Choral Academy at Buchanan Elementary',vendorLetter:'Girls Choral Academy Girls Choral Academy Revision Request'},
 'Buchanan|Nutrition and Agricultural Education':{approval:'Revise and Resubmit',due:'September 30, 2026',budget:'$33,000.00',vendorBudget:'$297,000.00',notes:['Submit an itemized, per-site budget covering all 9 school sites','Reduce the overall program budget'],letter:'Revise Nutrition and Agricultural Education at Buchanan Elementary',vendorLetter:'Kids FoodBasket Revision Request'},
 'Buchanan|Poetry Empowered':{approval:'Revise and Resubmit',due:'September 30, 2026',budget:'$6,302.50',vendorBudget:'$31,512.50',notes:['Reduce the overall program budget'],letter:'Revise Poetry Empowered at Buchanan Elementary',vendorLetter:'The Diatribe Revision Request'},
 'Burton Elementary|Builders and Inventors':{approval:'Approve',due:'September 30, 2026',budget:'$4,542.37',vendorBudget:'$4,542.37',notes:[],letter:'Approval Letter Burton Elementary Builders and Inventors',vendorLetter:'—'}
};
function setupSchools(){
 const sel=document.getElementById('schoolSelect'); if(!sel)return;
 schoolApprovals.forEach((s,i)=>{const o=document.createElement('option');o.value=i;o.textContent=s.school;sel.appendChild(o)});
 sel.onchange=()=>renderSchool(sel.value===''?null:schoolApprovals[+sel.value]);
}
function renderSchool(s){
 const el=document.getElementById('schoolSummary');if(!el)return;
 if(!s){el.innerHTML='<p class="note">Choose a school above.</p>';return}
 const over=s.remaining.startsWith('-');
 el.innerHTML=`<div class="detailhead"><div><h3>${s.school}</h3><p>${s.principal}</p></div><div class="decision"><small>REVISION DUE</small><b>${s.due}</b></div></div>
 <div class="metrics"><div><small>REQUESTED</small><b>${s.requested}</b></div><div><small>AVAILABLE BUDGET</small><b>${s.budget}</b></div><div><small>REMAINING</small><b class="${over?'warn':''}">${s.remaining}</b></div></div>
 <div class="school-programs">${s.programs.map(p=>`<div class="school-program-row"><span>${p[0]}</span><b>${p[1]}</b><span class="status ${p[2].toLowerCase()}">${p[2]}</span></div>`).join('')}</div>
 <p class="note"><b>Program status letter:</b> ${s.letter}<br><b>Budget revision:</b> ${s.budgetLetter}</p>`;
}
setupSchools();

// Enrich existing showProgram with approval-letter data without overwriting source blanks.
const originalShowProgram=showProgram;
showProgram=function(p){
 originalShowProgram(p);
 const key=p.school+'|'+p.program;
 const a=approvalLetters[key];
 if(!a)return;
 const d=document.getElementById('programDetail');
 d.innerHTML += `<div class="approval-context"><h3>Approval / revision context</h3><div class="metrics"><div><small>DECISION</small><b>${a.approval}</b></div><div><small>REVISION DUE</small><b>${a.due}</b></div><div><small>SITE BUDGET</small><b>${a.budget}</b></div></div>${a.notes.length?'<h4>Requested revisions</h4>'+a.notes.map(n=>`<p>• ${n}</p>`).join(''):'<p>No revision notes shown in the sampled Approval Letter Info record.</p>'}<p class="note"><b>Program letter:</b> ${a.letter}<br><b>Vendor letter:</b> ${a.vendorLetter}</p></div>`;
}


function injectStatusWorkspace(){
 const content=document.getElementById('panelContent');
 if(!content || !document.querySelector('#panel:not(.hidden)')) return;
 const title=content.querySelector('h1,h2');
 if(!title || title.textContent.trim()!=='PROGRAM STATUS') return;
 if(document.getElementById('programRows')) return;
 content.insertAdjacentHTML('beforeend',`
 <div class="status-workspace">
 <div class="school-summary-wrap">
 <div class="subhead"><div><p class="eyebrow">SCHOOL VIEW</p><h2>School approval snapshot</h2></div><p>Requested amount, available budget, and program decisions.</p></div>
 <div class="searchbar"><select id="schoolSelect"><option value="">Choose a school</option></select></div>
 <div id="schoolSummary" class="school-summary"><p class="note">Choose a school above.</p></div>
 </div>
 <div class="program-browser">
 <div class="subhead"><div><p class="eyebrow">PROGRAM VIEW</p><h2>Find a program</h2></div><a class="source-link" href="https://docs.google.com/spreadsheets/d/1U61UoEc9YNI6Naoc1hVX-27_IuR2dgrhGJiP068aR-I/edit" target="_blank" rel="noopener">Open source tracker ↗</a></div>
 <div class="searchbar"><input id="programSearch" type="search" placeholder="Search school, program, provider, type, or status"></div>
 <div class="programtablewrap"><table class="programtable"><thead><tr><th>School / Site</th><th>Program</th><th>Provider / Lead</th><th>Type</th><th>Threshold</th><th>Decision</th><th>OEL</th><th>MOU</th></tr></thead><tbody id="programRows"></tbody></table></div>
 <div id="programDetail" class="programdetail"><p class="note">Select a program to see its details.</p></div>
 </div></div>`);
 setupSchools(); renderPrograms();
}
document.querySelectorAll('[data-panel]').forEach(btn=>btn.addEventListener('click',()=>setTimeout(injectStatusWorkspace,0)));
