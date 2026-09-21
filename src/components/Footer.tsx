import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  onGetStartedClick?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden select-none border-t border-neutral-900 font-sans pt-12 md:pt-16">
      
      {/* Giant Metallic Embossed Logo Graphic */}
      <div className="relative w-full flex items-center justify-center pt-4 pb-12 overflow-hidden pointer-events-none">
        <h1 className="text-[120px] sm:text-[180px] md:text-[230px] lg:text-[280px] xl:text-[340px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 via-neutral-600 to-black/90 drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)] opacity-90 select-none uppercase font-heading scale-y-110">
          MAFIA
        </h1>
        {/* Gradient fade to seamlessly blend bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-6 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Address, Status, Socials */}
          <div className="md:col-span-4 flex flex-col space-y-6">
            <div className="text-xs text-neutral-400 leading-relaxed font-normal">
              2261 Market Street #5039<br />
              San Francisco, CA 94114
            </div>

            {/* Status Pill */}
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-neutral-900/90 border border-neutral-800 rounded-md text-[11px] font-medium text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                <span>All systems normal</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Right Columns: Links Navigation Grid */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Documentation */}
            <div className="flex flex-col space-y-3.5">
              <h4 className="text-xs font-semibold text-white tracking-wider">Documentation</h4>
              <ul className="flex flex-col space-y-2.5 text-xs text-neutral-400">
                <li><a href="#getting-started" className="hover:text-white transition-colors">Getting Started</a></li>
                <li><a href="#api-reference" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#examples" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="#sdks" className="hover:text-white transition-colors">SDKs</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col space-y-3.5">
              <h4 className="text-xs font-semibold text-white tracking-wider">Resources</h4>
              <ul className="flex flex-col space-y-2.5 text-xs text-neutral-400">
                <li><a href="#changelog" className="hover:text-white transition-colors">Changelog</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#status" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#webhooks" className="hover:text-white transition-colors">Webhooks</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col space-y-3.5">
              <h4 className="text-xs font-semibold text-white tracking-wider">Company</h4>
              <ul className="flex flex-col space-y-2.5 text-xs text-neutral-400">
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#customers" className="hover:text-white transition-colors">Customers</a></li>
                <li><a href="#brand" className="hover:text-white transition-colors">Brand</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col space-y-3.5">
              <h4 className="text-xs font-semibold text-white tracking-wider">Legal</h4>
              <ul className="flex flex-col space-y-2.5 text-xs text-neutral-400">
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
};
