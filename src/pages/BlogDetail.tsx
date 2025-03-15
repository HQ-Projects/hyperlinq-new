import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import Contact from '@/components/Contact';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { fetchCategories, fetchPostBySlug } from '@/api/wordpress';

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  modified: string;
  author: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
    author?: Array<{
      name: string;
      avatar_urls?: {
        [key: string]: string;
      };
    }>;
  };
  categories: number[];
  categoryNames?: string[];
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [categories, setCategories] = useState<{[key: number]: string}>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        
        // Fetch categories
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
        
        // Fetch post by slug
        const postData = await fetchPostBySlug(slug);
        if (!postData) {
          setError('Post not found');
        } else {
          setPost(postData);
        }
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug]);

  // Function to get category name
  const getCategoryName = (categoryId: number) => {
    return categories[categoryId] || 'Uncategorized';
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Blog Detail Content */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-hyperlink-primary"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500">{error}</p>
              <Link to="/blog" className="mt-4 inline-flex items-center text-hyperlink-primary">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </div>
          ) : post ? (
            <div>
              <Link to="/blog" className="inline-flex items-center text-hyperlink-primary mb-6 hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
              
              <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </div>
                
                {post._embedded?.author && (
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post._embedded.author[0].name}
                  </div>
                )}
                
                {post.categories && post.categories.length > 0 && (
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {post.categories.map(catId => getCategoryName(catId)).join(', ')}
                  </div>
                )}
              </div>
              
              {post._embedded?.['wp:featuredmedia'] && (
                <div className="mb-8 rounded-xl overflow-hidden">
                  <img 
                    src={post._embedded['wp:featuredmedia'][0].source_url} 
                    alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                    className="w-full h-auto"
                  />
                </div>
              )}
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              ></div>
            </div>
          ) : null}
        </div>
      </section>
      
      <CtaSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default BlogDetail;