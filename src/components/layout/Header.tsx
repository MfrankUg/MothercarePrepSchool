import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import img27 from '../../assets/img_27.png'; // Mothercare Logo

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const baseLinkClass = "transition font-bold py-1 border-b-2";
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? `${baseLinkClass} text-red-700 border-red-700` 
      : `${baseLinkClass} text-slate-600 border-transparent hover:text-red-700 hover:border-red-200`;

  // For the mobile menu where links are stacked
  const mobileLinkClass = "block px-4 py-3 text-lg font-bold text-slate-800 hover:bg-slate-50 hover:text-red-700 rounded-xl transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={img27} alt="Mothercare Logo" className="h-[48px] md:h-[56px] object-contain drop-shadow-sm" />
          <span className="text-red-700 font-extrabold text-lg md:text-xl tracking-tight hidden sm:block">
            Mothercare Preparatory School
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
          <NavLink to="/about" className={getLinkClass}>About</NavLink>
          <NavLink to="/academics" className={getLinkClass}>Academics</NavLink>
          <NavLink to="/admissions" className={getLinkClass}>Admissions</NavLink>
          <NavLink to="/gallery" className={getLinkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
        </div>
        
        {/* Desktop CTA / Mobile Hamburger Wrapper */}
        <div className="flex items-center">
          {/* Hidden on mobile, block on md and up */}
          <Link to="/apply" className="hidden md:block bg-red-700 text-white px-6 py-2.5 rounded-full font-bold shadow-sm hover:bg-red-800 transition text-sm">
            Apply Now
          </Link>

          {/* Hamburger Menu Icon (Mobile Only) */}
          <button 
            className="md:hidden p-2 text-slate-800 hover:text-red-700 focus:outline-none transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? (
              // Close (X) Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Menu Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden shadow-2xl">
          <div className="px-4 py-6 space-y-2 max-w-sm mx-auto">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>About</Link>
            <Link to="/academics" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>Academics</Link>
            <Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>Admissions</Link>
            <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>Gallery</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>Contact</Link>
            
            <div className="pt-6 mt-4 border-t border-slate-100">
              <Link 
                to="/apply" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-red-700 text-white px-6 py-4 rounded-xl font-bold shadow-md hover:bg-red-800 transition text-lg"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
