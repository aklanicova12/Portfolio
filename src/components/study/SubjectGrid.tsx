import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Footer from '../Footer';
import { SUBJECTS, Subject } from '../../data/studyData';

interface SubjectGridProps {
  onBack: () => void;
  onSelectSubject: (subject: Subject) => void;
}

export const SubjectGrid = ({ onBack, onSelectSubject }: SubjectGridProps) => {
  return (
    <motion.div
      key="semester1-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute inset-0 z-20 overflow-y-auto overflow-x-hidden pt-32 flex flex-col min-h-full"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex-grow w-full pb-24">
        <button
          onClick={onBack}
          className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors mb-12 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <ArrowLeft size={18} />
          </div>
          <span className="font-sans uppercase tracking-widest text-xs font-semibold">Zpět na výběr semestru</span>
        </button>

        <div className="mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">Semester 1</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              onClick={() => onSelectSubject(subject)}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-sans uppercase tracking-wider text-white/80 mb-4">
                  {subject.tags[0]}
                </span>
                <h3 className="font-headline text-2xl font-bold text-white leading-tight">{subject.title}</h3>
              </div>
              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-white/40 group-hover:text-white/80 transition-colors">
                <span className="text-sm font-sans">View Reflection</span>
                <ArrowLeft size={16} className="rotate-180" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};
