const fs = require('fs');
let css = fs.readFileSync('client/src/pages/Blog.css', 'utf8');

css = css.replace(/height:\s*320px;/g, 'height: 460px;\n  min-height: 420px;');
css = css.replace(/background-position:\s*center center;/g, 'background-position: center center;\n  background-size: cover;');

fs.writeFileSync('client/src/pages/Blog.css', css);
console.log('Successfully updated hero section height to 460px in Blog.css');
