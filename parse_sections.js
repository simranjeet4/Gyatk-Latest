const fs = require('fs');
const html = fs.readFileSync('gyatk_source.html', 'utf8');

// Let's print out what is inside each elementor-top-section
const topSections = [...html.matchAll(/<section[^>]*class=["'][^"']*elementor-top-section[^"']*["'][^>]*>([\s\S]*?)<\/section>/g)];

console.log('TOP LEVEL SECTIONS:', topSections.length);

topSections.forEach((s, idx) => {
  const inner = s[1];
  const headings = [...inner.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => m[1].replace(/<[^>]*>/g, '').trim());
  const images = [...inner.matchAll(/<img[^>]*src=["']([^"']+)["']/gi)].map(m => m[1].split('/').pop());
  const textSnippets = inner.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 150);
  console.log(`\n--- SECTION ${idx} ---`);
  console.log('Headings:', headings);
  console.log('Images:', images.slice(0, 5));
  console.log('Snippet:', textSnippets);
});
