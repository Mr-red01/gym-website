import React from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenSearch: () => void;
  onOpenLogin: () => void;
  onOpenCart: () => void;
  cartCount: number;
  wishlistCount: number;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenLogin,
  onOpenCart,
  cartCount,
  wishlistCount,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks: { label: string; tab: ActiveTab }[] = [
    { label: 'FITNESS', tab: 'fitness' },
    { label: 'COACHES', tab: 'coaches' },
    { label: 'LOCATION', tab: 'location' },
  ];

  const rightNavLinks: { label: string; tab: ActiveTab }[] = [
    { label: 'INSTAGRAM', tab: 'instagram' },
    { label: 'REVIEWS', tab: 'reviews' },
    { label: 'CONTACT US', tab: 'contact_us' },
  ];

  return (
    <>
      {/* Fixed Transparent Header */}
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 pt-5 pb-4 px-6 md:px-12 lg:px-16 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#e7e5e0]/85 backdrop-blur-md border-b border-black/5 shadow-sm'
            : 'bg-[#e7e5e0]/70 backdrop-blur-sm border-b border-black/5'
        }`}
      >
        <div className="max-w-[1700px] mx-auto grid grid-cols-2 md:grid-cols-3 items-center">
          
          {/* Left Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[11px] lg:text-[12px] font-semibold tracking-[0.25em] text-[#111111]">
            {leftNavLinks.map((link) => {
              const isActive = activeTab === link.tab;
              return (
                <button
                  key={link.tab}
                  onClick={() => setActiveTab(link.tab)}
                  className={`group relative py-1 transition-all duration-200 uppercase cursor-pointer ${
                    isActive ? 'text-black font-bold' : 'text-neutral-800 opacity-90 hover:opacity-100 hover:text-black'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-black transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle (Left on mobile) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-black hover:opacity-70 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Center Logo: MAFIA THE GAIN */}
          <div className="flex flex-col items-center justify-center text-center cursor-pointer select-none" onClick={() => setActiveTab('home')}>
            <h1 className="font-logo text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-[0.28em] text-black leading-none uppercase pl-[0.28em]">
              MAFIA
            </h1>
            <span className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-medium tracking-[0.55em] text-neutral-900 uppercase mt-1 pl-[0.55em]">
              THE GAIN
            </span>
          </div>

          {/* Right Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center justify-end space-x-6 lg:space-x-8 text-[11px] lg:text-[12px] font-semibold tracking-[0.25em] text-[#111111]">
            {rightNavLinks.map((link) => {
              const isActive = activeTab === link.tab;
              return (
                <button
                  key={link.tab}
                  onClick={() => setActiveTab(link.tab)}
                  className={`group relative py-1 transition-all duration-200 uppercase cursor-pointer ${
                    isActive ? 'text-black font-bold' : 'text-neutral-800 opacity-90 hover:opacity-100 hover:text-black'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-black transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#e7e5e0] border-b border-neutral-300 shadow-lg px-6 py-6 flex flex-col space-y-4 animate-fadeIn z-50">
            <div className="flex flex-col space-y-3 font-semibold text-xs tracking-[0.25em] text-black">
              {[...leftNavLinks, ...rightNavLinks].map((link) => (
                <button
                  key={link.tab}
                  onClick={() => {
                    setActiveTab(link.tab);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-1.5 border-b border-neutral-200/60 uppercase ${
                    activeTab === link.tab ? 'font-bold text-black pl-2 border-black' : 'text-neutral-700'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Document Flow Placeholder - maintains exact page positioning without layout shift */}
      <div className="w-full pt-5 pb-4 px-6 md:px-12 lg:px-16 invisible pointer-events-none select-none" aria-hidden="true">
        <div className="max-w-[1700px] mx-auto grid grid-cols-2 md:grid-cols-3 items-center">
          <div className="hidden md:flex text-[11px] lg:text-[12px] py-1">FITNESS</div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-logo text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-none">MAFIA</h1>
            <span className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] mt-1">THE GAIN</span>
          </div>
          <div className="hidden md:flex text-[11px] lg:text-[12px] py-1">CONTACT US</div>
        </div>
      </div>
    </>
  );
};
