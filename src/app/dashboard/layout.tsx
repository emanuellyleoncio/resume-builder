'use client';

import React, { useState } from "react";
import Logo from "@/assets/logo.svg";
import { NavItems } from "@/components/pages/dashboard/nav-items";
import { UserDropdown } from "@/components/pages/dashboard/user-dropdown";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { MenuIcon, XIcon } from "lucide-react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col md:grid md:grid-cols-[300px_1fr]">
      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between p-4 border-b border-muted">
        <Logo className="max-w-[120px]" />
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <MenuIcon />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          menuOpen ? "block" : "hidden"
        } flex w-full h-full flex-col items-center border-r border-muted bg-background absolute md:flex md:static z-50 md:z-auto top-0 left-0 md:w-full md:h-full transition-transform duration-300 ease-in-out`}
      >
        {/* Close button - only mobile */}
        <div className="w-full flex justify-end pt-4 pr-4 md:hidden">
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <XIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="w-full p-6 border-b border-muted">
          <Logo className="max-w-[150px] mx-auto" />
        </div>

        <NavItems />

        <div className="w-full mt-auto border-t border-muted px-3 py-4 flex items-center justify-between gap-2">
          <UserDropdown />
          <ThemeToggle />
        </div>
      </aside>

      {/* Main Content */}
      <main className="p-6 flex flex-col w-full h-full overflow-auto">
        {children}
      </main>
    </div>
  );
}
