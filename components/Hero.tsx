
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-microsoft-blue dark:text-blue-400 text-sm font-bold mb-6 border border-blue-100 dark:border-blue-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            NOW AVAILABLE: THE 2026 EDITION
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
            Power BI in 2026: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-microsoft-blue to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              The Era of Autonomous Business Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl">
            Experience the shift from static dashboards to intelligent, self-driving analytics. Power BI now proactively identifies trends, resolves anomalies, and authors its own narratives while you focus on strategic decision-making.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#features" 
              className="inline-flex items-center justify-center gap-2 bg-microsoft-blue text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-100 dark:shadow-none transform hover:-translate-y-1"
            >
              Explore the 2026 Features
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <Play className="w-5 h-5 fill-current" />
              Watch Keynote
            </button>
          </div>
        </div>

        {/* Feature Preview Mockup */}
        <div className="mt-20 relative">
          <div className="bg-slate-900 rounded-3xl p-4 shadow-2xl border border-slate-800 transform rotate-1">
             <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden aspect-video shadow-inner relative">
                {/* Simulated UI */}
                <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 flex">
                   <div className="w-16 bg-white dark:bg-slate-800 border-r border-slate-100 dark:border-slate-700 hidden sm:block"></div>
                   <div className="flex-1 p-6 space-y-6">
                      <div className="flex justify-between items-center">
                         <div className="h-8 w-48 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse"></div>
                         <div className="flex gap-2">
                            <div className="h-8 w-24 bg-blue-100 dark:bg-blue-900/30 rounded-full"></div>
                            <div className="h-8 w-8 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                         </div>
                      </div>
                      <div className="grid grid-cols-3 gap-6">
                         <div className="h-40 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm p-4 flex flex-col justify-between">
                            <div className="w-1/2 h-4 bg-slate-100 dark:bg-slate-700 rounded"></div>
                            <div className="w-full h-24 bg-blue-50 dark:bg-blue-900/10 rounded-lg"></div>
                         </div>
                         <div className="h-40 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm p-4 flex flex-col justify-between">
                            <div className="w-1/2 h-4 bg-slate-100 dark:bg-slate-700 rounded"></div>
                            <div className="w-full h-24 bg-indigo-50 dark:bg-indigo-900/10 rounded-lg"></div>
                         </div>
                         <div className="h-40 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm p-4 flex flex-col justify-between">
                            <div className="w-1/2 h-4 bg-slate-100 dark:bg-slate-700 rounded"></div>
                            <div className="w-full h-24 bg-sky-50 dark:bg-sky-900/10 rounded-lg"></div>
                         </div>
                      </div>
                      <div className="h-64 bg-slate-100 dark:bg-slate-800 rounded-2xl relative overflow-hidden flex items-center justify-center">
                        <div className="text-slate-400 dark:text-slate-500 text-sm font-medium">Copilot 2.0 Analyzing Projections...</div>
                        <div className="absolute bottom-4 right-4 h-12 w-48 bg-white dark:bg-slate-700 shadow-lg rounded-full flex items-center px-4 gap-2 border border-slate-100 dark:border-slate-600">
                           <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                           <div className="text-xs font-semibold text-slate-600 dark:text-slate-200">Proactive Insights Found</div>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl hidden lg:block border border-slate-50 dark:border-slate-700">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                   <Zap size={20} />
                </div>
                <div>
                   <div className="text-sm font-bold text-slate-800 dark:text-slate-100">Direct Lake</div>
                   <div className="text-xs text-slate-500 dark:text-slate-400">Sub-second Latency</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Zap = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
