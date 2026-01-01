'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full gap-8">
      <div className="relative">
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Spinner container */}
        <div className="relative p-8 rounded-3xl glass-card flex gap-4 items-center justify-center shadow-2xl">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 shadow-lg"
              animate={{
                y: [-8, 8, -8],
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Sparkles className="text-purple-500" size={32} />
        </motion.div>
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-xl md:text-2xl font-bold gradient-text"
      >
          Loading Your Memories...
      </motion.p>
      </motion.div>
    </div>
  );
}
