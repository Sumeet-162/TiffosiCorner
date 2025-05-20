import React, { useState } from 'react';
import { useF1 } from '../context/F1Context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../components/ui/card';
import { Skeleton } from '../components/ui/skeleton';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { motion } from 'framer-motion';
import { Users, Star, Medal, Calendar, BarChart3, Flag } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import HeroHeader from '@/components/HeroHeader';
import { drivers } from '@/data/drivers';
import { teams } from '@/data/teams';

export default function Drivers() {
  const { state, fetchDriverStandings, fetchDriverInfo, fetchDriverStats } = useF1();
  const { driverStandings, selectedDriver, driverStats, loading } = state;
  const [selectedTeamFilter, setSelectedTeamFilter] = useState<string | null>(null);
  const [selectedDriverData, setSelectedDriverData] = useState<any>(null);

  React.useEffect(() => {
    if (!driverStandings.length) fetchDriverStandings();
  }, []);

  const handleDriverClick = async (driverId: string) => {
    await Promise.all([
      fetchDriverInfo(driverId),
      fetchDriverStats(driverId)
    ]);
  };

  // Get all drivers from the data file
  const allDrivers = drivers;

  // Filter based on team if a filter is selected
  const filteredDrivers = selectedTeamFilter 
    ? allDrivers.filter(driver => driver.team === selectedTeamFilter)
    : allDrivers;

  // Get unique teams for filtering
  const teamsList = Array.from(new Set(allDrivers.map(driver => driver.team)));

  const getTeamColor = (teamName: string) => {
    const team = teams.find(team => team.name === teamName);
    return team?.color || "#cccccc";
  };

  return (
    <div className="space-y-12">
      <HeroHeader 
        title="Formula 1"
        titleHighlight="Drivers"
        subtitle="Meet the elite drivers competing in the 2025 Formula 1 World Championship"
        badgeText="2025 DRIVER LINEUP"
        badgeIcon={<Users className="h-4 w-4" />}
        imageUrl="https://www.formula1.com/content/dam/fom-website/manual/Misc/2024/2024%20Abu%20Dhabi%20Pre/GettyImages-1881977242.jpg.transform/9col/image.jpg"
        metaItems={[
          { icon: <Star className="h-4 w-4" />, text: "20 World-Class Drivers" },
          { icon: <Medal className="h-4 w-4" />, text: "10 Constructor Teams" },
          { icon: <Flag className="h-4 w-4" />, text: "2025 Season" }
        ]}
      />

      {/* Filter Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold">Driver Lineup</h2>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={selectedTeamFilter === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTeamFilter(null)}
              className={selectedTeamFilter === null ? "bg-ferrari-red hover:bg-red-700" : ""}
            >
              All Teams
            </Button>
            
            {teamsList.map(team => (
              <Button
                key={team}
                variant={selectedTeamFilter === team ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTeamFilter(team)}
                className={selectedTeamFilter === team ? "bg-ferrari-red hover:bg-red-700" : ""}
              >
                {team}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Driver Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {loading && filteredDrivers.length === 0 ? (
            Array.from({ length: 12 }).map((_, i) => (
              <Skeleton key={i} className="h-[340px] w-full rounded-xl" />
            ))
          ) : (
            filteredDrivers.map(driver => {
              const teamColor = getTeamColor(driver.team);
              const isFerrariDriver = driver.isFerrariDriver;
              
              return (
                <Dialog key={driver.id}>
                  <DialogTrigger asChild>
                    <motion.div
                      whileHover={{ y: -10 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card 
                        className="overflow-hidden h-full cursor-pointer hover:shadow-xl transition-shadow duration-300"
                        onClick={() => setSelectedDriverData(driver)}
                      >
                        <div className="h-1 w-full" style={{ backgroundColor: teamColor }}></div>
                        
                        <div className="relative h-52 overflow-hidden">
                          {/* Driver Image */}
                          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
                          <img 
                            src={driver.imageUrl || `https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Silhouette.png`}
                            alt={driver.name}
                            className="w-full h-full object-cover object-top"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Max_Verstappen_1.png";
                            }}
                          />
                          
                          {/* Driver Number */}
                          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                            <span className="text-white font-bold text-xl" style={{ fontFamily: "'Orbitron', sans-serif" }}>{driver.number}</span>
                          </div>
                        </div>
                        
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: teamColor }}
                            ></div>
                            <CardDescription>{driver.team}</CardDescription>
                          </div>
                          <CardTitle className={`text-xl ${isFerrariDriver ? 'text-ferrari-red' : ''}`}>
                            {driver.name}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="bg-muted p-2 rounded">
                              <p className="text-muted-foreground text-xs">Position</p>
                              <p className="font-bold">{driver.position}</p>
                            </div>
                            <div className="bg-muted p-2 rounded">
                              <p className="text-muted-foreground text-xs">Points</p>
                              <p className="font-bold">{driver.points}</p>
                            </div>
                            <div className="bg-muted p-2 rounded">
                              <p className="text-muted-foreground text-xs">Wins</p>
                              <p className="font-bold">{driver.wins}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                            <Flag className="h-4 w-4" />
                            <span>{driver.country}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-3xl">
                    {selectedDriverData && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                            <img 
                              src={selectedDriverData.imageUrl || "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Silhouette.png"}
                              alt={selectedDriverData.name}
                              className="w-full h-full object-cover object-top"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Max_Verstappen_1.png";
                              }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                              <h2 className="text-white text-3xl font-bold">{selectedDriverData.name}</h2>
                              <p className="text-white/70">{selectedDriverData.team}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-muted-foreground">Driver Number</div>
                              <div className="font-bold text-xl">{selectedDriverData.number}</div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-muted-foreground">Country</div>
                              <div>{selectedDriverData.country}</div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-muted-foreground">Position</div>
                              <div>{selectedDriverData.position}</div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-muted-foreground">Age</div>
                              <div>{selectedDriverData.age || "N/A"}</div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-muted-foreground">Ferrari Driver</div>
                              <div>{selectedDriverData.isFerrariDriver ? "Yes" : "No"}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold mb-4">2025 Season Stats</h3>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-muted p-4 rounded-lg">
                              <div className="text-sm text-muted-foreground">Points</div>
                              <div className="text-2xl font-bold">{selectedDriverData.points}</div>
                            </div>
                            <div className="bg-muted p-4 rounded-lg">
                              <div className="text-sm text-muted-foreground">Wins</div>
                              <div className="text-2xl font-bold">{selectedDriverData.wins}</div>
                            </div>
                            <div className="bg-muted p-4 rounded-lg">
                              <div className="text-sm text-muted-foreground">Podiums</div>
                              <div className="text-2xl font-bold">{selectedDriverData.podiums}</div>
                            </div>
                            <div className="bg-muted p-4 rounded-lg">
                              <div className="text-sm text-muted-foreground">Poles</div>
                              <div className="text-2xl font-bold">{selectedDriverData.poles || 0}</div>
                            </div>
                          </div>
                          
                          {selectedDriverData.bio && (
                            <div className="mb-6">
                              <h4 className="text-xl font-bold mb-2">Bio</h4>
                              <p className="text-muted-foreground">{selectedDriverData.bio}</p>
                            </div>
                          )}
                          
                          {selectedDriverData.careerStats && (
                            <div>
                              <h4 className="text-xl font-bold mb-2">Career Stats</h4>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center justify-between">
                                  <div className="text-sm text-muted-foreground">Championships</div>
                                  <div>{selectedDriverData.careerStats.championships}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="text-sm text-muted-foreground">Fastest Laps</div>
                                  <div>{selectedDriverData.careerStats.fastestLaps}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="text-sm text-muted-foreground">Career Points</div>
                                  <div>{selectedDriverData.careerStats.careerPoints}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="text-sm text-muted-foreground">Seasons in F1</div>
                                  <div>{selectedDriverData.careerStats.seasonsInF1}</div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
} 