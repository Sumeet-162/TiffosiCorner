
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Flag } from "lucide-react";
import { motion } from "framer-motion";

interface RaceCardProps {
  id: number;
  name: string;
  location: string;
  country: string;
  countryCode: string;
  date: string;
  results: {
    driver: string;
    position: number;
    points: number;
    highlight?: string;
  }[];
}

const RaceCard = ({ id, name, location, country, countryCode, date, results }: RaceCardProps) => {
  const raceDate = new Date(date);
  const isUpcoming = raceDate > new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  }).format(raceDate);

  // Generate image URL based on country
  const getTrackImage = () => {
    return `https://images.unsplash.com/photo-1626237123038-ff0c46a4e902?q=80&w=800&auto=format&fit=crop`;
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative">
          <img 
            src={getTrackImage()} 
            alt={`${name} circuit`} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 w-full p-4 text-white">
            <div className="flex items-center space-x-2 mb-1">
              <Flag className="h-4 w-4" />
              <span className="text-sm opacity-90">{country}</span>
            </div>
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-ferrari-red to-ferrari-yellow absolute bottom-0" />
        </div>

        <CardHeader className="pt-4">
          <div className="flex justify-between items-start">
            <CardDescription className="mt-1">
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formattedDate}</span>
              </div>
              <div className="mt-1">{location}</div>
            </CardDescription>
            <Badge variant={isUpcoming ? "outline" : "default"} className="ml-2">
              {isUpcoming ? "Upcoming" : "Completed"}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow">
          {isUpcoming ? (
            <div className="py-6 text-center">
              <p className="text-muted-foreground">Race yet to happen</p>
              <div className="mt-4">
                <div className="text-sm font-medium">Time until race:</div>
                <div className="text-2xl font-bold bg-gradient-to-r from-ferrari-red to-ferrari-yellow bg-clip-text text-transparent mt-2">
                  {Math.floor((raceDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-muted-foreground">Ferrari Results:</h4>
              {results.map((result, index) => (
                <div key={index} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                  <div>
                    <div className="font-medium">{result.driver}</div>
                    {result.highlight && (
                      <div className="text-xs text-muted-foreground mt-1">{result.highlight}</div>
                    )}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">Position</div>
                      <div className="font-medium">{result.position}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">Points</div>
                      <div className="font-medium">{result.points}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        
        <CardFooter className="pt-0">
          <Button 
            variant={isUpcoming ? "outline" : "default"} 
            asChild 
            className="w-full transition-all duration-300 hover:bg-ferrari-red"
          >
            <Link to={`/races/${id}`} className="flex items-center justify-center">
              {isUpcoming ? "Preview Race Details" : "View Full Results"}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default RaceCard;
