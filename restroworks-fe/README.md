# Restroworks - CMS-Powered Multi-Language Website

A production-ready, next-generation web application built with **Next.js 15** (frontend), **PayloadCMS** (backend), and **Tailwind CSS**. This project demonstrates modern web development practices including headless CMS integration, multi-language support, responsive design, and SEO optimization.

## 🎯 Project Overview

This is a **CMS-powered, SEO-optimized, multi-language website prototype** for Restroworks. The architecture separates content management (Payload CMS) from presentation (Next.js), allowing content editors to manage pages without touching code.

### Key Features
✅ **Headless CMS Integration** - Dynamic content from Payload CMS  
✅ **Next.js 15 App Router** - Modern React with server components  
✅ **Multi-Language Support** - English, Spanish, French with language switcher  
✅ **Tailwind CSS** - Responsive, utility-first styling  
✅ **SEO Optimized** - Sitemap, robots.txt, metadata from CMS  
✅ **Accessible** - Semantic HTML, @radix-ui components, WCAG compliant  
✅ **Modular Architecture** - Reusable content blocks (Hero, Features, Testimonials, CTA)  
✅ **Contact Form** - Form submissions stored in CMS  

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB (local or Payload Cloud)
- Payload CMS backend running

### Installation

1. **Navigate to project:**
   ```bash
   cd /Users/vanshajpahwa/Documents/restroworks-fe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create `.env.local`:
   ```bash
   NEXT_PUBLIC_PAYLOAD_CMS_URL=http://localhost:3000
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   - Frontend: http://localhost:3001 (or available port)
   - CMS Admin: http://localhost:3000/admin

### Access the Application
- **Homepage:** http://localhost:3001/en
- **Spanish:** http://localhost:3001/es
- **French:** http://localhost:3001/fr
- **Contact:** http://localhost:3001/en/contact

---

## 📚 CMS Content Setup

### Step 1: Create Homepage Content

1. **Go to Payload CMS Admin:** http://localhost:3000/admin
2. **Create Page:**
   - Collections → Pages → Create New
   - **Title:** Home
   - **Slug:** home
   - **Locale:** English (en)
   - **Meta Title:** Welcome to Restroworks
   - **Meta Description:** Premium dining experience

3. **Add Content Blocks:**
   - Click **Content** tab
   - In **Layout** field, click **Add Block**
   - Add these blocks in order:

#### Hero Block
```json
{
  "blockType": "hero",
  "headline": "Welcome to Restroworks",
  "subheading": "Experience exceptional dining",
  "cta_button": "Reserve a Table"
}
```

#### Features Block
```json
{
  "blockType": "features",
  "title": "Why Choose Us",
  "items": [
    {
      "title": "Fresh Ingredients",
      "description": "Daily sourced premium ingredients",
      "icon": "Rocket"
    },
    {
      "title": "Expert Chefs",
      "description": "Award-winning culinary team",
      "icon": "TrendingUp"
    },
    {
      "title": "Ambiance",
      "description": "Perfect dining atmosphere",
      "icon": "DatabaseZap"
    },
    {
      "title": "Service",
      "description": "Attentive and professional service",
      "icon": "Languages"
    }
  ]
}
```

#### Testimonials Block
```json
{
  "blockType": "testimonials",
  "title": "What Our Guests Say",
  "items": [
    {
      "quote": "Incredible food and service!",
      "author": "John Smith",
      "role": "Regular Customer"
    },
    {
      "quote": "Best dining in the city.",
      "author": "Maria Garcia",
      "role": "Food Critic"
    }
  ]
}
```

#### CTA Block
```json
{
  "blockType": "cta",
  "headline": "Ready to Join Us?",
  "button_text": "Book Now"
}
```

4. **Save & Publish**
5. **Visit frontend:** http://localhost:3001/en

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── globals.css                # Tailwind CSS + theme
│   ├── robots.ts                  # SEO: robots.txt
│   ├── sitemap.ts                 # SEO: sitemap.xml
│   └── [lang]/
│       ├── layout.tsx             # Language layout
│       ├── page.tsx               # Homepage
│       └── contact/
│           ├── page.tsx           # Contact page
│           └── contact-form.tsx   # Contact form
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── language-switcher.tsx
│   │   └── block-renderer.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── testimonials.tsx
│   │   └── cta.tsx
│   └── ui/                        # 23 @radix-ui components
├── lib/
│   ├── payload-types.ts
│   ├── dictionaries.ts
│   ├── i18n-config.ts
│   ├── actions.ts
│   ├── schemas.ts
│   └── utils.ts
├── hooks/
│   └── use-toast.ts
├── middleware.ts
└── dictionaries/
    ├── en.json
    ├── es.json
    └── fr.json
