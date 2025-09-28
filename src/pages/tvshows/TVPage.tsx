import { useState } from "react";
import { dummyMoviesAndTVShows } from "../../data/dummydata";
import MediaCard from "../../components/MediaCard";
import MediaDetailModal from "../../components/MediaDetailModal";
import MainLayout from "../../components/layout/MainLayout";
import type { MediaItem } from "../../types/movie";
import { useMediaFilter } from "../../hooks/useMediaFilter";

export default function TVPage() {
  const allTVShows: MediaItem[] = dummyMoviesAndTVShows.filter((item) => item.type === "tv");
  const [selectedTVShow, setSelectedTVShow] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { setSearchQuery, setSelectedGenre, setSelectedSort, filteredItems, genres } = useMediaFilter(allTVShows);

  const handleTVShowClick = (tvShow: MediaItem) => {
    setSelectedTVShow(tvShow);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTVShow(null);
  };

  return (
    <MainLayout onSearch={setSearchQuery} onGenreChange={setSelectedGenre} onSortChange={setSelectedSort} genres={genres}>
      {/* TV Shows Grid */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">
            {filteredItems.length === allTVShows.length
              ? `All TV Shows (${filteredItems.length})`
              : `Showing ${filteredItems.length} of ${allTVShows.length} TV shows`}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((tvShow) => <MediaCard key={tvShow.id} item={tvShow} onClick={() => handleTVShowClick(tvShow)} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No TV shows found matching your criteria.</p>
              <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <MediaDetailModal isOpen={isModalOpen} onClose={handleCloseModal} media={selectedTVShow} />
    </MainLayout>
  );
}
