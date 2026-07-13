const fs = require('fs');
const babel = require('@babel/standalone');

const code = `
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
  console.log("Success with automatic");
} catch(e) {
  console.log("Error with automatic:", e.message);
}

try {
  babel.transform(code, {
    presets: [
      ['react']
    ]
  });
  console.log("Success with default");
} catch(e) {
  console.log("Error with default:", e.message);
}
