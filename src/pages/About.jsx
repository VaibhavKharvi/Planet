import React from 'react';
import { motion } from 'framer-motion';

const missions = [
  { 
    year: '1961', 
    name: 'Vostok 1', 
    category: 'Human Flight',
    desc: 'The defining moment of the 20th century. Yuri Gagarin becomes the first human to orbit Earth.',
    stats: [
      { l: 'TIME', v: '108 M' },
      { l: 'PILOT', v: 'GAGARIN' }
    ],
    color: '#6366F1'
  },
  { 
    year: '1969', 
    name: 'Apollo 11', 
    category: 'Lunar Landing',
    desc: 'The culmination of the space race. Humanity steps onto another celestial body for the first time.',
    stats: [
      { l: 'STAY', v: '21.5 H' },
      { l: 'KG', v: '21.5' }
    ],
    color: '#10B981'
  },
  { 
    year: '1977', 
    name: 'Voyager 1', 
    category: 'Interstellar',
    desc: 'Our farthest messenger. Currently traveling through the void between stars beyond our system.',
    stats: [
      { l: 'KM', v: '23.3B' },
      { l: '05.09.77', v: 'DATE' }
    ],
    color: '#F59E0B'
  },
  { 
    year: '1990', 
    name: 'Hubble', 
    category: 'Telescope',
    desc: 'Expanding our vision. Capturing the light of the early universe from its station in low Earth orbit.',
    stats: [
      { l: 'KM', v: '547' },
      { l: 'MIRROR', v: '2.4 M' }
    ],
    color: '#8B5CF6'
  },
  { 
    year: '2021', 
    name: 'James Webb', 
    category: 'Infrared',
    desc: 'The most powerful telescope ever built, designed to observe the first light from the birth of galaxies.',
    stats: [
      { l: 'TARGET', v: 'STARS' },
      { l: 'L2', v: 'POINT' }
    ],
    color: '#EF4444'
  },
  { 
    year: 'Future', 
    name: 'Artemis', 
    category: 'Colony',
    desc: 'The next chapter. Establishing a permanent presence on the Moon to prepare for the voyage to Mars.',
    stats: [
      { l: 'POLE', v: 'SOUTH' },
      { l: 'VESSEL', v: 'ORION' }
    ],
    color: '#EC4899'
  }
];

const About = () => {
  return (
    <div className="about-v13 aura-page-padding container">
      <header className="page-header-v13">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="page-title-v13 text-gradient">System Chronicles</h1>
        </motion.div>
      </header>

      <div className="about-grid-v13">
        {missions.map((m, i) => (
          <motion.div 
            key={i}
            className="about-card-v13 glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
          >
            <div className="about-card-top-v13">
              <span className="about-year-v13" style={{ color: m.color }}>{m.year}</span>
              <span className="about-cat-v13">{m.category}</span>
            </div>

            <h3 className="about-name-v13">{m.name}</h3>
            <p className="about-desc-v13">{m.desc}</p>

            <div className="about-footer-v13">
              {m.stats.map((s, si) => (
                <div key={si} className="footer-stat-v13">
                  <span className="stat-l-v13">{s.l}</span>
                  <span className="stat-v-v13">{s.v}</span>
                </div>
              ))}
            </div>
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

        .about-grid-v13 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .about-card-v13 {
          padding: 1.75rem;
          border-radius: 16px;
          transition: all 0.4s;
        }
        .about-card-v13:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.15);
        }

        .about-card-top-v13 {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 1.5rem;
        }
        .about-year-v13 {
          font-size: 1.4rem;
          font-weight: 900;
        }
        .about-cat-v13 {
          font-size: 0.6rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-dim);
        }

        .about-name-v13 {
          font-size: 1.35rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
        }
        .about-desc-v13 {
          font-size: 0.85rem;
          color: var(--text-dim);
          line-height: 1.6;
          margin-bottom: 2rem;
          min-height: 4rem;
        }

        .about-footer-v13 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .footer-stat-v13 {
          display: flex;
          flex-direction: column;
        }
        .stat-l-v13 {
          font-size: 0.6rem;
          font-weight: 900;
          color: var(--text-dim);
          margin-bottom: 0.25rem;
        }
        .stat-v-v13 {
          font-size: 1.1rem;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .about-grid-v13 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default About;
