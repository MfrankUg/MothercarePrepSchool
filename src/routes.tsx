import { createBrowserRouter } from 'react-router';
import Home from './pages/Home/Home';
import Admissions from './pages/Admissions/Admissions';
import Academics from './pages/Academics/Academics';
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';
import Apply from './pages/Apply/Apply';
import Contact from './pages/Contact/Contact';

import Layout from './components/layout/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/admissions',
        Component: Admissions,
      },
      {
        path: '/academics',
        Component: Academics,
      },
      {
        path: '/gallery',
        Component: Gallery,
      },
      {
        path: '/apply',
        Component: Apply,
      },
      {
        path: '/contact',
        Component: Contact,
      },
    ]
  }
], {
  basename: import.meta.env.BASE_URL
});