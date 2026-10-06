const fs = require('fs');

function updateCss(filePath) {
  let css = fs.readFileSync(filePath, 'utf8');

  if (!css.includes('.sub-bullet-icon')) {
    css += `
.sub-bullet-icon {
  color: #f97316;
  flex-shrink: 0;
  margin-top: 3px;
}
`;
    fs.writeFileSync(filePath, css, 'utf8');
  }
}

updateCss('client/src/pages/TechnicalServicesPage.css');
updateCss('client/src/pages/CommercialServicesPage.css');
console.log('Added .sub-bullet-icon CSS styling!');
