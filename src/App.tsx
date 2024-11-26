import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Menu, Bell, Home, Globe, User } from 'lucide-react';
import { NewsCard } from './components/NewsCard';
import { LanguageSelector } from './components/LanguageSelector';
import { UserSettings } from './components/UserSettings';
import { usePreferences } from './contexts/PreferencesContext';
import { useNews } from './hooks/useNews';
import type { NewsArticle } from './types/news';

function App() {
  const { preferences, setLanguage, setLocations, setSources } = usePreferences();
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const { articles, loading, error, hasMore } = useNews(preferences.locations);
  const { ref, inView } = useInView({
    threshold: 0.1,
    onChange: (inView) => {
      if (inView && hasMore && !loading) {
        // Loading more articles is handled automatically by useNews
      }
    },
  });

  const filteredArticles = articles.filter(article => {
    if (preferences.sources.length === 0) return true;
    return preferences.sources.some(source => source.name === article.source);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedArticle ? (
        <NewsCard
          article={selectedArticle}
          expanded
          onBack={() => setSelectedArticle(null)}
        />
      ) : (
        <>
          <header className="sticky top-0 bg-white border-b z-10">
            <div className="max-w-2xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Menu size={24} />
                </button>
                <div className="flex items-center space-x-4">
                  <LanguageSelector 
                    selected={preferences.language} 
                    onSelect={setLanguage} 
                  />
                  <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                    <Bell size={24} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                  </button>
                </div>
              </div>
            </div>
          </header>

          <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Breaking News</h2>
                {error && (
                  <p className="text-red-500 text-sm bg-red-50 px-3 py-1 rounded-full">
                    {error}
                  </p>
                )}
              </div>
              <div className="space-y-4">
                {filteredArticles.length === 0 && !loading && !error && (
                  <div className="text-center py-8 text-gray-500">
                    <p>No articles found. Try selecting different locations or sources.</p>
                  </div>
                )}
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className="cursor-pointer"
                  >
                    <NewsCard article={article} />
                  </div>
                ))}
                {loading && (
                  <div className="animate-pulse space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-[280px] bg-gray-200 rounded-xl" />
                    ))}
                  </div>
                )}
                <div ref={ref} />
              </div>
            </section>
          </main>

          <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
            <div className="max-w-2xl mx-auto px-4 py-3">
              <div className="flex items-center justify-around">
                <button className="p-2 text-blue-500">
                  <Home size={24} />
                </button>
                <button className="p-2">
                  <Globe size={24} />
                </button>
                <button 
                  className="p-2"
                  onClick={() => setIsSettingsOpen(true)}
                >
                  <User size={24} />
                </button>
              </div>
            </div>
          </nav>

          <UserSettings
            isOpen={isSettingsOpen}
            onClose={() => setIsSettingsOpen(false)}
            selectedLocations={preferences.locations}
            onSelectLocations={setLocations}
            selectedSources={preferences.sources}
            onSelectSources={setSources}
          />
        </>
      )}
    </div>
  );
}

export default App;