import React from 'react';
import { UserCheck, Award, Calendar, MapPin, Dumbbell, Flame, Zap, Users, ArrowRight } from 'lucide-react';

interface GymProgramsSectionProps {
  onExploreClick?: () => void;
}

export const GymProgramsSection: React.FC<GymProgramsSectionProps> = ({ onExploreClick }) => {
  const stats = [
    { icon: UserCheck, value: '15K+', label: 'HAPPY MEMBERS' },
    { icon: Award, value: '25+', label: 'EXPERT COACHES' },
    { icon: Calendar, value: '120+', label: 'WEEKLY CLASSES' },
    { icon: MapPin, value: '8+', label: 'LOCATIONS' },
  ];

  const programs = [
    {
      id: 'muscle',
      title: 'MUSCLE BUILDING',
      desc: 'Build lean muscle and increase strength.',
      badgeIcon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'weight-loss',
      title: 'WEIGHT LOSS',
      desc: 'Burn fat and achieve a healthier you.',
      badgeIcon: Flame,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'strength',
      title: 'STRENGTH TRAINING',
      desc: 'Improve power, endurance and performance.',
      badgeIcon: Zap,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'group',
      title: 'GROUP CLASSES',
      desc: 'Fun, energetic and result driven group workouts.',
      badgeIcon: Users,
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="fitness" className="relative w-full z-20 pt-12 md:pt-16 pb-16 md:pb-24 scroll-mt-20 md:scroll-mt-24">
      
      {/* Top Stats Banner (Dark Noir with Curved Borders) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-30 mb-16 md:mb-20">
        <div className="bg-neutral-950 border border-neutral-800/80 rounded-2xl md:rounded-3xl shadow-2xl py-6 md:py-8 px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800/80 overflow-hidden">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex items-center space-x-4 ${
                  idx > 0 ? 'pt-4 lg:pt-0 pl-0 lg:pl-6' : ''
                }`}
              >
                <div className="p-3 rounded-2xl bg-lime-500/10 text-lime-400 shrink-0">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
                    {stat.value}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Programs Content Grid */}
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Description Column */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-5 lg:pr-6 pt-2">
            <span className="text-[11px] font-bold tracking-[0.3em] text-lime-600 uppercase">
              OUR PROGRAMS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight uppercase font-heading text-neutral-900">
              FITNESS FOR <br className="hidden sm:inline" /> EVERY GOAL
            </h2>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-sans max-w-md">
              Whether you want to build muscle, lose weight, improve strength or just live a healthier life, we have the perfect program for you.
            </p>
            <div className="pt-2">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center space-x-3 px-6 py-3.5 bg-neutral-950 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all duration-200 cursor-pointer shadow-md rounded-xl"
              >
                <span>EXPLORE ALL PROGRAMS</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right 4 Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.map((program) => {
              const BadgeIcon = program.badgeIcon;
              return (
                <div
                  key={program.id}
                  className="group bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Image Header with Lime Badge */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-neutral-900">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute bottom-3 left-3 w-9 h-9 bg-lime-500 text-neutral-950 flex items-center justify-center rounded-xl shadow-md">
                        <BadgeIcon size={20} strokeWidth={2.2} />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex flex-col space-y-3">
                      <h4 className="text-sm font-extrabold tracking-wider text-neutral-950 uppercase font-heading">
                        {program.title}
                      </h4>
                      <div className="w-8 h-[2px] bg-neutral-300 group-hover:bg-lime-500 transition-colors" />
                      <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                        {program.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Link Footer */}
                  <div className="px-5 pb-5 pt-1">
                    <span className="inline-flex items-center space-x-1.5 text-[11px] font-bold tracking-widest text-neutral-900 group-hover:text-lime-600 uppercase transition-colors">
                      <span>LEARN MORE</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
};
