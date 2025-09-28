import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/home/HomePage";
import MoviePage from "./pages/movies/MoviePage";
import TVPage from "./pages/tvshows/TVPage";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/tv-shows" element={<TVPage />} />
          <Route path="/my-lists" element={<div>My Lists Page</div>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
