
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Materials Index', path: '/materials' },
    { label: 'Exhibit Map', path: '/map' },
    { label: 'Visit Info', path: '/visit' },
    { label: 'Field Guide', path: '/guide' },
    { label: 'Kiosk Mode', path: '/kiosk' }
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel">
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-[#0d171c] dark:text-white text-lg font-bold leading-tight tracking-[0.05em] uppercase">
            LIGHT<span className="text-primary">·</span>MATTERS
          </h2>
          <button onClick={() => setIsMenuOpen(true)} className="flex items-center justify-center rounded-full p-2 text-[#0d171c] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>menu</span>
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative pt-16">
        <section className="relative flex flex-col items-center justify-center min-h-[60vh] w-full py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-background-light to-background-light dark:from-[#15232b] dark:to-background-dark opacity-80 -z-10"></div>
          <div className="flex-1 flex flex-col items-center justify-center gap-12 w-full">
            <div className="relative flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary shadow-glow animate-pulse"></div>
              <div className="absolute w-64 h-64 rounded-full border border-primary/5 dark:border-primary/10"></div>
              <div className="absolute w-32 h-32 rounded-full border border-primary/10 dark:border-primary/20"></div>
            </div>
            <div className="flex flex-col items-center gap-2 px-6 max-w-lg text-center">
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Exhibition</span>
              <h1 className="text-[#0d171c] dark:text-white tracking-tight text-[40px] font-thin leading-[1.1]">
                The Weight<br/><span className="font-normal text-primary/80">of Light</span>
              </h1>
            </div>
          </div>
          <div className="absolute bottom-8 animate-bounce text-slate-400">
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </div>
        </section>

        <section className="px-6 py-12 bg-white/40 dark:bg-black/20 backdrop-blur-sm">
          <div className="max-w-xl mx-auto space-y-8">
            <p className="text-[#0d171c] dark:text-slate-300 text-lg md:text-xl font-light leading-relaxed text-center">
              Experience the intersection of science and art. Discover the ethereal world of Aerogel—the solid smoke that holds the sky in its structure.
            </p>
            <div className="flex justify-center gap-6 pt-4">
              {[
                { icon: 'opacity', label: 'Density' },
                { icon: 'light_mode', label: 'Optics' },
                { icon: 'science', label: 'Material' }
              ].map(i => (
                <div key={i.label} className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-3xl font-thin">{i.icon}</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{i.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 pb-24">
          <div className="max-w-xl mx-auto">
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#15232b] shadow-xl border border-slate-100 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="relative w-full sm:w-1/3 h-48 sm:h-auto bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwD8Z2dZNV1BHxKviTklquLndr2eCvfzbAxKtJlZxac53CqLT736dggP0xym8bhLGLr4Ke-D8aIXBGHRdGyisTgbTb4lgq8VeLIwZJ5y7x7heIdCU6dADhRv8c7V09nYhTdEA2nByxV5P7X6wG8cyTd8DVNiiHTBPvK7DvE-tfaUWo08u4sqWBJDs2CSNfNNGkY3DbeEazlIpQyflh6zFvW0Xb-jWGBAyGsb7yKr2a2NY5nVBbQe74mD7LZOsMeLRJPs8nWc2RSL4")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent sm:bg-gradient-to-r"></div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                      <p className="text-primary text-xs font-bold tracking-wider uppercase">Open Daily</p>
                    </div>
                    <h3 className="text-[#0d171c] dark:text-white text-2xl font-bold">Plan Your Visit</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Open 10am - 6pm. <br/>Last entry at 5:15pm.</p>
                  </div>
                  <button onClick={() => navigate('/visit')} className="group/btn flex items-center gap-2 text-[#0d171c] dark:text-white text-sm font-bold border-b-2 border-primary/20 hover:border-primary pb-1 transition-all w-fit">
                    <span>Get Tickets</span>
                    <span className="material-symbols-outlined text-lg transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Fullscreen Menu Overlay */}
      <div className={`${isMenuOpen ? 'fixed' : 'hidden'} inset-0 z-[60] bg-[#f8fbfc]/95 dark:bg-[#101c22]/95 backdrop-blur-xl transition-opacity duration-300`}>
        <div className="flex h-full w-full flex-col p-6">
          <div className="flex items-center justify-between pb-8">
            <h2 className="text-[#0d171c] dark:text-white text-lg font-bold tracking-[0.05em] uppercase">
              LIGHT<span className="text-primary">·</span>MATTERS
            </h2>
            <button onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center rounded-full p-2 text-[#0d171c] dark:text-white hover:bg-black/5 dark:hover:bg-white/10">
              <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>close</span>
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center">
            <ul className="flex flex-col gap-6">
              {menuItems.map((item, idx) => (
                <li key={item.path} onClick={() => { navigate(item.path); setIsMenuOpen(false); }} className="group flex items-center gap-4 cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <p className="text-[#0d171c] dark:text-white text-3xl font-thin group-hover:font-normal transition-all">{item.label}</p>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
