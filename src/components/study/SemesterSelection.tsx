import { motion } from 'motion/react';
import { Lock } from 'lucide-react';
import { BackgroundParticles } from './BackgroundParticles';
import { HOTSPOTS, Hotspot } from '../../data/studyData';

interface SemesterSelectionProps {
  onSetView: (view: 'balloons' | 'semester1', id?: string) => void;
}

export const SemesterSelection = ({ onSetView }: SemesterSelectionProps) => {
  return (
    <motion.div
      key="balloons-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-10 flex items-center justify-center w-full h-full overflow-hidden"
    >
      <BackgroundParticles />

      {/* Architectural Lens System - Radiant Bloom */}
      <div className="absolute z-10 grid grid-cols-2 md:flex items-center justify-items-center justify-center gap-x-1 gap-y-4 md:gap-12 w-full h-full px-4 md:px-20 overflow-y-auto md:overflow-hidden py-24 md:py-0">
        {HOTSPOTS.map((spot: Hotspot, index: number) => (
          <div key={spot.id} className="group relative flex flex-col items-center">
            <motion.div
              className={`relative flex items-center justify-center w-32 h-44 md:w-[180px] md:h-[250px] flex-shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${spot.isLocked
                ? 'cursor-not-allowed z-0 opacity-60 hover:scale-105'
                : 'cursor-pointer z-10 hover:z-30 hover:scale-105'
                }`}
              animate={{
                y: [0, -15, 0]
              }}
              transition={{
                duration: 4 + (index * 0.2),
                repeat: Infinity,
                ease: "easeInOut",
                delay: spot.delay
              }}
              onClick={() => !spot.isLocked && onSetView('semester1', spot.id)}
            >
              {/* Lens Structure & Frame */}
              <div className={`absolute inset-0 rounded-[2.5rem] border-[4px] border-slate-950 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${!spot.isLocked
                ? 'group-hover:bg-white/40 group-hover:shadow-[0_0_25px_rgba(255,180,150,0.5)] group-hover:border-white/30'
                : ''
                }`}>
                {/* Inner Facets & Structural Lines */}
                <div className={`absolute inset-2 md:inset-3 rounded-[1.8rem] border transition-all duration-400 ${!spot.isLocked ? 'border-white/20 group-hover:border-white/40' : 'border-white/20'}`}></div>
                <div className={`absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 transition-colors duration-400 ${!spot.isLocked ? 'bg-white/10 group-hover:bg-white/30' : 'bg-white/10'}`}></div>
                <div className={`absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 transition-colors duration-400 ${!spot.isLocked ? 'bg-white/10 group-hover:bg-white/30' : 'bg-white/10'}`}></div>

                {/* Subtle Light Caustics overlay */}
                <motion.div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-400 ${!spot.isLocked ? 'opacity-20 group-hover:opacity-40' : 'opacity-20'}`}
                  style={{ background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.4) 40%, transparent 60%)', backgroundSize: '200% 200%' }}
                  animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
                  transition={{ duration: 8 + index, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              <div className={`font-serif text-7xl md:text-9xl transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] relative z-10 text-white/90 ${!spot.isLocked
                ? 'group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]'
                : ''
                }`}>
                {spot.letter}
              </div>
            </motion.div>

            {/* Under-Card Hover Label */}
            <div className="absolute top-[105%] left-1/2 -translate-x-1/2 pt-4 opacity-100 md:opacity-0 translate-y-0 md:translate-y-[-10px] pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] md:group-hover:opacity-100 md:group-hover:translate-y-0">
              <div className="flex items-center gap-2 font-sans font-semibold text-white tracking-widest text-[10px] sm:text-xs md:text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] whitespace-nowrap bg-black/20 md:bg-transparent px-3 py-1 rounded-full backdrop-blur-sm md:backdrop-blur-none">
                {spot.isLocked && <Lock size={12} className="text-white/80" />}
                {spot.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
