# Portfolio Frontend

React और Vite के साथ बनाया गया modern portfolio website

## Quick Start

```bash
# Dependencies install करें
npm install

# Development server start करें
npm run dev

# Production build बनाएं
npm run build

# Production build को preview करें
npm run preview
```

## Features

- ⚛️ React 18
- ⚡ Vite for fast development
- 🎨 Modern CSS with custom properties
- 📱 Fully responsive design
- 🔄 React Router for navigation
- 🌐 Axios for API calls
- ✨ Smooth animations और transitions

## Pages

### Home (`/`)
- Hero section with introduction
- Skills showcase
- Featured projects
- Call-to-action section

### Projects (`/projects`)
- सभी projects की listing
- Category-based filtering
- Search functionality (coming soon)

### Project Detail (`/projects/:id`)
- Detailed project information
- Technologies used
- Live demo और source code links

### Contact (`/contact`)
- Contact form
- Social media links
- Contact information

## Components

### Navbar
- Sticky navigation
- Active link highlighting
- Mobile responsive menu

### Footer
- Quick links
- Social media icons
- Copyright information

## Customization

### Colors बदलने के लिए:
`src/styles/index.css` में CSS variables edit करें:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
}
```

### Content Update करने के लिए:

1. **Home Page**: `src/pages/Home.jsx`
   - Hero section में naam और description
   - Skills section में technologies

2. **Contact Page**: `src/pages/Contact.jsx`
   - Email, phone, location
   - Social media links

3. **Footer**: `src/components/Footer.jsx`
   - Social media URLs
   - Quick links

## API Integration

Backend API के साथ communicate करने के लिए `src/services/api.js` use होता है.

### API Configuration

Environment variable set करें (optional):
```
VITE_API_URL=http://localhost:5000/api
```

या default `http://localhost:5000/api` use होगा.

## Build और Deployment

### Production Build
```bash
npm run build
```

Build files `dist/` folder में generate होंगे.

### Deployment Options

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

#### Static Hosting
`dist/` folder को किसी भी static hosting service पर deploy करें:
- GitHub Pages
- Vercel
- Netlify
- Firebase Hosting
- AWS S3

## Scripts

- `npm run dev` - Development server start करें
- `npm run build` - Production build बनाएं
- `npm run preview` - Production build को locally preview करें
- `npm run lint` - Code linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Code splitting with React Router
- Lazy loading of images
- Optimized CSS
- Minified production build
- Gzip compression ready
