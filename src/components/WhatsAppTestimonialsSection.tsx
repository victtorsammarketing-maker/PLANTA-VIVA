import React from 'react';
import { ArrowLeft, Phone, Video, MoreVertical, CheckCheck, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { WHATSAPP_TESTIMONIALS } from '../data/whatsappTestimonials';
import { CHECKOUT_URL } from '../data/content.ts';

interface WhatsAppTestimonialsSectionProps {
  onCtaClick?: () => void;
  checkoutUrl?: string;
}

export const WhatsAppTestimonialsSection: React.FC<WhatsAppTestimonialsSectionProps> = ({
  onCtaClick,
  checkoutUrl = CHECKOUT_URL,
}) => {
  return (
    <section
      id="depoimentos-whatsapp"
      className="w-full bg-[#FAF7F2] py-[70px] md:py-[100px] px-5 border-t border-[#E8DFC8]/60"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3EC] border border-[#2E6F4E]/20 text-[#2E6F4E] text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>VEJA COMO USAR NA PRÁTICA</span>
          </div>

          <h2 className="text-[#1A3326] text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-tight mb-4">
            Uma consulta rápida para cada tipo de problema.
          </h2>

          <p className="text-[#4A5D52] text-base md:text-lg leading-relaxed">
            Conheça exemplos de como os materiais ajudam a organizar a investigação de folhas amarelas, plantas murchas, pragas, raízes comprometidas e hortas que não evoluem.
          </p>
        </div>

        {/* Grid with 8 WhatsApp conversation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHATSAPP_TESTIMONIALS.map((chat) => (
            <div
              key={chat.id}
              id={`whatsapp-card-${chat.id}`}
              className="flex flex-col bg-[#EFEAE2] rounded-[18px] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#D1D7DB] relative"
            >
              {/* WhatsApp Header */}
              <div className="bg-[#008069] text-white px-3.5 py-2.5 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4 text-white/90" />
                  <div
                    className={`w-8 h-8 rounded-full ${chat.avatarColor} text-white font-bold flex items-center justify-center text-xs shadow-inner flex-shrink-0`}
                  >
                    {chat.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white leading-tight truncate">
                      {chat.name}
                    </p>
                    <p className="text-[11px] text-[#A7E6D7] leading-tight flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                      online
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white/80">
                  <Video className="w-3.5 h-3.5" />
                  <Phone className="w-3.5 h-3.5" />
                  <MoreVertical className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* WhatsApp Chat Body */}
              <div
                className="p-3.5 flex-1 flex flex-col justify-between gap-3 text-sm"
                style={{
                  backgroundColor: '#EFEAE2',
                  backgroundImage:
                    'radial-gradient(#D6CCC2 0.75px, transparent 0.75px), radial-gradient(#D6CCC2 0.75px, #EFEAE2 0.75px)',
                  backgroundSize: '30px 30px',
                  backgroundPosition: '0 0, 15px 15px',
                }}
              >
                {/* Date pill */}
                <div className="flex justify-center">
                  <span className="bg-[#FFFFFF]/85 text-[#54656F] text-[10px] font-medium px-2.5 py-0.5 rounded-md shadow-xs uppercase tracking-wide">
                    Hoje
                  </span>
                </div>

                {/* Customer Message Bubble (White, received) */}
                <div className="bg-white rounded-2xl rounded-tl-sm p-2.5 shadow-sm max-w-[94%] border border-[#E9EDEF]/80 self-start">
                  {/* Photo attachment */}
                  <div className="rounded-xl overflow-hidden mb-2 shadow-xs border border-gray-100 aspect-[4/3] bg-gray-100">
                    <img
                      src={chat.image}
                      alt={chat.imageAlt}
                      className="w-full h-full object-cover block"
                      loading="lazy"
                    />
                  </div>

                  {/* Customer text */}
                  <p className="text-[#111B21] text-[13px] leading-relaxed font-normal">
                    {chat.message}
                  </p>

                  <div className="text-right mt-1">
                    <span className="text-[10px] text-[#667781] font-mono">{chat.time}</span>
                  </div>
                </div>

                {/* Team Reply Bubble (WhatsApp Green, sent) */}
                {chat.replyText && (
                  <div className="bg-[#D9FDD3] rounded-2xl rounded-tr-sm p-2.5 shadow-sm max-w-[92%] border border-[#C5F4BA]/80 self-end">
                    <p className="text-[#111B21] text-[12.5px] leading-relaxed">
                      {chat.replyText}
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[10px] text-[#667781] font-mono">{chat.replyTime}</span>
                      <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar & CTA */}
        <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-[#E8DFC8] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EAF3EC] text-[#2E6F4E] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[#1A3326] font-bold text-base md:text-lg">
                Acesso completo aos guias, mapas e miniapp
              </p>
              <p className="text-[#5A6D62] text-sm flex items-center gap-1.5 mt-0.5">
                Consulte pelo celular ou computador com garantia incondicional de 7 dias
              </p>
            </div>
          </div>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-depoimentos-whatsapp"
            onClick={onCtaClick}
            className="w-full md:w-auto px-8 py-4 bg-[#C59B27] hover:bg-[#B38A1F] text-[#0D3124] font-extrabold text-sm md:text-base rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap cursor-pointer text-center inline-block"
          >
            QUERO RECEBER O PLANTA VIVA POR R$ 19,90
          </a>
        </div>
      </div>
    </section>
  );
};
