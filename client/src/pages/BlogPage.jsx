import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Search, 
  Tag, 
  ArrowRight, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { INITIAL_POSTS } from '../data/initialPosts';
import './Blog.css';

export default function BlogPage() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const postsPerPage = 6;

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data);
        }
      })
      .catch((err) => {
        console.log('Using initial posts fallback:', err);
      });
  }, []);

  // Compute Categories with Counts
  const categoriesMap = posts.reduce((acc, p) => {
    const cat = p.category || 'General';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const categoryList = ['All', ...Object.keys(categoriesMap)];

  // Filter Posts by Search & Category
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Recent Posts (top 5 latest)
  const recentPosts = [...posts].slice(0, 5);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="blog-page-root">
      {/* 1. Hero Banner */}
      <section className="blog-hero-banner">
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-container">
          <span className="blog-hero-badge">
            <BookOpen size={14} />
            <span>Insights & Research</span>
          </span>
          <h1 className="blog-hero-title">GYATK Engineering Blog</h1>
          <p className="blog-hero-subtitle">
            Explore our latest research, technical articles, zero-carbon innovations, and engine technology developments.
          </p>

          {/* Search Bar in Hero */}
          <div className="blog-search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search articles by keyword or topic..." 
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </div>
      </section>

      {/* 2. Main Content Container */}
      <div className="blog-main-container">
        <div className="blog-content-layout">
          
          {/* Left Column: Posts Grid */}
          <main className="blog-posts-column">

            {/* Active Filter Bar if selected */}
            {(selectedCategory !== 'All' || searchTerm !== '') && (
              <div className="active-filter-bar">
                <span>
                  Showing results for {selectedCategory !== 'All' && <strong>Category: "{selectedCategory}"</strong>} {searchTerm !== '' && <strong>Search: "{searchTerm}"</strong>}
                </span>
                <button 
                  onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
                  className="clear-filter-btn"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {currentPosts.length === 0 ? (
              <div className="no-posts-found">
                <h3>No articles found</h3>
                <p>Try clearing your search query or selecting another category.</p>
                <button 
                  onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }} 
                  className="reset-btn"
                >
                  View All Articles
                </button>
              </div>
            ) : (
              <div className="blog-cards-grid">
                {currentPosts.map((post) => (
                  <article key={post.id || post.slug} className="blog-post-card">
                    {/* Card Media Wrapper */}
                    <div className="post-card-media">
                      <Link to={`/blog/${post.slug}`} className="media-link">
                        <img 
                          src={post.image || '/images/global-warming-1.jpg'} 
                          alt={post.title} 
                          className="post-card-img"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/global-warming-1.jpg';
                          }}
                        />
                      </Link>
                      <span className="post-category-tag">
                        {post.category || 'Engineering'}
                      </span>
                    </div>

                    {/* Card Content Body */}
                    <div className="post-card-body">
                      {/* Meta Info */}
                      <div className="post-meta-line">
                        <span className="meta-item">
                          <Calendar size={13} />
                          <span>{post.formattedDate || post.date}</span>
                        </span>
                        <span className="meta-divider">•</span>
                        <span className="meta-item">
                          <Clock size={13} />
                          <span>{post.readTime || '4 min read'}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="post-card-title">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="post-card-excerpt">
                        {post.excerpt}
                      </p>

                      {/* Footer Link */}
                      <div className="post-card-footer">
                        <span className="post-author">
                          <User size={13} />
                          <span>{post.author || 'GYATK Tech'}</span>
                        </span>
                        <Link to={`/blog/${post.slug}`} className="read-more-btn">
                          <span>Read Article</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="blog-pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button 
                    key={pageNum}
                    className={`pagination-btn ${currentPage === pageNum ? 'active' : ''}`}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button 
                    className="pagination-next-btn"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  >
                    <span>Next</span>
                    <ChevronRight size={16} />
                  </button>
                )}
              </div>
            )}
          </main>

          {/* Right Sidebar Column */}
          <aside className="blog-sidebar-column">

            {/* Widget 1: Recent Posts List */}
            <div className="sidebar-widget recent-posts-widget">
              <h3 className="widget-heading">
                <span>Recent Articles</span>
              </h3>
              <div className="recent-posts-list">
                {recentPosts.map((rp) => (
                  <article key={rp.id || rp.slug} className="recent-post-item">
                    <Link to={`/blog/${rp.slug}`} className="recent-post-thumb-link">
                      <img 
                        src={rp.image || '/images/global-warming-1.jpg'} 
                        alt={rp.title} 
                        className="recent-post-thumb"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/global-warming-1.jpg';
                        }}
                      />
                    </Link>
                    <div className="recent-post-info">
                      <span className="recent-post-date">
                        <Calendar size={11} />
                        <span>{rp.formattedDate || rp.date}</span>
                      </span>
                      <h4 className="recent-post-title">
                        <Link to={`/blog/${rp.slug}`}>{rp.title}</Link>
                      </h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Widget 2: Categories List */}
            <div className="sidebar-widget categories-widget">
              <h3 className="widget-heading">
                <span>Categories</span>
              </h3>
              <ul className="categories-list">
                {categoryList.map((cat) => (
                  <li key={cat} className="category-item-row">
                    <button 
                      className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(cat)}
                    >
                      <div className="category-left">
                        <Tag size={13} className="cat-tag-icon" />
                        <span>{cat}</span>
                      </div>
                      <span className="category-count">
                        {cat === 'All' ? posts.length : (categoriesMap[cat] || 0)}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 3: Newsletter / Contact CTA */}
            <div className="sidebar-widget newsletter-cta-widget">
              <h3>RVCR Tech Updates</h3>
              <p>Stay informed on zero-carbon breakthroughs, engine prototypes, and commercial IP licensing.</p>
              <Link to="/contact-us" className="cta-widget-btn">
                <span>Get in Touch</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
