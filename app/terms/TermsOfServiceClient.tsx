'use client';

import { motion } from 'framer-motion';
import AnimeCard from '@/components/ui/AnimeCard';
import { FileText, Scale, AlertCircle, UserCheck, Ban, Mail } from 'lucide-react';

export default function TermsOfServiceClient() {
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
          <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20 backdrop-blur-xl border-2 border-white/30 dark:border-white/10">
            <Scale className="w-16 h-16 text-blue-500" />
          </div>
        </motion.div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text">
          Terms of Service
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
                <h2 className="text-2xl font-bold mb-3 gradient-text">Agreement to Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  By accessing and using Diary Journey, you agree to be bound by these Terms of Service and all applicable 
                  laws and regulations. If you do not agree with any of these terms, you are prohibited from using this application.
                </p>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex-shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">User Accounts</h2>
                <div className="space-y-3 text-foreground/80">
                  <p className="leading-relaxed">
                    To use Diary Journey, you must create an account using Google OAuth authentication. You are responsible for:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex flex-col sm:flex-row items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Maintaining the security of your account credentials</span>
                    </li>
                    <li className="flex flex-col sm:flex-row items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>All activities that occur under your account</span>
                    </li>
                    <li className="flex flex-col sm:flex-row items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Notifying us immediately of any unauthorized access</span>
                    </li>
                    <li className="flex flex-col sm:flex-row items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Providing accurate and complete information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 text-white flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Acceptable Use</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  You agree to use Diary Journey only for lawful purposes. You must not:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Use the service for any illegal or unauthorized purpose</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Attempt to gain unauthorized access to our systems</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Interfere with or disrupt the service or servers</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Upload malicious code, viruses, or harmful content</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Violate any applicable laws or regulations</span>
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
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Intellectual Property</h2>
                <div className="space-y-3 text-foreground/80">
                  <p className="leading-relaxed">
                    The Diary Journey application, including its design, features, and content, is owned by us and protected 
                    by intellectual property laws.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Your Content:</strong> You retain all rights to the diary entries and content you create. 
                    By using our service, you grant us a limited license to store, display, and process your content 
                    solely for the purpose of providing the service to you.
                  </p>
                </div>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 text-white flex-shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Disclaimer of Warranties</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Diary Journey is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Warranties of merchantability or fitness for a particular purpose</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Uninterrupted or error-free service</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Accuracy, reliability, or completeness of content</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Security of data transmission or storage</span>
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
                <Ban className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Limitation of Liability</h2>
                <p className="text-foreground/80 leading-relaxed">
                  To the maximum extent permitted by law, Diary Journey and its operators shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of 
                  data, loss of profits, or loss of use, arising out of or related to your use of the service, even if 
                  we have been advised of the possibility of such damages.
                </p>
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
                <h2 className="text-2xl font-bold mb-3 gradient-text">Data Backup and Loss</h2>
                <p className="text-foreground/80 leading-relaxed">
                  While we take reasonable measures to protect your data, we strongly recommend that you maintain your own 
                  backup copies of important diary entries. We are not responsible for any loss of data due to technical 
                  failures, security breaches, or other unforeseen circumstances.
                </p>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex-shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Termination</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  We reserve the right to terminate or suspend your account and access to the service at our sole discretion, 
                  without notice, for conduct that we believe:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Violates these Terms of Service</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Is harmful to other users or the service</span>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Violates applicable laws or regulations</span>
                  </li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-3">
                  You may also terminate your account at any time by contacting us.
                </p>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex-shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Changes to Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. We will notify users of any material 
                  changes by updating the "Last updated" date at the top of this page. Your continued use of the service 
                  after such changes constitutes your acceptance of the new terms.
                </p>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Governing Law</h2>
                <p className="text-foreground/80 leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with applicable laws, without 
                  regard to conflict of law principles. Any disputes arising from these terms or your use of the service 
                  shall be resolved through binding arbitration or in the courts of competent jurisdiction.
                </p>
              </div>
            </div>
          </AnimeCard>
        </motion.div>

        <motion.div variants={item}>
          <AnimeCard gradient hoverEffect>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 gradient-text">Contact Information</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  If you have any questions about these Terms of Service, please contact us at:
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
      </motion.div>
    </div>
  );
}
