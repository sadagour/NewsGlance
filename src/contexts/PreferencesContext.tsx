import { createContext, useContext, useEffect, useState } from 'react';
import type { Language, Location, NewsSource } from '../types/news';

interface Preferences {
  language: Language;
  locations: Location[];
  sources: NewsSource[];
}

interface PreferencesContextType {
  preferences: Preferences;
  setLanguage: (language: Language) => void;
  setLocations: (locations: Location[]) => void;
  setSources: (sources: NewsSource[]) => void;
}

const PreferencesContext = createContext<PreferencesContextType | null>(null);

const STORAGE_KEY = 'news-pwa-preferences';

const defaultPreferences: Preferences = {
  language: 'en',
  locations: [],
  sources: [],
};

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<Preferences>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultPreferences;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [preferences]);

  const setLanguage = (language: Language) => {
    setPreferences(prev => ({ ...prev, language }));
  };

  const setLocations = (locations: Location[]) => {
    setPreferences(prev => ({ ...prev, locations }));
  };

  const setSources = (sources: NewsSource[]) => {
    setPreferences(prev => ({ ...prev, sources }));
  };

  return (
    <PreferencesContext.Provider
      value={{ preferences, setLanguage, setLocations, setSources }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
}