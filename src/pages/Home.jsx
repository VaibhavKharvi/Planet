import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PlanetModel from '../components/ui/PlanetModel';

const Home = () => {
  return (
    <div className="home-v15 aura-page-padding container">
      <div className="hero-split-v15">
        
        <motion.div 
          className="hero-content-v15"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-title-v15 text-gradient">
            Explore the <br/> 
            Infinite Expanse
          </h1>
          <p className="hero-desc-v15">
            Navigate the silent corridors of our solar system with a high-fidelity 
            interactive interface designed for precision discovery.
          </p>

          <div className="hero-actions-v15">
            <Link to="/planets" className="btn-aura-primary">
              EXPLORE CATALOG
            </Link>
            <Link to="/about" className="btn-aura-secondary">
              LEARN MORE
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual-v15"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="visual-wrapper-v15">
            <PlanetModel image="https://upload.wikimedia.org/wikipedia/commons/4/43/The_Earth_seen_from_Apollo_17_with_transparent_background.png" color="#6366F1" size="380px" />
            <div className="visual-bloom-v15" />
          </div>
        </motion.div>

      </div>

      <style>{`
        .home-v15 {
          min-height: 100vh;
          display: flex;
          align-items: center; /* This centers the grid vertically in the viewport */
          justify-content: center;
          padding-top: 220px; /* Brought whole section down as requested */
          padding-bottom: 100px;
        }
        .hero-split-v15 {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 6rem;
          align-items: center;
          width: 100%;
        }

        .hero-content-v15 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .hero-title-v15 {
          font-size: var(--fs-display);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 2rem;
          letter-spacing: -0.04em;
        }
        .hero-desc-v15 {
          font-size: 1.1rem;
          color: var(--text-dim);
          max-width: 480px;
          margin-bottom: 3.5rem;
          line-height: 1.7;
        }
        .hero-actions-v15 {
          display: flex;
          gap: 1.5rem;
        }
        .btn-aura-primary {
          background: #fff;
          color: #000;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          transition: all 0.3s;
        }
        .btn-aura-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255, 255, 255, 0.15);
        }
        .btn-aura-secondary {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          color: #fff;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          transition: all 0.3s;
        }
        .btn-aura-secondary:hover {
          transform: translateY(-3px);
          background: rgba(255,255,255,0.08);
        }

        .hero-visual-v15 {
          display: flex;
          justify-content: center;
        }
        .visual-wrapper-v15 {
          position: relative;
        }
        .visual-bloom-v15 {
          position: absolute;
          inset: -60px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          z-index: -1;
          filter: blur(40px);
        }

        @media (max-width: 1100px) {
          .home-v15 { 
            padding: 140px 1.5rem 60px; /* Increased padding to clear navbar */
            text-align: center;
            display: block;
          }
          .hero-split-v15 { 
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem; 
          }
          .hero-content-v15 { 
            align-items: center; 
            order: 1; 
          }
          .hero-title-v15 { 
            font-size: 2.5rem; 
            margin-bottom: 1rem;
            line-height: 1.2;
          }
          .hero-desc-v15 {
            margin-bottom: 2rem;
            max-width: 500px;
            font-size: 1rem;
          }
          .hero-visual-v15 { 
            order: 2; 
          }
          .visual-wrapper-v15 {
            transform: scale(0.85);
          }
          .hero-actions-v15 {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
            gap: 0.75rem;
            margin-bottom: 2rem;
          }
          .btn-aura-primary, .btn-aura-secondary {
            width: 100%;
            padding: 1rem;
          }
        }

        @media (max-width: 600px) {
          .home-v15 {
            padding-top: 130px; /* Refined for small phones */
          }
          .hero-title-v15 {
            font-size: 2.1rem;
          }
          .visual-wrapper-v15 {
            transform: scale(0.75);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
