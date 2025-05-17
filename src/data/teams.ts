
interface Team {
  id: number;
  name: string;
  shortName: string;
  color: string;
  country: string;
  points: number;
  position: number;
  logo: string;
}

export const teams: Team[] = [
  {
    id: 1,
    name: "Red Bull Racing",
    shortName: "RBR",
    color: "#0600EF",
    country: "Austria",
    points: 273,
    position: 1,
    logo: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Ferrari",
    shortName: "FER",
    color: "#FF2800",
    country: "Italy",
    points: 246,
    position: 2,
    logo: "/placeholder.svg"
  },
  {
    id: 3,
    name: "McLaren",
    shortName: "MCL",
    color: "#FF8700",
    country: "United Kingdom",
    points: 237,
    position: 3,
    logo: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Mercedes",
    shortName: "MER",
    color: "#00D2BE",
    country: "Germany",
    points: 180,
    position: 4,
    logo: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Aston Martin",
    shortName: "AST",
    color: "#006F62",
    country: "United Kingdom",
    points: 73,
    position: 5,
    logo: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Alpine",
    shortName: "ALP",
    color: "#0090FF",
    country: "France",
    points: 21,
    position: 6,
    logo: "/placeholder.svg"
  },
  {
    id: 7,
    name: "Haas F1 Team",
    shortName: "HAA",
    color: "#FFFFFF",
    country: "United States",
    points: 17,
    position: 7,
    logo: "/placeholder.svg"
  },
  {
    id: 8,
    name: "Racing Bulls",
    shortName: "RAB",
    color: "#00293F",
    country: "Italy",
    points: 9,
    position: 8,
    logo: "/placeholder.svg"
  },
  {
    id: 9,
    name: "Williams",
    shortName: "WIL",
    color: "#005AFF",
    country: "United Kingdom",
    points: 1,
    position: 9,
    logo: "/placeholder.svg"
  },
  {
    id: 10,
    name: "Sauber",
    shortName: "SAU",
    color: "#900000",
    country: "Switzerland",
    points: 0,
    position: 10,
    logo: "/placeholder.svg"
  }
];
