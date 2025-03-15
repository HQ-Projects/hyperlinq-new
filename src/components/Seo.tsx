import React, { useEffect } from 'react';
import { SeoConfig, defaultSeo } from '@/utils/seo';

interface SeoProps {
  config: SeoConfig;
}

const Seo: React.FC<SeoProps> = ({ config }) => {
  const seo = { ...defaultSeo, ...config };
  
  useEffect(() => {
    // Update document title
    document.title = seo.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seo.description);
    
    // Update Open Graph meta tags
    updateMetaTag('property', 'og:title', seo.title);
    updateMetaTag('property', 'og:description', seo.description);
    if (seo.ogImage) {
      updateMetaTag('property', 'og:image', seo.ogImage);
    }
    updateMetaTag('property', 'og:type', 'website');
    
    // Update Twitter meta tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', seo.title);
    updateMetaTag('name', 'twitter:description', seo.description);
    if (seo.ogImage) {
      updateMetaTag('name', 'twitter:image', seo.ogImage);
    }
    
    // Update canonical URL if provided
    if (seo.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', seo.canonical);
    }
    
    // Cleanup function
    return () => {
      // No cleanup needed as we're just updating existing tags
    };
  }, [seo]);
  
  // Helper function to update or create meta tags
  const updateMetaTag = (attributeName: string, attributeValue: string, content: string) => {
    let tag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attributeName, attributeValue);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };
  
  // This component doesn't render anything visible
  return null;
};

export default Seo;