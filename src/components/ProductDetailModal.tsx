import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShieldCheck, Truck, RotateCcw, Check } from 'lucide-react';
import { FragranceProduct } from '../data/catalog';
import { ResilientImage } from './ResilientImage';

interface ProductDetailModalProps {
  product: FragranceProduct | null;
  onClose: () => void;
  onAddToCart: (product: FragranceProduct, variantId: string, quantity: number) => void;
}

export function ProductDetailModal({
  product,
  onClose,
  onAddToCart
}: ProductDetailModalProps) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [selectedVariantId, setSelectedVariantId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImageIdx(0);
      setSelectedVariantId(product.variants[0]?.id ?? '');
      setQuantity(1);
      setAddedFeedback(false);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [product, onClose]);

  if (!product) {
    return null;
  }

  const activeVariant =
    product.variants.find((v) => v.id === selectedVariantId) ?? product.variants[0];
  const activeImage = product.images[selectedImageIdx] ?? product.images[0];

  const handleAdd = () => {
    onAddToCart(product, activeVariant.id, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1800);
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${product.brand} ${product.name}`}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#050404]/85 backdrop-blur-md p-0 sm:p-6 overflow-y-auto"
      >
        <div
          className="fixed inset-0"
          onClick={onClose}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-6xl bg-[#0F0D0B] text-[#F5EFE6] border border-[#C9A25D]/30 shadow-[0_32px_90px_rgba(0,0,0,0.85)] max-h-full sm:max-h-[92vh] overflow-y-auto"
        >
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#0F0D0B]/95 backdrop-blur-md border-b border-[#C9A25D]/20">
            <div className="flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#C9A25D]">
              <span>Ale Studio</span>
              <span aria-hidden="true">·</span>
              <span>{product.brand}</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Chiudi scheda prodotto"
              className="w-10 h-10 flex items-center justify-center border border-[#C9A25D]/30 text-[#F5EFE6] hover:border-[#C9A25D] hover:text-[#C9A25D] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10">
            <div className="lg:col-span-6 space-y-4">
              <div className="aspect-[3/4] w-full bg-[#080706] border border-[#C9A25D]/20 overflow-hidden">
                <ResilientImage
                  src={activeImage.src}
                  alt={activeImage.alt}
                  loading="eager"
                  fallbackLabel={product.name}
                  className="w-full h-full object-contain bg-[#080706]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {product.images.map((img, index) => {
                  const isSelected = index === selectedImageIdx;
                  return (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setSelectedImageIdx(index)}
                      aria-label={`Mostra immagine ${index + 1}: ${img.caption}`}
                      className={`aspect-[3/4] overflow-hidden border transition-all cursor-pointer bg-[#080706] ${
                        isSelected
                          ? 'border-[#C9A25D] ring-1 ring-[#C9A25D]'
                          : 'border-[#C9A25D]/20 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <ResilientImage
                        src={img.src}
                        alt={img.alt}
                        fallbackLabel={product.brand}
                        className="w-full h-full object-cover object-center"
                      />
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-[#B5A998] tracking-wide">
                {activeImage.caption}
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between space-y-7">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#C9A25D] mb-2">
                  {product.brand} · {product.olfactoryFamily}
                </p>

                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#F5EFE6] mb-3">
                  {product.name}
                </h2>

                <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-[#C9A25D]/20">
                  <p className="text-xl sm:text-2xl font-medium text-[#DFBC78] tabular-nums">
                    {activeVariant.priceLabel}
                  </p>
                  <p className="text-xs tracking-[0.12em] uppercase text-[#E5DDD0]/80">
                    {activeVariant.availabilityLabel}
                  </p>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-[#E5DDD0]/90 mt-6 mb-4">
                  {product.description}
                </p>
                <p className="text-sm leading-relaxed text-[#B5A998] mb-6">
                  {product.storyLead}
                </p>

                <ul className="space-y-2 text-sm text-[#E5DDD0]/85 pb-6 border-b border-[#C9A25D]/20">
                  {product.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-[#C9A25D] mt-0.5" aria-hidden="true">
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs tracking-[0.16em] uppercase text-[#B5A998] mb-3">
                    Selezione formato (da confermare a listino)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.variants.map((variant) => {
                      const isSelected = variant.id === activeVariant.id;
                      return (
                        <button
                          key={variant.id}
                          type="button"
                          onClick={() => setSelectedVariantId(variant.id)}
                          className={`p-3.5 text-left border transition-colors cursor-pointer ${
                            isSelected
                              ? 'border-[#C9A25D] bg-[#C9A25D]/12 text-[#F5EFE6]'
                              : 'border-[#C9A25D]/25 text-[#E5DDD0]/80 hover:border-[#C9A25D]/60'
                          }`}
                        >
                          <p className="text-xs font-semibold tracking-wide text-[#F5EFE6]">
                            {variant.label}
                          </p>
                          <p className="text-xs text-[#C9A25D] mt-1 tabular-nums">
                            {variant.priceLabel}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <div className="inline-flex items-center justify-between border border-[#C9A25D]/30 bg-[#141210] min-h-[48px] px-2">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Riduci quantità"
                      className="w-10 h-10 flex items-center justify-center text-[#E5DDD0] hover:text-[#C9A25D] cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center text-sm font-medium tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      aria-label="Aumenta quantità"
                      className="w-10 h-10 flex items-center justify-center text-[#E5DDD0] hover:text-[#C9A25D] cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAdd}
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[48px] bg-[#C9A25D] text-[#0A0908] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#DFBC78] transition-colors duration-200 cursor-pointer"
                  >
                    {addedFeedback ? (
                      <>
                        <Check className="w-4 h-4" aria-hidden="true" />
                        <span>AGGIUNTO AL CARRELLO</span>
                      </>
                    ) : (
                      <span>AGGIUNGI AL CARRELLO</span>
                    )}
                  </button>
                </div>

                <div className="pt-4 border-t border-[#C9A25D]/20 space-y-3 text-xs leading-relaxed text-[#B5A998]">
                  <div className="flex items-start gap-2.5">
                    <Truck className="w-4 h-4 text-[#C9A25D] shrink-0 mt-0.5" aria-hidden="true" />
                    <p>
                      <strong className="text-[#E5DDD0] font-medium">Spedizione:</strong>{' '}
                      {product.shippingPlaceholder}
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <RotateCcw className="w-4 h-4 text-[#C9A25D] shrink-0 mt-0.5" aria-hidden="true" />
                    <p>
                      <strong className="text-[#E5DDD0] font-medium">Resi:</strong>{' '}
                      {product.returnsPlaceholder}
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#C9A25D] shrink-0 mt-0.5" aria-hidden="true" />
                    <p>
                      <strong className="text-[#E5DDD0] font-medium">Checkout sicuro:</strong>{' '}
                      {product.checkoutTrustNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
