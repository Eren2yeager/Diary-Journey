'use client';

import { useSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useEffect } from 'react';
import AnimeButton from '@/components/ui/AnimeButton';
import AnimeCard from '@/components/ui/AnimeCard';
import { BookOpen, Star, Heart, PenLine, Sparkles, Zap, Shield } from 'lucide-react';
import { generateStructuredData } from '@/lib/structured-data';

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    // Add structured data for SEO
    const structuredData = generateStructuredData('website');
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'website-structured-data';
    
    // Remove existing if any
    const existing = document.getElementById('website-structured-data');
    if (existing) existing.remove();
    
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    // Add structured data for SEO
    const structuredData = generateStructuredData('website');
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'website-structured-data';
    
    // Remove existing if any
    const existing = document.getElementById('website-structured-data');
    if (existing) existing.remove();
    
    document.head.appendChild(script);
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      } 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] gap-8 sm:gap-12 md:gap-16 text-center py-8 sm:py-12 md:py-16 relative overflow-hidden">
      
      {/* Animated background elements - hidden on very small screens */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="hidden sm:block absolute top-20 left-[10%] w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="hidden sm:block absolute bottom-20 right-[10%] w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="hidden md:block absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center max-w-5xl px-3 sm:px-4"
      >
        <motion.div 
          initial={{ y: -30, opacity: 0, rotate: -180 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-6 sm:mb-8 relative"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 rounded-full blur-2xl"
          />
          <div className="relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 backdrop-blur-xl border-2 border-white/30 dark:border-white/10 shadow-2xl">
            <PenLine className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight px-2"
        >
          <span className="block mb-1 sm:mb-2">Your Personal</span>
          <span className="block gradient-text text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
            Diary Journey
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg md:text-2xl lg:text-3xl text-foreground/90 max-w-3xl mx-auto font-semibold leading-relaxed px-4"
        >
          Capture your daily adventures, track your moods, and preserve your memories in a beautiful, vibrant space ✨
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl px-3 sm:px-4 mt-6 sm:mt-8 relative z-10"
      >
        <motion.div variants={item} className="h-full">
          <AnimeCard hoverEffect gradient className="h-full flex flex-col items-center gap-4 sm:gap-6 text-center p-6 sm:p-8 md:p-10">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white shadow-2xl shadow-purple-500/50"
            >
              <BookOpen size={32} className="sm:w-10 sm:h-10" />
            </motion.div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 gradient-text">Daily Entries</h3>
              <p className="text-sm sm:text-base md:text-lg text-foreground/80 font-medium leading-relaxed">
                Write about your day, dreams, and feelings in a beautiful, distraction-free interface designed for creativity.
              </p>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item} className="h-full">
          <AnimeCard hoverEffect gradient className="h-full flex flex-col items-center gap-4 sm:gap-6 text-center p-6 sm:p-8 md:p-10">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 flex items-center justify-center text-white shadow-2xl shadow-pink-500/50"
            >
              <Heart size={32} className="sm:w-10 sm:h-10" />
            </motion.div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 gradient-text">Mood Tracking</h3>
              <p className="text-sm sm:text-base md:text-lg text-foreground/80 font-medium leading-relaxed">
                Track your emotions with colorful, intuitive icons and visualize your emotional journey over time.
              </p>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item} className="h-full sm:col-span-2 lg:col-span-1">
          <AnimeCard hoverEffect gradient className="h-full flex flex-col items-center gap-4 sm:gap-6 text-center p-6 sm:p-8 md:p-10">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 flex items-center justify-center text-white shadow-2xl shadow-yellow-500/50"
            >
              <Shield size={32} className="sm:w-10 sm:h-10" />
            </motion.div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 gradient-text">Secure & Private</h3>
              <p className="text-sm sm:text-base md:text-lg text-foreground/80 font-medium leading-relaxed">
                Your memories are protected with secure authentication and encryption. Your privacy is our priority.
              </p>
            </div>
          </AnimeCard>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
        className="mt-6 sm:mt-8 z-10 w-full sm:w-auto px-4"
      >
        {session ? (
          <Link href="/new" className="block w-full sm:w-auto">
            <AnimeButton size="lg" className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-5 sm:py-6 md:py-8 h-auto shadow-2xl">
              <Zap className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden xs:inline">Start Writing Now</span>
              <span className="xs:hidden">Start Writing</span>
            </AnimeButton>
          </Link>
        ) : (
          <AnimeButton size="lg" onClick={() => signIn('google')} className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-5 sm:py-6 md:py-8 h-auto shadow-2xl">
            <Sparkles className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="hidden xs:inline">Get Started with Google</span>
            <span className="xs:hidden">Get Started</span>
          </AnimeButton>
        )}
      </motion.div>
    </div>
  );
}
