const fs = require('fs');
const html = fs.readFileSync('gyatk_source.html', 'utf8');

// Find all CSS links
const cssMatches = [...html.matchAll(/href=["']([^"']+\.css[^"']*)["']/g)].map(m => m[1]);
console.log('CSS STYLESHEETS:');
cssMatches.forEach(c => console.log(' -', c));

// Find theme name
const themeMatch = html.match(/\/wp-content\/themes\/([^\/]+)/);
console.log('\nTHEME:', themeMatch ? themeMatch[1] : 'Unknown');

// Find plugins
const plugins = [...new Set([...html.matchAll(/\/wp-content\/plugins\/([^\/]+)/g)].map(m => m[1]))];
console.log('\nPLUGINS:', plugins);

// Find fonts
const fonts = [...html.matchAll(/fonts\.googleapis\.com\/css[^"']+/g)].map(m => m[0]);
console.log('\nGOOGLE FONTS:', fonts);

// Find main container/body classes
const bodyMatch = html.match(/<body[^>]*class=["']([^"']+)["']/);
console.log('\nBODY CLASSES:', bodyMatch ? bodyMatch[1] : 'None');
