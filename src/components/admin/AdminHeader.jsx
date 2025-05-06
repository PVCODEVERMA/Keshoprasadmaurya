import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ThemeToggleButton } from "../../pages/admin/ThemeToggleButton";
import NotificationDropdown from "../../ui/dropdown/NotificationDropdown";
import UserDropdown from "../../ui/dropdown/UserDropdown";

export default function AdminHeader({ onMenuClick }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <header className="bg-white text-black dark:bg-green-600 dark:text-white p-4 flex items-center justify-between shadow md:justify-start md:gap-6">
      {/* Sidebar Menu Button */}
      <button
        onClick={onMenuClick}
        className="md:hidden focus:outline-none"
        aria-label="Open sidebar"
      >
        <FaBars className="w-6 h-6" />
      </button>

      {/* Right section: Theme, Notification, User */}
      <div className="ml-auto flex items-center gap-4">
        {/* Search Section */}
        <div className="relative hidden md:flex items-center">
          <input
            type="text"
            className={`${
              isSearchOpen ? "w-64 opacity-100 px-4" : "w-10 opacity-0 px-0"
            } py-2 border border-gray-300 dark:border-gray-200 rounded-full transition-all duration-300 ease-in-out bg-white dark:bg-green-700 text-black dark:text-white focus:outline-none`}
            placeholder="खोजें..."
            style={{ visibility: isSearchOpen ? "visible" : "hidden" }}
          />
          <button
            onClick={toggleSearch}
            className="absolute right-1 text-gray-600 dark:text-white hover:text-green-600 p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <ThemeToggleButton />
        <NotificationDropdown />
        <UserDropdown />
      </div>
    </header>
  );
}
