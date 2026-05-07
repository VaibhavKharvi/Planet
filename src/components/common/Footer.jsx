import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="aura-footer glass-card">
      <div className="container footer-grid">
        
        <div className="footer-brand">
          <Logo size="32px" />
          <p className="footer-tagline">
            A high-fidelity interface for exploring the silent corridors 
            of our planetary system.
          </p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <span className="link-label">NAVIGATION</span>
            <Link to="/">Home</Link>
            <Link to="/planets">Planets</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/about">About</Link>
          </div>
          
          <div className="link-group">
            <span className="link-label">CONNECT</span>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">X / Twitter</a>
            <a href="https://discord.com" target="_blank" rel="noreferrer">Discord</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <span className="copyright">© 2026 SOLARIS ARCHIVE. ALL RIGHTS RESERVED.</span>
          <div className="system-status">
            <div className="status-dot" />
            <span>SYSTEMS OPERATIONAL // L2 POINT</span>
          </div>
        </div>
      </div>

      <style>{`
        .aura-footer {
          margin-top: 100px;
          padding: 80px 0 0;
          border-left: none;
          border-right: none;
          border-bottom: none;
          background: rgba(10, 10, 10, 0.5);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          padding-bottom: 80px;
        }

        .footer-tagline {
          color: var(--text-dim);
          font-size: 0.95rem;
          line-height: 1.7;
          max-width: 400px;
          margin-top: 2rem;
        }

        .footer-links {
          display: flex;
          gap: 6rem;
          justify-content: flex-end;
        }
        .link-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .link-label {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: var(--accent);
          margin-bottom: 1rem;
        }
        .link-group a {
          font-size: 0.9rem;
          color: var(--text-dim);
          transition: color 0.3s;
        }
        .link-group a:hover {
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2.5rem 0;
        }
        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .copyright {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.1em;
        }
        .system-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--text-dim);
          letter-spacing: 0.15em;
        }
        .status-dot {
          width: 6px;
          height: 6px;
          background: #10B981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10B981;
        }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr; text-align: center; gap: 4rem; }
          .footer-tagline { margin: 0 auto; }
          .footer-links { justify-content: center; gap: 4rem; }
          .bottom-content { flex-direction: column; gap: 1.5rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
