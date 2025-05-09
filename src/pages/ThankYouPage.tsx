import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-hyperlink-primary/10 to-hyperlink-secondary/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-hyperlink-light/40 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank You!</h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Your message has been received. We appreciate you contacting Hyperlinq Technology, 
              and we'll get back to you shortly.
            </p>
            
            <div className="glass-panel rounded-xl p-6 mb-8">
              <p className="text-gray-700">
                While you wait, feel free to explore our services or check out our latest blog posts.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="btn-primary inline-flex items-center">
                <Home className="mr-2 h-4 w-4" /> Return to Home
              </Link>
              <Link to="/blog" className="btn-outline inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Browse Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ThankYouPage;