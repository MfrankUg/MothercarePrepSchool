const fs = require('fs');
const content = fs.readFileSync('src/pages/Gallery/Gallery.tsx', 'utf8');

const textMatches = Array.from(content.matchAll(/>([^<]+)<\/p>|>([^<]+)<\/span>/g))
  .map(m => (m[1] || m[2]).trim())
  .filter(m => m.length > 2 && !m.match(/^[a-zA-Z]$/));

const imgImports = Array.from(content.matchAll(/import (img_?\d+) from "([^\"]+)"/g))
  .map(m => `${m[1]}: ${m[2]}`);

console.log('--- IMAGES USED ---');
console.log(imgImports.join('\n'));
console.log('\n--- TEXT CONTENT ---');
console.log([...new Set(textMatches)].join(' | '));
