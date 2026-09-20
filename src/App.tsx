/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection.tsx';
import ProblemSection from './components/ProblemSection.tsx';
import YellowLeafSection from './components/YellowLeafSection.tsx';
import MethodSection from './components/MethodSection.tsx';
import PracticalChangesSection from './components/PracticalChangesSection.tsx';
import LibrarySection from './components/LibrarySection.tsx';
import AutonomySection from './components/AutonomySection.tsx';
import ProofSection from './components/ProofSection.tsx';
import { WhatsAppTestimonialsSection } from './components/WhatsAppTestimonialsSection.tsx';
import OfferSection from './components/OfferSection.tsx';
import GuaranteeSection from './components/GuaranteeSection.tsx';
import FaqSection from './components/FaqSection.tsx';
import FooterSection from './components/FooterSection.tsx';
import CheckoutModal from './components/CheckoutModal.tsx';
import LiveVisitorsPopup from './components/LiveVisitorsPopup.tsx';
import { CHECKOUT_URL } from './data/content.ts';
import { trackViewContent, trackInitiateCheckout } from './utils/pixel.ts';

export default function App() {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState(CHECKOUT_URL);

  useEffect(() => {
    // Dispara evento ViewContent com parâmetros completos do produto
    trackViewContent();
  }, []);

  const handleCtaClick = (origin: string) => {
    trackInitiateCheckout(origin);
  };

  return (
    <div className="min-h-screen w-full bg-white text-[#223129] antialiased selection:bg-[#EFBD76] selection:text-[#0D3124]">
      {/* 1. Hero Section (pv-hero) */}
      <HeroSection
        checkoutUrl={checkoutUrl}
        onCtaClick={() => handleCtaClick('hero')}
      />

      {/* 2. Isso acontece com você? (Problem Section) */}
      <ProblemSection />

      {/* 3. Antes de agir / Folha Amarela */}
      <YellowLeafSection />

      {/* 4. O Mecanismo Único (Método R.A.I.Z.) */}
      <MethodSection
        checkoutUrl={checkoutUrl}
        onCtaClick={() => handleCtaClick('metodo_raiz')}
      />

      {/* 5. O que muda na prática (6 Practical Changes) */}
      <PracticalChangesSection />

      {/* 6. Tudo o que você recebe (Library / Materials) */}
      <LibrarySection />

      {/* 7. Do medo à autonomia */}
      <AutonomySection
        checkoutUrl={checkoutUrl}
        onCtaClick={() => handleCtaClick('autonomia')}
      />

      {/* 8. Demonstração, não promessa vazia (Stats) */}
      <ProofSection />

      {/* 8.1. Prova Social Real (Prints de WhatsApp) */}
      <WhatsAppTestimonialsSection
        checkoutUrl={checkoutUrl}
        onCtaClick={() => handleCtaClick('whatsapp_testimonials')}
      />

      {/* 9. Oferta Completa Planta Viva */}
      <OfferSection
        checkoutUrl={checkoutUrl}
        onCheckout={() => handleCtaClick('oferta')}
      />

      {/* 10. Risco Zero para você (Garantia 7 Dias) */}
      <GuaranteeSection
        checkoutUrl={checkoutUrl}
        onCheckout={() => handleCtaClick('garantia')}
      />

      {/* 11. Dúvidas Frequentes (FAQ) */}
      <FaqSection />

      {/* 12. Rodapé */}
      <FooterSection />

      {/* Live Social Proof Popup */}
      <LiveVisitorsPopup
        checkoutUrl={checkoutUrl}
        onCtaClick={() => handleCtaClick('live_popup')}
      />

      {/* Checkout Modal (reserva) */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        checkoutUrl={checkoutUrl}
        onUpdateCheckoutUrl={(newUrl) => setCheckoutUrl(newUrl)}
      />
    </div>
  );
}

