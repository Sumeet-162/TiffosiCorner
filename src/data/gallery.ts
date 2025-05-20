interface GalleryImage {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  year: number;
  category: "car" | "driver" | "race" | "team";
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "2024 Ferrari SF-24",
    description: "The Ferrari SF-24 Formula 1 car for the 2024 season",
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2024manual/2024Launches/Ferrari/Ferrari2024Pres-9.jpg.transform/9col-retina/image.jpg",
    year: 2024,
    category: "car"
  },
  {
    id: 2,
    title: "Charles Leclerc Victory",
    description: "Charles Leclerc celebrates his victory at Monaco",
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2024manual/2024Races/MonacoGP/Sunday/RACEWIN-leclerc-9col-retina.jpg.transform/9col-retina/image.jpg",
    year: 2024,
    category: "driver"
  },
  {
    id: 3,
    title: "Carlos Sainz Podium",
    description: "Carlos Sainz celebrates a podium finish",
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2024manual/2024Races/BahrainGP/Sunday/GettyImages-2039172720.jpg.transform/9col-retina/image.jpg",
    year: 2024,
    category: "driver"
  },
  {
    id: 4,
    title: "Monaco Grand Prix",
    description: "Ferrari racing through the streets of Monaco",
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2024manual/2024Races/MonacoGP/Sunday/FERRARI-monaco-race-9col-retina.jpg.transform/9col-retina/image.jpg",
    year: 2024,
    category: "race"
  },
  {
    id: 5,
    title: "Pit Stop Action",
    description: "Ferrari team executing a perfect pit stop",
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2023/Fotos2023/2023AusGP/Friday/GettyImages-1475520473.jpg.transform/9col-retina/image.jpg",
    year: 2023,
    category: "team"
  },
  {
    id: 6,
    title: "Ferrari F2004",
    description: "The legendary Ferrari F2004 from the Schumacher era",
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2020/70AnniversaryGPWeek/Ferrari/GettyImages-1207608359.jpg.transform/9col-retina/image.jpg",
    year: 2004,
    category: "car"
  },
  {
    id: 7,
    title: "Michael Schumacher",
    description: "Michael Schumacher in his Ferrari during his dominant era",
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/Michael/PAR146282.jpg.transform/9col-retina/image.jpg",
    year: 2004,
    category: "driver"
  },
  {
    id: 8,
    title: "Monza Victory",
    description: "Ferrari celebrating a victory at their home race in Monza",
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/September/Italy/GettyImages-1171047221.jpg.transform/9col-retina/image.jpg",
    year: 2019,
    category: "race"
  },
  {
    id: 9,
    title: "Team Celebration",
    description: "Ferrari team celebrating a successful race weekend",
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2024manual/2024Races/MonacoGP/Sunday/FERRARI-team-celebration-9col-retina.jpg.transform/9col-retina/image.jpg",
    year: 2024,
    category: "team"
  },
  {
    id: 10,
    title: "Ferrari F1-75",
    description: "The Ferrari F1-75 from the 2022 season",
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022/Ferrari/ferrari-f1-75-4-3.jpg.transform/9col-retina/image.jpg",
    year: 2022,
    category: "car"
  },
  {
    id: 11,
    title: "Sebastian Vettel",
    description: "Sebastian Vettel during his time at Ferrari",
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/September/Italy/GettyImages-1170931020.jpg.transform/9col-retina/image.jpg",
    year: 2018,
    category: "driver"
  },
  {
    id: 12,
    title: "Singapore Grand Prix",
    description: "Ferrari racing under the lights at the Singapore Grand Prix",
    imageUrl: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019/September/SingaporeONE/GettyImages-1176550670.jpg.transform/9col-retina/image.jpg",
    year: 2019,
    category: "race"
  }
];
