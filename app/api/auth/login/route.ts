import { signIn } from "@/auth";
import { NextResponse } from "next/server";
import { AuthError } from "next-auth";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        await signIn('credentials', { email, password, redirect: false });

        return NextResponse.json({ success: true });
    } catch (error) {
        if (error instanceof AuthError) {
            if (error.type === 'CredentialsSignin') {
                return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
            }
        }
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}