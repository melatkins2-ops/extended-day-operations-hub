// Refresh the tracker snapshot from a CSV export of the Submission Tracker.
//
//   1. In Google Sheets, open the '26 Submission Tracking tab and choose
//      File → Download → Comma-separated values (.csv).
//   2. Run:  node tools/update-tracker.mjs path/to/export.csv
//   3. Commit the updated tracker-data.js on a branch and open a pull request.
//
// Only the columns the public site displays are kept. Program Lead names and
// any other column not listed below are dropped before anything is written.
import { readFileSync, writeFileSync } from 'node:fs';

const KEEP = [
  'Vendor/ Principal in Charge', 'Program Name', 'Location/schools', 'Program Type', 'Category',
  'Progam Type', 'Primary Tier', 'Dollar Threshold', '31a Program Outcomes Connection',
  'OEL Approval', 'ED Approval', 'APPROVAL LETTER SENT', 'Start Date', 'Duration', 'Days/Times'
];

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

export function toSnapshot(csvText) {
  const rows = parseCsv(csvText.replace(/^﻿/, ''));
  const headerAt = rows.findIndex(r => r.includes('Program Name'));
  if (headerAt < 0) throw new Error('Could not find a "Program Name" column. Is this the Submission Tracking tab?');
  const header = rows[headerAt];
  const missing = KEEP.filter(k => !header.includes(k));
  if (missing.length) console.warn('Warning: these columns are missing from the export and will be blank: ' + missing.join(', '));
  return rows.slice(headerAt + 1)
    .map(r => Object.fromEntries(KEEP.map(k => [k, header.includes(k) ? String(r[header.indexOf(k)] ?? '') : ''])))
    .filter(r => r['Program Name'].trim());
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [file, date = new Date().toISOString().slice(0, 10)] = process.argv.slice(2);
  if (!file) { console.error('Usage: node tools/update-tracker.mjs <export.csv> [YYYY-MM-DD]'); process.exit(1); }
  const data = toSnapshot(readFileSync(file, 'utf8'));
  const out = `/* Snapshot of "Ext. Day Submission Tracking 2026-2027" (tab '26 Submission Tracking), taken ${date}. Only the columns the site displays are kept; Program Lead names are not included. The internal tracker is the official record. Refresh with: node tools/update-tracker.mjs export.csv */\n` +
    `window.EXTENDED_DAY_TRACKER_DATE=${JSON.stringify(date)};\n` +
    `window.EXTENDED_DAY_TRACKER=${JSON.stringify(data)};\n`;
  writeFileSync('tracker-data.js', out);
  console.log(`Wrote tracker-data.js: ${data.length} programs, snapshot date ${date}. Run the site check before merging.`);
}
