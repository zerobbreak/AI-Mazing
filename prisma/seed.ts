import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Prepare hashed passwords
  const passwordAlice = await hash('securepassword1', 12);
  const passwordBob = await hash('securepassword2', 12);
  const passwordCarol = await hash('securepassword3', 12);

  // Create users
  const users = [
    {
      email: 'alice@example.com',
      password: passwordAlice,
      name: 'Alice',
      learningPath: 'Web Development',
      progress: 50,
      recommendations: ['Learn React', 'Practice TypeScript'],
      completedLessons: 10,
      hoursSpent: 20,
      performanceTrend: 'Improving',
      isOnboarding: false,
    },
    {
      email: 'bob@example.com',
      password: passwordBob,
      name: 'Bob',
      learningPath: 'Data Science',
      progress: 70,
      recommendations: ['Master Python', 'Explore AI'],
      completedLessons: 15,
      hoursSpent: 30,
      performanceTrend: 'Stable',
      isOnboarding: true,
    },
    {
      email: 'carol@example.com',
      password: passwordCarol,
      name: 'Carol',
      learningPath: 'Mobile Development',
      progress: 30,
      recommendations: ['Build Flutter Apps', 'Learn Dart'],
      completedLessons: 5,
      hoursSpent: 10,
      performanceTrend: 'Declining',
      isOnboarding: false,
    },
  ];

  // Insert or update users
  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }
  console.log(users);
  console.log('Users added successfully with hashed passwords!');
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error('Error seeding database:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
