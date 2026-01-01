# Quick Analytics & SEO Setup Guide

## 🚀 Quick Start (5 minutes)

### Step 1: Add Environment Variables
Create or update `.env.local`:
```env
# Your website URL (replace with your actual domain)
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Google Analytics 4 ID (get from analytics.google.com)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Search Console Verification
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-code-here
```

### Step 2: Get Google Analytics ID
1. Go to https://analytics.google.com/
2. Create account → Create property
3. Copy your Measurement ID (starts with G-)
4. Paste it in `.env.local`

### Step 3: Create Required Images
Create these in `/public` folder:
- `og-image.png` (1200x630px) - For social media sharing
- `icon-192x192.png` - PWA icon
- `icon-512x512.png` - PWA icon  
- `apple-touch-icon.png` (180x180px)
- `favicon-32x32.png`
- `favicon-16x16.png`

### Step 4: Update Domain
Replace `https://your-domain.com` in:
- `app/layout.tsx` (line with baseUrl)
- `app/robots.ts`
- `app/sitemap.ts`
- `app/manifest.ts`
- `lib/structured-data.ts`

### Step 5: Submit to Google
1. Go to https://search.google.com/search-console
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

## ✅ What's Already Implemented

- ✅ Google Analytics 4 integration
- ✅ Sitemap.xml (auto-generated)
- Robots.txt
- ✅ Structured Data (JSON-LD)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Meta tags optimization
- ✅ Mobile-friendly
- ✅ Fast loading optimizations

## 📊 Analytics Services Comparison

| Service | Cost | Best For | Setup Time |
|---------|------|----------|------------|
| **Google Analytics 4** | Free | Comprehensive tracking | 5 min ⭐ |
| **Vercel Analytics** | Free (on Vercel) | Simple, privacy-focused | 1 min |
| **Plausible** | $9/mo | Privacy-focused, GDPR | 5 min |
| **Microsoft Clarity** | Free | Heatmaps, recordings | 5 min |
| **Mixpanel** | Free tier | Product analytics | 10 min |

## 🎯 Recommended Setup

**For Most Users:**
1. Google Analytics 4 (main analytics)
2. Google Search Console (SEO monitoring)
3. Vercel Analytics (if using Vercel)

**For Privacy-Focused:**
1. Plausible Analytics
2. Self-hosted Matomo

## 📈 What You'll Track

- **Users**: Total, new, returning
- **Sessions**: Duration, pages per session
- **Page Views**: Most popular pages
- **Events**: Button clicks, form submissions
- **Demographics**: Age, gender, location
- **Devices**: Mobile, desktop, tablet
- **Traffic Sources**: Google, direct, social

## 🔍 SEO Checklist

After setup, verify:
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt at `/robots.txt`
- [ ] Meta tags in page source
- [ ] Open Graph preview works (use https://www.opengraph.xyz/)
- [ ] Mobile-friendly (test with Google's tool)
- [ ] Page speed score > 90 (use PageSpeed Insights)

## 🆘 Troubleshooting

**Analytics not working?**
- Check `NEXT_PUBLIC_GA_ID` is set
- Verify ID starts with `G-`
- Check browser console for errors
- Use Google Tag Assistant extension

**SEO not showing?**
- Wait 24-48 hours for indexing
- Submit sitemap to Search Console
- Check robots.txt allows crawling
- Verify meta tags in page source

## 📚 Full Documentation

See `SEO_GUIDE.md` for complete documentation.

