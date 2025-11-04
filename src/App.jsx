import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0f1115] antialiased [color-scheme:dark]">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-b-2xl border border-white/10 border-t-0 bg-[#0f1115]/70 px-4 py-3 backdrop-blur-xl">
        <a href="#home" className="font-display text-sm text-white/90">
          MW.A — Prompt Engineer
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default App;
