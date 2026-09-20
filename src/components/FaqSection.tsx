import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content.ts';

export default function FaqSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    '4874e938': true, // Keep first open by default for immediate preview clarity
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#FFFFFF] py-[60px] md:py-[80px] px-5 border-t border-[#f0eee6]"
    >
      <div className="max-w-[1140px] mx-auto text-center">
        <span
          id="faq-eyebrow"
          className="text-[#E56538] text-[12px] font-bold tracking-[2px] uppercase mb-3 block"
        >
          DÚVIDAS FREQUENTES
        </span>

        <h2
          id="faq-title"
          className="font-georgia text-[#223129] text-[32px] sm:text-[40px] lg:text-[46px] font-semibold leading-[1.06] tracking-[-1.2px] mb-10 md:mb-12 max-w-3xl mx-auto"
        >
          Tudo o que você precisa saber antes de começar.
        </h2>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto text-left divide-y divide-[#DCE1DA] border-y border-[#DCE1DA]">
          {FAQ_ITEMS.map((item) => {
            const isOpen = !!openIds[item.id];
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className="py-4 transition-colors"
              >
                <button
                  type="button"
                  id={`faq-toggle-btn-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between text-left py-2 font-medium text-[#223129] hover:text-[#143E2E] focus:outline-none cursor-pointer gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] sm:text-[18px] font-semibold">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#F7F3E9] group-hover:bg-[#E8F0E8] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#143E2E] text-white group-hover:bg-[#143E2E]' : 'text-[#223129]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="pt-2 pb-3 text-[#66736C] text-[15px] sm:text-[16px] leading-[1.65]"
                  >
                    <p className="m-0">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
