'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef, useState, ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AnimeInputProps extends HTMLMotionProps<'input'> {
  label?: ReactNode;
  error?: string;
}

export const AnimeInput = forwardRef<HTMLInputElement, AnimeInputProps>(
  ({ className, label, error, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    
    return (
      <div className="w-full">
        {label && (
          <motion.label
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="block text-sm font-bold text-foreground mb-2 ml-1 gradient-text"
          >
            {label}
          </motion.label>
        )}
        <motion.div
          whileFocus={{ scale: 1.02 }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-0 blur-xl"
            animate={{
              opacity: isFocused ? 0.6 : 0,
              scale: isFocused ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <input
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              'relative flex h-11 sm:h-12 w-full rounded-xl sm:rounded-2xl border-2 border-input bg-background/60 backdrop-blur-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 sm:focus-visible:ring-4 focus-visible:ring-purple-400/50 focus-visible:ring-offset-1 sm:focus-visible:ring-offset-2 focus-visible:border-purple-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 glass-input shadow-lg hover:shadow-xl',
              error && 'border-red-500 focus-visible:ring-red-400/50',
              className
            )}
            {...props as any}
          />
        </motion.div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold text-red-500 mt-2 ml-1 flex items-center gap-1"
          >
            <span>⚠</span> {error}
          </motion.p>
        )}
      </div>
    );
  }
);
AnimeInput.displayName = 'AnimeInput';

interface AnimeTextareaProps extends HTMLMotionProps<'textarea'> {
  label?: ReactNode;
  error?: string;
}

export const AnimeTextarea = forwardRef<HTMLTextAreaElement, AnimeTextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    
    return (
      <div className="w-full">
        {label && (
          <motion.label
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="block text-sm font-bold text-foreground mb-2 ml-1 gradient-text"
          >
            {label}
          </motion.label>
        )}
        <motion.div
          whileFocus={{ scale: 1.01 }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-0 blur-xl"
            animate={{
              opacity: isFocused ? 0.6 : 0,
              scale: isFocused ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <textarea
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              'relative flex min-h-[120px] w-full rounded-xl sm:rounded-2xl border-2 border-input bg-background/60 backdrop-blur-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium ring-offset-background placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 sm:focus-visible:ring-4 focus-visible:ring-purple-400/50 focus-visible:ring-offset-1 sm:focus-visible:ring-offset-2 focus-visible:border-purple-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 glass-input resize-y shadow-lg hover:shadow-xl',
              error && 'border-red-500 focus-visible:ring-red-400/50',
              className
            )}
            {...props as any}
          />
        </motion.div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold text-red-500 mt-2 ml-1 flex items-center gap-1"
          >
            <span>⚠</span> {error}
          </motion.p>
        )}
      </div>
    );
  }
);
AnimeTextarea.displayName = 'AnimeTextarea';

export default AnimeInput;
