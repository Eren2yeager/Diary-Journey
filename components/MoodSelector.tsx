'use client';

import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Smile, Frown, Meh, Zap, CloudRain } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MoodSelectorProps {
  selectedMood: string;
  onSelect: (mood: string) => void;
}

const moods = [
  { 
    id: 'happy', 
    label: 'Happy', 
    icon: Smile, 
    gradient: 'from-yellow-400 via-yellow-500 to-orange-500',
    bg: 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-400/50',
    shadow: 'shadow-yellow-500/50',
    ring: 'ring-yellow-400/30'
  },
  { 
    id: 'excited', 
    label: 'Excited', 
    icon: Zap, 
    gradient: 'from-orange-400 via-red-500 to-pink-500',
    bg: 'bg-gradient-to-br from-orange-500/20 to-pink-500/20',
    border: 'border-orange-400/50',
    shadow: 'shadow-orange-500/50',
    ring: 'ring-orange-400/30'
  },
  { 
    id: 'neutral', 
    label: 'Neutral', 
    icon: Meh, 
    gradient: 'from-gray-400 via-gray-500 to-slate-500',
    bg: 'bg-gradient-to-br from-gray-500/20 to-slate-500/20',
    border: 'border-gray-400/50',
    shadow: 'shadow-gray-500/50',
    ring: 'ring-gray-400/30'
  },
  { 
    id: 'sad', 
    label: 'Sad', 
    icon: CloudRain, 
    gradient: 'from-blue-400 via-cyan-500 to-indigo-500',
    bg: 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20',
    border: 'border-blue-400/50',
    shadow: 'shadow-blue-500/50',
    ring: 'ring-blue-400/30'
  },
  { 
    id: 'angry', 
    label: 'Angry', 
    icon: Frown, 
    gradient: 'from-red-400 via-rose-500 to-pink-500',
    bg: 'bg-gradient-to-br from-red-500/20 to-pink-500/20',
    border: 'border-red-400/50',
    shadow: 'shadow-red-500/50',
    ring: 'ring-red-400/30'
  },
];

export default function MoodSelector({ selectedMood, onSelect }: MoodSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-3 sm:gap-4"
    >
      <motion.label
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-foreground font-bold ml-1 text-sm sm:text-base gradient-text"
      >
        How are you feeling today? ✨
      </motion.label>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {moods.map((mood, index) => {
          const Icon = mood.icon;
          const isSelected = selectedMood === mood.id;
          
          return (
            <motion.button
              key={mood.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                y: -4,
                rotate: [0, -5, 5, 0],
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(mood.id)}
              type="button"
              className={cn(
                'relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl transition-all duration-300 border-2 font-bold overflow-hidden text-xs sm:text-sm',
                isSelected 
                  ? cn(
                      'bg-gradient-to-r', mood.gradient,
                      'text-white shadow-2xl',
                      mood.shadow,
                      'ring-2 sm:ring-4 ring-offset-1 sm:ring-offset-2',
                      mood.ring
                    )
                  : cn(
                      'bg-background/60 backdrop-blur-xl',
                      'border-white/30 dark:border-white/10',
                      'hover:border-purple-400/50',
                      'text-foreground hover:text-white',
                      'hover:shadow-xl'
                    )
              )}
            >
              {isSelected && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              )}
              <motion.div
                animate={isSelected ? { 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                } : {}}
                transition={{ duration: 0.5 }}
                className={cn(
                  'relative z-10 p-1.5 sm:p-2 rounded-lg sm:rounded-xl',
                  isSelected ? 'bg-white/20' : mood.bg
              )}
            >
                <Icon size={18} className="sm:w-[22px] sm:h-[22px]" />
              </motion.div>
              <span className="relative z-10">{mood.label}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
