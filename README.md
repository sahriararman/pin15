# Pinterest Marketing Website

A modern, responsive website for a Pinterest marketing agency built with React, TypeScript, and Tailwind CSS.

## Image Management

### Adding Local Images

To add your own images to the project:

1. **Place images in the `public/images` folder**
   - Create subfolders as needed (e.g., `public/images/hero/`, `public/images/team/`)
   - Supported formats: JPG, PNG, WebP, SVG

2. **Reference images in your components**
   ```jsx
   // For images in public/images/
   <img src="/images/your-image.jpg" alt="Description" />
   
   // For images in subfolders
   <img src="/images/hero/hero-image.jpg" alt="Description" />
   ```

3. **Best practices**
   - Use descriptive filenames (e.g., `pinterest-dashboard-analytics.jpg`)
   - Optimize images for web (compress and resize appropriately)
   - Include alt text for accessibility
   - Consider using WebP format for better compression

### Image Folder Structure

```
public/
├── images/
│   ├── hero/           # Hero section images
│   ├── team/           # Team member photos
│   ├── case-studies/   # Case study images
│   ├── blog/           # Blog post images
│   └── logos/          # Company logos and branding
```

### Example Usage

```jsx
// Hero image with fallback
<img 
  src="/images/hero/pinterest-marketing-dashboard.jpg"
  alt="Pinterest Marketing Dashboard"
  onError={(e) => {
    // Fallback to external image if local image fails
    e.currentTarget.src = "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg";
  }}
/>
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Generate sitemap
npm run generate-sitemap
```

## Features

- Responsive design optimized for all devices
- SEO-friendly with automatic sitemap generation
- Multi-location support
- Blog and case studies
- Contact forms and service pages
- Pinterest-focused design and content

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Lucide React (icons)