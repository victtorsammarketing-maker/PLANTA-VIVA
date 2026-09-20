import yellowLeafImg from '../assets/images/folhas_amarelas_1789859641516.jpg';

export default function YellowLeafSection() {
  return (
    <section
      id="folha-amarela"
      className="w-full bg-[#F7F3E9] pt-[10px] md:pt-[20px] pb-[60px] md:pb-[90px] px-5"
    >
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* Left Column - Image */}
        <div className="flex justify-center items-center rounded-[18px] overflow-hidden shadow-md border border-[#DCE1DA]">
          <img
            src={yellowLeafImg}
            alt="Folhas apresentando amarelecimento"
            className="w-full h-full min-h-[320px] object-cover block"
            referrerPolicy="no-referrer"
            id="yellow-leaf-image"
          />
        </div>

        {/* Right Column - Dark Green Container */}
        <div
          id="yellow-leaf-content-card"
          className="bg-[#143E2E] rounded-[18px] p-8 sm:p-10 lg:p-[50px] flex flex-col justify-center text-left text-white shadow-md"
        >
          <span
            id="yellow-leaf-eyebrow"
            className="text-[#EFBD76] text-[12px] font-bold tracking-[2px] uppercase mb-3 block"
          >
            ANTES DE AGIR
          </span>

          <h2
            id="yellow-leaf-title"
            className="font-georgia text-white text-[32px] sm:text-[40px] lg:text-[46px] font-semibold leading-[1.06] tracking-[-1.2px] mb-[18px]"
          >
            Uma folha amarela não é um diagnóstico.
          </h2>

          <div
            id="yellow-leaf-description"
            className="text-[#DDE8E1] text-[16px] sm:text-[17px] leading-[1.7] space-y-3"
          >
            <p className="m-0">
              O amarelecimento pode acontecer por excesso de água, pouca luz, raiz comprometida, mudança de ambiente ou simplesmente pelo envelhecimento natural de uma folha.
            </p>
            <p className="m-0">
              Por isso, escolher uma receita antes de observar o padrão pode esconder a causa e gerar ainda mais estresse.
            </p>
            <p className="m-0">
              O caminho mais seguro começa entendendo onde o sinal apareceu, o que mudou recentemente e como a planta está reagindo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
