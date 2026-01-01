'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import AnimeCard from '@/components/ui/AnimeCard';
import { AnimeInput } from '@/components/ui/AnimeInput';
import Loading from '@/components/ui/Loading';
import { Search, Calendar, Smile, Frown, Meh, Zap, CloudRain, BookOpen, Sparkles } from 'lucide-react';
import { IEntry } from '@/models/Entry';
import Link from 'next/link';
import  AnimeButton  from '@/components/ui/AnimeButton';

const moodIcons: Record<string, any> = {
  happy: { 
    icon: Smile, 
    gradient: 'from-yellow-400 via-yellow-500 to-orange-500',
    bg: 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-400/50',
    shadow: 'shadow-yellow-500/50',
    text: 'text-yellow-600 dark:text-yellow-400'
  },
  excited: { 
    icon: Zap, 
    gradient: 'from-orange-400 via-red-500 to-pink-500',
    bg: 'bg-gradient-to-br from-orange-500/20 to-pink-500/20',
    border: 'border-orange-400/50',
    shadow: 'shadow-orange-500/50',
    text: 'text-orange-600 dark:text-orange-400'
  },
  neutral: { 
    icon: Meh, 
    gradient: 'from-gray-400 via-gray-500 to-slate-500',
    bg: 'bg-gradient-to-br from-gray-500/20 to-slate-500/20',
    border: 'border-gray-400/50',
    shadow: 'shadow-gray-500/50',
    text: 'text-gray-600 dark:text-gray-400'
  },
  sad: { 
    icon: CloudRain, 
    gradient: 'from-blue-400 via-cyan-500 to-indigo-500',
    bg: 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20',
    border: 'border-blue-400/50',
    shadow: 'shadow-blue-500/50',
    text: 'text-blue-600 dark:text-blue-400'
  },
  angry: { 
    icon: Frown, 
    gradient: 'from-red-400 via-rose-500 to-pink-500',
    bg: 'bg-gradient-to-br from-red-500/20 to-pink-500/20',
    border: 'border-red-400/50',
    shadow: 'shadow-red-500/50',
    text: 'text-red-600 dark:text-red-400'
  },
};

export default function EntriesPage() {
  const { status } = useSession();
  const router = useRouter();
  const [entries, setEntries] = useState<IEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await fetch(`/api/entries?search=${search}`);
        const data = await res.json();
        if (data.success) {
          setEntries(data.data);
        }
      } catch (error) {
        console.error('Error fetching entries:', error);
      } finally {
        setLoading(false);
      }
    };

    if (status === 'authenticated') {
      const timeoutId = setTimeout(() => {
        fetchEntries();
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [status, search]);

  if (status === 'loading' || (status === 'authenticated' && loading && !entries.length && !search)) {
    return <Loading />;
  }

  return (
    <div className="max-w-5xl mx-auto py-6 sm:py-8 md:py-12 px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 sm:mb-8 md:mb-10"
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 shadow-xl flex-shrink-0"
          >
            <BookOpen className="text-white w-5 h-5 sm:w-7 sm:h-7" />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text flex-shrink-0">My Memories</h1>
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
            className="flex-shrink-0"
          >
            <Sparkles className="text-purple-500 w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
        </div>
        <div className="relative">
          <AnimeInput
            placeholder="Search by content, mood, date, or day (e.g., Monday, January, 2024)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12 sm:pl-14 text-sm sm:text-base"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2"
          >
            <Search className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </div>
      </motion.div>

      <div className="grid gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {entries.length === 0 && !loading ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="text-center py-16 md:py-24"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-8xl mb-6"
              >
                📔
              </motion.div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 gradient-text">No memories yet</h3>
              <p className="text-base sm:text-lg text-foreground/70 mb-4 sm:mb-6 px-4">Start your journey by creating your first entry!</p>
              <Link href="/new">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <AnimeButton variant="primary" size="lg">
                    Create First Entry
                  </AnimeButton>
                </motion.div>
              </Link>
            </motion.div>
          ) : (
            entries.map((entry, index) => {
              const MoodIcon = moodIcons[entry.mood]?.icon || Smile;
              const moodStyle = moodIcons[entry.mood] || moodIcons.happy;
              
              return (
                <motion.div
                  key={entry._id?.toString() || index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, x: -50 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                >
                  <Link href={`/entries/${entry._id}`}>
                    <AnimeCard hoverEffect gradient className="p-4 sm:p-6 md:p-8 cursor-pointer group">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl border-2 ${moodStyle.bg} ${moodStyle.border} shadow-lg ${moodStyle.shadow} relative overflow-hidden flex-shrink-0`}
                        >
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${moodStyle.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                          />
                          <MoodIcon size={24} className={`sm:w-7 sm:h-7 ${moodStyle.text} relative z-10`} />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base font-semibold text-foreground/80 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border-2 border-purple-300/30 dark:border-purple-600/30 backdrop-blur-sm w-full sm:w-auto"
                        >
                          <Calendar size={16} className="sm:w-[18px] sm:h-[18px] text-purple-500 flex-shrink-0" />
                          <span className="truncate sm:whitespace-normal">
                            <span className="hidden sm:inline">
                          {new Date(entry.createdAt!).toLocaleDateString(undefined, {
                                weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                            </span>
                            <span className="sm:hidden">
                              {new Date(entry.createdAt!).toLocaleDateString(undefined, {
                                weekday: 'short',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </span>
                          </span>
                        </motion.div>
                      </div>
                      <motion.p
                        className="text-foreground line-clamp-3 leading-relaxed text-sm sm:text-base md:text-lg font-medium"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {entry.content}
                      </motion.p>
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 sm:mt-4 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full"
                      />
                    </AnimeCard>
                  </Link>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
