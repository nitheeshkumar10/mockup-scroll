import React, { useEffect, useRef } from 'react';
import mockupHome from '@/assets/mockup-home.png';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.fade-in-up');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="pt-32 pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding text-center">
        {/* Logo */}
        <div className="fade-in-up mb-8">
          <img 
            src="/EWarrants.png" 
            alt="eWarrants Logo" 
            className="mx-auto max-w-sm h-auto"
          />
        </div>

        {/* Subtitle */}
        <h2 className="fade-in-up text-subtitle text-accent mb-12 max-w-2xl mx-auto">
          From paper receipt to digital peace of mind.
        </h2>

        {/* CTA Button */}
        <div className="fade-in-up mb-16">
          <a 
            href="#" 
            className="btn-apple btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on the App Store
          </a>
        </div>

        {/* Hero Image */}
        <div className="fade-in-up">
          <div className="relative inline-block">
            <img 
              src={mockupHome}
              alt="eWarrants App Screenshot"
              className="max-w-xs md:max-w-sm lg:max-w-md h-auto mx-auto drop-shadow-2xl"
            />
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-accent/10 to-transparent rounded-3xl blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;