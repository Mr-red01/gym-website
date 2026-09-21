import React from 'react';
import { Play } from 'lucide-react';

interface HeroContentProps {
  onPreOrderClick: () => void;
  onWatchTrailerClick: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  onPreOrderClick,
  onWatchTrailerClick,
}) => {
  return (
    <div className="relative flex-1 w-full flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-12 md:pt-20 lg:pt-24 pb-12 md:pb-16 select-none overflow-hidden text-white">
      
      {/* Background Video (Scoped exclusively to hero section) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/mtf5hbfs/video/upload/v1789822506/0919_1.mp4"
        />
        {/* Dark contrast overlay for text legibility */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Left Tagline & CTA Section */}
      <div className="relative z-10 max-w-[1700px] w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 items-center">
        
        <div className="lg:col-span-8 flex flex-col items-start space-y-8 md:space-y-10 pl-2 sm:pl-4">
          
          {/* Tagline */}
          <div className="flex flex-col space-y-2 md:space-y-3 font-heading font-medium text-lg sm:text-xl md:text-2xl lg:text-[25px] xl:text-[27px] tracking-[0.24em] leading-[1.65] text-white">
            <p className="group relative inline-block uppercase cursor-pointer transition-all duration-300 hover:text-amber-200 hover:[text-shadow:0_0_18px_rgba(251,191,36,0.85)] w-fit pb-1">
              GET FIT BY MAFIA.
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.9)] transition-all duration-300 group-hover:w-full" />
            </p>
            <p className="group relative inline-block uppercase cursor-pointer transition-all duration-300 hover:text-amber-200 hover:[text-shadow:0_0_18px_rgba(251,191,36,0.85)] w-fit pb-1">
              YOUR BODY. YOUR EMPIRE.
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.9)] transition-all duration-300 group-hover:w-full" />
            </p>
            <div className="relative inline-block pb-3">
              <p className="group relative inline-block uppercase cursor-pointer transition-all duration-300 hover:text-amber-200 hover:[text-shadow:0_0_18px_rgba(251,191,36,0.85)] w-fit pb-1">
                WELCOME TO THE EMPIRE.
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.9)] transition-all duration-300 group-hover:w-full" />
              </p>
              {/* White accent underline line */}
              <div className="absolute bottom-0 left-0 w-12 sm:w-14 md:w-16 h-[1.8px] bg-white" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
            
            {/* ENROLL TODAY Button */}
            <button
              onClick={onPreOrderClick}
              className="px-7 sm:px-8 py-3.5 sm:py-4 bg-white text-black text-[11px] sm:text-[12px] font-bold tracking-[0.22em] uppercase hover:bg-amber-300 hover:text-black hover:shadow-[0_0_25px_rgba(251,191,36,0.8)] transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
            >
              ENROLL TODAY
            </button>

            {/* CONTACT US ▶ Button */}
            <button
              onClick={onWatchTrailerClick}
              className="group flex items-center space-x-2 text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-white uppercase cursor-pointer relative py-1 hover:text-amber-300 hover:[text-shadow:0_0_15px_rgba(251,191,36,0.85)] transition-all duration-300"
            >
              <span className="border-b-[1.8px] border-white pb-0.5 group-hover:border-amber-300 transition-colors">
                CONTACT US
              </span>
              <div className="inline-flex items-center justify-center translate-y-[-1px]">
                {/* Right-pointing play triangle */}
                <Play
                  size={12}
                  className="fill-white text-white group-hover:fill-amber-300 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all duration-200"
                />
              </div>
            </button>

          </div>

        </div>

      </div>

      {/* Bottom Right "NEW GAME 2024" Callout */}
      <div className="relative z-10 max-w-[1700px] w-full mx-auto flex justify-end items-end pt-8">
        <div className="group flex flex-col items-start pr-2 sm:pr-4 text-right sm:text-left cursor-pointer">
          <p className="text-[11px] sm:text-[12px] md:text-[13px] font-bold tracking-[0.32em] text-white uppercase leading-relaxed group-hover:text-amber-200 group-hover:[text-shadow:0_0_15px_rgba(251,191,36,0.85)] transition-all duration-300">
            NEW GAME
          </p>
          <div className="relative pb-2">
            <p className="text-[18px] sm:text-[20px] md:text-[22px] font-bold tracking-[0.3em] text-white uppercase group-hover:text-amber-200 group-hover:[text-shadow:0_0_15px_rgba(251,191,36,0.85)] transition-all duration-300">
              2024
            </p>
            {/* White underline under 2024 */}
            <div className="absolute bottom-0 left-0 w-10 sm:w-12 h-[1.8px] bg-white group-hover:bg-amber-300 group-hover:shadow-[0_0_10px_rgba(252,211,77,0.9)] transition-all duration-300" />
          </div>
        </div>
      </div>

    </div>
  );
};
