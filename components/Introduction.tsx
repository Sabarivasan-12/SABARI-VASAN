
import React from 'react';
import { ICON_MAP } from '../constants';

export const Introduction: React.FC = () => {
  return (
    <section id="intro" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">The Road to Autonomy</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            The evolution of Business Intelligence has reached its pinnacle. We've moved beyond simple visualization into the era of true data reasoning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0"></div>

          {/* 2024 */}
          <div className="relative z-10 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 flex items-center justify-center mb-6 font-bold text-lg">2024</div>
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">AI Hype Cycle</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The introduction of early Copilot features and basic natural language querying. AI was a tool, but required heavy human steering.
            </p>
          </div>

          {/* 2025 */}
          <div className="relative z-10 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 flex items-center justify-center mb-6 font-bold text-lg">2025</div>
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Deep Integration</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Microsoft Fabric becomes the bedrock. AI is baked into the semantic model, enabling automated dataset generation and documentation.
            </p>
          </div>

          {/* 2026 */}
          <div className="relative z-10 bg-microsoft-blue p-8 rounded-2xl shadow-xl shadow-blue-100 dark:shadow-none border border-blue-500 transform scale-105">
            <div className="w-12 h-12 rounded-full bg-white text-microsoft-blue flex items-center justify-center mb-6 font-bold text-lg">2026</div>
            <h3 className="text-xl font-bold mb-4 text-white">Autonomous BI</h3>
            <p className="text-blue-50 dark:text-blue-100 leading-relaxed">
              The engine proactively manages insights. Faster results, predictive alerts, and developer workflows that self-optimize.
            </p>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Why Autonomous?</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-microsoft-blue dark:text-blue-400">
                   {ICON_MAP.Zap}
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 dark:text-slate-100">Proactive Intelligence</h5>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Don't wait for reports to refresh. Power BI finds the outliers and notifies you with a complete root-cause story.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                   {ICON_MAP.Workflow}
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 dark:text-slate-100">Developer Velocity</h5>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Modern CI/CD and PBIR formats mean business teams and developers speak the same language at scale.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 animate-pulse"></div>
                <div className="space-y-2">
                   <div className="h-4 w-32 bg-slate-100 dark:bg-slate-700 rounded"></div>
                   <div className="h-3 w-48 bg-slate-50 dark:bg-slate-900 rounded"></div>
                </div>
             </div>
             <blockquote className="text-lg italic text-slate-700 dark:text-slate-300 leading-relaxed">
               "In 2026, we've removed the friction between asking a question and getting an answer. The data is now telling us what we need to know before we even think to ask."
             </blockquote>
             <div className="mt-6 font-bold text-slate-900 dark:text-white">— Satya Nadella, Build 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
};
