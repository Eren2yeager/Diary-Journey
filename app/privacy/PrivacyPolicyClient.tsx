'use client';

import { motion } from 'framer-motion';
import AnimeCard from '@/components/ui/AnimeCard';
import { Shield, Lock, Eye, Database, Mail, FileText } from 'lucide-react';

export default function PrivacyPolicyClient() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-5xl mx-auto py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 sm:mb-12"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="inline-block mb-6"
        >
          <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 backdrop-blur-xl border-2 border-white/30 dark:border-white/10">
            <Shield className="w-16 h-16 text-purple-500" />
          </div>
        </motion.div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text">
          Privacy Policy
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80">
          Last updated: January 2, 2026
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Introduction</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Welcome to Diary Journey. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, and safeguard your information when you use our digital diary application.
                </p>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex-shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Information We Collect</h2>
                <div className="space-y-3 text-foreground/80">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Account Information</h3>
                    <p className="leading-relaxed">
                      When you sign in with Google OAuth, we collect your name, email address, and profile picture 
                      to create and manage your account.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Diary Entries</h3>
                    <p className="leading-relaxed">
                      We store the content of your diary entries, including text, mood selections, and timestamps. 
                      This data is essential for providing our core diary functionality.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Usage Data</h3>
                    <p className="leading-relaxed">
                      We may collect information about how you interact with our application, including pages visited 
                      and features used, through Google Analytics to improve our service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 text-white flex-shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">How We Use Your Information</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>To provide and maintain our diary service</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>To authenticate your identity and manage your account</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>To store and retrieve your diary entries securely</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>To improve our application and user experience</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>To communicate with you about service updates or issues</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 text-white flex-shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Data Security</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Secure authentication through Google OAuth</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Encrypted data transmission using HTTPS</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Secure database storage with MongoDB</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Regular security updates and monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 text-white flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Your Rights</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span><strong>Access:</strong> Request a copy of your personal data</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span><strong>Correction:</strong> Update or correct your information</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span><strong>Deletion:</strong> Request deletion of your account and data</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span><strong>Export:</strong> Download your diary entries</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 text-white flex-shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Data Sharing</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  We do not sell, trade, or rent your personal information to third parties. We may share data only in these circumstances:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>With your explicit consent</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>To comply with legal obligations</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>With service providers who assist in operating our application (e.g., hosting, analytics)</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Cookies and Tracking</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We use cookies and similar tracking technologies to maintain your session and analyze usage patterns. 
                  You can control cookie preferences through your browser settings. We use Google Analytics to understand 
                  how users interact with our application.
                </p>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Contact Us</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                </p>
                <a 
                  href="mailto:gautamdaksh29@gmail.com" 
                  className="text-purple-500 hover:text-purple-600 font-semibold inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  gautamdaksh29@gmail.com
                </a>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Changes to This Policy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review 
                  this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </AnimeCard>
        </motion.div>
      </motion.div>
    </div>
  );
}
