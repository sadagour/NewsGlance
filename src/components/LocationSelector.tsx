import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { MapPin, Check } from 'lucide-react';
import type { Location } from '../types/news';

const mockLocations: Location[] = [
  { id: 'ny', name: 'New York', country: 'USA' },
  { id: 'ld', name: 'London', country: 'UK' },
  { id: 'tk', name: 'Tokyo', country: 'Japan' },
  { id: 'jk', name: 'Jakarta', country: 'Indonesia' },
  { id: 'sg', name: 'Singapore', country: 'Singapore' },
];

interface LocationSelectorProps {
  selectedLocations: Location[];
  onSelectLocations: (locations: Location[]) => void;
}

export function LocationSelector({ selectedLocations, onSelectLocations }: LocationSelectorProps) {
  const [query, setQuery] = useState('');

  const filteredLocations = query === ''
    ? mockLocations
    : mockLocations.filter((location) =>
        location.name.toLowerCase().includes(query.toLowerCase()) ||
        location.country.toLowerCase().includes(query.toLowerCase())
      );

  const toggleLocation = (location: Location) => {
    const isSelected = selectedLocations.some(l => l.id === location.id);
    if (isSelected) {
      onSelectLocations(selectedLocations.filter(l => l.id !== location.id));
    } else {
      onSelectLocations([...selectedLocations, location]);
    }
  };

  return (
    <div className="w-full">
      <Combobox value={selectedLocations} onChange={onSelectLocations} multiple>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left border focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
            <div className="flex items-center px-3">
              <MapPin size={20} className="text-gray-400" />
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                placeholder="Search locations..."
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredLocations.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredLocations.map((location) => {
                  const isSelected = selectedLocations.some(l => l.id === location.id);
                  return (
                    <Combobox.Option
                      key={location.id}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-blue-500 text-white' : 'text-gray-900'
                        }`
                      }
                      value={location}
                      onClick={() => toggleLocation(location)}
                    >
                      {({ active }) => (
                        <>
                          <span className="block truncate font-medium">
                            {location.name}
                          </span>
                          <span className="block truncate text-sm text-gray-500">
                            {location.country}
                          </span>
                          {isSelected && (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-blue-500'
                              }`}
                            >
                              <Check size={16} />
                            </span>
                          )}
                        </>
                      )}
                    </Combobox.Option>
                  );
                })
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      {selectedLocations.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {selectedLocations.map((location) => (
            <span
              key={location.id}
              className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
            >
              <MapPin size={14} />
              {location.name}
              <button
                onClick={() => toggleLocation(location)}
                className="ml-1 rounded-full hover:bg-blue-200 p-0.5"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}