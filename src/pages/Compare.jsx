import React, { useState } from 'react';
import { motion } from 'framer-motion';
import planetsData from '../data/planets.json';
import PlanetModel from '../components/ui/PlanetModel';

const Compare = () => {
  const [planetA, setPlanetA] = useState(planetsData[2]);
  const [planetB, setPlanetB] = useState(planetsData[3]);

  const getNumericValue = (str) => {
    if (typeof str !== 'string') str = str.toString();
    return parseFloat(str.replace(/[^0-9.]/g, ''));
  };

  const stats = [
    { label: 'DIAMETER', key: 'diameter' },
    { label: 'MASS', key: 'mass' },
    { label: 'DISTANCE', key: 'distance' },
    { label: 'TEMP', key: 'temperature' },
  ];

  return (
    <div className="compare-v13 aura-page-padding container">
      <header className="page-header-v13">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="page-title-v13 text-gradient">System Duel</h1>
        </motion.div>
      </header>

      <div className="compare-grid-v13">
        
        <div className="compare-selectors-v13">
          <div className="selector-group-v13">
            <label>SUBJECT A</label>
            <select 
              value={planetA.id} 
              onChange={(e) => setPlanetA(planetsData.find(p => p.id === e.target.value))}
              className="glass-card"
            >
              {planetsData.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div className="compare-vs-v13 flex-center">VS</div>
          <div className="selector-group-v13">
            <label>SUBJECT B</label>
            <select 
              value={planetB.id} 
              onChange={(e) => setPlanetB(planetsData.find(p => p.id === e.target.value))}
              className="glass-card"
            >
              {planetsData.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
        </div>

        <div className="compare-duo-v13">
          <motion.div key={planetA.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="duo-item-v13">
            <PlanetModel image={planetA.image} color={planetA.color} size="240px" hasRings={planetA.id === 'saturn'} />
            <h3 style={{ color: planetA.color }}>{planetA.name.toUpperCase()}</h3>
          </motion.div>

          <motion.div key={planetB.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="duo-item-v13">
            <PlanetModel image={planetB.image} color={planetB.color} size="240px" hasRings={planetB.id === 'saturn'} />
            <h3 style={{ color: planetB.color }}>{planetB.name.toUpperCase()}</h3>
          </motion.div>
        </div>

        <div className="compare-metrics-v13 glass-card">
          {stats.map((s, i) => {
            const valA = getNumericValue(planetA[s.key]);
            const valB = getNumericValue(planetB[s.key]);
            const max = Math.max(valA, valB);
            
            return (
              <div key={s.label} className="metric-row-v13">
                <div className="metric-header-v13">
                  <span className="metric-name-v13">{s.label}</span>
                </div>
                
                <div className="metric-bars-v13">
                  <div className="bar-stack-v13">
                    <div className="bar-meta-v13"><span>{planetA.name}</span><span>{planetA[s.key]}</span></div>
                    <div className="bar-track-v13"><motion.div initial={{width:0}} animate={{width:`${(valA/max)*100}%`}} className="bar-fill-v13" style={{background:planetA.color}} /></div>
                  </div>
                  <div className="bar-stack-v13">
                    <div className="bar-meta-v13"><span>{planetB.name}</span><span>{planetB[s.key]}</span></div>
                    <div className="bar-track-v13"><motion.div initial={{width:0}} animate={{width:`${(valB/max)*100}%`}} className="bar-fill-v13" style={{background:planetB.color}} /></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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

        .compare-selectors-v13 {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 5rem;
        }
        .selector-group-v13 {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
          max-width: 260px;
        }
        .selector-group-v13 label {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--text-dim);
          letter-spacing: 0.15em;
        }
        .selector-group-v13 select {
          padding: 1rem 1.5rem;
          border-radius: 12px;
          color: white;
          font-weight: 700;
          outline: none;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .selector-group-v13 select option {
          background: #0A0A0A;
          color: white;
        }
        .compare-vs-v13 {
          height: 48px;
          font-weight: 900;
          color: var(--accent);
          font-size: 0.8rem;
        }

        .compare-duo-v13 {
          display: flex;
          justify-content: space-around;
          margin-bottom: 6rem;
        }
        .duo-item-v13 {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .duo-item-v13 h3 {
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .compare-metrics-v13 {
          padding: 3rem;
          border-radius: 24px;
          max-width: 900px;
          margin: 0 auto;
        }
        .metric-row-v13 {
          margin-bottom: 3rem;
        }
        .metric-row-v13:last-child { margin-bottom: 0; }
        
        .metric-header-v13 {
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .metric-name-v13 {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: var(--text-dim);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding-bottom: 0.4rem;
        }

        .metric-bars-v13 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        .bar-meta-v13 {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
        }
        .bar-track-v13 {
          height: 4px;
          background: rgba(255,255,255,0.03);
          border-radius: 2px;
          overflow: hidden;
        }
        .bar-fill-v13 {
          height: 100%;
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .compare-v13 {
            padding-top: 120px;
          }
          .compare-selectors-v13 {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .selector-group-v13 {
            max-width: 100%;
          }
          .compare-vs-v13 {
            height: auto;
            padding: 1rem 0;
          }
          .compare-duo-v13 {
            flex-direction: column;
            gap: 4rem;
          }
          .compare-metrics-v13 {
            padding: 1.5rem;
          }
          .metric-bars-v13 {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Compare;
