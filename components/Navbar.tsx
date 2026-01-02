'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { motion } from 'framer-motion';
import AnimeButton from './ui/AnimeButton';
import { Book, PenTool, LogOut, User as UserIcon, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="sticky top-0 z-50 glass-card border-b-0 rounded-b-2xl sm:rounded-b-3xl mx-2 sm:mx-4 mt-2 mb-4 sm:mb-6 shadow-2xl backdrop-blur-2xl"
    >
      <div className="container mx-auto px-2 sm:px-3 md:px-4 h-16 sm:h-18 md:h-20 flex items-center justify-between gap-1 sm:gap-2 overflow-hidden">
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 md:gap-3 group min-w-0 flex-shrink-0">
          <motion.div
            whileHover={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: 1.1
            }}
            transition={{ duration: 0.5 }}
            className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-all duration-300 flex-shrink-0"
          >
            <Book size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 rounded-lg sm:rounded-xl md:rounded-2xl"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                
                ease: "linear"
              }}
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight min-w-0 whitespace-nowrap"
          >
            <span className="gradient-text">Diary</span>
            <span className="text-foreground hidden xs:inline">App</span>
            <motion.span
              animate={{ 
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="inline-block ml-0.5 sm:ml-1 md:ml-2 hidden sm:inline"
            >
              <Sparkles size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-500" />
            </motion.span>
          </motion.span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-4 flex-shrink-0 min-w-0">
          <div className="flex-shrink-0">
            <ThemeToggle />
          </div>
          
          {session ? (
            <>
              <Link href="/entries" className="flex-shrink-0">
                <AnimeButton variant="secondary" size="sm" className="text-sm p-3">
                  <Book size={15} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                  <span className="ml-0.5 sm:ml-1 md:ml-2 hidden md:inline">Memories</span>
                </AnimeButton>
              </Link>
              <Link href="/new" className="flex-shrink-0">
                <AnimeButton variant="primary" size="sm" className="text-sm p-3  ">
                  <PenTool size={15} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                  <span className="ml-0.5 sm:ml-1 md:ml-2 hidden md:inline">New Entry</span>
                </AnimeButton>
              </Link>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-1 sm:gap-2 md:gap-3 ml-0.5 sm:ml-1 md:ml-2 pl-1 sm:pl-2 md:pl-3 border-l-3 border-purple-300 dark:border-purple-600 flex-shrink-0"
              >
                {session.user?.image ? (
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-100" />
                    <Image
                      src={session.user.image}
                      alt={session.user.name || 'User'}
                      width={28}
                      height={28}
                      className="sm:w-8 sm:h-8 md:w-10 md:h-10 relative rounded-full border-2 sm:border-2 md:border-3 border-purple-400/50 shadow-lg"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg flex-shrink-0"
                  >
                    <UserIcon size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </motion.div>
                )}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => signOut()}
                  className="p-1 sm:p-1.5 md:p-2 rounded-md sm:rounded-lg md:rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 hover:text-red-600 transition-colors border-2 border-red-500/20 hover:border-red-500/40 flex-shrink-0"
                  title="Sign Out"
                >
                  <LogOut size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </motion.button>
              </motion.div>
            </>
          ) : (
            <AnimeButton onClick={() => signIn('google')} variant="primary" size="sm" className="text-xs sm:text-sm px-2 sm:px-3 md:px-4 h-8 sm:h-9 md:h-10 flex-shrink-0">
              <span className="hidden sm:inline">Get Started</span>
              <span className="sm:hidden">Start</span>
            </AnimeButton>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
