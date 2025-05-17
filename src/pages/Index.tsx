
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Flag, History } from "lucide-react";
import RaceCard from "@/components/RaceCard";
import DriverCard from "@/components/DriverCard";
import { races } from "@/data/races";
import { drivers } from "@/data/drivers";
import { motion } from "framer-motion";

const Index = () => {
  // Get upcoming race
  const upcomingRaces = races.filter(race => new Date(race.date) > new Date());
  const nextRace = upcomingRaces.length > 0 ? upcomingRaces[0] : null;
  
  // Get Ferrari drivers
  const ferrariDrivers = drivers.filter(driver => driver.isFerrariDriver);
  
  // Get latest race
  const pastRaces = races.filter(race => new Date(race.date) <= new Date());
  const latestRace = pastRaces.length > 0 ? pastRaces[pastRaces.length - 1] : null;

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Hero Section with enhanced design */}
      <section className="relative bg-gradient-to-b from-ferrari-dark to-black text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1617886322168-72b886573c35?q=80&w=2000&auto=format&fit=crop" 
            alt="Ferrari F1 Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="checkered-pattern opacity-5 w-full h-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={item}
            >
              <span className="text-ferrari-red">Forza</span> Ferrari!
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 opacity-90"
              variants={item}
            >
              Welcome to the ultimate fan site for the most iconic team in Formula 1 history.
              Follow Ferrari's journey through the current season and beyond.
            </motion.p>
            
            <motion.div 
              className="space-x-4"
              variants={item}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-ferrari-red hover:bg-red-700 transition-colors duration-300"
              >
                <Link to="/races" className="group">
                  Race Stories
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-white border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
              >
                <Link to="/standings">
                  View Standings
                </Link>
              </Button>
            </motion.div>
            
            {nextRace && (
              <motion.div 
                className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                variants={item}
              >
                <div className="flex items-center text-white/80 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Next Race: {new Date(nextRace.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{nextRace.name}</h3>
                    <div className="flex items-center mt-1 text-white/70">
                      <Flag className="h-4 w-4 mr-1" />
                      <span>{nextRace.country}</span>
                    </div>
                  </div>
                  <Button size="sm" asChild className="bg-ferrari-red hover:bg-red-700">
                    <Link to={`/races/${nextRace.id}`}>
                      Race Details
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
        
        {/* Animated accent elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 ferrari-gradient"></div>
        <motion.div 
          className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-ferrari-red blur-3xl opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </section>

      {/* Featured Drivers with improved design */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex justify-between items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold flex items-center">
              <span className="w-1.5 h-6 bg-ferrari-red rounded-full mr-2 inline-block"></span>
              Ferrari Drivers
            </h2>
            <Button variant="ghost" asChild className="group">
              <Link to="/standings" className="flex items-center">
                View All Drivers
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            {ferrariDrivers.map(driver => (
              <motion.div key={driver.id} variants={item}>
                <DriverCard 
                  name={driver.name}
                  number={driver.number}
                  team={driver.team}
                  points={driver.points}
                  position={driver.position}
                  isFerrariDriver={true}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Current Season with improved design */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-6 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-6 bg-ferrari-red rounded-full mr-2 inline-block"></span>
            2025 Season
          </motion.h2>
          
          <motion.div 
            className="bg-card rounded-lg p-6 shadow-sm border border-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg mb-6">
              The 2025 Formula 1 season is proving to be one of the most competitive in recent history.
              Ferrari has shown strong pace with their new SF25 challenger, securing multiple podiums
              and wins in the first half of the season. With both Charles Leclerc and Carlos Sainz
              performing at their best, the team is in a strong position to challenge for both championships.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {nextRace && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="inline-block w-1 h-6 bg-ferrari-red mr-2 rounded-full"></span>
                    Next Race
                  </h3>
                  <RaceCard {...nextRace} />
                </motion.div>
              )}
              
              {latestRace && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="inline-block w-1 h-6 bg-ferrari-red mr-2 rounded-full"></span>
                    Latest Results
                  </h3>
                  <RaceCard {...latestRace} />
                </motion.div>
              )}
            </div>
            
            <motion.div 
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild className="group">
                <Link to="/races" className="flex items-center">
                  View All Races
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ferrari Legacy with improved design */}
      <section className="py-16 bg-ferrari-red text-white relative overflow-hidden">
        <div className="absolute inset-0 checkered-pattern opacity-10"></div>
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-[100px] opacity-20"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-2">Ferrari Legacy</h2>
            <p className="text-xl mb-6 opacity-80">The most successful team in Formula 1 history</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.div 
              className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              variants={item}
            >
              <div className="text-4xl font-bold mb-2">16</div>
              <div className="text-lg">Constructors' Championships</div>
            </motion.div>
            <motion.div 
              className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              variants={item}
            >
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-lg">Drivers' Championships</div>
            </motion.div>
            <motion.div 
              className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              variants={item}
            >
              <div className="text-4xl font-bold mb-2">242</div>
              <div className="text-lg">Race Victories</div>
            </motion.div>
            <motion.div 
              className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              variants={item}
            >
              <div className="text-4xl font-bold mb-2">244</div>
              <div className="text-lg">Pole Positions</div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              variant="outline" 
              asChild 
              className="bg-transparent border-white text-white hover:bg-white hover:text-ferrari-red transition-colors duration-300"
            >
              <Link to="/history" className="group flex items-center">
                Explore Ferrari's History
                <History className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20"></div>
      </section>

      {/* Call to Action with improved design */}
      <section className="py-16 relative overflow-hidden">
        <motion.div 
          className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-ferrari-red/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-4">Join the Ferrari F1 Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Stay updated with the latest news, race results, and exclusive content about the Scuderia Ferrari F1 team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-ferrari-red hover:bg-red-700 transition-colors duration-300">
              <Link to="/news">Latest News</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">About</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Index;
