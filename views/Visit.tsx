
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Visit: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-white dark:bg-[#15232b] shadow-xl overflow-hidden font-public">
      <div className="flex items-center px-6 pt-12 pb-4 justify-between bg-white/80 dark:bg-[#15232b]/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800">
        <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h2 className="text-slate-900 dark:text-white text-sm font-bold tracking-[0.15em] uppercase flex-1 text-center pr-10">Light·Matters</h2>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        <div className="px-6 pt-8 pb-4">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-[36px] font-bold leading-[1.1]">VISIT &<br/>SAFETY</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-3 text-base font-light leading-relaxed">
            Essential information for your visit to the Aerogel exhibition. Please review our guidelines to ensure the preservation of these delicate materials.
          </p>
        </div>

        <div className="px-6 py-4">
          <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden relative shadow-sm">
            <div className="absolute inset-0 bg-cover bg-center grayscale opacity-60" style={{ backgroundImage: "url('https://picsum.photos/800/400')" }}></div>
            <div className="absolute bottom-3 right-3 bg-white dark:bg-slate-900 p-2 rounded-md shadow-sm">
              <span className="material-symbols-outlined text-primary text-[20px]">near_me</span>
            </div>
          </div>
        </div>

        <div className="px-6 py-2">
          <div className="grid grid-cols-[30%_1fr] border-b border-slate-100 dark:border-slate-800 py-5">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Location</p>
            <div className="flex flex-col">
              <p className="text-slate-900 dark:text-slate-100 text-base font-medium">123 Gallery Row</p>
              <p className="text-slate-500 text-sm">Arts District, Building 4</p>
            </div>
          </div>
          <div className="grid grid-cols-[30%_1fr] border-b border-slate-100 dark:border-slate-800 py-5">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Hours</p>
            <div className="flex flex-col gap-1 text-sm">
              <div className="flex justify-between w-full">
                <p className="font-medium text-slate-900 dark:text-white">Mon – Fri</p>
                <p className="text-slate-500">10:00 AM – 6:00 PM</p>
              </div>
              <div className="flex justify-between w-full">
                <p className="font-medium text-slate-900 dark:text-white">Sat – Sun</p>
                <p className="text-slate-500">11:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pt-8 pb-4">
          <h2 className="text-slate-900 dark:text-white text-xs font-bold uppercase mb-6 tracking-widest">Etiquette</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: 'do_not_touch', label: 'Look Only' },
              { icon: 'volume_off', label: 'Quiet Zone' },
              { icon: 'photo_camera', label: 'Photos OK' }
            ].map(rule => (
              <div key={rule.label} className="flex flex-col items-center text-center gap-3">
                <div className="size-14 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700">
                  <span className="material-symbols-outlined text-slate-900 dark:text-white text-[24px]">{rule.icon}</span>
                </div>
                <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">{rule.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-6">
          <div className="bg-primary/5 dark:bg-primary/10 border-l-2 border-primary p-4 rounded-r-lg flex gap-4 items-start">
            <span className="material-symbols-outlined text-primary text-[24px] mt-0.5 shrink-0">info</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-primary text-[10px] font-bold uppercase tracking-widest">Fragile Materials</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Aerogel is 99.8% air and extremely brittle. Exhibits are sealed for their protection. Please do not lean on or tap the display cases.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white dark:from-[#15232b] via-white dark:via-[#15232b] to-transparent pt-12">
        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-widest uppercase text-xs py-4 rounded-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
          <span>Reserve Entry</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Visit;
