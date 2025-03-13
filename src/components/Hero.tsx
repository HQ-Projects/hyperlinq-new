
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed') || '1');
        const moveX = x * speed * 20;
        const moveY = y * speed * 20;
        (el as HTMLElement).style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 md:pt-24 md:pb-24"
      ref={heroRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-hyperlink-light/50 blur-3xl parallax" data-speed="0.5"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-100/50 blur-3xl parallax" data-speed="0.8"></div>
      </div>
      
      <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMDEwMTAiIHN0cm9rZS13aWR0aD0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')] opacity-30"></div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start space-y-8 text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-hyperlink-light border border-hyperlink-primary/10 text-hyperlink-primary text-sm font-medium animate-fade-in-down">
              <span className="w-2 h-2 bg-hyperlink-primary rounded-full mr-2"></span>
              Digital Marketing Agency
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
              Elevate Your <span className="text-gradient">Digital Presence</span> With Strategic Solutions
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
              Hyperlinq Technology helps businesses grow through data-driven digital marketing strategies, innovative web solutions, and AI-powered automation.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
              <a href="#services" className="btn-primary">
                Explore Services
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
            
            <div className="flex items-center space-x-6 pt-6 animate-fade-in-down" style={{ animationDelay: '0.4s' }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <div className={cn("w-full h-full bg-gradient-to-br", 
                      i % 4 === 0 ? "from-blue-400 to-purple-500" : 
                      i % 3 === 0 ? "from-green-400 to-blue-500" : 
                      i % 2 === 0 ? "from-yellow-400 to-orange-500" : 
                      "from-purple-400 to-pink-500"
                    )}></div>
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold">500+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-hyperlink-light to-transparent rounded-3xl blur-3xl opacity-50 parallax" data-speed="0.3"></div>
            <div className="relative z-10 glass-panel rounded-3xl overflow-hidden shadow-glass p-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden parallax" data-speed="0.2">
                <div className="absolute inset-0 bg-gradient-to-br from-hyperlink-primary/10 to-hyperlink-secondary/10 mix-blend-overlay"></div>
                <div className="h-full w-full flex items-center justify-center bg-hyperlink-light">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-5xl font-bold text-hyperlink-primary animate-pulse-soft">Hyperlinq</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-2xl border border-gray-100 shadow-soft flex items-center justify-center p-4 parallax" data-speed="1.5">
              <div className="w-full h-full bg-hyperlink-primary rounded-xl flex items-center justify-center animate-float">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-white rounded-2xl border border-gray-100 shadow-soft flex items-center justify-center p-3 parallax" data-speed="1.2">
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center animate-float">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
