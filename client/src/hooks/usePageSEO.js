import { useEffect } from 'react';

// Default Fallback SEO Profiles for GYATK
const DEFAULT_SEO = {
  home: {
    title: "GYATK | RVCR Deep-Tech Kinematics & Zero-Carbon Prime Movers",
    description: "GYATK leads breakthrough engineering in Rotary Variable Compression Ratio (RVCR) prime movers, enabling high-efficiency, multi-fuel zero-carbon energy conversion.",
    keywords: "RVCR, GYATK, Rotary Variable Compression Ratio, zero carbon, prime mover, clean tech, kinematics",
    canonical: "https://gyatk.com/",
    ogImage: "/images/logoA.png"
  },
  about: {
    title: "Zero Emission Technology & Vision | GYATK About Us",
    description: "Discover GYATK's mission to commercialize RVCR kinematics for self-sustainable zero-carbon industrial ecosystems and high-efficiency prime movers.",
    keywords: "Zero emission technology, GYATK about, RVCR vision, green prime mover",
    canonical: "https://gyatk.com/zero-emission-technology",
    ogImage: "/images/bubble.png"
  },
  'rvcr-business-case': {
    title: "RVCR Business Case & Techno-Commercial Feasibility | GYATK",
    description: "Explore the business viability, Capex efficiency, and disruptive commercial potential of Rotary Variable Compression Ratio systems across automotive and power sectors.",
    keywords: "RVCR business case, techno-commercial feasibility, engine licensing",
    canonical: "https://gyatk.com/rvcr-business-case",
    ogImage: "/images/machine.png"
  },
  'why-rvcr': {
    title: "Why RVCR? Superior Mechanical Efficiency & Fuel Flexibility | GYATK",
    description: "Learn how RVCR kinematics overcome conventional thermodynamic limitations with dynamic compression ratios tailored for hydrogen, biofuels, and synthetic fuels.",
    keywords: "Why RVCR, variable compression ratio, hydrogen engine, thermal efficiency",
    canonical: "https://gyatk.com/why-rvcr",
    ogImage: "/images/shaft.png"
  },
  'strategic-advantage': {
    title: "Strategic Advantage of RVCR Technology | GYATK",
    description: "Unlocking unfair technical advantages: compact power-to-weight ratios, simplified manufacturing, low friction, and multi-mode energy harvesting.",
    keywords: "RVCR advantage, competitive edge, prime mover engineering",
    canonical: "https://gyatk.com/strategic-advantage",
    ogImage: "/images/strength.png"
  },
  'what-we-offer': {
    title: "What We Offer | IP Licensing, Pilot R&D & RVCR Integration | GYATK",
    description: "GYATK offers end-to-end technology integration, pilot prototype realization, and exclusive IPR licensing for global OEMs and tier-1 manufacturers.",
    keywords: "OEM licensing, technology integration, prototype realization, RVCR IP",
    canonical: "https://gyatk.com/what-we-offer",
    ogImage: "/images/logoA.png"
  },
  patents: {
    title: "Global Patents & Intellectual Property Portfolio | GYATK",
    description: "Explore GYATK's international patent portfolio protecting RVCR kinematics, dynamic displacement mechanisms, and multi-application prime mover designs.",
    keywords: "GYATK patents, RVCR intellectual property, energy conversion patents",
    canonical: "https://gyatk.com/patents",
    ogImage: "/images/logoA.png"
  },
  blog: {
    title: "Blog & Industry Insights | GYATK Clean Tech Innovation",
    description: "Articles, whitepapers, and thought leadership on zero-carbon power systems, hydrogen combustion, and advanced machine mechanics.",
    keywords: "clean tech blog, RVCR articles, energy conversion insights",
    canonical: "https://gyatk.com/blog",
    ogImage: "/images/climate-change.jpg"
  },
  'contact-us': {
    title: "Contact GYATK | Partner With Us On Zero-Carbon Innovation",
    description: "Connect with the GYATK technical leadership team for JV inquiries, licensing evaluations, pilot project collaborations, and investor relations.",
    keywords: "Contact GYATK, RVCR partnerships, commercial inquiries",
    canonical: "https://gyatk.com/contact-us",
    ogImage: "/images/logoA.png"
  },
  'rvcr-market': {
    title: "Market Opportunities & Growth Horizons | GYATK RVCR",
    description: "Target market segments including distributed power generation, marine transport, aviation APUs, and off-grid renewable energy storage.",
    keywords: "RVCR market size, clean power generation, distributed energy",
    canonical: "https://gyatk.com/rvcr-market",
    ogImage: "/images/machine.png"
  }
};

/**
 * Custom Hook to apply dynamic SEO metadata to any page
 * @param {string} pageKey - e.g. 'home', 'about', 'patents', etc.
 * @param {object} customOverrides - optional custom overrides (e.g. for dynamic blog post)
 */
export function usePageSEO(pageKey, customOverrides = {}) {
  useEffect(() => {
    let isMounted = true;

    // Helper function to update or create a meta tag
    const setMetaTag = (name, content, isProperty = false) => {
      if (!content) return;
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) {
          el.setAttribute('property', name);
        } else {
          el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLinkTag = (rel, href) => {
      if (!href) return;
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    const applySEO = (seo) => {
      if (!seo) return;
      if (seo.title) document.title = seo.title;
      setMetaTag('description', seo.description);
      setMetaTag('keywords', seo.keywords);
      setMetaTag('robots', seo.robots || 'index, follow');

      // OG Tags
      setMetaTag('og:title', seo.ogTitle || seo.title, true);
      setMetaTag('og:description', seo.ogDescription || seo.description, true);
      setMetaTag('og:image', seo.ogImage || '/images/logoA.png', true);
      setMetaTag('og:url', seo.canonical || window.location.href, true);
      setMetaTag('og:type', 'website', true);

      // Twitter Cards
      setMetaTag('twitter:card', 'summary_large_image');
      setMetaTag('twitter:title', seo.ogTitle || seo.title);
      setMetaTag('twitter:description', seo.ogDescription || seo.description);
      setMetaTag('twitter:image', seo.ogImage || '/images/logoA.png');

      // Canonical
      if (seo.canonical) {
        setLinkTag('canonical', seo.canonical);
      }
    };

    // 1. Immediately apply fallback
    const fallback = DEFAULT_SEO[pageKey] || {};
    const initialConfig = { ...fallback, ...customOverrides };
    applySEO(initialConfig);

    // 2. Fetch live config from server API
    if (pageKey) {
      fetch(`/api/seo/${pageKey}`)
        .then(res => res.ok ? res.json() : null)
        .then(liveConfig => {
          if (isMounted && liveConfig) {
            applySEO({ ...fallback, ...liveConfig, ...customOverrides });
          }
        })
        .catch(() => {
          // Fallback is already applied
        });
    }

    return () => {
      isMounted = false;
    };
  }, [pageKey, JSON.stringify(customOverrides)]);
}
