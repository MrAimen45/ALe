import { useEffect, useState } from 'react';
import { FragranceProduct, InfoModalKey, PRODUCTS, ProductId } from './data/catalog';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductShowcaseSection } from './components/ProductShowcaseSection';
import { EmotionalStorySection } from './components/EmotionalStorySection';
import { GiftSection } from './components/GiftSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { InfoModal } from './components/InfoModal';

const CART_STORAGE_KEY = 'ale-studio-cart-v1';
const GIFT_STORAGE_KEY = 'ale-studio-gift-v1';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? (JSON.parse(saved) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  const [isGiftWrapEnabled, setIsGiftWrapEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(GIFT_STORAGE_KEY);
      return saved ? (JSON.parse(saved).enabled as boolean) : false;
    } catch {
      return false;
    }
  });

  const [giftMessage, setGiftMessage] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(GIFT_STORAGE_KEY);
      return saved ? (JSON.parse(saved).message as string) : '';
    } catch {
      return '';
    }
  });

  const [activeProductId, setActiveProductId] = useState<ProductId | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeInfoKey, setActiveInfoKey] = useState<InfoModalKey | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore storage quota errors
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem(
        GIFT_STORAGE_KEY,
        JSON.stringify({ enabled: isGiftWrapEnabled, message: giftMessage })
      );
    } catch {
      // Ignore storage quota errors
    }
  }, [isGiftWrapEnabled, giftMessage]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const activeProduct =
    PRODUCTS.find((p) => p.id === activeProductId) ?? null;

  const scrollToCollection = () => {
    const el = document.getElementById('collezione');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (
    product: FragranceProduct,
    variantId: string,
    quantity: number
  ) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.productId === product.id && item.variantId === variantId
      );
      if (existing) {
        return prev.map((item) =>
          item.productId === product.id && item.variantId === variantId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { productId: product.id, variantId, quantity }];
    });
    setActiveProductId(null);
    setIsCartOpen(true);
  };

  const handleQuickAdd = (product: FragranceProduct) => {
    const defaultVariant = product.variants[0]?.id ?? '';
    handleAddToCart(product, defaultVariant, 1);
  };

  const handleUpdateQuantity = (
    productId: ProductId,
    variantId: string,
    delta: number
  ) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.productId === productId && item.variantId === variantId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (productId: ProductId, variantId: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && item.variantId === variantId)
      )
    );
  };

  const handleEnableGiftWrapAndOpenCart = () => {
    setIsGiftWrapEnabled(true);
    setIsCartOpen(true);
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-[#0A0908] text-[#F5EFE6] flex flex-col">
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectProduct={(id) => setActiveProductId(id)}
      />

      <main className="flex-1">
        <HeroSection onDiscoverClick={scrollToCollection} />

        <ProductShowcaseSection
          products={PRODUCTS}
          onSelectProduct={(id) => setActiveProductId(id)}
          onQuickAdd={handleQuickAdd}
        />

        <EmotionalStorySection
          onSelectProduct={(id) => setActiveProductId(id)}
        />

        <GiftSection
          onDiscoverClick={scrollToCollection}
          onEnableGiftWrapAndOpenCart={handleEnableGiftWrapAndOpenCart}
        />
      </main>

      <Footer onOpenInfoModal={(key) => setActiveInfoKey(key)} />

      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProductId(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        isGiftWrapEnabled={isGiftWrapEnabled}
        giftMessage={giftMessage}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onToggleGiftWrap={() => setIsGiftWrapEnabled((prev) => !prev)}
        onChangeGiftMessage={setGiftMessage}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        items={cartItems}
        isGiftWrapEnabled={isGiftWrapEnabled}
        giftMessage={giftMessage}
        onClose={() => setIsCheckoutOpen(false)}
        onOrderComplete={handleOrderComplete}
      />

      <InfoModal
        activeKey={activeInfoKey}
        onClose={() => setActiveInfoKey(null)}
      />
    </div>
  );
}
