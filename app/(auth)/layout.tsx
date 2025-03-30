import { Brain } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ClerkProvider>
      <main className="flex min-h-screen">
        <section className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="w-full max-w-md space-y-8">
            <div className="flex items-center justify-center gap-3">
              <Brain className="w-10 h-10 text-white" />
              <h1 className="text-3xl font-bold text-white">AI Mazing</h1>
            </div>
            {children}
          </div>
        </section>
        <section className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="/form.svg"
            alt="AI Mazing Learning"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
            <h2 className="text-2xl font-bold">Personalized AI Learning</h2>
            <p className="mt-2 text-slate-300">
              Embark on a tailored educational journey designed to help you
              achieve your academic goals.
            </p>
          </div>
        </section>
      </main>
    </ClerkProvider>
  );
}
