import { useState, useMemo } from "react";
import type { MediaItem } from "../types/movie";
import { searchMedia, filterByGenre, sortMedia, getUniqueGenres } from "../utils/searchAndFilter";

export function useMediaFilter(items: MediaItem[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedSort, setSelectedSort] = useState("alphabetical");

  // Get unique values for filter options
  const genres = getUniqueGenres(items);

  // Apply filters and search
  const filteredItems = useMemo(() => {
    let filtered = items;

    // Apply search
    if (searchQuery) {
      filtered = searchMedia(filtered, searchQuery);
    }

    // Apply genre filter
    if (selectedGenre !== "all") {
      filtered = filterByGenre(filtered, selectedGenre);
    }

    // Apply sorting
    filtered = sortMedia(filtered, selectedSort);

    return filtered;
  }, [items, searchQuery, selectedGenre, selectedSort]);

  return {
    searchQuery,
    setSearchQuery,
    selectedGenre,
    setSelectedGenre,
    selectedSort,
    setSelectedSort,
    filteredItems,
    genres,
  };
}
