import { motion } from 'motion/react';

export const BackgroundParticles = () => {
  const particles = Array.from({ length: 60 });
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen">
      {particles.map((_, i) => {
        const isTeal = i % 2 === 0;
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-[1px] ${isTeal ? 'bg-teal-500/40' : 'bg-rose-400/30'
              }`}
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 10,
            }}
          />
        );
      })}
    </div>
  );
};
