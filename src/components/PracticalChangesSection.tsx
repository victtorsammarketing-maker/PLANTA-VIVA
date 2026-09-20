import { PRACTICAL_CHANGES } from '../data/content.ts';

export default function PracticalChangesSection() {
  return (
    <section
      id="pratica"
      className="w-full bg-[#143E2E] text-white pt-[60px] md:pt-[85px] pb-[70px] md:pb-[90px] px-5"
    >
      <div className="max-w-[1140px] mx-auto text-center">
        {/* Header */}
        <span
          id="practical-eyebrow"
          className="text-[#EFBD76] text-[12px] font-bold tracking-[2px] uppercase mb-3 block"
        >
          O QUE MUDA NA PRÁTICA
        </span>

        <h2
          id="practical-title"
          className="font-georgia text-white text-[32px] sm:text-[40px] lg:text-[46px] font-semibold leading-[1.06] tracking-[-1.2px] mb-8 md:mb-12 max-w-3xl mx-auto"
        >
          Você deixa de adivinhar e começa a entender o que observar.
        </h2>

        {/* 6 Cards Grid (3 columns on md/lg, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px] text-left">
          {PRACTICAL_CHANGES.map((item, index) => (
            <div
              key={index}
              id={`practical-card-${index + 1}`}
              className="border border-[#DCE1DA] rounded-[18px] p-[24px] bg-white text-[#223129] h-full flex flex-col justify-start shadow-sm hover:translate-y-[-2px] transition-transform"
            >
              <div className="w-[42px] h-[42px] rounded-[12px] bg-[#E8F0E8] text-[#143E2E] flex items-center justify-center font-bold text-[18px] mb-[16px] shrink-0">
                ✓
              </div>
              <h3 className="font-georgia text-[22px] sm:text-[23px] text-[#223129] font-semibold mb-[10px]">
                {item.title}
              </h3>
              <p className="m-0 text-[#66736C] text-[15px] sm:text-[16px] leading-[1.65]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
