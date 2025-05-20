import { historyEvents } from "@/data/history";
import { motion } from "framer-motion";
import { Calendar, Trophy, Flag, Archive, Star, User, ChevronRight, Calendar as CalendarIcon, Trophy as TrophyIcon, Medal, BadgeCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import HeroHeader from "@/components/HeroHeader";
import { Link } from 'react-router-dom';

const History = () => {
  const [selectedEvent, setSelectedEvent] = useState<typeof historyEvents[0] | null>(null);
  
  // Group events by decade and deduplicate by year and title
  const eventsByDecade = historyEvents.reduce((acc, event) => {
    const decade = `${Math.floor(event.year / 10) * 10}s`;
    if (!acc[decade]) {
      acc[decade] = [];
    }
    
    // Check if there's already an event with the same year and similar title
    const duplicate = acc[decade].find(e => 
      e.year === event.year && 
      (e.title.includes(event.title.substring(0, 10)) || event.title.includes(e.title.substring(0, 10)))
    );
    
    if (!duplicate) {
      acc[decade].push(event);
    }
    
    return acc;
  }, {} as Record<string, typeof historyEvents>);
  
  // Filter events for championship years
  const getChampionshipEvents = () => {
    return historyEvents.filter(event => 
      event.title.toLowerCase().includes('championship') || 
      event.description.toLowerCase().includes('championship')
    );
  };
  
  // Filter events for iconic moments
  const getIconicMoments = () => {
    return historyEvents.filter(event => 
      event.title.toLowerCase().includes('driver') || 
      event.description.toLowerCase().includes('driver') ||
      event.title.toLowerCase().includes('champion') ||
      event.description.toLowerCase().includes('champion')
    );
  };

  // Sort decades chronologically
  const sortedDecades = Object.keys(eventsByDecade).sort((a, b) => {
    const aYear = parseInt(a);
    const bYear = parseInt(b);
    return aYear - bYear;
  });
  
  // Category badges for events
  const getEventCategory = (event: typeof historyEvents[0]) => {
    if (event.title.toLowerCase().includes('championship') || 
        event.description.toLowerCase().includes('championship')) {
      return "Championship";
    } else if (event.title.toLowerCase().includes('driver') || 
               event.description.toLowerCase().includes('driver')) {
      return "Driver";
    } else {
      return "Historic";
    }
  };

  // Get championship and iconic moment events
  const championshipEvents = getChampionshipEvents();
  const iconicMoments = getIconicMoments();

  // Render timeline for a set of events
  const renderTimeline = (events: typeof historyEvents) => {
    // Group events by decade
    const eventsByDecade: Record<string, typeof historyEvents> = {};
    events.forEach(event => {
    const decade = `${Math.floor(event.year / 10) * 10}s`;
    if (!eventsByDecade[decade]) {
      eventsByDecade[decade] = [];
    }
    eventsByDecade[decade].push(event);
  });

    // Sort decades
    const sortedDecades = Object.keys(eventsByDecade).sort((a, b) => {
      return parseInt(a) - parseInt(b);
    });

  return (
      <div className="py-8">
        {sortedDecades.map(decade => {
          // Sort events by year
          const sortedEvents = [...eventsByDecade[decade]].sort((a, b) => a.year - b.year);
          
          return (
            <div key={decade} className="mb-16">
              {/* Decade Title */}
              <div className="mb-8 text-center">
                <span className="text-3xl font-bold font-mono">
                  <span className="text-ferrari-red">{decade.replace('s', '')}</span>
                  <span className="text-white">s</span>
                </span>
                <Separator className="mt-4 bg-gradient-to-r from-transparent via-ferrari-red to-transparent h-0.5 w-32 mx-auto" />
          </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-ferrari-red via-ferrari-red/50 to-ferrari-red/20 z-0"></div>

                <div className="space-y-12">
                  {sortedEvents.map((event, index) => {
                    const eventCategory = getEventCategory(event);
                    
                    return (
                      <div key={event.id} className="relative">
                        {/* Event indicator */}
                        <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-ferrari-red z-10 transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
                          <div className="absolute inset-0 bg-ferrari-red rounded-full animate-ping opacity-30 duration-1000"></div>
        </div>
        
                        {/* Event content */}
                        <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 ${index % 2 === 0 ? "" : "md:grid-flow-dense"}`}>
                          {/* Content */}
                          <div className={`bg-card p-4 sm:p-6 rounded-xl shadow-md hover:shadow-ferrari-red/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"}`} 
                               onClick={() => setSelectedEvent(event)}>
                            <div className="flex flex-col h-full">
                              <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                                <Badge className="bg-ferrari-red text-white border-none font-mono">
                                  {event.year}
                                </Badge>
                                
                                {eventCategory === "Championship" ? (
                                  <Badge className="bg-yellow-500/80 text-black border-none">
                                    <Trophy className="h-3 w-3 mr-1" />
                                    Championship
                                  </Badge>
                                ) : eventCategory === "Driver" ? (
                                  <Badge className="bg-blue-500/80 text-white border-none">
                                    <User className="h-3 w-3 mr-1" />
                                    Driver
                                  </Badge>
                                ) : (
                                  <Badge className="bg-green-500/80 text-white border-none">
                                    <Star className="h-3 w-3 mr-1" />
                                    Historic
            </Badge>
                                )}
                              </div>
                              
                              <h3 className="text-lg sm:text-xl font-bold mb-2">{event.title}</h3>
                              
                              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                                <img 
                                  src={event.image || "https://www.formula1.com/content/dam/fom-website/manual/Misc/2020/70AnniversaryGPWeek/Ferrari/GettyImages-943746.jpg.transform/9col-retina/image.jpg"} 
                                  alt={event.title} 
                                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                              </div>
                              
                              <p className="text-muted-foreground text-sm sm:text-base line-clamp-3 mb-4">{event.description}</p>
                              
                              <Button 
                                variant="outline"
                                size="sm" 
                                className="mt-auto self-end text-ferrari-red hover:bg-ferrari-red/10 border-ferrari-red/20"
                              >
                                Read more <ChevronRight className="h-3 w-3 ml-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
              </div>
                    );
                  })}
              </div>
              </div>
            </div>
          );
        })}
        </div>
    );
  };

  return (
    <div className="space-y-12">
      <HeroHeader 
        title="Ferrari F1"
        titleHighlight="History"
        subtitle="The legendary journey of Scuderia Ferrari in Formula 1 from 1950 to today"
        badgeText="LEGENDARY HERITAGE"
        badgeIcon={<Archive className="h-4 w-4" />}
        imageUrl="https://raw.githubusercontent.com/Sumeet-162/f1Images/refs/heads/main/history1.jpg"
        metaItems={[
          { icon: <Trophy className="h-4 w-4" />, text: "31 World Championships" },
          { icon: <Flag className="h-4 w-4" />, text: "242 Race Victories" },
          { icon: <Calendar className="h-4 w-4" />, text: "74 Years in F1" }
        ]}
      />

      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The Ferrari Legacy</h2>
          <p className="text-muted-foreground text-lg">
            Scuderia Ferrari is the only team to have competed in every Formula 1 season since the 
            championship began in 1950. With 31 World Championships and over 240 race victories, Ferrari 
            has etched its name in motorsport history as the most successful and iconic Formula 1 team.
              </p>
            </div>
            
        {/* Championship Years Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Trophy className="h-8 w-8 text-ferrari-red mr-4" />
            <h2 className="text-3xl font-bold">Championship Years</h2>
              </div>
          <Separator className="mb-10 bg-gradient-to-r from-ferrari-red via-transparent to-transparent h-0.5" />
          
          {championshipEvents.length > 0 ? (
            renderTimeline(championshipEvents)
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No championship events found.</p>
            </div>
          )}
        </div>

        {/* Iconic Moments Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Star className="h-8 w-8 text-ferrari-red mr-4" />
            <h2 className="text-3xl font-bold">Iconic Moments</h2>
          </div>
          <Separator className="mb-10 bg-gradient-to-r from-ferrari-red via-transparent to-transparent h-0.5" />
          
          {iconicMoments.length > 0 ? (
            renderTimeline(iconicMoments)
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No iconic moments found.</p>
            </div>
          )}
          
          {/* Button to view dedicated Ferrari Drivers page */}
          <div className="text-center mt-12">
            <Button 
              className="bg-ferrari-red hover:bg-red-700"
              asChild
              onClick={() => window.scrollTo(0, 0)}
            >
              <Link to="/ferrari-drivers">
                <User className="mr-2 h-5 w-5" />
                Explore All Ferrari Drivers
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Event Detail Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <div>
              <div className="relative">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={selectedEvent.image || "https://www.formula1.com/content/dam/fom-website/manual/Misc/2020/70AnniversaryGPWeek/Ferrari/GettyImages-943746.jpg.transform/9col-retina/image.jpg"} 
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-ferrari-red text-white border-none mb-2 font-mono">
                    {selectedEvent.year}
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{selectedEvent.title}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <BadgeCheck className="h-5 w-5 text-ferrari-red mr-2" />
                      The Story
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedEvent.description}</p>
                    
                    <div className="mt-6 flex gap-4">
                      <Button 
                        variant="default" 
                        className="bg-ferrari-red hover:bg-red-700"
                        onClick={() => setSelectedEvent(null)}
                      >
                        Back to Timeline
                      </Button>
                      {getEventCategory(selectedEvent) === "Driver" && (
                        <Button
                          variant="outline"
                          asChild
                        >
                          <Link to="/ferrari-drivers">
                            View Driver Profiles
                          </Link>
                        </Button>
                      )}
                    </div>
                    </div>
                    
                  <div className="col-span-12 md:col-span-4">
                    <div className="bg-muted/20 p-4 rounded-lg border border-muted">
                      <h3 className="font-bold mb-4 flex items-center">
                        <Calendar className="h-4 w-4 text-ferrari-red mr-2" />
                        Event Details
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">Year</span>
                          <span className="font-mono font-bold">{selectedEvent.year}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">Category</span>
                          <Badge 
                            className={
                              getEventCategory(selectedEvent) === "Championship" 
                                ? "bg-yellow-500/80 text-black" 
                                : getEventCategory(selectedEvent) === "Driver"
                                ? "bg-blue-500/80 text-white"
                                : "bg-green-500/80 text-white"
                            }
                          >
                            {getEventCategory(selectedEvent)}
                          </Badge>
                          </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Era</span>
                          <span>{`${Math.floor(selectedEvent.year / 10) * 10}s`}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
          )}
        </DialogContent>
      </Dialog>
      </div>
  );
};

export default History;
