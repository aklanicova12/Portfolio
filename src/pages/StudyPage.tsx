import { motion } from 'motion/react';

export default function StudyPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center bg-[#FAFAFA]"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Studium</h1>
        <p className="text-gray-500 text-lg">Tato sekce se připravuje.</p>
      </div>
    </motion.div>
  );
}
