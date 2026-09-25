import React, { useState, useEffect } from 'react';
import { Ticket, Check, Video, Utensils, Heart, Crown, Sparkles, Smile } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LOVE_COUPONS, LoveCoupon } from '../data/content';
import promiseImg from '../assets/images/bubu_dudu_promise_1790358505029.jpg';

export const LoveCoupons: React.FC = () => {
  const [claimed, setClaimed] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('prince_alpi_coupons');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {};
  });

  useEffect(() => {
    try {
      localStorage.setItem('prince_alpi_coupons', JSON.stringify(claimed));
    } catch {
      // ignore
    }
  }, [claimed]);

  const handleClaim = (id: string) => {
    setClaimed((prev) => ({ ...prev, [id]: true }));
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#FF85A1', '#FFAAA6', '#FFD3B6', '#D96B60'],
      });
    } catch {
      // fallback
    }
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Video':
        return <Video className="w-5 h-5" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Crown':
        return <Crown className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="kupon-damai" className="py-16 md:py-24 bg-[#FFF9F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B85E53] tracking-wide uppercase mb-2">
            <span>Garansi Perdamaian</span>
            <span aria-hidden="true">·</span>
            <span>Berlaku Selamanya</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#3B2D2C] tracking-tight">
            Kupon Cinta & Permintaan Maaf Prince
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#756260]">
            Kupon ini bisa Alpi klaim dan gunakan kapan saja. Prince wajib laksanakan tanpa alasan apapun!
          </p>
        </div>

        {/* Feature Banner: Bubu & Dudu pinky promise */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F5DDD5] shadow-sm mb-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#FFF3EE] border border-[#F8E1D8]">
              <img
                src={promiseImg}
                alt="Bubu dan Dudu pinky promise dan ceria berdua"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#C85D52] font-semibold">
              <Smile className="w-4 h-4" />
              <span>Pinky Promise Dari Prince</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#3E2F2E]">
              &ldquo;Janji Prince Bakal Lebih Sabar dan Pengertian&rdquo;
            </h3>
            <p className="text-sm text-[#6C5957] leading-relaxed">
              Kupon di bawah ini adalah wujud nyata kalau Prince serius mau bahagiain kamu. Selama ini Alpi selalu nurutin Prince, jadi sekarang giliran Alpi yang pegang kendali.
            </p>
            <div className="pt-2 text-xs text-[#957F7D] flex items-center gap-2">
              <Ticket className="w-4 h-4 text-[#D96B60]" />
              <span>Klaim kuponnya di bawah ini ya cantik!</span>
            </div>
          </div>
        </div>

        {/* Coupons List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOVE_COUPONS.map((coupon) => {
            const isClaimed = Boolean(claimed[coupon.id]);
            return (
              <div
                key={coupon.id}
                className={`relative bg-white rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden ${
                  isClaimed
                    ? 'border-[#E4A59A] shadow-md bg-[#FFFAF9]'
                    : 'border-[#F2DDD6] hover:border-[#E8BDB1] shadow-sm hover:shadow'
                }`}
              >
                {/* Stamp overlay if claimed */}
                {isClaimed && (
                  <div className="absolute -right-6 top-6 rotate-12 border-2 border-dashed border-[#D96B60] text-[#D96B60] font-bold text-xs uppercase px-8 py-1 tracking-wider bg-[#FFF2ED]/90 shadow-xs pointer-events-none select-none">
                    APPROVED
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF2ED] text-[#D96B60] flex items-center justify-center">
                      {getIcon(coupon.iconName)}
                    </div>
                    <span className="text-[11px] font-semibold text-[#B85E53] bg-[#FFF5F2] px-2.5 py-1 rounded-md border border-[#FBE6E0]">
                      {coupon.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#3B2D2C] mb-2">
                    {coupon.title}
                  </h3>
                  <p className="text-xs text-[#6F5D5B] leading-relaxed mb-6">
                    {coupon.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-dashed border-[#F3DFD8]">
                  {isClaimed ? (
                    <div className="w-full py-2 bg-[#FFF0EB] text-[#C85D52] font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 border border-[#FAD6CD]">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Kupon Siap Digunakan Alpi!</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleClaim(coupon.id)}
                      className="w-full py-2.5 bg-[#D96B60] hover:bg-[#C2584E] text-white font-medium text-xs rounded-xl transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Ticket className="w-3.5 h-3.5" />
                      <span>Klaim Kupon Ini ❤️</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
