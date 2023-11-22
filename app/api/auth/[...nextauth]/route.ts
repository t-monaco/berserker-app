import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

const MINUTE = 60;
const HOUR = 60 * MINUTE;

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, _req) {
        if (!credentials?.username || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: {
            username: credentials?.username,
          },
        });

        // Check that user exist
        if (!user) return null;

        // Check that password match
        const passwordsMatch = await bcrypt.compare(
          credentials?.password,
          user.password,
        );

        if (!passwordsMatch) return null;

        return { id: user.id, username: user.username, role: user.role };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 4 * HOUR,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      // TODO: Need to augment JWT token type. Not is typing to unknown
      // @ts-ignore
      return { ...session, user: { ...token.user } };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
