/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import TechSection from './components/TechSection';
import Closure from './components/Closure';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Narrative />
        <TechSection />
        <Closure />
      </main>
      <Footer />
    </div>
  );
}
