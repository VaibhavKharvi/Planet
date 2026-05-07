import React from 'react';
import { motion } from 'framer-motion';

const PlanetModel = ({ color, size = "300px", speed = 20, hasRings = false, image }) => {
  const isImage = !!image;

  return (
    <div className="planet-container" style={{ width: size, height: size }}>
      {isImage ? (
        <motion.div
          className="planet-image-wrapper"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 1, -1, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {/* Direct Transparent PNG - No borders, no boxes */}
          <img 
            src={image} 
            alt="Planet" 
            className="planet-image-v16"
          />
          {/* Circular Glow behind the PNG to ensure no boxy shadows */}
          <div className="planet-image-glow" style={{ background: `radial-gradient(circle, ${color}44 0%, transparent 70%)` }} />
        </motion.div>
      ) : (
        <>
          <motion.div
            className="planet-orb"
            animate={{ rotate: 360 }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            style={{
              width: '100%',
              height: '100%',
              background: `radial-gradient(circle at 30% 30%, ${color} 0%, #000 80%)`,
              boxShadow: `inset -20px -20px 50px rgba(0,0,0,0.8), 0 0 40px ${color}44`
            }}
          >
            <div className="texture-overlay" style={{ borderColor: `${color}22` }} />
          </motion.div>

          {hasRings && (
            <motion.div 
              className="planet-rings"
              animate={{ rotate: 360 }}
              transition={{ duration: speed * 1.5, repeat: Infinity, ease: "linear" }}
              style={{
                borderColor: `${color}44`
              }}
            />
          )}
        </>
      )}

      <style>{`
        .planet-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }
        .planet-orb {
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }
        .planet-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0;
          overflow: visible;
          background: transparent;
        }
        .planet-image-v16 {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          position: relative;
          z-index: 2;
          /* Explicitly ensuring no filters or borders that could create a box */
          border: none;
          outline: none;
          box-shadow: none;
          filter: none;
        }
        .planet-image-glow {
          position: absolute;
          inset: -10%;
          z-index: 1;
          border-radius: 50%;
          filter: blur(30px);
          opacity: 0.4;
        }
        .texture-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px solid transparent;
          background-image: 
            radial-gradient(circle at 50% 50%, transparent 60%, rgba(0,0,0,0.2) 100%),
            repeating-radial-gradient(circle at 10% 10%, rgba(255,255,255,0.05) 0px, transparent 40px);
          opacity: 0.5;
        }
        .planet-rings {
          position: absolute;
          width: 160%;
          height: 40%;
          border: 15px double;
          border-radius: 50%;
          transform: rotateX(75deg);
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default PlanetModel;
