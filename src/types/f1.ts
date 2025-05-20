// Driver types
export interface Driver {
  driverId: string;
  permanentNumber?: string;
  code?: string;
  url?: string;
  givenName: string;
  familyName: string;
  dateOfBirth?: string;
  nationality: string;
}

export interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

// Constructor types
export interface Constructor {
  constructorId: string;
  url?: string;
  name: string;
  nationality: string;
}

export interface ConstructorStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}

// Race types
export interface Circuit {
  circuitId: string;
  url?: string;
  circuitName: string;
  Location: {
    lat: string;
    long: string;
    locality: string;
    country: string;
  };
}

export interface Race {
  season: string;
  round: string;
  url?: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time?: string;
  FirstPractice?: Session;
  SecondPractice?: Session;
  ThirdPractice?: Session;
  Qualifying?: Session;
  Sprint?: Session;
}

export interface Session {
  date: string;
  time: string;
}

// Result types
export interface RaceResult {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time?: {
    millis?: string;
    time: string;
  };
  FastestLap?: {
    rank: string;
    lap: string;
    Time: {
      time: string;
    };
    AverageSpeed: {
      units: string;
      speed: string;
    };
  };
}

export interface QualifyingResult {
  number: string;
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  Q1?: string;
  Q2?: string;
  Q3?: string;
}

// Lap and pit stop types
export interface Lap {
  number: string;
  Timings: {
    driverId: string;
    position: string;
    time: string;
  }[];
}

export interface PitStop {
  driverId: string;
  lap: string;
  stop: string;
  time: string;
  duration: string;
}

// Weather types
export interface Weather {
  temperature: number;
  humidity: number;
  windSpeed: number;
  conditions: string;
}

// Statistics types
export interface DriverStats {
  championships: number;
  wins: number;
  podiums: number;
  polePositions: number;
  fastestLaps: number;
  raceStarts: number;
  seasonBest: string;
  poles?: number;
  dnfs?: number;
}

export interface ConstructorStats {
  championships: number;
  wins: number;
  podiums: number;
  polePositions: number;
  fastestLaps: number;
  lastChampionship: string;
  poles?: number;
  oneTwo?: number;
}

// Live timing types
export interface LiveTiming {
  timestamp: string;
  positions: {
    driverId: string;
    position: number;
    gap: string;
    lastLap: string;
  }[];
}

// API response types
export interface ApiResponse<T> {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
  } & T;
} 