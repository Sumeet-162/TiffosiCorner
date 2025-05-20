import React from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  Trophy, Flag, Building, Car, Users, Wrench, 
  Clock, Gauge, Map, ChevronRight, Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  team: {
    id: number;
    name: string;
    shortName: string;
    color: string;
    country: string;
    points: number;
    position: number;
    logo: string;
    founded?: number;
    baseLocation?: string;
    teamPrincipal?: string;
    championships?: number;
    drivers?: string[];
    carName?: string;
    technicalDetails?: {
      engine: string;
      chassis: string;
    };
  };
}

const TeamDetailModal: React.FC<TeamDetailModalProps> = ({ 
  isOpen, 
  onClose, 
  team 
}) => {
  const { 
    name, 
    shortName,
    color, 
    country, 
    points, 
    position, 
    logo,
    founded,
    baseLocation,
    teamPrincipal,
    championships = 0,
    drivers = [],
    carName,
    technicalDetails
  } = team;

  const isFerrari = name === "Ferrari";
  
  const statItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Function to get team car image URL
  const getTeamCarImage = () => {
    // Map to convert team names to file names
    const teamToImageMap: Record<string, string> = {
      "Ferrari": "Ferrari_SF-25",
      "Red Bull Racing": "Red_Bull_RB21",
      "McLaren": "McLaren_MCL39",
      "Mercedes AMG Motorsport": "Mercedes-AMG_W16",
      "Aston Martin F1 Team": "Aston_Martin_AMR25",
      "Alpine F1 Team": "Alpine_A525",
      "Williams": "Williams_FW47",
      "Haas F1 Team": "Haas_VF-25",
      "Sauber": "Kick_Sauber_C45",
      "Racing Bulls": "Racing_Bulls_VCARB_02"
    };

    const imageName = teamToImageMap[name] || "placeholder";
    return `https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/refs/heads/master/F1%202025%20Season%20Cars/${imageName}.png`;
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="lg"
      accent={isFerrari ? "ferrari" : "default"}
      className={cn(
        "overflow-hidden",
        isFerrari && "border-ferrari-red-300/20"
      )}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Team header with banner */}
        <div className="md:w-1/3">
          <div 
            className="relative rounded-lg overflow-hidden mb-4 h-48"
            style={{ backgroundColor: color }}
          >
            <div className="absolute inset-0 opacity-10 checkered-pattern" />
            
            {/* Team car image in background */}
            <div className="absolute inset-0 opacity-25 flex items-center justify-center">
              <img 
                src={getTeamCarImage()}
                alt={`${name} car`}
                className="w-full h-full object-contain mix-blend-overlay"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                <img 
                  src={logo || "/placeholder.svg"} 
                  alt={name} 
                  className="w-16 h-16 object-contain" 
                />
              </div>
              
              <Badge 
                className={cn(
                  "mb-1 bg-white/90 text-foreground",
                  isFerrari && "border-ferrari-red"
                )}
              >
                P{position}
              </Badge>
              
              <h2 className="text-2xl font-bold text-white text-center">{name}</h2>
              <p className="text-white/80 text-xs flex items-center">
                <Flag className="h-3 w-3 mr-1" />
                {country}
              </p>
            </div>
          </div>
          
          {carName && (
            <div className={cn(
              "bg-muted/20 rounded-lg p-4 space-y-3 border",
              isFerrari && "border-ferrari-red/10"
            )}>
              <h3 className="font-semibold flex items-center gap-2">
                <Car className="h-4 w-4" />
                {carName}
              </h3>
              
              {technicalDetails && (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Engine</span>
                    <span className="font-medium">{technicalDetails.engine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Chassis</span>
                    <span className="font-medium">{technicalDetails.chassis}</span>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between text-sm mt-2">
                <span className="text-muted-foreground">Points</span>
                <span className={cn(
                  "font-bold",
                  isFerrari && "text-ferrari-red"
                )}>{points}</span>
              </div>
              
              <Progress 
                value={(points / 300) * 100} 
                className="h-1.5"
                indicatorClassName={isFerrari ? "bg-ferrari-red" : undefined}
                style={{ backgroundColor: "rgba(0,0,0,0.1)", color: color }}
              />
            </div>
          )}
        </div>
        
        {/* Team details and stats */}
        <div className="md:w-2/3">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Team Profile</h3>
            <p className="text-muted-foreground">
              {isFerrari 
                ? "Scuderia Ferrari is F1's oldest and most successful team, competing continuously since 1950 with a passionate history of racing excellence and iconic Italian flair."
                : `${name} is a Formula 1 team competing in the current championship.`
              }
            </p>
            
            {baseLocation && (
              <div className="flex items-center mt-3 text-sm text-muted-foreground">
                <Map className="h-4 w-4 mr-1.5" />
                Based in {baseLocation}
              </div>
            )}
            
            {teamPrincipal && (
              <div className="flex items-center mt-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-1.5" />
                Team Principal: {teamPrincipal}
              </div>
            )}
            
            {founded && (
              <div className="flex items-center mt-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1.5" />
                Founded: {founded}
              </div>
            )}
          </div>
          
          <Separator className="my-4" />
          
          {drivers.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-500" />
                Current Drivers
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {drivers.map((driver, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 border"
                  >
                    <Avatar className="h-10 w-10 border-2" style={{ borderColor: color }}>
                      <AvatarFallback style={{ backgroundColor: color }} className="text-white text-xs">
                        {driver.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{driver}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Trophy className="h-4 w-4 text-yellow-500" />
              Team Statistics
            </h3>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
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
                className="flex items-center p-4 rounded-lg bg-muted/30 relative overflow-hidden"
                variants={statItem}
              >
                <div 
                  className="absolute top-0 left-0 h-full w-1"
                  style={{ backgroundColor: color }}
                ></div>
                <div className="mr-3">
                  <Trophy className="h-8 w-8 text-yellow-500" />
                </div>
                <div>
                  <span className="text-3xl font-bold">{championships}</span>
                  <p className="text-sm text-muted-foreground">Championships</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center p-4 rounded-lg bg-muted/30 relative overflow-hidden"
                variants={statItem}
              >
                <div 
                  className="absolute top-0 left-0 h-full w-1"
                  style={{ backgroundColor: color }}
                ></div>
                <div className="mr-3">
                  <Building className="h-8 w-8 text-blue-500" />
                </div>
                <div>
                  <span className="text-3xl font-bold">P{position}</span>
                  <p className="text-sm text-muted-foreground">Current Position</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-4 bg-muted/10 rounded-lg p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-sm font-medium mb-2">Championship Progress</h4>
              <div className="h-4 bg-muted rounded-full overflow-hidden">
                <motion.div 
                  className="h-full"
                  style={{ backgroundColor: color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (points / 300) * 100)}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>0 pts</span>
                <span>{Math.round((points / 300) * 100)}%</span>
                <span>300 pts</span>
              </div>
            </motion.div>
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

export default TeamDetailModal; 