export default function FooterSection() {
  return (
    <footer
      id="rodape"
      className="w-full bg-[#09271D] text-[#AFC4B7] py-[50px] px-5 text-center border-t border-[#133c2e]"
    >
      <div className="max-w-[1140px] mx-auto">
        <h3
          id="footer-brand"
          className="font-georgia text-white text-[26px] font-semibold leading-[1.06] tracking-[-1.2px] mb-[18px]"
        >
          Planta Viva
        </h3>

        <div
          id="footer-disclaimer"
          className="text-[#AFC4B7] text-[13px] leading-[1.7] max-w-2xl mx-auto space-y-2"
        >
          <p className="m-0">
            Produto digital educativo. As orientações devem ser adaptadas à espécie, ao clima, à estação, ao ambiente e às instruções presentes nos rótulos dos insumos.
          </p>
          <p className="m-0">
            Em casos de deterioração rápida, toxicidade, plantas de alto valor ou estruturas suspensas, procure orientação qualificada.
          </p>
        </div>

        <p
          id="footer-badges"
          className="text-[#AFC4B7] text-[13px] font-semibold tracking-wider uppercase mt-5 mb-0"
        >
          PAGAMENTO SEGURO • GARANTIA DE 7 DIAS • ACESSO DIGITAL
        </p>

        <div className="mt-8 text-[12px] text-[#698a77] border-t border-[#143e2e]/50 pt-4">
          © 2026 Planta Viva. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
