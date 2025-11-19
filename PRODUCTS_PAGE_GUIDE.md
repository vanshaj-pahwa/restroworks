# Products Page Setup Guide

The Products page is now CMS-driven! You can manage all content through PayloadCMS.

## How It Works

The Products page (`/products`) will:
1. **First** try to load content from PayloadCMS (if a page with slug "products" exists)
2. **Fallback** to static content with pricing tables if no CMS page exists

## Creating the Products Page in CMS

### Step 1: Access PayloadCMS Admin

1. Go to: https://restroworks-be.vercel.app/admin
2. Login with: `demo@restroworks.com` / `demo123`

### Step 2: Create Products Page

1. Click **"Pages"** in the sidebar
2. Click **"Create New"** button
3. Fill in the details:
   - **Title:** `Products`
   - **Slug:** `products` (important!)
   - **Status:** Published
   - **Published At:** Today's date

### Step 3: Add Content Blocks

You can use any combination of blocks. Here's a recommended structure:

#### Hero Block
```
Badge Text: "Products & Features"
Main Headline: "Everything You Need to Succeed"
Highlighted Text: "Built for Modern Restaurants"
Subheadline: "Powerful features designed to help your restaurant thrive in the digital age"
Primary CTA: "Start Free Trial" → /contact
Secondary CTA: "View Pricing" → #pricing
Hero Style: Gradient
Show Statistics: ✓
```

#### Features Block
```
Title: "Powerful Features"

Feature 1:
- Title: "Lightning Fast Performance"
- Description: "Built on Next.js 15 for blazing fast performance and optimal user experience"

Feature 2:
- Title: "Enterprise Security"
- Description: "Bank-level encryption and security measures to protect your data"

Feature 3:
- Title: "Multi-Language Support"
- Description: "Reach global audiences with built-in support for multiple languages"

Feature 4:
- Title: "Advanced Analytics"
- Description: "Track performance with detailed insights and real-time reporting"

Feature 5:
- Title: "Team Collaboration"
- Description: "Work together seamlessly with role-based access control"

Feature 6:
- Title: "Real-Time Updates"
- Description: "See changes instantly with live preview and instant publishing"
```

#### Testimonials Block
```
Title: "Trusted by Restaurants Worldwide"

Testimonial 1:
- Quote: "Restroworks transformed how we manage our restaurant operations. The multi-language support helped us expand internationally."
- Author: "Sarah Chen"
- Role: "Owner, Dragon Palace Restaurant"

Testimonial 2:
- Quote: "The analytics dashboard gives us insights we never had before. We've increased efficiency by 40% in just 3 months."
- Author: "Michael Rodriguez"
- Role: "Manager, Taco Fiesta Chain"
```

#### CTA Block
```
Main Heading: "Ready to Transform Your Restaurant?"
Description: "Join thousands of restaurants already using Restroworks to streamline operations and delight customers"
Primary Button: "Start Free Trial" → /contact
Secondary Button: "Schedule Demo" → /contact
```

### Step 4: Add Pricing Block

Add a Pricing block to display your pricing plans:

```
Title: "Simple, Transparent Pricing"
Subtitle: "Choose the plan that's right for your business"

Plan 1:
- Name: "Starter"
- Price: "$29"
- Period: "/mo"
- Description: "Perfect for small restaurants"
- Popular: ☐ (unchecked)
- Features:
  * Up to 3 locations
  * Basic analytics
  * Email support
  * 1 GB storage
  * Multi-language support
- Button Text: "Get Started"
- Button Link: "/contact"

Plan 2:
- Name: "Professional"
- Price: "$99"
- Period: "/mo"
- Description: "For growing businesses"
- Popular: ☑ (checked) ← Mark this as popular!
- Features:
  * Up to 10 locations
  * Advanced analytics
  * Priority support
  * 10 GB storage
  * Multi-language support
  * Custom branding
  * API access
- Button Text: "Get Started"
- Button Link: "/contact"

Plan 3:
- Name: "Enterprise"
- Price: "Custom"
- Period: "" (leave empty for custom pricing)
- Description: "For large organizations"
- Popular: ☐ (unchecked)
- Features:
  * Unlimited locations
  * Enterprise analytics
  * 24/7 dedicated support
  * Unlimited storage
  * Multi-language support
  * Custom branding
  * API access
  * SLA guarantee
- Button Text: "Contact Sales"
- Button Link: "/contact"
```

### Step 5: Multi-Language Content

1. After creating the English version, click the **Locale dropdown** (top right)
2. Select **Spanish (es)** or **French (fr)**
3. Translate all the content
4. Click **Save**

## Static Fallback Content

If no CMS page exists, the page will show:
- ✅ Hero section with badge
- ✅ 6 feature cards (Performance, Security, Multi-language, Analytics, Team, Real-time)
- ✅ 3 pricing tiers (Starter $29, Professional $99, Enterprise Custom)
- ✅ CTA section

## URLs

The Products page is available at:
- English: https://restroworks-fe.vercel.app/en/products
- Spanish: https://restroworks-fe.vercel.app/es/products
- French: https://restroworks-fe.vercel.app/fr/products

## Navigation

The Products link has been added to the header navigation automatically.

## SEO

The Products page is included in:
- ✅ Sitemap.xml
- ✅ Navigation menu
- ✅ Dynamic metadata from CMS

## Tips

1. **Use Hero Block** for the top section with a compelling headline
2. **Use Features Block** to showcase 6-8 key features
3. **Use Testimonials Block** for social proof
4. **Use CTA Block** at the bottom to drive conversions
5. **Add images** to make it more engaging (upload to Media collection)

## Example Content Structure

```
Products Page
├── Hero Block (gradient style)
├── Features Block (6 features)
├── Pricing Block (3 pricing tiers) ← NEW!
├── Testimonials Block (2-3 testimonials)
└── CTA Block (conversion focused)
```

This gives you a professional, conversion-optimized products page that's fully manageable through the CMS!

## Pricing Block Features

The Pricing block includes:
- ✅ Flexible number of plans (1-4 plans supported)
- ✅ "Popular" badge for highlighting recommended plans
- ✅ Custom pricing (e.g., "$29/mo" or "Custom")
- ✅ Feature lists with checkmarks
- ✅ Customizable CTA buttons
- ✅ Responsive grid layout
- ✅ Professional card design with hover effects
