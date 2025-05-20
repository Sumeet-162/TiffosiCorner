import React from 'react';
import { useF1 } from '../context/F1Context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Skeleton } from '../components/ui/skeleton';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { teams } from '@/data/teams';
import { motion } from 'framer-motion';
import { Car, Flag, Users, Award, Star } from 'lucide-react';
import HeroHeader from '@/components/HeroHeader';

export default function Constructors() {
  const { state, fetchConstructorStandings, fetchConstructorInfo, fetchConstructorStats } = useF1();
  const { constructorStandings, selectedConstructor, constructorStats, loading } = state;

  React.useEffect(() => {
    if (!constructorStandings.length) fetchConstructorStandings();
  }, []);

  const handleConstructorClick = async (constructorId: string) => {
    await Promise.all([
      fetchConstructorInfo(constructorId),
      fetchConstructorStats(constructorId)
    ]);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-12">
      <HeroHeader 
        title="Formula 1"
        titleHighlight="Teams"
        subtitle="Discover the teams competing in the 2025 Formula 1 World Championship"
        badgeText="CONSTRUCTOR LINEUP"
        badgeIcon={<Car className="h-4 w-4" />}
        imageUrl="https://raw.githubusercontent.com/Sumeet-162/website-images/refs/heads/main/2025-ferrari-sf-25-f1-race-car_100956872.jpg"
        metaItems={[
          { icon: <Users className="h-4 w-4" />, text: "10 Teams" },
          { icon: <Flag className="h-4 w-4" />, text: "20 Drivers" },
          { icon: <Award className="h-4 w-4" />, text: "Constructor Championship" }
        ]}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-64 w-full" />
            ))
          ) : (
            constructorStandings.map(team => (
              <motion.div
                key={team.Constructor.constructorId}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: team.position * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-2 w-full" style={{ backgroundColor: team.Constructor.color }}></div>
                  <div className="relative h-40 bg-muted/40 flex items-center justify-center p-6">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundColor: team.Constructor.color }}></div>
                    <img
                      src={team.Constructor.logo}
                      alt={`${team.Constructor.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: team.Constructor.color }}
                      ></div>
                      <CardDescription>{team.Constructor.nationality}</CardDescription>
                    </div>
                    <CardTitle className={`text-2xl ${team.Constructor.name === 'Ferrari' ? 'text-ferrari-red' : ''}`}>
                      {team.Constructor.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2 text-center mb-4">
                      <div className="bg-muted p-2 rounded">
                        <p className="text-muted-foreground text-xs">Position</p>
                        <p className="font-bold text-lg">{team.position}</p>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <p className="text-muted-foreground text-xs">Points</p>
                        <p className="font-bold text-lg">{team.points}</p>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <p className="text-muted-foreground text-xs">Championships</p>
                        <p className="font-bold text-lg">{team.wins}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>{team.Constructor.shortName}</span>
                      </div>
                      <div>
                        {team.Constructor.drivers ? `Drivers: ${team.Constructor.drivers.join(', ')}` : 'Base: ' + (team.Constructor.baseLocation || 'Unknown')}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
} 