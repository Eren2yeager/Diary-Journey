'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AnimeButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: ReactNode;
}

export default function AnimeButton({
  className,
  variant = 'primary',
  size = 'md',
  isLoading,
  children,
  ...props
}: AnimeButtonProps) {
  const variants = {
    primary: 'relative overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-600 before:via-pink-600 before:to-orange-600 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
    secondary: 'relative overflow-hidden bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-white font-bold shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:via-cyan-500 before:to-teal-500 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
    danger: 'relative overflow-hidden bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white font-bold shadow-2xl shadow-red-500/50 hover:shadow-red-500/70 before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-600 before:via-rose-600 before:to-pink-600 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
    ghost: 'relative overflow-hidden bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-foreground font-semibold hover:from-gray-300 hover:via-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:via-gray-600 dark:hover:to-gray-700 border-2 border-transparent hover:border-purple-300 dark:hover:border-purple-600',
  };

  const sizes = {
    sm: 'h-9 sm:h-10 px-3 sm:px-5 text-xs sm:text-sm rounded-lg sm:rounded-xl',
    md: 'h-11 sm:h-12 px-5 sm:px-7 text-sm sm:text-base rounded-xl sm:rounded-2xl',
    lg: 'h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg rounded-2xl sm:rounded-3xl',
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        y: -2,
      }}
      whileTap={{ 
        scale: 0.98,
        y: 0,
      }}
      className={cn(
        'relative inline-flex items-center justify-center font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-400/50 disabled:pointer-events-none disabled:opacity-50 gap-2 z-0',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {isLoading && (
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="h-4 w-4 rounded-full border-2 border-current border-t-transparent"
          />
        )}
        {children}
      </span>
      {variant !== 'ghost' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}
    </motion.button>
  );
}
