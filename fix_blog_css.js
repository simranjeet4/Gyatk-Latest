const fs = require('fs');

const blogCss = `/* Blog Page Styling matching reference screenshot 100% */
.blog-page-root {
  width: 100%;
  background-color: #ffffff;
  font-family: 'Nunito', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333333;
}

/* Hero Banner - 790px height ONLY */
.blog-hero-banner {
  width: 100%;
  height: 790px;
  background-image: url('/images/new-hero-banner.jpg');
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

/* Left Image Box - 310px x 310px */
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

fs.writeFileSync('client/src/pages/Blog.css', blogCss);
console.log('Fixed Blog.css! Only .blog-hero-banner has 790px height now.');
