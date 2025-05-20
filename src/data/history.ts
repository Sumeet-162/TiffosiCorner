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
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/heritage/heritageDefault/GettyImages-1064702100.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 2,
    year: 1952,
    title: "First Drivers' Championship",
    description: "Alberto Ascari secured Ferrari's first F1 Drivers' Championship, winning six consecutive races in the Ferrari 500.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2021/70-Anniversary-of-F1/Alberto%20Ascari.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 3,
    year: 1953,
    title: "Back-to-Back Titles",
    description: "Ascari won his second consecutive Drivers' Championship with Ferrari, cementing the team's early dominance in Formula 1.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/heritage/heritageDefault/GettyImages-466587983.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 4,
    year: 1961,
    title: "Phil Hill's Championship",
    description: "Phil Hill became the first American F1 World Champion, driving the Ferrari 156 'Sharknose'.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2020/70AnniversaryGPWeek/Ferrari/GettyImages-1209339.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 5,
    year: 1964,
    title: "John Surtees Makes History",
    description: "John Surtees became the only person to win World Championships on both two wheels and four, claiming the F1 title with Ferrari.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/March/Surtees.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 6,
    year: 1975,
    title: "Lauda's First Championship",
    description: "Niki Lauda won his first of two championships with Ferrari, marking the team's return to dominance.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/May/GettyImages-576849901.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 7,
    year: 1977,
    title: "Lauda's Return to Glory",
    description: "After his near-fatal crash at the Nürburgring in 1976, Lauda returned to win his second championship with Ferrari.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/May/GettyImages-513019356.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 8,
    year: 1979,
    title: "Scheckter's Championship",
    description: "Jody Scheckter won the Drivers' Championship, which would be Ferrari's last until the Schumacher era began in the 2000s.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2020/70AnniversaryGPWeek/Ferrari/GettyImages-91515258.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 9,
    year: 2000,
    title: "Schumacher Era Begins",
    description: "Michael Schumacher won Ferrari's first Drivers' Championship in 21 years, beginning an unprecedented period of dominance.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2020/70AnniversaryGPWeek/Ferrari/GettyImages-943746.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 10,
    year: 2000,
    title: "Constructors' Title Returns",
    description: "Ferrari won the Constructors' Championship, starting a record streak of six consecutive titles.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/Michael/GettyImages-3236514.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 11,
    year: 2001,
    title: "Back-to-Back Championships",
    description: "Schumacher and Ferrari defended both the Drivers' and Constructors' titles with dominant performances.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2020/70AnniversaryGPWeek/Ferrari/GettyImages-1296073.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 12,
    year: 2002,
    title: "Complete Dominance",
    description: "Ferrari's most dominant season, with Schumacher winning the championship with six races to spare.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/September/GettyImages-1193892.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 13,
    year: 2003,
    title: "Hard-Fought Victory",
    description: "In a more competitive season, Ferrari and Schumacher still managed to secure both championships.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/Michael/GettyImages-2821044.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 14,
    year: 2004,
    title: "Record-Breaking Season",
    description: "Schumacher won 13 races in a season, setting a record that would stand for 10 years.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/September/GettyImages-51269188.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 15,
    year: 2007,
    title: "Räikkönen's Championship",
    description: "In his first season with Ferrari, Kimi Räikkönen won the Drivers' Championship by one point in a dramatic finale.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2020/70AnniversaryGPWeek/Ferrari/GettyImages-77486412.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 16,
    year: 2008,
    title: "Constructors' Champions Again",
    description: "Ferrari won their 16th Constructors' Championship, though Lewis Hamilton narrowly beat Felipe Massa to the Drivers' title.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2020/70AnniversaryGPWeek/Ferrari/GettyImages-83448110.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 17,
    year: 2017,
    title: "Return to Competitiveness",
    description: "Sebastian Vettel led Ferrari's championship challenge, finishing second in the standings and bringing Ferrari back to the front of the grid.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/September/GettyImages-643268886.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 18,
    year: 2019,
    title: "Charles Leclerc Joins Ferrari",
    description: "Young star Charles Leclerc joined Ferrari and immediately impressed, winning races at Spa and Monza and securing more pole positions than any other driver that season.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/September/Italy/GettyImages-1171019945.jpg.transform/9col-retina/image.jpg"
  },
  {
    id: 19,
    year: 2022,
    title: "Ferrari's Resurgence",
    description: "With the new regulations, Ferrari returned to winning ways with Charles Leclerc and Carlos Sainz, marking a new competitive era for the team.",
    image: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022/Bahrain/RaceSunday/GettyImages-1239076144.jpg.transform/9col-retina/image.jpg"
  }
];
