import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import CtaSection from '../components/CtaSection';

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  seoConfig: {
    title: string;
    description: string;
    keywords: string;
    ogImage: string;
  };
  heroData: {
    title: string;
    subtitle: string;
    image: string;
    stats?: Array<{
      value: string;
      label: string;
    }>;
  };
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  children,
  seoConfig,
  heroData,
}) => {
  return (
    <div className="min-h-screen">
      <Seo config={seoConfig} />
      <Navbar />
      
      {/* Hero Section with proper spacing */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-hyperlink-accent font-medium uppercase tracking-wider mb-2 block">Case Study</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{heroData.title}</h1>
              <p className="text-xl text-gray-700 mb-8">
                {heroData.subtitle}
              </p>
              {heroData.stats && (
                <div className="flex flex-wrap gap-4">
                  {heroData.stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-soft px-4 py-3">
                      <span className="block text-hyperlink-primary font-bold text-2xl">{stat.value}</span>
                      <span className="text-sm text-gray-600">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={heroData.image} 
                alt={heroData.title} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      {children}
      
      <CtaSection />
      <Footer />
    </div>
  );
};

export default CaseStudyLayout;