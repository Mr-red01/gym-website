import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fadeIn">
      
      {/* Drawer Panel */}
      <div className="w-full max-w-md bg-[#121212] border-l border-neutral-800 text-white h-full flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800 bg-neutral-900/90">
          <div className="flex items-center space-x-3">
            <ShoppingBag size={18} className="text-amber-500" />
            <h2 className="font-heading font-extrabold text-sm tracking-[0.2em] uppercase text-white">
              YOUR CART ({items.reduce((acc, item) => acc + item.quantity, 0)})
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-neutral-500 space-y-4">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="text-xs tracking-widest uppercase font-semibold">YOUR CART IS CURRENTLY EMPTY</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-neutral-900/70 border border-neutral-800 flex items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-xs tracking-wider uppercase text-white">{item.name}</h3>
                  <p className="text-[11px] text-neutral-400 uppercase tracking-widest mt-0.5">
                    PLATFORM: {item.platform}
                  </p>
                  <p className="text-xs font-bold text-amber-400 mt-2">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex items-center border border-neutral-700 bg-neutral-800 text-xs">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="px-2 py-1 text-neutral-300 hover:text-white cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-2 py-1 text-white font-bold">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="px-2 py-1 text-neutral-300 hover:text-white cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-neutral-500 hover:text-rose-400 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-neutral-800 bg-neutral-950 space-y-4">
            <div className="flex items-center justify-between text-xs tracking-widest uppercase">
              <span className="text-neutral-400">ESTIMATED SUBTOTAL</span>
              <span className="font-extrabold text-white text-base">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex items-center space-x-2 text-[10px] text-neutral-400 tracking-wider">
              <ShieldCheck size={14} className="text-amber-500" />
              <span>GUARANTEED 2024 DIGITAL PRE-ORDER ACCESS KEY</span>
            </div>

            <button
              onClick={() => alert(`Pre-order simulation confirmed! Thank you for backing Mafia: The Game ($${subtotal.toFixed(2)})`)}
              className="w-full py-4 bg-white hover:bg-neutral-200 text-black font-extrabold text-xs tracking-[0.22em] uppercase transition-colors cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
