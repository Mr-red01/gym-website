export type ActiveTab = 'home' | 'fitness' | 'personal_trainers' | 'coaches' | 'location' | 'instagram' | 'reviews' | 'logo' | 'contact_us' | 'story' | 'gameplay' | 'gangs' | 'media';

export interface PreOrderEdition {
  id: string;
  name: string;
  price: number;
  platform: 'PS5' | 'Xbox Series X' | 'PC Steam' | 'PC Epic';
  badge?: string;
  features: string[];
  image: string;
}

export interface CartItem {
  id: string;
  editionId: string;
  name: string;
  platform: string;
  price: number;
  quantity: number;
  image: string;
}

export interface GangInfo {
  id: string;
  name: string;
  leader: string;
  territory: string;
  specialty: string;
  description: string;
  bgImage: string;
  logoIcon: string;
  motto: string;
}

export interface StoryChapter {
  id: string;
  year: string;
  title: string;
  location: string;
  summary: string;
  image: string;
}

export interface GameplayFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'wallpaper' | 'screenshot' | 'artwork' | 'soundtrack';
  url: string;
  duration?: string;
  audioSrc?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  category: 'Story' | 'Gangs' | 'Gameplay' | 'Media' | 'Editions';
  snippet: string;
  tabTarget?: ActiveTab;
}
