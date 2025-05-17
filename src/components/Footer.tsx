
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-ferrari-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">SF</span>
              </div>
              <span className="font-bold text-xl">Forza Ferrari</span>
            </Link>
            <p className="text-muted-foreground">
              A fan website dedicated to the most iconic team in Formula 1 history.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/races" className="text-muted-foreground hover:text-primary transition-colors">
                  Race Stories
                </Link>
              </li>
              <li>
                <Link to="/standings" className="text-muted-foreground hover:text-primary transition-colors">
                  Standings
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-muted-foreground hover:text-primary transition-colors">
                  Ferrari History
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">More</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Official Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.ferrari.com/en-EN/formula1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Ferrari F1 Official
                </a>
              </li>
              <li>
                <a 
                  href="https://www.formula1.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Formula 1 Official
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Forza Ferrari Fan Site. This is an unofficial fan website.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-muted-foreground text-sm">
              Ferrari, the Ferrari logo, Formula 1 and F1 logos are registered trademarks.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
