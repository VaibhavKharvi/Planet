import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AuraDropdown = ({ options, value, onChange, label, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find(opt => opt.id === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="aura-dropdown-v15" ref={dropdownRef}>
      <div className="aura-dropdown-label-v15">{label}</div>
      <div 
        className={`aura-dropdown-trigger-v15 ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        style={{ borderColor: isOpen ? `${color}66` : 'rgba(255,255,255,0.1)' }}
      >
        <span>{selectedOption.name}</span>
        <motion.svg 
          width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" 
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          <path d="M6 9l6 6 6-6"/>
        </motion.svg>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="aura-dropdown-menu-v15 glass-card"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {options.map((opt) => (
              <div 
                key={opt.id}
                className={`aura-dropdown-item-v15 ${opt.id === value ? 'selected' : ''}`}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
              >
                <div className="item-indicator-v15" style={{ background: opt.color }} />
                <span>{opt.name}</span>
                {opt.id === value && <div className="item-active-v15" style={{ background: opt.color }} />}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .aura-dropdown-v15 {
          position: relative;
          width: 100%;
          z-index: 50;
        }
        .aura-dropdown-label-v15 {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--text-dim);
          letter-spacing: 0.2em;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }
        .aura-dropdown-trigger-v15 {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 1.5rem;
          border-radius: 100px;
          color: white;
          font-weight: 700;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aura-dropdown-trigger-v15:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .aura-dropdown-trigger-v15.active {
          background: rgba(255, 255, 255, 0.12);
        }

        .aura-dropdown-menu-v15 {
          position: absolute;
          top: calc(100% + 0.75rem);
          left: 0;
          right: 0;
          background: rgba(10, 10, 10, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 0.75rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          max-height: 400px;
          overflow-y: auto;
        }
        
        .aura-dropdown-item-v15 {
          padding: 0.8rem 1rem;
          border-radius: 12px;
          color: rgba(255,255,255,0.7);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }
        .aura-dropdown-item-v15:hover {
          background: rgba(255, 255, 255, 0.05);
          color: white;
        }
        .aura-dropdown-item-v15.selected {
          background: rgba(255, 255, 255, 0.08);
          color: white;
        }

        .item-indicator-v15 {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .item-active-v15 {
          position: absolute;
          right: 1rem;
          width: 4px;
          height: 4px;
          border-radius: 50%;
        }

        /* Custom Scrollbar */
        .aura-dropdown-menu-v15::-webkit-scrollbar {
          width: 4px;
        }
        .aura-dropdown-menu-v15::-webkit-scrollbar-track {
          background: transparent;
        }
        .aura-dropdown-menu-v15::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default AuraDropdown;
