import React, { useEffect, useRef } from 'react';

const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const draw = () => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gap = 40;
      const rows = Math.ceil(canvas.height / gap);
      const cols = Math.ceil(canvas.width / gap);
      
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = x * gap;
          const py = y * gap;
          
          const distFromCenter = Math.sqrt(Math.pow(x - cols/2, 2) + Math.pow(y - rows/2, 2));
          const wave = Math.sin(distFromCenter * 0.2 - time) * 15;
          
          const size = Math.max(1, (Math.sin(x * 0.5 + time) + 1) * 2);
          const alpha = Math.max(0.1, (Math.cos(y * 0.2 + time) + 1) / 2 * 0.5);

          ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`;
          ctx.beginPath();
          ctx.arc(px + gap/2, py + gap/2 + wave, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 0.02;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60 pointer-events-none" />;
};

export default HeroCanvas;