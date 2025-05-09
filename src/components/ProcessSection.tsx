import React from 'react';

const ProcessSection = () => {
  return (
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
              We create a comprehensive plan with clear objectives, timelines, and KPIs.
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
  );
};

export default ProcessSection;