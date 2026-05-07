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
            top: 1rem;
            padding: 0 1rem;
          }
          .aura-nav {
            padding: 0.5rem 1rem;
            justify-content: space-between;
          }
          .solaris-logo-v16 {
            display: flex; /* Restore logo on small screens */
          }
          .logo-text-v16 {
            display: none; /* Hide logo text but keep the icon to save space */
          }
          .aura-nav-links {
            gap: 0.25rem;
            width: auto;
            justify-content: flex-end;
          }
          .aura-nav-link {
            padding: 0.6rem 0.6rem;
            font-size: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
