import { NavLink } from "react-router-dom";
import { FilmIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="w-full text-white bg-gray-800 shadow-lg border-b border-gray-700">
      <div className="container flex items-center justify-between px-6 py-6 mx-auto">
        <NavLink to="/" className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-gray-300">
          <FilmIcon className="w-8 h-8 text-blue-400" />
          <span>Movies & TV Shows</span>
        </NavLink>

        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>
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

        {/* TODO: Add burgermenu for mobile view */}
      </div>
    </header>
  );
}
