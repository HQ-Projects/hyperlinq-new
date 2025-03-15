import React from 'react';
import ServicePageLayout from '@/layouts/ServicePageLayout';
import { Check, ArrowRight } from 'lucide-react';

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
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="text-primary mt-1 shrink-0" />
                  <p>Brand identity design and logo creation</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-primary mt-1 shrink-0" />
                  <p>Marketing materials and social media graphics</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-primary mt-1 shrink-0" />
                  <p>Custom illustrations and infographics</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/graphic-design-service.jpg" 
                alt="Graphic Design Services" 
                className="rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default GraphicDesignPage;