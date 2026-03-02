// Minimal QA: ensure dist contains vital routes
const fs = require('fs');
const path = require('path');

const mustExist = [
  'dist/index.html',
  'dist/agendamento/index.html',
];

let ok = true;
for (const p of mustExist) {
  if (!fs.existsSync(path.resolve(p))) {
    console.error('MISSING:', p);
    ok = false;
  }
}

if (!ok) process.exit(2);
console.log('qa-check OK');
