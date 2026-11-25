import { useState } from 'react';
import { motion } from 'motion/react';
import { EDITORIAL_MEDIA, PRODUCTS, ProductId } from '../data/catalog';
import { ResilientImage } from './ResilientImage';

interface EmotionalStorySectionProps {
  onSelectProduct: (id: ProductId) => void;
}

export function EmotionalStorySection({ onSelectProduct }: EmotionalStorySectionProps) {
  const [activeProfile, setActiveProfile] = useState<ProductId>('ysl-libre');
  const selected = PRODUCTS.find((item) => item.id === activeProfile) ?? PRODUCTS[0];

  return (
    <section className="relative bg-[#141210] text-[#F5EFE6] py-20 sm:py-28 border-t border-[#C9A25D]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#C9A25D] mb-4">
                Identità &amp; Memoria
              </p>

              <h2 className="font-serif text-[clamp(2rem,3.4vw,3.1rem)] leading-[1.1] font-medium text-[#F5EFE6] mb-6">
                CI SONO PROFUMI CHE RACCONTANO CHI SEI.
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-[#E5DDD0]/88 max-w-xl mb-10">
                Un profumo può evocare un ricordo, accompagnare un momento speciale e diventare parte della tua storia. Scegli la fragranza che parla di te.
              </p>
            </div>

            <div className="border-t border-[#C9A25D]/20 pt-7">
              <p className="text-xs tracking-[0.16em] uppercase text-[#B5A998] mb-4">
                Scegli la tua firma olfattiva
              </p>

              <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Confronta le fragranze">
                {PRODUCTS.map((product) => {
                  const isActive = product.id === activeProfile;
                  return (
                    <button
                      key={product.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveProfile(product.id)}
                      className={`px-4 py-2.5 min-h-[40px] text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'bg-[#C9A25D] text-[#0A0908]'
                          : 'border border-[#C9A25D]/30 text-[#E5DDD0] hover:border-[#C9A25D]'
                      }`}
                    >
                      {product.brand} · {product.name.replace(' Eau de Parfum', '')}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-3">
                <p className="text-xs tracking-[0.14em] uppercase text-[#C9A25D]">
                  {selected.olfactoryFamily}
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-[#E5DDD0]/85">
                  {selected.storyLead}
                </p>
                <button
                  type="button"
                  onClick={() => onSelectProduct(selected.id)}
                  className="pt-2 inline-flex items-center text-xs font-semibold tracking-[0.16em] uppercase text-[#C9A25D] hover:text-[#DFBC78] border-b border-[#C9A25D]/40 pb-1 transition-colors cursor-pointer"
                >
                  Esplora la scheda di {selected.name.replace(' Eau de Parfum', '')}
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="h-full min-h-[360px] lg:min-h-[520px] overflow-hidden border border-[#C9A25D]/20 bg-[#0A0908]">
              <ResilientImage
                src={EDITORIAL_MEDIA.emotionalAtelier}
                alt="Atelier italiano di alta profumeria con flacone in cristallo su travertino alla luce dorata"
                fallbackLabel="Ale Studio Atelier"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
