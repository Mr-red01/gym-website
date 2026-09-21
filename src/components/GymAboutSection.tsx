import React from 'react';
import { Heart, Target, ShieldCheck } from 'lucide-react';

export const GymAboutSection: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'HEALTHY LIFESTYLE',
      desc: 'We promote habits that lead to a better life.',
    },
    {
      icon: Target,
      title: 'PERSONALIZED PLAN',
      desc: 'Custom plans tailored to your goals.',
    },
    {
      icon: ShieldCheck,
      title: 'SAFE & CLEAN',
      desc: 'A safe, clean and friendly environment for all.',
    },
  ];

  return (
    <section id="location" className="relative w-full bg-neutral-950 text-white py-16 md:py-24 border-t border-b border-neutral-800 select-none scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Google Maps Location Embed */}
          <div className="lg:col-span-6 relative rounded-2xl md:rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl min-h-[380px] sm:min-h-[440px] h-full flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4002.255575090445!2d79.0613613!3d21.1434215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c167ca6b4e2b%3A0x487c00269df0dc67!2sCult%20Dharampeth%20%7C%20Best%20Gym%20in%20Dharampeth%2C%20Nagpur!5e1!3m2!1sen!2sin!4v1789840375828!5m2!1sen!2sin"
              title="Mafia Gym Location Map"
              className="w-full h-full min-h-[380px] sm:min-h-[440px] border-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          {/* Right Column - About Us Content */}
          <div className="lg:col-span-6 flex flex-col space-y-6 lg:pl-6">
            <span className="text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
              ABOUT US
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-none uppercase font-heading text-white">
              MORE THAN JUST <br className="hidden sm:inline" /> A GYM
            </h2>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-sans max-w-xl">
              We are a community of people who are committed to becoming the best version of themselves. Our mission is to help you unlock your potential through fitness, guidance and support.
            </p>

            {/* 3 Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-neutral-800">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="flex flex-col space-y-2.5">
                    <div className="text-lime-400">
                      <Icon size={26} strokeWidth={2} />
                    </div>
                    <h4 className="text-xs font-extrabold tracking-wider text-white uppercase font-heading">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
