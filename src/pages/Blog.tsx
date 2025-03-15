import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import Contact from '@/components/Contact';
import { formatDistanceToNow } from 'date-fns';
import { fetchCategories, fetchPosts } from '@/api/wordpress';

// Define the post type
interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  slug: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
  categories: number[];
  categoryNames?: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<{[key: number]: string}>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Fetch categories
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
        
        // Fetch posts
        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (err) {
        console.error('Error loading blog data:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Function to strip HTML tags
  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  // Function to get category name
  const getCategoryName = (categoryId: number) => {
    return categories[categoryId] || 'Uncategorized';
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Blog Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-hyperlink-primary/10 to-hyperlink-secondary/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-hyperlink-light/40 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Latest insights, trends, and strategies in digital marketing and technology
          </p>
        </div>
      </section>
      
      {/* Blog Content Section */}
      <section className="py-16">
        <div className="container-custom">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-hyperlink-primary"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500">{error}</p>
              <p className="mt-4">Please try again later.</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p>No blog posts found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-soft overflow-hidden">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    {post._embedded?.['wp:featuredmedia'] ? (
                      <img 
                        src={post._embedded['wp:featuredmedia'][0].source_url} 
                        alt={post.title.rendered}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gray-100">
                        <span className="text-gray-400">No image available</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-hyperlink-primary mb-2">
                      {post.categories && post.categories[0] && getCategoryName(post.categories[0])} • {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
                    </p>
                    <h3 className="text-xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                    <p className="text-gray-600 mb-4">
                      {stripHtml(post.excerpt.rendered).substring(0, 120)}...
                    </p>
                    <Link to={`/blog/${post.slug}`} className="text-hyperlink-primary font-medium hover:underline">
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      <CtaSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Blog;