# Restroworks - CMS-Powered Multi-Language Website

A modern, SEO-optimized, multi-language website built with Next.js 15 (frontend) and PayloadCMS (backend). Features a headless CMS architecture, modular content blocks, and full internationalization support.

---

## 🚀 Live Demo

- **Frontend Website:** https://restroworks-fe.vercel.app/
- **Admin Panel (CMS):** https://restroworks-be.vercel.app/admin

**Demo Credentials:**
- Email: `demo@restroworks.com`
- Password: `demo123`

---

## App Screenshots

<h2>Frontend:</h2>

- <h3>Home Page</h3>
<img width="2880" height="1556" alt="image" src="https://github.com/user-attachments/assets/239fe8f7-d4c3-4f7d-8215-c5dcc899e9b5" />
<img width="2880" height="1556" alt="image" src="https://github.com/user-attachments/assets/3656d35e-8941-4778-98c6-591686fe64c9" />
<img width="2880" height="1558" alt="image" src="https://github.com/user-attachments/assets/330337c6-15b1-420f-a5c5-8d12b70a1679" />
<img width="2880" height="1556" alt="image" src="https://github.com/user-attachments/assets/435d68f3-abda-4ba6-9317-f1c8bfbfcfda" />

- <h3>Products Page</h3>
<img width="2880" height="1558" alt="image" src="https://github.com/user-attachments/assets/b653489c-1cef-4f1e-b315-072c86dd5229" />
<img width="2878" height="1556" alt="image" src="https://github.com/user-attachments/assets/271ef1d7-c48a-4602-87df-e129eb6c026a" />

- <h3>Contact Page</h3>
<img width="2880" height="1562" alt="image" src="https://github.com/user-attachments/assets/8c66060e-f807-4d87-9c36-ac09feb8ef3b" />
<img width="2880" height="1556" alt="image" src="https://github.com/user-attachments/assets/e914a94f-7335-4419-9776-51543e4f0447" />

## 📖 Quick Guide

Want to see how the CMS works? Follow these simple steps:

### Step 1: Access the Admin Panel

1. **Open your browser** and go to: https://restroworks-be.vercel.app/admin
2. **Login** with demo credentials:
   - Email: `demo@restroworks.com`
   - Password: `demo123`

### Step 3: View Existing Content

1. **Click "Pages"** in the left sidebar
2. **Click on "Home"** page to see the content
3. **Scroll down** to see all the content blocks (Hero, Features, Testimonials, CTA)

### Step 4: Edit Content (Try It!)

1. **Change the headline** in the Hero section
2. **Update a feature description**
3. **Click "Save"** at the bottom
4. **Visit the frontend** (URL coming soon) to see your changes live!

### Step 5: Add New Content

1. **Click "Add Block"** button
2. **Choose a block type** (Hero, Features, Testimonials, CTA)
3. **Fill in the content**
4. **Click "Save"** and **"Publish"**

### Step 6: Upload Images

1. **Click "Media"** in the left sidebar
2. **Click "Create New"**
3. **Upload your image**
4. **Use it in any block** by selecting it from the dropdown

### Step 7: Multi-Language Content

1. **Look for "Locale" dropdown** (top right)
2. **Select "Spanish (es)"** or **"French (fr)"**
3. **Translate the content**
4. **Save** - Now your content is available in multiple languages!

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

### 4. Create Content & View Your Website

Follow the detailed guide below to see your content live!

---

## 📖 Step-by-Step Usage Guide (Local Development)

### Step 1: Access PayloadCMS Admin Panel

**For Live Demo:** Use https://restroworks-be.vercel.app/admin (credentials above)

**For Local Development:**
1. **Open your browser** and go to: http://localhost:3000/admin
2. **Create your first admin user:**
   - Email: `demo@restroworks.com`
   - Password: `demo123`
   - Click "Create"

### Step 2: Create Your First Page

1. **Navigate to Collections** → Click **"Pages"** in the sidebar
2. **Click "Create New"** button (top right)
3. **Fill in the page details:**
   - **Title:** `Home`
   - **Slug:** Leave empty (will auto-generate as "home")
   - **Published At:** Select today's date
   - **Status:** Make sure it's set to "Published" (not Draft)

### Step 3: Add Hero Block to Your Page

1. **Scroll down to "Layout" section**
2. **Click "Add Block"** button
3. **Select "Hero Section"** from the dropdown
4. **Fill in the Hero content:**

   ```
   Badge Text: "Welcome to Restroworks"
   Main Headline: "Transform Your Restaurant Operations"
   Highlighted Text: "With AI-Powered Solutions"
   Subheadline: "Streamline orders, manage inventory, and delight customers with our all-in-one restaurant management platform"
   Primary CTA Button Text: "Start Free Trial"
   Primary CTA Link: "/contact"
   Secondary CTA Button Text: "Watch Demo"
   Secondary CTA Link: "#demo"
   Hero Style: Gradient
   Show Statistics: ✓ (checked)
   ```

