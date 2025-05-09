import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Contact Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-hyperlink-primary/10 to-hyperlink-secondary/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-hyperlink-light/40 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            We're here to help with all your digital marketing needs. Reach out to us today.
          </p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <Contact />
      
      <Footer />
    </div>
  );
};

export default ContactPage;