import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Simulate a database call
    const userCount = await prisma.user.count();
    const feedbackCount = await prisma.feedback.count();

    // Return a JSON response
    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      data: {
        totalUsers: userCount,
        totalFeedback: feedbackCount,
        systemStatus: "Operational",
        version: "1.0.0"
      }
    }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
