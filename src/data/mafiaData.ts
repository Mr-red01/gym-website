import { PreOrderEdition, GangInfo, StoryChapter, GameplayFeature, MediaItem } from '../types';

export const GAME_EDITIONS: PreOrderEdition[] = [
  {
    id: 'standard',
    name: 'Standard Edition',
    price: 69.99,
    platform: 'PS5',
    features: [
      'Base Game: Mafia The Game (2024)',
      'Pre-order Bonus: Made Man Pack (Classic Suit & Tommy Gun Skin)',
      'Digital Art Mini-Book'
    ],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'deluxe',
    name: 'Caporegime Deluxe Edition',
    price: 89.99,
    platform: 'PS5',
    badge: 'MOST POPULAR',
    features: [
      'Base Game + 3 Post-Launch Narrative DLC Expansion Chapters',
      'Exclusive Vehicle: 1930s Armored Executive Sedan',
      'Original Noir Soundtrack (High-Res FLAC Download)',
      '3-Days Early Game Access',
      'Made Man Pack'
    ],
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'collectors',
    name: 'Don Syndicate Collector Edition',
    price: 149.99,
    platform: 'PS5',
    badge: 'LIMITED STEELBOOK',
    features: [
      'Includes All Deluxe Digital Content',
      'Hand-Painted 12-inch Tommy Gun Statue',
      'Embossed Metal SteelBook Case',
      'Cloth City Map of Lost Haven & Gang Territories',
      'Numbered Brass Syndicate Coin & Gold Tie Clip'
    ],
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80'
  }
];

export const GANGS_DATA: GangInfo[] = [
  {
    id: 'salieri',
    name: 'Salieri Family',
    leader: 'Don Ennio Salieri',
    territory: 'Little Italy & Downtown Docks',
    specialty: 'Bootleg Distribution & Political Protection',
    description: 'Operating under an unwavering code of honor and blood, Don Salieri controls the western waterfront and bootlegging routes. They value total loyalty above all.',
    bgImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
    logoIcon: 'Shield',
    motto: 'Honor before power. Blood before business.'
  },
  {
    id: 'moretti',
    name: 'Moretti Syndicate',
    leader: 'Don Leo Moretti',
    territory: 'North Park & Central Heights',
    specialty: 'Illegal Gambling, Extortion & Speakeasies',
    description: 'Ruthless opportunists who rule through brute intimidation and corrupt police ties. They seek complete control over every speakeasy in Lost Haven.',
    bgImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
    logoIcon: 'Flame',
    motto: 'Fear commands obedience.'
  },
  {
    id: 'falcone',
    name: 'Falcone Crime Network',
    leader: 'Carlo Falcone',
    territory: 'Oakwood & Airport Industrial Zone',
    specialty: 'High-Stakes Arms Smuggling & Narcotics',
    description: 'A modernized syndicate expanding rapidly into international trade and illegal weaponry, pushing the city to the brink of open turf warfare.',
    bgImage: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
    logoIcon: 'Crown',
    motto: 'Expand or perish.'
  }
];

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 'ch1',
    year: '1931',
    title: 'An Offer You Cannot Refuse',
    location: 'Lost Haven, Little Italy',
    summary: 'A simple cab driver gets thrust into the underworld when an unexpected shootout forces him to rescue two Salieri soldiers.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ch2',
    year: '1934',
    title: 'Shadows of the Prohibition',
    location: 'Central Harbor Docks',
    summary: 'Hijack a high-stakes shipment of illegal Canadian whiskey under the cover of dense midnight fog while evading rival Moretti hitmen.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ch3',
    year: '1938',
    title: 'The Great Bank Heist',
    location: 'First National Bank of Lost Haven',
    summary: 'Plan and execute the city’s largest bank robbery, managing hostage control, vault detonation, and a high-speed police pursuit.',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80'
  }
];

export const GAMEPLAY_FEATURES: GameplayFeature[] = [
  {
    id: 'combat',
    title: 'Visceral Noir Gunplay',
    subtitle: 'Authentic 1930s Weapon Physics',
    description: 'Feel the kickback of authentic Tommy Guns, sawed-off shotguns, and revolvers with physics-based bullet penetration and tactical cover destruction.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    tag: 'COMBAT ENGINE'
  },
  {
    id: 'driving',
    title: 'Vintage Automotive Physics',
    subtitle: 'Manual Gearshift & Real Suspension',
    description: 'Master over 40 meticulously modeled 1930s vehicles featuring realistic clutch simulation, tire degradation, and damage deformation.',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    tag: 'DRIVING SIMULATION'
  },
  {
    id: 'city',
    title: 'Living 1930s Open World',
    subtitle: 'Dynamic Weather & Police Heat System',
    description: 'Explore a 25-square-mile living metropolis with reactive police responses, pedestrian AI routines, and period-accurate architectural realism.',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80',
    tag: 'OPEN METROPOLIS'
  }
];

export const MEDIA_GALLERY: MediaItem[] = [
  {
    id: 'wall-1',
    title: 'Midnight Heist in Lost Haven (4K)',
    type: 'wallpaper',
    url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'wall-2',
    title: 'Salieri Family Lounge Art (4K)',
    type: 'artwork',
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'ost-1',
    title: 'Main Theme: Main Title Noir Orchestra',
    type: 'soundtrack',
    url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    duration: '03:42'
  },
  {
    id: 'screen-1',
    title: 'Rainy Night Pursuit at the Bridge',
    type: 'screenshot',
    url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1600&q=80'
  }
];
