import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { ActiveTab, SearchResult } from '../types';
import { GANGS_DATA, STORY_CHAPTERS, GAMEPLAY_FEATURES, MEDIA_GALLERY } from '../data/mafiaData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (tab: ActiveTab) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectResult }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const allSearchable: SearchResult[] = [
    ...STORY_CHAPTERS.map((ch) => ({
      id: ch.id,
      title: `${ch.year}: ${ch.title}`,
      category: 'Story' as const,
      snippet: ch.summary,
      tabTarget: 'story' as ActiveTab,
    })),
    ...GANGS_DATA.map((g) => ({
      id: g.id,
      title: `${g.name} (${g.leader})`,
      category: 'Gangs' as const,
      snippet: g.description,
      tabTarget: 'gangs' as ActiveTab,
    })),
    ...GAMEPLAY_FEATURES.map((gf) => ({
      id: gf.id,
      title: gf.title,
      category: 'Gameplay' as const,
      snippet: gf.description,
      tabTarget: 'gameplay' as ActiveTab,
    })),
    ...MEDIA_GALLERY.map((m) => ({
      id: m.id,
      title: m.title,
      category: 'Media' as const,
      snippet: `Format: ${m.type.toUpperCase()}`,
      tabTarget: 'media' as ActiveTab,
    })),
  ];

  const results = query.trim()
    ? allSearchable.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.snippet.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : allSearchable.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      
      <div className="relative w-full max-w-2xl bg-[#121212] border border-neutral-800 text-white shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-neutral-800 bg-neutral-900">
          <Search size={20} className="text-neutral-400 mr-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Mafia lore, gangs, story, gameplay, media..."
            className="w-full bg-transparent text-sm font-semibold tracking-wider text-white placeholder-neutral-500 focus:outline-none uppercase"
            autoFocus
          />
          <button onClick={onClose} className="p-1 text-neutral-400 hover:text-white cursor-pointer ml-2">
            <X size={20} />
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-6 space-y-3">
          <p className="text-[10px] font-bold tracking-[0.25em] text-neutral-500 uppercase mb-3">
            {query.trim() ? `SEARCH RESULTS (${results.length})` : 'POPULAR TOPICS'}
          </p>

          {results.length === 0 ? (
            <p className="text-xs text-neutral-400 tracking-widest py-8 text-center uppercase">
              NO MATCHING ARCHIVES FOUND FOR "{query}"
            </p>
          ) : (
            results.map((res) => (
              <div
                key={res.id}
                onClick={() => {
                  if (res.tabTarget) onSelectResult(res.tabTarget);
                  onClose();
                }}
                className="p-4 bg-neutral-900/60 border border-neutral-800 hover:border-neutral-600 transition-colors cursor-pointer group flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="px-2 py-0.5 bg-neutral-800 text-amber-400 text-[9px] font-bold tracking-widest uppercase">
                      {res.category}
                    </span>
                    <h4 className="font-bold text-xs tracking-wider uppercase text-white group-hover:text-amber-300 transition-colors">
                      {res.title}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-400 line-clamp-1">{res.snippet}</p>
                </div>

                <ArrowRight size={16} className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            ))
          )}
        </div>

      </div>

    </div>
  );
};
