# Restroworks - CMS-Powered Multi-Language Website

A modern, SEO-optimized, multi-language website built with Next.js 15 (frontend) and PayloadCMS (backend). Features a headless CMS architecture, modular content blocks, and full internationalization support.

---

## 🎯 Project Overview

This project demonstrates enterprise-grade web development practices including:

- **Headless CMS Architecture** - Decoupled content management and presentation
- **Multi-Language Support** - English, Spanish, and French with language switcher
- **Modular Content Blocks** - Reusable Hero, Features, Testimonials, and CTA blocks
- **SEO Optimized** - Sitemap, robots.txt, dynamic metadata
- **Fully Responsive** - Mobile-first design with Tailwind CSS
- **Type-Safe** - Full TypeScript coverage
- **Accessible** - WCAG 2.1 AA compliant with semantic HTML

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- MongoDB connection (Atlas or local)

### 1. Clone Repository

```bash
git clone https://github.com/vanshaj-pahwa/restroworks.git
cd restroworks
```

### 2. Start Backend (PayloadCMS)

```bash
cd payloadcms-backend/restroworks-be
npm install
cp .env.example .env  # Configure your MongoDB connection
npm run dev
```

**Backend:** http://localhost:3000  
**Admin Panel:** http://localhost:3000/admin

### 3. Start Frontend (Next.js)

```bash
cd restroworks-fe
npm install
npm run dev
```

**Frontend:** http://localhost:3001 (or next available port)

### 4. Create Content

1. Visit http://localhost:3000/admin
2. Create your first admin user
3. Follow the [CMS Content Creation Guide](./CMS_CONTENT_CREATION_GUIDE.md)

---

## 📁 Project Structure

```
restroworks/
│
├── payloadcms-backend/restroworks-be/     # Backend CMS
│   ├── src/
│   │   ├── collections/                    # Data models
│   │   │   ├── Pages/                      # Pages with localization
│   │   │   ├── Posts/                      # Blog posts
│   │   │   ├── Media.ts                    # Media uploads
│   │   │   ├── ContactSubmissions.ts       # Contact form data
│   │   │   └── Categories.ts               # Post categories
│   │   ├── blocks/                         # Content blocks
│   │   │   ├── Hero/                       # Hero block
│   │   │   ├── Feature/                    # Features block
│   │   │   ├── Testimonial/                # Testimonials block
│   │   │   ├── CTA/                        # Call-to-action
│   │   │   ├── Content/                    # Rich text
│   │   │   ├── MediaBlock/                 # Media display
│   │   │   ├── ArchiveBlock/               # Blog archive
│   │   │   └── Form/                       # Form builder
│   │   ├── Header/                         # Header global
│   │   ├── Footer/                         # Footer global
│   │   └── payload.config.ts               # Main configuration
│   ├── .env                                # Environment variables
│   └── package.json
│
├── restroworks-fe/                         # Frontend Next.js
│   ├── src/
│   │   ├── app/
│   │   │   ├── [lang]/                     # Language routing
│   │   │   │   ├── page.tsx                # Homepage
│   │   │   │   ├── layout.tsx              # Language layout
│   │   │   │   └── contact/                # Contact page
│   │   │   ├── layout.tsx                  # Root layout
│   │   │   ├── globals.css                 # Global styles
│   │   │   ├── sitemap.ts                  # SEO sitemap
│   │   │   └── robots.ts                   # SEO robots.txt
│   │   ├── components/
│   │   │   ├── layout/                     # Layout components
│   │   │   │   ├── header.tsx
│   │   │   │   ├── footer.tsx
│   │   │   │   ├── language-switcher.tsx
│   │   │   │   └── block-renderer.tsx
│   │   │   ├── blocks/                     # Block components
│   │   │   ├── sections/                   # Section components
│   │   │   └── ui/                         # 35+ shadcn components
│   │   ├── lib/
│   │   │   ├── payload-types.ts            # Type definitions
│   │   │   ├── i18n-config.ts              # i18n configuration
│   │   │   ├── dictionaries.ts             # Translation loader
│   │   │   ├── actions.ts                  # Server actions
│   │   │   └── utils.ts                    # Utilities
│   │   ├── dictionaries/                   # Translations
│   │   │   ├── en.json
│   │   │   ├── es.json
│   │   │   └── fr.json
│   │   └── middleware.ts                   # Language routing
│   ├── .env.local                          # Environment variables
│   └── package.json
│
├── PROJECT_STATUS.md                       # Detailed project status
├── CMS_CONTENT_CREATION_GUIDE.md          # Content creation guide
├── DEPLOYMENT_GUIDE.md                     # Deployment instructions
└── README.md                               # This file
```

---

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible component library (35+ components)
- **Radix UI** - Headless UI primitives
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icon library

### Backend
- **PayloadCMS 3.64** - Headless CMS
- **MongoDB** - Database
- **Next.js 15** - Backend framework
- **TypeScript** - Type safety

---

## 🌍 Multi-Language Support

### Supported Languages
- 🇬🇧 **English (en)** - Default
- 🇪🇸 **Spanish (es)**
- 🇫🇷 **French (fr)**

### URL Structure
```
/en          → English homepage
/en/contact  → English contact page
/es          → Spanish homepage
/es/contact  → Spanish contact page
/fr          → French homepage
/fr/contact  → French contact page
```

### Language Switcher
- Located in header navigation
- Stripe-style dropdown design
- Maintains current page context
- Smooth transitions

---

## 🎨 Content Blocks

### Available Blocks

1. **Hero Block**
   - Headline
   - Subheadline
   - Optional image
   - Localized content

2. **Features Block**
   - Section title
   - Multiple feature items
   - Icon support
   - Responsive grid layout

3. **Testimonials Block**
   - Section title
   - Customer quotes
   - Author information
   - Optional avatars

4. **CTA Block**
   - Call-to-action text
   - Button with link
   - Conversion-focused design

5. **Content Block**
   - Rich text editor
   - Lexical editor support
   - Media embedding

6. **Media Block**
   - Image/video display
   - Caption support
   - Position control

7. **Archive Block**
   - Blog post listing
   - Category filtering
   - Pagination

8. **Form Block**
   - Custom forms
   - Form builder integration

---

## 🔍 SEO Features

### Access SEO Files
- Sitemap: http://localhost:3001/sitemap.xml
- Robots: http://localhost:3001/robots.txt


---

## 🔧 Configuration

### Environment Variables

**Backend (.env):**
```env
DATABASE_URI=mongodb+srv://your-connection-string
PAYLOAD_SECRET=your-secret-key
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
CRON_SECRET=your-cron-secret
PREVIEW_SECRET=your-preview-secret
```

**Frontend (.env.local):**
```env
NEXT_PUBLIC_PAYLOAD_CMS_URL=http://localhost:3000
```