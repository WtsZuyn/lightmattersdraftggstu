
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Home from './views/Home';
import MaterialsIndex from './views/MaterialsIndex';
import MaterialDetail from './views/MaterialDetail';
import MapView from './views/MapView';
import Visit from './views/Visit';
import Kiosk from './views/Kiosk';
import FieldGuide from './views/FieldGuide';
import QRScanner from './views/QRScanner';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Don't show bottom nav on Kiosk or Home
  const hiddenRoutes = ['/', '/kiosk'];
  if (hiddenRoutes.includes(location.pathname)) return null;

  const tabs = [
    { label: 'Home', path: '/', icon: 'home' },
    { label: 'Guide', path: '/guide', icon: 'menu_book' },
    { label: 'Map', path: '/map', icon: 'map' },
    { label: 'Info', path: '/visit', icon: 'info' }
  ];

  return (
    <nav className="fixed bottom-0 z-40 w-full glass-panel border-t border-gray-200 dark:border-gray-800 pb-safe">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path || (tab.path === '/guide' && location.pathname.includes('/materials'));
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors relative ${isActive ? 'text-primary' : 'text-gray-400'}`}
            >
              {isActive && <span className="absolute -top-[1px] w-8 h-[2px] bg-primary rounded-b-full"></span>}
              <span className="material-symbols-outlined text-[24px]">{tab.icon}</span>
              <span className="text-[10px] font-bold tracking-wide uppercase">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-background-light dark:bg-background-dark font-display antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materials" element={<MaterialsIndex />} />
          <Route path="/materials/:id" element={<MaterialDetail />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/kiosk" element={<Kiosk />} />
          <Route path="/guide" element={<FieldGuide />} />
          <Route path="/scan" element={<QRScanner />} />
        </Routes>
        <BottomNav />
      </div>
    </HashRouter>
  );
};

export default App;
