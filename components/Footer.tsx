'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Shield, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card border-t-0 rounded-t-2xl sm:rounded-t-3xl mx-2 sm:mx-4 mb-2 mt-8 shadow-2xl backdrop-blur-2xl"
    >
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-sm sm:text-base text-foreground/80"
          >
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 fill-red-500" />
            </motion.div>
            <span>by Diary Journey</span>
          </motion.div>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/privacy">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm sm:text-base text-foreground/80 hover:text-purple-500 transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>Privacy</span>
              </motion.div>
            </Link>

            <Link href="/terms">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm sm:text-base text-foreground/80 hover:text-purple-500 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Terms</span>
              </motion.div>
            </Link>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/20 dark:border-white/10 text-center">
          <p className="text-xs sm:text-sm text-foreground/60">
            © {new Date().getFullYear()} Diary Journey. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
