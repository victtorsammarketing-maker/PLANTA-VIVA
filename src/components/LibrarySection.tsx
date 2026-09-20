import { LIBRARY_ITEMS } from '../data/content.ts';

export default function LibrarySection() {
  return (
    <section
      id="conteudo"
      className="w-full bg-[#FFFFFF] pt-[60px] md:pt-[90px] pb-[60px] md:pb-[90px] px-5"
    >
      <div className="max-w-[1140px] mx-auto text-center">
        {/* Header */}
        <span
          id="library-eyebrow"
          className="text-[#E56538] text-[12px] font-bold tracking-[2px] uppercase mb-3 block"
        >
          TUDO O QUE VOCÊ RECEBE
        </span>

        <h2
          id="library-title"
          className="font-georgia text-[#223129] text-[32px] sm:text-[40px] lg:text-[46px] font-semibold leading-[1.06] tracking-[-1.2px] mb-[18px] max-w-3xl mx-auto"
        >
          Uma biblioteca prática para cuidar, recuperar e cultivar.
        </h2>

        <p
          id="library-description"
          className="text-[#66736C] text-[16px] sm:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-10 md:mb-14"
        >
          Cada material resolve uma parte diferente da jornada. Você não precisa estudar tudo de uma vez: basta consultar o guia adequado quando surgir uma dúvida.
        </p>

        {/* 6 Cards Grid (3 columns on md/lg, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px] text-left">
          {LIBRARY_ITEMS.map((item, index) => (
            <div
              key={index}
              id={`library-card-${index + 1}`}
              className="border border-[#DCE1DA] rounded-[18px] bg-white p-[24px] h-full flex flex-col justify-start shadow-sm hover:border-[#143E2E]/40 hover:shadow-md transition-all"
            >
              <div>
                <span className="inline-block bg-[#F5E8DF] text-[#B34F2E] rounded-full px-[10px] py-[5px] text-[12px] font-bold uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>
              <h3 className="font-georgia text-[22px] sm:text-[23px] mt-[18px] mb-[10px] text-[#223129] font-semibold">
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
