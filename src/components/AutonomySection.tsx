import gardenImg from '../assets/images/horta_saudavel_1789859652899.jpg';
import { CHECKOUT_URL } from '../data/content.ts';

interface AutonomySectionProps {
  onCtaClick?: () => void;
  checkoutUrl?: string;
}

export default function AutonomySection({ onCtaClick, checkoutUrl = CHECKOUT_URL }: AutonomySectionProps) {
  const points = [
    'Saber quando observar e quando realmente agir.',
    'Entender por que regar novamente nem sempre resolve uma planta murcha.',
    'Reduzir perdas provocadas por excesso de água, adubo ou mudanças aleatórias.',
    'Identificar sinais comuns antes que o problema avance.',
    'Ter uma rotina de cuidados que cabe na sua semana.',
    'Cultivar temperos e folhas usando o espaço que você já possui.',
  ];

  return (
    <section
      id="autonomia"
      className="w-full bg-[#F7F3E9] py-[60px] md:py-[80px] px-5"
    >
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column (52%) */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="w-full rounded-[18px] overflow-hidden shadow-lg border border-[#DCE1DA]">
            <img
              src={gardenImg}
              alt="Horta doméstica saudável e organizada"
              className="w-full h-auto object-cover block"
              referrerPolicy="no-referrer"
              id="autonomy-garden-image"
            />
          </div>
        </div>

        {/* Right Column (48%) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left lg:pl-4">
          <span
            id="autonomy-eyebrow"
            className="text-[#E56538] text-[12px] font-bold tracking-[2px] uppercase mb-3 block"
          >
            DA INSEGURANÇA À AUTONOMIA
          </span>

          <h2
            id="autonomy-title"
            className="font-georgia text-[#223129] text-[32px] sm:text-[40px] lg:text-[46px] font-semibold leading-[1.06] tracking-[-1.2px] mb-[18px]"
          >
            Imagine olhar para sua planta e saber qual é o próximo passo mais seguro.
          </h2>

          <div className="space-y-3 mb-8 text-[#66736C] text-[16px] sm:text-[17px] leading-[1.7]">
            {points.map((pt, i) => (
              <p key={i} className="m-0 flex items-start gap-2">
                <span className="text-[#143E2E] font-bold">✓</span>
                <span>{pt}</span>
              </p>
            ))}
          </div>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="autonomy-cta-button"
            onClick={onCtaClick}
            className="inline-block bg-[#E56538] hover:bg-[#d45629] text-white text-[15px] sm:text-[16px] font-bold py-[18px] px-[28px] rounded-[12px] transition-all duration-200 btn-pv-shadow uppercase text-center w-full sm:w-auto cursor-pointer"
          >
            QUERO ENTENDER O QUE MINHAS PLANTAS PRECISAM
          </a>
        </div>
      </div>
    </section>
  );
}
