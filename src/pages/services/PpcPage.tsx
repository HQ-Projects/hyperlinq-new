import React from 'react';
import ServicePageLayout from '@/layouts/ServicePageLayout';
import { Check, ArrowRight, BarChart3, Target, TrendingUp } from 'lucide-react';
import ProcessSection from '@/components/ProcessSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import { defaultReasons } from '@/data/whyChooseUsData';

const PpcPage = () => {
  return (
    <ServicePageLayout
      title="PPC Services"
      subtitle="Drive targeted traffic and maximize ROI with our expert pay-per-click advertising campaigns"
      backgroundImage="/images/ppc-bg.jpg"
    >
      {/* Overview Section */}
      <section className="py-16 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Strategic PPC Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our PPC services help businesses drive immediate, targeted traffic to their websites
                and maximize return on ad spend. We create data-driven campaigns across multiple
                platforms to reach your ideal customers at the right time.
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
                src="/images/ppc-illustration.svg" 
                alt="PPC Services" 
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our PPC Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-hyperlink-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Google Ads Management</h3>
              <p className="text-gray-600 mb-4">
                Strategic Google Ads campaigns that target high-intent keywords and drive qualified traffic.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Search campaign optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Display network advertising</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Shopping ads management</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 2 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-hyperlink-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Social Media Advertising</h3>
              <p className="text-gray-600 mb-4">
                Targeted social media ad campaigns that reach your ideal audience with precision.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Facebook & Instagram ads</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">LinkedIn advertising</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Custom audience targeting</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 3 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-hyperlink-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Conversion Optimization</h3>
              <p className="text-gray-600 mb-4">
                Maximize your ad spend by improving landing pages and conversion paths.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Landing page optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">A/B testing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Conversion tracking setup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <ProcessSection 
        title="Our PPC Campaign Process"
        steps={[
          {
            number: "01",
            title: "Research & Strategy",
            description: "We analyze your market, competitors, and target audience to develop a tailored PPC strategy."
          },
          {
            number: "02",
            title: "Campaign Setup",
            description: "Our team builds optimized campaigns with targeted ad groups, keywords, and compelling ad copy."
          },
          {
            number: "03",
            title: "Monitoring & Optimization",
            description: "We continuously monitor performance and make data-driven adjustments to improve results."
          },
          {
            number: "04",
            title: "Reporting & Analysis",
            description: "Detailed reports show campaign performance, ROI, and actionable insights for future growth."
          }
        ]}
      />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs 
        title="Why Choose Our PPC Services" 
        subtitle="Partner with us for data-driven PPC campaigns that deliver results"
        reasons={defaultReasons} 
      />
    </ServicePageLayout>
  );
};

export default PpcPage;