/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Manual scroll calculation to account for fixed header
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash without jumping, safely ignoring errors in sandboxed environments
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError in restricted environments
      }
    }
  };

  return (
    <section className="relative w-full h-[80vh] md:h-screen min-h-[500px] md:min-h-[800px] overflow-hidden bg-[#0a0502]">
      
      {/* High-End Atmospheric Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Base Image - Dark Moody Chocolate/Sweets */}
        <img 
          src="https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=1920" 
          alt="Premium Sweets"
          className="w-full h-full object-cover scale-110 animate-slow-zoom opacity-60"
          referrerPolicy="no-referrer"
        />
        
        {/* Layered Animated Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0502]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,0,0.15)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,168,181,0.1)_0%,transparent_50%)]"></div>

        {/* Floating "Sweet" Particles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-[100px] animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00A8B5]/5 rounded-full blur-[120px] animate-float-slower"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="animate-fade-in-up w-full max-w-5xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/80">
              חוויה קולינרית של מתיקות יוקרתית
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif font-normal text-white tracking-tight mb-8 drop-shadow-2xl leading-[0.9] md:leading-[0.85]">
            האמנות שב<span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#F5F2EB] to-[#FFD700] animate-gradient-x">שוקולד.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-base md:text-xl text-white/70 font-light leading-relaxed mb-12 text-shadow-lg">
            מזרחי מחסן ממתקים מציג את פסגת המותגים הבינלאומיים. <br className="hidden md:block"/>
            איכות בלתי מתפשרת, טעמים נדירים וחוויה שמתחילה במבט ראשון.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center">
            <a 
              href="#products" 
              onClick={(e) => handleNavClick(e, 'products')}
              className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 bg-white text-[#0a0502] rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] hover:bg-[#00A8B5] hover:text-white transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(0,168,181,0.3)]"
            >
              גלו את הקולקציה
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 bg-transparent border border-white/20 text-white rounded-full text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#00A8B5]/20 hover:border-[#00A8B5]/50 transition-all duration-500 backdrop-blur-sm"
            >
              הסיפור שלנו
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
