import { CHECKOUT_URL } from '../data/content.ts';

interface GuaranteeSectionProps {
  onCheckout?: () => void;
  checkoutUrl?: string;
}

export default function GuaranteeSection({ onCheckout, checkoutUrl = CHECKOUT_URL }: GuaranteeSectionProps) {
  return (
    <section
      id="garantia"
      className="w-full bg-[#F7F3E9] py-[55px] sm:py-[70px] md:py-[80px] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Column (24% approx) - 7 Dias Seal */}
        <div className="md:col-span-4 lg:col-span-3 flex justify-center items-center">
          <div
            id="guarantee-seal"
            className="w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] rounded-full bg-[#143E2E] text-white flex items-center justify-center text-center shadow-md shrink-0 border-[8px] sm:border-[10px] border-[#E3ECE4]"
          >
            <div>
              <strong className="font-georgia text-[38px] sm:text-[44px] block leading-none font-bold">
                7
              </strong>
              <span className="text-[14px] sm:text-[16px] tracking-wider uppercase font-bold">
                DIAS
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (76% approx) */}
        <div className="md:col-span-8 lg:col-span-9 flex flex-col items-center md:items-start text-center md:text-left">
          <span
            id="guarantee-eyebrow"
            className="text-[#E56538] text-[11px] sm:text-[12px] font-bold tracking-[1.5px] sm:tracking-[2px] uppercase mb-2 sm:mb-3 block"
          >
            RISCO ZERO PARA VOCÊ
          </span>

          <h2
            id="guarantee-title"
            className="font-georgia text-[#223129] text-[27px] xs:text-[30px] sm:text-[38px] lg:text-[46px] font-semibold leading-[1.12] sm:leading-[1.06] tracking-[-0.6px] sm:tracking-[-1.2px] mb-3 sm:mb-[18px]"
          >
            Conheça o Planta Viva por 7 dias.
          </h2>

          <div
            id="guarantee-description"
            className="text-[#66736C] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] sm:leading-[1.7] mb-6 sm:mb-7 max-w-2xl space-y-3"
          >
            <p className="m-0">
              Acesse os materiais, conheça o método e avalie com tranquilidade se o conteúdo faz sentido para sua rotina.
            </p>
            <p className="m-0">
              Se você decidir que o Planta Viva não é para você, poderá solicitar o reembolso dentro do prazo da garantia, seguindo as regras da plataforma de pagamento.
            </p>
          </div>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="guarantee-checkout-button"
            onClick={onCheckout}
            className="inline-block bg-[#E56538] hover:bg-[#d45629] text-white text-[14px] xs:text-[15px] sm:text-[16px] font-bold py-[16px] sm:py-[18px] px-[20px] sm:px-[28px] rounded-[12px] transition-all duration-200 btn-pv-shadow uppercase text-center w-full sm:w-auto cursor-pointer"
          >
            QUERO COMEÇAR COM SEGURANÇA
          </a>
        </div>
      </div>
    </section>
  );
}
