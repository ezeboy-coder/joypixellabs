import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Design: Trends to Watch in 2024',
      excerpt: 'Explore the latest web design trends that are shaping the digital landscape and how they can benefit your business.',
      category: 'web-design',
      author: 'Alex Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '💻',
      featured: true
    },
    {
      id: 2,
      title: 'Image Editing Tips for Professional Results',
      excerpt: 'Learn essential image editing techniques that can transform your photos and make them stand out.',
      category: 'image-editing',
      author: 'Sarah Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      image: '🎨',
      featured: false
    },
    {
      id: 3,
      title: 'Digital Marketing Strategies That Actually Work',
      excerpt: 'Discover proven digital marketing strategies that can help you reach your target audience effectively.',
      category: 'digital-marketing',
      author: 'Mike Rodriguez',
      date: '2024-01-10',
      readTime: '8 min read',
      image: '📱',
      featured: false
    },
    {
      id: 4,
      title: 'Building a Strong Brand Identity',
      excerpt: 'Learn how to create a compelling brand identity that resonates with your audience and builds trust.',
      category: 'branding',
      author: 'Emma Wilson',
      date: '2024-01-08',
      readTime: '6 min read',
      image: '✨',
      featured: false
    },
    {
      id: 5,
      title: 'Mobile-First Design: Why It Matters',
      excerpt: 'Understand the importance of mobile-first design and how it impacts user experience and SEO.',
      category: 'web-design',
      author: 'Alex Johnson',
      date: '2024-01-05',
      readTime: '4 min read',
      image: '📱',
      featured: false
    },
    {
      id: 6,
      title: 'Color Psychology in Digital Design',
      excerpt: 'Explore how colors influence user behavior and how to use color psychology in your designs.',
      category: 'design',
      author: 'Sarah Chen',
      date: '2024-01-03',
      readTime: '6 min read',
      image: '🌈',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'web-design', name: 'Web Design' },
    { id: 'image-editing', name: 'Image Editing' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'branding', name: 'Branding' },
    { id: 'design', name: 'Design' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="blog">
      <div className="blog-hero">
        <div className="container">
          <h1>Our Blog</h1>
          <p>Insights, tips, and trends in digital design and marketing</p>
        </div>
      </div>

      <div className="blog-content">
        <div className="container">
          {featuredPost && (
            <div className="featured-post">
              <div className="featured-content">
                <div className="featured-badge">Featured</div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <div className="post-meta">
                  <span>By {featuredPost.author}</span>
                  <span>•</span>
                  <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link to={`/blog/${featuredPost.id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
              <div className="featured-image">
                <div className="image-placeholder">
                  <span>{featuredPost.image}</span>
                </div>
              </div>
            </div>
          )}

          <div className="blog-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <div className="image-placeholder">
                    <span>{post.image}</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="post-category">{post.category.replace('-', ' ')}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-meta">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="newsletter-section">
            <div className="newsletter-content">
              <h2>Stay Updated</h2>
              <p>Subscribe to our newsletter for the latest insights and tips in digital design and marketing.</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="blog-categories">
            <h2>Popular Categories</h2>
            <div className="categories-grid">
              <div className="category-card">
                <div className="category-icon">💻</div>
                <h3>Web Design</h3>
                <p>Tips and trends in modern web design</p>
                <span className="post-count">12 posts</span>
              </div>
              <div className="category-card">
                <div className="category-icon">🎨</div>
                <h3>Image Editing</h3>
                <p>Professional photo editing techniques</p>
                <span className="post-count">8 posts</span>
              </div>
              <div className="category-card">
                <div className="category-icon">📱</div>
                <h3>Digital Marketing</h3>
                <p>Strategies for online success</p>
                <span className="post-count">15 posts</span>
              </div>
              <div className="category-card">
                <div className="category-icon">✨</div>
                <h3>Branding</h3>
                <p>Building strong brand identities</p>
                <span className="post-count">6 posts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
