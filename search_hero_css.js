const fs = require('fs');
const html = fs.readFileSync('gyatk_source.html', 'utf8');

const matches = [];
const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/g;
let m;
while ((m = styleRegex.exec(html)) !== null) {
  const css = m[1];
  if (css.includes('f84a6c9') || css.includes('mving1') || css.includes('drive') || css.includes('power')) {
    matches.push(css);
  }
}

console.log('Found matching styles:', matches.length);
matches.forEach((css, idx) => {
  console.log(`\n--- CSS MATCH ${idx} ---`);
  const lines = css.split('\n').filter(l => l.includes('f84a6c9') || l.includes('mving1') || l.includes('drive') || l.includes('power') || l.includes('gradient'));
  console.log(lines.slice(0, 30).join('\n'));
});
