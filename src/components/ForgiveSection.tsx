import React, { useState } from 'react';
import { Heart, Send, CheckCircle, Award, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import hugImg from '../assets/images/bubu_dudu_hug_1790358487638.jpg';

export const ForgiveSection: React.FC = () => {
  const [hasForgiven, setHasForgiven] = useState(false);
  const [dodgeCount, setDodgeCount] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const dodgePhrases = [
    'Enggak mau! 😜',
    'Eits gak kena! 😝',
    'Yakin tega sama Prince? 🥺',
    'Prince janji beliin es krim! 🍦',
    'Prince janji nggak bakal rewel lagi pas VC! 📱',
    'Bubu sedih nih kalau nggak dimaafin... 😭',
    'Pencet yang merah hati aja pleaseee! 🥹❤️',
  ];

  const handleDodge = () => {
    // Generate gentle offset within container bounds
    const randomX = (Math.random() - 0.5) * 220;
    const randomY = (Math.random() - 0.5) * 140;
    setNoPos({ x: randomX, y: randomY });
    setDodgeCount((prev) => prev + 1);
  };

  const handleForgive = () => {
    setHasForgiven(true);
    // Mega Confetti explosion
    try {
      const end = Date.now() + 3 * 1000;
      const colors = ['#FF4D6D', '#FF758F', '#FF85A1', '#F4A261', '#E76F51'];

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors,
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    } catch {
      // fallback
    }
  };

  const waMessage = encodeURIComponent(
    'Hai Prince sayang, aku udah baca website permintaan maaf buatan kamu... Bubu & Dudu-nya lucu banget! 🥺❤️ Aku maafin kamu kok, makasih ya udah tulus buat ini untuk aku. Kuponnya bakal aku tagih! 🥰'
  );

  return (
    <section id="maafin-prince" className="py-16 md:py-24 bg-[#FFF5F1]/80 border-t border-[#F5DDD5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B85E53] tracking-wide uppercase mb-2">
            <span>Keputusan Akhir</span>
            <span aria-hidden="true">·</span>
            <span>Peluk & Damai</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#3B2D2C] tracking-tight">
            Alpiyanti Mau Maafin Prince Nggak?
          </h2>
        </div>

        {/* Hug Illustration Card */}
        <div className="max-w-md mx-auto mb-10 bg-white p-4 rounded-3xl shadow-sm border border-[#F2D7CE]">
          <div className="aspect-square w-full rounded-2xl overflow-hidden bg-[#FFF0EB] relative">
            <img
              src={hugImg}
              alt="Bubu dan Dudu pelukan hangat berdua dengan penuh cinta"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-handwriting text-2xl text-[#C85D52] mt-3">
            &ldquo;Peluk erat Bubu & Dudu... damai ya sayang?&rdquo;
          </p>
        </div>

        {/* Interaction Area */}
        {!hasForgiven ? (
          <div className="relative min-h-[140px] flex flex-col items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 relative">
              {/* YES BUTTON */}
              <button
                onClick={handleForgive}
                className="px-8 py-4 bg-[#D96B60] hover:bg-[#C2584E] text-white font-bold text-base sm:text-lg rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer transform hover:scale-105 active:scale-95"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>Iya, Aku Maafin Prince ❤️</span>
              </button>

              {/* DODGE NO BUTTON */}
              <button
                onMouseEnter={handleDodge}
                onClick={handleDodge}
                onTouchStart={handleDodge}
                style={{
                  transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="px-6 py-3.5 bg-white border border-[#E3CBC4] text-[#86706E] font-medium text-sm rounded-2xl hover:bg-[#FFF0EB] transition-colors shadow-xs cursor-pointer select-none whitespace-nowrap"
              >
                {dodgePhrases[dodgeCount % dodgePhrases.length]}
              </button>
            </div>

            {dodgeCount > 0 && (
              <p className="text-xs text-[#A16D67] mt-6 italic animate-pulse">
                Hehe tombol &ldquo;Enggak mau&rdquo; nya kabur terus kan? Maafin Prince yaa cintaku 🥺
              </p>
            )}
          </div>
        ) : (
          /* CELEBRATION CERTIFICATE & WHATSAPP BUTTON */
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#E79F93] shadow-lg max-w-xl mx-auto animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#FFF2ED] mx-auto flex items-center justify-center text-[#D96B60] mb-4">
              <Award className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold mb-2">
              <CheckCircle className="w-4 h-4" />
              <span>PERMINTAAN MAAF RESMI DITERIMA</span>
            </div>

            <h3 className="text-2xl font-bold text-[#3B2D2C] mb-3">
              Yaaay! Makasih Banyak Alpiyanti Sayang! ❤️
            </h3>

            <p className="text-sm text-[#665452] leading-relaxed mb-6">
              Hati Prince langsung tenang dan bahagia banget. Makasih ya udah punya hati yang seluas samudera buat maafin Prince. Prince berjanji bakal jaga cinta dan kepercayaan kamu sebaik-baiknya!
            </p>

            {/* Certificate Box */}
            <div className="bg-[#FFF9F6] p-4 rounded-2xl border border-dashed border-[#F3C4B8] text-left text-xs space-y-1.5 text-[#5F4D4B] mb-6">
              <div className="flex justify-between font-bold text-[#D96B60] border-b border-[#F7D8CE] pb-1.5">
                <span>SERTIFIKAT PERDAMAIAN</span>
                <span>ROMANTIS 2026</span>
              </div>
              <p><strong>Pihak 1:</strong> Prince (Cowok yang paling sayang Alpiyanti)</p>
              <p><strong>Pihak 2:</strong> Alpiyanti (Bidadari sabar kesayangan Prince)</p>
              <p><strong>Status:</strong> Resmi baikan & pelukan hangat seumur hidup!</p>
            </div>

            {/* Send WhatsApp directly */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Kirim Kabar ke WhatsApp Prince: &ldquo;Aku Maafin Kamu&rdquo; 💕</span>
              </a>

              <p className="text-[11px] text-[#917976]">
                Pesan WhatsApp akan otomatis terisi dan siap kamu kirim ke Prince!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
