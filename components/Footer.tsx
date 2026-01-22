
import React from 'react';
import { ArrowRight, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <section id="enterprise" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Ready to lead with <br />
              <span className="text-microsoft-blue dark:text-blue-400 italic underline decoration-blue-200 dark:decoration-blue-900">Autonomous Intelligence?</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              Power BI in 2026 is not just a tool—it's your new competitive advantage. Join thousands of enterprise leaders who have already made the switch to Fabric and autonomous analytics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-microsoft-blue text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-600 transition-all shadow-2xl shadow-blue-200 dark:shadow-none transform hover:-translate-y-1 inline-flex items-center gap-3">
                Start Building Today
                <ArrowRight className="w-6 h-6" />
              </button>
              <button className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-microsoft-blue rounded flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5 p-1.5">
                  <div className="bg-white/40 w-full h-full"></div>
                  <div className="bg-white w-full h-full"></div>
                  <div className="bg-white/70 w-full h-full"></div>
                  <div className="bg-white/90 w-full h-full"></div>
                </div>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Power BI <span className="text-microsoft-blue">2026</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-sm text-sm leading-relaxed">
              The next evolution of enterprise data storytelling and autonomous analytics. Built for the era of intelligence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-microsoft-blue transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-microsoft-blue transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-microsoft-blue transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Features</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
              <li><a href="#" className="hover:text-microsoft-blue transition-colors">Copilot 2.0</a></li>
              <li><a href="#" className="hover:text-microsoft-blue transition-colors">Direct Lake</a></li>
              <li><a href="#" className="hover:text-microsoft-blue transition-colors">Visual Calcs</a></li>
              <li><a href="#" className="hover:text-microsoft-blue transition-colors">PBIR Format</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
              <li><a href="#" className="hover:text-microsoft-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-microsoft-blue transition-colors">Learning Path</a></li>
              <li><a href="#" className="hover:text-microsoft-blue transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-microsoft-blue transition-colors">Release Notes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Microsoft</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
              <li><a href="#" className="hover:text-microsoft-blue transition-colors inline-flex items-center gap-1">Fabric <ExternalLink size={12} /></a></li>
              <li><a href="#" className="hover:text-microsoft-blue transition-colors">Azure AI</a></li>
              <li><a href="#" className="hover:text-microsoft-blue transition-colors">Power Platform</a></li>
              <li><a href="#" className="hover:text-microsoft-blue transition-colors">OneLake</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 dark:text-slate-500 text-xs">
            © 2026 Microsoft Corporation. All rights reserved. Power BI and Fabric are trademarks of Microsoft.
          </p>
          <div className="flex gap-8 text-xs text-slate-400 dark:text-slate-500 font-medium">
            <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
