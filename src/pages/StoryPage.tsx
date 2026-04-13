import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Narrative from '../components/Narrative';
import TechSection from '../components/TechSection';
import Closure from '../components/Closure';

export default function StoryPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Hero />
      <Narrative />
      <TechSection />
      <Closure />
    </motion.div>
  );
}
