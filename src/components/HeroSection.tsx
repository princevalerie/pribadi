import React, { useState } from 'react';
import { Heart, Sparkles, ArrowDown } from 'lucide-react';
import heroImg from '../assets/images/bubu_dudu_sorry_fix_1790359213595.jpg';

interface HeroSectionProps {
  onStartExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartExplore }) => {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleSpawnHeart = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newHeart = { id: Date.now() + Math.random(), x, y };
    setHearts((prev) => [...prev.slice(-12), newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1200);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Subtle warm decorative background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-[#FFEFEB] to-transparent pointer-events-none -z-10 rounded-full blur-3xl opacity-60" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Unboxed editorial kicker */}
        <div className="inline-flex items-center gap-2 text-sm text-[#A86458] mb-4">
          <span>Surat Terbuka Dari Hati Prince</span>
          <span aria-hidden="true">·</span>
          <span>Khusus Untuk Alpiyanti Tersayang</span>
        </div>

        {/* Hero headline with balanced text */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#3A2D2C] leading-tight mb-4" style={{ textWrap: 'balance' }}>
          Maafin Prince ya, <span className="text-[#D96B60] font-handwriting text-4xl sm:text-6xl md:text-7xl block sm:inline">Alpiyanti Sayang</span>
        </h1>

        <p className="text-base sm:text-lg text-[#6E5B59] max-w-2xl mx-auto leading-relaxed mb-8">
          Aku sadar kemarin waktu kita video call, aku terlalu egois dan kekanak-kanakan karena merasa sedih diabaikan. Tapi setelah dipikir lagi, kamu selama ini udah luar biasa baik dan selalu nurutin aku. Sekarang giliran aku yang mengalah dan minta maaf setulus hatiku.
        </p>

        {/* Hero Illustration Card */}
        <div className="relative max-w-2xl mx-auto mb-10 group">
          <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-sm border border-[#F5E2DA] transition-transform duration-300 hover:shadow-md">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#FFF5F2]">
              <img
                src={heroImg}
                alt="Permintaan maaf Prince untuk Alpiyanti"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4 sm:p-6">
                <p className="text-white text-sm sm:text-base font-medium drop-shadow-sm font-handwriting sm:text-xl">
                  &ldquo;Jangan nangis lagi yaa sayang cintaku... Prince minta maaf ❤️&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Floating cute quote badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#FFF9F6] border border-[#F2D1C7] text-[#93453D] px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm flex items-center gap-1.5 whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 text-[#E06D63]" />
            <span>Prince nggak mau kehilangan senyum Alpiyanti</span>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8">
          <button
            onClick={onStartExplore}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#D96B60] hover:bg-[#C5574C] text-white font-medium rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Buka Surat Maaf Prince</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <button
            onClick={handleSpawnHeart}
            className="relative w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#FFF3EF] text-[#A84C42] border border-[#F2D1C7] font-medium rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
          >
            <Heart className="w-4 h-4 fill-[#E06D63] text-[#E06D63]" />
            <span>Pencet ini biar hati kamu adem</span>

            {/* Spawned micro hearts */}
            {hearts.map((h) => (
              <span
                key={h.id}
                className="absolute pointer-events-none text-rose-500 font-bold text-lg animate-ping"
                style={{ left: `${h.x}px`, top: `${h.y}px` }}
              >
                ❤️
              </span>
            ))}
          </button>
        </div>
      </div>
    </section>
  );
};
