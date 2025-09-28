import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="mx-auto container px-2 lg:px-0">
          <div className="pt-4">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
