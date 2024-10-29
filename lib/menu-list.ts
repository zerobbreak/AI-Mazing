import {
  Tag,
  Users,
  Settings,
  SquarePen,
  LayoutGrid,
  LucideIcon, 
  Bot, 
  Book
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Learning",
      menus: [
        {
          href: "/dashboard/learning-path",
          label: "Learning Paths",
          icon: Book
        },
        {
          href: "/dashboard/analytics",
          label: "Performance Analytics",
          icon: SquarePen
        },
        {
          href: "/dashboard/virtual-tutor",
          label: "Virtual Tutor",
          icon: Bot
        },
        {
          href: "/dashboard/recommendations",
          label: "Recommendations",
          icon: Tag
        }
      ]
    },
    {
      groupLabel: "Community",
      menus: [
        {
          href: "/dashboard/community",
          label: "Community",
          icon: Users
        },
        {
          href: "/dashboard/feedback",
          label: "Feedback",
          icon: SquarePen
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/dashbaord/profile",
          label: "Profile Settings",
          icon: Settings
        }
      ]
    }
  ];
}
