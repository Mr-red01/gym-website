/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroContent } from './components/HeroContent';
import { GymProgramsSection } from './components/GymProgramsSection';
import { GymAboutSection } from './components/GymAboutSection';
import { GymTestimonialsSection } from './components/GymTestimonialsSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CoachesPage } from './components/CoachesPage';
import { TrailerModal } from './components/TrailerModal';
import { PreOrderModal } from './components/PreOrderModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { LoginModal } from './components/LoginModal';
import { ContentDrawer } from './components/ContentDrawer';
import { ActiveTab, CartItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);

  const handleTabSelect = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === 'coaches') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'fitness') {
      document.getElementById('fitness')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'location') {
      document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'reviews') {
      document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'instagram') {
      window.open('https://instagram.com', '_blank');
    } else if (tab === 'contact_us') {
      window.open('https://wa.me/919743439097?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20services.', '_blank');
    }
  };

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.editionId === newItem.editionId && i.platform === newItem.platform
      );
      if (existing) {
        return prev.map((i) =>
          i.id === existing.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, newItem];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleToggleWishlist = () => {
    setIsWishlisted((prev) => {
      const next = !prev;
      setWishlistCount(next ? 1 : 0);
      return next;
    });
  };

  if (activeTab === 'coaches') {
    return (
      <>
        <CoachesPage
          onBack={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onBookSession={() => setIsPreOrderOpen(true)}
        />
        <WhatsAppButton
          phoneNumber="919743439097"
          message="Hi, I’m interested in booking a session with a coach."
        />
        <PreOrderModal
          isOpen={isPreOrderOpen}
          onClose={() => setIsPreOrderOpen(false)}
          onAddToCart={handleAddToCart}
        />
      </>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-paper-texture paper-grain flex flex-col justify-between overflow-x-hidden font-heading text-[#111111] antialiased select-none">
      
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabSelect}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        wishlistCount={wishlistCount}
        isWishlisted={isWishlisted}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Main Hero Content matching reference design */}
      <HeroContent
        onPreOrderClick={() => setIsPreOrderOpen(true)}
        onWatchTrailerClick={() => setIsTrailerOpen(true)}
      />

      {/* Section 1: Floating Stats & Gym Programs Grid */}
      <GymProgramsSection onExploreClick={() => setIsPreOrderOpen(true)} />

      {/* Section 2: About Us ("MORE THAN JUST A GYM") */}
      <GymAboutSection />

      {/* Section 3: Testimonials ("WHAT OUR MEMBERS SAY") */}
      <GymTestimonialsSection />

      {/* Resend Style Footer Section */}
      <Footer onGetStartedClick={() => setIsPreOrderOpen(true)} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton
        phoneNumber="919743439097"
        message="Hi, I’m interested in your services."
      />

      {/* Modals & Slide-over Drawers */}
      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
        onPreOrderClick={() => setIsPreOrderOpen(true)}
      />

      <PreOrderModal
        isOpen={isPreOrderOpen}
        onClose={() => setIsPreOrderOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateCartQuantity}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(tab) => setActiveTab(tab)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      {/* Content Drawer for navigation tabs (STORY, GAMEPLAY, GANGS, MEDIA) */}
      <ContentDrawer
        activeTab={activeTab}
        onClose={() => setActiveTab('home')}
        onOpenPreOrder={() => setIsPreOrderOpen(true)}
      />

    </div>
  );
}
