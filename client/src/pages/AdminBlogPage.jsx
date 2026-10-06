import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, ExternalLink, Eye, Check, X, FileText, Folder, Calendar } from 'lucide-react';
import { INITIAL_POSTS } from '../data/initialPosts';
import './Blog.css';

export default function AdminBlogPage() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [notification, setNotification] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Clean Tech',
    image: '/images/global-warming-1.jpg',
    excerpt: '',
    content: '',
    date: new Date().toISOString().split('T')[0]
  });

  const fetchPosts = () => {
    setLoading(true);
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load server posts:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 4000);
  };

  const handleOpenCreate = () => {
    setEditingPost(null);
    setFormData({
      title: '',
      slug: '',
      category: 'Clean Tech',
      image: '/images/global-warming-1.jpg',
      excerpt: '',
      content: '<p>Write your article content here...</p>',
      date: new Date().toISOString().split('T')[0]
    });
    setPreviewMode(false);
    setModalOpen(true);
  };

  const handleOpenEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title || '',
      slug: post.slug || '',
      category: post.category || 'Clean Tech',
      image: post.image || '/images/global-warming-1.jpg',
      excerpt: post.excerpt || '',
      content: post.content || '',
      date: post.date || new Date().toISOString().split('T')[0]
    });
    setPreviewMode(false);
    setModalOpen(true);
  };

  const handleDelete = async (postId) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const res = await fetch(`/api/posts/${postId}`, { method: 'DELETE' });
      if (res.ok) {
        showNotification('Article deleted successfully.');
        setPosts(prev => prev.filter(p => String(p.id) !== String(postId)));
      } else {
        showNotification('Server could not delete article.');
      }
    } catch (err) {
      showNotification('Network error while deleting.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title) {
      alert('Title is required');
      return;
    }

    try {
      if (editingPost) {
        // PUT update
        const res = await fetch(`/api/posts/${editingPost.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        const updated = await res.json();
        setPosts(prev => prev.map(p => (String(p.id) === String(editingPost.id) ? updated : p)));
        showNotification('Article updated successfully!');
      } else {
        // POST create
        const res = await fetch('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        const created = await res.json();
        setPosts(prev => [created, ...prev]);
        showNotification('New article created successfully!');
      }
      setModalOpen(false);
    } catch (err) {
      alert('Error saving post: ' + err.message);
    }
  };

  // Quick image selection options from local images
  const sampleImages = [
    { label: 'Global Warming', path: '/images/global-warming-1.jpg' },
    { label: 'Power Plant', path: '/images/view-power-plant-emitting-co2-near-forest-1.jpg' },
    { label: 'Engine CAD Render', path: '/images/RVCR-–-A-New-Dimension-1-1.jpg' },
    { label: 'Article Graph', path: '/images/Article-1-768x768-1.png' },
    { label: 'Detroit Prototype', path: '/images/Phy-Detroit-Proto-pic-left-Iso.jpg' },
    { label: 'Wind Turbine', path: '/images/wind-turbine.jpg' },
    { label: 'India Innovation', path: '/images/striving-for-indias-1-1.jpg' }
  ];

  return (
    <div className="admin-cms-page">
      {/* Top Banner */}
      <section className="service-hero">
        <div className="container">
          <div className="admin-header-actions">
            <div>
              <span className="badge-pill">GYATK Administration</span>
              <h1 className="service-page-title" style={{ fontSize: '2.4rem', marginTop: '0.5rem' }}>
                Blog Content Management System
              </h1>
              <p className="service-page-desc" style={{ fontSize: '1rem' }}>
                Create, edit, and publish technical insights directly to the live GYATK blog feed.
              </p>
            </div>

            <button className="btn btn-primary" onClick={handleOpenCreate}>
              <Plus size={18} />
              <span>Create New Article</span>
            </button>
          </div>

          {notification && (
            <div style={{
              background: 'rgba(0, 184, 148, 0.2)',
              border: '1px solid var(--color-accent)',
              color: 'var(--color-white)',
              padding: '0.75rem 1.25rem',
              borderRadius: 'var(--border-radius)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <Check size={18} style={{ color: 'var(--color-accent)' }} />
              <span>{notification}</span>
            </div>
          )}

          {/* Stats Bar */}
          <div className="admin-stats-row">
            <div className="admin-stat-card">
              <FileText size={28} style={{ color: 'var(--color-accent)' }} />
              <div>
                <div className="admin-stat-number">{posts.length}</div>
                <div className="admin-stat-label">Total Articles</div>
              </div>
            </div>

            <div className="admin-stat-card">
              <Folder size={28} style={{ color: 'var(--color-teal)' }} />
              <div>
                <div className="admin-stat-number">{new Set(posts.map(p => p.category)).size}</div>
                <div className="admin-stat-label">Active Categories</div>
              </div>
            </div>

            <div className="admin-stat-card">
              <Calendar size={28} style={{ color: 'var(--color-cyan)' }} />
              <div>
                <div className="admin-stat-number">Live</div>
                <div className="admin-stat-label">Real-Time Sync</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Table Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>Media</th>
                  <th>Title & Slug</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((p) => (
                  <tr key={p.id || p.slug}>
                    <td>
                      <img 
                        src={p.image || '/images/global-warming-1.jpg'} 
                        alt="" 
                        style={{ width: '50px', height: '38px', objectFit: 'cover', borderRadius: '4px' }}
                        onError={(e) => { e.target.src = '/images/global-warming-1.jpg'; }}
                      />
                    </td>
                    <td>
                      <div className="admin-post-title">{p.title}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>/blog/{p.slug}</div>
                    </td>
                    <td>
                      <span className="badge-pill" style={{ fontSize: '0.7rem' }}>{p.category || 'General'}</span>
                    </td>
                    <td>{p.date}</td>
                    <td>
                      <div className="admin-actions-cell" style={{ justifyContent: 'flex-end' }}>
                        <Link 
                          to={`/blog/${p.slug}`} 
                          target="_blank" 
                          className="action-btn"
                          style={{ background: 'rgba(255,255,255,0.06)', color: '#cbd5e1' }}
                          title="View Live Article"
                        >
                          <ExternalLink size={14} />
                        </Link>
                        <button 
                          className="action-btn edit" 
                          onClick={() => handleOpenEdit(p)}
                          title="Edit Article"
                        >
                          <Edit2 size={14} />
                          <span>Edit</span>
                        </button>
                        <button 
                          className="action-btn delete" 
                          onClick={() => handleDelete(p.id)}
                          title="Delete Article"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Create / Edit Modal */}
      {modalOpen && (
        <div className="admin-modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="admin-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                {editingPost ? 'Edit Blog Article' : 'Create New Technical Article'}
              </h3>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <button 
                  type="button" 
                  className={`action-btn ${previewMode ? 'edit' : ''}`}
                  style={{ background: previewMode ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)', color: previewMode ? '#000' : '#fff' }}
                  onClick={() => setPreviewMode(!previewMode)}
                >
                  <Eye size={14} />
                  <span>{previewMode ? 'Show Editor' : 'Live Preview'}</span>
                </button>
                <button 
                  className="lightbox-close-btn" 
                  style={{ position: 'static', width: '32px', height: '32px' }} 
                  onClick={() => setModalOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {previewMode ? (
              <div style={{ background: '#0a1628', padding: '1.5rem', borderRadius: '8px', maxHeight: '60vh', overflowY: 'auto' }}>
                <span className="badge-pill">{formData.category}</span>
                <h2 style={{ color: '#fff', margin: '0.75rem 0' }}>{formData.title || 'Untitled Post'}</h2>
                <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1rem' }}>{formData.date}</div>
                {formData.image && (
                  <img src={formData.image} alt="" style={{ width: '100%', maxHeight: '250px', objectFit: 'cover', borderRadius: '6px', marginBottom: '1rem' }} />
                )}
                <div 
                  className="post-content-body" 
                  dangerouslySetInnerHTML={{ __html: formData.content || '<p>No content provided.</p>' }} 
                />
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="admin-form-group">
                  <label className="admin-form-label">Article Title *</label>
                  <input 
                    type="text" 
                    className="admin-form-input" 
                    value={formData.title} 
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    placeholder="e.g. Revolutionizing Hydrogen Combustion via RVCR"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Category</label>
                    <select 
                      className="admin-form-select"
                      value={formData.category} 
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="Clean Tech">Clean Tech</option>
                      <option value="Green Energy">Green Energy</option>
                      <option value="Climate Tech">Climate Tech</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Innovation">Innovation</option>
                      <option value="Sustainability">Sustainability</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Architecture">Architecture</option>
                      <option value="Company">Company</option>
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Publication Date</label>
                    <input 
                      type="date" 
                      className="admin-form-input" 
                      value={formData.date} 
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Featured Cover Image URL</label>
                  <input 
                    type="text" 
                    className="admin-form-input" 
                    value={formData.image} 
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="/images/example.jpg"
                  />
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Quick Select:</span>
                    {sampleImages.map((s) => (
                      <button
                        type="button"
                        key={s.label}
                        onClick={() => setFormData({ ...formData, image: s.path })}
                        style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.06)', color: '#cbd5e1', padding: '0.15rem 0.45rem', borderRadius: '4px' }}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Short Excerpt</label>
                  <textarea 
                    className="admin-form-textarea" 
                    rows={2}
                    value={formData.excerpt} 
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Brief 1-2 sentence preview for search & cards..."
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Article Content (HTML supported) *</label>
                  <textarea 
                    className="admin-form-textarea" 
                    rows={8}
                    value={formData.content} 
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="<p>Full article body...</p><h3>Subheading</h3><p>More details...</p>"
                    required
                  />
                </div>

                <div className="admin-modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <Check size={16} />
                    <span>{editingPost ? 'Update Article' : 'Publish Article'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
