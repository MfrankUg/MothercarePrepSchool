import { Link } from 'react-router';
import img27 from '../../assets/img_27.png';

export default function Footer() {
  return (
    <footer className="bg-slate-100 mt-20 pt-16 pb-8 rounded-t-[48px]">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <img src={img27} alt="Mothercare Logo" className="h-[56px] w-[68px] object-contain" />
          <h3 className="text-xl font-extrabold text-red-700 leading-snug">
            Mothercare Preparatory School
          </h3>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            Nurturing young minds from Baby Class to P.7 with a holistic curriculum that balances academic rigor and character development.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold text-slate-900">Quick Links</h4>
          <div className="flex flex-col gap-3 text-sm text-slate-500 font-medium">
            <Link to="/about" className="hover:text-red-700 transition">About Us</Link>
            <Link to="/academics" className="hover:text-red-700 transition">Academics</Link>
            <Link to="/admissions" className="hover:text-red-700 transition">Admissions Process</Link>
            <Link to="/apply" className="hover:text-red-700 transition">Apply Now</Link>
          </div>
        </div>

        {/* Connect */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold text-slate-900">Connect</h4>
          <div className="flex flex-col gap-3 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-red-700 transition">Facebook</a>
            <a href="#" className="hover:text-red-700 transition">Instagram</a>
            <a href="#" className="hover:text-red-700 transition">Twitter</a>
            <a href="#" className="hover:text-red-700 transition">LinkedIn</a>
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold text-slate-900">Contact Us</h4>
          <div className="flex flex-col gap-3 text-sm text-slate-500 font-medium">
            <p>Kasese Town, Uganda</p>
            <p>+256 123 456 789</p>
            <p>info@mothercare.edu</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-8 mt-8">
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Mothercare Preparatory School. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
