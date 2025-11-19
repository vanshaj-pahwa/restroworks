# Restroworks Frontend - Next.js 15

> **Production-ready, multi-language website with headless CMS integration**

**🚀 Live Demo:** https://restroworks-fe.vercel.app/

A modern, SEO-optimized frontend built with Next.js 15, featuring PayloadCMS integration, multi-language support, and professional UI design.

---

## 🎯 Overview

This is the **frontend application** for the Restroworks CMS-powered website. It connects to PayloadCMS backend to fetch dynamic content and renders it with a beautiful, responsive UI.

### ✨ Key Features

- ✅ **Next.js 15** - Latest App Router with Server Components
- ✅ **Multi-Language** - English, Spanish, French with language switcher
- ✅ **Professional UI** - Modern design with animations and effects
- ✅ **35+ Components** - shadcn/ui component library
- ✅ **SEO Optimized** - Sitemap, robots.txt, dynamic metadata
- ✅ **Fully Responsive** - Mobile-first design
- ✅ **Type-Safe** - Complete TypeScript coverage
- ✅ **Accessible** - WCAG 2.1 AA compliant

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- PayloadCMS backend running (see `../payloadcms-backend/restroworks-be/`)

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Edit .env.local and add your backend URL
NEXT_PUBLIC_PAYLOAD_CMS_URL=http://localhost:3000

# Start development server
npm run dev
```

### Access the Application

- **Frontend:** http://localhost:3001
- **English:** http://localhost:3001/en
- **Spanish:** http://localhost:3001/es
- **French:** http://localhost:3001/fr
- **Contact:** http://localhost:3001/en/contact

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── globals.css                   # Global styles + animations
│   ├── robots.ts                     # SEO robots.txt
│   ├── sitemap.ts                    # SEO sitemap.xml
│   └── [lang]/                       # Language routing
│       ├── layout.tsx                # Language layout with header/footer
│       ├── page.tsx                  # Homepage
│       └── contact/
│           ├── page.tsx              # Contact page
│           └── contact-form.tsx      # Contact form component
│
├── components/
│   ├── layout/
│   │   ├── header.tsx                # Header with navigation
│   │   ├── footer.tsx                # Footer with links
│   │   ├── language-switcher.tsx    # Language dropdown
│   │   └── block-renderer.tsx       # Dynamic block renderer
│   │
│   ├── sections/
│   │   └── hero.tsx                  # Hero section component
│   │
│   ├── blocks/                       # CMS block components
│   │   ├── features-block.tsx
│   │   ├── testimonials-block.tsx
│   │   ├── cta-block.tsx
│   │   ├── content-block.tsx
│   │   ├── media-block.tsx
│   │   ├── archive-block.tsx
│   │   └── form-block.tsx
│   │
│   └── ui/                           # 35+ shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── form.tsx
│       └── ... (32 more)
│
├── lib/
│   ├── payload-types.ts              # Generated TypeScript types
│   ├── dictionaries.ts               # Translation loader
│   ├── i18n-config.ts                # i18n configuration
│   ├── actions.ts                    # Server actions
│   ├── schemas.ts                    # Zod validation schemas
│   └── utils.ts                      # Utility functions
│
├── dictionaries/                     # Translation files
│   ├── en.json                       # English
│   ├── es.json                       # Spanish
│   └── fr.json                       # French
│
├── hooks/
│   └── use-toast.ts                  # Toast notifications
│
└── middleware.ts                     # Language routing middleware
```

---

## 🎨 UI Components

### Layout Components

- **Header** - Sticky header with navigation and language switcher
- **Footer** - Multi-column footer with links and social icons
- **Language Switcher** - Stripe-style dropdown for language selection

### Content Blocks

All blocks are dynamically rendered from CMS:

1. **Hero Block** - Full-width hero with headline, subheading, CTAs, and stats
2. **Features Block** - Grid of feature cards with icons
3. **Testimonials Block** - Customer testimonials with ratings
4. **CTA Block** - Call-to-action section with trust badges
5. **Content Block** - Rich text content
6. **Media Block** - Images and videos
7. **Archive Block** - Blog post listing
8. **Form Block** - Custom forms

