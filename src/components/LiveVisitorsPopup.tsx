import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, Sparkles, MapPin, Zap } from 'lucide-react';
import kitImg from '../assets/images/kit-planta-viva-transparent.png';
import { CHECKOUT_URL } from '../data/content';

interface GeoLocation {
  city: string;
  state: string;
  isLocal: boolean;
}

interface PopupNotification {
  id: string;
  badge: string;
  badgeType: 'live' | 'sale' | 'geo' | 'pix';
  title: string;
  subtitle: string;
  timeAgo?: string;
  amount?: string;
  city?: string;
  state?: string;
  isLiveViewer?: boolean;
}

// Lista rica e variada de vendas aprovadas em cidades de todo o Brasil
const BRAZILIAN_SALES: { name: string; city: string; state: string; payment: 'Pix' | 'Cartão' }[] = [
  { name: 'Mariana S.', city: 'São Paulo', state: 'SP', payment: 'Pix' },
  { name: 'Carlos Eduardo R.', city: 'Curitiba', state: 'PR', payment: 'Cartão' },
  { name: 'Juliana M.', city: 'Belo Horizonte', state: 'MG', payment: 'Pix' },
  { name: 'Roberto F.', city: 'Campinas', state: 'SP', payment: 'Pix' },
  { name: 'Ana Paula T.', city: 'Porto Alegre', state: 'RS', payment: 'Cartão' },
  { name: 'Cláudio V.', city: 'Rio de Janeiro', state: 'RJ', payment: 'Pix' },
  { name: 'Patrícia L.', city: 'Brasília', state: 'DF', payment: 'Pix' },
  { name: 'Rodrigo N.', city: 'Goiânia', state: 'GO', payment: 'Cartão' },
  { name: 'Camila D.', city: 'Florianópolis', state: 'SC', payment: 'Pix' },
  { name: 'Gabriel B.', city: 'Salvador', state: 'BA', payment: 'Pix' },
  { name: 'Beatriz A.', city: 'Fortaleza', state: 'CE', payment: 'Pix' },
  { name: 'Fernanda C.', city: 'Recife', state: 'PE', payment: 'Cartão' },
  { name: 'Marcelo K.', city: 'Santos', state: 'SP', payment: 'Pix' },
  { name: 'Renata P.', city: 'Ribeirão Preto', state: 'SP', payment: 'Pix' },
  { name: 'Thiago M.', city: 'Joinville', state: 'SC', payment: 'Cartão' },
  { name: 'Larissa O.', city: 'Vitória', state: 'ES', payment: 'Pix' },
];

const LOCAL_FIRST_NAMES = [
  'Mariana S.',
  'Juliana M.',
  'Carlos E.',
  'Ana Paula',
  'Fernanda L.',
  'Lucas R.',
  'Patrícia C.',
  'Rodrigo B.',
];

