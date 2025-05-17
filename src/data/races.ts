
interface Race {
  id: number;
  name: string;
  location: string;
  country: string;
  countryCode: string;
  date: string;
  results: {
    driver: string;
    position: number;
    points: number;
    highlight?: string;
  }[];
}

export const races: Race[] = [
  {
    id: 1,
    name: "Bahrain Grand Prix",
    location: "Bahrain International Circuit",
    country: "Bahrain",
    countryCode: "BH",
    date: "2025-03-02",
    results: [
      {
        driver: "Charles Leclerc",
        position: 4,
        points: 12,
        highlight: "Fastest lap point"
      },
      {
        driver: "Carlos Sainz",
        position: 3,
        points: 15,
        highlight: "Strong recovery drive"
      }
    ]
  },
  {
    id: 2,
    name: "Saudi Arabian Grand Prix",
    location: "Jeddah Corniche Circuit",
    country: "Saudi Arabia",
    countryCode: "SA",
    date: "2025-03-16",
    results: [
      {
        driver: "Charles Leclerc",
        position: 2,
        points: 18,
        highlight: "Nearly caught the leader"
      },
      {
        driver: "Carlos Sainz",
        position: 5,
        points: 10
      }
    ]
  },
  {
    id: 3,
    name: "Australian Grand Prix",
    location: "Albert Park Circuit",
    country: "Australia",
    countryCode: "AU",
    date: "2025-03-30",
    results: [
      {
        driver: "Charles Leclerc",
        position: 1,
        points: 25,
        highlight: "First win of the season!"
      },
      {
        driver: "Carlos Sainz",
        position: 3,
        points: 15,
        highlight: "Double podium for Ferrari"
      }
    ]
  },
  {
    id: 4,
    name: "Japanese Grand Prix",
    location: "Suzuka Circuit",
    country: "Japan",
    countryCode: "JP",
    date: "2025-04-13",
    results: [
      {
        driver: "Charles Leclerc",
        position: 4,
        points: 12
      },
      {
        driver: "Carlos Sainz",
        position: 2,
        points: 18,
        highlight: "Brilliant strategy call"
      }
    ]
  },
  {
    id: 5,
    name: "Miami Grand Prix",
    location: "Miami International Autodrome",
    country: "USA",
    countryCode: "US",
    date: "2025-05-04",
    results: [
      {
        driver: "Charles Leclerc",
        position: 7,
        points: 6
      },
      {
        driver: "Carlos Sainz",
        position: 5,
        points: 10
      }
    ]
  },
  {
    id: 6,
    name: "Monaco Grand Prix",
    location: "Circuit de Monaco",
    country: "Monaco",
    countryCode: "MC",
    date: "2025-05-25",
    results: [
      {
        driver: "Charles Leclerc",
        position: 1,
        points: 25,
        highlight: "Home race victory!"
      },
      {
        driver: "Carlos Sainz",
        position: 4,
        points: 12
      }
    ]
  }
];
