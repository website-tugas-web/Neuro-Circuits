// Verification script for OSCE cases - ensures exactly ONE correct diagnosis per case

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Read the osce-cases.js file
const casesFilePath = path.join(__dirname, 'src', 'osce-cases.js');
const casesFileContent = fs.readFileSync(casesFilePath, 'utf8');

// Create a sandbox context and execute the code
const sandbox = { module: { exports: {} }, exports: {} };
vm.createContext(sandbox);
vm.runInContext(casesFileContent, sandbox);

// Get the OSCE_CASES array
const OSCE_CASES = sandbox.module.exports.OSCE_CASES;

console.log('=== OSCE Cases Diagnosis Audit ===\n');

let totalCases = OSCE_CASES.length;
let casesWithMultipleCorrect = [];
let allCasesValid = true;

OSCE_CASES.forEach(caseItem => {
  const correctCount = caseItem.diagnoses.filter(d => d.correct === true).length;
  const caseId = caseItem.id;
  const material = caseItem.material;

  console.log(`Case ${caseId} (${material}): ${correctCount} correct diagnosis(es)`);

  if (correctCount !== 1) {
    allCasesValid = false;
    casesWithMultipleCorrect.push({
      id: caseId,
      material: material,
      correctCount: correctCount,
      diagnoses: caseItem.diagnoses
    });
  }
});

console.log(`\n=== Summary ===`);
console.log(`Total cases audited: ${totalCases}`);
console.log(`Cases with issues: ${casesWithMultipleCorrect.length}`);

if (allCasesValid) {
  console.log(`\n✓ ALL CASES PASS: Every case has exactly ONE correct diagnosis.`);
} else {
  console.log(`\n✗ ISSUES FOUND:`);
  casesWithMultipleCorrect.forEach(issue => {
    console.log(`\n  Case ${issue.id} (${issue.material}):`);
    console.log(`    Has ${issue.correctCount} correct diagnoses:`);
    issue.diagnoses.forEach(dx => {
      if (dx.correct) {
        console.log(`      - ${dx.name}`);
      }
    });
  });
}

process.exit(allCasesValid ? 0 : 1);
