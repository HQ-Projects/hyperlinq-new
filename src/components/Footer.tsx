
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '#services' },
        { name: 'Case Studies', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Community', href: '/community' },
        { name: 'Refund Policy', href: '/refund-policy' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'SEO', href: '/services/seo' },
        { name: 'Social Media', href: '#services' },
        { name: 'PPC', href: '/services/ppc' },
        { name: 'Web Design', href: '/services/web-design' }
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'info@hyperlinq.in', href: 'mailto:info@hyperlinq.in' },
        { name: '+91 8823831234', href: 'tel:+918823831234' },
        { name: 'Indore, India', href: '#' },
        { name: 'Contact Us', href: '/contact' }
      ]
    }
  ];
  
  const socialLinks = [
    { 
      name: 'linkedin', 
      href: 'https://www.linkedin.com/company/hyperlinq-technology/' 
    },
    { 
      name: 'facebook', 
      href: 'https://www.facebook.com/hyperlinqtechnology/' 
    },
    { 
      name: 'instagram', 
      href: 'https://www.instagram.com/hyperlinq_technology/' 
    }
  ];
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-hyperlink-light/30 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="@/public/hq-logo-normal.png" 
                alt="Hyperlinq Technology Logo" 
                className="h-12 md:h-16" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Try different paths
                  const paths = [
                    "hq-logo-normal.png",
                    "/hq-logo-normal.png",
                    "./hq-logo-normal.png",
                    "../public/hq-logo-normal.png",
                    "/public/hq-logo-normal.png",
                    "/assets/hq-logo-normal.png"
                  ];
                  
                  let currentPathIndex = paths.indexOf(target.src.split('/').pop() || "");
                  if (currentPathIndex < paths.length - 1) {
                    target.src = paths[currentPathIndex + 1];
                  } else {
                    // Final fallback to text if all paths fail
                    target.style.display = 'none';
                    const parent = target.parentNode as HTMLElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-xl font-bold text-hyperlink-primary">Hyperlinq</span><span class="text-xl font-bold">Technology</span>';
                    }
                  }
                }}
              />
            </div>
            
            <p className="text-gray-600 mb-6 max-w-md">
              We help businesses grow with comprehensive digital marketing strategies and innovative technologies tailored to your specific goals.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-hyperlink-primary hover:text-white hover:border-hyperlink-primary transition-colors duration-300"
                >
                  <SocialIcon type={social.name} />
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href} 
                      className="text-gray-600 hover:text-hyperlink-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Hyperlinq Technology. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="/refund-policy" className="text-gray-500 hover:text-hyperlink-primary text-sm">
                Refund Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-hyperlink-primary text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-hyperlink-primary text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for social icons (same as in Contact.tsx)
const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'facebook':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
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

export default Footer;
