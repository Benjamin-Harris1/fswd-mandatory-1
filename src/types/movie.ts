export type MediaType = "movie" | "tv";

export interface MediaItem {
  id: number;
  title: string;
  overview: string;
  posterUrl?: string;
  backdropUrl?: string;
  releaseDate: string;
  rating: number; // 0-10 scale
  genre: string[];
  year: number;
  type: MediaType;
  cast: string[];

  // Movie specific (optional)
  duration?: number; // in minutes
  director?: string;

  // TV specific (optional)
  seasons?: number;
  episodes?: number;
  status?: "Ongoing" | "Ended" | "Cancelled";
  creator?: string;
}

// User list types
export interface UserList {
  wantToWatch: MediaItem[];
  currentlyWatching: MediaItem[];
  completed: MediaItem[];
}

export interface UserRating {
  mediaId: number;
  rating: number; // 1-5 stars
  review?: string;
  dateRated: string;
}
