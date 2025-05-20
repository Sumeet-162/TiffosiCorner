import { Link } from "react-router-dom";
import { Trophy, Flag, Heart, Instagram, Facebook, Twitter, Star, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-background overflow-hidden mt-6">
      {/* Racing stripe accents */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#009246] via-white to-[#CE2B37]"></div> {/* Italian flag colors */}
      
      {/* Diagonal racing stripe */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 top-0 w-1/2 h-[200%] bg-checkered-flag opacity-[0.02] -rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://raw.githubusercontent.com/Sumeet-162/F1Ferrari/refs/heads/main/public/ferrarilogo.png"
                alt="Ferrari Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-bold text-xl italic">Scuderia Ferrari</h3>
                <p className="text-muted-foreground text-sm">Passione per la velocità</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Dedicated to the most iconic team in Formula 1 history. Follow Ferrari's journey through the 2025 season.
            </p>
            
            <div className="flex items-center gap-3">
              <a href="#" className="h-9 w-9 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-ferrari-red hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-ferrari-red hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-ferrari-red hover:text-white">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Trophy className="h-4 w-4 text-ferrari-red" /> 
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-ferrari-red transition-colors flex items-center gap-2">
                  <ChevronRight className="h-3 w-3" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/races" className="text-muted-foreground hover:text-ferrari-red transition-colors flex items-center gap-2">
                  <ChevronRight className="h-3 w-3" />
                  Race Calendar
                </Link>
              </li>
              <li>
                <Link to="/standings" className="text-muted-foreground hover:text-ferrari-red transition-colors flex items-center gap-2">
                  <ChevronRight className="h-3 w-3" />
                  Standings
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-muted-foreground hover:text-ferrari-red transition-colors flex items-center gap-2">
                  <ChevronRight className="h-3 w-3" />
                  Ferrari History
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Flag className="h-4 w-4 text-ferrari-red" /> 
              More Content
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-ferrari-red transition-colors flex items-center gap-2">
                  <ChevronRight className="h-3 w-3" />
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-ferrari-red transition-colors flex items-center gap-2">
                  <ChevronRight className="h-3 w-3" />
                  Latest News
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-ferrari-red transition-colors flex items-center gap-2">
                  <ChevronRight className="h-3 w-3" />
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <ExternalLink className="h-4 w-4 text-ferrari-red" /> 
              Official Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.ferrari.com/en-EN/formula1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-ferrari-red transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="h-3 w-3" />
                  Ferrari F1 Official
                </a>
              </li>
              <li>
                <a
                  href="https://www.formula1.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-ferrari-red transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="h-3 w-3" />
                  Formula 1 Official
                </a>
              </li>
              <li>
                <a
                  href="https://www.fia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-ferrari-red transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="h-3 w-3" />
                  FIA Official
                </a>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-muted">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <h5 className="font-medium">Ferrari Museum</h5>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Discover Ferrari's racing heritage at the Museo Ferrari in Maranello, Italy</p>
              <Button size="sm" className="w-full bg-ferrari-red hover:bg-ferrari-red/90 text-white" asChild>
                <a href="https://www.ferrari.com/en-EN/museums" target="_blank" rel="noopener noreferrer">
                  Plan Your Visit
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 mt-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} Forza Ferrari Fan Site. This is an unofficial fan website.
            </p>
            <div className="flex items-center gap-3">
              <Heart className="h-4 w-4 text-ferrari-red fill-ferrari-red animate-pulse" />
              <span className="text-sm italic">Fatto con passione</span> {/* Made with passion in Italian */}
            </div>
            <p className="text-muted-foreground text-xs text-center md:text-right">
              Ferrari, the Ferrari logo, Formula 1 and F1 logos are registered trademarks.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom racing stripe */}
      <div className="h-1 w-full bg-checkered-flag-red"></div>
    </footer>
  );
};

export default Footer;
