
import React from 'react';
import ServiceCard from './ServiceCard';
import { Laptop, Search, BarChart3, PenTool, Smartphone, Bot } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "SEO",
      description: "Boost your website's visibility in search results with our data-driven search engine optimization strategies.",
      icon: <Search size={28} />
    },
    {
      title: "Social Media Management",
      description: "Engage your audience and build brand awareness with our strategic social media planning and execution.",
      icon: <Smartphone size={28} />
    },
    {
      title: "PPC",
      description: "Drive targeted traffic and maximize ROI with our expert pay-per-click advertising campaigns.",
      icon: <BarChart3 size={28} />
    },
    {
      title: "Web Design",
      description: "Create stunning, responsive websites that deliver exceptional user experiences and drive conversions.",
      icon: <Laptop size={28} />
    },
    {
      title: "Graphic Design",
      description: "Communicate your brand message with eye-catching visuals that resonate with your target audience.",
      icon: <PenTool size={28} />
    },
    {
      title: "AI Automation",
      description: "Streamline your processes and boost efficiency with cutting-edge AI solutions and automation tools.",
      icon: <Bot size={28} />
    }
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-hyperlink-light/60 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-hyperlink-light border border-hyperlink-primary/10 text-hyperlink-primary text-sm font-medium animate-fade-in">
            Services We Offer
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Strategic <span className="text-gradient">Digital Solutions</span> for Your Business
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We help businesses grow with comprehensive digital marketing strategies and innovative technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-fade-in-up" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
