# GYATK - Zero Emission Deep Tech Platform

A full-stack web application for GYATK, featuring RVCR (Rotary Variable Compression Ratio) deep-tech innovation, zero-emission technology showcases, interactive presentations, and a content management system.

## Project Structure

```text
gyatk/
├── client/          # Frontend built with React, Vite, Lucide icons, and Tailwind/custom CSS
│   ├── public/      # Static assets & images
│   ├── src/         # React components, pages, and styles
│   └── package.json
├── server/          # Backend built with Node.js & Express
│   ├── data/        # JSON storage for blogs, contacts, and inquiries
│   ├── server.js    # Express API endpoints
│   └── package.json
├── images/          # Archive of technology graphics and patent assets
└── package.json     # Workspace management scripts
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Running Locally

1. **Install Dependencies**
   ```bash
   # Install server dependencies
   cd server && npm install

   # Install client dependencies
   cd ../client && npm install
   ```

2. **Start Backend Server**
   ```bash
   cd server
   node server.js
   # Runs on http://localhost:5000
   ```

3. **Start Frontend Dev Server**
   ```bash
   cd client
   npm run dev
   # Runs on http://localhost:3000
   ```

4. **Production Build**
   ```bash
   cd client
   npm run build
   ```
