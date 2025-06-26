import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blog-posts';

export const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  
  const post = blogPosts.find(p => p.id === postId);
  const relatedPosts = blogPosts.filter(p => p.id !== postId && p.category === post?.category).slice(0, 3);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/blog"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Category Badge */}
        <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
          {post.category}
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center">
            <img 
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="font-semibold text-gray-900">{post.author.name}</div>
              <div className="text-sm text-gray-600">{post.author.title}</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            {new Date(post.publishDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            {post.readTime}
          </div>

          <button className="flex items-center text-red-600 hover:text-red-700 transition-colors duration-200">
            <Share2 className="w-5 h-5 mr-2" />
            Share Article
          </button>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-red max-w-none">
          <div className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
            {post.excerpt}
          </div>
          
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: post.content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>').replace(/^/, '<p>').replace(/$/, '</p>')
                .replace(/## (.*?)<\/p>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
                .replace(/### (.*?)<\/p>/g, '<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/- (.*?)<br>/g, '<li>$1</li>')
                .replace(/(<li>.*<\/li>)/g, '<ul class="list-disc list-inside my-4 space-y-2">$1</ul>')
                .replace(/(\d+)\. (.*?)<br>/g, '<li>$2</li>')
                .replace(/(<li>.*<\/li>)/g, '<ol class="list-decimal list-inside my-4 space-y-2">$1</ol>')
            }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-red-100 hover:text-red-700 transition-colors duration-200 cursor-pointer"
              >
                <Tag className="w-4 h-4 inline mr-2" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
          <div className="flex items-start">
            <img 
              src={post.author.avatar}
              alt={post.author.name}
              className="w-20 h-20 rounded-full mr-6 flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author.name}</h3>
              <p className="text-red-600 font-medium mb-3">{post.author.title}</p>
              <p className="text-gray-600 leading-relaxed">
                {post.author.name} is a Pinterest marketing expert with over 5 years of experience helping businesses 
                grow their presence on Pinterest. Specializing in {post.category.toLowerCase()}, they have helped 
                hundreds of clients achieve remarkable results through strategic Pinterest marketing.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Articles</h2>
              <p className="text-xl text-gray-600">More insights on {post.category.toLowerCase()}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                >
                  <div className="relative">
                    <img 
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-red-600 font-medium text-sm">{relatedPost.category}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200 leading-tight">
                      {relatedPost.title}
                    </h3>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {relatedPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {relatedPost.readTime}
                      </div>
                      
                      <div className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform duration-200">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let our Pinterest marketing experts help you implement these strategies and achieve 
            remarkable results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get Expert Help
            </Link>
            <Link
              to="/blog"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};