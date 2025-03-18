import React from 'react';
import LegalPageLayout from '@/layouts/LegalPageLayout';
import { ArrowRight } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <LegalPageLayout
      title="Refund Policy"
      subtitle="Our commitment to fair and transparent refund practices"
      backgroundImage="/images/policy-bg.jpg"
    >
      {/* Policy Content */}
      <section className="py-16 relative">
        <div className="container-custom">
          <div className="glass-panel rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Refund Policy - Hyperlinq Technology</h2>
            <p className="text-gray-700 mb-6">
              At Hyperlinq Technology, we strive to deliver high-quality digital marketing services tailored to your business needs. 
              Our refund policy is designed to be fair and transparent while considering the nature of digital services, third-party costs, and associated taxes.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">1. General Refund Policy</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Due to the nature of digital marketing services, all payments made for services are non-refundable once work has commenced.</li>
                <li>Refund requests must be submitted within 7 days of payment, provided that no work has been initiated.</li>
                <li>If a service is canceled before execution, a partial refund may be considered after deducting administrative and processing fees.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">2. Refunds for Specific Services</h3>
              
              <h4 className="text-lg font-semibold mt-4 mb-2">A. SEO & Social Media Marketing</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>No refunds are provided once an SEO or social media campaign has started.</li>
                <li>If cancellation is requested within the first 5 days, we may offer a pro-rated refund, deducting work completed and setup costs.</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">B. Paid Advertising (Google, Facebook, LinkedIn Ads, etc.)</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Third-party ad spend paid directly to platforms like Google, Facebook, or LinkedIn is non-refundable.</li>
                <li>Our management fee is non-refundable once ad campaign setup and optimization have begun.</li>
                <li>If a campaign has not been launched, a 50% refund of the management fee may be granted.</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">C. Website & Landing Page Development</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>If a project is canceled before design work begins, a 70% refund is applicable.</li>
                <li>Once the design phase starts, no refunds will be issued.</li>
                <li>If development issues arise from our side and remain unresolved within 30 days, a partial refund may be considered.</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">D. Software & Tech Integrations</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Subscription-based tools, CRM, and automation software purchased through us are non-refundable.</li>
                <li>Third-party API and plugin integration costs are non-refundable.</li>
                <li>If a software integration is incomplete due to our limitations, we may provide a partial refund based on the remaining work.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">3. Third-Party Payments & Taxes</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Payments made to third-party platforms (hosting, domain registration, email services, etc.) are non-refundable.</li>
                <li>Any transaction fees, including payment gateway charges, are non-refundable.</li>
                <li>GST and other applicable taxes collected on payments are non-refundable as per government regulations.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">4. Dispute Resolution</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>If you believe you are eligible for a refund, you must email us at support@hyperlinq.in with detailed reasons and supporting documentation.</li>
                <li>Refund requests will be reviewed within 10 business days.</li>
                <li>Approved refunds will be processed within 7-14 business days via the original payment method.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">5. Changes to This Policy</h3>
              <p className="text-gray-700">
                Hyperlinq Technology reserves the right to modify this refund policy at any time. Clients will be notified of any changes via email or website updates.
              </p>
              <p className="text-gray-700 mt-4">
                For any refund-related queries, please contact <a href="mailto:support@hyperlinq.in" className="text-hyperlink-primary hover:underline">support@hyperlinq.in</a>.
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

export default RefundPolicy;