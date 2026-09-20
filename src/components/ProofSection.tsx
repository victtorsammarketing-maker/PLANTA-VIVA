export default function ProofSection() {
  const stats = [
    { number: '150+', label: 'Páginas de conteúdo prático e visual' },
    { number: '3', label: 'Projetos de horta para diferentes espaços' },
    { number: '5', label: 'Perguntas para iniciar o diagnóstico no miniapp' },
  ];

  return (
    <section
      id="demonstracao"
      className="w-full bg-[#FFFFFF] py-[60px] md:py-[80px] px-5"
    >
      <div className="max-w-[1140px] mx-auto text-center">
        <span
          id="proof-eyebrow"
          className="text-[#E56538] text-[12px] font-bold tracking-[2px] uppercase mb-3 block"
        >
          NÃO É APENAS MAIS UM PDF
        </span>

        <h2
          id="proof-title"
          className="font-georgia text-[#223129] text-[32px] sm:text-[40px] lg:text-[46px] font-semibold leading-[1.06] tracking-[-1.2px] mb-[18px] max-w-3xl mx-auto"
        >
          Um sistema visual para consultar sempre que surgir uma dúvida.
        </h2>

        <div
          id="proof-description"
          className="text-[#66736C] text-[16px] sm:text-[17px] leading-[1.7] max-w-3xl mx-auto mb-[25px] space-y-2"
        >
          <p className="m-0">
            O Planta Viva reúne mais de 150 páginas organizadas, imagens específicas para diferentes sintomas, mapas de consulta rápida, materiais preenchíveis e um miniapp que ajuda a colocar o método em prática.
          </p>
          <p className="m-0">
            Em vez de procurar uma resposta diferente em cada vídeo, você passa a ter uma biblioteca organizada para consultar no celular ou computador.
          </p>
        </div>

        {/* 3 Stat Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px] mt-[25px]">
          {stats.map((stat, i) => (
            <div
              key={i}
              id={`proof-stat-box-${i + 1}`}
              className="border border-[#DCE1DA] p-[28px] rounded-[18px] text-center bg-white shadow-sm hover:border-[#143E2E]/30 transition-colors"
            >
              <strong className="font-georgia text-[42px] sm:text-[50px] font-bold text-[#143E2E] block leading-none mb-2">
                {stat.number}
              </strong>
              <span className="text-[#223129] text-[14px] leading-[1.7] block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
