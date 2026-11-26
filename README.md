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

## Refresh the tracker snapshot

1. In the Submission Tracker, open the **'26 Submission Tracking** tab and choose **File → Download → Comma-separated values (.csv)**.
2. Run `node tools/update-tracker.mjs path/to/export.csv` from this folder.
3. Commit the new `tracker-data.js` on a branch and open a pull request. The site check confirms every program still maps to a school.

The tool keeps only the columns the site displays. Program Lead names are never written to the public file.

## What's here

- `index.html`, `styles.css`, `app.js`: the site
- `tracker-data.js`: snapshot of the Extended Day Submission Tracker, used by Schools & Programs and the OEL portfolio view
- `tools/update-tracker.mjs`: turns a tracker CSV export into `tracker-data.js`
- `images/`, `favicon.png`: logo and icon
- `docs/archive/`: earlier audit notes

## Good to know

- The internal tracker is the official, most current record.
- Board approval uses the confirmed $30,321 threshold. Dollar ranges are shown as recorded in the tracker.
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

See the Actions tab for results.

Maintained by GRPS Community & Student Affairs.
