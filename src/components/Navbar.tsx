import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { 
  Menu as MenuIcon, 
  X, 
  Home, 
  Trophy, 
  Calendar, 
  Image as ImageIcon, 
  FileText, 
  BookOpen,
  ExternalLink, 
  Flag, 
  Car, 
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { Badge } from "./ui/badge";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "Race Calendar", path: "/races", icon: Calendar },
  { name: "Standings", path: "/standings", icon: Trophy },
  { name: "Gallery", path: "/gallery", icon: ImageIcon },
  { name: "News", path: "/news", icon: FileText },
  { name: "History", path: "/history", icon: BookOpen },
  { name: "About", path: "/about", icon: Flag }
];

// Team colors mapping for navigation
const teamColors = {
  "ferrari": "#FF2800",
  "mercedes": "#00D2BE",
  "red_bull": "#0600EF",
  "mclaren": "#FF8700",
  "aston_martin": "#006F62",
  "alpine": "#0090FF",
  "williams": "#005AFF",
  "alphatauri": "#2B4562",
  "alfa": "#900000",
  "haas": "#FFFFFF"
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-black/80 backdrop-blur border-b" : "bg-black/60 backdrop-blur"
    )}>
      <div className="w-full px-0">
        <div className="flex items-center justify-between h-16 px-4">
          <Link 
            to="/" 
            className="flex items-center gap-1.5"
          >
            <img
              src="https://raw.githubusercontent.com/Sumeet-162/F1Ferrari/refs/heads/main/public/ferrarilogo.png"
              alt="Ferrari Logo"
              className="w-7 h-7 object-contain"
            />
            <div className="flex flex-col">
              <span className="ferrari-text-bold text-lg tracking-wide font-racing font-bold">
                Tifosi Corner
              </span>
              <span className="ferrari-text-italic text-[10px] text-muted-foreground -mt-1 tracking-wide">
                Passione per la velocità
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Button
                key={link.path}
                asChild
                variant="ghost"
                size="sm"
                className={cn(
                  "px-2",
                  location.pathname === link.path
                    ? "bg-ferrari-red/10 text-ferrari-red hover:bg-ferrari-red/15"
                    : ""
                )}
              >
                <Link to={link.path}>
                  <link.icon className="h-4 w-4 mr-1.5" />
                  <span>{link.name}</span>
                </Link>
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b overflow-hidden"
          >
            <div className="flex flex-col space-y-1 px-4 py-4">
              {links.map((link) => (
                <Button
                  key={link.path}
                  asChild
                  variant={location.pathname === link.path ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="justify-start px-3"
                >
                  <Link to={link.path} className="w-full flex items-center gap-3">
                    <link.icon className="h-4 w-4" />
                    <span>{link.name}</span>
                    {location.pathname === link.path && (
                      <Badge className="ml-auto bg-ferrari-red text-white text-[10px] h-5">Active</Badge>
                    )}
                  </Link>
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
