const fs = require('fs');
const path = require('path');

function replaceBlackBg(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceBlackBg(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace only background-specific #1a1c1c occurrences to avoid breaking text colors
      let newContent = content.replace(/bg-\[\#1a1c1c\]/g, 'bg-[#8595A9]');
      
      // Also catch any hover variants involving black
      newContent = newContent.replace(/hover:bg-\[\#1a1c1c\]/g, 'hover:bg-[#728296]'); 
      
      // Shadow variants
      newContent = newContent.replace(/shadow-\[\#1a1c1c\]/g, 'shadow-[#8595A9]');

      // Wait, let's also check for actual literal "bg-black" and replace it
      newContent = newContent.replace(/\bbg-black\b/g, 'bg-[#8595A9]');
      
      // IMPORTANT: revert ShadCN UI overlay bg-black/80 etc if we accidentally touched them
      newContent = newContent.replace(/bg-\[\#8595A9\]\/50/g, 'bg-black/50');
      newContent = newContent.replace(/bg-\[\#8595A9\]\/80/g, 'bg-black/80');

      if (content !== newContent) {
         fs.writeFileSync(fullPath, newContent);
         console.log('Updated backgrounds in ' + fullPath);
      }
    }
  }
}

replaceBlackBg('src');
