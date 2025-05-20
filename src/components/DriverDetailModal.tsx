import React from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { ChevronRight, Flag, Medal, Star, Trophy, HeartPulse, Clock, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface DriverDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  driver: {
    id: number;
    name: string;
    number: number;
    team: string;
    country: string;
    countryCode: string;
    points: number;
    position: number;
    podiums: number;
    wins: number;
    imageUrl: string;
    isFerrariDriver: boolean;
    bio?: string;
    age?: number;
    careerStats?: {
      championships: number;
      fastestLaps: number;
      careerPoints: number;
      seasonsInF1: number;
    };
  };
  teamColor?: string;
}

const statItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const DriverDetailModal: React.FC<DriverDetailModalProps> = ({ 
  isOpen, 
  onClose, 
  driver,
  teamColor = "#333333"
}) => {
  const { 
    name, 
    number, 
    team, 
    country, 
    points, 
    position, 
    podiums, 
    wins, 
    imageUrl, 
    isFerrariDriver,
    bio,
    age,
    careerStats 
  } = driver;

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="lg"
      accent={isFerrariDriver ? "ferrari" : "default"}
      className={cn(
        "overflow-hidden",
        isFerrariDriver && "border-ferrari-red-300/20"
      )}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Driver header with image */}
        <div className="md:w-1/3">
          <div className={cn(
            "relative rounded-lg overflow-hidden mb-4 aspect-[3/4]",
            isFerrariDriver ? "bg-ferrari-red/5" : "bg-muted/30"
          )}>
            <img 
              src={imageUrl || "/placeholder.svg"} 
              alt={name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 bg-card p-2 rounded-bl-lg shadow-md">
              <span className={cn(
                "text-4xl font-black",
                isFerrariDriver ? "text-ferrari-red" : ""
              )}>
                {number}
              </span>
            </div>
            
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
              <div className="text-white">
                <Badge className={cn(
                  "mb-1",
                  isFerrariDriver 
                    ? "bg-ferrari-red hover:bg-ferrari-red-600" 
                    : "bg-primary"
                )}>
                  P{position}
                </Badge>
                <h2 className="text-2xl font-bold">{name}</h2>
                <div className="flex items-center gap-1 text-sm">
                  <Flag className="h-3 w-3" />
                  <span>{country}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "bg-muted/20 rounded-lg p-4 space-y-3",
            isFerrariDriver && "border border-ferrari-red/10"
          )}>
            <h3 className="font-semibold flex items-center">
              <span 
                className="inline-block w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: isFerrariDriver ? "#FF2800" : teamColor }}
              ></span>
              {team}
            </h3>
            
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Points</span>
              <span className={cn(
                "font-bold",
                isFerrariDriver && "text-ferrari-red"
              )}>{points}</span>
            </div>
            
            <Progress 
              value={(points / 180) * 100} 
              className="h-1.5"
              indicatorClassName={isFerrariDriver ? "bg-ferrari-red" : undefined}
            />
          </div>
        </div>
        
        {/* Driver details and stats */}
        <div className="md:w-2/3">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Driver Profile</h3>
            <p className="text-muted-foreground">
              {bio || `Professional Formula 1 driver currently competing for ${team}.`}
            </p>
          </div>
          
          <Separator className="my-4" />
          
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Star className="h-4 w-4 text-ferrari-yellow" />
              Season Statistics
            </h3>
            
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.div 
                className="flex flex-col items-center justify-center bg-muted/30 rounded-lg p-3"
                variants={statItem}
              >
                <Trophy className="h-5 w-5 text-yellow-500 mb-1" />
                <span className="text-2xl font-bold">{wins}</span>
                <span className="text-xs text-muted-foreground">Wins</span>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center justify-center bg-muted/30 rounded-lg p-3"
                variants={statItem}
              >
                <Medal className="h-5 w-5 text-blue-500 mb-1" />
                <span className="text-2xl font-bold">{podiums}</span>
                <span className="text-xs text-muted-foreground">Podiums</span>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center justify-center bg-muted/30 rounded-lg p-3"
                variants={statItem}
              >
                <Calendar className="h-5 w-5 text-green-500 mb-1" />
                <span className="text-2xl font-bold">{age || '—'}</span>
                <span className="text-xs text-muted-foreground">Age</span>
              </motion.div>
            </motion.div>
            
            {careerStats && (
              <>
                <h3 className="font-semibold flex items-center gap-2 mt-6">
                  <Clock className="h-4 w-4 text-blue-500" />
                  Career Overview
                </h3>
                
                <motion.div 
                  className="grid grid-cols-2 gap-3"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="flex flex-col p-3 rounded-lg bg-muted/20 border"
                    variants={statItem}
                  >
                    <span className="text-xs text-muted-foreground">Championships</span>
                    <span className="text-xl font-bold">{careerStats.championships}</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col p-3 rounded-lg bg-muted/20 border"
                    variants={statItem}
                  >
                    <span className="text-xs text-muted-foreground">Fastest Laps</span>
                    <span className="text-xl font-bold">{careerStats.fastestLaps}</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col p-3 rounded-lg bg-muted/20 border"
                    variants={statItem}
                  >
                    <span className="text-xs text-muted-foreground">Career Points</span>
                    <span className="text-xl font-bold">{careerStats.careerPoints}</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col p-3 rounded-lg bg-muted/20 border"
                    variants={statItem}
                  >
                    <span className="text-xs text-muted-foreground">Seasons in F1</span>
                    <span className="text-xl font-bold">{careerStats.seasonsInF1}</span>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex justify-end mt-6">
        <Button
          variant="outline"
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default DriverDetailModal; 