export default function LiveVisitorsPopup({
  checkoutUrl = CHECKOUT_URL,
  onCtaClick,
}: {
  checkoutUrl?: string;
  onCtaClick?: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [viewerCount, setViewerCount] = useState(347);
  const [currentNotification, setCurrentNotification] = useState<PopupNotification | null>(null);
  const [userLocation, setUserLocation] = useState<GeoLocation | null>(null);
  const [cycleIndex, setCycleIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Puxa automaticamente a localização da região do usuário pelo IP
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const detectLocation = async () => {
      try {
        const res = await fetch('https://ipwho.is/', {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) throw new Error('Falha na resposta do IP');
        const data = await res.json();

        if (isMounted && data.success && data.city) {
          // Se estiver no Brasil, usa o estado/cidade real
          const stateCode = data.region_code || (data.country_code === 'BR' ? data.region : 'SP');
          setUserLocation({
            city: data.city,
            state: stateCode || 'Brasil',
            isLocal: true,
          });
        } else if (isMounted) {
          // Fallback padrão amigável
          setUserLocation({
            city: 'sua região',
            state: 'Brasil',
            isLocal: false,
          });
        }
      } catch {
        if (isMounted) {
          setUserLocation({
            city: 'sua região',
            state: 'Brasil',
            isLocal: false,
          });
        }
      }
    };

    detectLocation();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  // 2. Flutua levemente o número de pessoas ativas em torno de 347 (335 - 364)
  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewerCount((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 a +2
        const next = prev + delta;
        if (next < 334) return 342;
        if (next > 365) return 351;
        return next;
      });
    }, 4500);

    return () => clearInterval(viewerInterval);
  }, []);

  // 3. Orquestrador de popups inteligentes
  useEffect(() => {
    if (isDismissed) return;

    const buildNotification = (step: number): PopupNotification => {
      const mode = step % 4;

      // Modo 0: Pop-up de Pessoas Vendo Agora (347 pessoas ao vivo)
      if (mode === 0) {
        return {
          id: `live-${Date.now()}`,
          isLiveViewer: true,
          badge: 'AO VIVO',
          badgeType: 'live',
          title: `${viewerCount} pessoas vendo o produto agora`,
          subtitle: userLocation?.city && userLocation.isLocal
            ? `Várias pessoas de ${userLocation.city} e região online`
            : 'Alta procura pelo kit Planta Viva por R$ 19,90',
          amount: 'R$ 19,90',
        };
      }

      // Modo 1: Venda aprovada hiper-personalizada com o IP da região da pessoa
      if (mode === 1 && userLocation?.city && userLocation.isLocal) {
        const randomName = LOCAL_FIRST_NAMES[step % LOCAL_FIRST_NAMES.length];
        const minutesAgo = Math.floor(Math.random() * 4) + 1;
        return {
          id: `local-sale-${Date.now()}`,
          badge: 'VENDA APROVADA',
          badgeType: 'sale',
          title: `${randomName} (${userLocation.city}, ${userLocation.state})`,
          subtitle: 'Compra de R$ 19,90 aprovada via Pix • Acesso liberado',
          timeAgo: `há ${minutesAgo} min`,
          amount: 'R$ 19,90',
          city: userLocation.city,
          state: userLocation.state,
        };
      }

      // Modo 2: Destaque de alta demanda na região da pessoa
      if (mode === 2 && userLocation?.city && userLocation.isLocal) {
        return {
          id: `geo-demand-${Date.now()}`,
          badge: 'ALTA DEMANDA LOCAL',
          badgeType: 'geo',
          title: `Mais de 24 kits entregues em ${userLocation.city}`,
          subtitle: 'Moradores da sua região estão usando o Método R.A.I.Z.',
          timeAgo: 'esta semana',
          amount: 'R$ 19,90',
        };
      }

      // Modo 3 (e fallback): Vendas aprovadas em diferentes capitais e estados do Brasil
      const sale = BRAZILIAN_SALES[step % BRAZILIAN_SALES.length];
      const minutes = Math.floor(Math.random() * 6) + 1;
      return {
        id: `brazil-sale-${Date.now()}`,
        badge: 'VENDA APROVADA',
        badgeType: sale.payment === 'Pix' ? 'pix' : 'sale',
        title: `${sale.name} (${sale.city}, ${sale.state})`,
        subtitle: `Acabou de adquirir o Planta Viva por R$ 19,90 (${sale.payment})`,
        timeAgo: `há ${minutes} min`,
        amount: 'R$ 19,90',
        city: sale.city,
        state: sale.state,
      };
    };

    const showNotification = () => {
      const nextNotification = buildNotification(cycleIndex);
      setCurrentNotification(nextNotification);
      setIsVisible(true);

      // Fica visível por 5.5 segundos
      timerRef.current = setTimeout(() => {
        setIsVisible(false);

        // Intervalo de espera antes do próximo popup (4 a 5 segundos)
        timerRef.current = setTimeout(() => {
          setCycleIndex((prev) => prev + 1);
        }, 4500);
      }, 5500);
    };

    // Primeiro popup dispara 2 segundos após entrar na página
    if (cycleIndex === 0 && !isVisible) {
      timerRef.current = setTimeout(() => {
        showNotification();
      }, 2000);
    } else if (cycleIndex > 0) {
      showNotification();
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [cycleIndex, isDismissed, userLocation, viewerCount]);

  if (isDismissed) return null;

  return (
    <aside
      aria-label="Notificações de vendas e visitantes em tempo real"
      className="fixed bottom-4 left-4 z-40 max-w-[380px] w-[calc(100vw-32px)] sm:w-auto pointer-events-none"
    >
      <AnimatePresence>
        {isVisible && currentNotification && (
          <motion.div
            key={currentNotification.id}
            initial={{ opacity: 0, y: 35, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_14px_38px_rgba(13,49,36,0.18)] border border-[#E8DFC8] flex items-center gap-3.5 group relative hover:shadow-[0_18px_44px_rgba(13,49,36,0.22)] transition-shadow"
          >
            {/* Botão de Fechar discreto */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(false);
                setIsDismissed(true);
              }}
              title="Fechar notificações"
              className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full text-[#8C9B92] hover:text-[#223129] hover:bg-black/5 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Link direto para o checkout com track de clique */}
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCtaClick}
              className="flex items-center gap-3.5 text-left w-full pr-5"
            >
              {/* Miniatura do Kit ou Ícone de Confirmação */}
              <div className="relative shrink-0 w-13 h-13 rounded-xl bg-[#EAF3EC] border border-[#2E6F4E]/15 flex items-center justify-center overflow-hidden p-1">
                {currentNotification.isLiveViewer ? (
                  <>
                    <img
                      src={kitImg}
                      alt="Kit Planta Viva"
                      className="w-full h-full object-contain"
                    />
                    <span className="absolute bottom-1 right-1 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                  </>
                ) : currentNotification.badgeType === 'geo' ? (
                  <div className="w-full h-full rounded-lg bg-amber-50 flex items-center justify-center text-amber-700">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                ) : (
                  <div className="w-full h-full rounded-lg bg-emerald-600/10 flex items-center justify-center text-emerald-700">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                )}
              </div>

              {/* Informações da Notificação */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                  {currentNotification.badgeType === 'live' ? (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-red-50 text-red-700 font-extrabold text-[10px] tracking-wider uppercase border border-red-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      {currentNotification.badge}
                    </span>
                  ) : currentNotification.badgeType === 'geo' ? (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 font-bold text-[10px] tracking-wider uppercase border border-amber-200/70">
                      <Zap className="w-2.5 h-2.5 text-amber-600 fill-amber-600" />
                      {currentNotification.badge}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px] tracking-wider uppercase border border-emerald-200/70">
                      <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                      {currentNotification.badge}
                    </span>
                  )}

                  {currentNotification.amount && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#FAF7F2] text-[#143E2E] font-bold text-[10px] border border-[#E8DFC8]">
                      {currentNotification.amount}
                    </span>
                  )}

                  {currentNotification.timeAgo && (
                    <span className="text-[11px] text-[#8C9B92] ml-auto">
                      {currentNotification.timeAgo}
                    </span>
                  )}
                </div>

                <p className="text-[#1A3326] font-bold text-[13px] sm:text-[14px] leading-tight truncate">
                  {currentNotification.title}
                </p>

                <p className="text-[#5A6D62] text-[11px] sm:text-[12px] leading-snug truncate mt-0.5">
                  {currentNotification.subtitle}
                </p>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
