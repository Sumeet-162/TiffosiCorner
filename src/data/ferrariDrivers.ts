export interface FerrariDriver {
  id: number;
  name: string;
  country: string;
  countryCode: string;
  years: string;
  championshipYears: string[];
  wins: number;
  podiums: number;
  poles: number;
  fastestLaps: number;
  racesWithFerrari: number;
  imageUrl: string;
  description: string;
  achievements: string[];
  era: string;
  nicknames?: string[];
  teamPrincipals?: string[];
  famousQuotes?: string[];
  carModels?: string[];
}

export const ferrariDrivers: FerrariDriver[] = [
  {
    id: 1,
    name: "Michael Schumacher",
    country: "Germany",
    countryCode: "DEU",
    years: "1996-2006",
    championshipYears: ["2000", "2001", "2002", "2003", "2004"],
    wins: 72,
    podiums: 116,
    poles: 58,
    fastestLaps: 53,
    racesWithFerrari: 180,
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022/Schumacher/GettyImages-2329517.jpg.transform/9col-retina/image.jpg",
    description: "Michael Schumacher is widely regarded as one of the greatest Formula One drivers of all time. He won an unprecedented seven World Drivers' Championship titles, five of which he won consecutively with Ferrari, helping transform the struggling team into the most successful team in Formula One history.",
    achievements: [
      "5 consecutive World Championships with Ferrari (2000-2004)",
      "Most race wins with a single team (72)",
      "Most podium finishes with Ferrari (116)",
      "Led Ferrari to 6 consecutive Constructors' Championships (1999-2004)",
      "Holds the record for most fastest laps in a single season (10 in 2004)"
    ],
    era: "Golden Era",
    nicknames: ["Schumi", "The Red Baron"],
    teamPrincipals: ["Jean Todt"],
    famousQuotes: ["I've always believed that you should never, ever give up and you should always keep fighting even when there's only a slightest chance."],
    carModels: ["F310", "F310B", "F300", "F399", "F1-2000", "F2001", "F2002", "F2003-GA", "F2004", "248 F1"]
  },
  {
    id: 2,
    name: "Niki Lauda",
    country: "Austria",
    countryCode: "AUT",
    years: "1974-1977",
    championshipYears: ["1975", "1977"],
    wins: 15,
    podiums: 32,
    poles: 23,
    fastestLaps: 15,
    racesWithFerrari: 57,
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/May/GettyImages-513019356.jpg.transform/9col-retina/image.jpg",
    description: "Niki Lauda was a three-time F1 World Champion and one of Ferrari's most iconic drivers. His incredible comeback from a near-fatal crash at the 1976 German Grand Prix is one of sport's greatest stories. He won two championships with Ferrari (1975, 1977) and was known for his methodical, precise driving style and technical expertise.",
    achievements: [
      "Won Ferrari's first Drivers' Championship in 11 years (1975)",
      "Returned to racing just 6 weeks after his life-threatening crash",
      "Won his second championship with Ferrari in 1977",
      "Helped develop Ferrari's cars with his technical knowledge",
      "Won 15 races for the Scuderia"
    ],
    era: "1970s Golden Era",
    nicknames: ["The Computer", "King Rat"],
    teamPrincipals: ["Enzo Ferrari"],
    famousQuotes: ["Happiness is the enemy. It weakens you. Suddenly, you have something to lose."]
  },
  {
    id: 3,
    name: "Alberto Ascari",
    country: "Italy",
    countryCode: "ITA",
    years: "1950-1953",
    championshipYears: ["1952", "1953"],
    wins: 13,
    podiums: 16,
    poles: 14,
    fastestLaps: 12,
    racesWithFerrari: 30,
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/heritage/heritageDefault/GettyImages-466587983.jpg.transform/9col-retina/image.jpg",
    description: "Alberto Ascari was Ferrari's first great Formula 1 champion, winning back-to-back titles in 1952 and 1953. He dominated the sport during those years, winning nearly every race he entered. Ascari was known for his smooth, precise driving style and incredible consistency.",
    achievements: [
      "First Ferrari driver to win the F1 World Championship",
      "Won Ferrari's first two F1 Constructors' Championships",
      "Won 9 consecutive races (1952-1953), a record that stood until 2013",
      "Won 13 out of 15 championship races entered in 1952-1953",
      "Last Italian driver to win the F1 World Championship"
    ],
    era: "Early F1 Era",
    teamPrincipals: ["Enzo Ferrari"],
    carModels: ["125 F1", "Ferrari 500"]
  },
  {
    id: 4,
    name: "Sebastian Vettel",
    country: "Germany",
    countryCode: "DEU",
    years: "2015-2020",
    championshipYears: [],
    wins: 14,
    podiums: 55,
    poles: 12,
    fastestLaps: 14,
    racesWithFerrari: 118,
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/September/GettyImages-643268886.jpg.transform/9col-retina/image.jpg",
    description: "Sebastian Vettel joined Ferrari in 2015 after winning four consecutive world championships with Red Bull Racing. While he didn't win a title with Ferrari, he came close in 2017 and 2018, finishing second in the championship both years. Vettel's time at Ferrari was marked by incredible qualifying performances and memorable victories.",
    achievements: [
      "14 race victories for Ferrari",
      "Finished 2nd in the Drivers' Championship in 2017 and 2018",
      "Led Ferrari to 2nd place in Constructors' Championships multiple times",
      "Memorable win at the 2019 Singapore Grand Prix",
      "Won Ferrari's 900th podium finish at the 2019 Mexican Grand Prix"
    ],
    era: "Modern Era",
    teamPrincipals: ["Maurizio Arrivabene", "Mattia Binotto"],
    carModels: ["SF15-T", "SF16-H", "SF70H", "SF71H", "SF90", "SF1000"]
  },
  {
    id: 5,
    name: "Kimi Räikkönen",
    country: "Finland",
    countryCode: "FIN",
    years: "2007-2009, 2014-2018",
    championshipYears: ["2007"],
    wins: 10,
    podiums: 52,
    poles: 7,
    fastestLaps: 14,
    racesWithFerrari: 151,
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2020/70AnniversaryGPWeek/Ferrari/GettyImages-77486412.jpg.transform/9col-retina/image.jpg",
    description: "Kimi Räikkönen, known as 'The Iceman,' won Ferrari's last Drivers' Championship in 2007 during his first season with the team. Known for his reserved personality, straightforward nature, and exceptional racing skill, Räikkönen had two stints with Ferrari and became one of their most beloved drivers.",
    achievements: [
      "Won the 2007 Drivers' Championship in his first season with Ferrari",
      "Contributed to Ferrari's 2007 Constructors' Championship",
      "Memorable win at the 2018 United States Grand Prix after a 113-race winless streak",
      "Second-longest serving Ferrari driver (151 races)",
      "9 race wins for Ferrari"
    ],
    era: "Modern Era",
    nicknames: ["The Iceman"],
    teamPrincipals: ["Jean Todt", "Stefano Domenicali", "Marco Mattiacci", "Maurizio Arrivabene"],
    famousQuotes: ["Leave me alone, I know what I'm doing."],
    carModels: ["F2007", "F2008", "F60", "F14 T", "SF15-T", "SF16-H", "SF70H", "SF71H"]
  },
  {
    id: 6,
    name: "Gilles Villeneuve",
    country: "Canada",
    countryCode: "CAN",
    years: "1977-1982",
    championshipYears: [],
    wins: 6,
    podiums: 13,
    poles: 2,
    fastestLaps: 8,
    racesWithFerrari: 67,
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/October/GettyImages-541307937.jpg.transform/9col-retina/image.jpg",
    description: "Gilles Villeneuve is remembered as one of Ferrari's most beloved drivers despite never winning a World Championship. His fearless driving style, incredible car control, and never-give-up attitude endeared him to fans worldwide. Enzo Ferrari once said that Villeneuve was the driver who most reminded him of the great Tazio Nuvolari.",
    achievements: [
      "Incredible victory at the 1979 Dutch Grand Prix",
      "Famous 'snowplow' victory at the 1981 Canadian Grand Prix",
      "Epic battle with René Arnoux at the 1979 French Grand Prix",
      "Helped Ferrari win the 1979 Constructors' Championship",
      "Finished second in the 1979 Drivers' Championship"
    ],
    era: "Late 1970s Era",
    nicknames: ["The Aviator", "The Little Prince"],
    teamPrincipals: ["Enzo Ferrari"],
    famousQuotes: ["I will drive flat out all the time, I love racing."],
    carModels: ["312T2", "312T3", "312T4", "312T5", "126C", "126C2"]
  },
  {
    id: 7,
    name: "Felipe Massa",
    country: "Brazil",
    countryCode: "BRA",
    years: "2006-2013",
    championshipYears: [],
    wins: 11,
    podiums: 36,
    poles: 15,
    fastestLaps: 14,
    racesWithFerrari: 139,
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/NOV19/RETRO/GettyImages-83448110.jpg.transform/9col-retina/image.jpg",
    description: "Felipe Massa spent eight seasons with Ferrari and came agonizingly close to winning the Drivers' Championship in 2008, losing to Lewis Hamilton by just one point in the final race. Known for his qualifying pace and consistency, Massa formed a successful partnership with Kimi Räikkönen and later Fernando Alonso.",
    achievements: [
      "Runner-up in the 2008 Drivers' Championship by just 1 point",
      "Contributed to Ferrari's 2007 and 2008 Constructors' Championships",
      "11 race victories with Ferrari",
      "Emotional win at the 2008 Brazilian Grand Prix",
      "15 pole positions for the Scuderia"
    ],
    era: "Post-Schumacher Era",
    teamPrincipals: ["Jean Todt", "Stefano Domenicali"],
    carModels: ["248 F1", "F2007", "F2008", "F60", "F10", "150° Italia", "F2012", "F138"]
  },
  {
    id: 8,
    name: "Fernando Alonso",
    country: "Spain",
    countryCode: "ESP",
    years: "2010-2014",
    championshipYears: [],
    wins: 11,
    podiums: 44,
    poles: 4,
    fastestLaps: 8,
    racesWithFerrari: 96,
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/News/2018/alonso.jpg.transform/9col-retina/image.jpg",
    description: "Fernando Alonso joined Ferrari in 2010 and came close to winning the championship in both 2010 and 2012, finishing runner-up both times. Known for his extraordinary race craft and ability to extract maximum performance from his car, Alonso is often credited with keeping Ferrari competitive during a period when they didn't have the fastest car.",
    achievements: [
      "Runner-up in the Drivers' Championship in 2010, 2012, and 2013",
      "Memorable victory at his home race in Spain in 2013",
      "Incredible win at the 2012 European Grand Prix from 11th on the grid",
      "Almost won the 2010 championship in his debut season with Ferrari",
      "11 race victories with Ferrari"
    ],
    era: "Post-Schumacher Era",
    nicknames: ["El Nano", "The Matador"],
    teamPrincipals: ["Stefano Domenicali", "Marco Mattiacci"],
    carModels: ["F10", "150° Italia", "F2012", "F138", "F14 T"]
  },
  {
    id: 9,
    name: "Charles Leclerc",
    country: "Monaco",
    countryCode: "MON",
    years: "2019-Present",
    championshipYears: [],
    wins: 7,
    podiums: 31,
    poles: 23,
    fastestLaps: 7,
    racesWithFerrari: 112,
    imageUrl: "https://media.formula1.com/content/dam/fom-website/drivers/2025Drivers/leclerc.jpg.img.1024.medium.jpg",
    description: "Charles Leclerc joined Ferrari in 2019 and quickly established himself as one of Formula 1's brightest talents. His incredible qualifying pace has earned him more pole positions than race wins, and his emotional first victories at Spa and Monza in 2019 cemented his place in Ferrari folklore. Leclerc represents Ferrari's hopes for a return to championship glory.",
    achievements: [
      "First Monegasque driver to win a Grand Prix",
      "Emotional back-to-back victories at Spa and Monza in 2019",
      "Became the first driver to win multiple races for Ferrari in 2022",
      "Youngest driver to race for Ferrari since 1961",
      "Most pole positions for Ferrari in a single season since 2004"
    ],
    era: "Current Era",
    nicknames: ["Il Predestinato (The Predestined One)"],
    teamPrincipals: ["Mattia Binotto", "Fred Vasseur"],
    carModels: ["SF90", "SF1000", "SF21", "F1-75", "SF-23", "SF-24"]
  },
  {
    id: 10,
    name: "Lewis Hamilton",
    country: "United Kingdom",
    countryCode: "GBR",
    years: "2024-Present",
    championshipYears: [],
    wins: 0,
    podiums: 1,
    poles: 0,
    fastestLaps: 0,
    racesWithFerrari: 7,
    imageUrl: "https://media.formula1.com/content/dam/fom-website/drivers/2025Drivers/hamilton.jpg.img.1024.medium.jpg",
    description: "Seven-time world champion Lewis Hamilton joined Ferrari in 2024, creating one of the most high-profile driver moves in F1 history. With a record-equaling seven world championships and more race wins than any other driver in the sport's history, Hamilton brings unparalleled experience and success to Ferrari. His partnership with the Scuderia represents Ferrari's ambition to return to the pinnacle of Formula 1.",
    achievements: [
      "First podium with Ferrari at the 2024 Australian Grand Prix",
      "Seven-time World Champion before joining Ferrari",
      "Holds records for most wins (103) and pole positions (104) in F1 history",
      "First and only Black driver in Formula 1 history",
      "Knighted for his services to motorsport"
    ],
    era: "Current Era",
    teamPrincipals: ["Fred Vasseur"],
    carModels: ["SF-24"]
  }
];

