import { mockNewsData } from '../mocks/newsData';
import type { NewsArticle, Location, NewsAPIResponse } from '../types/news';

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const NEWS_API_BASE_URL = 'https://newsapi.org/v2';

export async function searchNews(
  locations: Location[],
  page: number = 1,
  pageSize: number = 10
): Promise<{ data: NewsArticle[]; totalResults?: number; error?: string }> {
  try {
    // For development, return mock data
    const response = mockNewsData;
    
    if (response.status !== 'ok') {
      throw new Error('Invalid API response');
    }

    return {
      data: response.articles
        .filter(article => article.title && article.title !== '[Removed]')
        .map(mapArticleToNewsArticle),
      totalResults: response.totalResults
    };

    // Uncomment below for production API calls
    /*
    if (!NEWS_API_KEY) {
      throw new Error('News API key is not configured');
    }

    const country = locations.length > 0 ? locations[0].country.toLowerCase() : 'us';
    const response = await fetch(`${NEWS_API_BASE_URL}/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${NEWS_API_KEY}`);
    const data: NewsAPIResponse = await response.json();

    if (!response.ok) {
      throw new Error(data.status || 'Failed to fetch news');
    }

    return {
      data: data.articles
        .filter(article => article.title && article.title !== '[Removed]')
        .map(mapArticleToNewsArticle),
      totalResults: data.totalResults
    };
    */
  } catch (error) {
    console.error('News API Error:', error);
    return {
      data: [],
      error: error instanceof Error ? error.message : 'Failed to fetch news'
    };
  }
}

function mapArticleToNewsArticle(article: NewsAPIResponse['articles'][0]): NewsArticle {
  return {
    id: btoa(article.url),
    title: article.title,
    summary: article.description || article.content || 'No description available',
    category: getCategoryFromArticle(article),
    source: article.source.name,
    author: article.author || 'Unknown',
    publishedAt: article.publishedAt,
    imageUrl: article.urlToImage || getDefaultImage(),
    verified: isVerifiedSource(article.source.name),
    location: getLocationFromSource(article.source.name),
  };
}

function getCategoryFromArticle(article: NewsAPIResponse['articles'][0]): string {
  const categories = ['Technology', 'Business', 'Health', 'Science', 'Sports', 'Entertainment'];
  const content = `${article.title} ${article.description || ''} ${article.content || ''}`.toLowerCase();
  
  for (const category of categories) {
    if (content.includes(category.toLowerCase())) {
      return category;
    }
  }
  
  return 'General';
}

function isVerifiedSource(sourceName: string): boolean {
  const verifiedSources = [
    'Reuters', 'Associated Press', 'BBC News', 'CNN', 'The New York Times',
    'The Washington Post', 'The Guardian', 'Bloomberg', 'CNBC', 'ABC News'
  ];
  return verifiedSources.some(name => sourceName.includes(name));
}

function getLocationFromSource(sourceName: string): string {
  const sourceLocations: Record<string, string> = {
    'BBC': 'gb',
    'Reuters': 'gb',
    'CNN': 'us',
    'NYT': 'us',
    'Washington Post': 'us',
    'Guardian': 'gb',
    'Times of India': 'in',
    'ABC': 'au',
  };

  for (const [key, value] of Object.entries(sourceLocations)) {
    if (sourceName.includes(key)) {
      return value;
    }
  }

  return 'us';
}

function getDefaultImage(): string {
  const images = [
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80',
    'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800&q=80',
    'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80',
  ];
  return images[Math.floor(Math.random() * images.length)];
}