5. **Add Statistics** (click "Add Item" 3 times):
   - **Stat 1:** Value: `99.9%`, Label: `Uptime`
   - **Stat 2:** Value: `5K+`, Label: `Restaurants`
   - **Stat 3:** Value: `24/7`, Label: `Support`

6. **Click "Save"** at the bottom

### Step 4: Add Features Block

1. **Click "Add Block"** again (below the Hero block)
2. **Select "Feature"** from dropdown
3. **Fill in:**
   ```
   Title: "Why Choose Restroworks"
   ```

4. **Add Features** (click "Add Item" 3 times):

   **Feature 1:**
   ```
   Title: "Lightning Fast Performance"
   Description: "Process orders in milliseconds with our optimized infrastructure. Never keep your customers waiting."
   ```

   **Feature 2:**
   ```
   Title: "Bank-Level Security"
   Description: "Your data is protected with enterprise-grade encryption and regular security audits."
   ```

   **Feature 3:**
   ```
   Title: "Scale Effortlessly"
   Description: "From single location to multi-chain, our platform grows with your business needs."
   ```

5. **Click "Save"**

### Step 5: Add Testimonials Block

1. **Click "Add Block"** again
2. **Select "Testimonial"** from dropdown
3. **Fill in:**
   ```
   Title: "What Our Customers Say"
   ```

4. **Add Testimonials** (click "Add Item" 2 times):

   **Testimonial 1:**
   ```
   Quote: "Restroworks transformed how we manage our restaurant. Orders are faster, staff is happier, and customers love the experience. Best investment we've made!"
   Author: "Sarah Johnson"
   Role: "Owner, The Golden Spoon"
   ```

   **Testimonial 2:**
   ```
   Quote: "The analytics dashboard alone is worth it. We've increased our efficiency by 40% and reduced food waste significantly. Highly recommended!"
   Author: "Michael Chen"
   Role: "Manager, Dragon Palace"
   ```

5. **Click "Save"**

### Step 6: Add CTA Block

1. **Click "Add Block"** one more time
2. **Select "Call to Action"** from dropdown
3. **Fill in:**
   ```
   Main Heading: "Ready to Transform Your Restaurant?"
   Description: "Join thousands of satisfied customers and transform your business today"
   Primary Button Text: "Start Free Trial"
   Primary Button Link: "/contact"
   Secondary Button Text: "Schedule Demo"
   Secondary Button Link: "#demo"
   ```

4. **Click "Save"**

### Step 7: Publish Your Page

1. **Scroll to the top** of the page
2. **Click "Save"** button (top right)
3. **Verify Status** is "Published" (not "Draft")
4. **Click "Publish"** if you see that button

### Step 8: View Your Website! 🎉

**For Live Demo:** 
1. **Open a new browser tab**
2. **Go to:** https://restroworks-fe.vercel.app/en

**For Local Development:**
1. **Open a new browser tab**
2. **Go to:** http://localhost:3001/en

**You should see:**
- ✅ Beautiful hero section with your headline
- ✅ Statistics showing 99.9%, 5K+, 24/7
- ✅ Features section with 3 cards
- ✅ Testimonials from Sarah and Michael
- ✅ CTA section at the bottom

### Step 9: Test Language Switching

1. **Click the language switcher** in the header (globe icon)
2. **Select "ES" (Spanish)**
3. **Notice:** All UI text changes to Spanish!
4. **Try "FR" (French)** - UI changes to French!

**Note:** The CMS content (headlines, descriptions) will stay in English until you create Spanish/French versions of the page.

### Step 10: Create Multi-Language Content (Optional)

1. **Go back to PayloadCMS Admin**
2. **Click on your "Home" page**
3. **Look for "Locale" dropdown** (top right)
4. **Select "Spanish (es)"**
5. **Translate all the content** to Spanish
6. **Click "Save"**
7. **Repeat for French (fr)**

Now when you switch languages, both UI and content will change!

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
├── .gitignore                              # Git ignore rules
├── ASSIGNMENT_COMPLETION_STATUS.md         # Assignment completion tracking
├── CONTENT_GUIDE.md                        # Content examples for all blocks
├── QUICK_CONTENT_REFERENCE.md              # Copy-paste ready content
├── HERO_SECTION_GUIDE.md                   # Hero customization guide
└── README.md                               # This file (main documentation)
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
/en           → English homepage
/en/products  → English products page
/en/contact   → English contact page
/es           → Spanish homepage
/es/products  → Spanish products page
/es/contact   → Spanish contact page
/fr           → French homepage
/fr/products  → French products page
/fr/contact   → French contact page
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

**Live Demo:**
- Sitemap: https://restroworks-fe.vercel.app/sitemap.xml
- Robots: https://restroworks-fe.vercel.app/robots.txt

**Local Development:**
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