// Notable Ferrari F1 team principals
export const ferrariTeamPrincipals = [
  {
    name: "Enzo Ferrari",
    years: "1950-1988",
    achievements: "Founder of Scuderia Ferrari and Ferrari S.p.A., oversaw Ferrari's early F1 championships"
  },
  {
    name: "Jean Todt",
    years: "1993-2007",
    achievements: "Led Ferrari during the dominant Schumacher era, winning 14 championships in 14 years"
  },
  {
    name: "Stefano Domenicali",
    years: "2008-2014",
    achievements: "Managed Ferrari to the 2008 Constructors' Championship, the team's last title"
  },
  {
    name: "Maurizio Arrivabene",
    years: "2015-2019",
    achievements: "Led Ferrari's challenge against Mercedes during the Sebastian Vettel years"
  },
  {
    name: "Mattia Binotto",
    years: "2019-2022",
    achievements: "Guided Ferrari's technical resurgence through the 2022 regulation changes"
  },
  {
    name: "Fred Vasseur",
    years: "2023-Present",
    achievements: "Current team principal, oversaw Lewis Hamilton's signing for 2024"
  }
];

// Championship-winning Ferrari F1 cars
export const championshipCars = [
  {
    model: "Ferrari 500",
    years: "1952-1953",
    championships: "Drivers' and Constructors' (1952, 1953)",
    driver: "Alberto Ascari"
  },
  {
    model: "Ferrari 156 'Sharknose'",
    years: "1961",
    championships: "Drivers' (Phil Hill) and Constructors'",
    driver: "Phil Hill"
  },
  {
    model: "Ferrari 312T",
    years: "1975-1977",
    championships: "Drivers' (Lauda 1975, 1977) and Constructors' (1975, 1976, 1977)",
    driver: "Niki Lauda"
  },
  {
    model: "Ferrari 312T4",
    years: "1979",
    championships: "Drivers' (Scheckter) and Constructors'",
    driver: "Jody Scheckter"
  },
  {
    model: "Ferrari F1-2000",
    years: "2000",
    championships: "Drivers' (Schumacher) and Constructors'",
    driver: "Michael Schumacher"
  },
  {
    model: "Ferrari F2001",
    years: "2001",
    championships: "Drivers' (Schumacher) and Constructors'",
    driver: "Michael Schumacher"
  },
  {
    model: "Ferrari F2002",
    years: "2002",
    championships: "Drivers' (Schumacher) and Constructors'",
    driver: "Michael Schumacher"
  },
  {
    model: "Ferrari F2003-GA",
    years: "2003",
    championships: "Drivers' (Schumacher) and Constructors'",
    driver: "Michael Schumacher"
  },
  {
    model: "Ferrari F2004",
    years: "2004",
    championships: "Drivers' (Schumacher) and Constructors'",
    driver: "Michael Schumacher"
  },
  {
    model: "Ferrari F2007",
    years: "2007",
    championships: "Drivers' (Räikkönen) and Constructors'",
    driver: "Kimi Räikkönen"
  },
  {
    model: "Ferrari F2008",
    years: "2008",
    championships: "Constructors'",
    driver: "Felipe Massa (Runner-up in Drivers' Championship)"
  }
]; 