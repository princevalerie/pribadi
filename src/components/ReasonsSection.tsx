import React from 'react';
import { Heart, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ReasonsSection: React.FC = () => {
  const reasons = [
    {
      number: '01',
      title: 'Alpiyanti Selalu Nurutin Prince Selama Ini',
      body: 'Dari hal kecil sampai hal penting, Alpi selalu ngalah dan ngedengerin apa yang Prince mau. Masa sekarang, giliran Prince yang diuji sedikit aja Prince langsung rewel? Prince sadar Prince harus membalas semua kebaikan dan kesabaran Alpi.',
      icon: CheckCircle2,
    },
    {
      number: '02',
      title: 'Rasa Rindu Harusnya Menghangatkan, Bukan Mengekang',
      body: 'Prince kangen itu wajar, tapi menuntut Alpi harus nempel terus ke layar hp tanpa boleh gerak itu egois. Menemani kamu sambil kamu ngerjain kegiatanmu pun harusnya udah jadi rezeki rindu yang patut disyukuri.',
      icon: Heart,
    },
    {
      number: '03',
      title: 'Prince Mengerti Alpi Juga Punya Rasa Lelah',
      body: 'Alpi punya kesibukan, tugas, dan rasa penat. Kalau lagi VC, mungkin Alpi pengen santai sambil ngelakuin hal lain yang bikin rileks. Prince minta maaf karena kemarin kurang peka sama kondisi kamu.',
      icon: ShieldCheck,
    },
    {
      number: '04',
      title: 'Ego Prince Nggak Ada Harganya Dibanding Bahagiamu',
      body: 'Menang dalam debat atau mempertahankan gengsi nggak ada gunanya sama sekali kalau akhirnya bikin Alpi sedih atau diem. Prince lebih milih ngalah seribu kali daripada harus ngeliat mata Alpi berkaca-kaca karena perbuatan Prince.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="kenapa-mengalah" className="py-16 md:py-24 bg-[#FFF9F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B85E53] tracking-wide uppercase mb-2">
            <span>Komitmen Prince</span>
            <span aria-hidden="true">·</span>
            <span>Kedewasaan Cinta</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#3B2D2C] tracking-tight">
            4 Alasan Kenapa Prince Mau Mengalah Buat Kamu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#756260] leading-relaxed">
            Karena cinta sejati itu bukan soal siapa yang paling benar, tapi siapa yang lebih peduli menjaga hati orang yang dicintainya.
          </p>
        </div>

        {/* 2x2 Clean Grid without excessive cards-within-cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-[#F3DFD8] hover:border-[#E8BDB1] shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono font-bold text-[#D96B60] tracking-wider">
                      {item.number}.
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FFF2ED] flex items-center justify-center text-[#D96B60]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#3B2D2C] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6C5B59] leading-relaxed">
                    {item.body}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#F9ECE7] text-xs text-[#9E8785] flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#D96B60] fill-[#D96B60]" />
                  <span>Janji tulus Prince untuk Alpiyanti</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sweet quote banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#FFF0EB] via-[#FFF5F2] to-[#FFF0EB] border border-[#F7D8CE] text-center">
          <p className="font-handwriting text-2xl sm:text-3xl text-[#B84E43] font-semibold">
            &ldquo;Aku nggak butuh menang dalam ego, aku cuma butuh Alpiyanti tetap nyaman dan bahagia di samping aku.&rdquo;
          </p>
          <p className="text-xs text-[#8F7471] mt-2">
            — Prince, cowok yang beruntung banget punya kamu
          </p>
        </div>
      </div>
    </section>
  );
};
