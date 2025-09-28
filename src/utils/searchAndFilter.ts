import type { MediaItem } from "../types/movie";

// Simple search function - searches title and overview
export const searchMedia = (items: MediaItem[], query: string): MediaItem[] => {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return items;

  return items.filter((item) => item.title.toLowerCase().includes(searchTerm) || item.overview.toLowerCase().includes(searchTerm));
};

// Simple filter by genre
export const filterByGenre = (items: MediaItem[], genre: string): MediaItem[] => {
  if (!genre || genre === "all") return items;
  return items.filter((item) => item.genre.some((g) => g.toLowerCase() === genre.toLowerCase()));
};

// Simple filter by type
export const filterByType = (items: MediaItem[], type: string): MediaItem[] => {
  if (!type || type === "all") return items;
  return items.filter((item) => item.type === type);
};

// Filter by release year
export const filterByYear = (items: MediaItem[], year: string): MediaItem[] => {
  if (!year || year === "all") return items;
  return items.filter((item) => item.year.toString() === year);
};

// Sort items by different criteria
export const sortMedia = (items: MediaItem[], sortBy: string): MediaItem[] => {
  const sortedItems = [...items];

  switch (sortBy) {
    case "alphabetical":
      return sortedItems.sort((a, b) => a.title.localeCompare(b.title));
    case "newest":
      return sortedItems.sort((a, b) => b.year - a.year);
    case "oldest":
      return sortedItems.sort((a, b) => a.year - b.year);
    case "rating":
      return sortedItems.sort((a, b) => b.rating - a.rating);
    default:
      return sortedItems;
  }
};

// Get unique genres from items
export const getUniqueGenres = (items: MediaItem[]): string[] => {
  const genres = new Set<string>();
  items.forEach((item) => {
    item.genre.forEach((g) => genres.add(g));
  });
  return Array.from(genres).sort();
};

// Get unique years from items
export const getUniqueYears = (items: MediaItem[]): number[] => {
  const years = new Set<number>();
  items.forEach((item) => years.add(item.year));
  return Array.from(years).sort((a, b) => b - a);
};
