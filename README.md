# GRPS Extended Day Operations Hub (2026–27)

One place for principals, partners, and district staff to understand Extended Day programs: what is required, where each school's programs stand, and what comes next.

**Live site:** https://melatkins2-ops.github.io/extended-day-operations-hub/

## Share a direct link

Every page has its own address, so you can bookmark it or send it to someone. The browser Back button works too.

| To open | Link ends with |
| --- | --- |
| A school's programs | `#/schools/aberdeen-academy` (school name, lowercase, dashes for spaces) |
| Program Guidance for a situation | `#/guidance/launch` · `vendor` · `cost` · `schedule` · `scope` · `low` |
| A journey step | `#/step/clear` · `plan` · `submit` · `review` · `approve` · `operate` · `monitor` · `adjust` · `evaluate` · `close` · `decide` |
| FAQs for one audience or topic | `#/faq?who=principal` · `#/faq?who=partner` · `#/faq?topic=invoice` |
| Pathways | `#/principal` · `#/partner` · `#/manage` (OEL portfolio view) · `#/change` · `#/resources` |

## Refresh the program snapshot

1. In the **2026-27 Master Program Doc**, open the **Program Tracking** tab and choose **File → Download → Comma-separated values (.csv)**.
2. Run `node tools/update-tracker.mjs path/to/export.csv` from this folder.
3. Commit the new `tracker-data.js` on a branch and open a pull request. The site check confirms every program still maps to a school.

The tool keeps only what the site displays. Principal, program lead, and staff names, decline reasons, and exact budgets are never written to the public file. Budgets appear as ranges. The site check fails if a private column ever shows up.

**How a program's status is read:** OEL reviews it, then the principal accepts or declines it for the building. The sheet's Status column (Accepted / Declined / Pending) is the building's final word. Accepted programs that OEL still marks *Revise* show as "Accepted · revision needed."


## What's here

- `index.html`, `styles.css`, `app.js`: the site
- `tracker-data.js`: snapshot of the 2026-27 Master Program Doc, used by Schools & Programs and the OEL portfolio view
- `tools/update-tracker.mjs`: turns a Program Tracking CSV export into `tracker-data.js`
- `images/`, `favicon.png`: logo and icon
- `docs/archive/`: earlier audit notes

## Good to know

- The Master Program Doc is the official, most current record.
- Board of Education threshold: **$31,321** (OEL Vendor FAQ, Nov 19, 2026). Programs above it need Finance Committee review and Board approval.
- Partner guidance and OEL contacts come from the OEL Vendor FAQ and the Vendor Staffing & Documentation Guide (Nov 2026).
- If the tracker spells a school a new way, add that spelling to `SCHOOL_MATCH` in `app.js`. The site check names any program it can't place.

## Updating the site

Edit the files on a branch and open a pull request. GitHub Pages publishes `main` automatically, usually within a minute or two of a merge.

## Automated site check

Every pull request and every push to `main` runs **Site check** (`.github/workflows/site-check.yml`). At desktop (1366px) and phone (390px) widths it opens every page, every school, every journey step, and every guidance situation, then fails if it finds:

- a JavaScript error or missing file
- a page that opens blank or scrolls sideways
- an in-site link that goes nowhere
- a school picker, guidance picker, FAQ search, or Back button that doesn't respond
- a tracker program that doesn't match any school
- a private column (names, decline reasons, exact budgets) in the public data file

See the Actions tab for results.

Maintained by GRPS Community & Student Affairs.
