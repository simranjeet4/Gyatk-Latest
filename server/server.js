const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, 'data', 'posts.json');
const IMAGES_DIR = path.join(__dirname, '..', 'images');
const CLIENT_DIST = path.join(__dirname, '..', 'client', 'dist');

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Serve static images from local images repository
app.use('/images', express.static(IMAGES_DIR));

// Helper to read posts
function readPosts() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading posts:', err);
    return [];
  }
}

// Helper to write posts
function writePosts(posts) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing posts:', err);
    return false;
  }
}

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// GET all blog posts
app.get('/api/posts', (req, res) => {
  const posts = readPosts();
  // Return sorted descending by date
  posts.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  res.json(posts);
});

// GET single blog post by slug or id
app.get('/api/posts/:slugOrId', (req, res) => {
  const { slugOrId } = req.params;
  const posts = readPosts();
  const post = posts.find(p => p.slug === slugOrId || String(p.id) === slugOrId);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  res.json(post);
});

// POST create blog post (CMS Admin)
app.post('/api/posts', (req, res) => {
  const { title, excerpt, content, category, image, date } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const posts = readPosts();
  
  // Generate a URL-friendly slug
  let slug = req.body.slug || title.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  // Ensure unique slug
  let counter = 1;
  const originalSlug = slug;
  while (posts.some(p => p.slug === slug)) {
    slug = `${originalSlug}-${counter++}`;
  }

  const newPost = {
    id: String(Date.now()),
    title,
    slug,
    category: category || 'Clean Tech',
    image: image || '/images/global-warming-1.jpg',
    excerpt: excerpt || (content ? content.replace(/<[^>]*>?/gm, '').slice(0, 160) + '...' : ''),
    content: content || '',
    date: date || new Date().toISOString().split('T')[0]
  };

  posts.unshift(newPost);
  if (!writePosts(posts)) {
    return res.status(500).json({ error: 'Failed to persist post' });
  }

  res.status(201).json(newPost);
});

// PUT update blog post (CMS Admin)
app.put('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  const posts = readPosts();
  const index = posts.findIndex(p => String(p.id) === String(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  const existing = posts[index];
  const updated = {
    ...existing,
    ...req.body,
    id: existing.id // preserve ID
  };

  posts[index] = updated;
  if (!writePosts(posts)) {
    return res.status(500).json({ error: 'Failed to update post' });
  }

  res.json(updated);
});

// DELETE blog post (CMS Admin)
app.delete('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  let posts = readPosts();
  const initialLength = posts.length;
  posts = posts.filter(p => String(p.id) !== String(id));

  if (posts.length === initialLength) {
    return res.status(404).json({ error: 'Post not found' });
  }

  if (!writePosts(posts)) {
    return res.status(500).json({ error: 'Failed to delete post' });
  }

  res.json({ message: 'Post successfully deleted', id });
});

// POST Contact Form submission (Acknowledged & saved locally)
app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  console.log('Contact inquiry received:', { name, email, phone, subject, message });
  
  // Save to inquiries.json for reference
  try {
    const inquiriesFile = path.join(__dirname, 'data', 'inquiries.json');
    let inquiries = [];
    if (fs.existsSync(inquiriesFile)) {
      inquiries = JSON.parse(fs.readFileSync(inquiriesFile, 'utf8'));
    }
    inquiries.unshift({
      id: Date.now(),
      name,
      email,
      phone,
      subject,
      message,
      receivedAt: new Date().toISOString()
    });
    fs.writeFileSync(inquiriesFile, JSON.stringify(inquiries, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to log inquiry:', err);
  }

  res.json({
    success: true,
    message: 'Thank you for reaching out. We have received your inquiry and will be in touch shortly.'
  });
});

// Serve frontend build if dist exists
if (fs.existsSync(CLIENT_DIST)) {
  app.use(express.static(CLIENT_DIST));
  app.use((req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/images')) {
      return next();
    }
    res.sendFile(path.join(CLIENT_DIST, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`GYATK Server running at http://localhost:${PORT}`);
});
