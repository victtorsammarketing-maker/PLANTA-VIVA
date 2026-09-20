declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    pixelId?: string;
  }
}

/**
 * Dispara evento padrão ou customizado no Meta Pixel (Facebook) com fallback seguro.
 */
export function fireMetaPixel(event: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      if (params) {
        window.fbq('track', event, params);
      } else {
        window.fbq('track', event);
      }
      // Log em modo dev para confirmação rápida
      if (import.meta.env.DEV) {
        console.log(`[Meta Pixel] Event: ${event}`, params);
      }
    } catch (err) {
      console.warn('[Meta Pixel] Erro ao disparar evento:', err);
    }
  }
}

/**
 * Evento: ViewContent (Visualização do Produto/Oferta na página)
 */
export function trackViewContent() {
  fireMetaPixel('ViewContent', {
    content_name: 'Método Planta Viva (R.A.I.Z.)',
    content_category: 'Jardinagem / Guia Prático',
    content_ids: ['WrjKJT'],
    content_type: 'product',
    value: 19.90,
    currency: 'BRL',
  });
}

/**
 * Evento: InitiateCheckout (Clique para ir ao checkout da Lowify)
 * Força todos os parâmetros comerciais recomendados pela Meta
 */
export function trackInitiateCheckout(source: string = 'cta_button') {
  fireMetaPixel('InitiateCheckout', {
    content_name: 'Kit Completo Planta Viva',
    content_category: 'Digital Product',
    content_ids: ['WrjKJT'],
    content_type: 'product',
    value: 19.90,
    currency: 'BRL',
    num_items: 1,
    origin_section: source,
  });
}
