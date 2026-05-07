import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const stars = Array.from({ length: 250 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random(),
      t: Math.random() * 100
    }));

    const shootingStars = [];

    const draw = () => {
      ctx.fillStyle = '#000005';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Nebula Glows
      const time = Date.now() * 0.0005;
      const g1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time) * 100, 
        canvas.height * 0.3 + Math.cos(time) * 100, 
        0, 
        canvas.width * 0.3, 
        canvas.height * 0.3, 
        canvas.width * 0.6
      );
      g1.addColorStop(0, 'rgba(99, 102, 241, 0.05)');
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const g2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(time * 0.8) * 150, 
        canvas.height * 0.6 + Math.sin(time * 0.8) * 150, 
        0, 
        canvas.width * 0.7, 
        canvas.height * 0.6, 
        canvas.width * 0.5
      );
      g2.addColorStop(0, 'rgba(6, 182, 212, 0.04)');
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Stars
      stars.forEach(star => {
        star.y -= star.speed;
        if (star.y < 0) star.y = canvas.height;
        
        const opacity = (Math.sin(star.t + Date.now() * 0.002) + 1) / 2;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Shooting Stars
      if (Math.random() < 0.015) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          len: Math.random() * 80 + 20,
          speed: Math.random() * 10 + 5,
          opacity: 1
        });
      }

      shootingStars.forEach((s, i) => {
        s.x -= s.speed;
        s.y += s.speed * 0.5;
        s.opacity -= 0.02;
        
        if (s.opacity <= 0) {
          shootingStars.splice(i, 1);
          return;
        }

        const grad = ctx.createLinearGradient(s.x, s.y, s.x + s.len, s.y - s.len * 0.5);
        grad.addColorStop(0, `rgba(255, 255, 255, ${s.opacity})`);
        grad.addColorStop(1, 'transparent');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.len, s.y - s.len * 0.5);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default Starfield;
