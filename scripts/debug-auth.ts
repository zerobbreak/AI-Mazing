/**
 * Debug script to check authentication
 * Run this to verify user credentials
 */

import prisma from "./lib/prisma";
import bcrypt from "bcrypt";

async function debugAuth() {
  const email = "test@example.com"; // Replace with your email
  const password = "password123"; // Replace with your password

  console.log("🔍 Checking authentication for:", email);

  // Check if user exists
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      password: true,
      name: true,
    },
  });

  if (!user) {
    console.log("❌ User NOT found in database");
    console.log("\n📝 To create a user, use the sign-up page or run:");
    console.log(`   npx ts-node -e "import('./scripts/create-test-user.ts')"`);
    return;
  }

  console.log("✅ User found:", user.email);
  console.log("📧 User ID:", user.id);
  console.log("👤 Name:", user.name || "Not set");

  // Check password
  const passwordMatch = await bcrypt.compare(password, user.password);
  
  if (passwordMatch) {
    console.log("✅ Password is CORRECT");
  } else {
    console.log("❌ Password is INCORRECT");
    console.log("\n💡 Tip: Make sure you're entering the same password you used during sign-up");
  }

  await prisma.$disconnect();
}

debugAuth().catch(console.error);
