import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/home/HomePage";
import MoviePage from "./pages/movies/MoviePage";
import TVPage from "./pages/tvshows/TVPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/tv-shows" element={<TVPage />} />
        <Route
          path="/my-lists"
          element={
            <MainLayout>
              <div>My Lists Page</div>
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
