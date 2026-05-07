import React from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ label, value, delay = 0 }) => {
  return (
    <motion.div 
      className="metric-card glass-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <span className="metric-label">{label}</span>
      <span className="metric-value">{value}</span>
      
      <style>{`
        .metric-card {
          padding: 2rem;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.02);
        }
        .metric-label {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .metric-value {
          font-size: 1.5rem;
          font-weight: 800;
        }
      `}</style>
    </motion.div>
  );
};

export default MetricCard;
