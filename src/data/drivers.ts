interface Driver {
  id: number;
  name: string;
  number: number;
  team: string;
  country: string;
  countryCode: string;
  points: number;
  position: number;
  podiums: number;
  wins: number;
  poles?: number;
  imageUrl: string;
  isFerrariDriver: boolean;
  bio?: string;
  age?: number;
  careerStats?: {
    championships: number;
    fastestLaps: number;
    careerPoints: number;
    seasonsInF1: number;
  };
}

export const drivers: Driver[] = [
  {
    id: 1,
    position: 1,
    name: "Oscar Piastri",
    country: "AUS",
    countryCode: "AUS",
    team: "McLaren",
    number: 81,
    points: 234,
    wins: 5,
    poles: 3,
    podiums: 10,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Oscar_Piastri_81.png",
    isFerrariDriver: false
  },
  {
    id: 2,
    position: 2,
    name: "Lando Norris",
    country: "GBR",
    countryCode: "GBR",
    team: "McLaren",
    number: 4,
    points: 226,
    wins: 4,
    poles: 1,
    podiums: 10,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Lando_Norris_4.png",
    isFerrariDriver: false
  },
  {
    id: 3,
    position: 3,
    name: "Max Verstappen",
    country: "NED",
    countryCode: "NED",
    team: "Red Bull Racing",
    number: 1,
    points: 165,
    wins: 2,
    poles: 3,
    podiums: 5,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Max_Verstappen_1.png",
    isFerrariDriver: false
  },
  {
    id: 4,
    position: 4,
    name: "George Russell",
    country: "GBR",
    countryCode: "GBR",
    team: "Mercedes",
    number: 63,
    points: 147,
    wins: 0,
    poles: 0,
    podiums: 4,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/George_Russell_63.png",
    isFerrariDriver: false
  },
  {
    id: 5,
    position: 5,
    name: "Charles Leclerc",
    country: "Monaco",
    countryCode: "MON",
    team: "Ferrari",
    number: 16,
    points: 119,
    wins: 0,
    poles: 0,
    podiums: 3,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Charles_Leclerc_16.png",
    isFerrariDriver: true,
    bio: "Charles Leclerc is a Monegasque racing driver...",
    age: 26,
    careerStats: {
      championships: 0,
      fastestLaps: 7,
      careerPoints: 1003,
      seasonsInF1: 7
    }
  },
  {
    id: 6,
    position: 6,
    name: "Lewis Hamilton",
    country: "United Kingdom",
    countryCode: "GBR",
    team: "Ferrari",
    number: 44,
    points: 103,
    wins: 0,
    poles: 0,
    podiums: 2,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Lewis_Hamilton_44.png",
    isFerrariDriver: true,
    bio: "Sir Lewis Hamilton is a British racing driver...",
    age: 40,
    careerStats: {
      championships: 7,
      fastestLaps: 63,
      careerPoints: 4681,
      seasonsInF1: 19
    }
  },
  {
    id: 7,
    position: 7,
    name: "Kimi Antonelli",
    country: "ITA",
    countryCode: "ITA",
    team: "Mercedes",
    number: 87,
    points: 63,
    wins: 0,
    poles: 1,
    podiums: 2,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Kimi_Antonelli_12.png",
    isFerrariDriver: false
  },
  {
    id: 8,
    position: 8,
    name: "Alexander Albon",
    country: "THA",
    countryCode: "THA",
    team: "Williams",
    number: 23,
    points: 46,
    wins: 0,
    poles: 0,
    podiums: 0,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Alexander_Albon_23.png",
    isFerrariDriver: false
  },
  {
    id: 11,
    position: 9,
    name: "Nico Hulkenberg",
    country: "GER",
    countryCode: "GER",
    team: "Kick Sauber",
    number: 27,
    points: 37,
    wins: 0,
    poles: 0,
    podiums: 1,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Nico_Hulkenberg_27.png",
    isFerrariDriver: false
  },
  {
    id: 9,
    position: 10,
    name: "Esteban Ocon",
    country: "FRA",
    countryCode: "FRA",
    team: "Haas",
    number: 31,
    points: 23,
    wins: 0,
    poles: 0,
    podiums: 0,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Esteban_Ocon_31.png",
    isFerrariDriver: false
  },
  {
    id: 10,
    position: 11,
    name: "Isack Hadjar",
    country: "FRA",
    countryCode: "FRA",
    team: "Racing Bulls",
    number: 29,
    points: 21,
    wins: 0,
    poles: 0,
    podiums: 0,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Isack_Hadjar_6.png",
    isFerrariDriver: false
  },
  {
    id: 12,
    position: 12,
    name: "Lance Stroll",
    country: "CAN",
    countryCode: "CAN",
    team: "Aston Martin",
    number: 18,
    points: 20,
    wins: 0,
    poles: 0,
    podiums: 0,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Lance_Stroll_18.png",
    isFerrariDriver: false
  },
  {
    id: 13,
    position: 13,
    name: "Carlos Sainz Jr.",
    country: "Spain",
    countryCode: "ESP",
    team: "Williams",
    number: 55,
    points: 13,
    wins: 0,
    poles: 0,
    podiums: 0,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Carlos_Sainz_55.png",
    isFerrariDriver: false,
    bio: "Carlos Sainz Jr. is a Spanish racing driver...",
    age: 30,
    careerStats: {
      championships: 0,
      fastestLaps: 5,
      careerPoints: 980,
      seasonsInF1: 11
    }
  },
  {
    id: 18,
    position: 14,
    name: "Liam Lawson",
    country: "NZL",
    countryCode: "NZL",
    team: "Racing Bulls",
    number: 15,
    points: 12,
    wins: 0,
    poles: 0,
    podiums: 0,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Liam_Lawson_30.png",
    isFerrariDriver: false
  },
  {
    id: 14,
    position: 15,
    name: "Pierre Gasly",
    country: "FRA",
    countryCode: "FRA",
    team: "Alpine",
    number: 10,
    points: 11,
    wins: 0,
    poles: 0,
    podiums: 0,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Pierre_Gasly_10.png",
    isFerrariDriver: false
  },
  {
    id: 15,
    position: 16,
    name: "Yuki Tsunoda",
    country: "JPN",
    countryCode: "JPN",
    team: "Red Bull Racing",
    number: 22,
    points: 10,
    wins: 0,
    poles: 0,
    podiums: 0,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Yuki_Tsunoda_22.png",
    isFerrariDriver: false
  },
  {
    id: 16,
    position: 17,
    name: "Fernando Alonso",
    country: "ESP",
    countryCode: "ESP",
    team: "Aston Martin",
    number: 14,
    points: 8,
    wins: 0,
    poles: 0,
    podiums: 0,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Fernando_Alonso_14.png",
    isFerrariDriver: false
  },
  {
    id: 17,
    position: 18,
    name: "Oliver Bearman",
    country: "GBR",
    countryCode: "GBR",
    team: "Haas",
    number: 50,
    points: 6,
    wins: 0,
    poles: 0,
    podiums: 0,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Oliver_Bearman_87.png",
    isFerrariDriver: false
  },
  {
    id: 19,
    position: 19,
    name: "Gabriel Bortoleto",
    country: "BRA",
    countryCode: "BRA",
    team: "Kick Sauber",
    number: 44,
    points: 4,
    wins: 0,
    poles: 0,
    podiums: 0,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Gabriel_Bortoleto_5.png",
    isFerrariDriver: false
  },
  {
    id: 20,
    position: 20,
    name: "Franco Colapinto",
    country: "ARG",
    countryCode: "ARG",
    team: "Alpine",
    number: 43,
    points: 0,
    wins: 0,
    poles: 0,
    podiums: 0,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Franco_Colapinto_43.png",
    isFerrariDriver: false
  },
  {
    id: 21,
    position: 21,
    name: "Jack Doohan",
    country: "AUS",
    countryCode: "AUS",
    team: "Alpine",
    number: 5,
    points: 0,
    wins: 0,
    poles: 0,
    podiums: 0,
    imageUrl: "https://raw.githubusercontent.com/toUpperCase78/formula1-datasets/master/F1%202025%20Season%20Drivers/Jack_Doohan_7.png",
    isFerrariDriver: false
  }
];
