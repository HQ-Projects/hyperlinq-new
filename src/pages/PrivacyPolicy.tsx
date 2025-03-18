import React from 'react';
import LegalPageLayout from '@/layouts/LegalPageLayout';
import { ArrowRight } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Our commitment to protecting your personal information"
      backgroundImage="/images/policy-bg.jpg"
    >
      {/* Policy Content */}
      <section className="py-16 relative">
        <div className="container-custom">
          <div className="glass-panel rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy - Hyperlinq Technology</h2>
            <p className="text-gray-700 mb-6">
              At Hyperlinq Technology, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">1. Information We Collect</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and business information when you contact us or sign up for our services.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent.</li>
                <li><strong>Marketing Preferences:</strong> Your preferences for receiving marketing communications from us.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">2. How We Use Your Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To provide and maintain our services</li>
                <li>To communicate with you about our services, updates, and promotions</li>
                <li>To improve our website and services based on your feedback and interactions</li>
                <li>To analyze usage patterns and optimize user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">3. Information Sharing and Disclosure</h3>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Providers:</strong> We may share information with trusted third parties who assist us in operating our website and conducting our business.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, privacy, safety, or property.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">4. Cookies and Tracking Technologies</h3>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Remember your preferences and settings</li>
                <li>Understand how you interact with our website</li>
                <li>Improve our services based on usage patterns</li>
                <li>Deliver relevant content and advertisements</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">5. Data Security</h3>
              <p className="text-gray-700">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">6. Your Rights and Choices</h3>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Withdrawing consent for processing your information</li>
                <li>Opting out of marketing communications</li>
                <li>Requesting a copy of your personal data</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@hyperlinq.in" className="text-hyperlink-primary hover:underline">privacy@hyperlinq.in</a>.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">7. Changes to This Privacy Policy</h3>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a revised effective date.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">8. Contact Us</h3>
              <p className="text-gray-700">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:privacy@hyperlinq.in" className="text-hyperlink-primary hover:underline">privacy@hyperlinq.in</a>.
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
  );
};

export default PrivacyPolicy;