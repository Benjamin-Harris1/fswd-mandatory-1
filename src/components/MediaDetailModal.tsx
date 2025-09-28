import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import type { MediaItem } from "../types/movie";

interface MediaDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  media: MediaItem | null;
}

export default function MediaDetailModal({ isOpen, onClose, media }: MediaDetailModalProps) {
  if (!media) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/75" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto max-w-2xl w-full bg-white rounded-lg shadow-xl max-h-[90vh] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <DialogTitle className="text-lg font-medium text-gray-900">{media.title}</DialogTitle>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="overflow-y-auto max-h-[80vh]">
            {/* Poster and Basic Info */}
            <div className="relative">
              <img src={media.backdropUrl} alt={media.title} className="w-full h-80 object-cover object-center" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h2 className="text-3xl font-bold text-white mb-2">{media.title}</h2>
                <div className="flex items-center gap-4 text-white">
                  <span>{media.year}</span>
                  <span>⭐ {media.rating}/10</span>
                  <span className="capitalize">{media.genre.join(", ")}</span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Overview</h3>
                <p className="text-gray-700 leading-relaxed">{media.overview}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-1 text-gray-900">Release Date</h4>
                  <p className="text-gray-600">{media.releaseDate}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-900">Genre</h4>
                  <p className="text-gray-600">{media.genre.join(", ")}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-900">Rating</h4>
                  <p className="text-gray-600">⭐ {media.rating}/10</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-900">Type</h4>
                  <p className="text-gray-600 capitalize">{media.type === "movie" ? "Movie" : "TV Show"}</p>
                </div>
              </div>

              {/* Additional details based on type */}
              {media.type === "movie" && media.duration && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold mb-2 text-gray-900">Movie Details</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-500">Duration:</span>
                      <p className="text-gray-700">{media.duration} minutes</p>
                    </div>
                    {media.director && (
                      <div>
                        <span className="text-sm text-gray-500">Director:</span>
                        <p className="text-gray-700">{media.director}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {media.type === "tv" && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold mb-2 text-gray-900">TV Show Details</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {media.seasons && (
                      <div>
                        <span className="text-sm text-gray-500">Seasons:</span>
                        <p className="text-gray-700">{media.seasons}</p>
                      </div>
                    )}
                    {media.episodes && (
                      <div>
                        <span className="text-sm text-gray-500">Episodes:</span>
                        <p className="text-gray-700">{media.episodes}</p>
                      </div>
                    )}
                    {media.status && (
                      <div>
                        <span className="text-sm text-gray-500">Status:</span>
                        <p className="text-gray-700">{media.status}</p>
                      </div>
                    )}
                    {media.creator && (
                      <div>
                        <span className="text-sm text-gray-500">Creator:</span>
                        <p className="text-gray-700">{media.creator}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end px-6 py-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
