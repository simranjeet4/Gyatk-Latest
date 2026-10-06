# Rebuilt GYATK Website in React & Node.js — Complete Walkthrough

The **GYATK** (https://gyatk.com/) deep-tech website has been completely rebuilt as a modern **React 18/19 + Vite** (frontend) and **Node.js + Express** (backend) application. It replicates the original design, branding colors (deep navy `#0a1628`, tech accent green `#00b894`, teal `#00cec9`), typography (Poppins & Open Sans), layout, all content pages, interactive photo galleries, and introduces a dynamic **Blog CMS Admin Panel**.

---

## 1. Local Server Status & URLs

The full-stack application is currently **running live** on your local machine:

| Service / View | URL | Description |
|---|---|---|
| **Live Web Application** | [http://localhost:5000/](http://localhost:5000/) | Complete React frontend + API serving all pages & assets |
| **Blog CMS Admin Panel** | [http://localhost:5000/admin/blog](http://localhost:5000/admin/blog) | Create, edit, delete, and preview blog articles in real-time |
| **Blog Listing** | [http://localhost:5000/blog](http://localhost:5000/blog) | Searchable feed of all 10 real GYATK articles |
| **Exhibition Gallery** | [http://localhost:5000/gallery](http://localhost:5000/gallery) | Interactive photo viewer with Lightbox modal across 6 international locations |
| **Technology & Patents** | [http://localhost:5000/patents](http://localhost:5000/patents) | Global IPR reach, licensing framework, downloadable patent certificates |
| **API Health Check** | [http://localhost:5000/api/health](http://localhost:5000/api/health) | Backend health status endpoint |

---

## 2. Complete Page & Route Inventory

All pages replicate the original content, headings, and visual styling:

### Core Pages
- **Home (`/`)**: Hero section with rotating energy spheres, prototype card, "Pioneers of RVCR", "Commercialising RVCR", IPR reach with 8 major jurisdictions, 4 strategic pillars, market opportunities, downstream engineering projects, gallery preview, institutional credits, and join CTA.
- **About Us / Zero Emission Technology (`/zero-emission-technology` & `/about`)**: Founder Das Ajee Kamath overview, Focus Areas, Vision, Mission, Strengths, Business Operations, Climate Impact dimension, and Philosophy/Motto.
- **Patents (`/patents`)**: 5-point IPR specificity framework, 4-step Value Realization process, and official downloadable patent certificates (USA, China, Russia, Australia, Singapore, India).
- **Contact Us (`/contact-us`)**: India headquarters address (with CIN), UK affiliate, telephone, email, and clean contact form with instant acknowledgment.
- **Landing Page (`/landing-page`)**: Focused technology partnership conversion page.

### Strategic & Service Pages
- **What We Offer (`/what-we-offer`)**: Technology evaluation, D&D services, collaborative R&D, and SPV licensing models.
- **Why RVCR (`/why-rvcr`)**: Overcoming the fixed-compression dilemma, thermodynamic efficiency, and dynamic multi-fuel agility.
- **Our Proposition (`/proposition`)**: Bridging the fossil-to-green divide without retiring existing manufacturing lines.
- **Strategic Advantage (`/strategic-advantage`)**: ~54% volumetric reduction, ~30% higher thermal efficiency, lower component count.
- **RVCR Market (`/rvcr-market`)**: Commercial transport, marine, off-highway, stationary microgrids, and regulatory compliance (Euro 7, BS-VI).
- **RVCR Business Case (`/rvcr-business-case`)**: CAPEX minimization, OPEX dynamic fuel arbitrage, and SPV frameworks.
- **Technical Services (`/technical-services`)**: CAD/FEA/CFD simulation, precision CNC machining, and dynamometer calibration.
- **Technology & Innovation Services (`/technology-and-innovation-services`)**: TRL acceleration, patent landscape mapping, and proof-of-concept programs.
- **Commercial Services (`/commercial-services`)**: IPR licensing, royalty management, and supply chain qualification.

### International Exhibition Galleries
- **Main Gallery (`/gallery`)**: Filterable photo showcase with interactive Lightbox across all 70+ photos.
- **Location Galleries**:
  - Abu Dhabi (`/gallery/abu-dhabi` & `/abu-dhabi`) — 13 photos
  - Detroit (`/gallery/detroit` & `/detroit`) — 8 photos
  - San Francisco (`/gallery/san-francisco` & `/francisco`) — 12 photos
  - Tehran (`/gallery/tehran`) — 7 photos
  - Trivandrum (`/gallery/trivandrum`) — 11 photos
  - Stuttgart (`/gallery/stuttgart` & `/stuttgart`) — 19 photos

### Dynamic Blog & CMS Admin Panel
- **Public Blog (`/blog`)**: Search bar, category filters (Clean Tech, Green Energy, Sustainability, Innovation, etc.), and responsive article cards.
- **Article Reader (`/blog/:slug`)**: Full article layout with hero banner, date, author badges, and rich formatted content.
- **CMS Admin Dashboard (`/admin/blog`)**:
  - Live metric counter for total articles and active categories.
  - Table of all posts with title, slug, category, date, and actions.
  - **Create & Edit Modal**: Title, slug, category, cover image picker (with one-click sample selectors from local assets), excerpt, and rich HTML editor.
  - **Live Preview Mode**: Instant toggle inside the editor to preview how the article looks before publishing.
  - Full CRUD operations connected to `server/server.js` REST endpoints.

---

## 3. Image Assets Integration

All **314 media files** located in `c:\Users\SAM\Documents\gyatk\images\` are served locally:
- Directly available via `http://localhost:5000/images/<filename>`
- Automatically linked to `client/public/images` via directory junction
- Includes logos, prototypes, hero graphics, gallery webp photos, and granted patent PDFs.

---

## 4. How to Run & Develop Locally

### Run in Production Mode (All-in-one on Port 5000):
```powershell
cd c:\Users\SAM\Documents\gyatk\server
node server.js
```
Open [http://localhost:5000/](http://localhost:5000/) in any browser.

### Run in Development Mode with Hot-Reloading:
1. **Terminal 1 (Backend API & Images):**
   ```powershell
   cd c:\Users\SAM\Documents\gyatk\server
   node server.js
   ```
2. **Terminal 2 (React Vite Dev Server):**
   ```powershell
   cd c:\Users\SAM\Documents\gyatk\client
   npm run dev
   ```
   Open [http://localhost:3000/](http://localhost:3000/) (API calls and images proxy to port 5000).

---

## 5. Verification Results

- **Vite Build**: Compiled into `client/dist` in 824ms with 0 errors.
- **API Health Check**: `GET /api/health` returned HTTP 200 OK.
- **Blog Seed Data**: `GET /api/posts` returned all 10 pre-seeded articles.
- **Static Assets**: `GET /images/gyatk-logo-svg.png` returned HTTP 200 image stream.
- **Frontend SPA Routing**: `GET /` and all client-side routes returned status 200 with `<div id="root">`.
- **Blog CMS API**: Verified programmatic creation and deletion of articles via `POST /api/posts` and `DELETE /api/posts/:id`.
- **Contact Inquiries**: Verified submission logging via `POST /api/contact`.
