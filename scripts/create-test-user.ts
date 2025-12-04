/**
 * Script to create a test user for development
 */

import prisma from "../lib/prisma";
import bcrypt from "bcrypt";

async function createTestUser() {
  const email = "test@example.com";
  const password = "password123";
  const name = "Test User";

  console.log("🔧 Creating test user...");

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    console.log("⚠️  User already exists:", email);
    console.log("   Updating password...");
    
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
        name,
        learningPath: "Web Development",
        progress: 25,
        completedLessons: 5,
        hoursSpent: 12,
        performanceTrend: "Improving",
        recommendations: ["Advanced React", "TypeScript", "Node.js"],
      },
    });
    
    console.log("✅ User updated successfully!");
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        learningPath: "Web Development",
        progress: 25,
        completedLessons: 5,
        hoursSpent: 12,
        performanceTrend: "Improving",
        recommendations: ["Advanced React", "TypeScript", "Node.js"],
      },
    });
    
    console.log("✅ Test user created successfully!");
  }

  console.log("\n📧 Email:", email);
  console.log("🔑 Password:", password);
  console.log("\n💡 You can now sign in with these credentials!");

  await prisma.$disconnect();
}

createTestUser().catch(console.error);
