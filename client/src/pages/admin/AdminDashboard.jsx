import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Globe, 
  FileText, 
  Mail, 
  ExternalLink, 
  Save, 
  RotateCcw, 
  Search, 
  Plus, 
  Edit2, 
  Trash2, 
  Check, 
  AlertCircle, 
  Eye, 
  X, 
  Share2, 
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { INITIAL_POSTS } from '../../data/initialPosts';
import './Admin.css';

export default function AdminDashboard({ defaultTab = 'seo' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabParam = searchParams.get('tab') || defaultTab;
  const [activeTab, setActiveTab] = useState(activeTabParam);

  // Sync tab with URL
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  // Toast notification state
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 4000);
  };

  // =========================================================================
  // 1. SEO STATE & LOGIC
  // =========================================================================
  const [seoPages, setSeoPages] = useState({});
  const [selectedPageKey, setSelectedPageKey] = useState('home');
  const [seoFormData, setSeoFormData] = useState({
    title: '',
    description: '',
    keywords: '',
    canonical: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    robots: 'index, follow'
  });
  const [seoLoading, setSeoLoading] = useState(false);
  const [seoSaving, setSeoSaving] = useState(false);

  // Fetch SEO data
  const fetchSeoData = async () => {
    setSeoLoading(true);
    try {
      const res = await fetch('/api/seo');
      if (res.ok) {
        const data = await res.json();
        setSeoPages(data);
        if (data[selectedPageKey]) {
          setSeoFormData(data[selectedPageKey]);
        } else if (Object.keys(data).length > 0) {
          const firstKey = Object.keys(data)[0];
          setSelectedPageKey(firstKey);
          setSeoFormData(data[firstKey]);
        }
      }
    } catch (err) {
      console.error('Failed to load SEO data:', err);
      showToast('Failed to load SEO settings from server', 'error');
    } finally {
      setSeoLoading(false);
    }
  };

  useEffect(() => {
    fetchSeoData();
  }, []);

  // When selected page changes, populate form
  const handleSelectPage = (key) => {
    setSelectedPageKey(key);
    if (seoPages[key]) {
      setSeoFormData(seoPages[key]);
    }
  };

  const handleSeoInputChange = (e) => {
    const { name, value } = e.target;
    setSeoFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveSeo = async (e) => {
    e.preventDefault();
    setSeoSaving(true);
    try {
      const res = await fetch(`/api/seo/${selectedPageKey}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(seoFormData)
      });
      if (res.ok) {
        const updated = await res.json();
        setSeoPages(prev => ({ ...prev, [selectedPageKey]: updated }));
        showToast(`SEO settings for ${seoFormData.pageName || selectedPageKey} saved successfully!`);
      } else {
        throw new Error('Server returned error status');
      }
    } catch (err) {
      console.error('Save SEO error:', err);
      showToast('Error saving SEO settings. Please try again.', 'error');
    } finally {
      setSeoSaving(false);
    }
  };

  // =========================================================================
  // 2. BLOG CMS STATE & LOGIC
  // =========================================================================
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [blogLoading, setBlogLoading] = useState(false);
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [blogSearch, setBlogSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [postFormData, setPostFormData] = useState({
    title: '',
    slug: '',
    category: 'Clean Tech',
    image: '/images/global-warming-1.jpg',
    excerpt: '',
    content: '',
    date: new Date().toISOString().split('T')[0]
  });

  const fetchPosts = async () => {
    setBlogLoading(true);
    try {
      const res = await fetch('/api/posts');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) setPosts(data);
      }
    } catch (err) {
      console.error('Failed to load posts:', err);
    } finally {
      setBlogLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'blog') {
      fetchPosts();
    }
  }, [activeTab]);

  const handleOpenCreatePost = () => {
    setEditingPost(null);
    setPostFormData({
      title: '',
      slug: '',
      category: 'Clean Tech',
      image: '/images/global-warming-1.jpg',
      excerpt: '',
      content: '<p>Write your article content here...</p>',
      date: new Date().toISOString().split('T')[0]
    });
    setPostModalOpen(true);
  };

  const handleOpenEditPost = (post) => {
    setEditingPost(post);
    setPostFormData({
      title: post.title || '',
      slug: post.slug || '',
      category: post.category || 'Clean Tech',
      image: post.image || '/images/global-warming-1.jpg',
      excerpt: post.excerpt || '',
      content: post.content || '',
      date: post.date || new Date().toISOString().split('T')[0]
    });
    setPostModalOpen(true);
  };

  const handleDeletePost = async (id) => {
    if (!window.confirm('Are you sure you want to delete this article?')) return;
    try {
      const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPosts(prev => prev.filter(p => p.id !== id));
        showToast('Article deleted successfully');
      }
    } catch (err) {
      console.error('Delete error:', err);
      showToast('Failed to delete article', 'error');
    }
  };

  const handleSavePost = async (e) => {
    e.preventDefault();
    if (!postFormData.title) {
      showToast('Article title is required', 'error');
      return;
    }

    try {
      if (editingPost) {
        const res = await fetch(`/api/posts/${editingPost.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postFormData)
        });
        if (res.ok) {
          const updated = await res.json();
          setPosts(prev => prev.map(p => p.id === editingPost.id ? updated : p));
          showToast('Article updated successfully!');
          setPostModalOpen(false);
        }
      } else {
        const res = await fetch('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postFormData)
        });
        if (res.ok) {
          const created = await res.json();
          setPosts(prev => [created, ...prev]);
          showToast('New article published successfully!');
          setPostModalOpen(false);
        }
      }
    } catch (err) {
      console.error('Save post error:', err);
      showToast('Failed to save article', 'error');
    }
  };

  // Filter posts
  const filteredPosts = posts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(blogSearch.toLowerCase()) || 
                          p.excerpt.toLowerCase().includes(blogSearch.toLowerCase());
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const categories = ['All', ...new Set(posts.map(p => p.category))];

  // =========================================================================
  // 3. CONTACT INQUIRIES STATE
  // =========================================================================
  const [inquiries, setInquiries] = useState([]);
  const [inquiriesLoading, setInquiriesLoading] = useState(false);

  const fetchInquiries = async () => {
    setInquiriesLoading(true);
    try {
      const res = await fetch('/api/inquiries');
      if (res.ok) {
        const data = await res.json();
        setInquiries(data);
      }
    } catch (err) {
      console.error('Failed to load inquiries:', err);
    } finally {
      setInquiriesLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'inquiries') {
      fetchInquiries();
    }
  }, [activeTab]);

  return (
    <div className="gyatk-admin-container">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`gyatk-toast-notification ${toast.type}`}>
          {toast.type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Admin Top Navigation Bar */}
      <header className="gyatk-admin-topbar">
        <div className="gyatk-admin-topbar-left">
          <Link to="/" className="gyatk-admin-logo-link">
            <img src="/images/logoA.png" alt="GYATK" className="gyatk-admin-logo" />
          </Link>
          <span className="gyatk-admin-badge">Admin Dashboard</span>
        </div>

        {/* Tab Switcher */}
        <nav className="gyatk-admin-tabs">
          <button
            type="button"
            className={`gyatk-admin-tab-btn ${activeTab === 'seo' ? 'active' : ''}`}
            onClick={() => handleTabChange('seo')}
          >
            <Globe size={16} />
            <span>SEO Manager</span>
            <span className="tab-pill">{Object.keys(seoPages).length || 10}</span>
          </button>

          <button
            type="button"
            className={`gyatk-admin-tab-btn ${activeTab === 'blog' ? 'active' : ''}`}
            onClick={() => handleTabChange('blog')}
          >
            <FileText size={16} />
            <span>Blog CMS</span>
            <span className="tab-pill">{posts.length}</span>
          </button>

          <button
            type="button"
            className={`gyatk-admin-tab-btn ${activeTab === 'inquiries' ? 'active' : ''}`}
            onClick={() => handleTabChange('inquiries')}
          >
            <Mail size={16} />
            <span>Inquiries</span>
            <span className="tab-pill">{inquiries.length}</span>
          </button>
        </nav>

        <div className="gyatk-admin-topbar-right">
          <Link to="/" target="_blank" rel="noopener noreferrer" className="gyatk-view-site-btn">
            <span>View Live Site</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </header>

      {/* Main Admin Viewport */}
      <main className="gyatk-admin-main">
        {/* ================================================================== */}
        {/* TAB 1: SEO MANAGER FOR ALL PAGES */}
        {/* ================================================================== */}
        {activeTab === 'seo' && (
          <div className="admin-seo-manager">
            {/* SEO Manager Header */}
            <div className="admin-section-header">
              <div>
                <h1 className="admin-heading-title">Search Engine Optimization (SEO)</h1>
                <p className="admin-heading-subtitle">
                  Configure search engine metadata, Open Graph previews, and canonical links for every page on GYATK.
                </p>
              </div>
              <div className="admin-header-status">
                <span className="status-dot"></span>
                <span>Real-Time Metadata Sync</span>
              </div>
            </div>

            {/* 2-Column SEO Workspace */}
            <div className="admin-seo-grid">
              {/* Left Column: Pages List Selector */}
              <div className="admin-seo-sidebar">
                <div className="sidebar-header">
                  <h3>Website Pages</h3>
                  <span className="badge-count">{Object.keys(seoPages).length} Pages</span>
                </div>
                <div className="sidebar-pages-list">
                  {Object.entries(seoPages).map(([key, page]) => (
                    <button
                      key={key}
                      type="button"
                      className={`page-select-item ${selectedPageKey === key ? 'active' : ''}`}
                      onClick={() => handleSelectPage(key)}
                    >
                      <div className="page-item-info">
                        <span className="page-item-name">{page.pageName || key}</span>
                        <span className="page-item-path">{page.path}</span>
                      </div>
                      <Globe size={15} className="page-item-icon" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: SEO Configuration & Live Preview */}
              <div className="admin-seo-content">
                <form onSubmit={handleSaveSeo} className="admin-seo-form">
                  {/* Active Page Header Card */}
                  <div className="seo-page-banner">
                    <div>
                      <span className="seo-tag-pill">Editing Metadata</span>
                      <h2>{seoFormData.pageName || selectedPageKey}</h2>
                      <span className="seo-canonical-link">
                        Route: <code>{seoFormData.path || '/'}</code>
                      </span>
                    </div>
                    <button 
                      type="submit" 
                      className="admin-primary-btn"
                      disabled={seoSaving}
                    >
                      <Save size={16} />
                      <span>{seoSaving ? 'Saving Changes...' : 'Save SEO Settings'}</span>
                    </button>
                  </div>

                  {/* Google Search Snippet Live Preview */}
                  <div className="seo-preview-card">
                    <div className="preview-card-header">
                      <Search size={15} />
                      <span>Google Search Result Preview</span>
                    </div>
                    <div className="google-serp-box">
                      <div className="serp-url-row">
                        <img src="/images/gyatk-logo-svg.png" alt="favicon" className="serp-favicon" />
                        <span className="serp-domain">gyatk.com</span>
                        <span className="serp-path">› {seoFormData.path === '/' ? '' : seoFormData.path?.replace('/', '')}</span>
                      </div>
                      <h4 className="serp-title">
                        {seoFormData.title || 'Page Title Not Configured'}
                      </h4>
                      <p className="serp-desc">
                        {seoFormData.description || 'Please provide a meta description. Search engines show this summary in search results to help users understand what your page is about.'}
                      </p>
                    </div>
                  </div>

                  {/* SEO Form Inputs */}
                  <div className="admin-card">
                    <h3 className="card-section-title">Standard Meta Directives</h3>
                    
                    {/* Meta Title */}
                    <div className="form-group">
                      <div className="form-label-row">
                        <label className="form-label">Meta Title (Browser & Search Snippet)</label>
                        <span className={`char-counter ${(seoFormData.title?.length || 0) > 60 ? 'warning' : 'ok'}`}>
                          {seoFormData.title?.length || 0} / 60 chars (Recommended: 50-60)
                        </span>
                      </div>
                      <input
                        type="text"
                        name="title"
                        className="form-input"
                        placeholder="e.g. GYATK | RVCR Deep-Tech Kinematics & Zero-Carbon Prime Movers"
                        value={seoFormData.title || ''}
                        onChange={handleSeoInputChange}
                      />
                    </div>

                    {/* Meta Description */}
                    <div className="form-group">
                      <div className="form-label-row">
                        <label className="form-label">Meta Description (SERP Summary)</label>
                        <span className={`char-counter ${(seoFormData.description?.length || 0) > 160 ? 'warning' : 'ok'}`}>
                          {seoFormData.description?.length || 0} / 160 chars (Recommended: 120-160)
                        </span>
                      </div>
                      <textarea
                        name="description"
                        className="form-textarea"
                        rows={3}
                        placeholder="Summarize the core focus of this page for search results and social links..."
                        value={seoFormData.description || ''}
                        onChange={handleSeoInputChange}
                      />
                    </div>

                    {/* Meta Keywords & Canonical in Grid */}
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">Keywords (Comma-separated)</label>
                        <input
                          type="text"
                          name="keywords"
                          className="form-input"
                          placeholder="RVCR, Zero Carbon, Kinematics, GYATK"
                          value={seoFormData.keywords || ''}
                          onChange={handleSeoInputChange}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Canonical URL</label>
                        <input
                          type="url"
                          name="canonical"
                          className="form-input"
                          placeholder="https://gyatk.com/zero-emission-technology"
                          value={seoFormData.canonical || ''}
                          onChange={handleSeoInputChange}
                        />
                      </div>
                    </div>

                    {/* Robots Directive */}
                    <div className="form-group">
                      <label className="form-label">Search Engine Indexing (Robots Meta)</label>
                      <select
                        name="robots"
                        className="form-select"
                        value={seoFormData.robots || 'index, follow'}
                        onChange={handleSeoInputChange}
                      >
                        <option value="index, follow">Index, Follow (Recommended - Allow search engines to index and rank)</option>
                        <option value="noindex, follow">Noindex, Follow (Hide from search results, but follow links)</option>
                        <option value="index, nofollow">Index, Nofollow (Show in search results, don't follow links)</option>
                        <option value="noindex, nofollow">Noindex, Nofollow (Completely exclude from search engines)</option>
                      </select>
                    </div>
                  </div>

                  {/* Open Graph & Social Sharing Card */}
                  <div className="admin-card">
                    <div className="card-header-with-icon">
                      <Share2 size={16} />
                      <h3 className="card-section-title" style={{ margin: 0 }}>Social Sharing (Open Graph / Twitter Card)</h3>
                    </div>

                    <div className="form-grid-2" style={{ marginTop: '16px' }}>
                      <div className="form-group">
                        <label className="form-label">OG Title</label>
                        <input
                          type="text"
                          name="ogTitle"
                          className="form-input"
                          placeholder="Leave blank to use Meta Title"
                          value={seoFormData.ogTitle || ''}
                          onChange={handleSeoInputChange}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">OG Featured Image URL</label>
                        <input
                          type="text"
                          name="ogImage"
                          className="form-input"
                          placeholder="/images/logoA.png or /images/machine.png"
                          value={seoFormData.ogImage || ''}
                          onChange={handleSeoInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">OG Description</label>
                      <textarea
                        name="ogDescription"
                        className="form-textarea"
                        rows={2}
                        placeholder="Leave blank to use Meta Description"
                        value={seoFormData.ogDescription || ''}
                        onChange={handleSeoInputChange}
                      />
                    </div>

                    {/* Social Card Mockup */}
                    <div className="social-card-mockup">
                      <div className="mockup-img-wrap">
                        <img 
                          src={seoFormData.ogImage || '/images/logoA.png'} 
                          alt="Social Preview" 
                          className="mockup-img"
                          onError={(e) => { e.target.src = '/images/logoA.png'; }}
                        />
                      </div>
                      <div className="mockup-content">
                        <span className="mockup-domain">GYATK.COM</span>
                        <h5 className="mockup-title">{seoFormData.ogTitle || seoFormData.title || 'Page Title'}</h5>
                        <p className="mockup-desc">{seoFormData.ogDescription || seoFormData.description || 'Description preview on LinkedIn, Facebook, and Twitter cards.'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Save Button Row */}
                  <div className="form-footer-action">
                    <button 
                      type="submit" 
                      className="admin-primary-btn"
                      disabled={seoSaving}
                    >
                      <Save size={16} />
                      <span>{seoSaving ? 'Saving Changes...' : 'Save SEO Settings'}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 2: BLOG & ARTICLE CMS */}
        {/* ================================================================== */}
        {activeTab === 'blog' && (
          <div className="admin-blog-manager">
            {/* Blog CMS Header */}
            <div className="admin-section-header">
              <div>
                <h1 className="admin-heading-title">Blog Articles & Content CMS</h1>
                <p className="admin-heading-subtitle">
                  Create, publish, edit, and organize technical articles and whitepapers.
                </p>
              </div>
              <button 
                type="button" 
                className="admin-primary-btn"
                onClick={handleOpenCreatePost}
              >
                <Plus size={16} />
                <span>New Article</span>
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="admin-filter-bar">
              <div className="search-box">
                <Search size={16} />
                <input
                  type="text"
                  placeholder="Search articles by title or keywords..."
                  value={blogSearch}
                  onChange={(e) => setBlogSearch(e.target.value)}
                />
              </div>

              <div className="category-chips">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`cat-chip ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Table */}
            <div className="admin-card table-card">
              <table className="admin-data-table">
                <thead>
                  <tr>
                    <th>Article</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.map((post) => (
                    <tr key={post.id}>
                      <td className="article-cell">
                        <img 
                          src={post.image || '/images/global-warming-1.jpg'} 
                          alt="" 
                          className="table-thumb"
                          onError={(e) => { e.target.src = '/images/global-warming-1.jpg'; }}
                        />
                        <div>
                          <div className="article-title">{post.title}</div>
                          <div className="article-slug">/blog/{post.slug}</div>
                        </div>
                      </td>
                      <td>
                        <span className="category-badge">{post.category}</span>
                      </td>
                      <td className="date-cell">{post.date}</td>
                      <td style={{ textAlign: 'right' }}>
                        <div className="table-actions">
                          <Link 
                            to={`/blog/${post.slug}`} 
                            target="_blank" 
                            className="action-btn view-btn"
                            title="View live article"
                          >
                            <ExternalLink size={14} />
                          </Link>
                          <button
                            type="button"
                            className="action-btn edit-btn"
                            onClick={() => handleOpenEditPost(post)}
                            title="Edit article"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            type="button"
                            className="action-btn delete-btn"
                            onClick={() => handleDeletePost(post.id)}
                            title="Delete article"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredPosts.length === 0 && (
                    <tr>
                      <td colSpan={4} className="empty-table-msg">
                        No articles found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Article Create / Edit Modal */}
            {postModalOpen && (
              <div className="admin-modal-backdrop" onClick={() => setPostModalOpen(false)}>
                <div className="admin-modal-box" onClick={(e) => e.stopPropagation()}>
                  <div className="admin-modal-header">
                    <h3>{editingPost ? 'Edit Article' : 'Create New Article'}</h3>
                    <button type="button" onClick={() => setPostModalOpen(false)} className="close-btn">
                      <X size={20} />
                    </button>
                  </div>

                  <form onSubmit={handleSavePost} className="admin-modal-form">
                    <div className="form-group">
                      <label className="form-label">Article Title *</label>
                      <input
                        type="text"
                        className="form-input"
                        required
                        value={postFormData.title}
                        onChange={(e) => setPostFormData({ ...postFormData, title: e.target.value })}
                        placeholder="e.g. Advanced Kinematics in High-Pressure Rotary Compression"
                      />
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">Category</label>
                        <select
                          className="form-select"
                          value={postFormData.category}
                          onChange={(e) => setPostFormData({ ...postFormData, category: e.target.value })}
                        >
                          <option value="Clean Tech">Clean Tech</option>
                          <option value="RVCR Innovation">RVCR Innovation</option>
                          <option value="Green Fuels">Green Fuels</option>
                          <option value="Energy Transition">Energy Transition</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Publication Date</label>
                        <input
                          type="date"
                          className="form-input"
                          value={postFormData.date}
                          onChange={(e) => setPostFormData({ ...postFormData, date: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Featured Image URL</label>
                      <input
                        type="text"
                        className="form-input"
                        value={postFormData.image}
                        onChange={(e) => setPostFormData({ ...postFormData, image: e.target.value })}
                        placeholder="/images/global-warming-1.jpg"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Short Excerpt</label>
                      <textarea
                        className="form-textarea"
                        rows={2}
                        value={postFormData.excerpt}
                        onChange={(e) => setPostFormData({ ...postFormData, excerpt: e.target.value })}
                        placeholder="Brief summary for cards and search results..."
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Article Content (HTML supported) *</label>
                      <textarea
                        className="form-textarea content-area"
                        rows={8}
                        required
                        value={postFormData.content}
                        onChange={(e) => setPostFormData({ ...postFormData, content: e.target.value })}
                        placeholder="<p>Full article body with paragraphs, headings, and lists...</p>"
                      />
                    </div>

                    <div className="admin-modal-footer">
                      <button
                        type="button"
                        className="admin-secondary-btn"
                        onClick={() => setPostModalOpen(false)}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="admin-primary-btn">
                        <Save size={16} />
                        <span>{editingPost ? 'Update Article' : 'Publish Article'}</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 3: CONTACT INQUIRIES */}
        {/* ================================================================== */}
        {activeTab === 'inquiries' && (
          <div className="admin-inquiries-manager">
            <div className="admin-section-header">
              <div>
                <h1 className="admin-heading-title">Contact Form Submissions</h1>
                <p className="admin-heading-subtitle">
                  Customer inquiries, partnership requests, and licensing messages received via the Contact Us page.
                </p>
              </div>
              <span className="badge-count">{inquiries.length} Inquiries</span>
            </div>

            <div className="inquiries-list">
              {inquiries.map((inq) => (
                <div key={inq.id} className="inquiry-card">
                  <div className="inquiry-header">
                    <div>
                      <h4 className="inquiry-sender">{inq.name}</h4>
                      <div className="inquiry-meta">
                        <a href={`mailto:${inq.email}`}>{inq.email}</a>
                        {inq.phone && <span> • Tel: {inq.phone}</span>}
                        <span> • {new Date(inq.receivedAt || inq.id).toLocaleString()}</span>
                      </div>
                    </div>
                    {inq.subject && (
                      <span className="inquiry-subject-badge">{inq.subject}</span>
                    )}
                  </div>
                  <div className="inquiry-body">
                    <p>{inq.message}</p>
                  </div>
                </div>
              ))}

              {inquiries.length === 0 && (
                <div className="empty-inquiries-box">
                  <Mail size={36} />
                  <h3>No Inquiries Yet</h3>
                  <p>Messages submitted through the contact form will appear here in real time.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
