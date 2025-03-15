import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import Contact from '@/components/Contact';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Blog Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-hyperlink-primary/10 to-hyperlink-secondary/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-hyperlink-light/40 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Latest insights, trends, and strategies in digital marketing and technology
          </p>
        </div>
      </section>
      
      {/* Blog Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog post placeholders - replace with actual blog posts */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <p className="text-sm text-hyperlink-primary mb-2">Category • Date</p>
                  <h3 className="text-xl font-bold mb-2">Blog Post Title</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <a href="#" className="text-hyperlink-primary font-medium hover:underline">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CtaSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Blog;