import { useState } from 'react';
import { X, ShieldCheck, ExternalLink, Lock } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string;
  onUpdateCheckoutUrl: (newUrl: string) => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  checkoutUrl,
  onUpdateCheckoutUrl,
}: CheckoutModalProps) {
  const [urlInput, setUrlInput] = useState(checkoutUrl);
  const [isEditing, setIsEditing] = useState(false);

  if (!isOpen) return null;

  const isDefaultPlaceholder =
    checkoutUrl.includes('SEU-CHECKOUT-AQUI') || checkoutUrl.includes('SEU-DOMINIO');

  const handleProceed = () => {
    if (isDefaultPlaceholder && !urlInput.includes('http')) {
      alert('Você pode inserir o link real do seu checkout (Hotmart, Kiwify, Eduzz, etc) abaixo!');
      setIsEditing(true);
      return;
    }
    const targetUrl = urlInput.startsWith('http') ? urlInput : `https://${urlInput}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    let cleaned = urlInput.trim();
    if (cleaned && !cleaned.startsWith('http://') && !cleaned.startsWith('https://')) {
      cleaned = `https://${cleaned}`;
    }
    onUpdateCheckoutUrl(cleaned);
    setIsEditing(false);
  };

  return (
    <div
      id="checkout-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="checkout-modal-content"
        className="relative w-full max-w-md bg-white rounded-[20px] shadow-2xl p-6 sm:p-8 text-[#223129] border border-[#DCE1DA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          id="close-checkout-modal"
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <div className="w-12 h-12 bg-[#E8F0E8] text-[#143E2E] rounded-full flex items-center justify-center mx-auto mb-3">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="font-georgia text-[24px] font-bold text-[#143E2E]">
            Finalizar Pedido
          </h3>
          <p className="text-[14px] text-[#66736C] mt-1">
            Planta Viva — Coleção Digital Completa
          </p>
        </div>

        {/* Order Summary Box */}
        <div className="bg-[#F7F3E9] rounded-[14px] p-4 mb-5 border border-[#DCE1DA]/70">
          <div className="flex justify-between items-center text-[15px] pb-2 border-b border-[#DCE1DA]">
            <span className="font-medium text-[#223129]">Planta Viva (Acesso Imediato)</span>
            <span className="font-bold text-[#143E2E]">R$ 19,90</span>
          </div>
          <div className="flex justify-between items-center text-[13px] text-[#66736C] pt-2">
            <span>Formato:</span>
            <span>Digital (PDF + Miniapp)</span>
          </div>
          <div className="flex justify-between items-center text-[13px] text-[#66736C] pt-1">
            <span>Garantia:</span>
            <span>7 Dias Incondicional</span>
          </div>
        </div>

        {/* Checkout URL Management */}
        {isEditing ? (
          <form onSubmit={handleSaveUrl} className="mb-5">
            <label className="block text-[12px] font-bold text-[#143E2E] uppercase tracking-wider mb-1.5">
              URL do seu Checkout (Hotmart, Kiwify, etc.):
            </label>
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://pay.kiwify.com.br/..."
              className="w-full text-[14px] p-3 border border-[#DCE1DA] rounded-[10px] focus:outline-none focus:border-[#143E2E] mb-2"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 bg-[#143E2E] text-white text-[13px] font-bold py-2 rounded-[8px] hover:bg-[#0d2a1f]"
              >
                Salvar URL
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-3 bg-gray-100 text-gray-700 text-[13px] font-medium rounded-[8px] hover:bg-gray-200"
              >
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          <div className="mb-5 text-center">
            {isDefaultPlaceholder ? (
              <div className="bg-amber-50 border border-amber-200 rounded-[10px] p-3 text-left mb-3">
                <p className="text-[12px] text-amber-900 font-medium">
                  💡 <strong>Link do Checkout:</strong> Atualmente configurado como o padrão do modelo. Você pode configurar o link direto da sua plataforma de pagamentos.
                </p>
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="mt-1 text-[12px] text-[#E56538] font-bold hover:underline"
                >
                  Editar link do checkout →
                </button>
              </div>
            ) : (
              <div className="text-[12px] text-gray-500 mb-2 flex items-center justify-center gap-1.5">
                <span>Link configurado:</span>
                <span className="font-mono text-[#143E2E] truncate max-w-[200px]">
                  {checkoutUrl}
                </span>
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="text-[#E56538] hover:underline text-[11px] font-bold"
                >
                  (alterar)
                </button>
              </div>
            )}
          </div>
        )}

        {/* Proceed Button */}
        <button
          type="button"
          id="modal-proceed-button"
          onClick={handleProceed}
          className="w-full bg-[#E56538] hover:bg-[#d45629] text-white font-bold py-[16px] px-[20px] rounded-[12px] text-[15px] uppercase transition-all duration-200 btn-pv-shadow flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Ir para Pagamento Seguro</span>
          <ExternalLink className="w-4 h-4" />
        </button>

        {/* Security badges */}
        <div className="mt-4 flex items-center justify-center gap-4 text-[12px] text-[#66736C]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Pagamento 100% Seguro
          </span>
          <span>•</span>
          <span>Garantia de 7 Dias</span>
        </div>
      </div>
    </div>
  );
}
