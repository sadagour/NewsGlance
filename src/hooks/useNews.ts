import { useState, useEffect, useCallback } from 'react';
import { searchNews } from '../services/newsApi';
import type { NewsArticle, Location } from '../types/news';

export function useNews(locations: Location[]) {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = useCallback(async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    setError(null);

    try {
      const { data: newArticles, totalResults: total, error: apiError } = await searchNews(
        locations,
        page,
        10
      );

      if (apiError) {
        setError(apiError);
        return;
      }

      if (total !== undefined) {
        setTotalResults(total);
        setHasMore(articles.length + newArticles.length < total);
      } else {
        setHasMore(newArticles.length > 0);
      }

      setArticles(prev => {
        const existing = new Set(prev.map(a => a.id));
        const unique = newArticles.filter(a => !existing.has(a.id));
        return [...prev, ...unique];
      });

      if (newArticles.length > 0) {
        setPage(prev => prev + 1);
      }
    } catch (err) {
      setError('Failed to fetch news');
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [locations, page, hasMore, loading, articles.length]);

  useEffect(() => {
    setArticles([]);
    setPage(1);
    setHasMore(true);
    setError(null);
    setTotalResults(0);
  }, [locations]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 1000
      ) {
        fetchNews();
      }
    };

    window.addEventListener('scroll', handleScroll);
    fetchNews();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchNews]);

  return {
    articles,
    loading,
    error,
    hasMore,
    totalResults,
    refetch: () => {
      setArticles([]);
      setPage(1);
      setHasMore(true);
      setError(null);
      setTotalResults(0);
    }
  };
}