import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Flag, History, Clock, TrendingUp, ChevronRight, Trophy, Star, Car, ChevronDown, MapPin, CheckCircle2, AlertCircle, Newspaper, Info } from "lucide-react";
import RaceCard from "@/components/RaceCard";
import DriverCard from "@/components/DriverCard";
import { races } from "@/data/races";
import { drivers } from "@/data/drivers";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Index = () => {
  // Get upcoming race
  const upcomingRaces = races.filter(race => new Date(race.date) > new Date());
  const nextRace = upcomingRaces.length > 0 ? upcomingRaces[0] : null;
  
  // Get Ferrari drivers
  const ferrariDrivers = drivers.filter(driver => driver.isFerrariDriver);
  
  // Get latest race
  const pastRaces = races.filter(race => new Date(race.date) <= new Date());
  const latestRace = pastRaces.length > 0 ? pastRaces[pastRaces.length - 1] : null;

  // State for active section in mobile view
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Animation variants
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

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <>
      {/* Hero section with consistent header */}
      <section className="relative h-screen flex items-center">
        {/* Italian flag stripe accent - top right */}
        <div className="absolute top-0 right-0 h-40 w-6 overflow-hidden z-10">
          <div className="h-full w-[200%] bg-gradient-to-b from-[#009246] via-white to-[#CE2B37]"></div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://raw.githubusercontent.com/Sumeet-162/website-images/refs/heads/main/2025-ferrari-sf-25-f1-race-car_100956872.jpg" 
            alt="Ferrari F1 Car" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
          
          {/* F1 racetrack pattern overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-checkered-flag"></div>
            <div className="absolute bottom-16 left-0 right-0 h-px bg-white/30"></div>
            <div className="absolute bottom-32 left-0 right-0 h-px bg-white/20"></div>
        </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 mt-16">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="mb-4 bg-ferrari-red text-white border-none px-4 py-1.5">2025 SEASON</Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6 font-racing">
              <span className="italic">Forza</span> <span className="text-ferrari-red">Ferrari</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl italic font-light">
              Segui il viaggio della Scuderia Ferrari nella stagione di Formula 1 2025,
              con contenuti esclusivi, analisi di gara e aggiornamenti del team.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-ferrari-red hover:bg-ferrari-red/90 text-white gap-2"
              >
                <Link to="/standings" className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  <span>View Standings</span>
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-white border-white/30 hover:bg-white/10 flex items-center gap-2"
              >
                <Link to="/races" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Race Calendar</span>
                </Link>
              </Button>
            </div>
            
            {nextRace && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12 bg-black/40 backdrop-blur-md rounded-xl p-5 border border-white/10 max-w-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-ferrari-red rounded-lg p-2.5">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                  <div>
                      <div className="text-white/70 text-sm italic">Prossima Gara</div>
                      <div className="text-white font-semibold">{nextRace.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/70 text-sm">{new Date(nextRace.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                    <div className="text-white font-medium">{nextRace.country}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="animate-bounce"
          >
            <ChevronDown className="h-6 w-6 text-white" />
          </motion.div>
        </div>
      </section>

      {/* Ferrari Drivers Section - Card Based Layout */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* F1 racing elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-white/5"></div>
        <div className="absolute top-10 right-0 w-20 h-20 rounded-full bg-ferrari-red/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-white/5"></div>
        
        {/* Italian tri-color accent line */}
        <div className="absolute left-0 top-10 h-[80%] w-2 overflow-hidden">
          <div className="h-full w-[300%] bg-gradient-to-b from-[#009246] via-white to-[#CE2B37]"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 lg:w-1/4 sticky top-20">
          <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px bg-ferrari-red flex-grow max-w-12"></div>
                  <span className="text-white/70 uppercase text-sm font-medium tracking-wider italic">I Nostri Piloti</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4 font-racing">Ferrari <span className="text-ferrari-red italic">Campioni</span></h2>
                <p className="text-white/80 mb-6 italic font-light">
                  Conosci i piloti che rappresentano la Scuderia Ferrari nella stagione di Formula 1 2025,
                  spingendo i limiti delle prestazioni su ogni circuito.
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-ferrari-red text-ferrari-red hover:bg-ferrari-red hover:text-white gap-2"
                >
                  <Link to="/standings" className="flex items-center gap-2">
                    <span>View All Drivers</span>
                    <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
            </div>
          
            <div className="md:w-2/3 lg:w-3/4">
          <motion.div 
                className="grid md:grid-cols-2 gap-6"
                variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {ferrariDrivers.map(driver => (
                  <motion.div key={driver.id} variants={item} className="h-full">
                    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 h-full transition-all hover:border-ferrari-red/50 group">
                      <div className="relative pt-[75%] overflow-hidden">
                        <img 
                          src={driver.imageUrl || "https://i.imgur.com/QDa6yZv.jpg"} 
                          alt={driver.name} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-5">
                          <Badge className="bg-ferrari-red border-none text-white mb-2">#{driver.number}</Badge>
                          <h3 className="text-2xl font-bold text-white mb-1">{driver.name}</h3>
                          <div className="flex items-center text-white/70">
                            <Flag className="h-3.5 w-3.5 mr-1.5" />
                            <span className="text-sm">{driver.country}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-5 bg-gray-800">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-white/60 text-xs mb-1">Position</div>
                            <div className="text-white font-semibold">P{driver.position}</div>
                          </div>
                          <div>
                            <div className="text-white/60 text-xs mb-1">Points</div>
                            <div className="text-ferrari-red font-semibold">{driver.points}</div>
                          </div>
                          <div>
                            <div className="text-white/60 text-xs mb-1">Wins</div>
                            <div className="text-white font-semibold">{driver.wins}</div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button asChild className="w-full bg-gray-700 hover:bg-ferrari-red text-white">
                            <Link to={`/drivers/${driver.id}`}>Driver Profile</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
              </motion.div>
            ))}
          </motion.div>
            </div>
          </div>
        </div>
        
        {/* Racing flag pattern */}
        <div className="absolute bottom-0 right-0 w-full h-4 opacity-30">
          <div className="h-full w-full bg-checkered-flag transform -skew-y-1"></div>
        </div>
      </section>

      {/* Redesigned Race Schedule Section - Professional BoxBox style */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px bg-ferrari-red flex-grow max-w-12"></div>
                <span className="text-gray-500 dark:text-white/70 uppercase text-sm font-medium tracking-wider">F1 Calendar</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Race <span className="text-ferrari-red">Schedule</span></h2>
              <p className="text-gray-600 dark:text-white/80 mt-3 max-w-2xl">
                Follow Ferrari throughout the 2025 Formula 1 season with detailed race information and results.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex mt-6 md:mt-0 text-ferrari-red hover:text-ferrari-red/90 hover:bg-ferrari-red/10 gap-2">
              <Link to="/races" className="flex items-center gap-2">
                <span>View Full Calendar</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          
          {/* Timeline style race schedule - Inspired by BoxBox.club */}
          <div className="mb-10 relative">
            <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-px bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
            
            {races.slice(0, 4).map((race, index) => {
              const isPast = new Date(race.date) <= new Date();
              const isNext = !isPast && upcomingRaces[0]?.id === race.id;
              
              return (
                <motion.div
                  key={race.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "relative mb-10 md:mb-8 ml-10 md:ml-0",
                    index % 2 === 0 ? "md:mr-[50%] md:pr-12" : "md:ml-[50%] md:pl-12"
                  )}
                >
                  {/* Timeline node */}
                  <div className={cn(
                    "absolute left-0 md:left-1/2 top-0 w-7 h-7 rounded-full border-4 transform -translate-x-1/2 -translate-y-1/2 z-10",
                    isPast 
                      ? "bg-green-600 border-green-300 dark:border-green-800" 
                      : isNext 
                        ? "bg-ferrari-red border-red-300 dark:border-red-800" 
                        : "bg-gray-400 border-gray-200 dark:border-gray-700"
                  )}>
                    {isPast && (
                      <CheckCircle2 className="w-full h-full text-white" />
                    )}
                    {isNext && (
                      <AlertCircle className="w-full h-full text-white" />
              )}
            </div>
            
                  {/* Race card */}
                  <div className={cn(
                    "bg-white dark:bg-gray-800 rounded-lg shadow-sm border overflow-hidden",
                    isNext && "ring-2 ring-ferrari-red"
                  )}>
                    <div className={cn(
                      "px-5 py-3 border-b flex justify-between items-center",
                      isPast ? "bg-green-50 dark:bg-green-900/20" : 
                      isNext ? "bg-ferrari-red text-white" : "bg-gray-50 dark:bg-gray-700/50"
                    )}>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span className="font-semibold">{new Date(race.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <Badge className={cn(
                        isPast ? "bg-green-500 text-white" : 
                        isNext ? "bg-white text-ferrari-red" : "bg-gray-300 dark:bg-gray-600"
                      )}>
                        {isPast ? "Completed" : isNext ? "Next Race" : "Upcoming"}
                      </Badge>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{race.name}</h3>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{race.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10">
                          <Flag className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                        </div>
                      </div>
                      
                      {isPast && (
                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Ferrari Results:</h4>
                          <div className="space-y-2">
                            {race.results.map((result, idx) => (
                              <div key={idx} className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <div className={cn(
                                    "w-1 h-8 rounded-full",
                                    result.position <= 3 ? "bg-green-500" : "bg-ferrari-red"
                                  )}></div>
                                  <div>
                                    <div className="font-medium">{result.driver}</div>
                                    {result.highlight && (
                                      <div className="text-xs text-gray-500 dark:text-gray-400">{result.highlight}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className="text-center">
                                    <div className="text-xs text-gray-500 dark:text-gray-400">P</div>
                                    <div className="font-bold">{result.position}</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-xs text-gray-500 dark:text-gray-400">PTS</div>
                                    <div className="font-bold text-ferrari-red">{result.points}</div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-4">
                        <Button 
                          asChild 
                          variant={isPast ? "default" : "outline"} 
                          className={cn(
                            "w-full",
                            isPast ? "bg-ferrari-red hover:bg-ferrari-red/90" : ""
                          )}
                        >
                          <Link to={`/races/${race.id}`}>
                            {isPast ? "View Full Results" : "Race Details"}
                </Link>
              </Button>
                      </div>
                    </div>
                  </div>
            </motion.div>
              );
            })}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="bg-gray-900 dark:bg-gray-800 hover:bg-ferrari-red text-white gap-2">
              <Link to="/races" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>View Full 2025 Calendar</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ferrari Legacy Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-ferrari-red text-white">LEGACY</Badge>
            <h2 className="text-4xl font-bold mb-4">Ferrari F1 History</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              For over 70 years, Scuderia Ferrari has defined excellence in Formula 1, 
              creating a legacy of innovation, passion, and racing success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-black/20 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="mb-3 flex justify-center">
                <Trophy className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold mb-1">16</div>
              <div className="text-sm opacity-80">Constructors' Championships</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/20 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="mb-3 flex justify-center">
                <Star className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold mb-1">15</div>
              <div className="text-sm opacity-80">Drivers' Championships</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-black/20 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="mb-3 flex justify-center">
                <Flag className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-1">242</div>
              <div className="text-sm opacity-80">Race Victories</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black/20 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="mb-3 flex justify-center">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-1">244</div>
              <div className="text-sm opacity-80">Pole Positions</div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button 
              variant="outline" 
              asChild 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-ferrari-red flex items-center gap-2"
            >
              <Link to="/history" className="flex items-center gap-2">
                <History className="h-5 w-5" />
                <span>Explore Ferrari Legacy</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mobile Accordion Sections */}
      <section className="py-14 md:hidden bg-gray-100 dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Quick Access</h2>
          
          <div className="space-y-3">
            <div 
              className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
              onClick={() => toggleSection('news')}
            >
              <div className="flex items-center justify-between p-4 cursor-pointer bg-white dark:bg-gray-900">
                <h3 className="font-medium text-gray-900 dark:text-white">Latest News</h3>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${activeSection === 'news' ? 'rotate-180' : ''}`} />
              </div>
              {activeSection === 'news' && (
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
                  <ul className="space-y-3">
                    <li>
                      <Link to="/news/1" className="text-sm text-gray-700 dark:text-gray-300 hover:text-ferrari-red dark:hover:text-ferrari-red flex items-center gap-2">
                        <ChevronRight className="h-3 w-3" />
                        Ferrari unveils new aerodynamic package for next race
                      </Link>
                    </li>
                    <li>
                      <Link to="/news/2" className="text-sm text-gray-700 dark:text-gray-300 hover:text-ferrari-red dark:hover:text-ferrari-red flex items-center gap-2">
                        <ChevronRight className="h-3 w-3" />
                        Leclerc discusses strategy for upcoming Monaco GP
                      </Link>
                    </li>
                    <li>
                      <Link to="/news/3" className="text-sm text-gray-700 dark:text-gray-300 hover:text-ferrari-red dark:hover:text-ferrari-red flex items-center gap-2">
                        <ChevronRight className="h-3 w-3" />
                        Team principal interview: Plans for championship push
                      </Link>
                    </li>
                  </ul>
                  <Button asChild variant="ghost" size="sm" className="mt-3 w-full justify-center text-ferrari-red hover:text-ferrari-red/90">
                    <Link to="/news">View All News</Link>
                  </Button>
                </div>
              )}
            </div>
            
            <div 
              className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
              onClick={() => toggleSection('standings')}
            >
              <div className="flex items-center justify-between p-4 cursor-pointer bg-white dark:bg-gray-900">
                <h3 className="font-medium text-gray-900 dark:text-white">Current Standings</h3>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${activeSection === 'standings' ? 'rotate-180' : ''}`} />
              </div>
              {activeSection === 'standings' && (
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Drivers' Championship</div>
                      <div className="space-y-2">
                        {drivers.slice(0, 3).map((driver, index) => (
                          <div key={driver.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium w-6">{index + 1}.</span>
                              <span className={`text-sm ${driver.isFerrariDriver ? 'text-ferrari-red font-medium' : 'text-gray-700 dark:text-gray-300'}`}>
                                {driver.name}
                              </span>
                            </div>
                            <span className={`text-sm font-medium ${driver.isFerrariDriver ? 'text-ferrari-red' : 'text-gray-700 dark:text-gray-300'}`}>
                              {driver.points} pts
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <Button asChild size="sm" className="w-full justify-center bg-ferrari-red hover:bg-ferrari-red/90">
                      <Link to="/standings">View Full Standings</Link>
                    </Button>
                  </div>
                </div>
              )}
        </div>
        
            <div 
              className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
              onClick={() => toggleSection('gallery')}
            >
              <div className="flex items-center justify-between p-4 cursor-pointer bg-white dark:bg-gray-900">
                <h3 className="font-medium text-gray-900 dark:text-white">Photo Gallery</h3>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${activeSection === 'gallery' ? 'rotate-180' : ''}`} />
              </div>
              {activeSection === 'gallery' && (
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
                      <img src="https://i.imgur.com/QDa6yZv.jpg" alt="Ferrari" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
                      <img src="https://raw.githubusercontent.com/Sumeet-162/website-images/refs/heads/main/2025-ferrari-sf-25-f1-race-car_100956872.jpg" alt="Ferrari" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
                      <img src="https://i.imgur.com/uRqBGQu.jpg" alt="Ferrari" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="mt-3 w-full justify-center text-ferrari-red hover:text-ferrari-red/90">
                    <Link to="/gallery">View Gallery</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 px-3 py-1 bg-ferrari-red text-white border-none">JOIN THE COMMUNITY</Badge>
            <h2 className="text-4xl font-bold mb-6">Follow Ferrari's Journey</h2>
            <p className="max-w-2xl mx-auto text-white/80 mb-8">
              Stay updated with the latest news, exclusive content, and in-depth analysis of Ferrari's Formula 1 campaign.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-ferrari-red hover:bg-ferrari-red/90 text-white gap-2"
              >
                <Link to="/news" className="flex items-center gap-2">
                  <Newspaper className="h-5 w-5" />
                  <span>Latest News</span>
                </Link>
            </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-white border-white/30 hover:bg-white/10 gap-2"
              >
                <Link to="/about" className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  <span>About</span>
                </Link>
            </Button>
          </div>
        </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
