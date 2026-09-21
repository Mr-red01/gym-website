import React, { useState } from 'react';
import { X, Shield, Lock, User, CheckCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      
      <div className="relative w-full max-w-md bg-[#121212] border border-neutral-800 text-white shadow-2xl overflow-hidden p-6">
        
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
          <div className="flex items-center space-x-2">
            <Shield size={18} className="text-amber-500" />
            <h2 className="font-heading font-extrabold text-sm tracking-[0.2em] uppercase text-white">
              SYNDICATE MEMBER ACCESS
            </h2>
          </div>

          <button onClick={onClose} className="p-1 text-neutral-400 hover:text-white cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {loggedIn ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle size={48} className="text-amber-500 mx-auto" />
            <h3 className="text-sm font-bold tracking-widest uppercase">ACCESS GRANTED</h3>
            <p className="text-xs text-neutral-400">Welcome back, Capo. Your pre-order perks have been synchronized.</p>
            <button
              onClick={() => {
                setLoggedIn(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-white text-black font-extrabold text-xs tracking-widest uppercase cursor-pointer"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-2">
                MADE MAN EMAIL ADDRESS
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-3 text-neutral-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="capo@salieri-syndicate.com"
                  className="w-full bg-neutral-900 border border-neutral-800 py-2.5 pl-10 pr-4 text-xs font-semibold text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-2">
                SECURITY PASSPHRASE
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-3 text-neutral-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-neutral-900 border border-neutral-800 py-2.5 pl-10 pr-4 text-xs font-semibold text-white focus:outline-none focus:border-neutral-600"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs tracking-[0.2em] uppercase transition-colors cursor-pointer mt-6"
            >
              SIGN IN TO SYNDICATE
            </button>
          </form>
        )}

      </div>

    </div>
  );
};
