import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, Gift, ShieldCheck } from 'lucide-react';
import { FragranceProduct, PRODUCTS } from '../data/catalog';
import { ResilientImage } from './ResilientImage';

export interface CartItem {
  productId: FragranceProduct['id'];
  variantId: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  isGiftWrapEnabled: boolean;
  giftMessage: string;
  onClose: () => void;
  onUpdateQuantity: (productId: FragranceProduct['id'], variantId: string, delta: number) => void;
  onRemoveItem: (productId: FragranceProduct['id'], variantId: string) => void;
  onToggleGiftWrap: () => void;
  onChangeGiftMessage: (msg: string) => void;
  onProceedToCheckout: () => void;
}

export function CartDrawer({
  isOpen,
  items,
  isGiftWrapEnabled,
  giftMessage,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onToggleGiftWrap,
  onChangeGiftMessage,
  onProceedToCheckout
}: CartDrawerProps) {
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

  const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Il tuo carrello Ale Studio"
          className="fixed inset-0 z-50 flex justify-end"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#050404]/78 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-md bg-[#0F0D0B] text-[#F5EFE6] border-l border-[#C9A25D]/25 h-full flex flex-col shadow-[-24px_0_70px_rgba(0,0,0,0.85)]"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#C9A25D]/20">
              <div>
                <h2 className="font-serif text-2xl font-medium text-[#F5EFE6]">
                  Il tuo Carrello
                </h2>
                <p className="text-xs tracking-[0.12em] uppercase text-[#B5A998] tabular-nums mt-0.5">
                  {totalUnits} {totalUnits === 1 ? 'articolo selezionato' : 'articoli selezionati'}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Chiudi il carrello"
                className="w-10 h-10 flex items-center justify-center border border-[#C9A25D]/25 text-[#F5EFE6] hover:border-[#C9A25D] hover:text-[#C9A25D] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.length === 0 ? (
                <div className="py-16 text-center space-y-4">
                  <p className="font-serif text-2xl text-[#F5EFE6]">
                    Il carrello è attualmente vuoto.
                  </p>
                  <p className="text-sm text-[#B5A998] max-w-xs mx-auto leading-relaxed">
                    Esplora Yves Saint Laurent Libre e Montale Paris Arabians Tonka per iniziare la tua selezione.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-2 px-6 py-3 min-h-[44px] border border-[#C9A25D] text-[#C9A25D] text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#C9A25D] hover:text-[#0A0908] transition-colors cursor-pointer"
                  >
                    Torna alla boutique
                  </button>
                </div>
              ) : (
                <>
                  <div className="divide-y divide-[#C9A25D]/15">
                    {items.map((item) => {
                      const product = PRODUCTS.find((p) => p.id === item.productId);
                      if (!product) return null;
                      const variant =
                        product.variants.find((v) => v.id === item.variantId) ??
                        product.variants[0];

                      return (
                        <div
                          key={`${item.productId}-${item.variantId}`}
                          className="py-4 first:pt-0 flex gap-4"
                        >
                          <div className="w-20 h-24 bg-[#080706] border border-[#C9A25D]/20 shrink-0 overflow-hidden">
                            <ResilientImage
                              src={product.images[0].src}
                              alt={product.images[0].alt}
                              fallbackLabel={product.brand}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>

                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between gap-2">
                                <p className="text-[11px] tracking-[0.14em] uppercase text-[#C9A25D]">
                                  {product.brand}
                                </p>
                                <button
                                  type="button"
                                  onClick={() => onRemoveItem(item.productId, item.variantId)}
                                  aria-label={`Rimuovi ${product.name}`}
                                  className="text-[#B5A998] hover:text-[#F5EFE6] transition-colors p-1 cursor-pointer"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <h3 className="font-serif text-lg text-[#F5EFE6] leading-snug">
                                {product.name}
                              </h3>
                              <p className="text-xs text-[#B5A998] mt-0.5 truncate">
                                {variant.label}
                              </p>
                            </div>

                            <div className="flex items-center justify-between gap-2 mt-3">
                              <div className="inline-flex items-center border border-[#C9A25D]/25 bg-[#141210]">
                                <button
                                  type="button"
                                  onClick={() =>
                                    onUpdateQuantity(item.productId, item.variantId, -1)
                                  }
                                  aria-label="Diminuisci quantità"
                                  className="w-8 h-8 flex items-center justify-center text-[#E5DDD0] hover:text-[#C9A25D] cursor-pointer"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-8 text-center text-xs font-medium tabular-nums">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    onUpdateQuantity(item.productId, item.variantId, 1)
                                  }
                                  aria-label="Aumenta quantità"
                                  className="w-8 h-8 flex items-center justify-center text-[#E5DDD0] hover:text-[#C9A25D] cursor-pointer"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>

                              <span className="text-xs font-medium text-[#DFBC78] tabular-nums">
                                {variant.priceLabel}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border border-[#C9A25D]/25 bg-[#141210] p-4 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <Gift
                          className="w-4 h-4 text-[#C9A25D] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-sm font-medium text-[#F5EFE6]">
                            Confezione Regalo Natalizia
                          </p>
                          <p className="text-xs text-[#B5A998] mt-0.5">
                            Cofanetto Ale Studio con nastro dorato e biglietto augurale.
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        role="switch"
                        aria-checked={isGiftWrapEnabled}
                        onClick={onToggleGiftWrap}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border transition-colors ${
                          isGiftWrapEnabled
                            ? 'bg-[#C9A25D] border-[#C9A25D]'
                            : 'bg-[#0A0908] border-[#C9A25D]/40'
                        }`}
                      >
                        <span className="sr-only">Attiva confezione regalo natalizia</span>
                        <span
                          className={`inline-block h-4 w-4 transform transition-transform ${
                            isGiftWrapEnabled
                              ? 'translate-x-6 bg-[#0A0908]'
                              : 'translate-x-1 bg-[#E5DDD0]'
                          }`}
                        />
                      </button>
                    </div>

                    {isGiftWrapEnabled && (
                      <div className="pt-2">
                        <label
                          htmlFor="cart-gift-message"
                          className="block text-xs tracking-[0.12em] uppercase text-[#C9A25D] mb-1.5"
                        >
                          Dedica per il biglietto augurale (facoltativa)
                        </label>
                        <textarea
                          id="cart-gift-message"
                          rows={2}
                          value={giftMessage}
                          onChange={(e) => onChangeGiftMessage(e.target.value)}
                          placeholder="Scrivi qui un pensiero speciale..."
                          className="w-full bg-[#0A0908] border border-[#C9A25D]/30 px-3 py-2 text-xs text-[#F5EFE6] placeholder:text-[#7E7466] focus:outline-none focus:border-[#C9A25D]"
                        />
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-[#C9A25D]/20 bg-[#0A0908] space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between text-[#B5A998]">
                    <span>Subtotale stimato</span>
                    <span className="text-[#DFBC78] font-medium tabular-nums">
                      € [Calcolato a listino ufficiale]
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#B5A998]">
                    <span>Spedizione</span>
                    <span>[Tariffa da definire]</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onProceedToCheckout}
                  className="w-full py-4 min-h-[48px] bg-[#C9A25D] text-[#0A0908] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#DFBC78] transition-colors duration-200 cursor-pointer"
                >
                  PROCEDI AL CHECKOUT
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#B5A998]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A25D]" aria-hidden="true" />
                  <span>Checkout protetto · Nessun addebito in modalità segnaposto</span>
                </div>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
