// This file intentionally contains code patterns that trigger medium severity (Warning) issues.

// 1. Unused variable (Warning)
const unusedVariable = 42;

// 2. Console statement (Warning)
console.log('This should trigger a warning for using console.');

// 3. Function with an explicit any parameter (Warning)
function processInput(input: any) {
  return input;
} 