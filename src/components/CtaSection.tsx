
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-hyperlink-primary/5 to-hyperlink-secondary/5"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-hyperlink-light/60 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="glass-panel rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-hyperlink-light/30 to-white/10 mix-blend-overlay"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex-1 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to <span className="text-gradient">Transform</span> Your Digital Presence?
              </h2>
              <p className="text-gray-600 max-w-lg">
                Get a free consultation and discover how our strategic digital marketing solutions can elevate your business.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <a 
               href="https://tidycal.com/hyperlinq/30-minutes-free-good-sales-meeting" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-flex items-center px-6 py-4 rounded-xl text-white font-medium bg-gradient-to-r from-hyperlink-primary to-hyperlink-secondary shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule a Call
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
