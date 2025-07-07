export interface Race {
  id: string;
  round: number;
  raceName: string;
  date: string;
  time: string;
  Circuit: {
    circuitId: string;
    circuitName: string;
    Location: {
      locality: string;
      country: string;
    }
  };
  laps: number;
  status: "Upcoming" | "Completed" | "Canceled";
  FirstPractice?: {
    date: string;
    time: string;
  };
  SecondPractice?: {
    date: string;
    time: string;
  };
  ThirdPractice?: {
    date: string;
    time: string;
  };
  Qualifying?: {
    date: string;
    time: string;
  };
  Winners?: {
    first: {
      driverName: string;
      team: string;
    };
    second: {
      driverName: string;
      team: string;
    };
    third: {
      driverName: string;
      team: string;
    };
  };
}

export const races: Race[] = [
  {
    id: "australia",
    round: 1,
    raceName: "Australian Grand Prix",
    date: "2025-03-16T04:00:00Z",
    time: "9:30 AM IST",
    Circuit: {
      circuitId: "albert_park",
      circuitName: "Melbourne Grand Prix Circuit",
      Location: {
        locality: "Melbourne",
        country: "Australia"
      }
    },
    laps: 57,
    status: "Completed",
    Winners: {
      first: {
        driverName: "Lando Norris",
        team: "McLaren"
      },
      second: {
        driverName: "Max Verstappen",
        team: "Red Bull Racing"
      },
      third: {
        driverName: "George Russell",
        team: "Mercedes AMG Motorsport"
      }
    }
  },
  {
    id: "china",
    round: 2,
    raceName: "Chinese Grand Prix",
    date: "2025-03-23T07:00:00Z",
    time: "12:30 PM IST",
    Circuit: {
      circuitId: "shanghai",
      circuitName: "Shanghai International Circuit",
      Location: {
        locality: "Shanghai",
        country: "China"
      }
    },
    laps: 56,
    status: "Completed",
    Winners: {
      first: {
        driverName: "Oscar Piastri",
        team: "McLaren"
      },
      second: {
        driverName: "Lando Norris",
        team: "McLaren"
      },
      third: {
        driverName: "George Russell",
        team: "Mercedes AMG Motorsport"
      }
    }
  },
  {
    id: "japan",
    round: 3,
    raceName: "Japanese Grand Prix",
    date: "2025-04-06T05:00:00Z",
    time: "10:30 AM IST",
    Circuit: {
      circuitId: "suzuka",
      circuitName: "Suzuka International Racing Course",
      Location: {
        locality: "Suzuka",
        country: "Japan"
      }
    },
    laps: 53,
    status: "Completed",
    Winners: {
      first: {
        driverName: "Max Verstappen",
        team: "Red Bull Racing"
      },
      second: {
        driverName: "Lando Norris",
        team: "McLaren"
      },
      third: {
        driverName: "Oscar Piastri",
        team: "McLaren"
      }
    }
  },
  {
    id: "bahrain",
    round: 4,
    raceName: "Bahrain Grand Prix",
    date: "2025-04-13T15:00:00Z",
    time: "8:30 PM IST",
    Circuit: {
      circuitId: "bahrain",
      circuitName: "Bahrain International Circuit",
      Location: {
        locality: "Sakhir",
        country: "Bahrain"
      }
    },
    laps: 57,
    status: "Completed",
    Winners: {
      first: {
        driverName: "Oscar Piastri",
        team: "McLaren"
      },
      second: {
        driverName: "George Russell",
        team: "Mercedes AMG Motorsport"
      },
      third: {
        driverName: "Lando Norris",
        team: "McLaren"
      }
    }
  },
  {
    id: "saudi_arabia",
    round: 5,
    raceName: "Saudi Arabian Grand Prix",
    date: "2025-04-20T17:00:00Z",
    time: "10:30 PM IST",
    Circuit: {
      circuitId: "jeddah",
      circuitName: "Jeddah Corniche Circuit",
      Location: {
        locality: "Jeddah",
        country: "Saudi Arabia"
      }
    },
    laps: 50,
    status: "Completed",
    Winners: {
      first: {
        driverName: "Oscar Piastri",
        team: "McLaren"
      },
      second: {
        driverName: "Max Verstappen",
        team: "Red Bull Racing"
      },
      third: {
        driverName: "Charles Leclerc",
        team: "Ferrari"
      }
    }
  },
  {
    id: "miami",
    round: 6,
    raceName: "Miami Grand Prix",
    date: "2025-05-04T20:00:00Z",
    time: "1:30 AM IST",
    Circuit: {
      circuitId: "miami",
      circuitName: "Miami International Autodrome",
      Location: {
        locality: "Miami, FL",
        country: "USA"
      }
    },
    laps: 57,
    status: "Completed",
    Winners: {
      first: {
        driverName: "Oscar Piastri",
        team: "McLaren"
      },
      second: {
        driverName: "Lando Norris",
        team: "McLaren"
      },
      third: {
        driverName: "George Russell",
        team: "Mercedes AMG Motorsport"
      }
    }
  },
  {
    id: "emilia_romagna",
    round: 7,
    raceName: "Emilia Romagna Grand Prix",
    date: "2025-05-18T13:00:00Z",
    time: "6:30 PM IST",
    Circuit: {
      circuitId: "imola",
      circuitName: "Autodromo Enzo e Dino Ferrari",
      Location: {
        locality: "Imola",
        country: "Italy"
      }
    },
    laps: 63,
    status: "Completed",
    Winners: {
      first: {
        driverName: "Max Verstappen",
        team: "Red Bull Racing"
      },
      second: {
        driverName: "Lando Norris",
        team: "McLaren"
      },
      third: {
        driverName: "Oscar Piastri",
        team: "McLaren"
      }
    }
  },
  {
    id: "monaco",
    round: 8,
    raceName: "Monaco Grand Prix",
    date: "2025-05-25T13:00:00Z",
    time: "6:30 PM IST",
    Circuit: {
      circuitId: "monaco",
      circuitName: "Circuit de Monaco",
      Location: {
        locality: "Monte Carlo",
        country: "Monaco"
      }
    },
    laps: 78,
    status: "Completed",
    FirstPractice: {
      date: "2025-05-23T10:30:00Z",
      time: "04:00 PM IST"
    },
    Qualifying: {
      date: "2025-05-24T13:00:00Z",
      time: "06:30 PM IST"
    }
  },
  {
    id: "spain",
    round: 9,
    raceName: "Spanish Grand Prix",
    date: "2025-06-01T13:00:00Z",
    time: "6:30 PM IST",
    Circuit: {
      circuitId: "catalunya",
      circuitName: "Circuit de Barcelona-Catalunya",
      Location: {
        locality: "Barcelona",
        country: "Spain"
      }
    },
    laps: 66,
    status: "Completed",
    FirstPractice: {
      date: "2025-05-30T10:30:00Z",
      time: "04:00 PM IST"
    },
    Qualifying: {
      date: "2025-05-31T13:00:00Z",
      time: "06:30 PM IST"
    }
  },
  {
    id: "canada",
    round: 10,
    raceName: "Canadian Grand Prix",
    date: "2025-06-15T18:00:00Z",
    time: "11:30 PM IST",
    Circuit: {
      circuitId: "villeneuve",
      circuitName: "Circuit Gilles-Villeneuve",
      Location: {
        locality: "Montreal, QC",
        country: "Canada"
      }
    },
    laps: 70,
    status: "Completed",
    FirstPractice: {
      date: "2025-06-13T16:30:00Z",
      time: "10:00 PM IST"
    },
    Qualifying: {
      date: "2025-06-14T18:00:00Z",
      time: "11:30 PM IST"
    }
  },
  {
    id: "austria",
    round: 11,
    raceName: "Austrian Grand Prix",
    date: "2025-06-29T13:00:00Z",
    time: "6:30 PM IST",
    Circuit: {
      circuitId: "red_bull_ring",
      circuitName: "Red Bull Ring",
      Location: {
        locality: "Spielberg",
        country: "Austria"
      }
    },
    laps: 71,
    status: "Completed",
    FirstPractice: {
      date: "2025-06-27T10:30:00Z",
      time: "04:00 PM IST"
    },
    Qualifying: {
      date: "2025-06-28T13:00:00Z",
      time: "06:30 PM IST"
    }
  },
  {
    id: "britain",
    round: 12,
    raceName: "British Grand Prix",
    date: "2025-07-06T14:00:00Z",
    time: "7:30 PM IST",
    Circuit: {
      circuitId: "silverstone",
      circuitName: "Silverstone Circuit",
      Location: {
        locality: "Silverstone",
        country: "UK"
      }
    },
    laps: 52,
    status: "Completed",
    FirstPractice: {
      date: "2025-07-04T11:30:00Z",
      time: "05:00 PM IST"
    },
    Qualifying: {
      date: "2025-07-05T14:00:00Z",
      time: "07:30 PM IST"
    }
  },
  {
    id: "belgium",
    round: 13,
    raceName: "Belgian Grand Prix",
    date: "2025-07-27T13:00:00Z",
    time: "6:30 PM IST",
    Circuit: {
      circuitId: "spa",
      circuitName: "Circuit de Spa-Francorchamps",
      Location: {
        locality: "Spa-Francorchamps",
        country: "Belgium"
      }
    },
    laps: 44,
    status: "Upcoming",
    FirstPractice: {
      date: "2025-07-25T10:30:00Z",
      time: "04:00 PM IST"
    },
    Qualifying: {
      date: "2025-07-26T13:00:00Z",
      time: "06:30 PM IST"
    }
  },
  {
    id: "hungary",
    round: 14,
    raceName: "Hungarian Grand Prix",
    date: "2025-08-03T13:00:00Z",
    time: "6:30 PM IST",
    Circuit: {
      circuitId: "hungaroring",
      circuitName: "Hungaroring",
      Location: {
        locality: "Budapest",
        country: "Hungary"
      }
    },
    laps: 70,
    status: "Upcoming",
    FirstPractice: {
      date: "2025-08-01T10:30:00Z",
      time: "04:00 PM IST"
    },
    Qualifying: {
      date: "2025-08-02T13:00:00Z",
      time: "06:30 PM IST"
    }
  },
  {
    id: "netherlands",
    round: 15,
    raceName: "Dutch Grand Prix",
    date: "2025-08-31T13:00:00Z",
    time: "6:30 PM IST",
    Circuit: {
      circuitId: "zandvoort",
      circuitName: "Circuit Zandvoort",
      Location: {
        locality: "Zandvoort",
        country: "Netherlands"
      }
    },
    laps: 72,
    status: "Upcoming",
    FirstPractice: {
      date: "2025-08-29T10:30:00Z",
      time: "04:00 PM IST"
    },
    Qualifying: {
      date: "2025-08-30T13:00:00Z",
      time: "06:30 PM IST"
    }
  },
  {
    id: "italy",
    round: 16,
    raceName: "Italian Grand Prix",
    date: "2025-09-07T13:00:00Z",
    time: "6:30 PM IST",
    Circuit: {
      circuitId: "monza",
      circuitName: "Autodromo Nazionale Monza",
      Location: {
        locality: "Monza",
        country: "Italy"
      }
    },
    laps: 53,
    status: "Upcoming",
    FirstPractice: {
      date: "2025-09-05T10:30:00Z",
      time: "04:00 PM IST"
    },
    Qualifying: {
      date: "2025-09-06T13:00:00Z",
      time: "06:30 PM IST"
    }
  },
  {
    id: "azerbaijan",
    round: 17,
    raceName: "Azerbaijan Grand Prix",
    date: "2025-09-21T11:00:00Z",
    time: "4:30 PM IST",
    Circuit: {
      circuitId: "baku",
      circuitName: "Baku City Circuit",
      Location: {
        locality: "Baku",
        country: "Azerbaijan"
      }
    },
    laps: 51,
    status: "Upcoming",
    FirstPractice: {
      date: "2025-09-19T08:30:00Z",
      time: "02:00 PM IST"
    },
    Qualifying: {
      date: "2025-09-20T11:00:00Z",
      time: "04:30 PM IST"
    }
  },
  {
    id: "singapore",
    round: 18,
    raceName: "Singapore Grand Prix",
    date: "2025-10-05T12:00:00Z",
    time: "5:30 PM IST",
    Circuit: {
      circuitId: "marina_bay",
      circuitName: "Marina Bay Street Circuit",
      Location: {
        locality: "Singapore City",
        country: "Singapore"
      }
    },
    laps: 62,
    status: "Upcoming",
    FirstPractice: {
      date: "2025-10-03T09:30:00Z",
      time: "03:00 PM IST"
    },
    Qualifying: {
      date: "2025-10-04T12:00:00Z",
      time: "05:30 PM IST"
    }
  },
  {
    id: "usa",
    round: 19,
    raceName: "United States Grand Prix",
    date: "2025-10-19T19:00:00Z",
    time: "12:30 AM IST",
    Circuit: {
      circuitId: "americas",
      circuitName: "Circuit of The Americas",
      Location: {
        locality: "Austin, TX",
        country: "USA"
      }
    },
    laps: 56,
    status: "Upcoming",
    FirstPractice: {
      date: "2025-10-17T16:30:00Z",
      time: "10:00 PM IST"
    },
    Qualifying: {
      date: "2025-10-18T19:00:00Z",
      time: "12:30 AM IST"
    }
  },
  {
    id: "mexico",
    round: 20,
    raceName: "Gran Premio de Mexico",
    date: "2025-10-26T20:00:00Z",
    time: "1:30 AM IST",
    Circuit: {
      circuitId: "rodriguez",
      circuitName: "Autodromo Hermanos Rodriguez",
      Location: {
        locality: "Mexico City",
        country: "Mexico"
      }
    },
    laps: 71,
    status: "Upcoming",
    FirstPractice: {
      date: "2025-10-24T17:30:00Z",
      time: "11:00 PM IST"
    },
    Qualifying: {
      date: "2025-10-25T20:00:00Z",
      time: "01:30 AM IST"
    }
  },
  {
    id: "brazil",
    round: 21,
    raceName: "Sao Paulo Grand Prix",
    date: "2025-11-09T17:00:00Z",
    time: "10:30 PM IST",
    Circuit: {
      circuitId: "interlagos",
      circuitName: "Autodromo Jose Carlos Pace",
      Location: {
        locality: "Sao Paulo",
        country: "Brazil"
      }
    },
    laps: 71,
    status: "Upcoming",
    FirstPractice: {
      date: "2025-11-07T14:30:00Z",
      time: "08:00 PM IST"
    },
    Qualifying: {
      date: "2025-11-08T17:00:00Z",
      time: "10:30 PM IST"
    }
  },
  {
    id: "las_vegas",
    round: 22,
    raceName: "Las Vegas Grand Prix",
    date: "2025-11-23T04:00:00Z",
    time: "9:30 AM IST",
    Circuit: {
      circuitId: "vegas",
      circuitName: "Las Vegas Strip Circuit",
      Location: {
        locality: "Las Vegas, NV",
        country: "USA"
      }
    },
    laps: 50,
    status: "Upcoming",
    FirstPractice: {
      date: "2025-11-21T01:30:00Z",
      time: "07:00 AM IST"
    },
    Qualifying: {
      date: "2025-11-22T04:00:00Z",
      time: "09:30 AM IST"
    }
  },
  {
    id: "qatar",
    round: 23,
    raceName: "Qatar Grand Prix",
    date: "2025-11-30T16:00:00Z",
    time: "9:30 PM IST",
    Circuit: {
      circuitId: "losail",
      circuitName: "Lusail International Circuit",
      Location: {
        locality: "Doha",
        country: "Qatar"
      }
    },
    laps: 57,
    status: "Upcoming",
    FirstPractice: {
      date: "2025-11-28T13:30:00Z",
      time: "07:00 PM IST"
    },
    Qualifying: {
      date: "2025-11-29T16:00:00Z",
      time: "09:30 PM IST"
    }
  },
  {
    id: "abu_dhabi",
    round: 24,
    raceName: "Abu Dhabi Grand Prix",
    date: "2025-12-07T13:00:00Z",
    time: "6:30 PM IST",
    Circuit: {
      circuitId: "yas_marina",
      circuitName: "Yas Marina Circuit",
      Location: {
        locality: "Abu Dhabi",
        country: "UAE"
      }
    },
    laps: 58,
    status: "Upcoming",
    FirstPractice: {
      date: "2025-12-05T10:30:00Z",
      time: "04:00 PM IST"
    },
    Qualifying: {
      date: "2025-12-06T13:00:00Z",
      time: "06:30 PM IST"
    }
  }
];
