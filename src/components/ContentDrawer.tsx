import React from 'react';
import { X, Play, Download, ExternalLink, Shield, Flame, Crown } from 'lucide-react';
import { ActiveTab } from '../types';
import { GANGS_DATA, STORY_CHAPTERS, GAMEPLAY_FEATURES, MEDIA_GALLERY } from '../data/mafiaData';

interface ContentDrawerProps {
  activeTab: ActiveTab;
  onClose: () => void;
  onOpenPreOrder: () => void;
}

export const ContentDrawer: React.FC<ContentDrawerProps> = ({
  activeTab,
  onClose,
  onOpenPreOrder,
}) => {
  if (!['story', 'gameplay', 'gangs', 'media'].includes(activeTab)) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black/85 backdrop-blur-md flex flex-col animate-fadeIn overflow-hidden">
      
      {/* Top Bar inside Drawer */}
      <div className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-neutral-800 bg-neutral-950">
        <div className="flex items-center space-x-4">
          <span className="font-logo text-xl font-bold tracking-[0.2em] text-white">MAFIA</span>
          <span className="text-neutral-600">/</span>
          <span className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase">
            {activeTab} ARCHIVES
          </span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center space-x-2 text-xs tracking-widest text-neutral-400 hover:text-white uppercase transition-colors cursor-pointer"
        >
          <span>RETURN TO HERO</span>
          <X size={20} />
        </button>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12 text-white max-w-7xl mx-auto w-full">
        
        {/* STORY TAB */}
        {activeTab === 'story' && (
          <div className="space-y-12">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-amber-500 uppercase mb-2">
                NARRATIVE OVERVIEW
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-wider uppercase">
                THE RISE OF TOMMY ANGELO
              </h2>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed mt-4 max-w-3xl">
                Set during the brutal height of American Prohibition in 1930s Lost Haven, experience the unforgettable story of an innocent cab driver drawn into the lucrative, deadly underworld of organized crime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STORY_CHAPTERS.map((ch) => (
                <div key={ch.id} className="bg-neutral-900 border border-neutral-800 overflow-hidden group">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={ch.image}
                      alt={ch.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-black/80 text-amber-400 text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase">
                      YEAR {ch.year}
                    </span>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-bold text-base tracking-wide uppercase text-white">{ch.title}</h3>
                    <p className="text-xs text-amber-500 tracking-wider uppercase font-semibold">{ch.location}</p>
                    <p className="text-xs text-neutral-400 leading-relaxed pt-2">{ch.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GAMEPLAY TAB */}
        {activeTab === 'gameplay' && (
          <div className="space-y-12">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-amber-500 uppercase mb-2">
                NEXT-GEN MECHANICS
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-wider uppercase">
                UNCOMPROMISING 1930S SIMULATION
              </h2>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed mt-4 max-w-3xl">
                Built from the ground up for modern hardware, Mafia: The Game delivers tactile vehicular physics, deadly firearm combat, and a dynamic police heat system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GAMEPLAY_FEATURES.map((gf) => (
                <div key={gf.id} className="bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-amber-500 uppercase bg-amber-950/40 px-2.5 py-1 border border-amber-800/40">
                      {gf.tag}
                    </span>
                    <h3 className="font-bold text-lg tracking-wider uppercase text-white mt-4">{gf.title}</h3>
                    <p className="text-xs text-neutral-400 tracking-wider uppercase mt-1">{gf.subtitle}</p>
                    <p className="text-xs text-neutral-300 leading-relaxed mt-4">{gf.description}</p>
                  </div>
                  <img src={gf.image} alt={gf.title} className="w-full h-40 object-cover border border-neutral-800" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GANGS TAB */}
        {activeTab === 'gangs' && (
          <div className="space-y-12">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-amber-500 uppercase mb-2">
                SYNDICATE FACTIONS
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-wider uppercase">
                THE FAMILIES OF LOST HAVEN
              </h2>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed mt-4 max-w-3xl">
                Three rival crime families vie for control over Lost Haven's speakeasies, shipping docks, and political offices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GANGS_DATA.map((gang) => (
                <div key={gang.id} className="bg-neutral-900 border border-neutral-800 p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                      <h3 className="font-extrabold text-lg tracking-wider uppercase text-white">{gang.name}</h3>
                      <Shield className="text-amber-500" size={20} />
                    </div>

                    <div className="text-xs space-y-1 text-neutral-300">
                      <p><span className="text-neutral-500 uppercase font-semibold">LEADER:</span> {gang.leader}</p>
                      <p><span className="text-neutral-500 uppercase font-semibold">TERRITORY:</span> {gang.territory}</p>
                      <p><span className="text-neutral-500 uppercase font-semibold">RACKET:</span> {gang.specialty}</p>
                    </div>

                    <p className="text-xs text-neutral-400 leading-relaxed pt-2">{gang.description}</p>
                  </div>

                  <div className="p-3 bg-neutral-950 border border-neutral-800/80 text-[11px] italic text-amber-400 font-serif">
                    "{gang.motto}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MEDIA TAB */}
        {activeTab === 'media' && (
          <div className="space-y-12">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-amber-500 uppercase mb-2">
                PRESS & MEDIA GALLERY
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-wider uppercase">
                4K WALLPAPERS & SOUNDTRACK PREVIEWS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MEDIA_GALLERY.map((media) => (
                <div key={media.id} className="bg-neutral-900 border border-neutral-800 p-4 space-y-3">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={media.url} alt={media.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xs tracking-wider uppercase text-white">{media.title}</h4>
                      <p className="text-[10px] text-amber-400 tracking-widest uppercase">{media.type}</p>
                    </div>
                    <button
                      onClick={() => window.open(media.url, '_blank')}
                      className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-bold tracking-widest uppercase cursor-pointer flex items-center space-x-1.5"
                    >
                      <Download size={14} />
                      <span>DOWNLOAD</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
