# GRPS Extended Day Operations Hub (2026–27)

One place for principals, partners, and district staff to understand Extended Day programs: what is required, where each school's programs stand, and what comes next.

**Live site:** https://melatkins2-ops.github.io/extended-day-operations-hub/

## What's here

- `index.html`, `styles.css`, `app.js`: the site (Home, Schools & Programs, Program Guidance, FAQs)
- `tracker-data.js`: snapshot of the Extended Day Submission Tracker. Schools & Programs uses it to list each school's programs and approval status
- `images/`, `grps-logo.svg`: logo and imagery
- `README.txt`, `FINAL_RELEASE_AUDIT.txt`, `TEST_REPORT.txt`: earlier notes and audits

## Good to know

- The internal tracker is the official, most current record. Replace `tracker-data.js` to refresh the snapshot.
- Board approval uses the confirmed $30,321 threshold. Dollar ranges are shown as recorded in the tracker.
- Program lead names from the tracker are not displayed on the public site.

## Updating the site

Edit the files on a branch and open a pull request. GitHub Pages publishes `main` automatically, usually within a minute or two of a merge.

## Automated site check

Every pull request and every push to `main` runs **Site check** (`.github/workflows/site-check.yml`). It opens the site in a headless browser at desktop (1366px) and phone (390px) widths and fails if the page throws a JavaScript error, a local file or image is missing, or the page scrolls sideways. See the Actions tab for results.

Maintained by GRPS Community & Student Affairs.
