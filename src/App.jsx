
import { Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import NotFound from "./pages/NotFound";
import Notifications from "./pages/Notifications";
import { ToastContainer } from "react-toastify";

import 'font-awesome/css/font-awesome.min.css';
import Loading from "./components/userUI/Loading";




// Layouts
const Layout = lazy(() => import("./layouts/Layout"));
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));

// Public Pages

const Home = lazy(() => import("./components/userUI/Home"));
const SearchScreen = lazy(() => import("./pages/SearchScreen"));
const Settings = lazy(() => import("./pages/Settings"));
const Contact = lazy(() => import("./pages/Contact"));
const Survey = lazy(() => import("./pages/Survey"));
const Karyakarta = lazy(() => import("./pages/Karyakarta"));
const PanchayatDetails = lazy(() => import("./pages/Table/PanchayatDetails"));
const PanchayatDetailPage = lazy(() => import("./pages/Table/PanchayatDetail"));
const GramSabhaDetail = lazy(() => import("./pages/Table/GramSabhaDetail"));
const VillageDetail = lazy(() => import("./pages/Table/VillageDetail"));
const Shikayat = lazy(() => import("./pages/Shikayat"));
const Surveyor = lazy(() => import("./pages/Surveyor"));
const Soon = lazy(() => import("./pages/Soon"));
const Samay = lazy(() => import("./pages/samay"));
const ProfileUser = lazy(()=> import("./pages/ProfileUser"));

// Admin Pages
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminComplaints = lazy(() => import("./components/admin/Complaints"));
const AdminProfile = lazy(() => import("./pages/admin/Profile"));
const AdminSettings = lazy(() => import("./pages/admin/Settings"));
const AdminPanchayatManagement = lazy(() =>
  import("./components/admin/PanchayatManagement")
);
const AdminSurveyManagement = lazy(() =>
  import("./components/admin/SurveyManagement")
);
const AdminNotifications = lazy(() => import("./pages/admin/Notifications"));
const AdminDashboardMap = lazy(() => import("./pages/admin/DashboardMap"));
const CasteSurveyTracker = lazy(() => import("./components/admin/CasteSurveyTracker"));
const SurveyorTracker = lazy(() => import("./components/admin/SurveyorTracker"));
// const AdminComplaintManagement = lazy(() => import("./components/admin/Complaints"));
const AdminUsers = lazy(() => import("./components/admin/UserManagement"))
// Auth Check
const isLoggedIn = true;

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Public Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="survey" element={<Survey />} />
          <Route path="karyakarta" element={<Karyakarta />} />
          <Route path="panchayat-details" element={<PanchayatDetails />} />
          <Route path="panchayat/:id" element={<PanchayatDetailPage />} />
          <Route path="gramSabha/:id" element={<GramSabhaDetail />} />
          <Route path="village/:name" element={<VillageDetail />} />
          <Route path="shikayat" element={<Shikayat />} />
          <Route path="surveyor" element={<Surveyor />} />
          <Route path="soon" element={<Soon />} />
          <Route path="samay" element={<Samay />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="profileUser"  element={<ProfileUser />} />
        </Route>

        {/* Admin Layout (Protected) */}
        <Route
          path="/admin"
          element={isLoggedIn ? <AdminLayout /> : <Navigate to="/login" />}
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="complaints" element={<AdminComplaints />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route
            path="panchayatManagement"
            element={<AdminPanchayatManagement />}
          />
          <Route path="casteSurveys" element={<CasteSurveyTracker />} />
          <Route path="surveyors" element={<SurveyorTracker />} />
          <Route path="SurveyManagement" element={<AdminSurveyManagement />} />
          <Route path="dashboardMap" element={<AdminDashboardMap />} />
          <Route path="notifications" element={<AdminNotifications />} />
          
          
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Suspense>
  );
};

export default App;