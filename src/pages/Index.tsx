
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import Faq from '@/components/Faq';
import CtaSection from '@/components/CtaSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CaseStudies />
      <Faq />
      <CtaSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
