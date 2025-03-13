
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedCard from './AnimatedCard';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, className }) => {
  return (
    <AnimatedCard className={cn(
      'w-full rounded-2xl overflow-hidden transition-all duration-300',
      'bg-white border border-gray-100 shadow-soft hover:shadow-medium',
      className
    )}>
      <div className="p-6 md:p-8 h-full flex flex-col">
        <div className="mb-5 w-14 h-14 rounded-xl bg-hyperlink-light flex items-center justify-center">
          <div className="text-hyperlink-primary">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        
        <p className="text-gray-600 flex-grow mb-6">
          {description}
        </p>
        
        <a href="#contact" className="inline-flex items-center text-hyperlink-primary hover:text-hyperlink-secondary font-medium transition-colors duration-300 group">
          Learn More
          <svg 
            className="ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </a>
      </div>
    </AnimatedCard>
  );
};

export default ServiceCard;