### UI Library (shadcn/ui)

35+ accessible components including:
- Buttons, Cards, Inputs, Forms
- Dropdowns, Dialogs, Tooltips
- Accordions, Tabs, Carousels
- And more...

---

## 🌍 Multi-Language Support

### Supported Languages

| Code | Language | Flag |
|------|----------|------|
| `en` | English | 🇬🇧 |
| `es` | Spanish | 🇪🇸 |
| `fr` | French | 🇫🇷 |

### URL Structure

```
/en          → English homepage
/en/contact  → English contact page
/es          → Spanish homepage
/es/contact  → Spanish contact page
/fr          → French homepage
/fr/contact  → French contact page
```

### How It Works

1. **Middleware** - Detects language from URL and redirects if missing
2. **Dictionaries** - Static translations for UI elements
3. **CMS Content** - Dynamic content fetched based on locale
4. **Language Switcher** - Maintains current page when switching languages

### Adding Translations

Edit dictionary files in `src/dictionaries/`:

```json
// en.json
{
  "nav": {
    "home": "Home",
    "contact": "Contact"
  },
  "hero": {
    "stats": {
      "uptime": "Uptime",
      "customers": "Happy Customers"
    }
  }
}
```

---

## 🔍 SEO Features

### Implemented

- ✅ **Dynamic Metadata** - Title, description from CMS
- ✅ **Sitemap.xml** - Auto-generated for all pages and languages
- ✅ **Robots.txt** - Search engine crawling configuration
- ✅ **Open Graph** - Social media sharing tags
- ✅ **Twitter Cards** - Enhanced Twitter sharing
- ✅ **Structured Data** - Schema.org markup
- ✅ **Image Optimization** - Next.js Image component
- ✅ **Performance** - Core Web Vitals optimized

### Access SEO Files

**Live Demo:**
- Sitemap: https://restroworks-fe.vercel.app/sitemap.xml
- Robots: https://restroworks-fe.vercel.app/robots.txt

**Local Development:**
- Sitemap: http://localhost:3001/sitemap.xml
- Robots: http://localhost:3001/robots.txt

---

## 🎨 Styling & Design

### Tailwind CSS

- **Utility-first** CSS framework
- **Custom theme** with purple/violet/indigo color scheme
- **Responsive** breakpoints for all devices
- **Dark mode** ready (optional)


---

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start dev server (port 3001)
npm run dev -- -p 3002   # Start on custom port

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # TypeScript type checking

# Utilities
npm run clean            # Clean build artifacts
```

---

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```bash
# Backend URL (required)
NEXT_PUBLIC_PAYLOAD_CMS_URL=http://localhost:3000

# Site URL (optional, for production)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Next.js Config

Key configurations in `next.config.ts`:

```typescript
{
  images: {
    domains: ['localhost'], // Add your CMS domain
  },
  i18n: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
  }
}
```


## 🐛 Troubleshooting

### Common Issues

**Issue:** Frontend can't connect to backend
```bash
# Solution: Check backend is running
cd ../payloadcms-backend/restroworks-be
npm run dev

# Verify NEXT_PUBLIC_PAYLOAD_CMS_URL in .env.local
```

**Issue:** Content not showing
```bash
# Solution: Ensure page is published in CMS
# Check slug matches URL
# Verify locale is correct
```

**Issue:** Images not loading
```bash
# Solution: Add backend domain to next.config.ts
images: {
  domains: ['localhost', 'your-backend.com'],
}
```

**Issue:** Language switcher not working
```bash
# Solution: Check middleware.ts is configured
# Verify i18n-config.ts has all locales
```

---

## 🔗 Links

- **Repository:** https://github.com/vanshaj-pahwa/restroworks
- **Backend README:** [../payloadcms-backend/restroworks-be/README.md](../payloadcms-backend/restroworks-be/README.md)
- **Main README:** [../README.md](../README.md)
