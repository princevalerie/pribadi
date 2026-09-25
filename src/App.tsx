import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LetterSection } from './components/LetterSection';
import { ReasonsSection } from './components/ReasonsSection';
import { PhotoGallery } from './components/PhotoGallery';
import { LoveCoupons } from './components/LoveCoupons';
import { ForgiveSection } from './components/ForgiveSection';
import { Footer } from './components/Footer';
import { romanticPlayer } from './utils/audio';

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    const unsub = romanticPlayer.subscribe((playing) => {
      setIsMusicPlaying(playing);
    });

    // 1. Coba langsung nyalakan otomatis saat halaman dibuka
    romanticPlayer.start();

    // 2. Fallback untuk browser (Chrome/Safari/HP) yang membatasi audio sebelum interaksi pengguna:
    // Begitu Alpi/pengguna menyentuh layar, scroll, atau mengklik di mana saja, lagu langsung auto nyala!
    const triggerAutoPlayOnInteraction = () => {
      if (!romanticPlayer.getIsPlaying()) {
        romanticPlayer.start().then((success) => {
          if (success) {
            removeInteractionListeners();
          }
        });
      } else {
        removeInteractionListeners();
      }
    };

    const removeInteractionListeners = () => {
      window.removeEventListener('click', triggerAutoPlayOnInteraction);
      window.removeEventListener('touchstart', triggerAutoPlayOnInteraction);
      window.removeEventListener('scroll', triggerAutoPlayOnInteraction);
      window.removeEventListener('pointerdown', triggerAutoPlayOnInteraction);
      window.removeEventListener('keydown', triggerAutoPlayOnInteraction);
    };

    window.addEventListener('click', triggerAutoPlayOnInteraction, { passive: true });
    window.addEventListener('touchstart', triggerAutoPlayOnInteraction, { passive: true });
    window.addEventListener('scroll', triggerAutoPlayOnInteraction, { passive: true });
    window.addEventListener('pointerdown', triggerAutoPlayOnInteraction, { passive: true });
    window.addEventListener('keydown', triggerAutoPlayOnInteraction, { passive: true });

    return () => {
      unsub();
      removeInteractionListeners();
    };
  }, []);

  const handleStartExplore = () => {
    // Start music on first explore click
    if (!isMusicPlaying) {
      romanticPlayer.start();
      setIsMusicPlaying(true);
    }
    const el = document.getElementById('surat-maaf');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F6] text-[#4A3E3D] selection:bg-[#FCD8CF] selection:text-[#7A2820]">
      {/* Top Navigation */}
      <Navbar
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={setIsMusicPlaying}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        <HeroSection onStartExplore={handleStartExplore} />
        <LetterSection />
        <ReasonsSection />
        <PhotoGallery />
        <LoveCoupons />
        <ForgiveSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
