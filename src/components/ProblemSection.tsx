import { PROBLEMS_LIST } from '../data/content.ts';

export default function ProblemSection() {
  return (
    <section
      id="problema"
      className="w-full bg-[#F7F3E9] py-[60px] md:py-[80px] px-5"
    >
      <div className="max-w-[1140px] mx-auto text-center">
        <span
          id="problem-eyebrow"
          className="text-[#E56538] text-[12px] font-bold tracking-[2px] uppercase mb-3 block"
        >
          ISSO ACONTECE COM VOCÊ?
        </span>

        <h2
          id="problem-title"
          className="font-georgia text-[#223129] text-[32px] sm:text-[40px] lg:text-[46px] font-semibold leading-[1.06] tracking-[-1.2px] mb-[18px] max-w-3xl mx-auto"
        >
          Você tenta ajudar a planta, mas cada tentativa parece piorar o problema?
        </h2>

        <div
          id="problem-description"
          className="text-[#66736C] text-[16px] sm:text-[17px] leading-[1.7] max-w-3xl mx-auto mb-[25px] space-y-2"
        >
          <p className="m-0">
            Quando todo sinal parece significar a mesma coisa, é comum regar, adubar, trocar o vaso e mudar a planta de lugar — tudo de uma vez.
          </p>
          <p className="m-0">
            A planta continua piorando e você não consegue descobrir qual era a causa ou qual mudança provocou uma nova reação.
          </p>
        </div>

        {/* List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mt-[25px] text-left">
          {PROBLEMS_LIST.map((problem, index) => (
            <div
              key={index}
              id={`problem-card-${index + 1}`}
              className="border border-[#DCE1DA] rounded-[16px] bg-white p-[20px] text-[#223129] text-[16px] leading-[1.6] shadow-sm flex items-start gap-2.5 hover:border-[#143E2E]/30 transition-colors"
            >
              <span className="text-[#143E2E] font-bold shrink-0">✓</span>
              <span>{problem}</span>
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <p
          id="problem-closing"
          className="text-[#223129] font-medium text-[16px] sm:text-[17px] leading-[1.7] max-w-3xl mx-auto mt-8 mb-0"
        >
          O problema não é falta de dedicação. É tentar cuidar sem uma ordem clara para observar, decidir e agir.
        </p>
      </div>
    </section>
  );
}
