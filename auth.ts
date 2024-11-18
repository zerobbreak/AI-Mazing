import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "./lib/prisma";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Validate password
    if (user) {
      return user; // Return the full user object if authentication succeeds
    }
  } catch (error) {
    console.error("Failed to fetch user: ", error);
    throw new Error("Failed to fetch user");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
