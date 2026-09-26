GRPS Extended Day Operations Hub Prototype v2

WHAT CHANGED
- Added searchable Program Status management-view prototype.
- Added funding-source filter.
- Added sample program record detail with projected/actual participation, budget/spending, attendance, observation, launch status, and open actions.
- Added Resource Directory structure.
- Preserved “Something Changed” routing and five-path homepage.

IMPORTANT
- Sample program records are illustrative only.
- Live implementation should use the existing 2026–27 Submission Tracker as the status backbone rather than creating a second master tracker.
- Verified authoritative GRPS links should replace resource-directory placeholders.
- Four leadership standards remain pending: low-participation intervention, supervision baseline, dismissal/transportation, and post-approval change authority.

V3 ACTUAL TRACKER MAPPING
- Confirmed source workbook: Ext. Day Submission Tracking 2026-2027.
- Workbook tabs: '26 Submission Tracking; Copy of '26 Submission Tracking; '26 Vendor Submissions; School Approvals; Approval Letter Info; hidden AutoCrat Job Settings.
- The primary tab name begins with an apostrophe, which the connector currently cannot parse directly; V3 maps the structurally identical Copy tab for field design.
- Added actual tracker field structure and a small set of records read from the workbook.
- Blank fields are displayed as blank/dash; no missing values are inferred.
- Existing tracker threshold labels include “above $31,320”; this conflicts with the confirmed GRPS BOE threshold of $30,321 and is flagged for correction rather than silently rewritten.

V4 APPROVAL WORKFLOW MAPPING
- Added School Approvals tab structure: requested amount, available budget, remaining amount, revision due date, per-program Clear/Revise status, principal status letter, and budget revision document.
- Added sampled Approval Letter Info details: approve/revise-and-resubmit decisions, revision notes, site budget, due date, and generated letter names.
- This reveals that “Where Is My Program?” should show both a school-level budget/portfolio view and a program-level approval/revision view.
- The School Approvals source currently contains negative Remaining values for several sampled schools; V4 displays source values without reinterpreting them.
- Vendor Submissions tab could not be parsed through the connector because its visible tab name begins with an apostrophe. No vendor-tab values were guessed or substituted.

V5 VISUAL REDESIGN
- Rebuilt the homepage as an operational workspace rather than a card dashboard.
- Program Status is now the primary action.
- Added prominent school/program search.
- Reframed navigation as Plan → Fund → Approve → Operate → Evaluate.
- Separated principal/program-lead and OEL management entry points.
- Moved reference resources to supporting navigation.
- Added intentional mobile layouts.
- Removed prototype language from the public-facing homepage.
- Added a local GRPS logo asset slot. The included SVG is a temporary GRPS wordmark placeholder; replace grps-logo.svg with the official approved GRPS logo asset when available.

V6 REBUILD
- Removed the fabricated GRPS logo.
- Uses the official GRPS My Choice logo published by GRPS Communications at:
  https://grps-cdn.fxbrt.com/downloads/communications/grpsmychoicelogo.png
- Simplified the hero and made Program Status the primary action.
- Replaced the large workflow with compact task-based navigation.
- Added cleaner Principal/Program Lead and OEL role entry points.
