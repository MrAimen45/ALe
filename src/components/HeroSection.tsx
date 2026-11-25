import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { EDITORIAL_MEDIA } from '../data/catalog';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onDiscoverClick: () => void;
}

export function HeroSection({ onDiscoverClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0908] pt-16"
    >
      <div className="absolute inset-0 pointer-events-none">
        <ResilientImage
          src={EDITORIAL_MEDIA.heroBackdrop}
          alt="Atmosfera di lusso con riflessi di cristallo e luce dorata ambrata per Ale Studio"
          loading="eager"
          fallbackLabel="Ale Studio"
          className="w-full h-full object-cover object-center opacity-75 scale-[1.02]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/60 to-[#0A0908]/80"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_65%_38%,rgba(201,162,93,0.18),transparent_58%)]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 py-20 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm tracking-[0.22em] uppercase text-[#C9A25D] mb-6"
        >
          Il lusso di sentirsi unici.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2.25rem,4.6vw,4.35rem)] leading-[1.08] tracking-[0.015em] font-medium text-[#F5EFE6] max-w-4xl mb-7"
        >
          NON È SOLO UN PROFUMO. È UN&apos;EMOZIONE CHE LASCIA IL SEGNO.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg leading-relaxed text-[#E5DDD0]/90 max-w-2xl mb-11"
        >
          Scopri fragranze uniche, create per esprimere la tua personalità e trasformare ogni momento in un ricordo indimenticabile.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <button
            type="button"
            onClick={onDiscoverClick}
            className="px-9 py-4 min-h-[48px] bg-[#C9A25D] text-[#0A0908] text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase hover:bg-[#DFBC78] transition-all duration-200 shadow-[0_14px_40px_rgba(201,162,93,0.22)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EFE6]"
          >
            SCOPRI LE FRAGRANZE
          </button>

          <div className="flex items-center gap-3 text-xs tracking-[0.14em] uppercase text-[#C9A25D]/80">
            <span>Yves Saint Laurent</span>
            <span aria-hidden="true">·</span>
            <span>Montale Paris</span>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={onDiscoverClick}
        aria-label="Scorri verso le fragranze"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 w-11 h-11 flex items-center justify-center text-[#C9A25D]/80 hover:text-[#F5EFE6] transition-colors cursor-pointer"
      >
        <ArrowDown className="w-4 h-4" aria-hidden="true" />
      </button>
    </section>
  );
}
