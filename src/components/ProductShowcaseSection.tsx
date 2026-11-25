import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FragranceProduct, ProductId } from '../data/catalog';
import { ResilientImage } from './ResilientImage';

interface ProductShowcaseSectionProps {
  products: FragranceProduct[];
  onSelectProduct: (id: ProductId) => void;
  onQuickAdd: (product: FragranceProduct) => void;
}

export function ProductShowcaseSection({
  products,
  onSelectProduct,
  onQuickAdd
}: ProductShowcaseSectionProps) {
  const ysl = products.find((p) => p.id === 'ysl-libre');
  const montale = products.find((p) => p.id === 'montale-arabians-tonka');

  return (
    <div id="collezione">
      {ysl && (
        <section
          id="ysl-libre"
          className="relative overflow-hidden bg-[#F3ECE1] text-[#141210] py-20 sm:py-28 border-t border-[#C9A25D]/25"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(201,162,93,0.22),transparent_55%)] pointer-events-none"
          />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 order-1"
              >
                <div className="relative bg-[#141210] p-3 sm:p-4 shadow-[0_28px_70px_rgba(20,18,16,0.18)]">
                  <div className="aspect-[3/4] w-full overflow-hidden bg-[#0E0C0A]">
                    <ResilientImage
                      src={ysl.images[0].src}
                      alt={ysl.images[0].alt}
                      loading="eager"
                      fallbackLabel="YSL Libre"
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 order-2 flex flex-col items-start"
              >
                <div className="flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-[#7C5A22] font-medium mb-4">
                  <span>{ysl.brand}</span>
                  <span aria-hidden="true">·</span>
                  <span>{ysl.concentration}</span>
                </div>

                <h2 className="font-serif text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.08] font-medium text-[#141210] mb-6">
                  {ysl.headline}
                </h2>

                <p className="text-base sm:text-lg leading-relaxed text-[#2F2A24] max-w-xl mb-6">
                  {ysl.description}
                </p>

                <p className="font-serif italic text-xl sm:text-2xl text-[#7C5A22] mb-8">
                  &ldquo;{ysl.emotionalMessage}&rdquo;
                </p>

                <div className="w-full border-t border-[#141210]/15 pt-6 mb-9 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs tracking-[0.14em] uppercase text-[#5E5448] mb-1">
                      Listino &amp; Formato
                    </p>
                    <p className="font-medium text-[#141210] tabular-nums">
                      {ysl.variants[0].priceLabel} · {ysl.variants[0].label}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.14em] uppercase text-[#5E5448] mb-1">
                      Disponibilità
                    </p>
                    <p className="font-medium text-[#141210]">
                      {ysl.variants[0].availabilityLabel}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(ysl.id)}
                    className="inline-flex items-center gap-3 px-8 py-4 min-h-[48px] bg-[#141210] text-[#F3ECE1] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#2A241D] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5A22]"
                  >
                    <span>{ysl.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onQuickAdd(ysl)}
                    className="inline-flex items-center px-6 py-4 min-h-[48px] border border-[#141210]/30 text-[#141210] text-xs font-semibold tracking-[0.14em] uppercase hover:border-[#141210] hover:bg-[#141210]/5 transition-colors duration-200 cursor-pointer"
                  >
                    Aggiungi al carrello
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {montale && (
        <section
          id="montale-arabians-tonka"
          className="relative overflow-hidden bg-[#0A0908] text-[#F5EFE6] py-20 sm:py-28 border-t border-[#C9A25D]/20"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(158,99,27,0.22),transparent_58%)] pointer-events-none"
          />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start"
              >
                <div className="flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-[#C9A25D] font-medium mb-4">
                  <span>{montale.brand}</span>
                  <span aria-hidden="true">·</span>
                  <span>{montale.concentration}</span>
                </div>

                <h2 className="font-serif text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.08] font-medium text-[#F5EFE6] mb-6">
                  {montale.headline}
                </h2>

                <p className="text-base sm:text-lg leading-relaxed text-[#E5DDD0]/88 max-w-xl mb-6">
                  {montale.description}
                </p>

                <p className="font-serif italic text-xl sm:text-2xl text-[#DFBC78] mb-8">
                  &ldquo;{montale.emotionalMessage}&rdquo;
                </p>

                <div className="w-full border-t border-[#C9A25D]/20 pt-6 mb-9 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs tracking-[0.14em] uppercase text-[#B5A998] mb-1">
                      Listino &amp; Formato
                    </p>
                    <p className="font-medium text-[#F5EFE6] tabular-nums">
                      {montale.variants[0].priceLabel} · {montale.variants[0].label}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.14em] uppercase text-[#B5A998] mb-1">
                      Disponibilità
                    </p>
                    <p className="font-medium text-[#F5EFE6]">
                      {montale.variants[0].availabilityLabel}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(montale.id)}
                    className="inline-flex items-center gap-3 px-8 py-4 min-h-[48px] bg-[#C9A25D] text-[#0A0908] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#DFBC78] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EFE6]"
                  >
                    <span>{montale.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onQuickAdd(montale)}
                    className="inline-flex items-center px-6 py-4 min-h-[48px] border border-[#C9A25D]/40 text-[#F5EFE6] text-xs font-semibold tracking-[0.14em] uppercase hover:border-[#C9A25D] hover:bg-[#C9A25D]/10 transition-colors duration-200 cursor-pointer"
                  >
                    Aggiungi al carrello
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 order-1 lg:order-2"
              >
                <div className="relative bg-[#141210] p-3 sm:p-4 border border-[#C9A25D]/25 shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
                  <div className="aspect-[3/4] w-full overflow-hidden bg-[#080706]">
                    <ResilientImage
                      src={montale.images[0].src}
                      alt={montale.images[0].alt}
                      loading="eager"
                      fallbackLabel="Montale Arabians Tonka"
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
