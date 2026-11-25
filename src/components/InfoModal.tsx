import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { INFO_MODALS, InfoModalKey } from '../data/catalog';

interface InfoModalProps {
  activeKey: InfoModalKey | null;
  onClose: () => void;
}

export function InfoModal({ activeKey, onClose }: InfoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (activeKey) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [activeKey, onClose]);

  if (!activeKey) return null;

  const content = INFO_MODALS[activeKey];

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={content.title}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#050404]/82 backdrop-blur-md p-4"
      >
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-xl bg-[#0F0D0B] text-[#F5EFE6] border border-[#C9A25D]/30 p-7 sm:p-9 shadow-[0_32px_90px_rgba(0,0,0,0.85)]"
        >
          <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#C9A25D]/20">
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-[#C9A25D] mb-1">
                {content.subtitle}
              </p>
              <h2 className="font-serif text-3xl font-medium text-[#F5EFE6]">
                {content.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Chiudi finestra informativa"
              className="w-10 h-10 flex items-center justify-center border border-[#C9A25D]/25 text-[#F5EFE6] hover:border-[#C9A25D] hover:text-[#C9A25D] transition-colors cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-6 space-y-4 text-sm sm:text-base leading-relaxed text-[#E5DDD0]/88">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
