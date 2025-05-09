import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { getSeoConfig } from '../utils/seo';
import AnimatedCard from '../components/AnimatedCard';
import CtaSection from '../components/CtaSection';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "SEO Success for Shree Hari Yoga School",
      category: "SEO",
      description: "How we helped Shree Hari Yoga School increase enrollment in their YTTC programs through strategic SEO.",
      image: "/images/case-studies/shree-hari-yoga.jpg",
      link: "/case-studies/shree-hari-yoga-seo"
    },
    {
      title: "E-commerce Revenue Growth for Ahiclothing",
      category: "SEO & PPC",
      description: "How we helped Ahiclothing increase revenue by implementing an integrated SEO and PPC strategy.",
      image: "/images/case-studies/ahiclothing.jpg",
      link: "/case-studies/ahiclothing-ecommerce"
    }
    // Add more case studies as needed
  ];

  return (
    <div className="min-h-screen">
      <Seo config={getSeoConfig('caseStudies')} />
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Success Stories</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore how we've helped businesses achieve remarkable results through our strategic digital marketing solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <AnimatedCard key={index} className="bg-white border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={study.image || "/images/placeholder-case-study.jpg"} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-hyperlink-accent font-medium uppercase tracking-wider mb-2">{study.category}</span>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <a 
                    href={study.link} 
                    className="inline-flex items-center text-hyperlink-primary hover:text-hyperlink-secondary font-medium transition-colors duration-300 group"
                  >
                    Read Case Study
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
                  </a>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
      
      <CtaSection />
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;