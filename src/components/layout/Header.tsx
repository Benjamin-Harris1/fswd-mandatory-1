import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="relative text-white bg-gray-900 rounded-lg shadow-lg">
      <div className="container flex items-center justify-between px-6 py-6 mx-auto">
        <NavLink to="/" className="text-2xl font-bold text-white hover:text-gray-300">
          Movies
        </NavLink>
      </div>
    </header>
  );
}
