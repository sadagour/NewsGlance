import { useEffect, useState } from 'react';
import { NewspaperIcon, Check } from 'lucide-react';
import type { NewsSource, Location } from '../types/news';

// Mock data - replace with actual API call
const mockSources: NewsSource[] = [
  { id: 'cnn', name: 'CNN', location: 'ny', verified: true },
  { id: 'bbc', name: 'BBC News', location: 'ld', verified: true },
  { id: 'reuters', name: 'Reuters', location: 'ny', verified: true },
  { id: 'nikkei', name: 'Nikkei Asia', location: 'tk', verified: true },
  { id: 'kompas', name: 'Kompas', location: 'jk', verified: true },
  { id: 'cna', name: 'CNA', location: 'sg', verified: true },
];

interface SourceSelectorProps {
  selectedLocations: Location[];
  selectedSources: NewsSource[];
  onSelectSources: (sources: NewsSource[]) => void;
}

export function SourceSelector({
  selectedLocations,
  selectedSources,
  onSelectSources,
}: SourceSelectorProps) {
  const [availableSources, setAvailableSources] = useState<NewsSource[]>([]);

  useEffect(() => {
    // Filter sources based on selected locations
    const locationIds = selectedLocations.map(l => l.id);
    const filtered = mockSources.filter(source => 
      locationIds.includes(source.location)
    );
    setAvailableSources(filtered);
  }, [selectedLocations]);

  const toggleSource = (source: NewsSource) => {
    const isSelected = selectedSources.some(s => s.id === source.id);
    if (isSelected) {
      onSelectSources(selectedSources.filter(s => s.id !== source.id));
    } else {
      onSelectSources([...selectedSources, source]);
    }
  };

  return (
    <div className="space-y-2">
      {availableSources.map((source) => {
        const isSelected = selectedSources.some(s => s.id === source.id);
        return (
          <button
            key={source.id}
            className={`w-full flex items-center justify-between p-3 rounded-lg border ${
              isSelected
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:bg-gray-50'
            }`}
            onClick={() => toggleSource(source)}
          >
            <div className="flex items-center gap-3">
              <NewspaperIcon size={24} className="text-gray-400" />
              <div className="text-left">
                <p className="font-medium">{source.name}</p>
                {source.verified && (
                  <span className="text-sm text-blue-500">Verified Source</span>
                )}
              </div>
            </div>
            {isSelected && <Check size={20} className="text-blue-500" />}
          </button>
        );
      })}
    </div>
  );
}