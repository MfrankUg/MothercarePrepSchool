const fs = require('fs');
const path = require('path');

const replacements = [
  { file: 'src/pages/About/About.tsx', oldStr: 'function AboutUsDesktop()', newStr: 'function About()' },
  { file: 'src/pages/Academics/Academics.tsx', oldStr: 'function AcademicsMothercarePrep()', newStr: 'function Academics()' },
  { file: 'src/pages/Admissions/Admissions.tsx', oldStr: 'function AdmissionsMothercarePrep()', newStr: 'function Admissions()' },
  { file: 'src/pages/Apply/Apply.tsx', oldStr: 'function ApplyWithForm()', newStr: 'function Apply()' },
  { file: 'src/pages/Contact/Contact.tsx', oldStr: 'function ContactUsDesktop()', newStr: 'function Contact()' },
  { file: 'src/pages/Gallery/Gallery.tsx', oldStr: 'function GalleryContactMothercarePrep()', newStr: 'function Gallery()' },
  { file: 'src/pages/Home/Home.tsx', oldStr: 'function HomeMothercarePrep()', newStr: 'function Home()' }
];

for (const {file, oldStr, newStr} of replacements) {
   let content = fs.readFileSync(file, 'utf8');
   content = content.replace(oldStr, newStr);
   fs.writeFileSync(file, content);
}
console.log('Exports updated.');
