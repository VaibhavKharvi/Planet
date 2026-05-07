import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import planetsData from '../data/planets.json';
import PlanetModel from '../components/ui/PlanetModel';
import MetricCard from '../components/ui/MetricCard';

const PlanetDetail = () => {
  const { id } = useParams();
  const planet = planetsData.find(p => p.id === id);

  if (!planet) return <div className="container aura-page-padding">Planet not found</div>;

  const metrics = [
    { label: 'DIAMETER', value: planet.diameter },
    { label: 'MASS', value: planet.mass },
    { label: 'DISTANCE', value: planet.distance },
    { label: 'AVG TEMP', value: planet.temperature }
  ];

  return (
    <div className="detail-v13 aura-page-padding container">
      <div className="detail-grid-v13">
        
        <div className="detail-info-v13">
          <motion.header
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="detail-title-v13 text-gradient">{planet.name}</h1>
            <p className="detail-desc-v13">{planet.description}</p>
          </motion.header>

          <div className="detail-metrics-v13">
            {metrics.map((m, i) => (
              <MetricCard 
                key={m.label} 
                label={m.label} 
                value={m.value} 
                delay={0.4 + (i * 0.05)} 
              />
            ))}
          </div>

          <motion.div 
            className="detail-fact-v13 glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="fact-header-v13">
              <div className="fact-indicator-v13" style={{ background: planet.color }} />
              <span>RECORDED OBSERVATION</span>
            </div>
            <p className="fact-text-v13">{planet.fact}</p>
          </motion.div>
        </div>

        <div className="detail-visual-v13">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="viz-orb-v13"
          >
            <PlanetModel image={planet.image} color={planet.color} size="450px" hasRings={planet.id === 'saturn'} />
            <div className="viz-glow-v13" style={{ background: `radial-gradient(circle, ${planet.color}15 0%, transparent 70%)` }} />
          </motion.div>
        </div>

      </div>

      <style>{`
        .detail-grid-v13 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .viz-orb-v13 {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .viz-glow-v13 {
          position: absolute;
          inset: -60px;
          z-index: -1;
          filter: blur(40px);
        }

        .detail-title-v13 {
          font-size: var(--fs-h1);
          font-weight: 800;
          line-height: 1;
          margin-bottom: 2rem;
          letter-spacing: -0.04em;
        }
        .detail-desc-v13 {
          font-size: 1.1rem;
          color: var(--text-dim);
          line-height: 1.7;
          margin-bottom: 3.5rem;
          max-width: 500px;
        }

        .detail-metrics-v13 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .detail-fact-v13 {
          padding: 2.5rem;
          border-radius: 20px;
        }
        .fact-header-v13 {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--text-dim);
          margin-bottom: 1rem;
          letter-spacing: 0.15em;
        }
        .fact-indicator-v13 {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        .fact-text-v13 {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text);
        }

        @media (max-width: 1024px) {
          .detail-v13 {
            padding-top: 120px;
          }
          .detail-grid-v13 {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 4rem;
          }
          .detail-info-v13 {
            order: 2;
          }
          .detail-visual-v13 {
            order: 1;
          }
          .detail-desc-v13 {
            margin: 0 auto 3.5rem;
          }
          .detail-metrics-v13 {
            grid-template-columns: 1fr;
            text-align: left;
          }
          .detail-title-v13 {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PlanetDetail;
