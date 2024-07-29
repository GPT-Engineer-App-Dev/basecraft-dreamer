import { Home, User, Settings, HelpCircle } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual Profile component when created
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual Settings component when created
  },
  {
    title: "Help",
    to: "/help",
    icon: <HelpCircle className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual Help component when created
  },
];
