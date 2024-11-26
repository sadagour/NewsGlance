import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { LocationSelector } from './LocationSelector';
import { SourceSelector } from './SourceSelector';
import type { Location, NewsSource } from '../types/news';

interface UserSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLocations: Location[];
  onSelectLocations: (locations: Location[]) => void;
  selectedSources: NewsSource[];
  onSelectSources: (sources: NewsSource[]) => void;
}

export function UserSettings({
  isOpen,
  onClose,
  selectedLocations,
  onSelectLocations,
  selectedSources,
  onSelectSources,
}: UserSettingsProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex items-center justify-between"
                >
                  User Settings
                  <button
                    onClick={onClose}
                    className="rounded-full p-1 hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </Dialog.Title>

                <div className="mt-6 space-y-8">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">News Locations</h4>
                    <p className="text-sm text-gray-500 mb-4">
                      Select locations to receive news from
                    </p>
                    <LocationSelector
                      selectedLocations={selectedLocations}
                      onSelectLocations={onSelectLocations}
                    />
                  </div>

                  {selectedLocations.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">News Sources</h4>
                      <p className="text-sm text-gray-500 mb-4">
                        Choose your preferred news sources
                      </p>
                      <SourceSelector
                        selectedLocations={selectedLocations}
                        selectedSources={selectedSources}
                        onSelectSources={onSelectSources}
                      />
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}