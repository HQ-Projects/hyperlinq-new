
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedCard from './AnimatedCard';
import { CheckCircle, Trophy, Users, Globe } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';

const About = () => {
  const stats = [
    { 
      icon: <Users size={24} className="text-green-500" />,
      value: "320+",
      label: "Happy Clients"
    },
    { 
      icon: <Trophy size={24} className="text-yellow-500" />,
      value: "10+",
      label: "Awards Won"
    },
    { 
      icon: <CheckCircle size={24} className="text-blue-500" />,
      value: "1000+",
      label: "Projects Completed"
    },
    { 
      icon: <Globe size={24} className="text-purple-500" />,
      value: "10+",
      label: "Years Experience"
    }
  ];

  const features = [
    "Data-driven strategies tailored to your business goals",
    "Comprehensive analytics and performance reporting",
    "Dedicated team of marketing and design experts",
    "Advanced AI tools for process automation",
    "Continuous optimization for maximum ROI",
    "Transparent communication throughout each project"
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMDEwMTAiIHN0cm9rZS13aWR0aD0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')] opacity-30"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 md:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-hyperlink-light border border-hyperlink-primary/10 text-hyperlink-primary text-sm font-medium animate-fade-in-left">
              Who We Are
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
              Digital Excellence, <span className="text-gradient">Measurable Results</span>
            </h2>
            
            <p className="text-lg text-gray-600 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
              Hyperlinq Technology is a premier digital marketing agency dedicated to helping businesses grow their online presence. We combine strategic thinking with technical expertise to deliver solutions that drive real results.
            </p>
            
            <ul className="space-y-4 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-hyperlink-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">{feature}</p>
                </li>
              ))}
            </ul>
            
            <div className="animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
              <Link to="/about" className="btn-primary mt-4">
                Learn More About Us
              </Link>
            </div>
          </div>
          
          <div className="md:order-1">
            <div className="relative animate-fade-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-hyperlink-primary/5 to-hyperlink-secondary/5 rounded-3xl blur-xl"></div>
              <AnimatedCard className="relative glass-panel rounded-2xl overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0"></div>
                <div className="p-6 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-hyperlink-primary text-white text-2xl font-bold">H</div>
                    <h3 className="text-2xl font-bold mt-3">Hyperlinq Technology</h3>
                    <p className="text-gray-600">Digital Marketing Agency</p>
                  </div>
                  
                  <AspectRatio ratio={16/10} className="mb-6 rounded-xl overflow-hidden bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Our Team" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    {stats.map((stat, index) => (
                      <div key={index} className="bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-white/30 text-center">
                        <div className="mx-auto w-8 h-8 flex items-center justify-center mb-1">
                          {stat.icon}
                        </div>
                        <div className="text-lg font-bold">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
