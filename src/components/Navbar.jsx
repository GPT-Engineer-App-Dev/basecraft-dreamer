import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navItems } from "@/nav-items";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    navigate('/login');
  };
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <ul className="flex space-x-4">
          {navItems.map(({ title, to, icon }) => (
            (to !== '/login' || !isLoggedIn) && (
              <li key={to}>
                <Button variant="ghost" asChild>
                  <Link to={to} className="flex items-center">
                    {icon}
                    <span className="ml-2">{title}</span>
                  </Link>
                </Button>
              </li>
            )
          ))}
          {isLoggedIn && (
            <li>
              <Button variant="ghost" onClick={handleLogout}>
                Logout
              </Button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
