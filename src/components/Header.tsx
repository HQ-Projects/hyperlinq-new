import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
// Import the logo directly
import logoImage from '/public/hq-logo-normal.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  // Close dropdown when clicking outside
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '#services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'SEO', href: '/services/seo' },
        { name: 'Social Media Management', href: '/services/social-media' },
        { name: 'Web Design', href: '/services/web-design' },
        { name: 'Digital Marketing', href: '/services/digital-marketing' },
        { name: 'AI & Automation', href: '/services/ai-automation' },
      ]
    },
    { 
      name: 'Case Studies', 
      href: '/case-studies',
      hasDropdown: true,
      dropdownItems: [
        { name: 'SEO - Shree Hari Yoga School', href: '/case-studies/shree-hari-yoga-seo' },
        { name: 'SEO & PPC - Ahiclothing', href: '/case-studies/ahiclothing-ecommerce' },
        // Add more case studies as needed
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  // Function to handle navigation
  const handleNavigation = (href: string) => {
    closeMenu();
    setServicesDropdownOpen(false);
    
    if (href.startsWith('#') && location.pathname === '/') {
      // If on homepage and clicking an anchor link
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('#')) {
      // If on another page and clicking an anchor link, navigate to homepage first
      window.location.href = '/' + href;
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-soft' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Only image logo, no text */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="Hyperlinq Technology Logo" 
              className="h-10 md:h-12" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative" ref={link.hasDropdown ? dropdownRef : null}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        className="text-gray-600 hover:text-hyperlink-primary px-3 py-2 rounded-md text-sm font-medium flex items-center"
                        onClick={() => toggleDropdown(link.name)}
                      >
                        {link.name}
                        <svg
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            openDropdown === link.name ? 'transform rotate-180' : ''
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {openDropdown === link.name && (
                        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                          <div className="py-1" role="menu" aria-orientation="vertical">
                            {link.dropdownItems.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-hyperlink-primary px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-hyperlink-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-0 flex items-center justify-center bg-white transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center space-y-8 text-2xl">
          {navLinks.map((link) => (
            <li key={link.name} className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {link.hasDropdown ? (
                <div className="flex flex-col items-center">
                  <button 
                    className="text-gray-700 hover:text-hyperlink-primary font-medium transition-colors duration-300 mb-4"
                    onClick={() => {
                      const dropdownEl = document.getElementById(`mobile-dropdown-${link.name}`);
                      if (dropdownEl) {
                        dropdownEl.classList.toggle('hidden');
                      }
                    }}
                  >
                    {link.name} <ChevronDown className="inline ml-1 h-4 w-4" />
                  </button>
                  <div id={`mobile-dropdown-${link.name}`} className="hidden flex flex-col items-center space-y-4 mb-4">
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-gray-600 hover:text-hyperlink-primary text-lg"
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                link.href.startsWith('#') ? (
                  <a 
                    href={link.href}
                    className="text-gray-700 hover:text-hyperlink-primary font-medium transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.href}
                    className="text-gray-700 hover:text-hyperlink-primary font-medium transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </li>
          ))}
          <li className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;