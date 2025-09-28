import type { MediaItem } from "../types/movie";

// Simple search function - searches title and overview
export const searchMedia = (items: MediaItem[], query: string): MediaItem[] => {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return items;

  return items.filter((item) => item.title.toLowerCase().includes(searchTerm) || item.overview.toLowerCase().includes(searchTerm));
};

// Simple filter by genre
export const filterByGenre = (items: MediaItem[], genre: string): MediaItem[] => {
  if (!genre) return items;
  return items.filter((item) => item.genre.some((g) => g.toLowerCase() === genre.toLowerCase()));
};

// Simple filter by type
export const filterByType = (items: MediaItem[], type: string): MediaItem[] => {
  if (!type || type === "all") return items;
  return items.filter((item) => item.type === type);
};
