import React from 'react';
import ServicePageLayout from '@/layouts/ServicePageLayout';
import { Check, ArrowRight } from 'lucide-react';
import ProcessSection from '@/components/ProcessSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import { seoReasons } from '@/data/whyChooseUsData';

const SeoPage = () => {
  return (
    <ServicePageLayout
      title="SEO Services"
      subtitle="Boost your website's visibility in search results with our data-driven search engine optimization strategies"
      backgroundImage="/images/seo-bg.jpg"
    >
      {/* Overview Section */}
      <section className="py-16 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Strategic SEO Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our SEO services are designed to improve your website's visibility in search engine results, 
                drive organic traffic, and increase conversions. We use data-driven strategies and best practices 
                to help your business rank higher for relevant keywords.
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
                src="/images/seo-illustration.svg" 
                alt="SEO Services" 
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our SEO Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-hyperlink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Keyword Research</h3>
              <p className="text-gray-600 mb-4">
                Identify high-value keywords that your target audience is searching for.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Competitor keyword analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Search volume research</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Long-tail keyword opportunities</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 2 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-hyperlink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">On-Page SEO</h3>
              <p className="text-gray-600 mb-4">
                Optimize your website's content and structure to improve search engine rankings.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Content optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Meta tag optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>URL structure improvements</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 3 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-hyperlink-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Technical SEO</h3>
              <p className="text-gray-600 mb-4">
                Improve your website's technical aspects to enhance search engine crawling and indexing.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Site speed optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Mobile-friendly improvements</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-hyperlink-primary mr-2 mt-0.5" />
                  <span>Schema markup implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs 
        title="Why Choose Our SEO Services" 
        reasons={seoReasons} 
      />
      
      {/* Process Section */}
      <ProcessSection />
      
    </ServicePageLayout>
  );
};

export default SeoPage;