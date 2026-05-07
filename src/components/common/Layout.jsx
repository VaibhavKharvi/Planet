import React from 'react';
import Navbar from './Navbar';
import Starfield from './Starfield';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Starfield />
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
