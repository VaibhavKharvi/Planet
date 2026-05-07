import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Logo = ({ size = "24px" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  return (
    <a href="/" onClick={handleLogoClick} className="solaris-logo-v16">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
        <circle cx="20" cy="20" r="8" fill="var(--accent)" />
        <path d="M20 2L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 34L20 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 20L34 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 20L2 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="8" r="3" fill="white" fillOpacity="0.8" />
      </svg>
      <span className="logo-text-v16">SOLARIS</span>
      <style>{`
        .solaris-logo-v16 {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: white;
          transition: transform 0.3s ease;
        }
        .solaris-logo-v16:hover {
          transform: scale(1.02);
        }
        .logo-text-v16 {
          font-weight: 900;
          letter-spacing: 0.4em;
          font-size: 0.85rem;
          line-height: 1;
        }
      `}</style>
    </a>
  );
};

export default Logo;
