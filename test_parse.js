const fs = require('fs');
const acorn = require('acorn');
const jsx = require('acorn-jsx');
const Parser = acorn.Parser.extend(jsx());

const code = fs.readFileSync('full_script.jsx', 'utf8');

try {
  Parser.parse(code, {ecmaVersion: 2020, sourceType: 'module'});
  console.log("No syntax errors");
} catch (e) {
  console.log("Syntax error at", e.loc, e.message);
  
  // print context
  const lines = code.split('\n');
  const lineNum = e.loc.line - 1;
  for(let i = Math.max(0, lineNum - 5); i <= Math.min(lines.length - 1, lineNum + 5); i++) {
    console.log(`${i+1}: ${lines[i]}`);
  }
}
