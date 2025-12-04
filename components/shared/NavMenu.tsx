"use client";

import Link from "next/link";
import {
  ChatBubbleLeftEllipsisIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg transition-transform group-hover:scale-105">
              <HomeIcon className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              AI-Mazing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-gray-300 hover:text-white hover:bg-white/5 focus:bg-white/5 data-[active]:bg-white/5")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-white/5 focus:bg-white/5 data-[active]:bg-white/5">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-gray-950/95 backdrop-blur-xl border border-white/10">
                      <ListItem
                        href="/features/adaptive-learning"
                        title="Adaptive Learning"
                        icon={<AcademicCapIcon className="h-5 w-5 text-blue-400" />}
                      >
                        Personalized learning paths that evolve with your progress.
                      </ListItem>
                      <ListItem
                        href="/features/predictive-analytics"
                        title="Predictive Analytics"
                        icon={<PresentationChartLineIcon className="h-5 w-5 text-purple-400" />}
                      >
                        Data-driven insights to forecast your learning trajectory.
                      </ListItem>
                      <ListItem
                        href="/features/chatbot"
                        title="AI Tutors"
                        icon={<ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-pink-400" />}
                      >
                        24/7 intelligent support to answer your questions instantly.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-white/5 focus:bg-white/5 data-[active]:bg-white/5">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[400px] bg-gray-950/95 backdrop-blur-xl border border-white/10">
                      <ListItem
                        href="/about"
                        title="About Us"
                        icon={<InformationCircleIcon className="h-5 w-5 text-teal-400" />}
                      >
                        Learn about our mission to revolutionize education.
                      </ListItem>
                      <ListItem
                        href="/contact"
                        title="Contact"
                        icon={<PhoneIcon className="h-5 w-5 text-green-400" />}
                      >
                        Get in touch with our team for support or inquiries.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button
              asChild
              variant="ghost"
              className="hidden md:inline-flex text-gray-300 hover:text-white hover:bg-white/5"
            >
              <Link href="/auth/sign-in">Log in</Link>
            </Button>
            <Button
              asChild
              className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-900/20 border-0"
            >
              <Link href="/auth/sign-up">Get Started</Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-gray-300 hover:text-white hover:bg-white/5"
                >
                  <Bars3Icon className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-gray-950/95 backdrop-blur-xl p-0">
                <SheetHeader className="border-b border-white/10 p-6">
                  <SheetTitle className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                      <HomeIcon className="h-5 w-5" />
                    </div>
                    <span className="text-xl font-bold text-white">AI-Mazing</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 p-6">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 text-lg font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    <HomeIcon className="h-5 w-5" />
                    <span>Home</span>
                  </Link>
                  
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Features</h4>
                    <Link
                      href="/features/adaptive-learning"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <AcademicCapIcon className="h-5 w-5" />
                      <span>Adaptive Learning</span>
                    </Link>
                    <Link
                      href="/features/predictive-analytics"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <PresentationChartLineIcon className="h-5 w-5" />
                      <span>Predictive Analytics</span>
                    </Link>
                    <Link
                      href="/features/chatbot"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors"
                    >
                      <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />
                      <span>AI Tutors</span>
                    </Link>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Company</h4>
                    <Link
                      href="/about"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      <InformationCircleIcon className="h-5 w-5" />
                      <span>About Us</span>
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <PhoneIcon className="h-5 w-5" />
                      <span>Contact</span>
                    </Link>
                  </div>

                  <div className="pt-6 mt-auto space-y-3">
                    <Button asChild className="w-full bg-white/10 hover:bg-white/20 text-white border-0" variant="secondary">
                      <Link href="/auth/sign-in" onClick={() => setIsOpen(false)}>Log in</Link>
                    </Button>
                    <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0">
                      <Link href="/auth/sign-up" onClick={() => setIsOpen(false)}>Get Started</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = ({ className, title, children, icon, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 focus:bg-white/5",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none text-white">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400 pl-7">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};