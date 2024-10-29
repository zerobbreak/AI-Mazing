import Link from "next/link";
import {
  ChatBubbleLeftEllipsisIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
  HomeIcon,
  InformationCircleIcon, 
  PhoneIcon
} from "@heroicons/react/24/outline";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function NavMenu() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <HomeIcon className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">AI-Mazing Learning</span>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-4">
              {/* Home Link */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[200px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/"
                          className="flex items-center space-x-2 text-sm font-medium"
                        >
                          <HomeIcon className="w-4 h-4" />
                          <span>Go to Home</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Features Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[300px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/features/adaptive-learning"
                          className="flex items-center space-x-2 text-sm font-medium"
                        >
                          <AcademicCapIcon className="w-4 h-4" />
                          <span>Adaptive Learning</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/features/predictive-analytics"
                          className="flex items-center space-x-2 text-sm font-medium"
                        >
                          <PresentationChartLineIcon className="w-4 h-4" />
                          <span>Predictive Analytics</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/features/chatbot"
                          className="flex items-center space-x-2 text-sm font-medium"
                        >
                          <ChatBubbleLeftEllipsisIcon className="w-4 h-4" />
                          <span>Chatbots & Tutors</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About Us Link */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[200px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about"
                          className="flex items-center space-x-2 text-sm font-medium"
                        >
                          <InformationCircleIcon className="w-4 h-4" />
                          <span>Learn more about us</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact Link */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[200px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/contact"
                          className="flex items-center space-x-2 text-sm font-medium"
                        >
                          <PhoneIcon className="w-4 h-4" />
                          <span>Get in touch</span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Sign In Button */}
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}