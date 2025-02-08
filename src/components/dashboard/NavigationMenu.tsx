import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Home,
  Receipt,
  DollarSign,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

interface NavigationMenuProps {
  onNavigate?: (path: string) => void;
  activeItem?: string;
}

const NavigationMenuComponent = ({
  onNavigate = () => {},
  activeItem = "dashboard",
}: NavigationMenuProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home className="w-5 h-5" /> },
    {
      id: "write-offs",
      label: "Business Write-offs",
      icon: <Receipt className="w-5 h-5" />,
    },
    {
      id: "income",
      label: "Income Reports",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      id: "expenses",
      label: "Expense Tracking",
      icon: <FileText className="w-5 h-5" />,
    },
  ];

  const bottomMenuItems = [
    {
      id: "settings",
      label: "Settings",
      icon: <Settings className="w-5 h-5" />,
    },
    { id: "help", label: "Help", icon: <HelpCircle className="w-5 h-5" /> },
    { id: "logout", label: "Logout", icon: <LogOut className="w-5 h-5" /> },
  ];

  return (
    <div className="w-[280px] h-full bg-emerald-50 border-r border-emerald-100 flex flex-col justify-between py-6">
      <NavigationMenu className="max-w-none w-full">
        <NavigationMenuList className="flex flex-col space-y-2 w-full px-4">
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.id} className="w-full">
              <NavigationMenuLink
                className={cn(
                  "flex items-center space-x-3 px-4 py-2 rounded-lg w-full",
                  "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  "transition-colors duration-200",
                  activeItem === item.id && "bg-primary/10 text-primary",
                )}
                onClick={() => onNavigate(item.id)}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu className="max-w-none w-full mt-auto">
        <NavigationMenuList className="flex flex-col space-y-2 w-full px-4">
          {bottomMenuItems.map((item) => (
            <NavigationMenuItem key={item.id} className="w-full">
              <NavigationMenuLink
                className={cn(
                  "flex items-center space-x-3 px-4 py-2 rounded-lg w-full",
                  "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  "transition-colors duration-200",
                )}
                onClick={() => onNavigate(item.id)}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationMenuComponent;
