import React from 'react';
import { Check } from 'lucide-react';

interface WhyChooseUsProps {
  title?: string;
  reasons: {
    title: string;
    description: string;
  }[];
}

const WhyChooseUs = ({ 
  title = "Why Choose Us", 
  reasons 
}: WhyChooseUsProps) => {
  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-hyperlink-light/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="glass-panel rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-hyperlink-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-hyperlink-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-700">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;