import { motion } from "framer-motion";

interface DriverCardProps {
  name: string;
  team: string;
  number: number;
  points: number;
  position: number;
  isFerrariDriver: boolean;
  country: string;
  teamColor?: string;
  wins?: number;
}

const DriverCard = ({ 
  name, 
  team, 
  number, 
  points, 
  position, 
  isFerrariDriver, 
  country, 
  teamColor,
  wins = 0 
}: DriverCardProps) => {
  // Function to get driver image URL based on name
  const getDriverImageUrl = () => {
    // Extract first name and last name
    const nameParts = name.split(" ");
    let firstName = "";
    let lastName = "";
    
    if (nameParts.length === 2) {
      [firstName, lastName] = nameParts;
    } else if (nameParts.length === 3 && nameParts[0] === "Andrea") {
      // Special case for "Andrea Kimi Antonelli"
      firstName = "Kimi";
      lastName = "Antonelli";
    } else if (nameParts.length >= 3) {
      firstName = nameParts[0];
      lastName = nameParts[nameParts.length - 1];
    } else {
      firstName = nameParts[0];
      lastName = "";
    }
    
    // Handle special cases like "Carlos Sainz Jr."
    if (lastName === "Jr.") {
      lastName = "Sainz";
    }
    
    // Map the driver name to their number
    const driverNumberMap: Record<string, string> = {
      "Oscar Piastri": "81",
      "Lando Norris": "4",
      "Max Verstappen": "1",
      "George Russell": "63",
      "Charles Leclerc": "16",
      "Lewis Hamilton": "44",
      "Andrea Kimi Antonelli": "12",
      "Alexander Albon": "23",
      "Esteban Ocon": "31",
      "Lance Stroll": "18",
      "Carlos Sainz": "55",
      "Yuki Tsunoda": "22",
      "Pierre Gasly": "10",
      "Isack Hadjar": "6",
      "Nico Hulkenberg": "27",
      "Oliver Bearman": "87",
      "Fernando Alonso": "14",
      "Liam Lawson": "30",
      "Jack Doohan": "7",
      "Gabriel Bortoleto": "5"
    };

    const driverNumber = driverNumberMap[name] || "";
    
    return `https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/${firstName}_${lastName}_${driverNumber}.png`;
  };

  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-md"
      whileHover={{ scale: 1.03, y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 500, 
        damping: 30,
        duration: 0.3
      }}
    >
      {/* Color Bar */}
      <div 
        className="h-1.5 w-full"
        style={{ backgroundColor: isFerrariDriver ? "var(--ferrari-red)" : (teamColor || "#ccc") }}
      />
      
      {/* Driver Card Layout */}
      <div className={`relative h-[280px] ${isFerrariDriver ? "bg-gradient-to-br from-zinc-900 to-red-950/30" : "bg-gradient-to-br from-zinc-900 to-zinc-950"}`}>
        {/* Driver Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
          <img 
            src={getDriverImageUrl()} 
            alt={name}
            className="h-full w-full object-cover object-top opacity-50"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Max_Verstappen_1.png";
              (e.target as HTMLImageElement).classList.add("opacity-30");
            }}
          />
        </div>
        
        {/* Top section with position and number */}
        <div className="relative z-20 p-4 flex justify-between items-start">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" 
            style={{
              backgroundColor: isFerrariDriver ? "var(--ferrari-red)" : (teamColor || "#ccc"),
              fontFamily: "'Orbitron', sans-serif"
            }}
          >
            {position}
          </div>
          
          <div 
            className={`text-5xl font-bold ${isFerrariDriver ? "text-ferrari-red/30" : "text-white/20"}`}
            style={{fontFamily: "'Orbitron', sans-serif"}}
          >
            {number}
          </div>
        </div>
        
        {/* Bottom section with driver details */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <div className="mb-3">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-sm text-white/70">{country}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <div 
              className="bg-black/50 backdrop-blur-sm px-3 py-2 rounded text-center border-l-2 h-[70px] flex flex-col justify-center" 
              style={{ borderColor: isFerrariDriver ? "var(--ferrari-red)" : (teamColor || "#ccc") }}
            >
              <div className="text-xs text-white/60 uppercase">Team</div>
              <div className="text-sm font-medium line-clamp-2">{team}</div>
            </div>
            
            <div 
              className="bg-black/50 backdrop-blur-sm px-3 py-2 rounded text-center border-l-2 h-[70px] flex flex-col justify-center"
              style={{ borderColor: isFerrariDriver ? "var(--ferrari-red)" : (teamColor || "#ccc") }}
            >
              <div className="text-xs text-white/60 uppercase">Points</div>
              <div className="text-xl font-bold" style={{fontFamily: "'Orbitron', sans-serif"}}>
                <span className={isFerrariDriver ? "text-ferrari-red" : "text-white"}>{points}</span>
              </div>
            </div>
            
            <div 
              className="bg-black/50 backdrop-blur-sm px-3 py-2 rounded text-center border-l-2 h-[70px] flex flex-col justify-center"
              style={{ borderColor: isFerrariDriver ? "var(--ferrari-red)" : (teamColor || "#ccc") }}
            >
              <div className="text-xs text-white/60 uppercase">Wins</div>
              <div className="text-xl font-bold" style={{fontFamily: "'Orbitron', sans-serif"}}>
                <span className="text-white">{wins}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DriverCard;
