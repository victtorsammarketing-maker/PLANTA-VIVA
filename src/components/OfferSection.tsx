import kitTransparentImage from '../assets/images/kit-planta-viva-transparent.png';
import { CHECKOUT_URL } from '../data/content.ts';

interface OfferSectionProps {
  onCheckout?: () => void;
  checkoutUrl?: string;
}

export default function OfferSection({ onCheckout, checkoutUrl = CHECKOUT_URL }: OfferSectionProps) {
  const items = [
    'Manual Planta Viva',
    'Mapa Mestre',
    'Mapa das Folhas',
    'Calendário da Planta Saudável',
    'Horta Econômica',
    'Miniapp Diagnóstico Verde',
  ];

  return (
    <section
      id="oferta"
      className="w-full bg-[#0D3124] text-white py-[55px] sm:py-[75px] md:py-[90px] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column (48%) - Mockup com Fundo Removido */}
        <div className="lg:col-span-6 flex justify-center items-center w-full">
          <div className="w-full max-w-[400px] sm:max-w-[480px] lg:max-w-[540px] filter drop-shadow-[0_22px_36px_rgba(0,0,0,0.65)] transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src={kitTransparentImage}
              alt="Coleção digital completa Planta Viva"
              className="w-full h-auto object-contain block mx-auto"
              referrerPolicy="no-referrer"
              id="offer-kit-image"
            />
          </div>
        </div>

        {/* Right Column (52%) */}
        <div
          id="offer-details-card"
          className="lg:col-span-6 flex flex-col items-start text-left p-0 sm:p-4 lg:p-[40px] w-full"
        >
          <span
            id="offer-eyebrow"
            className="text-[#EFBD76] text-[11px] sm:text-[12px] font-bold tracking-[1.5px] sm:tracking-[2px] uppercase mb-2 sm:mb-3 block"
          >
            OFERTA COMPLETA PLANTA VIVA
          </span>

          <h2
            id="offer-title"
            className="font-georgia text-white text-[27px] xs:text-[30px] sm:text-[38px] lg:text-[44px] font-semibold leading-[1.12] sm:leading-[1.06] tracking-[-0.6px] sm:tracking-[-1.2px] mb-3 sm:mb-[18px]"
          >
            Tenha um sistema completo de cuidados por menos que o preço de uma planta nova.
          </h2>

          <p className="text-[#DDE8E1] text-[15px] sm:text-[16px] font-medium mb-3">
            Você recebe acesso a todos os materiais abaixo:
          </p>

          <div className="space-y-2 mb-4 text-[#DDE8E1] text-[15px] sm:text-[16px] leading-[1.6]">
            {items.map((item, idx) => (
              <p key={idx} className="m-0 flex items-center gap-2">
                <span className="text-[#EFBD76] font-bold shrink-0">✓</span>
                <span>{item}</span>
              </p>
            ))}
          </div>

          <p className="text-[#B9CFC0] text-[13px] sm:text-[14px] leading-[1.6] mb-6">
            Consulte os conteúdos pelo celular ou computador sempre que surgir uma dúvida.
          </p>

          {/* Price Box */}
          <div className="mb-6 sm:mb-7 w-full">
            <p className="m-0 text-[#B9CFC0] text-[14px] sm:text-[15px]">Pagamento único</p>
            <div className="font-georgia text-[46px] xs:text-[54px] sm:text-[64px] font-bold text-white my-1 leading-tight flex items-baseline gap-2">
              <small className="text-[18px] sm:text-[20px] font-normal text-[#DDE8E1]">R$</small>
              <span>19,90</span>
            </div>
            <p className="m-0 text-[#B9CFC0] text-[13px] sm:text-[15px]">
              Sem mensalidade. Acesso digital liberado após a confirmação do pagamento.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="offer-checkout-button"
            onClick={onCheckout}
            className="w-full sm:w-auto inline-block bg-[#E56538] hover:bg-[#d45629] text-white text-[14px] xs:text-[15px] sm:text-[16px] font-bold py-[16px] sm:py-[18px] px-[20px] sm:px-[28px] rounded-[12px] transition-all duration-200 btn-pv-shadow uppercase text-center cursor-pointer mb-3"
          >
            QUERO RECEBER O PLANTA VIVA POR R$ 19,90
          </a>

          {/* Security Notice */}
          <div className="w-full sm:w-auto text-center sm:text-left">
            <p
              id="offer-guarantee-note"
              className="text-[#B9CFC0] text-[13px] leading-[1.7] flex items-center justify-center sm:justify-start gap-1.5"
            >
              <span>🔒</span>
              <span>Compra protegida por garantia de 7 dias</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
