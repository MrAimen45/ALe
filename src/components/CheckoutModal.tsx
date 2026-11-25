import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, CheckCircle2, ArrowLeft, Gift } from 'lucide-react';
import { CartItem } from './CartDrawer';
import { PRODUCTS } from '../data/catalog';

interface CheckoutModalProps {
  isOpen: boolean;
  items: CartItem[];
  isGiftWrapEnabled: boolean;
  giftMessage: string;
  onClose: () => void;
  onOrderComplete: () => void;
}

type CheckoutStep = 'shipping' | 'review' | 'confirmed';

interface ShippingForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

export function CheckoutModal({
  isOpen,
  items,
  isGiftWrapEnabled,
  giftMessage,
  onClose,
  onOrderComplete
}: CheckoutModalProps) {
  const [step, setStep] = useState<CheckoutStep>('shipping');
  const [orderRef, setOrderRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState<ShippingForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });

  useEffect(() => {
    if (isOpen) {
      setStep('shipping');
      setErrorMsg('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleContinueToReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.address.trim() ||
      !form.city.trim() ||
      !form.postalCode.trim()
    ) {
      setErrorMsg('Compila tutti i campi obbligatori per proseguire.');
      return;
    }
    setErrorMsg('');
    setStep('review');
  };

  const handleConfirmOrder = () => {
    const generatedCode = `AS-${new Date().getFullYear()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;
    setOrderRef(generatedCode);
    setStep('confirmed');
    onOrderComplete();
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Checkout sicuro Ale Studio"
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#050404]/85 backdrop-blur-md p-0 sm:p-6 overflow-y-auto"
      >
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-3xl bg-[#0F0D0B] text-[#F5EFE6] border border-[#C9A25D]/30 shadow-[0_32px_90px_rgba(0,0,0,0.85)] max-h-full sm:max-h-[92vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#C9A25D]/20">
            <div className="flex items-center gap-2.5 text-xs tracking-[0.16em] uppercase text-[#C9A25D]">
              <Lock className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Checkout Sicuro · Ale Studio</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Chiudi checkout"
              className="w-10 h-10 flex items-center justify-center border border-[#C9A25D]/25 text-[#F5EFE6] hover:border-[#C9A25D] hover:text-[#C9A25D] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {step === 'shipping' && (
              <form onSubmit={handleContinueToReview} className="space-y-6">
                <div>
                  <h2 className="font-serif text-3xl font-medium text-[#F5EFE6]">
                    Dati di spedizione
                  </h2>
                  <p className="text-sm text-[#B5A998] mt-1">
                    Passo 1 di 2 · Inserisci l&apos;indirizzo per la consegna della tua selezione.
                  </p>
                </div>

                {errorMsg && (
                  <div
                    role="alert"
                    className="p-3.5 border border-[#C9A25D]/50 bg-[#C9A25D]/10 text-xs text-[#F5EFE6]"
                  >
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="checkout-firstname"
                      className="block text-xs uppercase tracking-[0.12em] text-[#B5A998] mb-1.5"
                    >
                      Nome *
                    </label>
                    <input
                      id="checkout-firstname"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full bg-[#141210] border border-[#C9A25D]/30 px-3.5 py-3 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#C9A25D]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="checkout-lastname"
                      className="block text-xs uppercase tracking-[0.12em] text-[#B5A998] mb-1.5"
                    >
                      Cognome *
                    </label>
                    <input
                      id="checkout-lastname"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full bg-[#141210] border border-[#C9A25D]/30 px-3.5 py-3 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#C9A25D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="checkout-email"
                      className="block text-xs uppercase tracking-[0.12em] text-[#B5A998] mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="checkout-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#141210] border border-[#C9A25D]/30 px-3.5 py-3 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#C9A25D]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="checkout-phone"
                      className="block text-xs uppercase tracking-[0.12em] text-[#B5A998] mb-1.5"
                    >
                      Telefono
                    </label>
                    <input
                      id="checkout-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#141210] border border-[#C9A25D]/30 px-3.5 py-3 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#C9A25D]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="checkout-address"
                    className="block text-xs uppercase tracking-[0.12em] text-[#B5A998] mb-1.5"
                  >
                    Indirizzo completo *
                  </label>
                  <input
                    id="checkout-address"
                    type="text"
                    required
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full bg-[#141210] border border-[#C9A25D]/30 px-3.5 py-3 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#C9A25D]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="checkout-city"
                      className="block text-xs uppercase tracking-[0.12em] text-[#B5A998] mb-1.5"
                    >
                      Città *
                    </label>
                    <input
                      id="checkout-city"
                      type="text"
                      required
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full bg-[#141210] border border-[#C9A25D]/30 px-3.5 py-3 text-sm text-[#F5EFE6] focus:outline-none focus:border-[#C9A25D]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="checkout-cap"
                      className="block text-xs uppercase tracking-[0.12em] text-[#B5A998] mb-1.5"
                    >
                      CAP *
                    </label>
                    <input
                      id="checkout-cap"
                      type="text"
                      required
                      value={form.postalCode}
                      onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
                      className="w-full bg-[#141210] border border-[#C9A25D]/30 px-3.5 py-3 text-sm text-[#F5EFE6] tabular-nums focus:outline-none focus:border-[#C9A25D]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-4 min-h-[48px] bg-[#C9A25D] text-[#0A0908] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#DFBC78] transition-colors cursor-pointer"
                  >
                    Riepilogo ordine
                  </button>
                </div>
              </form>
            )}

            {step === 'review' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-serif text-3xl font-medium text-[#F5EFE6]">
                      Riepilogo e conferma
                    </h2>
                    <p className="text-sm text-[#B5A998] mt-1">
                      Passo 2 di 2 · Verifica i dettagli prima di completare l&apos;ordine.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep('shipping')}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#C9A25D] hover:text-[#DFBC78] cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Modifica dati</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#141210] border border-[#C9A25D]/20 p-5 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#C9A25D] mb-1.5">
                      Destinatario
                    </p>
                    <p className="text-[#F5EFE6] font-medium">
                      {form.firstName} {form.lastName}
                    </p>
                    <p className="text-[#B5A998] mt-0.5">{form.address}</p>
                    <p className="text-[#B5A998]">
                      {form.postalCode} {form.city}
                    </p>
                    <p className="text-[#B5A998] mt-1">{form.email}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#C9A25D] mb-1.5">
                      Opzioni Regalo &amp; Pagamento
                    </p>
                    <p className="text-[#F5EFE6]">
                      {isGiftWrapEnabled
                        ? 'Confezione Regalo Natalizia inclusa'
                        : 'Confezione standard boutique'}
                    </p>
                    {isGiftWrapEnabled && giftMessage.trim() && (
                      <p className="text-xs italic text-[#DFBC78] mt-1">
                        &ldquo;{giftMessage}&rdquo;
                      </p>
                    )}
                    <p className="text-xs text-[#B5A998] mt-2">
                      Metodo di pagamento e importo finale verranno confermati con il listino ufficiale.
                    </p>
                  </div>
                </div>

                <div className="border-t border-b border-[#C9A25D]/20 py-4 space-y-3">
                  {items.map((item) => {
                    const product = PRODUCTS.find((p) => p.id === item.productId);
                    if (!product) return null;
                    const variant =
                      product.variants.find((v) => v.id === item.variantId) ??
                      product.variants[0];
                    return (
                      <div
                        key={`${item.productId}-${item.variantId}`}
                        className="flex items-center justify-between text-sm gap-4"
                      >
                        <div>
                          <span className="font-medium text-[#F5EFE6]">
                            {product.brand} — {product.name}
                          </span>
                          <p className="text-xs text-[#B5A998]">
                            {variant.label} · Quantità: <span className="tabular-nums">{item.quantity}</span>
                          </p>
                        </div>
                        <span className="text-[#DFBC78] tabular-nums shrink-0">
                          {variant.priceLabel}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-[#B5A998]">
                    Spedizione e resi: [condizioni commerciali da inserire]
                  </p>
                  <button
                    type="button"
                    onClick={handleConfirmOrder}
                    className="w-full sm:w-auto px-9 py-4 min-h-[48px] bg-[#C9A25D] text-[#0A0908] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#DFBC78] transition-colors cursor-pointer"
                  >
                    CONFERMA ORDINE
                  </button>
                </div>
              </div>
            )}

            {step === 'confirmed' && (
              <div className="py-8 text-center space-y-5 max-w-lg mx-auto">
                <CheckCircle2
                  className="w-12 h-12 text-[#C9A25D] mx-auto"
                  aria-hidden="true"
                />
                <p className="text-xs tracking-[0.2em] uppercase text-[#C9A25D] tabular-nums">
                  Ordine {orderRef} · Confermato
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#F5EFE6]">
                  Grazie per aver scelto Ale Studio.
                </h2>
                <p className="text-sm sm:text-base text-[#E5DDD0]/85 leading-relaxed">
                  Abbiamo registrato la tua richiesta per {form.firstName} {form.lastName} ({form.email}).
                </p>
                {isGiftWrapEnabled && (
                  <div className="inline-flex items-center gap-2 text-xs text-[#DFBC78] border border-[#C9A25D]/30 px-4 py-2">
                    <Gift className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Confezione Regalo Natalizia preparata per questo ordine</span>
                  </div>
                )}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-8 py-3.5 min-h-[44px] bg-[#C9A25D] text-[#0A0908] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#DFBC78] transition-colors cursor-pointer"
                  >
                    Torna alla boutique
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
