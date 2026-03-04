import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#020306] text-white antialiased">
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020306]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-black italic">S</div>
              <span className="text-2xl font-black tracking-tighter italic uppercase">ScholarsGate</span>
            </Link>
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em]">
              <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
              <Link href="/verify" className="hover:text-indigo-500 transition-colors">Verify</Link>
              <Link href="/research" className="hover:text-indigo-500 transition-colors">Research</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}