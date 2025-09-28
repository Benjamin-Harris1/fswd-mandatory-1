import { dummyMoviesAndTVShows } from "../../data/dummydata";
import MediaCard from "../../components/MediaCard";
import type { MediaItem } from "../../types/movie";

export default function HomePage() {
  const trendingItems: MediaItem[] = dummyMoviesAndTVShows.slice(0, 6);

  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Movie Tracker</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Discover, track, and rate your favorite movies and TV shows.</p>
      </section>

      {/* Quick stats/placeholder sections */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Want to Watch</h3>
          <p className="text-3xl font-bold text-blue-400">0</p>
          <p className="text-gray-400 text-sm">Movies & Shows</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Currently Watching</h3>
          <p className="text-3xl font-bold text-yellow-400">0</p>
          <p className="text-gray-400 text-sm">In Progress</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Completed</h3>
          <p className="text-3xl font-bold text-green-400">0</p>
          <p className="text-gray-400 text-sm">Finished</p>
        </div>
      </section>

      {/* Trending section with dummy data */}
      <section className="py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Popular Movies & TV Shows</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {trendingItems.map((item) => (
            <MediaCard
              key={item.id}
              item={item}
              onClick={() => {
                // TODO: Modal view
                console.log("Selected:", item.title);
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
