import React, { useState } from 'react';
import { Sparkles, X, Heart, ZoomIn } from 'lucide-react';
import { INITIAL_MEMORIES, PhotoMemory } from '../data/content';

export const PhotoGallery: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<PhotoMemory | null>(null);

  return (
    <section id="galeri-memori" className="py-16 md:py-24 bg-[#FFF5F1]/70 border-t border-[#F5E2DA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B85E53] tracking-wide uppercase mb-2">
            <span>Kenangan Berharga Kita</span>
            <span aria-hidden="true">·</span>
            <span>Momen Nyata Prince & Alpiyanti</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#3B2D2C] tracking-tight">
            Memori Manis Prince & Alpiyanti
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#756260]">
            Setiap detik bersama kamu itu begitu berharga. Kumpulan momen manis dan nyata yang selalu Prince simpan erat di dalam hati.
          </p>
        </div>

        {/* Polaroid Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INITIAL_MEMORIES.map((item) => (
            <div
              key={item.id}
              className="group bg-white p-3.5 pb-5 rounded-2xl shadow-sm border border-[#F2D7CE] hover:shadow-lg hover:border-[#E8BDB1] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo container / Polaroid style */}
                <div
                  onClick={() => setActiveModalItem(item)}
                  className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-[#F7E5DE] transition-transform duration-300 cursor-pointer group-hover:scale-[1.02] bg-black/5"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle heart overlay badge */}
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs text-[#E06D63]">
                    <Heart className="w-3.5 h-3.5 fill-[#E06D63]" />
                  </div>

                  {item.dateTag && (
                    <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                      {item.dateTag}
                    </div>
                  )}

                  {/* Hover zoom overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-[#3B2D2C] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 backdrop-blur-xs">
                      <ZoomIn className="w-3.5 h-3.5 text-[#D96B60]" />
                      Lihat Foto
                    </span>
                  </div>
                </div>

                {/* Caption & Title */}
                <div className="mt-4">
                  <h3 className="font-bold text-sm text-[#3E2F2E] group-hover:text-[#D96B60] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6F5E5C] mt-1.5 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Action on Bottom */}
              <div className="mt-3 pt-3 border-t border-[#F8EAE4] flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#C85D52] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#D96B60]" />
                  <span>Foto Asli Kita</span>
                </span>

                <button
                  onClick={() => setActiveModalItem(item)}
                  className="text-[11px] text-[#937B78] hover:text-[#D96B60] font-medium cursor-pointer transition-colors"
                >
                  Perbesar →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Memory Detail Modal */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-white/20 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="aspect-[4/5] sm:aspect-[3/4] max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-[#C85D52] font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeModalItem.dateTag || 'Kenangan Indah Kita'}</span>
              </div>
              <h3 className="text-xl font-bold text-[#3E2F2E]">{activeModalItem.title}</h3>
              <p className="text-sm text-[#614E4C] mt-2 leading-relaxed">
                {activeModalItem.caption}
              </p>

              <div className="mt-6 pt-4 border-t border-[#F5E2DA] flex items-center justify-end">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-5 py-2 bg-[#D96B60] text-white text-xs font-semibold rounded-xl hover:bg-[#C2584E] transition-colors cursor-pointer shadow-xs"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

