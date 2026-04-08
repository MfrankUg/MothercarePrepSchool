import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-['Be_Vietnam_Pro',sans-serif]">
      <Header />
      <main className="flex-1 mt-[88px]">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
