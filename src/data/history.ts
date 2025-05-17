
interface HistoryEvent {
  id: number;
  year: number;
  title: string;
  description: string;
  image?: string;
}

export const historyEvents: HistoryEvent[] = [
  {
    id: 1,
    year: 1950,
    title: "Ferrari's F1 Debut",
    description: "Ferrari competed in the inaugural Formula 1 World Championship race, the 1950 Monaco Grand Prix, with drivers Alberto Ascari, Raymond Sommer, and Luigi Villoresi.",
    image: "https://images.unsplash.com/photo-1631799754915-d9eb861626d8?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    year: 1952,
    title: "First Drivers' Championship",
    description: "Alberto Ascari secured Ferrari's first F1 Drivers' Championship, winning six consecutive races in the Ferrari 500.",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    year: 1953,
    title: "Back-to-Back Titles",
    description: "Ascari won his second consecutive Drivers' Championship with Ferrari, cementing the team's early dominance in Formula 1.",
    image: "https://images.unsplash.com/photo-1503945839639-aea48daa250f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    year: 1961,
    title: "Phil Hill's Championship",
    description: "Phil Hill became the first American F1 World Champion, driving the Ferrari 156 'Sharknose'.",
    image: "https://images.unsplash.com/photo-1515096788709-a3cf4ce0a4a6?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    year: 1964,
    title: "John Surtees Makes History",
    description: "John Surtees became the only person to win World Championships on both two wheels and four, claiming the F1 title with Ferrari.",
    image: "https://images.unsplash.com/photo-1518410240146-36aeeed0e4f9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 6,
    year: 1975,
    title: "Lauda's First Championship",
    description: "Niki Lauda won his first of two championships with Ferrari, marking the team's return to dominance.",
    image: "https://images.unsplash.com/photo-1607962347726-9a5d0ac13069?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 7,
    year: 1977,
    title: "Lauda's Return to Glory",
    description: "After his near-fatal crash at the Nürburgring in 1976, Lauda returned to win his second championship with Ferrari.",
    image: "https://images.unsplash.com/photo-1593800026667-ddee5cf4282b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 8,
    year: 1979,
    title: "Scheckter's Championship",
    description: "Jody Scheckter won the Drivers' Championship, which would be Ferrari's last until the Schumacher era began in the 2000s.",
    image: "https://images.unsplash.com/photo-1610650243827-f8e336da50cd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 9,
    year: 2000,
    title: "Schumacher Era Begins",
    description: "Michael Schumacher won Ferrari's first Drivers' Championship in 21 years, beginning an unprecedented period of dominance.",
    image: "https://images.unsplash.com/photo-1617886322168-72b886573c35?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 10,
    year: 2000,
    title: "Constructors' Title Returns",
    description: "Ferrari won the Constructors' Championship, starting a record streak of six consecutive titles.",
    image: "https://images.unsplash.com/photo-1514063257623-83e9082a62c3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 11,
    year: 2001,
    title: "Back-to-Back Championships",
    description: "Schumacher and Ferrari defended both the Drivers' and Constructors' titles with dominant performances.",
    image: "https://images.unsplash.com/photo-1514995669114-6081e934b693?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 12,
    year: 2002,
    title: "Complete Dominance",
    description: "Ferrari's most dominant season, with Schumacher winning the championship with six races to spare.",
    image: "https://images.unsplash.com/photo-1572205091970-8044ab5f2316?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 13,
    year: 2003,
    title: "Hard-Fought Victory",
    description: "In a more competitive season, Ferrari and Schumacher still managed to secure both championships.",
    image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 14,
    year: 2004,
    title: "Record-Breaking Season",
    description: "Schumacher won 13 races in a season, setting a record that would stand for 10 years.",
    image: "https://images.unsplash.com/photo-1511882793676-5776206e8e5b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 15,
    year: 2007,
    title: "Räikkönen's Championship",
    description: "In his first season with Ferrari, Kimi Räikkönen won the Drivers' Championship by one point in a dramatic finale.",
    image: "https://images.unsplash.com/photo-1529329636311-5f1cf2d760cb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 16,
    year: 2008,
    title: "Constructors' Champions Again",
    description: "Ferrari won their 16th Constructors' Championship, though Lewis Hamilton narrowly beat Felipe Massa to the Drivers' title.",
    image: "https://images.unsplash.com/photo-1546469765-fcaee9a42a08?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 17,
    year: 2017,
    title: "Return to Competitiveness",
    description: "Sebastian Vettel led Ferrari's championship challenge, finishing second in the standings and bringing Ferrari back to the front of the grid.",
    image: "https://images.unsplash.com/photo-1542323029206-e9a77fc48178?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 18,
    year: 2019,
    title: "Charles Leclerc Joins Ferrari",
    description: "Young star Charles Leclerc joined Ferrari and immediately impressed, winning races at Spa and Monza and securing more pole positions than any other driver that season.",
    image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 19,
    year: 2022,
    title: "Ferrari's Resurgence",
    description: "With the new regulations, Ferrari returned to winning ways with Charles Leclerc and Carlos Sainz, marking a new competitive era for the team.",
    image: "https://images.unsplash.com/photo-1518169998863-07b9ca9294ea?q=80&w=1200&auto=format&fit=crop"
  }
];
