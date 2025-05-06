import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/userUI/Header";
import Footer from "../components/userUI/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
