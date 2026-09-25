import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFF3EE] border-t border-[#F5DDD5] py-12 text-[#6D5A58]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Heart logo */}
        <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-[#F5DDD5] flex items-center justify-center text-[#D96B60] mb-4">
          <Heart className="w-5 h-5 fill-[#D96B60]" />
        </div>

        <p className="font-handwriting text-3xl text-[#3A2D2C] font-bold">
          Prince & Alpiyanti
        </p>

        <p className="text-xs sm:text-sm text-[#7D6B69] max-w-md mx-auto mt-2 leading-relaxed">
          Dibuat dengan sepenuh hati oleh Prince untuk cewek paling cantik, paling sabar, dan paling disayang sedunia.
        </p>

        {/* Clean unboxed metadata separator */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-[#95817F] mt-6">
          <span>Selamanya Bersama</span>
          <span aria-hidden="true">·</span>
          <span>Cinta Tulus Prince</span>
        </div>

        {/* Back to top */}
        <div className="mt-8 pt-6 border-t border-[#F6E3DB] w-full max-w-xs flex items-center justify-center">
          <button
            onClick={scrollToTop}
            className="text-xs text-[#8E7977] hover:text-[#3B2D2C] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Kembali ke Atas</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
