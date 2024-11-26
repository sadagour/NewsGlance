import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';
import { BookmarkPlus, MoreHorizontal, ChevronLeft, Globe, Share2, ChevronDown } from 'lucide-react';
import type { NewsArticle } from '../types/news';
import { usePreferences } from '../contexts/PreferencesContext';

interface NewsCardProps {
  article: NewsArticle;
  expanded?: boolean;
  onBack?: () => void;
}

export function NewsCard({ article, expanded = false, onBack }: NewsCardProps) {
  const { preferences } = usePreferences();
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`relative bg-white overflow-hidden rounded-xl shadow-sm ${
        expanded ? 'min-h-screen' : 'h-[280px] cursor-pointer'
      }`}
    >
      <div className={`relative ${expanded ? 'h-[40vh]' : 'h-full'}`}>
        <img
          src={article.imageUrl}
          alt={article.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className={`${expanded ? 'absolute top-0 inset-x-0' : 'absolute inset-0'}`}>
        <div className="h-full p-4 flex flex-col">
          <div className="flex items-center justify-between text-white">
            {expanded ? (
              <button
                onClick={onBack}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
            ) : null}
            <div className="flex-1" />
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <BookmarkPlus size={24} />
            </button>
            {expanded && (
              <>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <Share2 size={24} />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center space-x-1">
                  <Globe size={24} />
                  <span className="text-sm">{preferences.language.toUpperCase()}</span>
                </button>
              </>
            )}
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <MoreHorizontal size={24} />
            </button>
          </div>

          <div className="flex-1" />

          <div className="text-white">
            <span className="px-3 py-1 rounded-full bg-blue-500 text-sm font-medium">
              {article.category}
            </span>
            <h2 className={`${expanded ? 'text-3xl' : 'text-2xl'} font-bold mt-2 leading-tight`}>
              {article.title}
            </h2>
            
            <div className="flex items-center mt-3 space-x-2">
              <span className="text-white/80 flex items-center">
                {article.source}
                {article.verified && (
                  <svg className="w-4 h-4 ml-1 text-blue-500 fill-current" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                )}
              </span>
              <span className="text-white/60">•</span>
              <span className="text-white/60">
                {formatDistanceToNow(new Date(article.publishedAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="relative bg-white min-h-[60vh] px-4 py-6">
          <div className="max-w-2xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(article.author)}&background=random`}
                  alt={article.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{article.author}</p>
                  <p className="text-gray-500 text-sm">
                    {formatDistanceToNow(new Date(article.publishedAt), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xl text-gray-600 font-medium leading-relaxed">
                  {article.summary}
                </p>
                
                <AnimatePresence>
                  <motion.div
                    initial={false}
                    animate={{ height: isContentExpanded ? 'auto' : '200px' }}
                    className="relative overflow-hidden"
                  >
                    <div className="text-gray-800 leading-relaxed">
                      {article.content}
                    </div>
                    {!isContentExpanded && (
                      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
                    )}
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={() => setIsContentExpanded(!isContentExpanded)}
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <span>{isContentExpanded ? 'Show less' : 'Read more'}</span>
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform ${
                      isContentExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-500 hover:text-blue-600 transition-colors"
                >
                  Read full article on {article.source} →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}