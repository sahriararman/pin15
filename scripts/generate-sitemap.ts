import * as fs from 'fs';
import * as path from 'path';

// Base URL for your website
const BASE_URL = 'https://pinclimb.com';

// Import data - using require for better compatibility
const locationsData = [
  {
    id: 'new-york',
    name: 'New York',
    state: 'NY'
  },
  {
    id: 'los-angeles',
    name: 'Los Angeles',
    state: 'CA'
  },
  {
    id: 'chicago',
    name: 'Chicago',
    state: 'IL'
  },
  {
    id: 'miami',
    name: 'Miami',
    state: 'FL'
  },
  {
    id: 'austin',
    name: 'Austin',
    state: 'TX'
  },
  {
    id: 'seattle',
    name: 'Seattle',
    state: 'WA'
  }
];

const blogPostsData = [
  {
    id: 'pinterest-seo-guide-2024',
    publishDate: '2024-01-15'
  },
  {
    id: 'pinterest-ads-strategy-2024',
    publishDate: '2024-01-10'
  },
  {
    id: 'pinterest-content-creation-tips',
    publishDate: '2024-01-05'
  },
  {
    id: 'pinterest-analytics-guide',
    publishDate: '2024-01-01'
  },
  {
    id: 'pinterest-trends-2024',
    publishDate: '2023-12-28'
  },
  {
    id: 'pinterest-business-account-setup',
    publishDate: '2023-12-20'
  }
];

const caseStudiesData = [
  { id: 'bloom-co' },
  { id: 'artisan-kitchen' },
  { id: 'sunset-wellness' },
  { id: 'urban-fashion' },
  { id: 'tech-startup' },
  { id: 'luxury-travel' }
];

const detailedServicesData = [
  { id: 'pinterest-strategy' },
  { id: 'content-creation' },
  { id: 'pinterest-ads' }
];

// Static routes from your App.tsx
const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/testimonials',
  '/blog',
  '/contact',
  '/services/pinterest-organic-growth',
  '/services/pinterest-pin-design',
  '/services/pinterest-ads',
  '/services/pinterest-seo-ecommerce',
  '/services/social-media-marketing'
];

function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static routes
  staticRoutes.forEach(route => {
    sitemap += `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  });

  // Add location pages
  locationsData.forEach(location => {
    sitemap += `
  <url>
    <loc>${BASE_URL}/${location.id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  // Add blog posts
  blogPostsData.forEach(post => {
    const postDate = new Date(post.publishDate).toISOString().split('T')[0];
    sitemap += `
  <url>
    <loc>${BASE_URL}/blog/${post.id}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  // Add case studies
  caseStudiesData.forEach(caseStudy => {
    sitemap += `
  <url>
    <loc>${BASE_URL}/case-study/${caseStudy.id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  // Add detailed service pages
  detailedServicesData.forEach(service => {
    sitemap += `
  <url>
    <loc>${BASE_URL}/services/${service.id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Generated ${staticRoutes.length} static routes`);
  console.log(`📍 Generated ${locationsData.length} location pages`);
  console.log(`📍 Generated ${blogPostsData.length} blog posts`);
  console.log(`📍 Generated ${caseStudiesData.length} case studies`);
  console.log(`📍 Generated ${detailedServicesData.length} service pages`);
  console.log(`📍 Total URLs: ${staticRoutes.length + locationsData.length + blogPostsData.length + caseStudiesData.length + detailedServicesData.length}`);
}

// Run the generator
generateSitemap();
