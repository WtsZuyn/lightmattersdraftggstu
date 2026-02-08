
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MATERIALS } from '../constants';

const MaterialsIndex: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Lightest', 'Strongest', 'Smartest', 'Greenest'];

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark border-x border-slate-200 dark:border-slate-800 shadow-2xl">
      <header className="flex items-center justify-between p-6 pb-2 sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
        <h1 onClick={() => navigate('/')} className="text-slate-900 dark:text-white text-sm font-bold tracking-[0.2em] uppercase leading-tight flex-1 cursor-pointer">
          Light·Matters
        </h1>
        <button className="flex items-center justify-center rounded-full w-10 h-10 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white">
          <span className="material-symbols-outlined !text-[24px]">search</span>
        </button>
      </header>

      <div className="px-6 pt-6 pb-2">
        <h2 className="text-slate-900 dark:text-white text-3xl font-light tracking-tight leading-tight">Materials Index</h2>
        <p className="text-slate-500 text-xs font-medium uppercase tracking-widest mt-2">Curated by LIGHT·MATTERS</p>
      </div>

      <div className="sticky top-[60px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-6 py-4">
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${filter === f ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-6 pb-24">
        {MATERIALS.map(material => (
          <div
            key={material.id}
            onClick={() => navigate(`/materials/${material.id}`)}
            className="glass-panel group relative flex flex-col rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer transition-transform duration-300 active:scale-95 hover:shadow-lg"
          >
            <div className="absolute top-4 right-4 z-10 opacity-60">
              <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-lg">arrow_outward</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 z-0"></div>
            <div className="flex-1 flex items-center justify-center p-4 relative z-10">
              <img
                alt={material.name}
                className="w-full h-full object-contain drop-shadow-xl mix-blend-multiply dark:mix-blend-normal opacity-90 transition-transform group-hover:scale-105 duration-500"
                src={material.image}
              />
              <span className="absolute text-5xl font-black text-primary/5 select-none -rotate-12 pointer-events-none uppercase">
                {material.name.slice(0, 4)}
              </span>
            </div>
            <div className="p-4 pt-0 relative z-10 bg-gradient-to-t from-white/40 to-transparent dark:from-black/40">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">{material.tag}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{material.name}</h3>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">{material.chemical} · {material.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialsIndex;
