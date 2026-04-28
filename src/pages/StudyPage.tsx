import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useParams, useNavigate } from 'react-router-dom';
import { SUBJECTS } from '../data/studyData';
import { SemesterSelection } from '../components/study/SemesterSelection';
import { SubjectGrid } from '../components/study/SubjectGrid';
import { SubjectDetailOverlay } from '../components/study/SubjectDetailOverlay';

export default function StudyPage() {
  const { semesterId, subjectId } = useParams();
  const navigate = useNavigate();

  // Derived state from URL
  const view = semesterId ? 'semester1' : 'balloons';
  const selectedSubject = subjectId ? SUBJECTS.find(s => s.id === subjectId) || null : null;

  // Lock body scroll when overlay is active to prevent multiple scrollbars
  useEffect(() => {
    if (selectedSubject || view === 'semester1') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedSubject, view]);

  const handleSetView = (v: 'balloons' | 'semester1', id?: string) => {
    if (v === 'balloons') navigate('/studium');
    else navigate(`/studium/${id || 'semestr-1'}`);
  };

  const handleSetSelectedSubject = (subject: typeof SUBJECTS[0] | null) => {
    if (!subject) {
      navigate(`/studium/${semesterId || 'semestr-1'}`);
    } else {
      navigate(`/studium/${semesterId || 'semestr-1'}/${subject.id}`);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-900 text-white">
      {/* Background Video */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        animate={{
          scale: view === 'semester1' ? 1.5 : 1,
          filter: view === 'semester1' ? 'blur(20px)' : 'blur(0px)'
        }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <video
          src="/Flow_202604162211.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-slate-950/60 z-0 pointer-events-none"></div>
      </motion.div>

      <AnimatePresence mode="wait">
        {view === 'balloons' ? (
          <SemesterSelection onSetView={handleSetView} />
        ) : (
          <SubjectGrid 
            onBack={() => handleSetView('balloons')} 
            onSelectSubject={handleSetSelectedSubject} 
          />
        )}
      </AnimatePresence>

      {/* Digital Journal Full-Screen Overlay */}
      <AnimatePresence>
        {selectedSubject && (
          <SubjectDetailOverlay
            selectedSubject={selectedSubject}
            onClose={() => handleSetSelectedSubject(null)}
            onSelectSubject={handleSetSelectedSubject}
            onBackToSelection={() => {
              handleSetSelectedSubject(null);
              handleSetView('balloons');
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
