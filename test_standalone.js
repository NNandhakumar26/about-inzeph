const fs = require('fs');
const babel = require('@babel/standalone');

const code = fs.readFileSync('full_script.jsx', 'utf8');

try {
  babel.transform(code, {
    presets: ['react']
  });
  console.log("Success");
} catch(e) {
  console.log("Error:", e.message);
}
