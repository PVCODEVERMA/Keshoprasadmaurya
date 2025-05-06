
import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import MobileBottomNavbar from "../../Btn/MobileBottomNavbar";

const Footer = () => {
  return (
    <>
      {/* Footer Section (Hidden on mobile) */}
      <footer className="bg-green-600 text-gray-200 pt-12 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* About Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">योग नगर</h3>
              <p className="text-sm leading-relaxed">
                स्वस्थ समाज के निर्माण हेतु समर्पित<br />
                केशव प्रसाद मौर्य योग योजना
              </p>
            </div>

            {/* Quick Links */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">त्वरित लिंक</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400 transition-colors">होम</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">योजनाएं</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">गैलरी</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">संपर्क</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">संपर्क</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-3 text-green-400"></i>
                  योग नगर कार्यालय, लखनऊ
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-3 text-green-400"></i>
                  +91 98765 43210
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-green-400"></i>
                  contact@yognagar.in
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">सोशल मीडिया</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-green-400">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-2xl hover:text-green-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-2xl hover:text-green-400">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-2xl hover:text-green-400">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-green-800 mt-8 py-6">
            <div className="text-center text-sm">
              © 2024 योग नगर. सर्वाधिकार सुरक्षित | 
              <a href="#" className="hover:text-green-400">गोपनीयता नीति</a> | 
              <a href="#" className="hover:text-green-400">उपयोग की शर्तें</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navbar (Visible on mobile only) */}
      <MobileBottomNavbar />  
    </>
  );
};

export default Footer;
