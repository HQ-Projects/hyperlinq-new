
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
import IndustryRecognition from '@/components/IndustryRecognition';
import Seo from '@/components/Seo';
import { getSeoConfig } from '@/utils/seo';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo config={getSeoConfig('home')} />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <IndustryRecognition />
      <CaseStudies />
      <Faq />
      <CtaSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
