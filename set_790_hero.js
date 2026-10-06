const fs = require('fs');
let css = fs.readFileSync('client/src/pages/Blog.css', 'utf8');

css = css.replace(/height:\s*\d+px;/g, 'height: 790px;');
css = css.replace(/min-height:\s*\d+px;/g, 'min-height: 790px;');

fs.writeFileSync('client/src/pages/Blog.css', css);
console.log('Hero section height updated to 790px in Blog.css');
