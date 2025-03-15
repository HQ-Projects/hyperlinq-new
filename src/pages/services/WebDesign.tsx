import React from 'react';
import ServicePageLayout from '@/layouts/ServicePageLayout';
import { Check, ArrowRight } from 'lucide-react';
import ProcessSection from '@/components/ProcessSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import { defaultReasons } from '@/data/whyChooseUsData';

const WebDesignPage = () => {
  return (
    <ServicePageLayout
      title="Web Design Services"
      subtitle="Custom, responsive websites designed to convert visitors into customers"
      backgroundImage="/images/web-design-bg.jpg"
    >
      {/* Overview Section */}
      <section className="py-16 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Modern Web Design Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our web design services focus on creating beautiful, functional websites that 
                drive results. We combine stunning visuals with intuitive user experiences to 
                help your business stand out online.
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
                src="/images/web-design-illustration.svg" 
                alt="Web Design" 
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Web Design Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-hyperlink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Responsive Web Design</h3>
              <p className="text-gray-600 mb-4">
                Mobile-friendly websites that look great on all devices and screen sizes.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Mobile-first approach</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Cross-browser compatibility</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Fluid layouts and grids</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 2 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-hyperlink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">
                User-centered design that enhances usability and creates delightful experiences.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>User research & personas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Wireframing & prototyping</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Usability testing</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 3 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-hyperlink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Development</h3>
              <p className="text-gray-600 mb-4">
                Tailored web solutions built with modern technologies for optimal performance.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>React & Next.js development</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>CMS integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>API development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs 
        title="Why Choose Our Web Design Services" 
        reasons={defaultReasons} 
      />
      
      {/* Process Section */}
      <ProcessSection />
    </ServicePageLayout>
  );
};

export default WebDesignPage;