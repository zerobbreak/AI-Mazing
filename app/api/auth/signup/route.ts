import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export async function POST(req: Request) {
    try {
        // Validate input
        const parsedData = signupSchema.parse(req.body);
        const { email, password } = parsedData;

        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 409 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });

        
        return NextResponse.json({ message: "User created successfully." }, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error("Validation error:", error.errors);
            return NextResponse.json({ error: "Invalid input", details: error.errors }, { status: 400 });
        }
        console.error("Signup error:", error);
        return NextResponse.json({ error: "An error occurred during signup" }, { status: 500 });
    }
}
