import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  try {
    return (
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {backgroundImage && (
            <img 
              src={backgroundImage} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-700/50"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {subtitle}
          </p>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error rendering PageHeader:", error);
    return <div>Error loading header</div>;
  }
};

export default PageHeader;