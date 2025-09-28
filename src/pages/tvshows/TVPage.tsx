import { dummyMoviesAndTVShows } from "../../data/dummydata";
import MediaCard from "../../components/MediaCard";
import type { MediaItem } from "../../types/movie";

export default function TVPage() {
  const shows: MediaItem[] = dummyMoviesAndTVShows.filter((item) => item.type === "tv");

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold text-white mb-4">TV Shows</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Discover and explore our collection of TV shows</p>
      </section>

      {/* TV Shows Grid */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-6">All TV Shows ({shows.length})</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {shows.map((show) => (
            <MediaCard
              key={show.id}
              item={show}
              onClick={() => {
                // TODO: Modal view for details
                console.log("Selected show:", show.title);
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
