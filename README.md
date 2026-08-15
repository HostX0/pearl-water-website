# Pearl Water Website

A multilingual profile website for Pearl / اللؤلؤة, built for Arabic, English and Kurdish Sorani.

## Stack
- Next.js App Router + TypeScript
- GSAP + ScrollTrigger motion system
- Responsive CSS brand system
- Montserrat for English and Tajawal for Arabic/Kurdish
- No database, CMS or dashboard required

## Brand system
Primary colors: Pearl Blue `#0A4E93`, Aqua `#2BB7E5`, Light Blue `#E6F4FB`, Pearl White `#F7F8FA`, Cool Grey `#D6DCE3`, Deep Pearl Navy `#073A70`.

Approved Arabic and English logo assets live in `public/brand/`.

## Routes
Each locale (`/ar`, `/en`, `/ku`) includes:
- Home
- Our Story / About
- Products
- Quality
- Contact
- Dedicated product pages for 1000 ml, 500 ml, 330 ml and 200 ml

## SEO
- Unique metadata per page and locale
- Product-level metadata
- Canonical URLs
- `hreflang` for Arabic, English and Kurdish Sorani
- Sitemap including product detail pages
- Robots configuration
- Organization, WebSite, Product and FAQ structured data
- Strong internal linking between the homepage, product index and product detail pages

## Accessibility & performance
- Reduced-motion support
- Keyboard focus states and skip navigation
- Responsive layouts and restrained motion
- No unnecessary backend or runtime data layer
