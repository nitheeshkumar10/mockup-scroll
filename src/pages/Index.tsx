import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';
import mockupScan from '@/assets/mockup-scan.png';
import mockupDetails from '@/assets/mockup-details.png';
import mockupNotifications from '@/assets/mockup-notifications.png';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Feature: Scan Receipts */}
      <FeatureSection
        subtitle="Capture"
        title="Scan receipts instantly"
        description="Simply point your camera at any receipt or warranty card. Our advanced AI technology instantly captures and digitizes all the important information, making it searchable and organized."
        mockupSrc={mockupScan}
        mockupAlt="eWarrants Scan Feature"
        ctaText="Learn More"
        ctaLink="#"
      />

      {/* Feature: Manage Warranties */}
      <FeatureSection
        subtitle="Organize"
        title="Manage all your warranties"
        description="Keep track of every purchase with detailed warranty information. See expiration dates, store details, and purchase history all in one beautifully organized digital wallet."
        mockupSrc={mockupDetails}
        mockupAlt="eWarrants Warranty Details"
        reverse
        ctaText="Explore Features"
        ctaLink="#"
      />

      {/* Feature: Smart Notifications */}
      <FeatureSection
        subtitle="Never Miss"
        title="Smart warranty reminders"
        description="Get timely notifications before your warranties expire. Never miss an opportunity to use your warranty coverage or extended protection plans."
        mockupSrc={mockupNotifications}
        mockupAlt="eWarrants Notifications"
        ctaText="Get Started"
        ctaLink="#"
      />

      {/* Call to Action Section */}
      <section className="section-padding bg-apple-ultra-light">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="fade-in-up space-y-8">
            <h2 className="text-feature leading-tight">
              Ready to go digital?
            </h2>
            <p className="text-subtitle text-apple-gray">
              Join thousands of users who have already transformed their receipt management experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="btn-apple btn-primary inline-flex items-center justify-center gap-3 text-lg px-8 py-4"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </a>
              <a 
                href="#" 
                className="btn-apple btn-secondary inline-flex items-center justify-center gap-3 text-lg px-8 py-4"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.4552 0-.8114-.0773-1.0686-.2318-.2572-.1545-.3858-.3971-.3858-.7279 0-.3308.1286-.5734.3858-.7279.2572-.1545.6134-.2318 1.0686-.2318s.8114.0773 1.0686.2318c.2572.1545.3858.3971.3858.7279 0 .3308-.1286.5734-.3858.7279-.2572.1545-.6134.2318-1.0686.2318zm-9.0464 0c-.4552 0-.8114-.0773-1.0686-.2318-.2572-.1545-.3858-.3971-.3858-.7279 0-.3308.1286-.5734.3858-.7279.2572-.1545.6134-.2318 1.0686-.2318s.8114.0773 1.0686.2318c.2572.1545.3858.3971.3858.7279 0 .3308-.1286.5734-.3858.7279-.2572.1545-.6134.2318-1.0686.2318zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
                Download for Android
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
