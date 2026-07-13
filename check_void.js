const fs = require('fs');
const acorn = require('acorn');
const jsx = require('acorn-jsx');
const Parser = acorn.Parser.extend(jsx());

const code = fs.readFileSync('full_script.jsx', 'utf8');
const ast = Parser.parse(code, {ecmaVersion: 2020, sourceType: 'module'});

function traverse(node) {
  if (!node) return;
  if (node.type === 'JSXElement') {
    const name = node.openingElement.name.name;
    const voidElements = ['br', 'hr', 'img', 'input', 'meta', 'link'];
    if (voidElements.includes(name) && node.children && node.children.length > 0) {
      console.log(`Found ${name} with children at line ${node.loc.start.line}`);
      
      // also check if children are actually just empty text (acorn-jsx might include whitespace as children)
      const hasRealChildren = node.children.some(c => c.type !== 'JSXText' || c.value.trim() !== '');
      if (hasRealChildren) {
          console.log(`REAL children in ${name}!`);
      }
    }
  }
  for (const key in node) {
    if (node[key] && typeof node[key] === 'object') {
      if (Array.isArray(node[key])) {
        node[key].forEach(traverse);
      } else {
        traverse(node[key]);
      }
    }
  }
}
traverse(ast);
console.log("Done checking");
