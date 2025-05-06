
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import { useAuth } from "../../context/AuthContext";
import owner from "../../assets/profile/owner.jpg";
const DropdownItem = ({ children }) => <div>{children}</div>;

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
      >
        <img
          src={owner}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="hidden sm:block">{user?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0  mt-4 w-48 bg-white rounded-lg shadow-lg dark:bg-green-600 z-50">
          <div className="border-b  border-t py-2 shadow-lg">
          <span className="block font-medium text-gray-700 text-theme-sm dark:text-white px-4 py-2 ">
            Musharof Chowdhury
          </span>
          <span className=" block text-sm text-gray-500 dark:text-white px-4  ">
            randomuser@pimjo.com
          </span>
        </div>
          <div className="p-2">
            <DropdownItem>
              <Link
                to="/admin/profile"
                className="block px-4 py-2 text-sm  hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Profile
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link
                to="/admin/settings"
                className="block px-4 py-2 text-sm  hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Settings
              </Link>
            </DropdownItem>
            <DropdownItem>
              <button
                onClick={logout}
                className="w-full px-4 py-2 text-sm text-left  hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Sign Out
              </button>
            </DropdownItem>
          </div>
        </div>
      )}
    </div>
  );
}
