import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../ui/Logo';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Planets', path: '/planets' },
    { name: 'Compare', path: '/compare' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="aura-nav-wrapper">
      <nav className="aura-nav glass-card">
        <Logo size="28px" />
        
        <div className="aura-nav-links">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`aura-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="active-pill-aura"
                  className="aura-active-indicator"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>

      <style>{`
        .aura-nav-wrapper {
          position: fixed;
          top: 3rem;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 2000;
          padding: 0 2rem;
        }
        .aura-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 2.5rem;
          background: rgba(10, 10, 10, 0.7);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          width: 100%;
          max-width: 1200px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        .aura-nav-links {
          display: flex;
          gap: 0.5rem;
        }
        .aura-nav-link {
          position: relative;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-dim);
          padding: 0.6rem 1.5rem;
          border-radius: 100px;
          transition: color 0.3s ease;
          letter-spacing: 0.05em;
          text-decoration: none;
        }
        .aura-nav-link:hover {
          color: white;
        }
        .aura-nav-link.active {
          color: white;
        }
        .aura-active-indicator {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          z-index: -1;
        }

        @media (max-width: 768px) {
          .aura-nav-wrapper {
            top: 0.75rem;
            padding: 0 0.75rem;
          }
          .aura-nav {
            padding: 0.4rem 0.75rem;
            justify-content: space-between;
            min-height: 50px;
          }
          .solaris-logo-v16 {
            display: flex;
            gap: 0.5rem;
          }
          .logo-text-v16 {
            display: block; /* Keep text on mobile but smaller */
            font-size: 0.7rem;
            letter-spacing: 0.15em;
          }
          .logo-v16 {
            width: 18px;
            height: 18px;
          }
          .aura-nav-links {
            gap: 0.15rem;
            width: auto;
          }
          .aura-nav-link {
            padding: 0.5rem 0.5rem;
            font-size: 0.7rem;
            font-weight: 600;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
