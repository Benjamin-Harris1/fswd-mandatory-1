import { FilmIcon, TvIcon } from "@heroicons/react/24/outline";
import type { MediaItem } from "../types/movie";

interface MediaCardProps {
  item: MediaItem;
  onClick?: () => void;
}

export default function MediaCard({ item, onClick }: MediaCardProps) {
  const year = item.year;
  const rating = item.rating.toFixed(1);
  const isMovie = item.type === "movie";

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors cursor-pointer group" onClick={onClick}>
      <div className="aspect-[2/3] relative bg-gray-700">
        {item.posterUrl ? (
          <img
            src={item.posterUrl}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {isMovie ? <FilmIcon className="w-16 h-16 text-gray-500" /> : <TvIcon className="w-16 h-16 text-gray-500" />}
          </div>
        )}

        {/* Rating badge */}
        {item.rating > 0 && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-yellow-400 text-xs px-2 py-1 rounded">⭐ {rating}</div>
        )}

        {/* Media type badge */}
        <div className="absolute top-2 left-2">
          {isMovie ? <FilmIcon className="w-5 h-5 text-blue-400" title="Movie" /> : <TvIcon className="w-5 h-5 text-green-400" title="TV Show" />}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-white text-sm mb-1 line-clamp-2 leading-tight">{item.title}</h3>
        <p className="text-gray-400 text-xs">
          {year} • {isMovie ? "Movie" : "TV Show"}
        </p>

        {item.overview && <p className="text-gray-400 text-xs mt-2 line-clamp-2 leading-relaxed">{item.overview}</p>}
      </div>
    </div>
  );
}
