import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

useEffect(() => {
  // Log when component mounts to check if the logo path is correct
  console.log("Checking for logo at:", "/hq-logo-normal.png");
  
  // Create a test image to check if the logo can be loaded
  const testImg = new Image();
  testImg.onload = () => console.log("Logo loaded successfully!");
  testImg.onerror = () => console.error("Logo failed to load - check path and file existence");
  testImg.src = "/hq-logo-normal.png";
}, []);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            {/* Remove the direct import and use a public URL */}
            <img 
              src="/hq-logo-normal.png" 
              alt="Hyperlinq Technology Logo" 
              className="h-10 md:h-12" 
              onError={(e) => {
                console.error("Logo failed to load");
                const target = e.target as HTMLImageElement;
                // Hide the broken image
                target.style.display = 'none';
                // Show text logo instead
                const parent = target.parentNode as HTMLElement;
                if (parent) {
                  parent.innerHTML = '<span class="text-xl font-bold text-hyperlink-primary">Hyperlinq</span><span class="text-xl font-bold">Technology</span>';
                }
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Your existing navigation items */}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* Rest of your existing mobile menu code */}
    </header>
  );
};

export default Header;