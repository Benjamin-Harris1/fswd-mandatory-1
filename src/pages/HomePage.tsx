import { MagnifyingGlassIcon, FilmIcon } from "@heroicons/react/24/outline";

// Dummy movie data
const dummyMovies = [
  { id: 1, title: "The Matrix", year: 1999, poster: null },
  { id: 2, title: "Inception", year: 2010, poster: null },
  { id: 3, title: "Interstellar", year: 2014, poster: null },
  { id: 4, title: "The Dark Knight", year: 2008, poster: null },
  { id: 5, title: "Pulp Fiction", year: 1994, poster: null },
  { id: 6, title: "Fight Club", year: 1999, poster: null },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Movie Tracker</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Discover, track, and rate your favorite movies and TV shows.</p>

        {/* Quick search bar */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies and TV shows..."
              className="w-full px-4 py-3 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Quick stats/placeholder sections */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
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
        <h2 className="text-2xl font-bold text-white mb-6">Popular Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {dummyMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-lg aspect-[2/3] flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <div className="text-gray-400 text-center p-4">
                <FilmIcon className="w-12 h-12 mx-auto mb-2 text-blue-400" />
                <p className="text-sm font-medium text-white">{movie.title}</p>
                <p className="text-xs text-gray-400">({movie.year})</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
