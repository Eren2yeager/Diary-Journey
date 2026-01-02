import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@/components/Analytics";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteName = "Diary Journey";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Diary Journey - Your Personal Digital Diary",
    template: `%s | ${siteName}`,
  },
  description:
    "Capture your daily adventures, track your moods, and preserve your memories in a beautiful, vibrant space. Start your diary journey today with our modern, secure digital diary app.",
  keywords: [
    "diary",
    "journal",
    "personal diary",
    "digital diary",
    "online journal",
    "mood tracking",
    "memories",
    "daily journal",
    "private diary",
    "secure diary",
    "diary app",
    "journal app",
  ],
  authors: [{ name: "Diary Journey" }],
  creator: "Diary Journey",
  publisher: "Diary Journey",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: siteName,
    title: "Diary Journey - Your Personal Digital Diary",
    description:
      "Capture your daily adventures, track your moods, and preserve your memories in a beautiful, vibrant space.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Diary Journey - Personal Digital Diary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diary Journey - Your Personal Digital Diary",
    description:
      "Capture your daily adventures, track your moods, and preserve your memories in a beautiful, vibrant space.",
    images: [`${baseUrl}/og-image.png`],
    creator: "@diaryjourney",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    // yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8b5cf6" />
        {/* <meta name="yandex-verification" content="4cf4f284c9ad03c9" /> */}
        {/* <meta name="google-site-verification" content="4cf4f23mHxtBeby9jyvRWrRGxzjX7ryOXqy80bE-kGR784c9ad03c9" /> */}
        <meta name="msvalidate.01" content="723712B361C42D3BEF10C77195CCA775" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M15HGJK9L5"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-M15HGJK9L5');
`,
          }}
        />
      </head>

      <body className={`${fredoka.variable} font-sans gradient-bg`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
