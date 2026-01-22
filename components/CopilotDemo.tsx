
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, Loader2, Bot } from 'lucide-react';

export const CopilotDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are Power BI Copilot 2.0. The user is asking about the 2026 features or general BI insights. Respond authoritatively but concisely as a professional AI assistant. The prompt: ${input}`,
        config: {
          systemInstruction: "You are Power BI Copilot 2.0. Be professional, technical, and forward-looking. Focus on the 'Autonomous BI' theme.",
        }
      });
      setResponse(res.text || "I'm sorry, I couldn't process that request at this time.");
    } catch (err) {
      console.error(err);
      setResponse("Feature currently in preview. Please try again with different parameters.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="copilot" className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-4 border border-blue-500/20">
            <Sparkles size={14} />
            INTERACTIVE PREVIEW
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Experience Copilot 2.0</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Test the autonomous reasoning engine. Ask about your hypothetical business data or the new 2026 features.
          </p>
        </div>

        <div className="bg-slate-800 rounded-3xl p-1 shadow-2xl border border-slate-700 max-w-3xl mx-auto">
          <div className="bg-slate-900 rounded-[calc(1.5rem-4px)] p-6 min-h-[400px] flex flex-col">
            <div className="flex-1 space-y-6 overflow-y-auto mb-6 pr-2">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                  <Bot size={20} />
                </div>
                <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none text-slate-200 text-sm max-w-[80%]">
                  Hello! I'm your Copilot 2.0 assistant. I've finished scanning the OneLake sales data. Would you like to see the automated root-cause analysis for the Q3 dip, or should we draft the executive narrative together?
                </div>
              </div>

              {response && (
                <div className="flex flex-row-reverse gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white flex-shrink-0">
                    <div className="w-4 h-4 bg-slate-400 rounded-sm"></div>
                  </div>
                  <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none text-white text-sm max-w-[80%]">
                    {input}
                  </div>
                </div>
              )}

              {response && (
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                    <Bot size={20} />
                  </div>
                  <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none text-slate-200 text-sm max-w-[80%] whitespace-pre-wrap leading-relaxed">
                    {response}
                  </div>
                </div>
              )}

              {loading && (
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                    <Bot size={20} />
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800 p-4 rounded-2xl rounded-tl-none text-slate-400 text-sm">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing data patterns...
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleAsk} className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Copilot about the 2026 features..."
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 pr-16 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-500"
              />
              <button 
                type="submit"
                disabled={loading || !input.trim()}
                className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white w-12 rounded-xl flex items-center justify-center hover:bg-blue-500 disabled:opacity-50 transition-all"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
           <button 
             onClick={() => setInput("Explain 'Visual Calculations' like I'm a beginner.")}
             className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 hover:bg-slate-700 transition-colors"
           >
             "Explain Visual Calculations"
           </button>
           <button 
             onClick={() => setInput("What are the benefits of Direct Lake over Import mode?")}
             className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 hover:bg-slate-700 transition-colors"
           >
             "Direct Lake vs Import"
           </button>
           <button 
             onClick={() => setInput("How does the 2026 PBIR format help developers?")}
             className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 hover:bg-slate-700 transition-colors"
           >
             "PBIR Benefits"
           </button>
        </div>
      </div>
    </section>
  );
};
