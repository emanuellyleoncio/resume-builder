"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Newspaper, SquareUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const NavItems = () => {
  const pathName = usePathname();

  const navItems: NavItem[] = [
    {
      label: "Resumes",
      path: "/dashboard/resumes",
      icon: Newspaper,
    },
    {
      label: "Account Settings",
      path: "/dashboard/account",
      icon: SquareUser,
    },
  ];
  
  return (
    <nav className="w-full flex flex-col gap-2 px-2 py-4">
      {navItems.map((item) => {
        const isActive = pathName.startsWith(item.path);
        return (
          <Link href={item.path} key={item.path}>
            <Button
              variant="ghost"
              className={cn(
                "w-full gap-2 justify-start",
                isActive && "bg-accent"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};
