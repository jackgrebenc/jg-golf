import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export type NavItem = {
  title: string;
  href: string;
};

interface InteractiveNavProps {
  navItems: NavItem[];
}

export const InteractiveNav = ({ navItems }: InteractiveNavProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem>
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
