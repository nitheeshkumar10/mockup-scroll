import React, { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (pageRef.current) {
      const elements = pageRef.current.querySelectorAll('.fade-in-up');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div ref={pageRef} className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="fade-in-up space-y-8">
            <header className="text-center space-y-4 mb-12">
              <h1 className="text-hero">Privacy Policy</h1>
              <p className="text-subtitle text-apple-gray">
                Last updated: January 2024
              </p>
            </header>

            <div className="space-y-8 text-apple-dark leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">Information We Collect</h2>
                <p>
                  At eWarrants, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application and services.
                </p>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Account information (email address, username)</li>
                    <li>Profile information you choose to provide</li>
                    <li>Receipt and warranty information you upload</li>
                    <li>Purchase history and product details</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and maintain our service</li>
                  <li>To process and organize your digital receipts</li>
                  <li>To send warranty expiration notifications</li>
                  <li>To improve our app functionality</li>
                  <li>To provide customer support</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is encrypted both in transit and at rest.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">Your Rights</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your account and data</li>
                  <li>Export your data</li>
                  <li>Opt-out of communications</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-apple-ultra-light p-6 rounded-xl">
                  <p><strong>Email:</strong> privacy@ewarrants.com</p>
                  <p><strong>Address:</strong> eWarrants Inc., 123 Tech Street, San Francisco, CA 94105</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;