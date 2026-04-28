/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import StoryPage from './pages/StoryPage';
import StudyPage from './pages/StudyPage';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
      {/* @ts-expect-error - React Router types don't explicitly include key, but AnimatePresence requires it */}
      <Routes location={location}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pribeh" element={<StoryPage />} />
        <Route path="/studium" element={<StudyPage />} />
        <Route path="/studium/:semesterId" element={<StudyPage />} />
        <Route path="/studium/:semesterId/:subjectId" element={<StudyPage />} />
      </Routes>
    </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}
