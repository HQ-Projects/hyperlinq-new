import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import Contact from '@/components/Contact';

interface ServicePageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  children,
  title,
  subtitle,
  backgroundImage = '/images/service-bg.jpg',
}) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section for Service Pages */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-hyperlink-primary/10 to-hyperlink-secondary/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-hyperlink-light/40 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl"></div>
          {backgroundImage && (
            <div className="absolute inset-0 opacity-5">
              <img 
                src={backgroundImage} 
                alt="Background" 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>
      
      {/* Standard Sections */}
      <CtaSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default ServicePageLayout;