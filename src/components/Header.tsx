import { Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-md border-b border-outline-variant/20">
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 w-full max-w-full">
        <div className="text-xl font-bold tracking-[-0.04em] text-[#002147] font-headline">
          Anna Klanicová
        </div>
        
        <div className="hidden md:flex gap-10 items-center">
          <NavLink 
            to="/" 
            className={({isActive}) => isActive ? "font-headline font-bold tracking-tight text-[#002147] border-b-2 border-secondary" : "font-headline font-bold tracking-tight text-[#002147]/60 hover:text-secondary transition-colors duration-300"}
          >
            Domů
          </NavLink>
          <NavLink 
            to="/pribeh" 
            className={({isActive}) => isActive ? "font-headline font-bold tracking-tight text-[#002147] border-b-2 border-secondary" : "font-headline font-bold tracking-tight text-[#002147]/60 hover:text-secondary transition-colors duration-300"}
          >
            Příběh
          </NavLink>
          <NavLink 
            to="/studium" 
            className={({isActive}) => isActive ? "font-headline font-bold tracking-tight text-[#002147] border-b-2 border-secondary" : "font-headline font-bold tracking-tight text-[#002147]/60 hover:text-secondary transition-colors duration-300"}
          >
            Studium
          </NavLink>
        </div>

        <div className="flex items-center">
          <Menu className="w-6 h-6 text-[#002147] cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}
