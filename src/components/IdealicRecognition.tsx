
import React from 'react';
import { ArrowRight } from 'lucide-react';

const IdealicRecognition = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-hyperlink-light/30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Educational Partnerships
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Sharing knowledge and expertise with the next generation of business leaders
          </p>
        </div>
        
        <div className="glass-panel p-6 rounded-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-hyperlink-light border border-hyperlink-primary/10 text-hyperlink-primary text-sm font-medium mb-4">
                Featured Partnership
              </div>
              <h3 className="text-xl font-bold mb-3">Guest Speaker at Idealic Institute of Management, Indore</h3>
              <p className="text-gray-600 mb-4">
                Our founder was invited as a distinguished guest speaker at the Idealic Institute of Management in Indore, 
                sharing insights on digital marketing strategies and entrepreneurship with the next generation of business leaders.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Education</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Digital Marketing</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Mentorship</span>
              </div>
              <a href="/about" className="inline-flex items-center text-hyperlink-primary hover:underline">
                Learn more about our industry recognition
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="aspect-square">
                  <img 
                    src="/Events/Idealic College.jpg" 
                    alt="Speaking at Idealic Institute" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="aspect-square">
                  <img 
                    src="/Events/Idealic College 2.jpg" 
                    alt="Idealic Institute event" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealicRecognition;