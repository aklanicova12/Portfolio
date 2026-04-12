import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;

    const update = () => {
      const currentTime = video.currentTime;
      const duration = video.duration;

      if (duration > 0) {
        const fadeInDuration = 0.5;
        const fadeOutDuration = 0.5;

        if (currentTime < fadeInDuration) {
          // Fade in
          setOpacity(currentTime / fadeInDuration);
        } else if (currentTime > duration - fadeOutDuration) {
          // Fade out
          setOpacity((duration - currentTime) / fadeOutDuration);
        } else {
          // Fully visible
          setOpacity(1);
        }
      }

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    const handleEnded = () => {
      setOpacity(0);
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(() => {});
        }
      }, 100);
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-surface min-h-screen pt-24 pb-12">
      {/* Video Background Container */}
      <div 
        className="absolute w-full h-full pointer-events-none overflow-hidden"
        style={{ top: '300px', inset: 'auto 0 0 0' }}
      >
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          className="w-full h-full object-cover"
          muted
          playsInline
          autoPlay
          style={{ opacity }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
      </div>

      <div className="absolute inset-0 light-sweep opacity-30"></div>
      <div className="grain-overlay absolute inset-0"></div>
      
      {/* Blueprint Decoration */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl px-6 text-center"
      >
        <div className="bg-white/40 backdrop-blur-[10px] p-12 md:p-20 border border-outline-variant/10 shadow-[0_40px_100px_rgba(0,10,30,0.04)]">
          <p className="font-display italic text-3xl md:text-5xl text-primary leading-relaxed tracking-tight">
            "You can't really know where you are going until you know where you have been."
          </p>
          <p className="mt-8 font-sans uppercase tracking-[0.2em] text-secondary text-xs font-semibold">
            — Maya Angelou
          </p>
        </div>
      </motion.div>
    </section>
  );
}
