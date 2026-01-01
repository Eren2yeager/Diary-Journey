'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import AnimeCard from '@/components/ui/AnimeCard';
import AnimeButton from '@/components/ui/AnimeButton';
import Loading from '@/components/ui/Loading';
import { ArrowLeft, Calendar, Trash2, Smile, Frown, Meh, Zap, CloudRain, Sparkles } from 'lucide-react';
import { IEntry } from '@/models/Entry';

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

export default function EntryPage() {
  const { status } = useSession();
  const router = useRouter();
  const params = useParams();
  const [entry, setEntry] = useState<IEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const res = await fetch(`/api/entries/${params.id}`);
        const data = await res.json();
        if (data.success) {
          setEntry(data.data);
        } else {
          router.push('/entries');
        }
      } catch (error) {
        console.error('Error fetching entry:', error);
      } finally {
        setLoading(false);
      }
    };

    if (status === 'authenticated' && params.id) {
      fetchEntry();
    }
  }, [status, params.id, router]);

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this memory? This action cannot be undone.')) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/entries/${params.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.push('/entries');
        router.refresh();
      } else {
        alert('Failed to delete entry');
      }
    } catch (error) {
      console.error('Error deleting entry:', error);
      alert('An error occurred');
    } finally {
      setIsDeleting(false);
    }
  };

  if (status === 'loading' || loading) {
    return <Loading />;
  }

  if (!entry) return null;

  const MoodIcon = moodIcons[entry.mood]?.icon || Smile;
  const moodStyle = moodIcons[entry.mood] || moodIcons.happy;

  return (
    <div className="max-w-4xl mx-auto py-6 sm:py-8 md:py-12 px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
          <AnimeButton
            variant="ghost"
            onClick={() => router.back()}
            className="gap-2 text-sm sm:text-base w-full sm:w-auto"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            <span className="font-semibold">Back to Memories</span>
          </AnimeButton>

          <AnimeButton
            variant="danger"
            onClick={handleDelete}
            isLoading={isDeleting}
            className="gap-2 text-sm sm:text-base w-full sm:w-auto"
          >
            <Trash2 size={18} className="sm:w-5 sm:h-5" />
            Delete Memory
          </AnimeButton>
        </div>

        <AnimeCard gradient className="p-4 sm:p-6 md:p-8 lg:p-12 min-h-[400px] sm:min-h-[500px] relative overflow-hidden">
          {/* Decorative gradient background */}
          <motion.div
            className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${moodStyle.gradient} opacity-10 rounded-full blur-3xl`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4 pb-4 sm:pb-6 border-b-2 border-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl border-2 ${moodStyle.bg} ${moodStyle.border} shadow-xl ${moodStyle.shadow} relative overflow-hidden w-full sm:w-auto`}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${moodStyle.gradient} opacity-20`}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <MoodIcon size={24} className={`sm:w-8 sm:h-8 ${moodStyle.text} relative z-10`} />
                <span className={`font-bold text-base sm:text-lg capitalize ${moodStyle.text} relative z-10`}>
                  {entry.mood}
                </span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground/90 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border-2 border-purple-300/30 dark:border-purple-600/30 backdrop-blur-sm w-full sm:w-auto"
              >
                <Calendar size={18} className="sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" />
                <span className="text-center sm:text-left">
                  <span className="hidden sm:inline">
                  {new Date(entry.createdAt!).toLocaleDateString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
                  <span className="sm:hidden">
                    {new Date(entry.createdAt!).toLocaleDateString(undefined, {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none"
            >
              <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  <Sparkles className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text m-0">Your Memory</h2>
              </div>
              <p className="whitespace-pre-wrap leading-relaxed text-foreground text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                {entry.content}
              </p>
            </motion.div>
          </div>
        </AnimeCard>
      </motion.div>
    </div>
  );
}
