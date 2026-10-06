const fs = require('fs');
let jsx = fs.readFileSync('client/src/pages/TechnicalServicesPage.jsx', 'utf8');

jsx = jsx.replace(/\/images\/GYATKrvcr-1 \(1\)\.jpg/g, '/images/math-virtual-cad.jpg');
jsx = jsx.replace(/<span className="sub-bullet-dot">•<\/span>/g, '<span className="sub-bullet-dot">?</span>');

fs.writeFileSync('client/src/pages/TechnicalServicesPage.jsx', jsx);
console.log('Successfully updated CAD image and diamond bullets in TechnicalServicesPage.jsx!');
