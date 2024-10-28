import NextAuth, { NextAuthOptions, Session, User } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { loginAction } from "@/lib/actions/auth.acton";

const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      
      async authorize(credentials) {
        if (!credentials) return null;
        
        const {email, password} = credentials;
        const {success, user, error} = await loginAction({email, password});

        if(success){
          return user;
        }else{
          throw new Error(error);
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 1 day
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
  },

  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = token.user as User;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};

export default (req : NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
