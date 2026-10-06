const fs = require('fs');

function inspectSection(num) {
  const content = fs.readFileSync(`section_${num}.html`, 'utf8');
  console.log(`\n================ SECTION ${num} (${content.length} chars) ================`);
  // Print first 800 chars and key elements
  console.log(content.slice(0, 1500));
}

// Let's inspect section 1 (Hero)
inspectSection(1);
