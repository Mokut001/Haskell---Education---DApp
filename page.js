'use client';
import { Microscope, Activity } from 'lucide-react';

export default function Research() {
  return (
    <div className="max-w-7xl mx-auto px-10 pt-40">
      <div className="flex justify-between items-center mb-20">
        <h2 className="text-6xl font-black italic tracking-tighter">Research <span className="text-indigo-600">Funding.</span></h2>
        <div className="flex items-center gap-3 bg-emerald-500/10 px-6 py-3 rounded-full border border-emerald-500/20">
           <Activity className="text-emerald-500 animate-pulse" size={16} />
           <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Protocol Sync: 100%</span>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-10">
        {[1,2,3].map(i => (
          <div key={i} className="bg-[#0b0e14] p-10 rounded-[40px] border border-white/5 shadow-xl hover:border-indigo-600/30 transition-all group">
             <div className="p-4 bg-indigo-600/10 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
                <Microscope className="text-indigo-600" />
             </div>
             <h4 className="text-2xl font-black italic mb-2">Project Delta-{i}</h4>
             <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10 italic">Advanced quantum communication protocols for secure research data transmission.</p>
             <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 w-1/3 shadow-[0_0_10px_#4f46e5]" />
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}