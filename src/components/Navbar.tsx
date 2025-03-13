
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

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
          <a href="#home" className="z-10 flex items-center space-x-1">
            <span className="text-xl md:text-2xl font-bold text-hyperlink-primary">Hyperlinq</span>
            <span className="text-xl md:text-2xl font-bold">Technology</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="link-hover text-gray-700 hover:text-hyperlink-primary font-medium transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
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
              <a 
                href={link.href} 
                className="text-gray-700 hover:text-hyperlink-primary font-medium transition-colors duration-300"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="#contact" className="btn-primary" onClick={closeMenu}>
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
