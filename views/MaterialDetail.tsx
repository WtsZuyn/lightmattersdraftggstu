
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MATERIALS } from '../constants';

const MaterialDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const material = MATERIALS.find(m => m.id === id);
  const [activeTab, setActiveTab] = useState('what');

  if (!material) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <h2 className="text-2xl font-bold mb-4">Material Not Found</h2>
        <button onClick={() => navigate('/materials')} className="text-primary font-bold">Back to Index</button>
      </div>
    );
  }

  const tabs = ['what', 'how', 'why', 'next'];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-x-hidden pb-24 max-w-lg mx-auto relative min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/5 transition-all w-full max-w-lg mx-auto">
        <div className="flex items-center justify-between px-4 h-16 w-full">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-sm font-bold tracking-widest uppercase text-slate-500">Light·Matters</h1>
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[20px]">ios_share</span>
          </button>
        </div>
      </header>

      <main className="relative pt-16">
        <div className="relative w-full aspect-[4/5] sm:aspect-square overflow-hidden bg-slate-200 dark:bg-slate-800">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(15, 28, 35, 0.00) 50%, rgba(15, 28, 35, 0.8) 100%), url("${material.image}")`
            }}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-glow">
            <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start gap-2">
            <div className="inline-flex items-center px-2 py-1 rounded border border-primary/50 bg-primary/20 backdrop-blur-md">
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Exhibit 01</span>
            </div>
            <h2 className="text-5xl font-bold text-white tracking-tighter leading-none">{material.name.toUpperCase()}</h2>
            <p className="text-primary font-medium tracking-wide text-lg">{material.subtitle}</p>
          </div>
        </div>

        <div className="px-6 -mt-6 relative z-10">
          <div className="p-5 rounded-xl glass-panel shadow-lg">
            <div className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-primary">info</span>
              <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed">
                {material.description}
              </p>
            </div>
          </div>
        </div>

        <div className="sticky top-16 z-30 bg-background-light dark:bg-background-dark pt-6 pb-2 px-6">
          <div className="flex p-1 bg-slate-200/50 dark:bg-white/5 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 flex items-center justify-center h-9 rounded-[6px] text-xs font-bold uppercase tracking-wide transition-all ${activeTab === tab ? 'bg-primary text-white shadow-sm' : 'text-slate-500'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 py-4">
          <p className="text-slate-600 dark:text-slate-400 text-base leading-7">
            {activeTab === 'what' && material.description}
            {activeTab === 'how' && "Most aerogels begin as a wet gel made by a sol-gel reaction (a liquid that forms a connected solid network). The gel is aged to strengthen the network, then the pore liquid is exchanged for a solvent compatible with drying. Finally, supercritical drying removes the liquid without surface-tension collapse—preserving the nano-scale pores that give aerogel its signature properties."}
            {activeTab === 'why' && "TAerogel's nano-pores reduce heat transfer by limiting conduction through the solid and suppressing convection in the trapped air, which is why it can be an exceptional insulator. Those same tiny pores also scatter light (Tyndall scattering), often producing a soft blue edge-glow under directional illumination. The trade-off: many silica aerogels are fragile and brittle, so museum samples are typically sealed for protection."}
            {activeTab === 'next' && "Next steps focus on making aerogels tougher and more manufacturable: reinforced composites, flexible fiber-backed aerogels, and hydrophobic variants for real-world environments. Promising directions include lightweight thermal shielding, transparent or translucent insulation systems, acoustic damping panels, and high-surface-area supports for filtration and energy devices. In short: the future of aerogel is less about a single miracle material, and more about engineered structures tuned for specific conditions."}
          </p>
        </div>

        <div className="px-6 pb-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 min-w-max pb-2">
            {material.stats.map(stat => (
              <div key={stat.label} className="flex flex-col justify-between w-36 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="material-symbols-outlined text-primary text-xl">{stat.icon}</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{stat.label}</span>
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{stat.value}</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">{stat.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 pb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Structure</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://picsum.photos/400/400")' }}></div>
            </div>
            <div className="aspect-square rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-dashed border-slate-300 dark:border-slate-700">
              <div className="text-center p-2">
                <span className="material-symbols-outlined text-slate-400 text-3xl mb-1">view_in_ar</span>
                <p className="text-xs font-medium text-slate-500">View Model</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-4 z-50">
        <div className="max-w-lg mx-auto flex gap-3 items-center">
          <button onClick={() => navigate('/scan')} className="size-14 rounded-2xl glass-panel shadow-lg flex items-center justify-center active:scale-95 transition-transform text-slate-800 dark:text-white">
            <span className="material-symbols-outlined text-[24px]">qr_code_scanner</span>
          </button>
          <button onClick={() => navigate('/map')} className="flex-1 h-14 rounded-2xl bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center gap-2 font-bold text-base active:scale-95 transition-transform">
            <span>Open on Map</span>
            <span className="material-symbols-outlined text-[20px]">near_me</span>
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light/80 to-transparent -z-10 pointer-events-none"></div>
      </footer>
    </div>
  );
};

export default MaterialDetail;
