
import { useState } from "react";
import { races } from "@/data/races";
import RaceCard from "@/components/RaceCard";
import { motion } from "framer-motion";

const RaceStories = () => {
  const [filter, setFilter] = useState<"all" | "past" | "upcoming">("all");
  
  const filteredRaces = races.filter(race => {
    const raceDate = new Date(race.date);
    const now = new Date();
    
    if (filter === "all") return true;
    if (filter === "past") return raceDate <= now;
    if (filter === "upcoming") return raceDate > now;
    return true;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">Race Stories</h1>
        <p className="text-lg text-muted-foreground">
          Follow Ferrari's journey through the 2025 Formula 1 season
        </p>
      </motion.div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
              filter === "all" 
                ? "bg-primary text-white border-primary" 
                : "bg-card text-muted-foreground hover:bg-muted border-muted"
            }`}
          >
            All Races
          </button>
          <button
            type="button"
            onClick={() => setFilter("past")}
            className={`px-4 py-2 text-sm font-medium border-t border-b ${
              filter === "past" 
                ? "bg-primary text-white border-primary" 
                : "bg-card text-muted-foreground hover:bg-muted border-muted"
            }`}
          >
            Past Races
          </button>
          <button
            type="button"
            onClick={() => setFilter("upcoming")}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
              filter === "upcoming" 
                ? "bg-primary text-white border-primary" 
                : "bg-card text-muted-foreground hover:bg-muted border-muted"
            }`}
          >
            Upcoming Races
          </button>
        </div>
      </div>

      {/* Mobile-friendly timeline view for races */}
      <motion.div 
        className="relative"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Center line for larger screens */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-muted"></div>
        
        <div className="space-y-8">
          {filteredRaces.map((race, index) => (
            <motion.div 
              key={race.id} 
              variants={item}
              className="relative"
            >
              {/* Timeline structure for desktop */}
              <div className="hidden md:flex md:items-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ferrari-red z-10"></div>
                
                <div className={`w-full flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? "mr-8" : "ml-8"}`}>
                    <RaceCard {...race} />
                  </div>
                </div>
              </div>
              
              {/* Mobile view - full width cards with date indicators */}
              <div className="md:hidden">
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 rounded-full bg-ferrari-red mr-3"></div>
                  <span className="text-sm text-muted-foreground">{new Date(race.date).toLocaleDateString()}</span>
                </div>
                <RaceCard {...race} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RaceStories;
