const fs = require('fs');
const html = fs.readFileSync('gyatk_source.html', 'utf8');

const topSections = [...html.matchAll(/<section[^>]*class=["'][^"']*elementor-top-section[^"']*["'][^>]*>([\s\S]*?)<\/section>/g)];

topSections.forEach((s, idx) => {
  fs.writeFileSync(`section_${idx}.html`, s[0]);
});

console.log('Saved all sections 0 to', topSections.length - 1);
