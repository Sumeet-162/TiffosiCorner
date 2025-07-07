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
      if (scrollPosition > 20) {
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
      "fixed top-0 w-full z-50 transition-all duration-500 ease-out",
      isScrolled 
        ? "bg-black/70 backdrop-blur-xl border-b border-white/10" 
        : "bg-black/40 backdrop-blur-md"
    )}>
      <div className="w-full px-4 py-2">
        <div className={cn(
          "flex items-center justify-between h-14 px-4 rounded-2xl transition-all duration-300",
          isScrolled 
            ? "bg-white/5 border border-white/10 shadow-2xl shadow-black/20" 
            : "bg-white/3 border border-white/5"
        )}>
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <img
                src="https://wojciechstaszewski4.github.io/FerrariWebsite/ferrari.png"
                alt="Ferrari Logo"
                className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ferrari-red/20 rounded-full blur-sm group-hover:bg-ferrari-red/30 transition-all duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="ferrari-text-bold text-lg tracking-wide font-racing font-bold text-white group-hover:text-ferrari-red transition-colors duration-300">
                Tifosi Corner
              </span>
              <span className="ferrari-text-italic text-[10px] text-white/60 -mt-1 tracking-wide group-hover:text-white/80 transition-colors duration-300">
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
                  "px-3 py-2 rounded-xl transition-all duration-300 hover:bg-white/10 hover:scale-105",
                  location.pathname === link.path
                    ? "bg-ferrari-red/20 text-ferrari-red border border-ferrari-red/30 shadow-lg shadow-ferrari-red/20"
                    : "text-white/80 hover:text-white"
                )}
              >
                <Link to={link.path} className="flex items-center gap-2">
                  <link.icon className={cn(
                    "h-4 w-4 transition-all duration-300",
                    location.pathname === link.path ? "text-ferrari-red" : "text-white/70"
                  )} />
                  <span className="font-medium">{link.name}</span>
                </Link>
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-xl hover:bg-white/10 transition-all duration-300"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5 text-white" /> : <MenuIcon className="h-5 w-5 text-white" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden mx-4 mb-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 overflow-hidden"
          >
            <div className="flex flex-col space-y-1 p-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Button
                    asChild
                    variant={location.pathname === link.path ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "justify-start px-4 py-3 rounded-xl w-full transition-all duration-300 hover:scale-[1.02]",
                      location.pathname === link.path 
                        ? "bg-ferrari-red/20 text-ferrari-red border border-ferrari-red/30" 
                        : "hover:bg-white/10 text-white/80 hover:text-white"
                    )}
                  >
                    <Link to={link.path} className="w-full flex items-center gap-3">
                      <link.icon className={cn(
                        "h-4 w-4 transition-colors duration-300",
                        location.pathname === link.path ? "text-ferrari-red" : "text-white/70"
                      )} />
                      <span className="font-medium">{link.name}</span>
                      {location.pathname === link.path && (
                        <Badge className="ml-auto bg-ferrari-red text-white text-[10px] h-5 rounded-full border-0">
                          Active
                        </Badge>
                      )}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
