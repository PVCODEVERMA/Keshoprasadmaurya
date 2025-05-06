import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileBottomNavbar = () => {
  const location = useLocation();

  const [hasNewNotification, setHasNewNotification] = useState(true);

  const activeClass = (path) =>
    location.pathname === path ? "text-blue-600" : "text-gray-600";

  return (
    <nav className="fixed lg:hidden bottom-0 w-full bg-white border-t border-gray-200 z-50 shadow-lg">
      <div className="flex justify-around py-2">
        <Link
          to="/"
          className={`flex flex-col items-center flex-1 text-center p-2 hover:text-blue-500 ${activeClass(
            "/"
          )}`}
        >
          <i className="fa fa-home text-xl mb-1"></i>
          <span className="text-xs font-medium">होम</span>
        </Link>

        <Link
          to="/search"
          className="flex flex-col items-center flex-1 text-center p-2 hover:text-blue-500"
        >
          <i className="fa-solid fa-magnifying-glass text-xl mb-1"></i>
          <span className="text-xs font-medium">खोज</span>
        </Link>

        <Link
          to="/notifications"
          className={`flex flex-col items-center flex-1 text-center p-2 transition-all ${
            location.pathname === "/notifications" && hasNewNotification
              ? "text-green-600"
              : hasNewNotification
              ? "text-red-600"
              : activeClass("/notifications")
          }`}
        >
          <i className="fa fa-bell text-xl mb-1"></i>
          <span className="text-xs font-medium">सूचनाएं</span>
        </Link>

        <Link
          to="/profileUser"
          className={`flex flex-col items-center flex-1 text-center p-2 hover:text-blue-500 ${activeClass(
            "/profile"
          )}`}
        >
          <i className="fa fa-user-circle text-xl mb-1"></i>
          <span className="text-xs font-medium">प्रोफ़ाइल</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileBottomNavbar;
