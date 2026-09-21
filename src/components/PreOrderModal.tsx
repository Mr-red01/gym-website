import React, { useState } from 'react';
import { X, Check, Shield, Package, Sparkles, ShoppingBag } from 'lucide-react';
import { GAME_EDITIONS } from '../data/mafiaData';
import { CartItem } from '../types';

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const PreOrderModal: React.FC<PreOrderModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<'PS5' | 'Xbox Series X' | 'PC Steam' | 'PC Epic'>('PS5');
  const [selectedEditionId, setSelectedEditionId] = useState<string>('deluxe');
  const [addedNotice, setAddedNotice] = useState(false);

  if (!isOpen) return null;

  const platforms: ('PS5' | 'Xbox Series X' | 'PC Steam' | 'PC Epic')[] = [
    'PS5',
    'Xbox Series X',
    'PC Steam',
    'PC Epic',
  ];

  const currentEdition = GAME_EDITIONS.find((e) => e.id === selectedEditionId) || GAME_EDITIONS[1];

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: `${currentEdition.id}-${selectedPlatform}-${Date.now()}`,
      editionId: currentEdition.id,
      name: currentEdition.name,
      platform: selectedPlatform,
      price: currentEdition.price,
      quantity: 1,
      image: currentEdition.image,
    };
    onAddToCart(cartItem);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      
      <div className="relative w-full max-w-4xl bg-[#141414] border border-neutral-800 text-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800 bg-neutral-900/90">
          <div>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl tracking-[0.22em] text-white uppercase">
              PRE-ORDER MAFIA: THE GAME
            </h2>
            <p className="text-xs tracking-widest text-neutral-400 mt-0.5">
              SECURE YOUR MADE MAN DIGITAL BONUS PACK & 3-DAYS EARLY ACCESS
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-8">
          
          {/* Step 1: Select Platform */}
          <div>
            <label className="block text-xs font-bold tracking-[0.2em] text-neutral-300 uppercase mb-3">
              1. CHOOSE YOUR PLATFORM
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {platforms.map((plat) => {
                const isSelected = selectedPlatform === plat;
                return (
                  <button
                    key={plat}
                    onClick={() => setSelectedPlatform(plat)}
                    className={`py-3 px-4 border text-xs font-bold tracking-wider uppercase transition-all cursor-pointer text-center ${
                      isSelected
                        ? 'border-white bg-white text-black font-extrabold'
                        : 'border-neutral-800 bg-neutral-900/80 text-neutral-300 hover:border-neutral-600'
                    }`}
                  >
                    {plat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Game Edition */}
          <div>
            <label className="block text-xs font-bold tracking-[0.2em] text-neutral-300 uppercase mb-3">
              2. SELECT GAME EDITION
            </label>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {GAME_EDITIONS.map((edition) => {
                const isSelected = selectedEditionId === edition.id;
                return (
                  <div
                    key={edition.id}
                    onClick={() => setSelectedEditionId(edition.id)}
                    className={`relative p-5 border cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-amber-500 bg-amber-950/20 shadow-lg'
                        : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700'
                    }`}
                  >
                    {edition.badge && (
                      <span className="absolute -top-3 right-4 px-2.5 py-0.5 bg-amber-500 text-black font-extrabold text-[9px] tracking-widest uppercase">
                        {edition.badge}
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm tracking-wider uppercase text-white">
                          {edition.name}
                        </span>
                        {isSelected && <Check size={18} className="text-amber-500" />}
                      </div>

                      <div className="text-xl font-extrabold text-amber-400 tracking-wider mb-4">
                        ${edition.price.toFixed(2)}
                      </div>

                      <ul className="space-y-2 text-xs text-neutral-300">
                        {edition.features.map((ft, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-amber-500 font-bold">•</span>
                            <span className="leading-tight">{ft}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-800/60 text-right">
                      <span className={`text-[11px] font-bold tracking-widest uppercase ${
                        isSelected ? 'text-amber-400' : 'text-neutral-500'
                      }`}>
                        {isSelected ? 'SELECTED' : 'CLICK TO SELECT'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs tracking-wider text-neutral-300">
            <Package size={18} className="text-amber-500" />
            <div>
              <span className="font-bold text-white uppercase">{currentEdition.name}</span>
              <span className="text-neutral-500 ml-2">({selectedPlatform})</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 w-full sm:w-auto">
            {addedNotice && (
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase animate-fadeIn">
                ADDED TO CART!
              </span>
            )}
            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-black hover:bg-neutral-200 font-extrabold text-xs tracking-[0.22em] uppercase transition-colors cursor-pointer flex items-center justify-center space-x-2"
            >
              <ShoppingBag size={15} />
              <span>ADD TO CART — ${currentEdition.price.toFixed(2)}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
