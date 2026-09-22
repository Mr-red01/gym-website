import React, { useState } from 'react';
import { Search, ArrowUpRight, ArrowLeft, Star, CheckCircle, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface CoachesPageProps {
  onBack: () => void;
  onBookSession?: (coachName?: string) => void;
}

interface Coach {
  id: string;
  name: string;
  specialty: string;
  category: 'all' | 'hypertrophy' | 'strength' | 'contest' | 'nutrition';
  experience: string;
  rating: string;
  image: string;
  achievements: string;
}

export const CoachesPage: React.FC<CoachesPageProps> = ({ onBack, onBookSession }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hypertrophy' | 'strength' | 'contest' | 'nutrition'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

  const coaches: Coach[] = [
    {
      id: 'noel-thorne',
      name: 'Noel Thorne',
      specialty: 'IFBB PRO & HYPERTROPHY',
      category: 'hypertrophy',
      experience: '16 years of elite coaching',
      rating: '5.0',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
      achievements: 'Former Mr. Universe finalist & coach to 12+ national bodybuilding winners.',
    },
    {
      id: 'andre-cole',
      name: 'Andre Cole',
      specialty: 'ATHLETIC CONDITIONING & STRENGTH',
      category: 'strength',
      experience: '12 years of performance training',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      achievements: 'Specialist in functional athletic muscle building & body recomposition.',
    },
    {
      id: 'alexei-vance',
      name: 'Alexei Vance',
      specialty: 'POWERLIFTING & MASS',
      category: 'strength',
      experience: '14 years heavy strength specialist',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80',
      achievements: '800lb deadlifter & Olympic strength coach for competitive athletes.',
    },
    {
      id: 'darius-miller',
      name: 'Darius Miller',
      specialty: 'CONTEST PREP & PHYSIQUE',
      category: 'contest',
      experience: '10 years Olympia prep coach',
      rating: '5.0',
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80',
      achievements: 'Master of contest peak week protocols, stage presence & dry conditioning.',
    },
    {
      id: 'sarah-hayes',
      name: 'Sarah Hayes',
      specialty: 'WOMEN’S PHYSIQUE & HYPERTROPHY',
      category: 'hypertrophy',
      experience: '11 years elite physique coaching',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80',
      achievements: 'National physique champion & transformation coach for competitive athletes.',
    },
    {
      id: 'julian-mercer',
      name: 'Julian Mercer',
      specialty: 'BIOMECHANICS & MACRO PROTOCOLS',
      category: 'nutrition',
      experience: '13 years advanced hypertrophy',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
      achievements: 'Specialist in joint-friendly hypertrophy biomechanics & metabolic priming.',
    },
  ];

  const filteredCoaches = coaches.filter((coach) => {
    const matchesCategory = activeCategory === 'all' || coach.category === activeCategory;
    const matchesSearch =
      coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.experience.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleContactWhatsApp = (coachName?: string) => {
    const text = coachName
      ? `Hi, I'm interested in personal training with Coach ${coachName} at Mafia Gym.`
      : "Hi, I'd like to book my first free session with a coach at Mafia Gym.";
    window.open(`https://wa.me/919743439097?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="relative min-h-screen w-full bg-[#080a0c] text-white font-sans antialiased overflow-x-hidden selection:bg-[#b4f326] selection:text-black">
      
      {/* Background High-Tech Grid & Corner Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid lines matching reference */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(to right, #b4f326 1px, transparent 1px), linear-gradient(to bottom, #b4f326 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
        {/* Top Right Green Laser / Light Rays */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#b4f326]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-[500px] h-[300px] bg-gradient-to-bl from-[#b4f326]/10 via-emerald-500/5 to-transparent blur-2xl transform rotate-12 pointer-events-none" />
        {/* Top Left Subtle Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#b4f326]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Floating Top Back Control */}
      <div className="relative z-30 max-w-[1320px] mx-auto px-6 sm:px-8 pt-8 pb-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#13171b]/90 border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#b4f326]/60 transition-all text-xs font-semibold tracking-wider cursor-pointer backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#b4f326]" />
          <span>BACK TO GYM</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#b4f326] animate-pulse" />
          <span className="tracking-widest uppercase text-neutral-300">MAFIA ELITE SQUAD</span>
        </div>
      </div>

      <div className="relative z-20 max-w-[1320px] mx-auto px-6 sm:px-8 py-8 sm:py-12 flex flex-col items-center">
        
        {/* Pill Badge at Top */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121519]/90 border border-neutral-800 shadow-inner mb-6 backdrop-blur-sm">
          <span className="text-[#b4f326] font-bold text-xs">+</span>
          <span className="text-xs font-medium tracking-wide text-neutral-300">Certified & Elite Coaches</span>
        </div>

        {/* Hero Headline with Neon Accent */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center max-w-4xl text-white leading-[1.08]">
          Level up with <span className="text-[#b4f326] drop-shadow-[0_0_24px_rgba(180,243,38,0.35)]">top coaches</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-5 text-sm sm:text-base text-neutral-400 text-center max-w-2xl leading-relaxed">
          Gain insights from elite IFBB pros & bodybuilding champions offering personalized training, macro nutrition, and contest-level biomechanics. Enhance your physique and build real power.
        </p>

        {/* Search & Filter Pill Container */}
        <div className="mt-8 w-full max-w-xl">
          <div className="relative flex items-center bg-[#101317] border border-neutral-800 rounded-full p-1.5 shadow-2xl focus-within:border-[#b4f326]/60 transition-colors">
            <div className="flex items-center pl-4 pr-2 text-neutral-500 flex-1">
              <Search className="w-4 h-4 mr-3 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search coaches, hypertrophy, strength..."
                className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
              />
            </div>
            <button
              onClick={() => {}}
              className="px-6 py-2.5 rounded-full bg-[#b4f326] hover:bg-[#a2e21b] text-black font-extrabold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-[0_0_16px_rgba(180,243,38,0.4)] cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>

        {/* Bento Grid Section matching reference design */}
        <div className="mt-14 w-full grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Left Column (Stats Cards + Unlock Banner) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Top Row: 2 Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Stat Card 1: 20+ Coaches */}
              <div className="bg-[#101317]/90 border border-neutral-800/90 rounded-2xl md:rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors backdrop-blur-sm">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">20+</h3>
                  <p className="text-xs font-semibold text-neutral-400 mt-1 uppercase tracking-wider">Coaches & Champions</p>
                </div>
                <p className="text-xs text-neutral-400 mt-6 leading-relaxed">
                  Master bodybuilding trainers ready to guide you on your muscle growth journey.
                </p>
              </div>

              {/* Stat Card 2: 500+ Active Athletes */}
              <div className="bg-[#101317]/90 border border-neutral-800/90 rounded-2xl md:rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors backdrop-blur-sm">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">500+</h3>
                  <p className="text-xs font-semibold text-neutral-400 mt-1 uppercase tracking-wider">Active Members</p>
                </div>
                <p className="text-xs text-neutral-400 mt-6 leading-relaxed">
                  Athletes who have successfully transformed their physique and hit peak PRs.
                </p>
              </div>

            </div>

            {/* Bottom Card: UNLOCK YOUR PHYSICAL POTENTIAL WITH US! */}
            <div className="bg-[#101317]/90 border border-neutral-800/90 rounded-2xl md:rounded-3xl p-7 sm:p-9 flex flex-col justify-center hover:border-neutral-700 transition-colors backdrop-blur-sm min-h-[160px]">
              <div className="flex flex-col space-y-2">
                
                {/* Line 1: UNLOCK [avatars] YOUR */}
                <div className="flex items-center flex-wrap gap-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase text-white">
                    UNLOCK
                  </span>
                  
                  {/* Overlapping circular avatar badges */}
                  <div className="inline-flex items-center -space-x-2 bg-[#1b2026] p-1 rounded-full border border-neutral-700">
                    <img
                      src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=120&q=80"
                      alt="Coach avatar"
                      className="w-8 h-8 rounded-full object-cover border-2 border-black"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=120&q=80"
                      alt="Coach avatar"
                      className="w-8 h-8 rounded-full object-cover border-2 border-black"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=120&q=80"
                      alt="Coach avatar"
                      className="w-8 h-8 rounded-full object-cover border-2 border-black"
                    />
                    <div className="w-8 h-8 rounded-full bg-[#b4f326] text-black font-extrabold text-[11px] flex items-center justify-center border-2 border-black">
                      +
                    </div>
                  </div>

                  <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase text-white">
                    YOUR
                  </span>
                </div>

                {/* Line 2: [Arrow pill] PHYSICAL */}
                <div className="flex items-center flex-wrap gap-3 pt-1">
                  <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-neutral-700 bg-black/50 text-[#b4f326]">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase text-[#b4f326]">
                    PHYSICAL
                  </span>
                </div>

                {/* Line 3: POTENTIAL WITH US! */}
                <div className="pt-1">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase text-white">
                    POTENTIAL WITH US!
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Tall Hero Card (Book your first free session) */}
          <div className="lg:col-span-5 relative bg-[#101317]/90 border border-neutral-800/90 rounded-2xl md:rounded-3xl overflow-hidden group flex flex-col justify-between p-7 sm:p-9 min-h-[420px] backdrop-blur-sm">
            
            {/* Background Muscular Bodybuilder Coach Portrait (High Contrast Noir) */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80"
                alt="Muscular Coach"
                className="w-full h-full object-cover object-center grayscale contrast-125 opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlays for pristine text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0c] via-[#080a0c]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080a0c]/80 via-transparent to-transparent" />
            </div>

            {/* Top Text Content */}
            <div className="relative z-10 max-w-xs">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Book your first free session
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Get an in-depth assessment into your lifting technique, macro targets, and personalized workout cycle.
              </p>
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 pt-10">
              <button
                onClick={() => handleContactWhatsApp()}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white text-xs font-bold tracking-wider uppercase backdrop-blur-md transition-all cursor-pointer shadow-lg"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Mentors / Coaches Section */}
        <div className="mt-20 w-full">
          
          {/* Section Heading & Category Filter Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-800">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-heading">
              Coaches
            </h2>

            {/* Category Filter Pills / Links */}
            <div className="flex items-center flex-wrap gap-2 sm:gap-4 text-xs font-medium text-neutral-400">
              {[
                { label: 'All', key: 'all' },
                { label: 'Hypertrophy', key: 'hypertrophy' },
                { label: 'Strength & Power', key: 'strength' },
                { label: 'Contest Prep', key: 'contest' },
                { label: 'Biomechanics', key: 'nutrition' },
              ].map((item, idx, arr) => {
                const isActive = activeCategory === item.key;
                return (
                  <React.Fragment key={item.key}>
                    <button
                      onClick={() => setActiveCategory(item.key as any)}
                      className={`transition-colors py-1 cursor-pointer ${
                        isActive ? 'text-white font-bold' : 'hover:text-neutral-200'
                      }`}
                    >
                      {item.label}
                    </button>
                    {idx < arr.length - 1 && <span className="text-neutral-600">—</span>}
                  </React.Fragment>
                );
              })}
            </div>

          </div>

          {/* 6 Professional Mentors Rectangle Cards Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filteredCoaches.map((coach) => (
              <div
                key={coach.id}
                className="relative bg-[#101317] border border-neutral-800/90 rounded-2xl overflow-hidden group hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                {/* Professional Coach Portrait Rectangle Image */}
                <div className="relative w-full h-52 sm:h-56 md:h-60 overflow-hidden bg-[#15191e]">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover object-top grayscale contrast-125 brightness-95 group-hover:scale-105 group-hover:contrast-130 transition-all duration-500"
                  />
                  
                  {/* Subtle Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101317] via-[#101317]/20 to-transparent" />

                  {/* Top Left Role Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-neutral-200 tracking-wider">
                      {coach.specialty}
                    </span>
                  </div>

                  {/* Top Right Rating Badge */}
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white">
                    <span>{coach.rating}</span>
                    <Star className="w-3 h-3 fill-[#b4f326] text-[#b4f326]" />
                  </div>
                </div>

                {/* Bottom Coach Details & Action Button */}
                <div className="p-4 sm:p-5 pt-2 flex items-center justify-between gap-3 bg-[#101317]">
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-white tracking-tight truncate">
                      {coach.name}
                    </h3>
                    <p className="text-[11px] text-neutral-400 mt-0.5 truncate">
                      {coach.experience}
                    </p>
                  </div>

                  {/* Lime-green Arrow Action Button */}
                  <button
                    onClick={() => handleContactWhatsApp(coach.name)}
                    aria-label={`Book session with ${coach.name}`}
                    className="w-9 h-9 rounded-full bg-[#b4f326] hover:bg-[#a2e21b] text-black flex items-center justify-center shadow-lg hover:shadow-[0_0_14px_rgba(180,243,38,0.4)] transition-all transform group-hover:rotate-45 cursor-pointer shrink-0"
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {filteredCoaches.length === 0 && (
            <div className="text-center py-16 text-neutral-500 text-sm">
              No coaches found matching "{searchQuery}".
            </div>
          )}

        </div>

      </div>

      {/* Footer minimal info for Coaches view */}
      <div className="relative z-20 border-t border-neutral-800/80 py-8 px-6 text-center text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} MAFIA GYM • ELITE BODYBUILDING & STRENGTH SQUAD</p>
      </div>

    </div>
  );
};
