
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ZONES } from '../constants';
import { Zone } from '../types';

const MapView: React.FC = () => {
  const navigate = useNavigate();
  const [selectedZone, setSelectedZone] = useState<Zone | null>(ZONES[1]); // Default to Aerogel

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-hidden h-screen w-full relative select-none">
      {/* Background / Map Grid */}
      <div className="absolute inset-0 w-full h-full overflow-auto no-scrollbar bg-grid-pattern cursor-grab active:cursor-grabbing">
        <div className="relative w-[1000px] h-[1000px] top-[-200px] left-[-250px] md:top-[-100px] md:left-[-100px]">
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30">
            <path d="M400,800 Q450,700 500,600" fill="none" stroke="currentColor" strokeDasharray="5,5" strokeWidth="2" />
            <path d="M500,600 L650,550" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M650,550 L700,400" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>

          {ZONES.map(zone => (
            <div
              key={zone.id}
              onClick={() => setSelectedZone(zone)}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
              style={{ top: zone.y, left: zone.x }}
            >
              {zone.status === 'active' && (
                <>
                  <div className="absolute inset-0 -m-4 rounded-full border border-primary/30 animate-pulse-slow"></div>
                  <div className="absolute inset-0 -m-8 rounded-full border border-primary/10 animate-pulse-slow delay-150"></div>
                </>
              )}
              <div className={`relative ${zone.status === 'active' ? 'size-16 bg-primary shadow-glow ring-4 ring-white dark:ring-background-dark' : 'size-12 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600'} rounded-full flex items-center justify-center transition-all group-hover:scale-110`}>
                <span className={`material-symbols-outlined ${zone.status === 'active' ? 'text-white text-2xl' : 'text-slate-400 text-xl'}`}>{zone.icon}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className={`text-[10px] font-bold tracking-widest uppercase mt-2 ${zone.status === 'active' ? 'text-primary' : 'text-slate-400'}`}>
                  {zone.name}
                </span>
                {zone.status === 'active' && <span className="text-[8px] text-slate-500 uppercase">You are here</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Header */}
      <div className="absolute top-0 left-0 w-full p-4 z-50 pointer-events-none">
        <div className="flex justify-between items-start">
          <button onClick={() => navigate(-1)} className="pointer-events-auto glass-panel size-10 flex items-center justify-center rounded-full shadow-sm">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="pointer-events-auto bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Exhibit Map</span>
          </div>
        </div>
      </div>

      {/* Side Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 flex flex-col gap-3 z-40">
        <div className="flex flex-col shadow-lg rounded-lg overflow-hidden border border-slate-100 dark:border-gray-700 bg-white dark:bg-gray-800">
          <button className="size-10 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-gray-700 border-b border-slate-100 dark:border-gray-700"><span className="material-symbols-outlined text-[20px]">add</span></button>
          <button className="size-10 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-gray-700"><span className="material-symbols-outlined text-[20px]">remove</span></button>
        </div>
        <button className="size-10 rounded-lg bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-primary"><span className="material-symbols-outlined text-[20px]">my_location</span></button>
      </div>

      {/* Bottom Sheet */}
      {selectedZone && (
        <div className="absolute bottom-0 left-0 w-full z-50 pointer-events-none flex flex-col justify-end">
          <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="pointer-events-auto w-full bg-white dark:bg-[#152229] rounded-t-2xl shadow-2xl border-t border-white/10 p-5 pb-24 flex flex-col animate-slide-up">
            <div className="w-full flex items-center justify-center mb-4">
              <div className="h-1 w-10 rounded-full bg-slate-300 dark:bg-slate-600"></div>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary uppercase">{selectedZone.id.toUpperCase()}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Featured</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">{selectedZone.name}</h2>
                <p className="text-primary font-medium text-lg">{selectedZone.subtitle}</p>
              </div>
              <div className="size-16 rounded-lg overflow-hidden bg-slate-100 border border-slate-100">
                <img src={selectedZone.image} className="w-full h-full object-cover opacity-80" alt={selectedZone.name} />
              </div>
            </div>
            <div className="h-px w-full bg-slate-100 dark:bg-slate-700 my-4"></div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">{selectedZone.description}</p>
            <button onClick={() => navigate('/scan')} className="w-full bg-primary hover:bg-blue-400 text-white font-bold h-12 rounded-lg flex items-center justify-center gap-3 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
              <span className="tracking-wide text-sm">OPEN QR SCANNER</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;
