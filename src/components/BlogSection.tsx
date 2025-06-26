import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';
import { blogPosts } from '../data/blog-posts';

export const BlogSection: React.FC = () => {
  // Get 3 most recent posts for homepage
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-800 font-medium mb-6">
            <Tag className="w-5 h-5 mr-2" />
            Latest Pinterest Marketing Insights
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Expert Tips & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600"> Strategies</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest Pinterest marketing insights, strategies, and industry trends. 
            Learn from our experts and grow your Pinterest presence.
          </p>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {recentPosts.map((post, index) => (
            <Link 
              key={post.id}
              to={`/blog/${post.id}`}
              className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer"
            >
              <div className="relative">
                <img 
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-red-600 font-medium text-sm">{post.category}</span>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <ArrowRight className="w-12 h-12 mx-auto mb-2" />
                    <div className="font-semibold">Read Full Article</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.publishDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{post.author.name}</div>
                      <div className="text-gray-500 text-xs">{post.author.title}</div>
                    </div>
                  </div>
                  
                  <div className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform duration-200">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs hover:bg-red-100 hover:text-red-600 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Blog Posts CTA */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            View All Blog Posts
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};