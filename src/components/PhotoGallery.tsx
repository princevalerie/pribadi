import React, { useState, useEffect } from 'react';
import { Camera, Image as ImageIcon, Sparkles, X, Heart, Upload, RefreshCw } from 'lucide-react';
import { INITIAL_MEMORIES, PhotoMemory } from '../data/content';

export const PhotoGallery: React.FC = () => {
  const [memories, setMemories] = useState<PhotoMemory[]>(() => {
    try {
      const saved = localStorage.getItem('prince_alpi_memories_v4');
      if (saved) {
        const parsed = JSON.parse(saved);
        return INITIAL_MEMORIES.map((initial) => {
          const matched = parsed.find((p: PhotoMemory) => p.id === initial.id);
          return matched?.customImage ? { ...initial, customImage: matched.customImage } : initial;
        });
      }
    } catch {
      // fallback
    }
    return INITIAL_MEMORIES;
  });

  const [activeModalItem, setActiveModalItem] = useState<PhotoMemory | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('prince_alpi_memories_v4', JSON.stringify(memories));
    } catch {
      // ignore
    }
  }, [memories]);

  // Handle single photo upload
  const handleImageUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        setMemories((prev) =>
          prev.map((m) => (m.id === id ? { ...m, customImage: base64 } : m))
        );
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle batch upload: Prince selects multiple files at once!
  const handleBatchUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList = Array.from(files).slice(0, INITIAL_MEMORIES.length);
    const readers = fileList.map((file) => {
      return new Promise<string>((resolve) => {
        const r = new FileReader();
        r.onload = (ev) => resolve(ev.target?.result as string);
        r.readAsDataURL(file);
      });
    });

    Promise.all(readers).then((base64Images) => {
      setMemories((prev) =>
        prev.map((item, index) => {
          if (base64Images[index]) {
            return { ...item, customImage: base64Images[index] };
          }
          return item;
        })
      );
    });
  };

  const handleResetPhotos = () => {
    if (window.confirm('Hapus foto yang diupload dan reset kembali?')) {
      setMemories(INITIAL_MEMORIES);
      localStorage.removeItem('prince_alpi_memories_v4');
      localStorage.removeItem('prince_alpi_memories_real');
      localStorage.removeItem('prince_alpi_memories_v3');
      localStorage.removeItem('prince_alpi_memories_v2');
      localStorage.removeItem('prince_alpi_memories');
    }
  };

  const totalUploaded = memories.filter((m) => Boolean(m.customImage)).length;

  return (
    <section id="galeri-memori" className="py-16 md:py-24 bg-[#FFF5F1]/70 border-t border-[#F5E2DA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B85E53] tracking-wide uppercase mb-2">
            <span>Kenangan Berharga Kita</span>
            <span aria-hidden="true">·</span>
            <span>{INITIAL_MEMORIES.length} Momen Nyata Prince & Alpiyanti</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#3B2D2C] tracking-tight">
            Memori Manis Prince & Alpiyanti
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#756260]">
            Setiap detik bersama kamu itu begitu berharga. Pasang langsung foto kenangan asli kalian dari galeri perangkat tanpa AI.
          </p>
        </div>

        {/* Action & Batch Upload Banner */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#F2D4CA] shadow-xs mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3.5 text-left">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0EB] flex items-center justify-center text-[#D96B60] shrink-0 mt-0.5">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#3E2F2E]">
                  Pasang Foto Asli Kalian ({totalUploaded}/{INITIAL_MEMORIES.length} Terpasang)
                </h4>
                <p className="text-xs text-[#7A6462] mt-0.5">
                  Klik tombol di samping untuk memilih foto kalian dari galeri HP atau laptop. Foto tersimpan aman di browser kamu!
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
              <label className="px-4 py-2.5 bg-[#D96B60] hover:bg-[#C2584E] text-white text-xs font-medium rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto">
                <Upload className="w-3.5 h-3.5" />
                <span>Pilih Foto Sekaligus</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleBatchUpload}
                />
              </label>

              {totalUploaded > 0 && (
                <button
                  onClick={handleResetPhotos}
                  className="px-3.5 py-2.5 bg-[#FFF2ED] hover:bg-[#FFE6DD] text-[#B85E53] text-xs font-medium rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer w-full sm:w-auto"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset Semua Foto</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Polaroid Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {memories.map((item, index) => {
            const hasImage = Boolean(item.customImage);
            return (
              <div
                key={item.id}
                className="group bg-white p-3.5 pb-5 rounded-2xl shadow-sm border border-[#F2D7CE] hover:shadow-md hover:border-[#E8BDB1] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo container / Polaroid style */}
                  <div
                    onClick={() => {
                      if (hasImage) {
                        setActiveModalItem(item);
                      }
                    }}
                    className={`relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-[#F7E5DE] transition-transform duration-200 ${
                      hasImage
                        ? 'cursor-pointer group-hover:scale-[1.02] bg-black/5'
                        : 'bg-gradient-to-br from-[#FFF5F1] to-[#FFE8DF] flex flex-col items-center justify-center p-4 text-center'
                    }`}
                  >
                    {hasImage ? (
                      <img
                        src={item.customImage}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <label className="flex flex-col items-center justify-center p-4 text-center h-full w-full cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-[#D96B60] mb-3 group-hover:scale-110 transition-transform">
                          <ImageIcon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#B85E53] mb-1">
                          Foto #{index + 1}
                        </span>
                        <p className="text-[11px] font-semibold text-[#4A3E3D] line-clamp-2">
                          {item.title}
                        </p>
                        <span className="mt-3 px-3 py-1.5 bg-white text-[#D96B60] text-[10px] font-semibold rounded-lg shadow-2xs border border-[#F5DDD5]">
                          + Pasang Foto #{index + 1}
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(item.id, e)}
                        />
                      </label>
                    )}

                    {/* Subtle heart overlay badge */}
                    <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs text-[#E06D63]">
                      <Heart className="w-3.5 h-3.5 fill-[#E06D63]" />
                    </div>

                    {item.dateTag && (
                      <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                        {item.dateTag}
                      </div>
                    )}
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

                {/* Upload Action on Bottom */}
                <div className="mt-3 pt-3 border-t border-[#F8EAE4] flex items-center justify-between">
                  <label className="text-[11px] font-medium text-[#C85D52] hover:text-[#9A3C32] flex items-center gap-1 cursor-pointer">
                    <Upload className="w-3 h-3" />
                    <span>{hasImage ? 'Ganti Foto' : 'Pilih Foto'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(item.id, e)}
                    />
                  </label>

                  {hasImage ? (
                    <button
                      onClick={() => setActiveModalItem(item)}
                      className="text-[11px] text-[#937B78] hover:text-[#3E2F2E] font-medium cursor-pointer"
                    >
                      Perbesar →
                    </button>
                  ) : (
                    <span className="text-[10px] text-[#A68F8C]">Belum terpasang</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Memory Detail Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-white/20 animate-in fade-in zoom-in-95 duration-200">
            <div className="relative">
              {activeModalItem.customImage ? (
                <div className="aspect-[4/5] sm:aspect-[3/4] max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={activeModalItem.customImage}
                    alt={activeModalItem.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : null}

              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
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

              <div className="mt-6 pt-4 border-t border-[#F5E2DA] flex items-center justify-between">
                <label className="px-4 py-2 bg-[#FFF1EC] hover:bg-[#FFE3DB] text-[#C85D52] font-medium text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Ganti Foto Ini</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      handleImageUpload(activeModalItem.id, e);
                      const file = e.target.files?.[0];
                      if (file) {
                        const r = new FileReader();
                        r.onload = (ev) => {
                          setActiveModalItem((prev) =>
                            prev ? { ...prev, customImage: ev.target?.result as string } : null
                          );
                        };
                        r.readAsDataURL(file);
                      }
                    }}
                  />
                </label>

                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-4 py-2 bg-[#D96B60] text-white text-xs font-medium rounded-xl hover:bg-[#C2584E] transition-colors cursor-pointer"
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
