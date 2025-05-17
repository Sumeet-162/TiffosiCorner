
import { historyEvents } from "@/data/history";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const History = () => {
  // Group events by decade
  const eventsByDecade: Record<string, typeof historyEvents> = {};
  
  historyEvents.forEach(event => {
    const decade = `${Math.floor(event.year / 10) * 10}s`;
    if (!eventsByDecade[decade]) {
      eventsByDecade[decade] = [];
    }
    eventsByDecade[decade].push(event);
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">Ferrari F1 History</h1>
        <p className="text-lg text-muted-foreground">
          The legendary journey of Scuderia Ferrari in Formula 1
        </p>
      </motion.div>

      {/* Hero image */}
      <motion.div 
        className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ferrari-red/80 to-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1665494005013-3d2da9482063?q=80&w=2000&auto=format&fit=crop" 
          alt="Ferrari F1 hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20">
          <h2 className="text-white text-2xl md:text-4xl font-bold">From 1950 to Today</h2>
          <p className="text-white/90 mt-2 max-w-xl">
            The only team to have competed in every season of the Formula 1 World Championship since its inception in 1950.
          </p>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative ml-4 md:ml-0">
        {/* Timeline line for larger screens */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted transform md:-translate-x-1/2"></div>
        
        {Object.entries(eventsByDecade).map(([decade, events], decadeIndex) => (
          <motion.div 
            key={decade} 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div 
              className="flex md:justify-center items-center relative mb-8"
              variants={fadeIn}
            >
              <div className="bg-ferrari-red text-white py-2 px-4 rounded-full font-bold text-lg md:text-xl shadow-lg">
                {decade}
              </div>
            </motion.div>
            
            <div className="space-y-16 relative">
              {events.map((event, index) => (
                <motion.div 
                  key={event.id}
                  variants={fadeIn}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-ferrari-red rounded-full transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Year column */}
                  <div className={`hidden md:block w-1/2 ${
                    index % 2 === 0 ? "text-right pr-8" : "pl-8"
                  }`}>
                    <div className="inline-flex items-center">
                      <Calendar className={`h-5 w-5 ${index % 2 === 0 ? "order-2 ml-2" : "order-1 mr-2"}`} />
                      <span className="text-2xl font-bold ferrari-text-gradient">{event.year}</span>
                    </div>
                  </div>
                  
                  {/* Content column */}
                  <div className={`pl-8 md:pl-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"
                  }`}>
                    <span className="md:hidden text-xl font-bold ferrari-text-gradient flex items-center mb-2">
                      <Calendar className="h-5 w-5 mr-2" />
                      {event.year}
                    </span>
                    
                    <div className="bg-card rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
                      {event.image && (
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <h3 className="text-xl font-bold absolute bottom-3 left-4 text-white">{event.title}</h3>
                        </div>
                      )}
                      <div className="p-4">
                        {!event.image && <h3 className="text-xl font-bold mb-2">{event.title}</h3>}
                        <p className="text-muted-foreground text-sm">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legacy section */}
      <motion.div 
        className="bg-card rounded-lg shadow-sm p-8 mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ferrari's F1 Legacy</h2>
        <p className="text-lg mb-6">
          With over 70 years in Formula 1, Ferrari has become synonymous with the sport itself. As the oldest and most successful team, Ferrari has created a legacy that extends beyond racing into global culture. The passion of the tifosi (Ferrari fans), the iconic Prancing Horse emblem, and the unmistakable Ferrari red have all become integral parts of Formula 1's identity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          <motion.div 
            className="bg-muted p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl font-bold mb-1 ferrari-text-gradient">242</div>
            <div>Race Victories</div>
          </motion.div>
          <motion.div 
            className="bg-muted p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl font-bold mb-1 ferrari-text-gradient">244</div>
            <div>Pole Positions</div>
          </motion.div>
          <motion.div 
            className="bg-muted p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl font-bold mb-1 ferrari-text-gradient">788</div>
            <div>Podium Finishes</div>
          </motion.div>
          <motion.div 
            className="bg-muted p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl font-bold mb-1 ferrari-text-gradient">254</div>
            <div>Fastest Laps</div>
          </motion.div>
        </div>
        <p>
          From Alberto Ascari to Michael Schumacher, and now with Charles Leclerc and Carlos Sainz, Ferrari continues to inspire generations of racing fans worldwide. The team's commitment to excellence, innovation, and the pursuit of victory embodies the true spirit of Formula 1 racing.
        </p>
      </motion.div>
    </div>
  );
};

export default History;
