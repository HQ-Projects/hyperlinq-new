import React from 'react';
import ServicePageLayout from '@/layouts/ServicePageLayout';
import { Check, ArrowRight } from 'lucide-react';
import ProcessSection from '@/components/ProcessSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import { socialMediaReasons } from '@/data/whyChooseUsData';

const SocialMediaPage = () => {
  return (
    <ServicePageLayout
      title="Social Media Management"
      subtitle="Engage your audience and build brand awareness with our strategic social media planning and execution"
      backgroundImage="/images/social-media-bg.jpg"
    >
      {/* Overview Section */}
      <section className="py-16 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Strategic Social Media Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our social media management services help businesses build meaningful connections with their audience, 
                increase brand awareness, and drive engagement across all major platforms. We create tailored strategies 
                that align with your business goals and resonate with your target audience.
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
                src="/images/social-media-illustration.svg" 
                alt="Social Media Management" 
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50 relative">
        <div className="container-custom relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Social Media Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-hyperlink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Strategy Development</h3>
              <p className="text-gray-700 mb-4">
                Custom social media strategies aligned with your business objectives.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Platform selection & audience analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Content calendar planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>KPI setting & performance tracking</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 2 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-hyperlink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Content Creation</h3>
              <p className="text-gray-700 mb-4">
                Engaging, on-brand content that resonates with your target audience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Graphics & video production</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Copywriting & caption creation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Hashtag research & optimization</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 3 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-hyperlink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Community Management</h3>
              <p className="text-gray-700 mb-4">
                Active engagement and relationship building with your audience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Comment & message management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Audience growth tactics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Crisis management & reputation monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs 
        title="Why Choose Our Social Media Services" 
        reasons={socialMediaReasons} 
      />
      
      {/* Process Section */}
      <ProcessSection />
      
    </ServicePageLayout>
  );
};

export default SocialMediaPage;