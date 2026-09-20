import { METHOD_STEPS, CHECKOUT_URL } from '../data/content.ts';

interface MethodSectionProps {
  onCtaClick?: () => void;
  checkoutUrl?: string;
}

export default function MethodSection({ onCtaClick, checkoutUrl = CHECKOUT_URL }: MethodSectionProps) {
  return (
    <section
      id="metodo-raiz"
      className="w-full bg-[#FFFFFF] py-[60px] md:py-[80px] px-5"
    >
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column (40% approx) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <span
            id="method-eyebrow"
            className="text-[#E56538] text-[12px] font-bold tracking-[2px] uppercase mb-3 block"
          >
            O MÉTODO R.A.I.Z.
          </span>

          <h2
            id="method-title"
            className="font-georgia text-[#223129] text-[32px] sm:text-[40px] lg:text-[46px] font-semibold leading-[1.06] tracking-[-1.2px] mb-[18px]"
          >
            Pare de testar cuidados aleatórios e siga uma ordem lógica de decisão.
          </h2>

          <div
            id="method-description"
            className="text-[#66736C] text-[16px] sm:text-[17px] leading-[1.7] mb-7 space-y-3"
          >
            <p className="m-0">
              Receitas prontas falham porque o mesmo sintoma pode ter causas completamente diferentes.
            </p>
            <p className="m-0">
              O Método R.A.I.Z. cruza os sinais visíveis com rega, luz, raízes, temperatura, ventilação, pragas e mudanças recentes.
            </p>
            <p className="m-0">
              Assim, você entende o que observar, escolhe uma primeira ação segura e evita modificar tudo ao mesmo tempo.
            </p>
          </div>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="method-cta-button"
            onClick={onCtaClick}
            className="inline-block bg-[#E56538] hover:bg-[#d45629] text-white text-[15px] sm:text-[16px] font-bold py-[18px] px-[28px] rounded-[12px] transition-all duration-200 btn-pv-shadow uppercase text-center w-full sm:w-auto cursor-pointer"
          >
            QUERO USAR O MÉTODO R.A.I.Z.
          </a>
        </div>

        {/* Right Column (60% approx) - 2x2 cards */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
            {METHOD_STEPS.map((step) => (
              <div
                key={step.letter}
                id={`method-step-${step.letter.toLowerCase()}`}
                className="border border-[#DCE1DA] rounded-[18px] bg-white p-[22px] shadow-sm hover:border-[#143E2E]/40 transition-colors"
              >
                <strong className="inline-flex w-[42px] height-[42px] h-[42px] rounded-[12px] bg-[#143E2E] text-white items-center justify-center text-[20px] font-bold font-sans">
                  {step.letter}
                </strong>
                <h3 className="font-georgia text-[24px] mt-[15px] mb-[8px] text-[#223129] font-semibold">
                  {step.title}
                </h3>
                <p className="m-0 text-[#66736C] text-[15px] sm:text-[16px] leading-[1.6]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Fechamento */}
          <div
            id="method-closing"
            className="p-4 rounded-[14px] bg-[#F7F3E9] border border-[#DCE1DA] text-[#223129] text-[15px] sm:text-[16px] font-medium leading-[1.6]"
          >
            Você deixa de agir por impulso e começa a cuidar com mais clareza, lógica e confiança.
          </div>
        </div>
      </div>
    </section>
  );
}
