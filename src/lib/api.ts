/**
 * F1 Data Service - Local JSON Implementation
 * This file provides functions that simulate API calls but use local JSON data.
 */

import fallbackData from '../data/fallbackData.json';

// Import types
import type {
  Driver,
  Constructor,
  Race,
  DriverStanding,
  ConstructorStanding,
  RaceResult,
  QualifyingResult,
  Lap,
  PitStop,
  Weather,
  DriverStats,
  ConstructorStats,
  LiveTiming
} from '../types/f1';

/**
 * Get the current F1 season driver standings from local data
 */
export const getDriverStandings = async (): Promise<DriverStanding[]> => {
  return fallbackData.driverStandings as DriverStanding[];
};

/**
 * Get the current F1 season constructor standings from local data
 */
export const getConstructorStandings = async (): Promise<ConstructorStanding[]> => {
  return fallbackData.constructorStandings as ConstructorStanding[];
};

/**
 * Get the F1 race schedule from local data
 */
export const getRaceSchedule = async (): Promise<Race[]> => {
  return fallbackData.raceSchedule as Race[];
};

/**
 * Get race results (simulated with empty data)
 */
export const getRaceResults = async (round: number): Promise<{Results: RaceResult[]}> => {
  return { Results: [] };
};

/**
 * Get qualifying results (simulated with empty data)
 */
export const getQualifyingResults = async (round: number): Promise<{QualifyingResults: QualifyingResult[]}> => {
  return { QualifyingResults: [] };
};

/**
 * Get driver information from local data
 */
export const getDriverInfo = async (driverId: string): Promise<Driver | null> => {
  const driver = fallbackData.driverStandings.find(d => d.Driver.driverId === driverId);
  return driver ? driver.Driver as Driver : null;
};

/**
 * Get constructor information from local data
 */
export const getConstructorInfo = async (constructorId: string): Promise<Constructor | null> => {
  const constructor = fallbackData.constructorStandings.find(c => c.Constructor.constructorId === constructorId);
  return constructor ? constructor.Constructor as Constructor : null;
};

/**
 * Get lap times (simulated with empty data)
 */
export const getLapTimes = async (round: number, driverId: string): Promise<Lap[]> => {
  return [];
};

/**
 * Get pit stops (simulated with empty data)
 */
export const getPitStops = async (round: number): Promise<PitStop[]> => {
  return [];
};

/**
 * Get weather data from local data
 */
export const getRaceWeather = async (round: number): Promise<Weather> => {
  return fallbackData.weather as Weather;
};

/**
 * Get driver statistics from local data
 */
export const getDriverStats = async (driverId: string): Promise<DriverStats> => {
  return fallbackData.driverStats as DriverStats;
};

/**
 * Get constructor statistics from local data
 */
export const getConstructorStats = async (constructorId: string): Promise<ConstructorStats> => {
  return fallbackData.constructorStats as ConstructorStats;
};

/**
 * Get live timing data (simulated)
 */
export const getLiveTiming = async (): Promise<LiveTiming> => {
  return {
    timestamp: new Date().toISOString(),
    positions: [
      { driverId: 'leclerc', position: 1, gap: '0.000', lastLap: '1:30.123' },
      { driverId: 'sainz', position: 2, gap: '+1.234', lastLap: '1:30.456' },
    ]
  };
};

// Export types for use in components
export type {
  Driver,
  Constructor,
  Race,
  DriverStanding,
  ConstructorStanding,
  RaceResult,
  QualifyingResult,
  Lap,
  PitStop,
  Weather,
  DriverStats,
  ConstructorStats,
  LiveTiming
}; 