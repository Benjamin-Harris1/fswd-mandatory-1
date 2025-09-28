import { dummyMoviesAndTVShows } from "../../data/dummydata";
import MediaCard from "../../components/MediaCard";
import MainLayout from "../../components/layout/MainLayout";
import type { MediaItem } from "../../types/movie";
import { useMediaFilter } from "../../hooks/useMediaFilter";

export default function TVPage() {
  const allShows: MediaItem[] = dummyMoviesAndTVShows.filter((item) => item.type === "tv");

  const { setSearchQuery, setSelectedGenre, setSelectedSort, filteredItems, genres } = useMediaFilter(allShows);

  return (
    <MainLayout onSearch={setSearchQuery} onGenreChange={setSelectedGenre} onSortChange={setSelectedSort} genres={genres}>
      {/* TV Shows Grid */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">
            {filteredItems.length === allShows.length
              ? `All TV Shows (${filteredItems.length})`
              : `Showing ${filteredItems.length} of ${allShows.length} TV shows`}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((show) => (
              <MediaCard
                key={show.id}
                item={show}
                onClick={() => {
                  // TODO: Modal view for details
                  console.log("Selected show:", show.title);
                }}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No TV shows found matching your criteria.</p>
              <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
