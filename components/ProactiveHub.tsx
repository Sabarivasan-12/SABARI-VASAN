
import React, { useState, useEffect } from 'react';
import { Bell, TrendingUp, AlertCircle, CheckCircle2, Search, ArrowRight } from 'lucide-react';

interface Insight {
  id: number;
  type: 'trend' | 'anomaly' | 'success';
  title: string;
  description: string;
  time: string;
  impact: string;
}

const INSIGHTS: Insight[] = [
  {
    id: 1,
    type: 'trend',
    title: 'Emerging Market Opportunity',
    description: 'Autonomous scan detected 15% WoW growth in Southeast Asia regional sales, outpacing projections.',
    time: '2 mins ago',
    impact: 'High Impact'
  },
  {
    id: 2,
    type: 'anomaly',
    title: 'Supply Chain Latency Detected',
    description: 'Predictive model identified potential 48h delay in North American logistics hub due to localized weather.',
    time: '15 mins ago',
    impact: 'Critical'
  },
  {
    id: 3,
    type: 'success',
    title: 'CO2 Target Reached',
    description: 'Manufacturing efficiency gains have successfully offset Q4 carbon emissions ahead of schedule.',
    time: '1 hour ago',
    impact: 'Milestone'
  }
];

export const ProactiveHub: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % INSIGHTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hub" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-6 border border-emerald-500/20">
              <Bell size={14} className="animate-bounce" />
              ALWAYS-ON INTELLIGENCE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Stop looking for insights. <br />
              <span className="text-microsoft-blue dark:text-blue-400 italic">Let them find you.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              In 2026, the Power BI Autonomous Engine works in the background 24/7. It doesn't just refresh data—it understands it, surfaces anomalies, and suggests the next best action.
            </p>
            
            <div className="space-y-4">
              {INSIGHTS.map((insight, idx) => (
                <button
                  key={insight.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex gap-4 ${
                    activeIndex === idx
                      ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800 shadow-lg shadow-blue-100/50 dark:shadow-none translate-x-2'
                      : 'bg-white border-slate-100 dark:bg-slate-900 dark:border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    insight.type === 'trend' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400' :
                    insight.type === 'anomaly' ? 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400' :
                    'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400'
                  }`}>
                    {insight.type === 'trend' && <TrendingUp size={24} />}
                    {insight.type === 'anomaly' && <AlertCircle size={24} />}
                    {insight.type === 'success' && <CheckCircle2 size={24} />}
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-slate-900 dark:text-white">{insight.title}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{insight.time}</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">{insight.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden relative group shadow-2xl">
               <div className="absolute inset-0 p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-microsoft-blue flex items-center justify-center text-white">
                        <Search size={20} />
                      </div>
                      <div className="font-bold text-slate-800 dark:text-white">Autonomous Engine</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-widest animate-pulse">Scanning Live...</div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center space-y-8">
                     <div className="space-y-2">
                        <div className="h-2 w-1/4 bg-slate-200 dark:bg-slate-800 rounded"></div>
                        <div className="text-3xl font-bold text-slate-900 dark:text-white">
                          {INSIGHTS[activeIndex].title}
                        </div>
                     </div>
                     <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed min-h-[5rem]">
                        "{INSIGHTS[activeIndex].description}"
                     </div>
                     <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <div className="flex gap-4">
                           <div className="text-center">
                              <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Severity</div>
                              <div className="font-bold text-slate-900 dark:text-white">{INSIGHTS[activeIndex].impact}</div>
                           </div>
                           <div className="text-center">
                              <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Confidence</div>
                              <div className="font-bold text-slate-900 dark:text-white">98.4%</div>
                           </div>
                        </div>
                        <button className="flex items-center gap-2 bg-microsoft-blue text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors">
                           Take Action
                           <ArrowRight size={16} />
                        </button>
                     </div>
                  </div>
               </div>
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
