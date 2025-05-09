import React from 'react';
import ServicePageLayout from '@/layouts/ServicePageLayout';
import { Check, ArrowRight } from 'lucide-react';

const DigitalMarketingPage = () => {
  return (
    <ServicePageLayout
      title="Digital Marketing Services"
      subtitle="Strategic marketing solutions to grow your online presence and drive measurable results"
      backgroundImage="/images/digital-marketing-bg.jpg"
    >
      {/* Overview Section */}
      <section className="py-16 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Digital Marketing Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our digital marketing services are designed to help businesses of all sizes establish a strong online presence, 
                reach their target audience, and achieve measurable growth. We combine data-driven strategies with creative 
                execution to deliver results that matter.
              </p>
              <div className="flex items-center">
                <a href="#contact" className="btn-primary flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-hyperlink-light/30 to-white/10 mix-blend-overlay"></div>
              <img 
                src="/images/digital-marketing-illustration.svg" 
                alt="Digital Marketing" 
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-hyperlink-light/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Digital Marketing Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-hyperlink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Search Engine Optimization</h3>
              <p className="text-gray-700 mb-4">
                Improve your website's visibility in search results with our data-driven SEO strategies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Keyword research & strategy</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>On-page & technical SEO</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Link building & content strategy</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 2 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-hyperlink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Email Marketing</h3>
              <p className="text-gray-700 mb-4">
                Engage your audience and drive conversions with personalized email campaigns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Campaign strategy & design</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Automation & drip campaigns</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Performance analytics</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 3 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-hyperlink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Social Media Marketing</h3>
              <p className="text-gray-700 mb-4">
                Build brand awareness and engage with your audience across social platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Platform strategy & content creation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Community management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Paid social campaigns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 relative">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Proven Process</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-hyperlink-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-gray-700">
                We analyze your business, goals, target audience, and competitors to develop a tailored strategy.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-hyperlink-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-bold mb-3">Strategy</h3>
              <p className="text-gray-700">
                We create a comprehensive marketing plan with clear objectives, timelines, and KPIs.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-hyperlink-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-bold mb-3">Execution</h3>
              <p className="text-gray-700">
                Our team implements the strategy with precision, creativity, and attention to detail.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-hyperlink-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
              <h3 className="text-xl font-bold mb-3">Optimization</h3>
              <p className="text-gray-700">
                We continuously monitor, analyze, and refine our approach to maximize results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default DigitalMarketingPage;