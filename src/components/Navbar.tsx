import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Leaf, Moon, Sun, Settings } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Report Waste", path: "/report" },
    { name: "Collect Waste", path: "/collect" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Rewards", path: "/rewards" },
    
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between ml-6">
          <Link to="/" className="flex items-center space-x-2">
            <svg width="50" height="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M110 170 L130 90 L70 55 L160 105 L160 170 Z" fill="#0B6E4F" opacity="0.8"/>
              <rect x="125" y="115" width="15" height="15" fill="#fff" />
              <rect x="125" y="140" width="15" height="15" fill="#fff" />
              <path d="M50 170 L50 110 L65 95 L80 110 L80 170 Z" fill="#0B6E4F" opacity="0.8"/>
              <path d="M70 160 L70 60 L100 30 L130 60 L130 160 L140 160 L140 170 L60 170 L60 160 L70 160" fill="#0B6E4F" />
              <polygon points="94,65 101.5,55 109,65" fill="#fff" />
              <rect x="94" y="65" width="15" height="15" fill="#fff" />
              <rect x="94" y="90" width="15" height="15" fill="#fff" />
              <rect x="94" y="115" width="15" height="15" fill="#fff" />
              <rect x="94" y="140" width="15" height="15" fill="#fff" />
              <rect x="45" y="150" width="4" height="20" fill="#0B6E4F" />
              <circle cx="48" cy="150" r="10" fill="#0B6E4F" />
              <circle cx="42" cy="152" r="7" fill="#0B6E4F" />
              <circle cx="54" cy="152" r="7" fill="#0B6E4F" />
              <circle cx="48" cy="144" r="6" fill="#0B6E4F" />
              <rect x="168" y="150" width="4" height="20" fill="#0B6E4F" />
              <circle cx="170" cy="150" r="10" fill="#0B6E4F" />
              <circle cx="164" cy="152" r="7" fill="#0B6E4F" />
              <circle cx="176" cy="152" r="7" fill="#0B6E4F" />
              <circle cx="170" cy="144" r="6" fill="#0B6E4F" />
              <line x1="20" y1="170" x2="190" y2="170" stroke="#0B6E4F" strokeWidth="4" />
            </svg>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-eco-secondary bg-clip-text text-transparent">
              CleanCity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-md font-semibold transition-colors hover:text-primary group ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4 ml-[-10px]">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Link to="/settings">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-eco-secondary hover:opacity-90">
              Sign Up
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive(item.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="flex-1"
                    >
                      {theme === "light" ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}
                      {theme === "light" ? "Dark" : "Light"}
                    </Button>
                    <Link to="/settings" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Button>
                    </Link>
                  </div>
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-primary to-eco-secondary hover:opacity-90">
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
