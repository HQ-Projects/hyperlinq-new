
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleServicesDropdown = () => setServicesDropdownOpen(!servicesDropdownOpen);

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
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ];

  // Function to handle navigation
  const handleNavigation = (href: string) => {
    closeMenu();
    setServicesDropdownOpen(false);
    
    if (href.startsWith('#') && window.location.pathname === '/') {
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
    <nav 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-soft' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-10 flex items-center space-x-1">
            <img 
              src="/hq-logo-normal.png" 
              alt="Hyperlinq Technology Logo" 
              className="h-20 md:h-24" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentNode as HTMLElement;
                if (parent) {
                  parent.innerHTML = '<span class="text-xl font-bold text-hyperlink-primary">Hyperlinq</span><span class="text-xl font-bold">Technology</span>';
                }
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div ref={dropdownRef}>
                      <button 
                        onClick={toggleServicesDropdown}
                        className="flex items-center link-hover text-gray-700 hover:text-hyperlink-primary font-medium transition-colors duration-300"
                      >
                        {link.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                          <div className="py-1">
                            {link.dropdownItems?.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setServicesDropdownOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    link.href.startsWith('#') ? (
                      <a 
                        href={link.href}
                        className="link-hover text-gray-700 hover:text-hyperlink-primary font-medium transition-colors duration-300"
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
                        className="link-hover text-gray-700 hover:text-hyperlink-primary font-medium transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    )
                  )}
                </li>
              ))}
            </ul>
            <Link to="#contact" className="btn-primary" onClick={(e) => {
              e.preventDefault();
              handleNavigation('#contact');
            }}>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-gray-700 hover:text-hyperlink-primary focus:outline-none z-10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 z-0 flex items-center justify-center bg-white transition-all duration-500 ease-in-out',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
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
            <Link to="#contact" className="btn-primary" onClick={(e) => {
              e.preventDefault();
              handleNavigation('#contact');
            }}>
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
