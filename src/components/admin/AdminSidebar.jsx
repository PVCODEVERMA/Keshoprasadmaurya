import { Link } from "react-router-dom";
import {
  FaTimes,
  FaBars,
  FaTachometerAlt,
  FaUsers,
  FaListAlt,
  FaComments,
  FaCog,
  FaLandmark,
} from "react-icons/fa";
import { useState } from "react";

const AdminSidebar = ({ open, setOpen }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-40 transform transition-all duration-300 shadow-md
        bg-white dark:bg-green-600
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 
        ${collapsed ? "w-16" : "w-64"}
         h-screen md:h-auto`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          {!collapsed && (
            <span className="text-xl font-bold light:text-black dark:text-white">
              Admin Panel
            </span>
          )}

          {/* Collapse button (only visible on large screens) */}
          <button
            className="hidden lg:block text-gray-600 dark:text-gray-300"
            onClick={() => setCollapsed(!collapsed)}
          >
            <FaBars />
          </button>

          {/* Close button for mobile */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="p-4 space-y-4 text-sm">
          <SidebarLink
            to="/admin/dashboard"
            label="Dashboard"
            icon={<FaTachometerAlt />}
            collapsed={collapsed}
            setOpen={setOpen}
          />
          <SidebarLink
            to="/admin/panchayatManagement"
            label="Panchayat"
            icon={<FaLandmark />}
            collapsed={collapsed}
            setOpen={setOpen}
          />
          <SidebarLink
            to="/admin/SurveyManagement"
            label="Surveys"
            icon={<FaListAlt />}
            collapsed={collapsed}
            setOpen={setOpen}
          />
          <SidebarLink
            to="/admin/complaints"
            label="Complaints"
            icon={<FaComments />}
            collapsed={collapsed}
            setOpen={setOpen}
          />
          <SidebarLink
            to="/admin/users"
            label="Users"
            icon={<FaUsers />}
            collapsed={collapsed}
            setOpen={setOpen}
          />
          <SidebarLink
            to="/admin/settings"
            label="Settings"
            icon={<FaCog />}
            collapsed={collapsed}
            setOpen={setOpen}
          />
        </nav>
      </aside>
    </>
  );
};

// Sidebar link with onClick to close menu on mobile
const SidebarLink = ({ to, label, icon, collapsed, setOpen }) => (
  <Link
    to={to}
    onClick={() => setOpen(false)} // Close menu on link click
    className="flex items-center gap-3 text-[#434054] dark:text-gray-300 hover:text-green-600 dark:hover:text-[#1a0000] transition"
  >
    <span className="text-lg">{icon}</span>
    {!collapsed && <span>{label}</span>}
  </Link>
);

export default AdminSidebar;
