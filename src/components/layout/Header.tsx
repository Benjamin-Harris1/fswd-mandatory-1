import { NavLink, useLocation } from "react-router-dom";
import { FilmIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onGenreChange?: (genre: string) => void;
  onSortChange?: (sort: string) => void;
  genres?: string[];
}

export default function Header({ onSearch, onGenreChange, onSortChange, genres = [] }: HeaderProps) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedSort, setSelectedSort] = useState("alphabetical");

  // Show search and filters only on movies and TV shows pages
  const showSearchAndFilters = location.pathname === "/movies" || location.pathname === "/tv-shows";

  // Reset state when changing pages
  useEffect(() => {
    setSearchQuery("");
    setSelectedGenre("all");
    setSelectedSort("alphabetical");
  }, [location.pathname]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
    if (onGenreChange) {
      onGenreChange(genre);
    }
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
    if (onSortChange) {
      onSortChange(sort);
    }
  };

  return (
    <header className="w-full text-white bg-gray-800 shadow-lg border-b border-gray-700 mb-2">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <NavLink to="/" className="flex items-center space-x-2 text-xl font-bold text-white hover:text-gray-300">
            <FilmIcon className="w-8 h-8 text-blue-400" />
            <span>Movies & TV Shows</span>
          </NavLink>

          {/* Middle: Search Bar (only on movies/TV pages) */}
          {showSearchAndFilters && (
            <div className="flex-1 max-w-lg relative">
              <input
                type="text"
                placeholder="Search movies and TV shows..."
                value={searchQuery}
                onChange={handleInputChange}
                className="w-full px-4 py-2 pl-10 text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          )}

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-4">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                Movies
              </NavLink>
              <NavLink
                to="/tv-shows"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                TV Shows
              </NavLink>
              <NavLink
                to="/my-lists"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                My Lists
              </NavLink>
            </nav>

            {/* Filter Controls (only on movies/TV pages) */}
            {showSearchAndFilters && (
              <div className="flex items-center gap-2">
                {/* Genre Filter */}
                <select
                  value={selectedGenre}
                  onChange={(e) => handleGenreChange(e.target.value)}
                  className="px-2 py-1.5 text-gray-900 bg-white rounded border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-xs"
                >
                  <option value="all">All Genres</option>
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={selectedSort}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="px-2 py-1.5 text-gray-900 bg-white rounded border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-xs"
                >
                  <option value="alphabetical">A-Z</option>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            )}

            {/* TODO: Add burgermenu for mobile view */}
          </div>
        </div>
      </div>
    </header>
  );
}
