const fs = require('fs');

const blogPageJsx = `import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_POSTS } from '../data/initialPosts';
import './Blog.css';

export default function BlogPage() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

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

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const recentPosts = [
    { title: "Bridging the Gap: Zero Emission Systems for a Sustainable Future", slug: "bridging-the-gap-zero-emission-systems" },
    { title: "Sustainable Mobility: Exploring the Challenges of Green Technology", slug: "sustainable-mobility-exploring-challenges" },
    { title: "Commercial Carbon Footprint Reduction: A Thorough Guide", slug: "commercial-carbon-footprint-reduction-a-thorough-guide" },
    { title: "Guide Through the World of Zero Emissions", slug: "guide-through-the-world-of-zero-emissions" },
    { title: "Understanding Climate Change: Frequently Asked Questions Answered", slug: "understanding-climate-change-faq" }
  ];

  return (
    <div className="blog-page-root">
      {/* Hero Banner */}
      <section className="blog-hero-banner">
        <div className="blog-hero-container">
          <h1 className="blog-hero-title">Blogs</h1>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="blog-main-container">
        <div className="blog-content-layout">
          
          {/* Left Column: Post List */}
          <main className="blog-posts-column">
            {currentPosts.map((post) => (
              <article key={post.id || post.slug} className="blog-post-row-card">
                
                {/* Image Box */}
                <div className="blog-card-image-box">
                  <img 
                    src={post.image || '/images/global-warming-1.jpg'} 
                    alt={post.title} 
                    className="blog-card-img"
                  />
                  {/* Top-Right Logo Overlay */}
                  <div className="blog-card-logo-overlay">
                    <img src="/images/logoA.png" alt="GYATK" className="overlay-logo" />
                  </div>
                  {/* Bottom Contact Banner Overlay */}
                  <div className="blog-card-bottom-bar">
                    <span className="bar-url">www.gyatk.com</span>
                    <span className="bar-phone">+91 98952 13495</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="blog-card-content-box">
                  <h2 className="blog-card-title">
                    <Link to={\`/blog/\${post.slug}\`}>{post.title}</Link>
                  </h2>
                  <p className="blog-card-excerpt">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}

            {/* Pagination */}
            <div className="blog-pagination">
              <button 
                className={\`pagination-btn \${currentPage === 1 ? 'active' : ''}\`}
                onClick={() => setCurrentPage(1)}
              >
                1
              </button>
              <button 
                className={\`pagination-btn \${currentPage === 2 ? 'active' : ''}\`}
                onClick={() => setCurrentPage(2)}
              >
                2
              </button>
              <button 
                className="pagination-next"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              >
                Next
              </button>
            </div>
          </main>

          {/* Right Sidebar Column */}
          <aside className="blog-sidebar-column">
            
            {/* Widget 1: Categories */}
            <div className="sidebar-widget categories-widget">
              <h3 className="widget-heading">Categories</h3>
              <ul className="categories-list">
                <li className="category-item">
                  <span className="bullet-dot">•</span> Check ( 10 )
                </li>
              </ul>
            </div>

            {/* Widget 2: Recent Posts */}
            <div className="sidebar-widget recent-posts-widget">
              <h3 className="widget-heading">Recent Posts</h3>
              <ul className="recent-posts-list">
                {recentPosts.map((rp, idx) => (
                  <li key={idx} className="recent-post-item">
                    <Link to={\`/blog/\${rp.slug}\`} className="recent-post-link">
                      {rp.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
`;

const blogCss = `/* Blog Page Styling matching reference screenshot 100% */
.blog-page-root {
  width: 100%;
  background-color: #ffffff;
  font-family: 'Nunito', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333333;
}

/* Hero Banner */
.blog-hero-banner {
  width: 100%;
  height: 320px;
  background-image: url('/images/Gyatk-Climate-change-2.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
}

.blog-hero-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
}

.blog-hero-title {
  font-size: 42px;
  font-weight: 800;
  color: #1a365d;
  margin: 0;
  line-height: 1.2;
}

/* Main Container Layout */
.blog-main-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 24px 80px 24px;
}

.blog-content-layout {
  display: flex;
  flex-direction: row;
  gap: 48px;
  align-items: flex-start;
}

/* Left Posts Column */
.blog-posts-column {
  flex: 1;
  min-width: 0;
}

/* Individual Post Card Row */
.blog-post-row-card {
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin-bottom: 44px;
  align-items: flex-start;
}

/* Left Image Box */
.blog-card-image-box {
  width: 310px;
  height: 310px;
  flex-shrink: 0;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.blog-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Top-Right Logo Overlay */
.blog-card-logo-overlay {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.overlay-logo {
  height: 22px;
  width: auto;
}

/* Bottom Contact Bar Overlay */
.blog-card-bottom-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(11, 28, 54, 0.88);
  color: #ffffff;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  font-weight: 600;
  backdrop-filter: blur(2px);
}

.bar-url {
  color: #38bdf8;
  letter-spacing: 0.3px;
}

.bar-phone {
  color: #ffffff;
}

/* Right Content Box */
.blog-card-content-box {
  flex: 1;
  padding-top: 4px;
}

.blog-card-title {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.35;
  margin: 0 0 16px 0;
}

.blog-card-title a {
  color: #1e293b;
  text-decoration: none;
  transition: color 0.2s ease;
}

.blog-card-title a:hover {
  color: #0284c7;
}

.blog-card-excerpt {
  font-size: 15px;
  line-height: 1.65;
  color: #555555;
  margin: 0;
}

/* Pagination */
.blog-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;
  padding-top: 20px;
}

.pagination-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: #38bdf8;
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.pagination-btn:hover {
  background-color: #0284c7;
}

.pagination-btn.active {
  background-color: #0284c7;
  color: #ffffff;
}

.pagination-next {
  background: none;
  border: none;
  color: #0284c7;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  padding: 0 8px;
  transition: color 0.2s ease;
}

.pagination-next:hover {
  color: #0369a1;
  text-decoration: underline;
}

/* Right Sidebar Column */
.blog-sidebar-column {
  width: 320px;
  flex-shrink: 0;
}

/* Sidebar Widgets */
.sidebar-widget {
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 24px;
  background-color: #ffffff;
  margin-bottom: 32px;
}

.widget-heading {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 20px 0;
  padding-bottom: 8px;
}

.categories-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-item {
  font-size: 14px;
  color: #475569;
  display: flex;
  align-items: center;
  gap: 8px;
}

.bullet-dot {
  color: #94a3b8;
  font-size: 16px;
}

.recent-posts-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.recent-post-item {
  line-height: 1.4;
}

.recent-post-link {
  color: #0284c7;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.2s ease;
  display: block;
}

.recent-post-link:hover {
  color: #0369a1;
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .blog-content-layout {
    flex-direction: column;
  }
  .blog-sidebar-column {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .blog-post-row-card {
    flex-direction: column;
  }
  .blog-card-image-box {
    width: 100%;
    height: 260px;
  }
}
`;

fs.writeFileSync('client/src/pages/BlogPage.jsx', blogPageJsx);
fs.writeFileSync('client/src/pages/Blog.css', blogCss);
console.log('Update complete!');
