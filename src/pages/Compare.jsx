import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import planetsData from '../data/planets.json';
import PlanetModel from '../components/ui/PlanetModel';
import AuraDropdown from '../components/ui/AuraDropdown';

const Compare = () => {
  const [planetA, setPlanetA] = useState(planetsData[2]); // Earth
  const [planetB, setPlanetB] = useState(planetsData[3]); // Mars

  const getNumericValue = (str) => {
    if (typeof str !== 'string') str = str.toString();
    return parseFloat(str.replace(/[^0-9.]/g, '')) || 0;
  };

  const stats = [
    { label: 'DIAMETER', key: 'diameter' },
    { label: 'MASS', key: 'mass' },
    { label: 'DISTANCE', key: 'distance' },
    { label: 'TEMP', key: 'temperature' },
  ];

  return (
    <div className="compare-v15 aura-page-padding container">
      <header className="page-header-v15">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="page-title-v15 text-gradient">System Comparison</h1>
          <p className="page-subtitle-v15">Contrast the physical signatures of two celestial bodies</p>
        </motion.div>
      </header>

      <div className="compare-grid-v15">

        <div className="compare-selectors-v15">
          <AuraDropdown
            label="SUBJECT ALPHA"
            options={planetsData}
            value={planetA.id}
            onChange={(opt) => setPlanetA(opt)}
            color={planetA.color}
          />

          <div className="compare-vs-v15">VS</div>

          <AuraDropdown
            label="SUBJECT BETA"
            options={planetsData}
            value={planetB.id}
            onChange={(opt) => setPlanetB(opt)}
            color={planetB.color}
          />
        </div>

        <div className="compare-visuals-v15">
          <div className="duo-item-v15">
            <AnimatePresence mode="wait">
              <motion.div
                key={planetA.id}
                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.8 }}
                className="visual-container-v15"
              >
                <PlanetModel image={planetA.image} color={planetA.color} size="280px" hasRings={planetA.id === 'saturn'} />
                <h3 className="planet-name-v15" style={{ color: planetA.color }}>{planetA.name}</h3>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="duo-item-v15">
            <AnimatePresence mode="wait">
              <motion.div
                key={planetB.id}
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.8 }}
                className="visual-container-v15"
              >
                <PlanetModel image={planetB.image} color={planetB.color} size="280px" hasRings={planetB.id === 'saturn'} />
                <h3 className="planet-name-v15" style={{ color: planetB.color }}>{planetB.name}</h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="compare-metrics-v15 glass-card">
          {stats.map((s, i) => {
            const valA = getNumericValue(planetA[s.key]);
            const valB = getNumericValue(planetB[s.key]);
            const max = Math.max(valA, valB, 1);

            return (
              <div key={s.label} className="metric-row-v15">
                <div className="metric-label-v15">{s.label}</div>
                <div className="bars-container-v15">
                  <div className="bar-wrapper-v15">
                    <div className="bar-info-v15"><span>{planetA.name}</span><span>{planetA[s.key]}</span></div>
                    <div className="bar-track-v15">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(valA / max) * 100}%` }}
                        className="bar-fill-v15"
                        style={{ background: planetA.color }}
                      />
                    </div>
                  </div>
                  <div className="bar-wrapper-v15">
                    <div className="bar-info-v15"><span>{planetB.name}</span><span>{planetB[s.key]}</span></div>
                    <div className="bar-track-v15">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(valB / max) * 100}%` }}
                        className="bar-fill-v15"
                        style={{ background: planetB.color }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .compare-v15 {
          padding-top: 140px;
          padding-bottom: 100px;
        }
        .page-header-v15 {
          text-align: center;
          margin-bottom: 4rem;
        }
        .page-title-v15 {
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          margin-bottom: 1rem;
        }
        .page-subtitle-v15 {
          color: var(--text-dim);
          font-size: 1.1rem;
          letter-spacing: 0.05em;
        }

        .compare-selectors-v15 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 5rem;
        }
        .selector-group-v15 {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          min-width: 280px;
        }
        .selector-group-v15 label {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--text-dim);
          letter-spacing: 0.2em;
        }
        .aura-select-v15 {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 1.5rem;
          border-radius: 100px;
          color: white;
          font-weight: 700;
          outline: none;
          cursor: pointer;
          transition: all 0.3s;
          appearance: none;
        }
        .aura-select-v15:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .compare-vs-v15 {
          font-size: 1.2rem;
          font-weight: 900;
          color: var(--accent);
          opacity: 0.6;
          margin-top: 1.5rem;
        }

        .compare-visuals-v15 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 6rem;
        }
        .duo-item-v15 {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .visual-container-v15 {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        .planet-name-v15 {
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .compare-metrics-v15 {
          padding: 4rem;
          border-radius: 32px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .metric-row-v15 {
          margin-bottom: 4rem;
        }
        .metric-row-v15:last-child { margin-bottom: 0; }
        
        .metric-label-v15 {
          text-align: center;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-dim);
          letter-spacing: 0.25em;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding-bottom: 0.5rem;
        }
        .bars-container-v15 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        .bar-info-v15 {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .bar-track-v15 {
          height: 6px;
          background: rgba(255,255,255,0.03);
          border-radius: 100px;
          overflow: hidden;
        }
        .bar-fill-v15 {
          height: 100%;
          border-radius: 100px;
        }

        @media (max-width: 1100px) {
          .compare-v15 {
            padding-top: 100px;
          }
          .page-title-v15 {
            font-size: 2.75rem;
          }
          .compare-selectors-v15 {
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: 3rem;
          }
          .compare-vs-v15 { display: none; }
          
          .compare-visuals-v15 {
            grid-template-columns: 1fr;
            gap: 3rem;
            margin-bottom: 4rem;
          }
          .visual-container-v15 {
            transform: scale(0.9);
          }

          .compare-metrics-v15 {
            padding: 2.5rem;
            border-radius: 24px;
          }
          .metric-row-v15 {
            margin-bottom: 3rem;
          }
          .bars-container-v15 {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .compare-v15 {
            padding-top: 80px;
          }
          .page-title-v15 {
            font-size: 2.25rem;
          }
          .compare-metrics-v15 {
            padding: 1.5rem;
          }
          .visual-container-v15 {
            transform: scale(0.8);
          }
          .metric-row-v15 {
            margin-bottom: 2.5rem;
          }
          .bars-container-v15 {
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Compare;
