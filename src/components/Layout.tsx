import React from 'react';
import type { ReactNode } from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import Copyright from './Copyright';
import BackToTop from './BackToTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default Layout;
