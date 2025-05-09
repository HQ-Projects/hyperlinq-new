import React from 'react';
import LegalPageLayout from '@/layouts/LegalPageLayout';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import { getSeoConfig } from '@/utils/seo';

const TermsOfService = () => {
  return (
    <>
      <Seo config={getSeoConfig('terms')} />
      <LegalPageLayout
        title="Terms of Service"
        subtitle="The rules and guidelines for using our services"
        backgroundImage="/images/policy-bg.jpg"
      >
        {/* Policy Content */}
        <section className="py-16 relative">
          <div className="container-custom">
            <div className="glass-panel rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Terms of Service - Hyperlinq Technology</h2>
              <p className="text-gray-700 mb-6">
                Please read these Terms of Service carefully before using the Hyperlinq Technology website or services. 
                These terms govern your use of our website and services.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">1. Acceptance of Terms</h3>
                <p className="text-gray-700">
                  By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">2. Services Description</h3>
                <p className="text-gray-700">
                  Hyperlinq Technology provides digital marketing services, including but not limited to SEO, social media marketing, paid advertising, website development, and software integrations. The specific services provided will be outlined in a separate agreement or statement of work.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">3. User Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You are responsible for providing accurate and complete information necessary for service delivery.</li>
                  <li>You must maintain the confidentiality of any account credentials provided to you.</li>
                  <li>You agree not to use our services for any illegal or unauthorized purpose.</li>
                  <li>You are responsible for ensuring that your content does not infringe on third-party rights.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">4. Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Payment terms will be specified in your service agreement or invoice.</li>
                  <li>All fees are non-refundable unless otherwise specified in our Refund Policy.</li>
                  <li>Late payments may result in service suspension or termination.</li>
                  <li>Prices are subject to change with notice for ongoing services.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">5. Intellectual Property</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We retain ownership of our proprietary tools, processes, and methodologies.</li>
                  <li>You retain ownership of your content and materials provided to us.</li>
                  <li>You grant us a license to use your materials as necessary to provide our services.</li>
                  <li>Upon full payment, you will receive rights to deliverables as specified in your service agreement.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">6. Limitation of Liability</h3>
                <p className="text-gray-700">
                  To the maximum extent permitted by law, Hyperlinq Technology shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amounts paid by you for the services in question.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">7. Termination</h3>
                <p className="text-gray-700">
                  Either party may terminate services as specified in the service agreement. Upon termination, you remain responsible for any outstanding payments, and we will provide reasonable assistance in transitioning services.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">8. Governing Law</h3>
                <p className="text-gray-700">
                  These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">9. Changes to Terms</h3>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms of Service at any time. We will notify you of significant changes by posting an updated version on our website.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">10. Contact Information</h3>
                <p className="text-gray-700">
                  If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@hyperlinq.in" className="text-hyperlink-primary hover:underline">legal@hyperlinq.in</a>.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <p className="text-gray-600 italic">Effective Date: 25 March 2025</p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <a href="/contact" className="btn-primary flex items-center">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </LegalPageLayout>
    </>
  );
};

export default TermsOfService;