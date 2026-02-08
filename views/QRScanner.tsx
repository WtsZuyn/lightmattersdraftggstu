
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QRScanner: React.FC = () => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    // Simulate a successful scan after 2 seconds
    const timer = setTimeout(() => {
      setScanning(false);
      // Automatically redirect to Aerogel detail as a successful result
      setTimeout(() => navigate('/materials/aerogel'), 800);
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-black text-white font-display">
      {/* Simulation of camera feed */}
      <div className="absolute inset-0 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <header className="relative z-10 flex w-full justify-between items-start p-6">
        <button onClick={() => navigate(-1)} className="glass-panel size-12 flex items-center justify-center rounded-full">
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
           <span className="text-[10px] font-bold uppercase tracking-widest text-primary animate-pulse">Scanning Exhibit...</span>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center w-full px-6">
        <div className="relative size-64 flex items-center justify-center">
          {/* Scanning Box */}
          <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl"></div>
          
          {/* Scanning Corners */}
          <div className="absolute -top-[2px] -left-[2px] size-12 border-t-4 border-l-4 border-primary rounded-tl-3xl"></div>
          <div className="absolute -top-[2px] -right-[2px] size-12 border-t-4 border-r-4 border-primary rounded-tr-3xl"></div>
          <div className="absolute -bottom-[2px] -left-[2px] size-12 border-b-4 border-l-4 border-primary rounded-bl-3xl"></div>
          <div className="absolute -bottom-[2px] -right-[2px] size-12 border-b-4 border-r-4 border-primary rounded-br-3xl"></div>

          {/* Animated Scanning Line */}
          {scanning && (
            <div className="absolute w-full h-1 bg-primary/60 shadow-[0_0_15px_rgba(37,175,244,0.8)] animate-scan-line top-0"></div>
          )}

          {!scanning && (
            <div className="flex flex-col items-center gap-4 animate-scale-up">
              <span className="material-symbols-outlined text-primary text-6xl shadow-glow">check_circle</span>
              <p className="text-sm font-bold tracking-[0.2em] uppercase">Exhibit Identified</p>
            </div>
          )}
        </div>

        <p className="mt-12 text-center text-white/50 text-xs font-medium tracking-widest uppercase max-w-[200px] leading-relaxed">
          Point your camera at the QR code near the exhibit
        </p>
      </main>

      <footer className="relative z-10 p-12 flex justify-center">
        <button className="flex items-center gap-3 text-white/40 hover:text-white transition-colors">
          <span className="material-symbols-outlined">lightbulb</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Toggle Flashlight</span>
        </button>
      </footer>

      <style>{`
        @keyframes scan-line {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-line {
          animation: scan-line 2s infinite linear;
        }
        @keyframes scale-up {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-up {
          animation: scale-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default QRScanner;
