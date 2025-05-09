// Define proper types for WordPress posts
interface WordPressPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  slug: string;
  content?: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
  categories: number[];
}

// Export reusable API functions instead of a React component
export const WORDPRESS_API_URL = 'https://hyperlinq.shop/wp-json/wp/v2';

// Try different CORS proxies
const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://cors-anywhere.herokuapp.com/',
  'https://proxy.cors.sh/'
];

// Helper function to try different proxies
const fetchWithCorsProxy = async (url: string): Promise<Response> => {
  // First try without proxy
  try {
    const response = await fetch(url, {
      headers: {
        'Origin': window.location.origin
      }
    });
    if (response.ok) return response;
  } catch (error) {
    console.log("Direct fetch failed, trying proxies");
  }
  
  // Try each proxy
  for (const proxy of CORS_PROXIES) {
    try {
      const response = await fetch(`${proxy}${encodeURIComponent(url)}`);
      if (response.ok) return response;
    } catch (error) {
      console.log(`Proxy ${proxy} failed, trying next`);
    }
  }
  
  // If all proxies fail, throw error
  throw new Error("All CORS proxies failed");
};

// Fetch posts function that can be reused across components
export const fetchPosts = async (): Promise<WordPressPost[]> => {
  try {
    const url = `${WORDPRESS_API_URL}/posts?_embed&per_page=10`;
    const response = await fetchWithCorsProxy(url);
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts. CORS issue or network problem.");
  }
};

// Fetch post by slug
export const fetchPostBySlug = async (slug: string): Promise<WordPressPost | null> => {
  try {
    const url = `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`;
    const response = await fetchWithCorsProxy(url);
    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    throw new Error(`Failed to fetch post with slug "${slug}". CORS issue or network problem.`);
  }
};

// Fetch categories
export const fetchCategories = async (): Promise<{[key: number]: string}> => {
  try {
    const url = `${WORDPRESS_API_URL}/categories`;
    const response = await fetchWithCorsProxy(url);
    const categories = await response.json();
    const categoryMap: {[key: number]: string} = {};
    
    categories.forEach((category: {id: number, name: string}) => {
      categoryMap[category.id] = category.name;
    });
    
    return categoryMap;
  } catch (error) {
    console.error("Error fetching categories:", error);
    // Return empty object instead of throwing to prevent app crash
    return {};
  }
};

// Utility functions
export const stripHtml = (html: string): string => {
  if (typeof document !== 'undefined') {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }
  // Simple fallback for server-side rendering
  return html.replace(/<\/?[^>]+(>|$)/g, '');
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};


