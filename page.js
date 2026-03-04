'use client';
import { Search, BadgeCheck, University } from 'lucide-react';

export default function Verify() {
  return (
    <div className="max-w-7xl mx-auto px-10 pt-40">
      <h2 className="text-6xl font-black italic border-b border-white/5 pb-10 mb-20">Registry <span className="text-indigo-600">Trace.</span></h2>
      <div className="grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-8 space-y-12">
           <div className="bg-[#0b0e14] p-12 rounded-[50px] border border-white/5 shadow-2xl">
              <div className="flex items-center gap-4 bg-[#020306] p-4 rounded-[30px] border border-white/5 mb-10">
                 <Search className="text-slate-600 ml-4" />
                 <input className="bg-transparent flex-1 outline-none font-bold text-xl" placeholder="Credential Hash or Student ID..." />
              </div>
              <p className="text-center text-slate-700 text-[10px] font-black uppercase tracking-widest italic">Enter a unique identifier to query the Haskell ledger</p>
           </div>
        </div>
        <div className="lg:col-span-4 bg-indigo-600/5 border border-indigo-600/20 p-12 rounded-[50px]">
           <BadgeCheck className="text-indigo-500 mb-6" size={40} />
           <h4 className="text-xl font-black mb-6 italic uppercase">Chain Validity</h4>
           <div className="space-y-4">
              <div className="flex justify-between text-xs py-2 border-b border-white/5"><span className="text-slate-500">Status</span> <span className="font-bold text-emerald-500 tracking-widest">ACTIVE</span></div>
              <div className="flex justify-between text-xs py-2 border-b border-white/5"><span className="text-slate-500">Node</span> <span className="font-bold">Mainnet Relay 1</span></div>
           </div>
        </div>
      </div>
    </div>
  );
}