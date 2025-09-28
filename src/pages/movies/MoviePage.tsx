import { useState } from "react";
import { dummyMoviesAndTVShows } from "../../data/dummydata";
import MediaCard from "../../components/MediaCard";
import MediaDetailModal from "../../components/MediaDetailModal";
import MainLayout from "../../components/layout/MainLayout";
import type { MediaItem } from "../../types/movie";
import { useMediaFilter } from "../../hooks/useMediaFilter";

export default function MoviePage() {
  const allMovies: MediaItem[] = dummyMoviesAndTVShows.filter((item) => item.type === "movie");
  const [selectedMovie, setSelectedMovie] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { setSearchQuery, setSelectedGenre, setSelectedSort, filteredItems, genres } = useMediaFilter(allMovies);

  const handleMovieClick = (movie: MediaItem) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <MainLayout onSearch={setSearchQuery} onGenreChange={setSelectedGenre} onSortChange={setSelectedSort} genres={genres}>
      {/* Movies Grid */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">
            {filteredItems.length === allMovies.length
              ? `All Movies (${filteredItems.length})`
              : `Showing ${filteredItems.length} of ${allMovies.length} movies`}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((movie) => <MediaCard key={movie.id} item={movie} onClick={() => handleMovieClick(movie)} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No movies found matching your criteria.</p>
              <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <MediaDetailModal isOpen={isModalOpen} onClose={handleCloseModal} media={selectedMovie} />
    </MainLayout>
  );
}
