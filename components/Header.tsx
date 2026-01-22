
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onToggleDark: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, onToggleDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-microsoft-blue rounded flex items-center justify-center">
            <div className="grid grid-cols-2 gap-0.5 p-1.5">
              <div className="bg-white/40 w-full h-full"></div>
              <div className="bg-white w-full h-full"></div>
              <div className="bg-white/70 w-full h-full"></div>
              <div className="bg-white/90 w-full h-full"></div>
            </div>
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors ${
            isScrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'
          }`}>
            Power BI <span className="text-microsoft-blue">2026</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-microsoft-blue dark:hover:text-microsoft-blue transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          <button 
            onClick={onToggleDark}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="bg-microsoft-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200 dark:shadow-none">
            Get Started
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={onToggleDark}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="text-slate-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 p-4 space-y-4 shadow-xl">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="block text-lg font-medium text-slate-700 dark:text-slate-200 px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="w-full bg-microsoft-blue text-white px-5 py-3 rounded-xl text-lg font-semibold">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};
