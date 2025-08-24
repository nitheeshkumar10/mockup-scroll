import React, { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsConditions = () => {
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
              <h1 className="text-hero">Terms & Conditions</h1>
              <p className="text-subtitle text-apple-gray">
                Last updated: January 2024
              </p>
            </header>

            <div className="space-y-8 text-apple-dark leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">Acceptance of Terms</h2>
                <p>
                  By downloading, installing, or using the eWarrants mobile application, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">Service Description</h2>
                <p>
                  eWarrants is a digital receipt and warranty management application that allows users to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Scan and digitize paper receipts</li>
                  <li>Store and organize warranty information</li>
                  <li>Receive notifications about warranty expirations</li>
                  <li>Access their digital receipt collection</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">User Responsibilities</h2>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Account Security</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You are responsible for maintaining the confidentiality of your account</li>
                    <li>You must notify us immediately of any unauthorized use</li>
                    <li>You are responsible for all activities under your account</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold">Acceptable Use</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the service only for legitimate purposes</li>
                    <li>Do not upload false or misleading information</li>
                    <li>Respect intellectual property rights</li>
                    <li>Do not attempt to reverse engineer the application</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">Intellectual Property</h2>
                <p>
                  The eWarrants application and all related content, features, and functionality are owned by eWarrants Inc. and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">Disclaimers</h2>
                <p>
                  While we strive for accuracy, eWarrants is provided "as is" without warranties of any kind. We do not guarantee the accuracy of scanned receipt information or warranty dates.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">Limitation of Liability</h2>
                <p>
                  In no event shall eWarrants Inc. be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">Termination</h2>
                <p>
                  We may terminate or suspend your account at any time for violations of these terms. You may also terminate your account at any time by contacting our support team.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or in-app notification.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-apple-dark">Contact Information</h2>
                <p>
                  For questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-apple-ultra-light p-6 rounded-xl">
                  <p><strong>Email:</strong> legal@ewarrants.com</p>
                  <p><strong>Address:</strong> eWarrants Inc., 123 Tech Street, San Francisco, CA 94105</p>
                  <p><strong>Phone:</strong> (555) 123-4567</p>
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

export default TermsConditions;