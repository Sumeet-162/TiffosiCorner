import React from 'react';
import { Link } from 'react-router-dom';
import { useF1 } from '../context/F1Context';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Skeleton } from '../components/ui/skeleton';
import { Badge } from '../components/ui/badge';
import { ChevronRight, Calendar, MapPin, Flag, Clock, Trophy, Car, Star, TrendingUp, Zap, Image } from 'lucide-react';
import { motion } from 'framer-motion';
import FerrariDriverCard from '@/components/FerrariDriverCard';
import { ReactTyped } from 'react-typed';

export default function Home() {
  const { state, fetchDriverStandings, fetchConstructorStandings, fetchRaceSchedule } = useF1();
  const { driverStandings, constructorStandings, raceSchedule, loading } = state;

  React.useEffect(() => {
    if (!driverStandings.length) fetchDriverStandings();
    if (!constructorStandings.length) fetchConstructorStandings();
    if (!raceSchedule.length) fetchRaceSchedule();
  }, []);

  const ferrariDrivers = driverStandings.filter(driver => 
    driver.Constructors[0]?.constructorId === 'ferrari'
  );
  const ferrariTeam = constructorStandings.find(team => 
    team.Constructor.constructorId === 'ferrari'
  );

  return (
    <div className="flex flex-col space-y-0 px-0 pb-0">
      {/* Hero Section - Full width no padding */}
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 font-racing">
              <span className="italic text-white relative">
                Forza{" "}
                <span className="relative text-white">
                  Ferrari
                  <motion.span 
                    className="absolute -bottom-2 left-0 right-0 h-1.5 bg-ferrari-red"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </span>
              </span>
            </h1>
            
            <div className="text-xl text-white/80 mb-8 max-w-2xl italic font-light min-h-[80px]">
              <ReactTyped
                strings={[
                  "Segui il viaggio della Scuderia Ferrari nella stagione di Formula 1 2025, con contenuti esclusivi, analisi di gara e aggiornamenti del team."
                ]}
                typeSpeed={40}
                startDelay={800}
              />
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-ferrari-red to-red-700 hover:from-red-700 hover:to-ferrari-red text-white font-racing font-medium px-8 py-6 rounded-md shadow-lg shadow-red-700/20"
              >
                <Link to="/history">
                  Explore Ferrari Legacy
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-racing font-medium px-8 py-6 rounded-md backdrop-blur-sm flex items-center gap-2"
              >
                <Link to="/gallery">
                  <Image className="w-5 h-5 mr-2" />
                  View Gallery
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ferrari Drivers Section - Redesigned - No gap between hero and this section */}
      <section className="container mx-auto pt-10 px-0 relative z-10 -mt-32">
        <div className="flex items-center mb-10 gap-3 px-4">
          <h2 className="text-4xl font-sans font-bold text-white">Ferrari Drivers</h2>
          <div className="h-1 w-16 bg-ferrari-red self-center"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <FerrariDriverCard 
            name="Charles"
            lastName="Leclerc"
            number="16"
            nationality="Monegasque"
            position="5"
            points="119"
            wins="0"
            podiums="3"
            imageUrl="https://media.formula1.com/content/dam/fom-website/drivers/2025Drivers/leclerc.jpg.img.1024.medium.jpg"
          />
          <FerrariDriverCard 
            name="Lewis"
            lastName="Hamilton"
            number="44"
            nationality="British"
            position="6"
            points="103"
            wins="0"
            podiums="1"
            imageUrl="https://media.formula1.com/content/dam/fom-website/drivers/2025Drivers/hamilton.jpg.img.1024.medium.jpg"
          />
        </div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-ferrari-red to-red-700 hover:from-red-700 hover:to-ferrari-red text-white font-bold px-12 py-7 rounded-md shadow-lg text-xl hover:scale-105 transition-all duration-300"
          >
            <Link to="/drivers">
              View All Drivers <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Team Standings Section */}
      <section className="container mx-auto px-0 md:px-4 mb-20 mt-20">
        <div className="flex items-center mb-10 gap-3 px-4">
          <h2 className="text-3xl font-sans font-bold text-white">Team Standings</h2>
          <div className="h-1 w-16 bg-hsl-ferrari-yellow self-center"></div>
        </div>
        
        {loading ? (
          <Skeleton className="h-64 w-full" />
        ) : ferrariTeam ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-zinc-900/90 to-black/90 border-transparent overflow-hidden shadow-2xl hover:shadow-red-900/20 transition-all duration-300 rounded-xl backdrop-blur-sm">
              <div className="absolute top-0 h-1 w-full bg-gradient-to-r from-ferrari-red via-yellow-500 to-ferrari-red"></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-sans text-white">
                      <span className="text-ferrari-red">Scuderia Ferrari</span>
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Position: {ferrariTeam.position} | Points: <span className="text-hsl-ferrari-yellow font-medium" style={{fontFamily: "'Orbitron', sans-serif"}}>{ferrariTeam.points}</span>
                    </CardDescription>
                  </div>
                  <motion.img 
                    src="https://wojciechstaszewski4.github.io/FerrariWebsite/ferrari.png" 
                    alt="Ferrari Logo"
                    className="w-20 h-20 object-contain"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-4 rounded-lg hover:shadow-inner transition-all duration-300 group">
                    <div className="flex items-center justify-center mb-2">
                      <Trophy className="w-8 h-8 text-ferrari-red group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-center font-medium text-lg">31</h3>
                    <p className="text-center text-sm text-muted-foreground">Championships</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-4 rounded-lg hover:shadow-inner transition-all duration-300 group">
                    <div className="flex items-center justify-center mb-2">
                      <Flag className="w-8 h-8 text-ferrari-red group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-center font-medium text-lg">242</h3>
                    <p className="text-center text-sm text-muted-foreground">Race Wins</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-4 rounded-lg hover:shadow-inner transition-all duration-300 group">
                    <div className="flex items-center justify-center mb-2">
                      <Calendar className="w-8 h-8 text-ferrari-red group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-center font-medium text-lg">74</h3>
                    <p className="text-center text-sm text-muted-foreground">Years in F1</p>
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <p>Scuderia Ferrari is the oldest surviving and most successful Formula One team, having competed in every world championship since the 1950 season. The team holds numerous records including most constructor championships (16) and the most driver's championship victories (15).</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <p>No team data available</p>
        )}
      </section>

      {/* Call to Action Section */}
      <section className="relative overflow-hidden py-16 pb-24 bg-gradient-to-b from-background via-zinc-900/80 to-zinc-900/50 mb-0">
        <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/Sumeet-162/website-images/refs/heads/main/ferrarimonza.webp')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Join the <span className="text-ferrari-red">Tifosi</span> Community</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest news, race results, and exclusive content about Scuderia Ferrari's Formula 1 journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-ferrari-red hover:bg-red-700 text-white px-8 py-6 text-lg">
                Latest News
              </Button>
              <Button size="lg" variant="outline" className="border-ferrari-red text-ferrari-red hover:bg-ferrari-red/10 px-8 py-6 text-lg">
                <Link to="/history">Explore History</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}