import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DriverCard from "@/components/DriverCard";
import TeamCard from "@/components/TeamCard";
import { drivers } from "@/data/drivers";
import { teams } from "@/data/teams";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Medal, BarChart3, Flag } from "lucide-react";
import HeroHeader from "@/components/HeroHeader";

const Standings = () => {
  const [activeTab, setActiveTab] = useState("drivers");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  return (
    <div className="space-y-12">
      <HeroHeader 
        title="Championship"
        titleHighlight="Standings"
        subtitle="Current Formula 1 championship standings for the 2025 season"
        badgeText="2025 STANDINGS"
        badgeIcon={<Trophy className="h-4 w-4" />}
        imageUrl="https://raw.githubusercontent.com/Sumeet-162/f1Images/refs/heads/main/standing3.jpg"
        metaItems={[
          { icon: <Medal className="h-4 w-4" />, text: "Driver Championship" },
          { icon: <Star className="h-4 w-4" />, text: "Constructor Championship" },
          { icon: <Flag className="h-4 w-4" />, text: "Points Updated After Each Race" }
        ]}
      />

      <div className="container mx-auto px-4">
        <Tabs defaultValue="drivers" className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <TabsList className="grid w-full sm:w-auto grid-cols-2">
            <TabsTrigger 
              value="drivers" 
                onClick={() => setActiveTab("drivers")}
                className="relative overflow-hidden"
            >
              <span className="relative z-10">Driver Standings</span>
              {activeTab === "drivers" && (
                <motion.div 
                    className="absolute inset-0 bg-secondary"
                  layoutId="tab-background"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </TabsTrigger>
            <TabsTrigger 
              value="constructors" 
                onClick={() => setActiveTab("constructors")}
                className="relative overflow-hidden"
            >
              <span className="relative z-10">Constructor Standings</span>
              {activeTab === "constructors" && (
                <motion.div 
                    className="absolute inset-0 bg-secondary"
                  layoutId="tab-background"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </TabsTrigger>
          </TabsList>
          
            <div className="flex space-x-2 mt-4 sm:mt-0">
              <button
              onClick={() => setViewMode("cards")}
                className={`p-2 rounded-md ${viewMode === "cards" ? "bg-secondary" : "bg-background"}`}
              aria-label="View as cards"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </button>
              <button
              onClick={() => setViewMode("table")}
                className={`p-2 rounded-md ${viewMode === "table" ? "bg-secondary" : "bg-background"}`}
              aria-label="View as table"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"></path>
                </svg>
              </button>
          </div>
        </div>
        
          <TabsContent value="drivers" className="mt-6">
          {viewMode === "cards" ? (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {drivers.map(driver => {
                  const teamData = teams.find(t => t.name === driver.team);
                          return (
                    <DriverCard
                              key={driver.id}
                      name={driver.name}
                      team={driver.team}
                      number={driver.number}
                      points={driver.points}
                      position={driver.position}
                      isFerrariDriver={driver.isFerrariDriver}
                      country={driver.country}
                      teamColor={teamData?.color || "#ccc"}
                      wins={driver.wins}
                    />
                          );
                        })}
              </motion.div>
            ) : (
              <div className="overflow-x-auto rounded-lg border shadow-sm">
              <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-12 text-center">Pos</TableHead>
                    <TableHead>Driver</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead className="text-center">Points</TableHead>
                    <TableHead className="text-center">Wins</TableHead>
                      <TableHead className="text-center">Poles</TableHead>
                    <TableHead className="text-center">Podiums</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                    {drivers.map(driver => {
                    const teamData = teams.find(t => t.name === driver.team);
                    return (
                        <TableRow key={driver.id} className={driver.isFerrariDriver ? "bg-ferrari-red/5" : ""}>
                          <TableCell className="font-bold text-center">{driver.position}</TableCell>
                        <TableCell>
                            <div className="flex items-center">
                            <div 
                                className="w-1 h-12 rounded mr-3 hidden sm:block" 
                              style={{ backgroundColor: teamData?.color || "#ccc" }}
                            />
                            <div>
                              <div className="font-medium">{driver.name}</div>
                                <div className="text-xs text-muted-foreground">{driver.country}</div>
                                      </div>
                              <div className="ml-auto mr-4 text-4xl font-bold text-muted-foreground/20">{driver.number}</div>
                            </div>
                                </TableCell>
                                <TableCell>
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-3 h-3 rounded-full" 
                                style={{ backgroundColor: teamData?.color || "#ccc" }}
                              ></div>
                                    {driver.team}
                          </div>
                        </TableCell>
                          <TableCell className={`font-bold text-center ${driver.isFerrariDriver ? "text-ferrari-red" : ""}`}>{driver.points}</TableCell>
                        <TableCell className="text-center">{driver.wins}</TableCell>
                          <TableCell className="text-center">{driver.poles || 0}</TableCell>
                        <TableCell className="text-center">{driver.podiums}</TableCell>
                      </TableRow>
                    );
                    })}
                </TableBody>
              </Table>
            </div>
          )}
        </TabsContent>
        
          <TabsContent value="constructors" className="mt-6">
          {viewMode === "cards" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {teams.map(team => (
                  <TeamCard
                          key={team.id}
                  name={team.name}
                  points={team.points}
                  position={team.position}
                  color={team.color}
                    isFerrari={team.name === "Ferrari"}
                    country={team.country}
                  logo={team.logo}
                  />
                ))}
                          </div>
            ) : (
              <div className="overflow-x-auto rounded-lg border shadow-sm">
              <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                    <TableHead className="w-12 text-center">Pos</TableHead>
                    <TableHead>Team</TableHead>
                      <TableHead>Country</TableHead>
                    <TableHead className="text-center">Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                    {teams.map(team => (
                      <TableRow key={team.id} className={team.name === "Ferrari" ? "bg-ferrari-red/5" : ""}>
                        <TableCell className="font-bold text-center">{team.position}</TableCell>
                      <TableCell>
                                  <div className="flex items-center gap-3">
                            <div className="w-1 h-10 rounded-full" style={{ backgroundColor: team.color }}></div>
                                    <div>
                                      <div className="font-medium">{team.name}</div>
                                    </div>
                                  </div>
                                </TableCell>
                        <TableCell>{team.country}</TableCell>
                        <TableCell className={`font-bold text-center ${team.name === "Ferrari" ? "text-ferrari-red" : ""}`}>{team.points}</TableCell>
                              </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          )}
        </TabsContent>
      </Tabs>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-card shadow-sm rounded-lg p-6 border">
            <h2 className="text-2xl font-bold mb-4">Ferrari's Championship Progress</h2>
          
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                {activeTab === "drivers" ? "Drivers' Championship" : "Constructors' Championship"}
            </h3>
            
            {activeTab === "drivers" ? (
                <div className="space-y-4">
                {drivers
                  .filter(driver => driver.isFerrariDriver)
                  .map(driver => (
                      <div key={driver.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                          <span className="font-medium">{driver.name}</span>
                        <span className="text-ferrari-red font-bold">{driver.points} pts</span>
                      </div>
                      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div 
                          className="h-full bg-ferrari-red"
                            style={{ width: `${(driver.points / 180) * 100}%` }}
                          ></div>
                          </div>
                        <div className="text-xs text-muted-foreground">
                          Current Position: {driver.position} 
                          {driver.position === 1 && " (Leader)"}
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
                <div className="space-y-4">
                {teams
                  .filter(team => team.name === "Ferrari")
                  .map(team => (
                      <div key={team.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                          <span className="font-medium">{team.name}</span>
                          <span className="text-ferrari-red font-bold">{team.points} pts</span>
                      </div>
                      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div 
                          className="h-full bg-ferrari-red"
                            style={{ width: `${(team.points / 300) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Current Position: {team.position}
                          {team.position === 1 && " (Leader)"}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          
            <div className="text-sm text-muted-foreground">
              <p>Standings updated after the Monaco Grand Prix, Round 6 of the 2025 season.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standings;
