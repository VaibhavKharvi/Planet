import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import planetsData from '../data/planets.json';
import PlanetModel from '../components/ui/PlanetModel';

const PlanetGallery = () => {
  return (
    <div className="gallery-v13 aura-page-padding container">
      <header className="page-header-v13">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="page-title-v13 text-gradient">Planetary Archive</h1>
        </motion.div>
      </header>

      <div className="gallery-grid-v13">
        {planetsData.map((planet, i) => (
          <motion.div 
            key={planet.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
          >
            <Link to={`/planets/${planet.id}`} className="planet-card-v13 glass-card">
              <div className="card-viz-v13">
                <PlanetModel 
                  image={planet.image}
                  color={planet.color} 
                  size="140px" 
                  speed={20} 
                  hasRings={planet.id === 'saturn'} 
                />
              </div>
              <div className="card-info-v13">
                <h3 className="card-name-v13">{planet.name}</h3>
                <p className="card-stat-v13">{planet.distance}</p>
                <div className="card-footer-v13">
                  <span>DISCOVER DATA</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <style>{`
        .page-header-v13 {
          margin-bottom: 5rem;
          text-align: center;
        }
        .page-title-v13 {
          font-size: var(--fs-h1);
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .gallery-grid-v13 {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .planet-card-v13 {
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .planet-card-v13:hover {
          transform: translateY(-6px);
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.15);
        }

        .card-viz-v13 {
          height: 180px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card-info-v13 {
          padding: 1.5rem;
        }
        .card-meta-v13 {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .card-index-v13 {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--text-dim);
        }
        .card-line-v13 {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.08);
        }
        .card-name-v13 {
          font-size: var(--fs-h3);
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        .card-stat-v13 {
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-bottom: 2rem;
        }
        .card-footer-v13 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          opacity: 0.6;
        }
        .planet-card-v13:hover .card-footer-v13 {
          opacity: 1;
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .page-title-v13 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default PlanetGallery;
