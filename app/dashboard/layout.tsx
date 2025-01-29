import MainNav from "@/components/shared/DashboardMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
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
              <span className="text-sm font-medium">John Doe</span>
              <Image
                src="/placeholder.svg"
                alt="Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;
