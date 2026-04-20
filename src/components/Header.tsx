import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when resizing to desktop screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Domů', path: '/' },
    { name: 'Příběh', path: '/pribeh' },
    { name: 'Studium', path: '/studium' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-md border-b border-outline-variant/20">
      <nav className="relative flex justify-between items-center px-6 md:px-10 py-6 w-full max-w-full z-10">
        <div className="text-xl font-bold tracking-[-0.04em] text-[#002147] font-headline">
          Anna Klanicová
        </div>
        
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path} 
              className={({isActive}) => isActive ? "font-headline font-bold tracking-tight text-[#002147] border-b-2 border-secondary" : "font-headline font-bold tracking-tight text-[#002147]/60 hover:text-secondary transition-colors duration-300"}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 -mr-1 text-[#002147] focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-[100dvh] w-full bg-white/60 backdrop-blur-[20px] z-0 flex flex-col items-center justify-center md:hidden pb-20 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(255,180,150,0.15)_0%,transparent_100%)]"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6 relative z-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                  className="w-full text-center"
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({isActive}) => 
                      `text-3xl font-headline font-bold tracking-tight transition-all duration-300 block py-5 px-8 ${
                        isActive 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-[0_0_15px_rgba(217,70,239,0.3)] scale-110' 
                          : 'text-[#002147] hover:scale-105 hover:text-purple-600'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
