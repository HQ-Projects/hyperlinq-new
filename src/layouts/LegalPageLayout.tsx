import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface LegalPageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  children,
  title,
  subtitle,
  backgroundImage = '/images/policy-bg.jpg',
}) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt={title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/90"></div>
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
      {children}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LegalPageLayout;