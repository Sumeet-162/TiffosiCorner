import { motion } from "framer-motion";
import { Trophy, Flag, Calendar } from "lucide-react";

interface TeamCardProps {
  name: string;
  points: number;
  position: number;
  color: string;
  isFerrari: boolean;
  country: string;
  logo?: string;
}

const TeamCard = ({ name, points, position, color, isFerrari, country, logo }: TeamCardProps) => {
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

    const imageName = teamToImageMap[name] || "Ferrari_SF-25";
    return `https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/refs/heads/master/F1%202025%20Season%20Cars/${imageName}.png`;
  };

  // Get border color based on team position
  const getBorderColor = () => {
    if (position === 1) return "from-amber-500 to-yellow-600"; // Gold for 1st
    if (position === 2) return "from-slate-300 to-slate-400"; // Silver for 2nd
    if (position === 3) return "from-amber-700 to-amber-800"; // Bronze for 3rd
    return "from-muted to-muted/80"; // Default for other positions
  };

  const positionColor = () => {
    if (position === 1) return "bg-amber-500";
    if (position === 2) return "bg-slate-300";
    if (position === 3) return "bg-amber-700";
    return "bg-muted";
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div 
        className="relative overflow-hidden rounded-lg shadow-md h-full border-2 border-transparent transition-all hover:border-opacity-100 hover:shadow-lg hover:shadow-slate-800/50"
        style={{ borderColor: color }}
      >
        {/* Background team car image with gradient overlay */}
        <div className="absolute inset-0">
          <img 
            src={getTeamCarImage()} 
            alt={`${name} car`} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90"></div>
        </div>        {/* Position indicator */}        <div 
          className={`absolute top-2 left-2 w-12 h-12 flex items-center justify-center text-2xl font-bold text-white rounded-xl ${positionColor()}`}
          style={{ backgroundColor: color }}
        >
          {position}
        </div>

        {/* Top position stripe */}
        <div className="h-1 w-full bg-gradient-to-r from-black via-white to-black opacity-20"></div>

        {/* Content */}        <div className="relative p-6 flex flex-col h-full">            <div className="flex items-start mb-4">
            <div className="ml-14">
              <h3 className="text-xl font-bold mb-1">
                <span style={{ color }} className="font-racing">{name}</span>
              </h3>
              <p className="text-sm text-muted-foreground">{country}</p>
            </div>
          </div>

          {/* Only show these stats for Ferrari */}
          {isFerrari && (
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-2 rounded-lg text-center">
                <Trophy className="w-5 h-5 text-ferrari-red mb-1" />
                <span className="text-2xl font-bold">31</span>
                <p className="text-xs text-muted-foreground">Championships</p>
              </div>
              
              <div className="flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-2 rounded-lg text-center">
                <Flag className="w-5 h-5 text-ferrari-red mb-1" />
                <span className="text-2xl font-bold">242</span>
                <p className="text-xs text-muted-foreground">Race Wins</p>
              </div>
              
              <div className="flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-2 rounded-lg text-center">
                <Calendar className="w-5 h-5 text-ferrari-red mb-1" />
                <span className="text-2xl font-bold">74</span>
                <p className="text-xs text-muted-foreground">Years in F1</p>
              </div>
            </div>
          )}

          <div className="mt-auto">
            <div className="text-sm text-muted-foreground mb-1">Championship Points</div>
            <div className="text-3xl font-bold mb-3 font-mono">{points}</div>
            
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-muted/60 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full" 
                style={{ 
                  width: `${(points / 300) * 100}%`,
                  backgroundColor: color
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
