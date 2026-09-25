import React from 'react';
import { Heart, Music, VolumeX } from 'lucide-react';
import { romanticPlayer } from '../utils/audio';

interface NavbarProps {
  isMusicPlaying: boolean;
  setIsMusicPlaying: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isMusicPlaying,
  setIsMusicPlaying,
}) => {
  const toggleMusic = () => {
    const nextState = romanticPlayer.toggle();
    setIsMusicPlaying(nextState);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F6]/90 backdrop-blur-md border-b border-[#F5E2DA] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element brand wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-lg font-bold tracking-tight text-[#4A3E3D] hover:text-[#D96B60] transition-colors flex items-center gap-1.5"
        >
          <span className="font-handwriting text-2xl text-[#D96B60]">Prince & Alpiyanti</span>
          <Heart className="w-4 h-4 fill-[#E06D63] text-[#E06D63] inline animate-pulse-subtle" />
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#7D6B69]">
          <button
            onClick={() => scrollTo('surat-maaf')}
            className="hover:text-[#D96B60] transition-colors"
          >
            Surat Maaf
          </button>
          <button
            onClick={() => scrollTo('kenapa-mengalah')}
            className="hover:text-[#D96B60] transition-colors"
          >
            Alasan Mengalah
          </button>
          <button
            onClick={() => scrollTo('galeri-memori')}
            className="hover:text-[#D96B60] transition-colors"
          >
            Memori Kita
          </button>
          <button
            onClick={() => scrollTo('kupon-damai')}
            className="hover:text-[#D96B60] transition-colors"
          >
            Kupon Cinta
          </button>
          <button
            onClick={() => scrollTo('maafin-prince')}
            className="hover:text-[#D96B60] transition-colors"
          >
            Maafin Prince
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleMusic}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              isMusicPlaying
                ? 'bg-[#FFE2D9] text-[#C84E43] border border-[#F9C3B6]'
                : 'bg-white text-[#7D6B69] border border-[#EADBDA] hover:bg-[#FDF3F0]'
            }`}
            title={isMusicPlaying ? 'Matikan musik' : 'Putar melodi lembut'}
          >
            {isMusicPlaying ? (
              <>
                <Music className="w-3.5 h-3.5 animate-spin text-[#D96B60]" style={{ animationDuration: '6s' }} />
                <span>A Thousand Years ♪</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Putar Musik</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
