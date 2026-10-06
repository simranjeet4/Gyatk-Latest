const fs = require('fs');
const html = fs.readFileSync('gyatk_source.html', 'utf8');

// Find all sections in the HTML
const sectionMatches = [...html.matchAll(/<section[^>]*class=["']([^"']+)["'][^>]*>/g)];
console.log('SECTIONS FOUND:', sectionMatches.length);
sectionMatches.forEach((m, idx) => {
  const fullTag = m[0];
  const idMatch = fullTag.match(/id=["']([^"']+)["']/);
  console.log(`[${idx}] ID: ${idMatch ? idMatch[1] : 'none'}, Classes: ${m[1]}`);
});

// Let's print out the first 2 sections completely
const sections = [...html.matchAll(/<section[\s\S]*?<\/section>/g)];
console.log('\nTotal <section> blocks:', sections.length);
if (sections.length > 0) {
  fs.writeFileSync('section_0.html', sections[0][0]);
  fs.writeFileSync('section_1.html', sections[1] ? sections[1][0] : '');
  fs.writeFileSync('section_2.html', sections[2] ? sections[2][0] : '');
}
