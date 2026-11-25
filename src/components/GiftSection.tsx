import { motion } from 'motion/react';
import { Gift } from 'lucide-react';
import { EDITORIAL_MEDIA } from '../data/catalog';
import { ResilientImage } from './ResilientImage';

interface GiftSectionProps {
  onDiscoverClick: () => void;
  onEnableGiftWrapAndOpenCart: () => void;
}

export function GiftSection({
  onDiscoverClick,
  onEnableGiftWrapAndOpenCart
}: GiftSectionProps) {
  return (
    <section
      id="regali"
      className="relative overflow-hidden bg-[#F3ECE1] text-[#141210] py-20 sm:py-28 border-t border-[#C9A25D]/30"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative p-3 sm:p-4 bg-[#141210] shadow-[0_28px_70px_rgba(20,18,16,0.18)]">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#0A0908]">
                <ResilientImage
                  src={EDITORIAL_MEDIA.christmasGifting}
                  alt="Confezioni regalo natalizie Ale Studio in nero e champagne con nastri dorati e luci calde"
                  fallbackLabel="Regali di Natale Ale Studio"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <div className="flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-[#7C5A22] font-medium mb-4">
              <Gift className="w-4 h-4" aria-hidden="true" />
              <span>Edizione Feste &amp; Natale</span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,3.4vw,3.15rem)] leading-[1.08] font-medium text-[#141210] mb-6">
              REGALA UN&apos;EMOZIONE. LASCIA UN RICORDO.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#2F2A24] mb-8">
              Per sorprendere una persona speciale o concederti qualcosa di unico. Perché le emozioni più belle meritano di essere regalate.
            </p>

            <div className="w-full border-t border-[#141210]/15 pt-5 mb-8 text-sm text-[#3F382F] space-y-1.5">
              <p className="font-medium text-[#141210]">
                Cofanetto Regalo Natalizio con nastro dorato
              </p>
              <p>
                Attivabile direttamente nel carrello con biglietto augurale personalizzato.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onDiscoverClick}
                className="px-8 py-4 min-h-[48px] bg-[#141210] text-[#F3ECE1] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#2A241D] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5A22]"
              >
                SCOPRI LE FRAGRANZE
              </button>

              <button
                type="button"
                onClick={onEnableGiftWrapAndOpenCart}
                className="px-5 py-4 min-h-[48px] border border-[#141210]/30 text-[#141210] text-xs font-semibold tracking-[0.14em] uppercase hover:border-[#141210] hover:bg-[#141210]/5 transition-colors duration-200 cursor-pointer"
              >
                Prepara confezione regalo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
