import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
  onSearch?: (query: string) => void;
  onGenreChange?: (genre: string) => void;
  onSortChange?: (sort: string) => void;
  genres?: string[];
};

export default function MainLayout({ children, onSearch, onGenreChange, onSortChange, genres }: LayoutProps) {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col">
      <Header onSearch={onSearch} onGenreChange={onGenreChange} onSortChange={onSortChange} genres={genres} />
      <main className="flex-grow">
        <div className="mx-auto container px-2 lg:px-0">
          <div className="pt-4">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
