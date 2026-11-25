import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectProduct: (productId: 'ysl-libre' | 'montale-arabians-tonka') => void;
}

export function Navbar({
  cartCount,
  onOpenCart,
  onSelectProduct
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavJump = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 h-16 bg-[#0A0908]/88 backdrop-blur-md border-b border-[#C9A25D]/20">
      <div className="max-w-7xl mx-auto h-full px-5 sm:px-8 flex items-center justify-between gap-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavJump('hero');
          }}
          className="font-serif text-2xl tracking-[0.06em] font-medium text-[#F5EFE6] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A25D] rounded-sm"
        >
          Ale Studio
        </a>

        <nav
          aria-label="Navigazione principale"
          className="hidden md:flex items-center gap-8 text-sm tracking-wide text-[#E5DDD0]/85"
        >
          <a
            href="#collezione"
            onClick={(e) => {
              e.preventDefault();
              handleNavJump('collezione');
            }}
            className="hover:text-[#C9A25D] transition-colors duration-200 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#C9A25D]/60"
          >
            Collezione
          </a>
          <a
            href="#ysl-libre"
            onClick={(e) => {
              e.preventDefault();
              handleNavJump('ysl-libre');
            }}
            className="hover:text-[#C9A25D] transition-colors duration-200 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#C9A25D]/60"
          >
            YSL Libre
          </a>
          <a
            href="#montale-arabians-tonka"
            onClick={(e) => {
              e.preventDefault();
              handleNavJump('montale-arabians-tonka');
            }}
            className="hover:text-[#C9A25D] transition-colors duration-200 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#C9A25D]/60"
          >
            Arabians Tonka
          </a>
          <a
            href="#regali"
            onClick={(e) => {
              e.preventDefault();
              handleNavJump('regali');
            }}
            className="hover:text-[#C9A25D] transition-colors duration-200 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#C9A25D]/60"
          >
            Regali
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Apri il carrello (${cartCount} articoli)`}
            className="inline-flex items-center gap-2.5 px-4 py-2 min-h-[40px] bg-[#C9A25D] text-[#0A0908] text-xs font-semibold tracking-[0.1em] uppercase hover:bg-[#DFBC78] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EFE6]"
          >
            <ShoppingBag className="w-4 h-4" aria-hidden="true" />
            <span>Carrello</span>
            <span className="tabular-nums">({cartCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#F5EFE6] hover:text-[#C9A25D] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0E0C0A] border-b border-[#C9A25D]/20 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-sm tracking-wide text-[#F5EFE6]">
            <button
              type="button"
              onClick={() => handleNavJump('collezione')}
              className="text-left py-2 hover:text-[#C9A25D] transition-colors cursor-pointer"
            >
              Collezione
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onSelectProduct('ysl-libre');
              }}
              className="text-left py-2 hover:text-[#C9A25D] transition-colors cursor-pointer"
            >
              Yves Saint Laurent · Libre
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onSelectProduct('montale-arabians-tonka');
              }}
              className="text-left py-2 hover:text-[#C9A25D] transition-colors cursor-pointer"
            >
              Montale Paris · Arabians Tonka
            </button>
            <button
              type="button"
              onClick={() => handleNavJump('regali')}
              className="text-left py-2 hover:text-[#C9A25D] transition-colors cursor-pointer"
            >
              Regali di Natale
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
