
import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

// Helper component for social icons
const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'facebook':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      );
    default:
      return null;
  }
};

const Contact = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Ensure the iframe is properly sized
    const resizeIframe = () => {
      if (iframeRef.current) {
        // Force a minimum height to ensure visibility
        iframeRef.current.style.height = '1500px';
      }
    };
    
    // Initial resize and add window resize listener
    resizeIframe();
    window.addEventListener('resize', resizeIframe);
    
    // Cleanup
    return () => window.removeEventListener('resize', resizeIframe);
  }, []);

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: 'Call Us',
      content: '+91 8823831234',
      link: 'tel:+918823831234'
    },
    {
      icon: <Mail size={20} />,
      title: 'Email Us',
      content: 'info@hyperlinq.in',
      link: 'mailto:info@hyperlinq.in'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Visit Us',
      content: '201, Princess Business Skypark, A.B. Road, Indore',
      link: 'https://maps.google.com/?q=Princess+Business+Skypark+Indore'
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMDEwMTAiIHN0cm9rZS13aWR0aD0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')] opacity-30"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-hyperlink-light border border-hyperlink-primary/10 text-hyperlink-primary text-sm font-medium animate-fade-in">
            Get In Touch
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Let's Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Have questions or ready to elevate your digital marketing strategy? We're here to help.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <iframe 
                ref={iframeRef}
                src="https://forms.blue.cc/f/hjdvh1wbfl8ccbtm3orohopy" 
                width="100%" 
                height="645" 
                style={{ border: 'none', overflow: 'hidden' }}
                title="Contact Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.icon.type === MapPin ? "_blank" : undefined}
                rel={info.icon.type === MapPin ? "noopener noreferrer" : undefined}
                className="glass-panel rounded-2xl p-6 flex items-start gap-4 hover:shadow-medium transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-hyperlink-light flex items-center justify-center text-hyperlink-primary group-hover:bg-hyperlink-primary group-hover:text-white transition-colors duration-300">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              </a>
            ))}
            
            <div className="glass-panel rounded-2xl p-6 mt-6">
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { name: 'linkedin', href: 'https://www.linkedin.com/company/hyperlinq-technology/' },
                  { name: 'facebook', href: 'https://www.facebook.com/hyperlinqtechnology/' },
                  { name: 'instagram', href: 'https://www.instagram.com/hyperlinq_technology/' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-hyperlink-light flex items-center justify-center text-hyperlink-primary hover:bg-hyperlink-primary hover:text-white transition-colors duration-300"
                  >
                    <SocialIcon type={social.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
