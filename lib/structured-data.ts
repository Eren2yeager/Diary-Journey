export function generateStructuredData(type: 'website' | 'article' | 'organization' = 'website', data?: any) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'website' ? 'WebSite' : type === 'article' ? 'Article' : 'Organization',
  };

  if (type === 'website') {
    return {
      ...baseStructuredData,
      name: 'Diary Journey',
      url: baseUrl,
      description: 'Capture your daily adventures, track your moods, and preserve your memories in a beautiful, vibrant space.',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/entries?search={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    };
  }

  if (type === 'article' && data) {
    return {
      ...baseStructuredData,
      headline: data.title,
      description: data.description,
      image: data.image || `${baseUrl}/og-image.png`,
      datePublished: data.datePublished,
      dateModified: data.dateModified || data.datePublished,
      author: {
        '@type': 'Person',
        name: data.author || 'Diary Journey User',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Diary Journey',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
        },
      },
    };
  }

  if (type === 'organization') {
    return {
      ...baseStructuredData,
      name: 'Diary Journey',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description: 'A modern, secure digital diary application for capturing daily memories and tracking moods.',
      sameAs: [
        // Add your social media links here
        // 'https://twitter.com/diaryjourney',
        // 'https://facebook.com/diaryjourney',
      ],
    };
  }

  return baseStructuredData;
}