```

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 15.5.6 | Frontend framework |
| **React** | 18.2.0 | UI library |
| **TypeScript** | 5.3.0 | Type safety |
| **Tailwind CSS** | 3.x | Styling |
| **@radix-ui** | Latest | Accessible components |
| **Payload CMS** | 2.x | Headless CMS |
| **React Hook Form** | 7.x | Form handling |
| **Zod** | 4.x | Validation |
| **Lucide React** | 0.55.x | Icons |

---

## 📖 CMS Modeling - Content Blocks

The application uses modular content blocks:

### 1. Hero Block
```typescript
{
  blockType: "hero",
  headline: string,
  subheading: string,
  cta_button: string
}
```

### 2. Features Block
```typescript
{
  blockType: "features",
  title: string,
  items: {
    title: string,
    description: string,
    icon: string
  }[]
}
```

### 3. Testimonials Block
```typescript
{
  blockType: "testimonials",
  title: string,
  items: {
    quote: string,
    author: string,
    role: string
  }[]
}
```

### 4. CTA Block
```typescript
{
  blockType: "cta",
  headline: string,
  button_text: string
}
```

---

## 🌍 Multi-Language Implementation

### Supported Languages
- **en** - English
- **es** - Spanish
- **fr** - French

### How to Add Multi-Language Content

1. **Create page for each language:**
   - Home (en)
   - Home (es)
   - Home (fr)

2. **Same slug, different locale:**
   - All have slug: `home`
   - Different locale field: `en`, `es`, `fr`

3. **URLs automatically handle routing:**
   - `/en/home` → English
   - `/es/home` → Spanish
   - `/fr/home` → French

4. **Language Switcher in header** - click to switch languages

---

## 🔍 SEO Features

✅ **Dynamic Metadata** - Title and description from CMS  
✅ **Sitemap** - Auto-generated at `/sitemap.xml`  
✅ **Robots.txt** - Auto-generated at `/robots.txt`  
✅ **Open Graph Tags** - Social media sharing ready  
✅ **Structured Data** - Schema.org markup  
✅ **Image Optimization** - Next.js Image component  
✅ **Performance** - Core Web Vitals optimized  

---

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # TypeScript check
```

---

## 🚀 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Connect to Vercel
3. Set `NEXT_PUBLIC_PAYLOAD_CMS_URL` env var
4. Deploy

### Backend (Payload CMS)
- Deploy to Payload Cloud or self-hosted Node server
- Configure MongoDB connection
- Set environment variables

---

## 📞 Documentation Files

- **`PAYLOAD_CONTENT_GUIDE.md`** - Detailed CMS content creation guide
- **`CMS_SETUP_GUIDE.md`** - Step-by-step CMS setup
- **`PROJECT_CHECKLIST.md`** - Project status and tasks

---

## 🎓 Key Concepts

- **Headless CMS** - Content management decoupled from presentation
- **Server Components** - React 18 server-side rendering
- **i18n Routing** - Multi-language URL structure
- **Component Blocks** - Modular, reusable content blocks
- **Type Safety** - TypeScript for developer experience
- **Responsive Design** - Mobile-first Tailwind CSS

---

## ✅ Completion Status

- [x] Next.js 15 setup
- [x] Tailwind CSS configured
- [x] @radix-ui components
- [x] Payload CMS connected
- [x] Multi-language support
- [x] Language switcher
- [x] SEO setup (sitemap, robots.txt)
- [x] Contact form
- [x] Component structure
- [ ] Content population (TO DO)
- [ ] Testing setup
- [ ] Deployment configuration

---

**Last Updated:** November 17, 2025  
**Status:** Ready for Content Population  
**Frontend Port:** http://localhost:3001  
**CMS Admin:** http://localhost:3000/admin
