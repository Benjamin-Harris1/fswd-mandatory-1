import { HeartIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 border-t border-gray-700 mt-16">
      <div className="container mx-auto max-w-[990px] px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400">
            <p className="text-sm">© Random footer.</p>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-sm">Made with</span>
            <HeartIcon className="w-4 h-4 text-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
