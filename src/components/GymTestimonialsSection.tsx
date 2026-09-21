import React, { useState } from 'react';
import { Quote } from 'lucide-react';

export const GymTestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: '1',
      quote: 'FitStrong changed my life! The coaches are amazing and the environment keeps me motivated every day.',
      author: 'JAMES T.',
      role: 'Member',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: '2',
      quote: 'Best gym in town! Great equipment, friendly staff and programs that actually deliver results.',
      author: 'SOPHIA M.',
      role: 'Member',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: '3',
      quote: "I've never felt stronger and more confident. Highly recommend FitStrong to everyone!",
      author: 'MICHAEL R.',
      role: 'Member',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section id="reviews" className="relative w-full py-16 md:py-24 select-none scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight uppercase font-heading text-neutral-900">
            WHAT OUR <span className="text-lime-600">MEMBERS</span> SAY
          </h2>
          <div className="w-12 h-[2.5px] bg-lime-500 rounded-full" />
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-8 bg-neutral-100/90 border transition-all duration-300 rounded-2xl flex flex-col justify-between space-y-6 cursor-pointer hover:shadow-lg ${
                activeIndex === idx
                  ? 'border-neutral-900 shadow-md bg-white'
                  : 'border-neutral-200/90 opacity-90 hover:opacity-100'
              }`}
            >
              <div className="space-y-4">
                <Quote size={28} className="text-neutral-400 rotate-180" />
                <p className="text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center space-x-3 pt-2">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-neutral-300"
                />
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-neutral-950 uppercase font-heading">
                    {t.author}
                  </h4>
                  <p className="text-[10px] text-neutral-500 font-sans uppercase">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center space-x-2 pt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-200 rounded-full ${
                activeIndex === idx
                  ? 'w-3 h-3 bg-lime-500'
                  : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
