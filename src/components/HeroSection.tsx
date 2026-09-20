import kitTransparentImage from '../assets/images/kit-planta-viva-transparent.png';
import { CHECKOUT_URL } from '../data/content.ts';

interface HeroSectionProps {
  onCtaClick?: () => void;
  checkoutUrl?: string;
}

export default function HeroSection({ onCtaClick, checkoutUrl = CHECKOUT_URL }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="pv-hero relative w-full bg-[#0D3124] text-white pt-[50px] sm:pt-[70px] md:pt-[95px] lg:pt-[115px] pb-[50px] sm:pb-[70px] md:pb-[80px] lg:pb-[95px] px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column (Mobile & Desktop) */}
        <div className="flex flex-col items-start text-left z-10 w-full">
          <span
            id="hero-eyebrow"
            className="text-[#EFBD76] text-[11px] sm:text-[12px] font-bold tracking-[1.5px] sm:tracking-[2px] uppercase mb-2.5 sm:mb-3 block"
          >
            FOLHAS AMARELAS, MANCHAS, PRAGAS OU PLANTAS MURCHANDO?
          </span>

          <h1
            id="hero-title"
            className="font-georgia text-white text-[28px] xs:text-[33px] sm:text-[44px] lg:text-[54px] xl:text-[60px] font-semibold leading-[1.12] sm:leading-[1.08] tracking-[-0.6px] sm:tracking-[-1.2px] mb-3 sm:mb-5"
          >
            Descubra o que está enfraquecendo suas plantas — e qual cuidado corrigir primeiro.
          </h1>

          {/* MOCKUP EXCLUSIVO MOBILE: Posicionado imediatamente abaixo da Head Principal para passar máxima confiança */}
          <div
            id="hero-mobile-mockup-wrapper"
            className="lg:hidden w-full my-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] filter drop-shadow-[0_18px_32px_rgba(0,0,0,0.6)]">
              <img
                src={kitTransparentImage}
                alt="Kit digital Planta Viva com guias práticos, mapas visuais, calendário e miniapp"
                className="w-full h-auto object-contain block mx-auto"
                referrerPolicy="no-referrer"
                id="hero-kit-image-mobile"
                loading="eager"
              />
            </div>
            <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-[#143E2E]/80 border border-[#EFBD76]/30 text-[#EFBD76] text-[11px] font-medium tracking-wide">
              <span>🌿</span>
              <span>Kit Digital Completo • Acesso Imediato</span>
            </div>
          </div>

          <p
            id="hero-description"
            className="text-[#DDE8E1] text-[15px] sm:text-[17px] md:text-[18px] leading-[1.65] sm:leading-[1.7] mb-6 sm:mb-8 max-w-xl font-normal"
          >
            Com o Método R.A.I.Z., você aprende a interpretar os sinais das folhas, avaliar rega, luz, raízes e pragas e escolher uma primeira ação segura — mesmo que ainda não entenda nada de plantas.
          </p>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-button"
            onClick={onCtaClick}
            className="inline-block bg-[#E56538] hover:bg-[#d45629] text-white text-[14px] xs:text-[15px] sm:text-[16px] font-bold py-[16px] sm:py-[18px] px-[20px] sm:px-[28px] rounded-[12px] transition-all duration-200 btn-pv-shadow uppercase text-center w-full sm:w-auto cursor-pointer"
          >
            QUERO ENTENDER O QUE MINHAS PLANTAS PRECISAM
          </a>

          <p
            id="hero-features-subtext"
            className="text-[#B9CFC0] text-[13px] sm:text-[14px] leading-[1.6] sm:leading-[1.7] mt-3.5 sm:mt-4 flex flex-wrap items-center gap-x-4 gap-y-1"
          >
            <span>✓ Acesso imediato</span>
            <span>✓ Feito para iniciantes</span>
            <span>✓ Para casas e apartamentos</span>
          </p>
        </div>

        {/* Right Column / Mockup para Telas Grandes (Desktop lg+) */}
        <div
          id="hero-desktop-mockup-wrapper"
          className="hidden lg:flex justify-center items-center z-10 w-full"
        >
          <div className="relative w-full max-w-[580px] filter drop-shadow-[0_22px_36px_rgba(0,0,0,0.65)] transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src={kitTransparentImage}
              alt="Kit digital Planta Viva com guias práticos, mapas visuais, calendário e miniapp."
              className="w-full h-auto object-contain block mx-auto"
              referrerPolicy="no-referrer"
              id="hero-kit-image-desktop"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
