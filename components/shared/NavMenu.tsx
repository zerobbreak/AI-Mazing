import Link from "next/link";
import {
  ChatBubbleLeftEllipsisIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
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

export default function NavMenu() {
  return (
    <header>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="text-2xl font-bold text-foreground">
              AI-Mazing
            </Link>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-4">
              {/* Home Link */}
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Features Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <div
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          // href="/"
                        >
                          <AcademicCapIcon className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Learning Platform
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                          Unlock your potential with personalized, AI-driven learning paths and interactive content.
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/features/adaptive-learning"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <AcademicCapIcon className="w-4 h-4" />
                          <div className="text-sm font-medium leading-none">
                            Adaptive Learning
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Adapted learning style that caters to your needs
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/features/adaptive-learning"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <PresentationChartLineIcon className="w-4 h-4" />
                          <div className="text-sm font-medium leading-none">
                            Predictive Analytics
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Insights that identify and address learning gaps
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/features/chatbot"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <ChatBubbleLeftEllipsisIcon className="w-4 h-4" />
                           <div className="text-sm font-medium leading-none">Chatbots & Tutors</div>
                           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Insights that identify and address learning gaps
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About Us Link */}
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className="flex items-center space-x-2 text-sm font-medium hover:text-primary"
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricings
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Contact Link */}
              <NavigationMenuItem>
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-sm font-medium hover:text-primary"
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Testimonials
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
