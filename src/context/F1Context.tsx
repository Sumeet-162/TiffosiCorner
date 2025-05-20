import React, { createContext, useContext, useReducer, useEffect } from 'react';
import {
  getDriverStandings,
  getConstructorStandings,
  getRaceSchedule,
  getRaceResults,
  getQualifyingResults,
  getDriverInfo,
  getConstructorInfo,
  getLapTimes,
  getPitStops,
  getRaceWeather,
  getDriverStats,
  getConstructorStats,
  getLiveTiming
} from '../lib/api';

// Import our fallback data directly
import fallbackData from '../data/fallbackData.json';

import type {
  DriverStanding,
  ConstructorStanding,
  Race,
  RaceResult,
  QualifyingResult,
  Driver,
  Constructor,
  Lap,
  PitStop,
  Weather,
  DriverStats,
  ConstructorStats,
  LiveTiming
} from '../types/f1';

// State types
interface F1State {
  driverStandings: DriverStanding[];
  constructorStandings: ConstructorStanding[];
  raceSchedule: Race[];
  currentRace: Race | null;
  raceResults: RaceResult[];
  qualifyingResults: QualifyingResult[];
  selectedDriver: Driver | null;
  selectedConstructor: Constructor | null;
  lapTimes: Lap[];
  pitStops: PitStop[];
  weather: Weather | null;
  driverStats: DriverStats | null;
  constructorStats: ConstructorStats | null;
  liveTiming: LiveTiming | null;
  loading: boolean;
  error: string | null;
}

// Action types
type F1Action =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_DRIVER_STANDINGS'; payload: DriverStanding[] }
  | { type: 'SET_CONSTRUCTOR_STANDINGS'; payload: ConstructorStanding[] }
  | { type: 'SET_RACE_SCHEDULE'; payload: Race[] }
  | { type: 'SET_CURRENT_RACE'; payload: Race | null }
  | { type: 'SET_RACE_RESULTS'; payload: RaceResult[] }
  | { type: 'SET_QUALIFYING_RESULTS'; payload: QualifyingResult[] }
  | { type: 'SET_SELECTED_DRIVER'; payload: Driver | null }
  | { type: 'SET_SELECTED_CONSTRUCTOR'; payload: Constructor | null }
  | { type: 'SET_LAP_TIMES'; payload: Lap[] }
  | { type: 'SET_PIT_STOPS'; payload: PitStop[] }
  | { type: 'SET_WEATHER'; payload: Weather | null }
  | { type: 'SET_DRIVER_STATS'; payload: DriverStats | null }
  | { type: 'SET_CONSTRUCTOR_STATS'; payload: ConstructorStats | null }
  | { type: 'SET_LIVE_TIMING'; payload: LiveTiming | null };

// Initial state with fallback data
const initialState: F1State = {
  driverStandings: fallbackData.driverStandings as DriverStanding[],
  constructorStandings: fallbackData.constructorStandings as ConstructorStanding[],
  raceSchedule: fallbackData.raceSchedule as Race[],
  currentRace: null,
  raceResults: [],
  qualifyingResults: [],
  selectedDriver: null,
  selectedConstructor: null,
  lapTimes: [],
  pitStops: [],
  weather: fallbackData.weather as Weather,
  driverStats: fallbackData.driverStats as DriverStats,
  constructorStats: fallbackData.constructorStats as ConstructorStats,
  liveTiming: null,
  loading: false,
  error: null
};

// Reducer
function f1Reducer(state: F1State, action: F1Action): F1State {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_DRIVER_STANDINGS':
      return { ...state, driverStandings: action.payload };
    case 'SET_CONSTRUCTOR_STANDINGS':
      return { ...state, constructorStandings: action.payload };
    case 'SET_RACE_SCHEDULE':
      return { ...state, raceSchedule: action.payload };
    case 'SET_CURRENT_RACE':
      return { ...state, currentRace: action.payload };
    case 'SET_RACE_RESULTS':
      return { ...state, raceResults: action.payload };
    case 'SET_QUALIFYING_RESULTS':
      return { ...state, qualifyingResults: action.payload };
    case 'SET_SELECTED_DRIVER':
      return { ...state, selectedDriver: action.payload };
    case 'SET_SELECTED_CONSTRUCTOR':
      return { ...state, selectedConstructor: action.payload };
    case 'SET_LAP_TIMES':
      return { ...state, lapTimes: action.payload };
    case 'SET_PIT_STOPS':
      return { ...state, pitStops: action.payload };
    case 'SET_WEATHER':
      return { ...state, weather: action.payload };
    case 'SET_DRIVER_STATS':
      return { ...state, driverStats: action.payload };
    case 'SET_CONSTRUCTOR_STATS':
      return { ...state, constructorStats: action.payload };
    case 'SET_LIVE_TIMING':
      return { ...state, liveTiming: action.payload };
    default:
      return state;
  }
}

