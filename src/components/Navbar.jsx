import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navItems } from "@/nav-items";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <ul className="flex space-x-4">
          {navItems.map(({ title, to, icon }) => (
            <li key={to}>
              <Button variant="ghost" asChild>
                <Link to={to} className="flex items-center">
                  {icon}
                  <span className="ml-2">{title}</span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
