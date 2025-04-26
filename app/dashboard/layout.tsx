"use server";

import MainNav from "@/components/shared/DashboardMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const user = await currentUser();
  return (
    <ClerkProvider>
      <div className="flex h-screen bg-gray-100">
        <MainNav />

        <div className="flex-1 flex flex-col">
          <header className="h-16 bg-white border-b px-4 flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1 max-w-lg">
              <Search className="w-5 h-5 text-gray-500" />
              <Input
                type="search"
                placeholder="Search lessons, quzzies, or topics..."
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                <Link href="/dashboard/settings">
                  <Avatar>
                    <AvatarFallback className="bg-blue-600 text-white">
                      {getInitials(user?.fullName || "")}
                    </AvatarFallback>
                  </Avatar>
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
