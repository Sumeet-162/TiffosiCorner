interface Team {
  id: number;
  name: string;
  shortName: string;
  color: string;
  country: string;
  points: number;
  position: number;
  logo: string;
  founded?: number;
  baseLocation?: string;
  teamPrincipal?: string;
  championships?: number;
  drivers?: string[];
  carName?: string;
  technicalDetails?: {
    engine: string;
    chassis: string;
  };
}

export const teams: Team[] = [
  {
    id: 1,
    position: 1,
    name: "McLaren",
    shortName: "MCL",
    country: "United Kingdom",
    points: 460, // Piastri (234) + Norris (226)
    color: "#FF8700",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/McLaren_Racing_logo.svg/1280px-McLaren_Racing_logo.svg.png"
  },
  {
    id: 2,
    position: 2,
    name: "Mercedes",
    shortName: "MER",
    country: "Germany",
    points: 210, // Russell (147) + Antonelli (63)
    color: "#00D2BE",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg/2560px-Mercedes_AMG_Petronas_F1_Logo.svg.png"
  },
  {
    id: 3,
    position: 3,
    name: "Ferrari",
    shortName: "FER",
    country: "Italy",
    points: 222, // Leclerc (119) + Hamilton (103)
    color: "#DC0000",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Ferrari-Logo.svg/1920px-Ferrari-Logo.svg.png"
  },
  {
    id: 4,
    position: 4,
    name: "Red Bull Racing",
    shortName: "RBR",
    country: "Austria",
    points: 175, // Verstappen (165) + Tsunoda (10)
    color: "#0600EF",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Red_Bull_Racing_logo.svg/1920px-Red_Bull_Racing_logo.svg.png"
  },
  {
    id: 5,
    position: 5,
    name: "Williams",
    shortName: "WIL",
    country: "United Kingdom",
    points: 59, // Albon (46) + Sainz (13)
    color: "#005AFF",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Williams_Grand_Prix_Engineering_logo.svg/1920px-Williams_Grand_Prix_Engineering_logo.svg.png"
  },
  {
    id: 6,
    position: 6,
    name: "Kick Sauber",
    shortName: "SAU",
    country: "Switzerland",
    points: 41, // Hulkenberg (37) + Bortoleto (4)
    color: "#900000",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/Stake_F1_Team_logo.svg"
  },
  {
    id: 7,
    position: 7,
    name: "Haas",
    shortName: "HAA",
    country: "United States",
    points: 29, // Ocon (23) + Bearman (6)
    color: "#FFFFFF",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Haas_F1_Team_logo.svg/1920px-Haas_F1_Team_logo.svg.png"
  },
  {
    id: 8,
    position: 8,
    name: "Racing Bulls",
    shortName: "RBU",
    country: "Italy",
    points: 33, // Hadjar (21) + Lawson (12)
    color: "#1E3D9B",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Visa_Cash_App_Red_Bull_F1_team_logo.svg"
  },
  {
    id: 9,
    position: 9,
    name: "Aston Martin",
    shortName: "AST",
    country: "United Kingdom",
    points: 36, // Stroll (20) + Alonso (16)
    color: "#006F62",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Aston_Martin_F1_Team_logo.svg/2560px-Aston_Martin_F1_Team_logo.svg.png"
  },
  {
    id: 10,
    position: 10,
    name: "Alpine",
    shortName: "ALP",
    country: "France",
    points: 11, // Gasly (11) + Colapinto/Doohan (0)
    color: "#0090FF",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Alpine_F1_Team_Logo.svg/1920px-Alpine_F1_Team_Logo.svg.png"
  }
];
