export interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  source: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  verified: boolean;
  location: string;
  url: string;
  content: string;
}

export interface NewsSource {
  id: string;
  name: string;
  location: string;
  logo?: string;
  verified: boolean;
}

export interface Location {
  id: string;
  name: string;
  country: string;
}

export type Language = 'en' | 'es' | 'fr' | 'de' | 'id' | 'zh';