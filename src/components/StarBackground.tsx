import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const stars: { x: number, y: number, size: number, speed: number, angle: number }[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const createStar = () => ({
      x: Math.random() * width + width / 2,
      y: Math.random() * -height,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 5 + 2,
      angle: 0.8 // Diagonal angle
    });

    for (let i = 0; i < 40; i++) stars.push(createStar());

    const animate = () => {
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.x -= star.speed;
        star.y += star.speed * 0.5;

        // Draw trail
        ctx.strokeStyle = `rgba(167, 139, 250, ${0.3 + Math.random() * 0.5})`;
        ctx.lineWidth = star.size;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + star.speed * 3, star.y - star.speed * 1.5);
        ctx.stroke();

        // Regenerate if off screen
        if (star.x < -100 || star.y > height + 100) {
          Object.assign(star, createStar());
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default StarBackground;
