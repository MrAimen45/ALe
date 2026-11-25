import { InfoModalKey } from '../data/catalog';

interface FooterProps {
  onOpenInfoModal: (key: InfoModalKey) => void;
}

export function Footer({ onOpenInfoModal }: FooterProps) {
  const links: { key: InfoModalKey; label: string }[] = [
    { key: 'contatti', label: 'Contatti' },
    { key: 'chi-siamo', label: 'Chi siamo' },
    { key: 'spedizioni', label: 'Spedizioni e resi' },
    { key: 'privacy', label: 'Privacy Policy' },
    { key: 'termini', label: 'Termini e condizioni' },
    { key: 'instagram', label: 'Instagram' }
  ];

  return (
    <footer className="bg-[#070605] text-[#E5DDD0] border-t border-[#C9A25D]/25">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-12 border-b border-[#C9A25D]/15">
          <div className="max-w-md space-y-3">
            <p className="font-serif text-3xl tracking-[0.06em] text-[#F5EFE6]">
              Ale Studio
            </p>
            <p className="text-sm leading-relaxed text-[#B5A998]">
              Boutique italiana di alta profumeria. Fragranze scelte per trasformare ogni momento in un ricordo indelebile.
            </p>
          </div>

          <nav
            aria-label="Informazioni legali e contatti"
            className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-3 text-sm"
          >
            {links.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => onOpenInfoModal(item.key)}
                className="text-left text-[#E5DDD0]/85 hover:text-[#C9A25D] transition-colors py-1 cursor-pointer whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#8D8375]">
          <p>&copy; {new Date().getFullYear()} Ale Studio. Tutti i diritti riservati.</p>
          <p className="tracking-wide text-[#C9A25D]/80">
            Il lusso di sentirsi unici.
          </p>
        </div>
      </div>
    </footer>
  );
}
