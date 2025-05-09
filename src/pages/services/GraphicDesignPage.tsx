import React from 'react';
import ServicePageLayout from '@/layouts/ServicePageLayout';
import { Check, ArrowRight, PenTool, Image, Layout, Palette } from 'lucide-react';
import ProcessSection from '@/components/ProcessSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import { defaultReasons } from '@/data/whyChooseUsData';

const GraphicDesignPage = () => {
  return (
    <ServicePageLayout
      title="Graphic Design Services"
      subtitle="Create stunning visual assets that elevate your brand and captivate your audience"
      backgroundImage="/images/graphic-design-bg.jpg"
    >
      {/* Overview Section */}
      <section className="py-16 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Creative Graphic Design Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our graphic design services help businesses create visually compelling assets
                that strengthen brand identity and engage audiences. From logos to marketing
                materials, we deliver designs that make a lasting impression.
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
                src="/images/graphic-design-service.jpg" 
                alt="Graphic Design Services" 
                className="w-full h-auto relative z-10 rounded-lg"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Graphic Design Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <PenTool className="w-6 h-6 text-hyperlink-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Brand Identity Design</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive brand identity solutions that communicate your company's values and vision.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Logo design and variations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Color palette and typography</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Brand guidelines and assets</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 2 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <Layout className="w-6 h-6 text-hyperlink-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Marketing Materials</h3>
              <p className="text-gray-600 mb-4">
                Eye-catching marketing collateral that helps your business stand out from the competition.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Brochures and flyers</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Business cards and stationery</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Banners and signage</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 3 */}
            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <Image className="w-6 h-6 text-hyperlink-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Graphics</h3>
              <p className="text-gray-600 mb-4">
                Engaging digital assets optimized for web and social media platforms.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Social media graphics</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Email templates and banners</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Infographics and data visualization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 relative">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Design Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Brand Identity Design" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Marketing Materials" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Graphics" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection 
        title="Our Design Process"
        steps={[
          {
            number: "01",
            title: "Discovery",
            description: "We learn about your brand, goals, and target audience to inform our design approach."
          },
          {
            number: "02",
            title: "Concept Development",
            description: "Our designers create initial concepts based on your requirements and brand identity."
          },
          {
            number: "03",
            title: "Refinement",
            description: "We refine the chosen concept based on your feedback until it perfectly matches your vision."
          },
          {
            number: "04",
            title: "Delivery",
            description: "Final designs are delivered in all required formats, ready for immediate use."
          }
        ]}
      />

      {/* Why Choose Us */}
      <WhyChooseUs 
        title="Why Choose Our Graphic Design Services"
        subtitle="Partner with us for creative designs that elevate your brand"
        reasons={defaultReasons}
      />
    </ServicePageLayout>
  );
};

export default GraphicDesignPage;