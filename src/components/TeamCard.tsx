
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Flag, Download } from "lucide-react";

interface TeamCardProps {
  name: string;
  points: number;
  position: number;
  color: string;
  isFerrari?: boolean;
  country?: string;
  logo?: string;
}

const TeamCard = ({ 
  name, 
  points, 
  position, 
  color, 
  isFerrari = false,
  country = "",
  logo = "/placeholder.svg"
}: TeamCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card 
        className={`overflow-hidden transition-all hover:shadow-lg ${
          isFerrari ? "border-ferrari-red" : ""
        }`}
      >
        <div 
          className="h-2 w-full" 
          style={{ background: color }}
        />
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div 
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-md`}
                style={{ background: color }}
              >
                <span className="text-xl">{position}</span>
              </div>
              <div>
                <div className="flex items-center">
                  <h3 className="font-bold text-lg">{name}</h3>
                  {country && (
                    <span className="ml-2 text-muted-foreground text-xs flex items-center">
                      <Flag className="h-3 w-3 mr-1" /> {country}
                    </span>
                  )}
                </div>
                
                {/* Progress bar showing percentage of points relative to the leader */}
                <div className="w-full h-2 bg-muted rounded-full mt-3">
                  <motion.div 
                    className="h-full rounded-full"
                    style={{ backgroundColor: color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, (points / 300) * 100)}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
                
                {isFerrari && (
                  <div className="mt-2 text-xs text-muted-foreground">
                    {Math.round((points / 300) * 100)}% of max points
                  </div>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Points</div>
              <div className="text-2xl font-bold">
                {isFerrari ? (
                  <span className="text-ferrari-red">{points}</span>
                ) : (
                  points
                )}
              </div>
            </div>
          </div>
          
          {logo && (
            <div className="mt-4 pt-4 border-t border-muted flex justify-end">
              <img src={logo} alt={`${name} logo`} className="h-6 opacity-50" />
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamCard;
