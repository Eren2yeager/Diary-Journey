import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        const { name, email, image } = user;
        try {
          await dbConnect();
          const userExists = await User.findOne({ email });

          if (!userExists) {
            await User.create({
              name: name || 'Anonymous',
              email: email || '',
              image: image || '',
            });
          }
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    async session({ session }) {
      // Add user ID to session from DB
      try {
        await dbConnect();
        const dbUser = await User.findOne({ email: session.user?.email });
        if (dbUser && session.user) {
          // @ts-ignore
          session.user.id = dbUser._id.toString();
        }
      } catch (error) {
        console.error("Error fetching user for session", error);
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
