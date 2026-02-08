
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FieldGuide: React.FC = () => {
  const navigate = useNavigate();

  const chapters = [
    { id: '01', title: 'The Sol-Gel Process', desc: 'Understanding the transformation from liquid precursor to solid network structure.' },
    { id: '02', title: 'Thermal Insulators', desc: 'How trapping air in silica creates a barrier against extreme heat transfer.' },
    { id: '03', title: 'Optical Properties', desc: 'Rayleigh scattering explain why aerogel looks like frozen smoke.' }
  ];

  const glossary = [
    { term: 'Tyndall Effect', desc: 'The scattering of light by particles in a colloid or in a very fine suspension.', icon: 'science', color: 'bg-primary/10' },
    { term: 'Lattice', desc: 'The regular geometric arrangement of points in crystal space.', icon: 'grid_4x4', color: 'bg-purple-500/10' },
    { term: 'Hydrophobic', desc: 'Property of a substance that repels water. Critical for aerogel durability.', icon: 'water_drop', color: 'bg-green-500/10' }
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col pb-24 bg-background-light dark:bg-background-dark font-display">
      <header className="fixed top-0 z-50 w-full glass-panel transition-colors duration-300">
        <div className="flex items-center p-4 pb-3 justify-between">
          <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-start">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[0.05em] flex-1 text-center uppercase">LIGHT·MATTERS</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="text-slate-900 dark:text-white transition-opacity hover:opacity-70">
              <span className="material-symbols-outlined">bookmark_border</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto px-6 pt-24">
        <section className="flex flex-col mb-10">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-[36px] font-bold leading-[1.1] mb-2">Digital Field Guide</h1>
          <p className="text-slate-500 font-body text-base font-normal leading-relaxed mb-8">Explore the ethereal properties of the world's lightest solid through our interactive exhibition companion.</p>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button className="flex-1 flex items-center justify-center rounded-xl h-12 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all">
              <span className="material-symbols-outlined mr-2 text-[20px]">menu_book</span>
              <span>Read Online</span>
            </button>
            <button className="flex-1 flex items-center justify-center rounded-xl h-12 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-bold">
              <span className="material-symbols-outlined mr-2 text-[20px]">download</span>
              <span>Download PDF</span>
            </button>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold">Table of Contents</h3>
            <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">View All</button>
          </div>
          <div className="flex flex-col gap-4">
            {chapters.map(c => (
              <div key={c.id} className="glass-panel group relative cursor-pointer active:scale-[0.99] transition-all p-5 rounded-2xl">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase bg-primary/10 px-2 py-1 rounded">Chapter {c.id}</span>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_forward</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{c.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-6">Scientific Glossary</h3>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-6 -mx-6 px-6 snap-x">
            {glossary.map(g => (
              <div key={g.term} className="snap-center shrink-0 w-[240px] glass-panel rounded-2xl p-5 flex flex-col justify-between h-[180px] relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-24 h-24 ${g.color} rounded-bl-full`}></div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary text-[20px]">{g.icon}</span>
                    <h5 className="font-bold text-slate-900 dark:text-white">{g.term}</h5>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{g.desc}</p>
                </div>
                <button className="text-[10px] font-bold text-primary uppercase tracking-widest mt-auto hover:underline text-left">Learn more</button>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl overflow-hidden relative h-48 w-full mb-12 shadow-inner bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 opacity-50"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
          <div className="relative z-10 text-center flex flex-col items-center">
            <span className="p-4 rounded-full glass-panel mb-3 shadow-lg">
              <span className="material-symbols-outlined text-slate-800 dark:text-white text-3xl">360</span>
            </span>
            <p className="text-[10px] font-bold text-slate-800 dark:text-white uppercase tracking-[0.3em]">360° Material Viewer</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FieldGuide;
