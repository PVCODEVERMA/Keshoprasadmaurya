import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../assets/kpm-logo.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="bg-green-600 shadow-md fixed w-full z-50">
        {/* Top Bar */}
        <div className="bg-black text-sm text-white">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
            <div className="hidden lg:flex items-center space-x-4 mb-2 sm:mb-0">
              <div className="flex items-center space-x-1">
                <i className="fas fa-phone text-red-500"></i>
                <span className="text-white">{t("phone")}</span>
              </div>
              <div className="flex items-center space-x-1">
                <i className="fas fa-envelope text-red-500"></i>
                <span>{t("email")}</span>
              </div>
            </div>

            <div className="flex space-x-4 text-white items-center">
              <button
                onClick={() => changeLanguage("en")}
                className="text-sm hover:text-white"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("hi")}
                className="text-sm hover:text-green-600"
              >
                हिं
              </button>

              <a href="#" className="hover:text-blue-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-red-600">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="hover:text-sky-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="container mx-auto px-4">
          <div className="flex justify-between lg:justify-around items-center py-4">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="KPM Logo"
                className="h-12 hover:scale-105 transition-transform duration-200"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/panchayat-details" className="hover:text-white">
                {t("district_panchayat")}
              </a>
              <a href="/survey" className="hover:text-white">
                {t("survey")}
              </a>

              <div className="relative group">
                <a href="#" className="hover:text-white">
                  {t("contact")} ▾
                </a>
                <div className="absolute left-0 top-full bg-white shadow-md mt-1 p-2 space-y-2 min-w-[160px] opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out invisible">
                  <a href="/soon" className="block px-4 py-2 hover:bg-gray-100">
                    {t("soon")}
                  </a>
                  <a
                    href="/karya"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {t("work")}
                  </a>
                </div>
              </div>

              <a href="/shikayat" className="hover:text-white">
                {t("complaint")}
              </a>
              <a href="/surveyor" className="hover:text-white">
                {t("surveyor")}
              </a>
            </div>

            {/* Search + Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex relative">
                <input
                  type="text"
                  className={`${
                    isSearchOpen ? "w-40 opacity-100" : "w-0 opacity-0"
                  } px-2 py-1 border rounded-full transition-all duration-300 focus:outline-none`}
                  placeholder={t("search")}
                />
                <button
                  onClick={toggleSearch}
                  className="hover:text-white p-2 rounded-full"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <a href="/admin" className="hidden md:flex hover:text-white">
                {t("admin")}
              </a>
              <button
                onClick={toggleMobileMenu}
                className="md:hidden hover:text-white"
              >
                <FaBars className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Modified Mobile Menu (60% width) */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-60 bg-[#0A2459] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Social Links in Mobile Menu */}
        <div className="flex flex-col items-center justify-center pt-4">
          <div className="flex justify-center space-x-4 py-4">
            <a href="#" className="text-blue-600 text-xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-pink-600 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-blue-400 text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-red-600 text-xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-4 text-white hover:text-white p-3"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        <div className="relative pt-5 h-full">
          <ul className="space-y-3 text-white font-medium px-4">
            <li className="flex items-center space-x-3">
              <i className="fas fa-landmark text-white"></i>
              <a
                href="/panchayat-details"
                className="hover:text-white hover:underline text-lg"
              >
                {t("district_panchayat")}
              </a>
            </li>

            <li className="flex items-center space-x-3">
              <i className="fas fa-clipboard-list text-blue-500"></i>
              <a href="/survey" className="hover:text-white hover:underline text-lg">
                {t("survey")}
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fas fa-address-book text-purple-500"></i>
              <a href="/soon" className="block hover:text-white hover:underline">
                {t("soon")}
              </a>
            </li>

            <li className="flex items-center space-x-3">
              <i className="fas fa-exclamation-circle text-red-500"></i>
              <a href="/shikayat" className="hover:text-white text-lg hover:underline">
                {t("complaint")}
              </a>
            </li>

            <li className="flex items-center space-x-3">
              <i className="fas fa-user-tie text-yellow-500"></i>
              <a href="/surveyor" className="hover:text-white text-lg hover:underline">
                {t("surveyor")}
              </a>
            </li>

            <li className="flex items-center space-x-3">
              <i className="fas fa-user-shield text-indigo-500"></i>
              <a href="/admin" className="hover:text-white text-lg hover:underline">
                {t("admin")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-40 bg-black"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Header;