'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { ReactNode } from 'react';

interface AnimeCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  hoverEffect?: boolean;
  gradient?: boolean;
  children?: ReactNode;
}

export default function AnimeCard({
  className,
  children,
  hoverEffect = false,
  gradient = false,
  ...props
}: AnimeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hoverEffect ? { 
        y: -8, 
        scale: 1.02,
        rotateY: 2,
      } : undefined}
      transition={{ 
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className={cn(
        'rounded-2xl sm:rounded-3xl glass-card p-4 sm:p-6 relative overflow-hidden',
        gradient && 'bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 dark:from-purple-600/20 dark:via-pink-600/20 dark:to-orange-600/20',
        'border-2 border-white/30 dark:border-white/10',
        'shadow-xl hover:shadow-2xl',
        'backdrop-blur-xl',
        className
      )}
      {...props}
    >
      {gradient && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-orange-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradient-move 8s ease infinite',
          }}
        />
      )}
      <div className="relative z-10">
      {children}
      </div>
      {hoverEffect && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.div>
  );
}
