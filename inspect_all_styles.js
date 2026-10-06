const fs = require('fs');
const html = fs.readFileSync('gyatk_source.html', 'utf8');

const sectionIds = ['f84a6c9', '72e0faf', '075a66e', 'b20ff47', '4029953', '3df2866', '5e8e0ae', '2b77e96', 'b36155d', 'a2a7beb', 'd37abd6', '62beedd'];

sectionIds.forEach(id => {
  const m = html.match(new RegExp('\\.elementor-element-' + id + '[^{]*\\{[^}]*\\}', 'g'));
  console.log(`\n=== SECTION ID: ${id} ===`);
  if (m) {
    m.forEach(rule => {
      if (rule.includes('background') || rule.includes('color') || rule.includes('padding') || rule.includes('font')) {
        console.log(' ', rule);
      }
    });
  }
});
