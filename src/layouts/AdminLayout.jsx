import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import MobileBottomNavbar from "../Btn/MobileBottomNavbar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header - fixed at top */}
        <div className="sticky top-0 z-50 bg-white shadow">
          <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
        </div>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto px-4 py-6">
          <Outlet />
        </main>

        {/* Mobile Navbar - fixed at bottom */}
        <div className="lg:hidden sticky bottom-0 z-50 bg-white shadow">
          <MobileBottomNavbar />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
