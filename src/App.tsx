import React, { useState } from 'react';
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

  const handleStartExplore = () => {
    // Optionally start music if not started
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
