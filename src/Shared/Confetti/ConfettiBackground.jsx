import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiBackground = () => {
  useEffect(() => {
    const duration = 10000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 5 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#a3e635', '#f472b6', '#facc15', '#34d399'],
      });
    }, 500);

    // Continuous confetti every 6 seconds
    const infinite = setInterval(() => {
      confetti({
        ...defaults,
        particleCount: 40,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#a3e635', '#f472b6', '#facc15', '#34d399'],
      });
    }, 6000);

    return () => {
      clearInterval(interval);
      clearInterval(infinite);
    };
  }, []);

  return (
    <canvas
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      id="confetti-canvas"
    />
  );
};

export default ConfettiBackground;