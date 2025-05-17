
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
  imageUrl: string;
  isFerrariDriver: boolean;
}

export const drivers: Driver[] = [
  {
    id: 1,
    name: "Max Verstappen",
    number: 1,
    team: "Red Bull Racing",
    country: "Netherlands",
    countryCode: "NL",
    points: 170,
    position: 1,
    podiums: 6,
    wins: 4,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 2,
    name: "Charles Leclerc",
    number: 16,
    team: "Ferrari",
    country: "Monaco",
    countryCode: "MC",
    points: 138,
    position: 2,
    podiums: 4,
    wins: 2,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: true
  },
  {
    id: 3,
    name: "Lando Norris",
    number: 4,
    team: "McLaren",
    country: "United Kingdom",
    countryCode: "GB",
    points: 131,
    position: 3,
    podiums: 4,
    wins: 1,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 4,
    name: "Carlos Sainz",
    number: 55,
    team: "Ferrari",
    country: "Spain",
    countryCode: "ES",
    points: 108,
    position: 4,
    podiums: 3,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: true
  },
  {
    id: 5,
    name: "Oscar Piastri",
    number: 81,
    team: "McLaren",
    country: "Australia",
    countryCode: "AU",
    points: 106,
    position: 5,
    podiums: 3,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 6,
    name: "Sergio Perez",
    number: 11,
    team: "Red Bull Racing",
    country: "Mexico",
    countryCode: "MX",
    points: 103,
    position: 6,
    podiums: 3,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 7,
    name: "Lewis Hamilton",
    number: 44,
    team: "Mercedes",
    country: "United Kingdom",
    countryCode: "GB",
    points: 94,
    position: 7,
    podiums: 2,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 8,
    name: "George Russell",
    number: 63,
    team: "Mercedes",
    country: "United Kingdom",
    countryCode: "GB",
    points: 86,
    position: 8,
    podiums: 1,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 9,
    name: "Fernando Alonso",
    number: 14,
    team: "Aston Martin",
    country: "Spain",
    countryCode: "ES",
    points: 42,
    position: 9,
    podiums: 0,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 10,
    name: "Lance Stroll",
    number: 18,
    team: "Aston Martin",
    country: "Canada",
    countryCode: "CA",
    points: 31,
    position: 10,
    podiums: 0,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 11,
    name: "Esteban Ocon",
    number: 31,
    team: "Alpine",
    country: "France",
    countryCode: "FR",
    points: 12,
    position: 11,
    podiums: 0,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 12,
    name: "Pierre Gasly",
    number: 10,
    team: "Alpine",
    country: "France",
    countryCode: "FR",
    points: 9,
    position: 12,
    podiums: 0,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 13,
    name: "Kevin Magnussen",
    number: 20,
    team: "Haas F1 Team",
    country: "Denmark",
    countryCode: "DK",
    points: 9,
    position: 13,
    podiums: 0,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 14,
    name: "Nico Hulkenberg",
    number: 27,
    team: "Haas F1 Team",
    country: "Germany",
    countryCode: "DE",
    points: 8,
    position: 14,
    podiums: 0,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 15,
    name: "Yuki Tsunoda",
    number: 22,
    team: "Racing Bulls",
    country: "Japan",
    countryCode: "JP",
    points: 7,
    position: 15,
    podiums: 0,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 16,
    name: "Daniel Ricciardo",
    number: 3,
    team: "Racing Bulls",
    country: "Australia",
    countryCode: "AU",
    points: 2,
    position: 16,
    podiums: 0,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 17,
    name: "Alex Albon",
    number: 23,
    team: "Williams",
    country: "Thailand",
    countryCode: "TH",
    points: 1,
    position: 17,
    podiums: 0,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 18,
    name: "Logan Sargeant",
    number: 2,
    team: "Williams",
    country: "United States",
    countryCode: "US",
    points: 0,
    position: 18,
    podiums: 0,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 19,
    name: "Valtteri Bottas",
    number: 77,
    team: "Sauber",
    country: "Finland",
    countryCode: "FI",
    points: 0,
    position: 19,
    podiums: 0,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  },
  {
    id: 20,
    name: "Zhou Guanyu",
    number: 24,
    team: "Sauber",
    country: "China",
    countryCode: "CN",
    points: 0,
    position: 20,
    podiums: 0,
    wins: 0,
    imageUrl: "/placeholder.svg",
    isFerrariDriver: false
  }
];
