
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";

import MobileBottomNavbar from "../Btn/MobileBottomNavbar";



const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
     
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

        {/* Content */}
        <main className="">
          <Outlet />
        </main>
        <div className="lg:hidden">
        <MobileBottomNavbar />
      </div>
      </div>
    </div>
  );
};

export default AdminLayout;
