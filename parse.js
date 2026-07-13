const fs = require('fs');
const babel = require('@babel/core');
try {
  const code = fs.readFileSync('temp.jsx', 'utf8');
  babel.transformSync(code, {
    presets: ['@babel/preset-react'],
    filename: 'temp.jsx'
  });
  console.log("No syntax errors found.");
} catch (e) {
  console.error("Syntax Error:", e.message);
}
