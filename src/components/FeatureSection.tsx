import React, { useEffect, useRef } from 'react';

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  mockupSrc: string;
  mockupAlt: string;
  reverse?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  description,
  mockupSrc,
  mockupAlt,
  reverse = false,
  ctaText,
  ctaLink
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target === contentRef.current) {
              target.classList.add('visible');
            }
            if (target === imageRef.current) {
              target.classList.add('visible');
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          {/* Content */}
          <div 
            ref={contentRef}
            className={`${reverse ? 'lg:col-start-2 slide-in-right' : 'slide-in-left'}`}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-accent font-medium uppercase tracking-wider text-sm">
                  {subtitle}
                </p>
                <h2 className="text-feature leading-tight">
                  {title}
                </h2>
              </div>
              <p className="text-subtitle text-apple-gray leading-relaxed">
                {description}
              </p>
              {ctaText && ctaLink && (
                <div className="pt-4">
                  <a 
                    href={ctaLink}
                    className="btn-apple btn-primary inline-flex items-center gap-2"
                  >
                    {ctaText}
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mockup */}
          <div 
            ref={imageRef}
            className={`${reverse ? 'lg:col-start-1 slide-in-left' : 'slide-in-right'} flex justify-center`}
          >
            <div className="relative">
              <img 
                src={mockupSrc}
                alt={mockupAlt}
                className="max-w-xs md:max-w-sm lg:max-w-md h-auto drop-shadow-2xl"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent rounded-3xl blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;