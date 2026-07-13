const fs = require('fs');
const babel = require('@babel/standalone');

const code = `
/** @jsxRuntime classic */
/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
const App = () => <div>Hello</div>;
`;

try {
  babel.transform(code, {
    presets: [
      ['react', { runtime: 'automatic' }]
    ]
  });
  console.log("Success with classic pragma");
} catch(e) {
  console.log("Error:", e.message);
}
