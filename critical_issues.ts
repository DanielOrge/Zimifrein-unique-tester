// 1. Use of eval (critical)
function runEval(code: string) {
  return eval(code);
}

// 2. Use of Function constructor (critical)
function runFunctionConstructor(code: string) {
  return new Function(code)();
}

// 3. Assignment to innerHTML (critical)
function setDangerousHTML(element: HTMLElement, html: string) {
  element.innerHTML = html;
} 