import React, { useState } from 'react';
import { useF1 } from '../context/F1Context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../components/ui/card';
import { Skeleton } from '../components/ui/skeleton';
import { Badge } from '../components/ui/badge';
import { MapPin, Calendar, Clock, Flag, ChevronDown, ChevronUp, Timer, TrendingUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { races } from '@/data/races';
import HeroHeader from '@/components/HeroHeader';

// Map circuit IDs to country codes for track images
const circuitToCountryCode: Record<string, string> = {
  'albert_park': 'AU',
  'bahrain': 'BH',
  'jeddah': 'SA',
  'shanghai': 'CN',
  'miami': 'US',
  'imola': 'IT',
  'monaco': 'MC',
  'catalunya': 'ES',
  'villeneuve': 'CA',
  'silverstone': 'GB',
  'hungaroring': 'HU',
  'spa': 'BE',
  'zandvoort': 'NL',
  'monza': 'IT',
  'baku': 'AZ',
  'marina_bay': 'SG',
  'suzuka': 'JP',
  'losail': 'QA',
  'americas': 'US',
  'rodriguez': 'MX',
  'interlagos': 'BR',
  'yas_marina': 'AE',
  'red_bull_ring': 'AT',
  'ricard': 'FR',
  'sochi': 'RU',
};

// Function to get track image URL
const getTrackImageUrl = (circuitId: string): string => {
  // Map circuit IDs to file names in the repository
  const circuitToFileMap: Record<string, string> = {
    'albert_park': 'Australia_Albert_Park',
    'bahrain': 'Bahrain_Bahrain_International',
    'jeddah': 'Saudi_Arabia_Jeddah_Corniche',
    'shanghai': 'China_Shanghai_International',
    'miami': 'USA_Miami_International',
    'imola': 'Italy_Imola_Internazionale_Enzo_Dino_Ferrari',
    'monaco': 'Monaco_Circuit_de_Monaco',
    'catalunya': 'Spain_Barcelona_Catalunya',
    'villeneuve': 'Canada_Gilles_Villeneuve',
    'silverstone': 'Great_Britain_Silverstone',
    'hungaroring': 'Hungary_Hungaroring',
    'spa': 'Belgium_Spa_Francorchamps',
    'zandvoort': 'Netherlands_Zandvoort',
    'monza': 'Italy_Monza',
    'baku': 'Azerbaijan_Baku',
    'marina_bay': 'Singapore_Marina_Bay_Street',
    'suzuka': 'Japan_Suzuka',
    'losail': 'Qatar_Lusail_International',
    'americas': 'USA_Circuit_of_the_Americas',
    'rodriguez': 'Mexico_Hermanos_Rodriguez',
    'interlagos': 'Brazil_Jose_Carlos_Pace',
    'yas_marina': 'UAE_Abu_Dhabi_Yas_Marina',
    'red_bull_ring': 'Austria_Red_Bull_Ring',
    'las_vegas': 'USA_Las_Vegas_Strip'
  };
  
  // Get the file name or use a default
  const fileName = circuitToFileMap[circuitId] || 'Australia_Albert_Park';
  
  // Return the full URL to the image
  return `https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/refs/heads/master/F1%20Race%20Tracks/${fileName}.png`;
};

export default function Races() {
  const { state, fetchRaceSchedule } = useF1();
  const { raceSchedule, loading } = state;
  const [tab, setTab] = useState("all");

  React.useEffect(() => {
    if (!raceSchedule.length) fetchRaceSchedule();
  }, []);

  const [expandedRace, setExpandedRace] = useState<string | null>(null);

  const toggleRaceDetails = (raceId: string) => {
    setExpandedRace(expandedRace === raceId ? null : raceId);
  };

  // Filter races based on tab selection
  const filteredRaces = () => {
    switch (tab) {
      case "upcoming":
        return races.filter(race => race.status === "Upcoming");
      case "completed":
        return races.filter(race => race.status === "Completed");
      default:
        return races;
    }
  };

  // Helper function to get formatted location
  const getLocationString = (race: typeof races[0]) => {
    if (race.Circuit?.Location) {
      return `${race.Circuit.Location.locality}, ${race.Circuit.Location.country}`;
    }
    return "Location TBA";
  };
  
  return (
    <div className="space-y-12">
      <HeroHeader 
        title="Race"
        titleHighlight="Calendar"
        subtitle="Follow the complete 2025 Formula 1 season race schedule"
        badgeText="2025 SEASON"
        badgeIcon={<Calendar className="h-4 w-4" />}
        imageUrl="https://raw.githubusercontent.com/Sumeet-162/f1Images/refs/heads/main/calender1.jpg"
        metaItems={[
          { icon: <Flag className="h-4 w-4" />, text: "24 Grand Prix" },
          { icon: <MapPin className="h-4 w-4" />, text: "21 Countries" },
          { icon: <Timer className="h-4 w-4" />, text: "March - December" }
        ]}
      />

      <div className="container mx-auto px-4">
        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger 
              value="all" 
              onClick={() => setTab("all")}
              className={tab === "all" ? "bg-ferrari-red text-white" : ""}
            >
              All Races
            </TabsTrigger>
            <TabsTrigger 
              value="upcoming" 
              onClick={() => setTab("upcoming")}
              className={tab === "upcoming" ? "bg-ferrari-red text-white" : ""}
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger 
              value="completed" 
              onClick={() => setTab("completed")}
              className={tab === "completed" ? "bg-ferrari-red text-white" : ""}
            >
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            {/* Race Cards */}
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-0">
            {/* Upcoming races content */}
          </TabsContent>
          
          <TabsContent value="completed" className="mt-0">
            {/* Completed races content */}
          </TabsContent>
        </Tabs>

        {/* Race Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-64 w-full" />
            ))
          ) : (
            filteredRaces().map(race => (
              <motion.div 
                key={race.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-1 w-full" style={{ backgroundColor: race.status === "Completed" ? "#6E6E6E" : "#DC0000" }}></div>
                  
                  {/* Track Image */}
                  <div className="relative w-full h-36 overflow-hidden">
                    <img 
                      src={getTrackImageUrl(race.Circuit.circuitId)}
                      alt={`${race.Circuit.circuitName} layout`}
                      className="w-full h-full object-contain bg-muted/30 p-2"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/refs/heads/master/F1%20Race%20Tracks/Australia_Albert_Park.png";
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/70 to-transparent h-8"></div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className={`mb-2 ${race.status === "Upcoming" ? "bg-ferrari-red" : "bg-muted"} text-white border-none`}>
                          {race.status}
                            </Badge>
                        <CardTitle>{race.raceName}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {race.Circuit.circuitName} <span className="mx-1">•</span> {getLocationString(race)}
                        </CardDescription>
                          </div>
                      <div className="bg-muted text-foreground font-semibold rounded-full h-10 w-10 flex items-center justify-center text-sm">
                        {race.round}
                                          </div>
                                        </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{race.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{race.time || "TBD"}</span>
                                      </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="ghost" 
                      className="w-full flex justify-between items-center text-sm"
                      onClick={() => toggleRaceDetails(race.id)}
                    >
                      {expandedRace === race.id ? "Hide Details" : "Show Details"}
                      {expandedRace === race.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                  </CardFooter>

                  {expandedRace === race.id && (
                    <div className="px-6 pb-6">
                      <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">First Practice:</span>
                          <span className="text-sm">{race.sessions?.practice1 || "TBD"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Qualifying:</span>
                          <span className="text-sm">{race.sessions?.qualifying || "TBD"}</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span className="text-sm">Race Start:</span>
                          <span className="text-sm">{race.time || "TBD"}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))
              )}
            </div>
          </div>
        </div>
  );
} 