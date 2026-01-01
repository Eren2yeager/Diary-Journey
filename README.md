# 📔 Diary Journey

A modern, beautiful, and secure digital diary application built with Next.js. Capture your daily adventures, track your moods, and preserve your memories in a vibrant, animated interface.

![Diary Journey](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-9.1.1-green?style=for-the-badge&logo=mongodb)

## ✨ Features

- 🎨 **Beautiful UI**: Vibrant gradients, smooth animations, and modern design
- 📱 **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- 🔐 **Secure Authentication**: Google OAuth integration with NextAuth.js
- 💭 **Mood Tracking**: Track your emotions with colorful, intuitive mood selectors
- 🔍 **Smart Search**: Search entries by content, mood, date, or day name
- 🌙 **Dark Mode**: Beautiful dark theme support
- 📊 **Analytics Ready**: Built-in Google Analytics 4 integration
- 🔍 **SEO Optimized**: Complete SEO setup with sitemap, robots.txt, and structured data
- ⚡ **Fast Performance**: Optimized with Next.js 16 and modern React patterns
- 🎭 **Smooth Animations**: Powered by Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js (Google OAuth)
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4 (@next/third-parties)
- **Theme**: next-themes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB database (local or Atlas)
- Google OAuth credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Diary-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string
   
   # NextAuth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-generate-with-openssl-rand-base64-32
   
   # Google OAuth
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   
   # Site URL (for production, use your actual domain)
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # Google Analytics (optional)
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   
   # Search Console Verification (optional)
   NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Diary-app/
├── app/
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   └── entries/      # Entry CRUD operations
│   ├── entries/          # Entry pages
│   │   ├── [id]/         # Individual entry view
│   │   └── page.tsx      # Entries list
│   ├── new/              # Create new entry
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page
│   ├── robots.ts         # Robots.txt generator
│   ├── sitemap.ts        # Sitemap generator
│   └── manifest.ts       # PWA manifest
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── AnimeButton.tsx
│   │   ├── AnimeCard.tsx
│   │   ├── AnimeInput.tsx
│   │   └── Loading.tsx
│   ├── Navbar.tsx        # Navigation bar
│   ├── MoodSelector.tsx  # Mood selection component
│   ├── ThemeToggle.tsx   # Dark mode toggle
│   ├── Analytics.tsx     # Google Analytics
│   └── SEO.tsx           # SEO component
├── lib/
│   ├── authOptions.ts      # NextAuth configuration
│   ├── db.ts              # Database connection
│   └── structured-data.ts  # JSON-LD structured data
├── models/
│   ├── Entry.ts           # Entry model
│   └── User.ts            # User model
└── public/                # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 SEO & Analytics Setup

This app comes with comprehensive SEO and analytics features built-in.

### Quick Setup

1. **Google Analytics**
   - Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com/)
   - Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` to `.env.local`

2. **Search Console**
   - Submit your sitemap at `https://your-domain.com/sitemap.xml`
   - Verify ownership in [Google Search Console](https://search.google.com/search-console)

3. **Required Images**
   Create these in `/public`:
   - `og-image.png` (1200x630px) - Social media preview
   - `icon-192x192.png` & `icon-512x512.png` - PWA icons
   - `apple-touch-icon.png` (180x180px)

### Documentation

- 📖 **Complete SEO Guide**: See [SEO_GUIDE.md](./SEO_GUIDE.md)
- 🚀 **Quick Setup**: See [SETUP_ANALYTICS.md](./SETUP_ANALYTICS.md)

## 🎨 Features in Detail

### Mood Tracking
Track your emotions with 5 different moods:
- 😊 Happy
- ⚡ Excited
- 😐 Neutral
- 😢 Sad
- 😠 Angry

### Smart Search
Search your entries by:
- Content text
- Mood
- Day name (Monday, Tuesday, etc.)
- Month name (January, February, etc.)
- Year (2024, 2023, etc.)
- Date patterns (01/15, Jan 15, etc.)

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Adaptive layouts

## 🔐 Authentication

Uses Google OAuth via NextAuth.js:
1. Users sign in with their Google account
2. Secure session management
3. User data stored in MongoDB
4. Protected routes for authenticated users

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Environment Variables for Production

Make sure to set all environment variables in your hosting platform:
- `MONGODB_URI`
- `NEXTAUTH_URL` (your production domain)
- `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXT_PUBLIC_SITE_URL` (your production domain)
- `NEXT_PUBLIC_GA_ID` (optional)

## 📝 API Routes

- `GET /api/entries` - Get all entries (with optional search)
- `POST /api/entries` - Create new entry
- `GET /api/entries/[id]` - Get single entry
- `PUT /api/entries/[id]` - Update entry
- `DELETE /api/entries/[id]` - Delete entry

## 🎯 SEO Features

- ✅ Auto-generated sitemap.xml
- ✅ Robots.txt configuration
- ✅ Structured data (JSON-LD)
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Meta tags optimization
- ✅ Canonical URLs
- ✅ Mobile-friendly
- ✅ Fast loading

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide](https://lucide.dev/) - Beautiful icons
- [NextAuth.js](https://next-auth.js.org/) - Authentication

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

Made with ❤️ using Next.js and TypeScript
