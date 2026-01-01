'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import AnimeCard from '@/components/ui/AnimeCard';
import AnimeButton from '@/components/ui/AnimeButton';
import { AnimeTextarea } from '@/components/ui/AnimeInput';
import MoodSelector from '@/components/MoodSelector';
import Loading from '@/components/ui/Loading';
import { PenLine, Sparkles, Save, X } from 'lucide-react';

export default function NewEntry() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('happy');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'unauthenticated') {
    router.push('/');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          mood,
          attachments: [],
        }),
      });

      if (res.ok) {
        router.push('/entries');
        router.refresh();
      } else {
        alert('Failed to save entry');
      }
    } catch (error) {
      console.error('Error creating entry:', error);
      alert('An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-6 sm:py-8 md:py-12 px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 sm:mb-8 text-center"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="inline-block mb-3 sm:mb-4"
          >
            <div className="p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 shadow-2xl">
              <PenLine className="text-white w-7 h-7 sm:w-8 sm:h-8" />
            </div>
          </motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 gradient-text px-2">
            Create New Memory
          </h1>
          <p className="text-base sm:text-lg text-foreground/70 px-2">
            Capture this moment in your diary journey ✨
          </p>
        </motion.div>

        <AnimeCard gradient className="p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
          {/* Animated background decoration */}
          <motion.div
            className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6 sm:gap-8">
            <MoodSelector selectedMood={mood} onSelect={setMood} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <AnimeTextarea
                label={
                  <span className="flex items-center gap-2">
                    <Sparkles size={16} className="sm:w-[18px] sm:h-[18px] text-purple-500" />
                    What's on your mind today?
                  </span>
                }
                placeholder="Start writing your thoughts, feelings, and experiences here... Let your words flow freely! 💭"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[250px] sm:min-h-[300px] text-sm sm:text-base md:text-lg"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-4 sm:mt-6"
            >
              <AnimeButton
                type="button"
                variant="ghost"
                onClick={() => router.back()}
                disabled={isSubmitting}
                className="gap-2 w-full sm:w-auto text-sm sm:text-base"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
                Cancel
              </AnimeButton>
              <AnimeButton
                type="submit"
                variant="primary"
                isLoading={isSubmitting}
                // size="lg"
                className="gap-2 w-full sm:w-auto text-sm sm:text-base"
              >
                <Save size={18} className="sm:w-5 sm:h-5" />
                Save Memory
              </AnimeButton>
            </motion.div>
          </form>
        </AnimeCard>
      </motion.div>
    </div>
  );
}
