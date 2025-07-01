import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { useWindowSize } from "@/lib/useWindowSize";

export type NavItem = {
  title: string;
  href: string;
};

interface InteractiveNavProps {
  navItems: NavItem[];
}

export const InteractiveNav = ({ navItems }: InteractiveNavProps) => {
  return (
    <>
      <HamburgerMenu navItems={navItems} />
      <FullMenu navItems={navItems} />
    </>
  );
};

export const FullMenu = ({ navItems }: InteractiveNavProps) => {
  return (
    <NavigationMenu className="hidden md:inline">
      <NavigationMenuList>
        {navItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild>
              <a className="text-xl" href={item.href}>
                {item.title}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default function HamburgerMenu({ navItems }: InteractiveNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="default" className="md:hidden">
          <img src="/menu.svg" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="px-5 py-5 w-full">
        <nav className="flex flex-col space-y-10 text-emerald-800 font-bold text-center">
          {navItems.map((item) => (
            <a key={item.title} className="text-xl" href={item.href}>
              {item.title}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
