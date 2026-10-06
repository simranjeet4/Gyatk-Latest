import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react';
import { INITIAL_POSTS } from '../data/initialPosts';
import './Blog.css';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(() => {
    return INITIAL_POSTS.find(p => p.slug === slug || String(p.id) === slug);
  });
  const [loading, setLoading] = useState(!post);

  useEffect(() => {
    fetch(`/api/posts/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found on server');
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback already checked in initial state
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="section section-dark" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--color-accent)' }}>Loading article...</p>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-post-page">
      {/* Article Header Banner */}
      <section className="service-hero">
        <div className="container" style={{ maxWidth: '860px' }}>
          <Link to="/blog" className="btn btn-secondary" style={{ marginBottom: '1.75rem' }}>
            <ArrowLeft size={16} />
            <span>Back to Insights</span>
          </Link>

          <div className="post-header-meta">
            <span className="badge-pill">
              <Tag size={12} />
              <span>{post.category || 'Climate Tech'}</span>
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Calendar size={14} />
              <span>Published {post.date}</span>
            </div>
          </div>

          <h1 className="service-page-title" style={{ fontSize: '2.6rem' }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="section section-dark">
        <div className="container">
          <article className="post-article-wrap">
            {post.image && (
              <div className="post-featured-media">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  onError={(e) => { e.target.src = '/images/global-warming-1.jpg'; }}
                />
              </div>
            )}

            <div 
              className="post-content-body"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/blog" className="btn btn-secondary">
                <ArrowLeft size={16} />
                <span>All Articles</span>
              </Link>
              <Link to="/contact-us" className="btn btn-primary">
                <span>Inquire with Authors</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
