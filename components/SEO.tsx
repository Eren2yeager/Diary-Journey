'use client';

import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({ 
  title = 'Diary Journey - Your Personal Digital Diary',
  description = 'Capture your daily adventures, track your moods, and preserve your memories in a beautiful, vibrant space. Start your diary journey today!',
  image = '/og-image.png',
  url,
  type = 'website'
}: SEOProps) {
  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const fullUrl = url || window.location.href;
    const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

    // Update meta tags
    document.title = title;
    
    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', 'diary, journal, personal diary, mood tracking, memories, digital diary, online journal');
    updateMetaTag('author', 'Diary Journey');
    
    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', fullImage, 'property');
    updateMetaTag('og:url', fullUrl, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:site_name', 'Diary Journey', 'property');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImage);
    
    // Additional SEO tags
    updateMetaTag('theme-color', '#8b5cf6');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
  }, [title, description, image, url, type]);

  return null;
}

function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
}
