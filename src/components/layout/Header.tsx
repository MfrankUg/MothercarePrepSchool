import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logos/mothercare_official_logo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Turn solid after scrolling 60px
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return `transition-colors duration-200 font-bold py-1 border-b-2 text-sm border-red-500 text-red-500`;
    }
    return `transition-colors duration-200 font-bold py-1 border-b-2 text-sm border-transparent ${
      scrolled
        ? 'text-slate-700 hover:text-red-600 hover:border-red-300'
        : 'text-white hover:text-red-400 hover:border-red-400'
    }`;
  };

  const mobileLinkClass =
    'block px-4 py-3 text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-red-700 rounded-xl transition-colors';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-black/45 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src={logo}
            alt="Mothercare Logo"
            className="h-[44px] md:h-[52px] object-contain drop-shadow-sm"
          />
          <span
            className={`font-extrabold text-base md:text-lg tracking-tight hidden sm:block transition-colors duration-300 ${
              scrolled ? 'text-red-700' : 'text-white'
            }`}
          >
            Mothercare Preparatory School
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/"           end className={getLinkClass}>Home</NavLink>
          <NavLink to="/about"          className={getLinkClass}>About</NavLink>
          <NavLink to="/academics"      className={getLinkClass}>Academics</NavLink>
          <NavLink to="/admissions"     className={getLinkClass}>Admissions</NavLink>
          <NavLink to="/gallery"        className={getLinkClass}>Gallery</NavLink>
          <NavLink to="/contact"        className={getLinkClass}>Contact</NavLink>
        </div>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/apply"
            className={`hidden md:block font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 ${
              scrolled
                ? 'bg-red-700 text-white shadow-sm hover:bg-red-800'
                : 'bg-white text-red-700 shadow-lg hover:bg-red-50'
            }`}
          >
            Apply Now
          </Link>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-slate-800 hover:text-red-700' : 'text-white hover:text-white/70'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-b border-gray-100 shadow-xl`}
      >
        <div className="px-4 py-6 space-y-1 max-w-sm mx-auto">
          {[
            { to: '/',           label: 'Home' },
            { to: '/about',      label: 'About' },
            { to: '/academics',  label: 'Academics' },
            { to: '/admissions', label: 'Admissions' },
            { to: '/gallery',    label: 'Gallery' },
            { to: '/contact',    label: 'Contact' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileLinkClass}
            >
              {label}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-slate-100">
            <Link
              to="/apply"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-red-700 text-white px-6 py-4 rounded-xl font-bold shadow-md hover:bg-red-800 transition-colors text-base"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
