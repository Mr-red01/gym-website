import React, { useState } from 'react';
import { X, Volume2, VolumeX, Maximize, Play, Pause, Film, ShieldCheck } from 'lucide-react';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPreOrderClick: () => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ isOpen, onClose, onPreOrderClick }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#111111] border border-neutral-800 text-white shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/90">
          <div className="flex items-center space-x-3">
            <Film className="text-amber-500" size={18} />
            <span className="font-heading font-bold text-xs md:text-sm tracking-[0.2em] text-neutral-200 uppercase">
              MAFIA: THE GAME — OFFICIAL WORLD PREMIERE TRAILER
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close trailer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
          {/* High Quality Game Footage Placeholder / Embedded Video */}
          <iframe
            className="w-full h-full pointer-events-auto"
            src={`https://www.youtube-nocookie.com/embed/s2-12m1zGq8?autoplay=1&mute=${isMuted ? 1 : 0}&controls=1&modestbranding=1&rel=0`}
            title="Mafia The Game Official Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer Info & CTA */}
        <div className="p-6 bg-neutral-950 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-neutral-800">
          <div className="flex items-center space-x-3 text-xs tracking-widest text-neutral-400">
            <ShieldCheck className="text-amber-500" size={16} />
            <span>COMING 2024 — PLAYSTATION 5, XBOX SERIES X|S, PC STEAM</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                onClose();
                onPreOrderClick();
              }}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs tracking-[0.2em] uppercase transition-colors cursor-pointer"
            >
              PRE-ORDER NOW
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
