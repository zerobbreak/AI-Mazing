// loaddata.ts

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      email: "john.doe@example.com",
      password: "password123",
      name: "John Doe",
      learningPath: "Web Development",
      progress: 80,
      recommendations: ["React Basics", "Node.js Introduction"],
      completedLessons: 15,
      hoursSpent: 25,
      performanceTrend: "Improving",
    },
    {
      email: "jane.smith@example.com",
      password: "password456",
      name: "Jane Smith",
      learningPath: "Data Science",
      progress: 60,
      recommendations: ["Python for Data Analysis", "Machine Learning 101"],
      completedLessons: 10,
      hoursSpent: 20,
      performanceTrend: "Stable",
    },
    {
      email: "alice.jones@example.com",
      password: "password789",
      name: "Alice Jones",
      learningPath: "Digital Marketing",
      progress: 90,
      recommendations: ["SEO Strategies", "Content Marketing"],
      completedLessons: 18,
      hoursSpent: 30,
      performanceTrend: "Improving",
    },
    {
      email: "bob.brown@example.com",
      password: "password321",
      name: "Bob Brown",
      learningPath: "Graphic Design",
      progress: 70,
      recommendations: ["Photoshop Basics", "Design Principles"],
      completedLessons: 12,
      hoursSpent: 22,
      performanceTrend: "Declining",
    },
    {
      email: "charlie.white@example.com",
      password: "password654",
      name: "Charlie White",
      learningPath: "Cybersecurity",
      progress: 50,
      recommendations: ["Network Security", "Ethical Hacking"],
      completedLessons: 8,
      hoursSpent: 18,
      performanceTrend: "Stable",
    },
  ];

  for (const user of users) {
    await prisma.user.create({ data: user });
  }

  console.log(`${users.length} users created successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
