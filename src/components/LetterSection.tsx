import React from 'react';
import { Heart, MessageCircleHeart, Feather, Quote } from 'lucide-react';
import callImg from '../assets/images/bubu_dudu_call_1790358473529.jpg';

export const LetterSection: React.FC = () => {
  return (
    <section id="surat-maaf" className="py-16 md:py-20 bg-[#FFF5F1]/60 border-y border-[#F7E5DE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Editorial Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B85E53] tracking-wide uppercase mb-2">
            <span>Kejujuran Hati</span>
            <span aria-hidden="true">·</span>
            <span>Refleksi Prince</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#3B2D2C] tracking-tight">
            Surat Terbuka: Apa yang Sebenarnya Terjadi di Hati Prince
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#756260]">
            Bukan sekadar kata maaf biasa, ini semua isi pikiran dan penyesalan Prince buat kamu.
          </p>
        </div>

        {/* Letter Container with aesthetic paper feel */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm border border-[#F5DCD3] relative overflow-hidden">
          {/* Subtle paper decorative pin */}
          <div className="absolute top-6 right-6 text-[#EAC3B7] opacity-60">
            <Feather className="w-8 h-8" />
          </div>

          {/* Top banner illustration & Context */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-8 pb-8 border-b border-[#F7E8E2]">
            <div className="md:col-span-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#FFF9F6] border border-[#F7DFD6] shadow-sm">
                <img
                  src={callImg}
                  alt="Bubu melihat layar video call dengan penuh rasa rindu"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] text-center text-[#8F7977] mt-2 italic">
                Ilustrasi Bubu yang kangen berat pas lagi video call
              </p>
            </div>

            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#C85D52] font-semibold">
                <MessageCircleHeart className="w-4 h-4" />
                <span>Momen Waktu Kita Video Call Kemarin</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3E2F2E]">
                &ldquo;Kemarin Prince kangen banget, tapi malah egois...&rdquo;
              </h3>
              <p className="text-sm sm:text-base text-[#6E5B59] leading-relaxed">
                Jujur ya sayang, pas kita telponan atau VC kemarin, Prince tuh kangennya udah numpuk banget. Di kepala Prince, Prince pengen kita berdua bener-bener saling tatap, ngobrol seru, dan nikmatin waktu berdua.
              </p>
              <p className="text-sm sm:text-base text-[#6E5B59] leading-relaxed">
                Tapi waktu liat Alpi keliatan asyik dan sibuk ngerjain kegiatan lain, perasaan Prince langsung campur aduk. Ada rasa sedih, ngerasa &lsquo;kok aku malah ditinggal ya?&rsquo; padahal lagi kangen... Akhirnya Prince malah ngambek dan nunjukin sikap yang bikin suasana jadi nggak enak.
              </p>
            </div>
          </div>

          {/* Deep Emotional Realization */}
          <div className="space-y-6 text-[#52413F] text-base leading-relaxed">
            <div className="bg-[#FFF8F5] border-l-4 border-[#D96B60] p-4 sm:p-5 rounded-r-2xl">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-[#D96B60] shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-[#4E3D3C] font-medium leading-relaxed">
                  &ldquo;Setelah Prince diem dan mikir pake kepala dingin... Prince sadar betapa jahat dan egoisnya Prince kemarin.&rdquo;
                </p>
              </div>
            </div>

            <p>
              Prince baru sadar satu hal besar: <strong className="text-[#3A2C2B]">Alpiyanti itu pacar yang luar biasa baik buat Prince.</strong> Selama ini, Alpi selalu nurutin apa mau Prince.
            </p>

            <p>
              Alpi juga manusia biasa, sayang. Alpi punya kegiatan, punya rasa lelah, punya hal-hal yang pengen Alpi kerjain sendiri. Seharusnya, rasa rindu Prince itu dibarengi sama rasa pengertian, bukan malah menuntut Alpi harus 100% fokus terus setiap saat.
            </p>

            <p className="bg-[#FFF1EC] p-4 rounded-xl text-[#8E3B33] text-sm sm:text-base font-medium">
              &ldquo;Jadi hari ini, Prince mau mengalah. Prince bukan mengalah karena terpaksa, tapi Prince mengalah karena Prince sadar diri, dan Prince sayang banget sama Alpiyanti. Ego Prince nggak ada nilainya sama sekali dibanding senyum dan kebahagiaan kamu.&rdquo;
            </p>

            {/* Handwritten Signature */}
            <div className="pt-6 border-t border-[#F7E8E2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#917E7C]">Ditulis dengan segenap rasa sayang & penyesalan,</p>
                <p className="font-handwriting text-3xl sm:text-4xl text-[#D96B60] mt-1">
                  Cowokmu, Prince
                </p>
              </div>

              <div className="inline-flex items-center gap-2 bg-[#FFF4F0] px-4 py-2 rounded-xl text-xs text-[#A1473E] font-medium border border-[#FAD6CD]">
                <Heart className="w-4 h-4 fill-[#E06D63] text-[#E06D63]" />
                <span>Untuk Alpiyanti, kesayangan Prince selamanya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
