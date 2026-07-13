const fs = require('fs');
const acorn = require('acorn');
const jsx = require('acorn-jsx');
const Parser = acorn.Parser.extend(jsx());
try {
  const code = fs.readFileSync('temp.jsx', 'utf8');
  Parser.parse(code, {ecmaVersion: 2020, sourceType: 'module'});
  console.log("No syntax errors");
} catch (e) {
  console.log("Syntax error at", e.loc, e.message);
}
