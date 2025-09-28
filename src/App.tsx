import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-lists" element={<div>My Lists Page</div>} />
          <Route path="/search" element={<div>Search Page</div>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
