
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Kiosk: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-dark text-white font-display h-screen flex flex-col justify-between relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/10 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-30 blur-3xl rounded-full"></div>
      </div>

      <header className="relative z-10 flex w-full justify-between items-start p-8">
        <div className="flex flex-col">
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-white/40">LIGHT·MATTERS</span>
          <span className="text-xs font-mono tracking-widest text-white/20 mt-1">KIOSK ID: 04</span>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-white/10"></div>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center w-full px-6 gap-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-primary text-base font-bold tracking-[0.4em] uppercase border-b border-primary/30 pb-4 mb-4">Aera Series</h2>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none text-white mix-blend-overlay">AEROGEL</h1>
        </div>
        
        <div className="relative w-full max-w-sm aspect-square my-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent blur-3xl opacity-50"></div>
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-contain opacity-80 mix-blend-screen scale-110" 
            style={{ 
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcjyTM_asQZHXpLjFRGK1_HNENOwUxotzlWkP8xG1on4zkANnvLtzbV7Rus8jYtYm7zphCKCwKF6PbG0ALyodhaTZXbjaK-nqzn-nhIk0-vUY61ahyiY6C_VjgT_ka7uZLwommmDVh7lZCMhHTnl6Prf8WUlO0idhB3qv929O4hfeZlxiFTCUvLXIrJLZgP-zSpTAHfg4v9KuwMOcRlIzFnNapzDbUYESXHImOz6ID86fdjarRJ5tDDe9W2Y3n0hbp7WwWe6Kse7U")',
              maskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)'
            }}
          ></div>
        </div>

        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="group relative p-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500">
            <div className="bg-white p-4 rounded-lg shadow-2xl">
              <div 
                className="w-24 h-24 bg-center bg-no-repeat bg-cover" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARU8ZMHwqA3MCd_z55vthq1rD5isfX0U1W5cLtkQSQcT6njSPAYJwkR-ZOzIGOMZzwiVi73DjwywK0YhDiye0hNff6YUNEG5y_8Q9ug_IzEXonlS_BtnshWMJ7iW6YMrlJVHpFy61byWtEG6FEk-HvC0sKzxdye8CQSOSEYu8cISRYSIkIF3XBYOeazjG5Rd2AB5iu2BH2ovJlivH-8azaqrnU8nUC5Q62Bm8EgdE1cvWT5CCeRcuW_xcHIoMx5lduqPUaTDtXMPY")' }}
              ></div>
            </div>
          </div>
          <p className="text-white/40 text-sm font-medium tracking-widest uppercase text-center max-w-xs leading-relaxed">
            Scan to take the experience with you
          </p>
        </div>
      </main>

      <footer className="relative z-10 w-full bg-black/40 backdrop-blur-md border-t border-white/5 p-8">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <button onClick={() => navigate('/')} className="flex items-center gap-4 group px-6 py-4 rounded-xl hover:bg-white/5 transition-all">
            <span className="material-symbols-outlined text-white/40 group-hover:text-primary transition-colors text-3xl">refresh</span>
            <span className="text-sm font-bold tracking-[0.2em] text-white/80 group-hover:text-white uppercase">Home Screen</span>
          </button>
          <div className="h-8 w-px bg-white/10"></div>
          <button className="flex items-center gap-4 group px-6 py-4 rounded-xl hover:bg-white/5 transition-all">
            <span className="text-sm font-bold tracking-[0.2em] text-white/80 group-hover:text-white uppercase">English / Tiếng Việt</span>
            <span className="material-symbols-outlined text-white/40 group-hover:text-primary transition-colors text-3xl">language</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Kiosk;
