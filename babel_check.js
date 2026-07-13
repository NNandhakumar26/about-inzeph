const fs = require('fs');
const code = fs.readFileSync('temp.jsx', 'utf8');
const babel = require('@babel/core');
try {
  babel.transformSync(code, {
    presets: ['@babel/preset-react'],
    filename: 'temp.jsx'
  });
} catch(e) {
  console.log(e.message);
}
