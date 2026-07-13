const fs = require('fs');
const acorn = require('acorn');
const jsx = require('acorn-jsx');
const Parser = acorn.Parser.extend(jsx());

const code = fs.readFileSync('temp.jsx', 'utf8');

// We will split the code by function declarations and check them individually
// Or we can just use babel and find the exact error location!
