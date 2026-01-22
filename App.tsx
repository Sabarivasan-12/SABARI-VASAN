
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { ProactiveHub } from './components/ProactiveHub';
import { FeatureGrid } from './components/FeatureGrid';
import { CopilotDemo } from './components/CopilotDemo';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-slate-950">
      <Header isDark={isDark} onToggleDark={() => setIsDark(!isDark)} />
      <main>
        <Hero />
        <Introduction />
        <ProactiveHub />
        <FeatureGrid />
        <CopilotDemo />
      </main>
      <Footer />
    </div>
  );
};

export default App;
