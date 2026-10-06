const fs = require('fs');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace import
  if (content.includes("import { Check } from 'lucide-react';")) {
    content = content.replace("import { Check } from 'lucide-react';", "import { Check, ChevronRight } from 'lucide-react';");
  }

  // Replace question marks / bullet spans
  content = content.replace(/<span className="sub-bullet-dot">\?<\/span>/g, '<ChevronRight size={13} className="sub-bullet-icon" />');
  content = content.replace(/<span className="orange-dot">•<\/span>/g, '<ChevronRight size={13} className="sub-bullet-icon" />');
  content = content.replace(/<span className="sub-bullet-dot">•<\/span>/g, '<ChevronRight size={13} className="sub-bullet-icon" />');
  content = content.replace(/‘/g, "'").replace(/’/g, "'");

  fs.writeFileSync(filePath, content, 'utf8');
}

fixFile('client/src/pages/TechnicalServicesPage.jsx');
fixFile('client/src/pages/CommercialServicesPage.jsx');
console.log('Successfully fixed question marks and added Lucide ChevronRight SVG icons!');
