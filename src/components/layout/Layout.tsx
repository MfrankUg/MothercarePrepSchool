import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function RouteScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-['Be_Vietnam_Pro',sans-serif]">
      <RouteScrollReset />
      <Header />
      <main className="flex-1 mt-[88px]">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
