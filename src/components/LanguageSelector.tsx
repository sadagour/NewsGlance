import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Globe } from 'lucide-react';
import type { Language } from '../types/news';

const languages: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  id: 'Bahasa Indonesia',
  zh: '中文',
};

interface LanguageSelectorProps {
  selected: Language;
  onSelect: (language: Language) => void;
}

export function LanguageSelector({ selected, onSelect }: LanguageSelectorProps) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100">
        <Globe size={20} />
        <span>{languages[selected]}</span>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            {Object.entries(languages).map(([code, name]) => (
              <Menu.Item key={code}>
                {({ active }) => (
                  <button
                    onClick={() => onSelect(code as Language)}
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}