// Context
const F1Context = createContext<{
  state: F1State;
  dispatch: React.Dispatch<F1Action>;
  fetchDriverStandings: () => Promise<void>;
  fetchConstructorStandings: () => Promise<void>;
  fetchRaceSchedule: () => Promise<void>;
  fetchRaceResults: (round: number) => Promise<void>;
  fetchQualifyingResults: (round: number) => Promise<void>;
  fetchDriverInfo: (driverId: string) => Promise<void>;
  fetchConstructorInfo: (constructorId: string) => Promise<void>;
  fetchLapTimes: (round: number, driverId: string) => Promise<void>;
  fetchPitStops: (round: number) => Promise<void>;
  fetchRaceWeather: (round: number) => Promise<void>;
  fetchDriverStats: (driverId: string) => Promise<void>;
  fetchConstructorStats: (constructorId: string) => Promise<void>;
  fetchLiveTiming: () => Promise<void>;
} | null>(null);

// Provider
export function F1Provider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(f1Reducer, initialState);

  // Fetch functions
  const fetchDriverStandings = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const data = await getDriverStandings();
      if (data) {
        dispatch({ type: 'SET_DRIVER_STANDINGS', payload: data });
      } else {
        dispatch({ type: 'SET_DRIVER_STANDINGS', payload: fallbackData.driverStandings as DriverStanding[] });
      }
    } catch (error) {
      console.error('Error fetching driver standings:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch driver standings' });
      dispatch({ type: 'SET_DRIVER_STANDINGS', payload: fallbackData.driverStandings as DriverStanding[] });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const fetchConstructorStandings = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const data = await getConstructorStandings();
      if (data) {
        dispatch({ type: 'SET_CONSTRUCTOR_STANDINGS', payload: data });
      } else {
        dispatch({ type: 'SET_CONSTRUCTOR_STANDINGS', payload: fallbackData.constructorStandings as ConstructorStanding[] });
      }
    } catch (error) {
      console.error('Error fetching constructor standings:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch constructor standings' });
      dispatch({ type: 'SET_CONSTRUCTOR_STANDINGS', payload: fallbackData.constructorStandings as ConstructorStanding[] });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const fetchRaceSchedule = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const data = await getRaceSchedule();
      if (data) {
        dispatch({ type: 'SET_RACE_SCHEDULE', payload: data });
      } else {
        dispatch({ type: 'SET_RACE_SCHEDULE', payload: fallbackData.raceSchedule as Race[] });
      }
    } catch (error) {
      console.error('Error fetching race schedule:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch race schedule' });
      dispatch({ type: 'SET_RACE_SCHEDULE', payload: fallbackData.raceSchedule as Race[] });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const fetchRaceResults = async (round: number) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const data = await getRaceResults(round);
      if (data && data.Results) {
        dispatch({ type: 'SET_RACE_RESULTS', payload: data.Results });
      } else {
        dispatch({ type: 'SET_RACE_RESULTS', payload: [] });
      }
    } catch (error) {
      console.error('Error fetching race results:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch race results' });
      dispatch({ type: 'SET_RACE_RESULTS', payload: [] });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const fetchQualifyingResults = async (round: number) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const data = await getQualifyingResults(round);
      if (data && data.QualifyingResults) {
        dispatch({ type: 'SET_QUALIFYING_RESULTS', payload: data.QualifyingResults });
      } else {
        dispatch({ type: 'SET_QUALIFYING_RESULTS', payload: [] });
      }
    } catch (error) {
      console.error('Error fetching qualifying results:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch qualifying results' });
      dispatch({ type: 'SET_QUALIFYING_RESULTS', payload: [] });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const fetchDriverInfo = async (driverId: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const data = await getDriverInfo(driverId);
      if (data) {
        dispatch({ type: 'SET_SELECTED_DRIVER', payload: data });
      } else {
        const fallbackDriver = fallbackData.driverStandings.find(d => d.Driver.driverId === driverId);
        if (fallbackDriver) {
          dispatch({ type: 'SET_SELECTED_DRIVER', payload: fallbackDriver.Driver as Driver });
        } else {
          dispatch({ type: 'SET_SELECTED_DRIVER', payload: null });
        }
      }
    } catch (error) {
      console.error('Error fetching driver info:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch driver info' });
      const fallbackDriver = fallbackData.driverStandings.find(d => d.Driver.driverId === driverId);
      if (fallbackDriver) {
        dispatch({ type: 'SET_SELECTED_DRIVER', payload: fallbackDriver.Driver as Driver });
      } else {
        dispatch({ type: 'SET_SELECTED_DRIVER', payload: null });
      }
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const fetchConstructorInfo = async (constructorId: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const data = await getConstructorInfo(constructorId);
      if (data) {
        dispatch({ type: 'SET_SELECTED_CONSTRUCTOR', payload: data });
      } else {
        const fallbackConstructor = fallbackData.constructorStandings.find(c => c.Constructor.constructorId === constructorId);
        if (fallbackConstructor) {
          dispatch({ type: 'SET_SELECTED_CONSTRUCTOR', payload: fallbackConstructor.Constructor as Constructor });
        } else {
          dispatch({ type: 'SET_SELECTED_CONSTRUCTOR', payload: null });
        }
      }
    } catch (error) {
      console.error('Error fetching constructor info:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch constructor info' });
      const fallbackConstructor = fallbackData.constructorStandings.find(c => c.Constructor.constructorId === constructorId);
      if (fallbackConstructor) {
        dispatch({ type: 'SET_SELECTED_CONSTRUCTOR', payload: fallbackConstructor.Constructor as Constructor });
      } else {
        dispatch({ type: 'SET_SELECTED_CONSTRUCTOR', payload: null });
      }
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const fetchLapTimes = async (round: number, driverId: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const data = await getLapTimes(round, driverId);
      if (data) {
        dispatch({ type: 'SET_LAP_TIMES', payload: data });
      } else {
        dispatch({ type: 'SET_LAP_TIMES', payload: [] });
      }
    } catch (error) {
      console.error('Error fetching lap times:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch lap times' });
      dispatch({ type: 'SET_LAP_TIMES', payload: [] });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const fetchPitStops = async (round: number) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const data = await getPitStops(round);
      if (data) {
        dispatch({ type: 'SET_PIT_STOPS', payload: data });
      } else {
        dispatch({ type: 'SET_PIT_STOPS', payload: [] });
      }
    } catch (error) {
      console.error('Error fetching pit stops:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch pit stops' });
      dispatch({ type: 'SET_PIT_STOPS', payload: [] });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const fetchRaceWeather = async (round: number) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const data = await getRaceWeather(round);
      if (data) {
        dispatch({ type: 'SET_WEATHER', payload: data });
      } else {
        dispatch({ type: 'SET_WEATHER', payload: fallbackData.weather as Weather });
      }
    } catch (error) {
      console.error('Error fetching race weather:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch race weather' });
      dispatch({ type: 'SET_WEATHER', payload: fallbackData.weather as Weather });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const fetchDriverStats = async (driverId: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const data = await getDriverStats(driverId);
      if (data) {
        dispatch({ type: 'SET_DRIVER_STATS', payload: data });
      } else {
        dispatch({ type: 'SET_DRIVER_STATS', payload: fallbackData.driverStats as DriverStats });
      }
    } catch (error) {
      console.error('Error fetching driver stats:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch driver stats' });
      dispatch({ type: 'SET_DRIVER_STATS', payload: fallbackData.driverStats as DriverStats });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const fetchConstructorStats = async (constructorId: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const data = await getConstructorStats(constructorId);
      if (data) {
        dispatch({ type: 'SET_CONSTRUCTOR_STATS', payload: data });
      } else {
        dispatch({ type: 'SET_CONSTRUCTOR_STATS', payload: fallbackData.constructorStats as ConstructorStats });
      }
    } catch (error) {
      console.error('Error fetching constructor stats:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch constructor stats' });
      dispatch({ type: 'SET_CONSTRUCTOR_STATS', payload: fallbackData.constructorStats as ConstructorStats });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const fetchLiveTiming = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const data = await getLiveTiming();
      if (data) {
        dispatch({ type: 'SET_LIVE_TIMING', payload: data });
      } else {
        dispatch({ type: 'SET_LIVE_TIMING', payload: null });
      }
    } catch (error) {
      console.error('Error fetching live timing:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch live timing' });
      dispatch({ type: 'SET_LIVE_TIMING', payload: null });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  // Load initial data
  useEffect(() => {
    fetchDriverStandings();
    fetchConstructorStandings();
    fetchRaceSchedule();
  }, []);

  const value = {
    state,
    dispatch,
    fetchDriverStandings,
    fetchConstructorStandings,
    fetchRaceSchedule,
    fetchRaceResults,
    fetchQualifyingResults,
    fetchDriverInfo,
    fetchConstructorInfo,
    fetchLapTimes,
    fetchPitStops,
    fetchRaceWeather,
    fetchDriverStats,
    fetchConstructorStats,
    fetchLiveTiming
  };

  return <F1Context.Provider value={value}>{children}</F1Context.Provider>;
}

export function useF1() {
  const context = useContext(F1Context);
  if (!context) {
    throw new Error('useF1 must be used within an F1Provider');
  }
  return context;
} 