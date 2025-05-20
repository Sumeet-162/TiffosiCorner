import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ferrariDrivers, championshipCars, ferrariTeamPrincipals } from '@/data/ferrariDrivers';
import { Trophy, Star, Medal, User, Calendar, Clock, ArrowRight, Award, Car, Flag, FastForward, Users, Quote } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import HeroHeader from '@/components/HeroHeader';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function FerrariDrivers() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [selectedDriver, setSelectedDriver] = useState<typeof ferrariDrivers[0] | null>(null);

  // Get unique eras from the data
  const eras = Array.from(new Set(ferrariDrivers.map(driver => driver.era)));

  // Filter drivers based on selected era
  const filteredDrivers = selectedEra 
    ? ferrariDrivers.filter(driver => driver.era === selectedEra)
    : ferrariDrivers;
    
  // Filter by championship winners if champions tab is selected
  const displayedDrivers = activeTab === "champions" 
    ? filteredDrivers.filter(driver => driver.championshipYears.length > 0)
    : filteredDrivers;

  // Sort drivers by championships first, then by wins
  const sortedDrivers = [...displayedDrivers].sort((a, b) => {
    // First sort by number of championships
    if (b.championshipYears.length !== a.championshipYears.length) {
      return b.championshipYears.length - a.championshipYears.length;
    }
    // Then by number of wins
    return b.wins - a.wins;
  });

  return (
    <div className="space-y-16">
      <HeroHeader 
        title="Ferrari"
        titleHighlight="Legends"
        subtitle="The iconic drivers who have raced for the most successful team in Formula 1 history"
        badgeText="FERRARI HERITAGE"
        badgeIcon={<Trophy className="h-4 w-4" />}
        imageUrl="https://raw.githubusercontent.com/Sumeet-162/website-images/refs/heads/main/2025-ferrari-sf-25-f1-race-car_100956872.jpg"
        metaItems={[
          { icon: <Trophy className="h-4 w-4" />, text: "16 Constructors' Championships" },
          { icon: <Medal className="h-4 w-4" />, text: "15 Drivers' Championships" },
          { icon: <Flag className="h-4 w-4" />, text: "242 Race Victories" }
        ]}
      />

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">The Ferrari Driver Legacy</h2>
          <p className="text-muted-foreground text-lg">
            Since 1950, Ferrari has been home to some of the greatest drivers in Formula 1 history. 
            From Alberto Ascari to Lewis Hamilton, the iconic red cars have been piloted by legends who 
            have contributed to Ferrari's unmatched legacy of 16 Constructors' and 15 Drivers' Championships.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-10">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
              <TabsList className="grid grid-cols-2 w-auto">
                <TabsTrigger 
                  value="all"
                  className={activeTab === "all" ? "bg-ferrari-red text-white" : ""}
                >
                  All Drivers
                </TabsTrigger>
                <TabsTrigger 
                  value="champions"
                  className={activeTab === "champions" ? "bg-ferrari-red text-white" : ""}
                >
                  Championship Winners
                </TabsTrigger>
              </TabsList>
              
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={selectedEra === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedEra(null)}
                  className={selectedEra === null ? "bg-ferrari-red hover:bg-red-700" : ""}
                >
                  All Eras
                </Button>
                
                {eras.map(era => (
                  <Button
                    key={era}
                    variant={selectedEra === era ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedEra(era)}
                    className={selectedEra === era ? "bg-ferrari-red hover:bg-red-700" : ""}
                  >
                    {era}
                  </Button>
                ))}
              </div>
            </div>
          </Tabs>
        </div>

        {/* Driver Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sortedDrivers.map(driver => (
            <motion.div
              key={driver.id}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card 
                className="overflow-hidden h-full cursor-pointer hover:shadow-xl transition-shadow duration-300 bg-card"
                onClick={() => setSelectedDriver(driver)}
              >
                <div className="h-1 w-full bg-ferrari-red"></div>
                
                <div className="relative h-64 overflow-hidden">
                  {/* Championship Banner */}
                  {driver.championshipYears.length > 0 && (
                    <div className="absolute top-4 left-0 bg-yellow-500 text-black px-3 py-1 rounded-r-full font-semibold text-sm shadow-md z-10 flex items-center">
                      <Trophy className="h-4 w-4 mr-1" />
                      {driver.championshipYears.length} {driver.championshipYears.length === 1 ? "Championship" : "Championships"}
                    </div>
                  )}
                  
                  {/* Driver Image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
                  <img 
                    src={driver.imageUrl || "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Drivers/Silhouette.png"}
                    alt={driver.name}
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Era Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white">
                    {driver.era}
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-ferrari-red">
                        {driver.name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Flag className="h-3 w-3" />
                        {driver.country}
                      </CardDescription>
                    </div>
                    <Badge className="bg-muted-foreground/20 text-muted-foreground">
                      {driver.years}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-4 gap-2 text-center mb-4">
                    <div className="bg-muted p-2 rounded">
                      <p className="text-muted-foreground text-xs">Wins</p>
                      <p className="font-mono font-bold">{driver.wins}</p>
                    </div>
                    <div className="bg-muted p-2 rounded">
                      <p className="text-muted-foreground text-xs">Podiums</p>
                      <p className="font-mono font-bold">{driver.podiums}</p>
                    </div>
                    <div className="bg-muted p-2 rounded">
                      <p className="text-muted-foreground text-xs">Poles</p>
                      <p className="font-mono font-bold">{driver.poles}</p>
                    </div>
                    <div className="bg-muted p-2 rounded">
                      <p className="text-muted-foreground text-xs">Races</p>
                      <p className="font-mono font-bold">{driver.racesWithFerrari}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm line-clamp-2">{driver.description}</p>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full text-ferrari-red hover:bg-ferrari-red/10 border-ferrari-red/30 mt-auto"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Principals Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Ferrari Team Principals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ferrariTeamPrincipals.map((principal, index) => (
              <Card key={index} className="bg-card/50">
                <CardHeader>
                  <CardTitle className="text-lg">{principal.name}</CardTitle>
                  <CardDescription>{principal.years}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{principal.achievements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Championship Cars Section */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">Championship-Winning Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {championshipCars.map((car, index) => (
              <Card key={index} className="bg-card/50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{car.model}</CardTitle>
                    <Badge className="bg-ferrari-red">{car.years}</Badge>
                  </div>
                  <CardDescription>{car.driver}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{car.championships}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Driver Detail Modal */}
      <Dialog open={!!selectedDriver} onOpenChange={(open) => !open && setSelectedDriver(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          {selectedDriver && (
            <div>
              <div className="relative">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={selectedDriver.imageUrl}
                    alt={selectedDriver.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-muted/30 backdrop-blur-sm text-white border-none mb-2">{selectedDriver.era}</Badge>
                  <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                    {selectedDriver.name}
                    {selectedDriver.championshipYears.length > 0 && (
                      <Trophy className="h-5 w-5 text-yellow-500" />
                    )}
                  </h2>
                  <p className="text-white/80 flex items-center gap-1">
                    <Flag className="h-4 w-4" /> {selectedDriver.country} | {selectedDriver.years}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <User className="h-5 w-5 text-ferrari-red" />
                      Biography
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{selectedDriver.description}</p>
                    
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5 text-ferrari-red" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {selectedDriver.achievements.map((achievement, index) => (
                        <li key={index} className="flex gap-2">
                          <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {selectedDriver.famousQuotes && (
                      <div className="bg-muted/30 p-4 rounded-lg mb-6">
                        <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                          <Quote className="h-4 w-4 text-ferrari-red" />
                          Famous Quote
                        </h4>
                        <blockquote className="border-l-2 border-ferrari-red pl-4 italic text-muted-foreground">
                          "{selectedDriver.famousQuotes[0]}"
                        </blockquote>
                      </div>
                    )}
                    
                    {selectedDriver.carModels && (
                      <div className="mb-6">
                        <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                          <Car className="h-4 w-4 text-ferrari-red" />
                          Ferrari Cars Driven
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedDriver.carModels.map((car, index) => (
                            <Badge key={index} variant="outline" className="bg-muted/20">
                              {car}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {selectedDriver.teamPrincipals && (
                      <div>
                        <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4 text-ferrari-red" />
                          Team Principals
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedDriver.teamPrincipals.map((principal, index) => (
                            <Badge key={index} variant="secondary">
                              {principal}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="col-span-12 md:col-span-4">
                    <Card className="bg-card/50 border-muted">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Trophy className="h-5 w-5 text-ferrari-red" />
                          Statistics with Ferrari
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">Seasons</span>
                          <span className="font-mono font-bold">{selectedDriver.years}</span>
                        </div>
                        
                        <div className="flex justify-between items-center pb-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">Races</span>
                          <span className="font-mono font-bold">{selectedDriver.racesWithFerrari}</span>
                        </div>
                        
                        <div className="flex justify-between items-center pb-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">Championship Years</span>
                          <div>
                            {selectedDriver.championshipYears.length > 0 ? (
                              <div className="flex flex-wrap gap-1 justify-end">
                                {selectedDriver.championshipYears.map((year, index) => (
                                  <Badge key={index} className="bg-yellow-500/80 text-black">
                                    {year}
                                  </Badge>
                                ))}
                              </div>
                            ) : (
                              <span className="text-muted-foreground">None</span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center pb-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">Wins</span>
                          <span className="font-mono font-bold">{selectedDriver.wins}</span>
                        </div>
                        
                        <div className="flex justify-between items-center pb-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">Podiums</span>
                          <span className="font-mono font-bold">{selectedDriver.podiums}</span>
                        </div>
                        
                        <div className="flex justify-between items-center pb-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">Pole Positions</span>
                          <span className="font-mono font-bold">{selectedDriver.poles}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Fastest Laps</span>
                          <span className="font-mono font-bold">{selectedDriver.fastestLaps}</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {selectedDriver.nicknames && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2 text-muted-foreground">Nicknames</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedDriver.nicknames.map((nickname, index) => (
                            <Badge key={index} variant="outline" className="bg-ferrari-red/10">
                              {nickname}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
} 