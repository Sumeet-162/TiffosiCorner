
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface DriverCardProps {
  name: string;
  team: string;
  number: number;
  points: number;
  position: number;
  isFerrariDriver?: boolean;
  country?: string;
  avatar?: string;
}

const DriverCard = ({ 
  name, 
  team, 
  number, 
  points, 
  position, 
  isFerrariDriver = false,
  country = "",
  avatar = "/placeholder.svg"
}: DriverCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Card 
        className={cn(
          "overflow-hidden transition-all hover:shadow-md",
          isFerrariDriver && "border-ferrari-red ring-1 ring-ferrari-red/20"
        )}
      >
        <div className={cn(
          "h-1 w-full",
          isFerrariDriver ? "ferrari-gradient" : "bg-secondary"
        )} />
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3",
                isFerrariDriver ? "bg-ferrari-red" : "bg-muted"
              )}>
                {position}
              </div>
              <div>
                <h3 className="font-bold">{name}</h3>
                <p className={cn(
                  "text-sm",
                  isFerrariDriver ? "text-ferrari-red" : "text-muted-foreground"
                )}>
                  {team}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Points</div>
              <div className="text-xl font-bold">{points}</div>
            </div>
          </div>
          
          <div className="mt-4 relative">
            {/* Driver number side design */}
            <div className="absolute -right-2 -top-10 text-6xl font-bold opacity-10 select-none">
              {number}
            </div>
            
            {/* Points progress bar */}
            <div className="w-full h-1.5 bg-muted/50 rounded-full mt-2">
              <div 
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  isFerrariDriver ? "bg-ferrari-red" : "bg-primary/60"
                )}
                style={{ width: `${Math.min(100, (points / 180) * 100)}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DriverCard;
