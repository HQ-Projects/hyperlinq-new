import React from 'react';
import { ArrowRight } from 'lucide-react';

const IndustryRecognition = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-hyperlink-light/30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Recognized By Industry Leaders
          </h2>
        </div>
        
        <div className="flex justify-center items-center">
          <a 
            href="https://www.designrush.com/agency/profile/hyperlinq-technology" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block cursor-pointer"
          >
            <div className="bg-[#1B1B1B] rounded-xl p-6 shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300">
              <img
                src="/brand-logos/designrush-new-logo.svg"
                alt="DesignRush"
                width="200"
                height="45"
                className="h-auto"
              />
            </div>
          </a>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Featured on DesignRush as a Top Digital Marketing Agency
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-xl font-bold mb-6 text-center">Educational Partnerships</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="md:w-1/3">
              <img 
                src="/Events/Idealic College.jpg" 
                alt="Speaking at Idealic Institute" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
            <div className="md:w-1/2">
              <h4 className="text-lg font-semibold mb-2">Guest Speaker at Idealic Institute of Management</h4>
              <p className="text-gray-600">
                Sharing digital marketing expertise with future business leaders in Indore
              </p>
              <a href="/about" className="inline-flex items-center mt-3 text-hyperlink-primary hover:underline">
                Learn more about our industry recognition
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-xl shadow-md">
            <img 
              src="/Events/Idealic College 2.jpg" 
              alt="Idealic Institute event" 
              className="w-full h-64 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img 
              src="/Events/Idealic College.jpg" 
              alt="Speaking at Idealic Institute" 
              className="w-full h-64 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryRecognition;