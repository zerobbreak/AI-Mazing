# AI-Mazing Learning Platform

> **An intelligent, AI-powered educational platform with adaptive learning paths, predictive analytics, and personalized recommendations.**

![Next.js](https://img.shields.io/badge/Next.js-15.5.7-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### **Aurora Intelligence Design**

- **Dark Mode First** - Beautiful dark theme with flowing gradients
- **Glassmorphism Effects** - Modern UI with blurred backgrounds and transparency
- **Responsive Design** - Seamless experience across all devices
- **Premium Aesthetics** - Vibrant colors, smooth animations, and dynamic micro-interactions

### **Core Functionality**

- **Secure Authentication** - NextAuth.js with credential-based login
- **Interactive Dashboard** - Real-time progress tracking and analytics
- **Adaptive Learning Paths** - Personalized course recommendations
- **Performance Analytics** - Track progress, trends, and achievements
- **Virtual AI Tutor** - Get personalized learning assistance
- **Community Features** - Connect with fellow learners
- **Feedback System** - Share thoughts and improve the platform

### **Dashboard Features**

- **Quick Stats Overview** - Learning streak, points, study time, and ranking
- **Continue Learning** - Pick up where you left off
- **Upcoming Lessons** - Schedule and upcoming content
- **Recommendations** - AI-powered course suggestions
- **Recent Activity Feed** - Track your learning journey
- **Skeleton Loading States** - Professional loading experience

## Tech Stack

### **Frontend**

- **Framework**: [Next.js 15.5.7](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui + Heroicons
- **State Management**: React Hooks

### **Backend**

- **API**: Next.js Server Actions
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js v5
- **Password Hashing**: bcrypt

### **Additional Tools**

- **Form Validation**: Zod
- **Code Quality**: ESLint, TypeScript
- **Package Manager**: npm

## Installation

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database
- npm or yarn package manager

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/AI-Mazing.git
cd AI-Mazing
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ai_mazing"

# NextAuth
AUTH_SECRET="your-secret-key-here"
# Generate with: openssl rand -base64 32

# App URL
NEXTAUTH_URL="http://localhost:3000"
```

### Step 4: Set Up the Database

```bash
# Run Prisma migrations
npx prisma migrate dev

# Optional: Seed the database
npx prisma db seed
```

### Step 5: Create a Test User

```bash
npx tsx scripts/create-test-user.ts
```

This creates a test account with:

- **Email**: `test@example.com`
- **Password**: `password123`

### Step 6: Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app! 🎉

## 🗄️ Database Schema

### **User Model**

```prisma
model User {
  id               Int       @id @default(autoincrement())
  email            String    @unique
  password         String
  name             String?
  learningPath     String?
  progress         Int?
  recommendations  String[]
  completedLessons Int?
  hoursSpent       Int?
  performanceTrend String?
  preferences      String?
  createdAt        DateTime  @default(now())
  updatedAt        DateTime  @updatedAt
}
```

### **Feedback Model**

```prisma
model Feedback {
  id        Int      @id @default(autoincrement())
  userId    Int
  content   String
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id])
}
```

## 📂 Project Structure

```
AI-Mazing/
├── app/                          # Next.js App Router
│   ├── auth/                    # Authentication pages
│   │   ├── sign-in/            # Login page
│   │   └── sign-up/            # Registration page
│   ├── dashboard/              # Dashboard pages
│   │   ├── analytics/          # Performance analytics
│   │   ├── community/          # Community features
│   │   ├── feedback/           # Feedback system
│   │   ├── learning-path/      # Learning path management
│   │   ├── profile/            # User profile editor
│   │   ├── recommendations/    # Course recommendations
│   │   └── virtual-tutor/      # AI tutor interface
│   ├── features/               # Feature pages
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── components/                  # React components
│   ├── admin-panel/            # Dashboard layout components
│   ├── home/                   # Homepage sections
│   ├── loading/                # Loading skeletons
│   ├── shared/                 # Shared components
│   └── ui/                     # Shadcn UI components
├── lib/                        # Utilities and actions
│   ├── actions/                # Server actions
│   │   ├── dashboard.action.ts # Dashboard data fetching
│   │   ├── user.action.ts      # User CRUD operations
│   │   └── action.ts           # Authentication actions
│   ├── prisma.ts               # Prisma client
│   └── utils.ts                # Helper functions
├── types/                      # TypeScript types
│   └── dashboard.ts            # Dashboard type definitions
├── prisma/                     # Database schema
│   └── schema.prisma           # Prisma schema
├── scripts/                    # Utility scripts
│   ├── create-test-user.ts    # Create test user
│   └── debug-auth.ts          # Debug authentication
└── public/                     # Static assets
```

## 🔧 Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Database

```bash
npx prisma studio              # Open Prisma Studio (Database GUI)
npx prisma migrate dev         # Create and apply migrations
npx prisma generate            # Generate Prisma Client
npx prisma db push             # Push schema changes
```

### Utilities

```bash
npx tsx scripts/create-test-user.ts  # Create test user
npx tsx scripts/debug-auth.ts        # Debug authentication
```

## Key Pages

| Route                        | Description                            |
| ---------------------------- | -------------------------------------- |
| `/`                          | Homepage with features overview        |
| `/auth/sign-in`              | User login                             |
| `/auth/sign-up`              | User registration                      |
| `/dashboard`                 | Main dashboard with stats and overview |
| `/dashboard/learning-path`   | Current learning path and progress     |
| `/dashboard/analytics`       | Performance metrics and trends         |
| `/dashboard/profile`         | Edit user profile and preferences      |
| `/dashboard/community`       | Connect with other learners            |
| `/dashboard/recommendations` | Personalized course suggestions        |
| `/dashboard/virtual-tutor`   | AI-powered learning assistant          |
| `/dashboard/feedback`        | Provide platform feedback              |

## Authentication

The app uses **NextAuth.js v5** with the following setup:

### Sign Up Flow

1. User creates account with email/password
2. Password is hashed with bcrypt
3. User record created in PostgreSQL
4. Automatic redirect to login

### Sign In Flow

1. User enters credentials
2. NextAuth validates against database
3. JWT session created
4. Redirect to dashboard

### Protected Routes

- All `/dashboard/*` routes require authentication
- Middleware checks session before allowing access
- Automatic redirect to `/auth/sign-in` if not authenticated

## Design System

### Color Palette

- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Accent**: Pink (#EC4899)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Background**: Gray-950 (#030712)
- **Surface**: Gray-900 (#111827)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, gradient text effects
- **Body**: Regular, high contrast for readability

## Deployment

### Environment Variables for Production

```env
DATABASE_URL="your-production-database-url"
AUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-domain.com"
```

### Recommended Platforms

- **Vercel** - Optimized for Next.js
- **Railway** - PostgreSQL hosting
- **Supabase** - Alternative database option

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

**Unathi Tshuma**

- GitHub: [@zerobbreak](https://github.com/zerobbreak)

## Acknowledgments

- [Next.js](https://nextjs.org/) - React Framework
- [Shadcn/ui](https://ui.shadcn.com/) - UI Component Library
- [Prisma](https://www.prisma.io/) - Database ORM
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling Framework

---

**Built with ❤️ using Next.js and AI-powered intelligence**
