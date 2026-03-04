'use client';
import { ArrowRight, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-10 pt-40 pb-20">
      <div className="space-y-10 mb-32">
        <div className="inline-flex items-center gap-3 bg-indigo-600/10 border border-indigo-600/20 px-6 py-3 rounded-full">
           <Sparkles size={16} className="text-indigo-500" />
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Decentralized Academic Intelligence</span>
        </div>
        <h1 className="text-[130px] font-black leading-[0.8] tracking-tighter italic">
          Trustless <br/> <span className="text-indigo-600">Education.</span>
        </h1>
        <p className="text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
          The global settlement layer for academic credentials. Verified by Haskell scripts, secured by Cardano.
        </p>
        <div className="flex gap-6 mt-12">
          <Link href="/verify" className="bg-white text-black px-12 py-6 rounded-[32px] font-black text-xl hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-4 group">
            Verification Portal <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}