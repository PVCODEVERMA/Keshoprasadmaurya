import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEdit,
  FaTrash,
  FaUser,
  FaBirthdayCake,
  FaLock,
} from "react-icons/fa";

import { MdEmail, MdPhone, MdLocationOn, MdDateRange } from "react-icons/md";
import owner from "../assets/profile/owner.jpg";
import cover from "../assets/profile/img-cover.jpg";

const ProfileUser = () => {
  const [editMode, setEditMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  
  const [profile, setProfile] = useState({
    name: "पंकज वर्मा",
    email: "pankaj@example.com",
    phone: "9876543210",
    location: "लखनऊ, उत्तर प्रदेश",
    dob: "1990-01-01",
    story: "यहां अपनी कहानी लिखें...",
    profilePic: owner,
    coverPhoto: cover,
    socialMedia: [
      { id: 1, platform: "Facebook", url: "#" },
      { id: 2, platform: "Twitter", url: "#" },
    ],
  });

  // एडिट हैंडलर्स
  const handleEditToggle = () => setEditMode(!editMode);
  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  // अकाउंट डिलीट हैंडलर
  const handleDeleteAccount = () => {
    alert("अकाउंट सफलतापूर्वक डिलीट हो गया!");
    setShowDeleteModal(false);
  };

  // पासवर्ड रीसेट हैंडलर
  const handlePasswordReset = () => {
    alert(`पासवर्ड रीसेट लिंक ${resetEmail} पर भेजा गया!`);
    setShowResetModal(false);
    setResetEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-100 mb-10">
      {/* मोडल्स */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">क्या आप पक्का कर रहे हैं?</h3>
            <p className="mb-6 text-red-600">इस क्रिया को वापस नहीं किया जा सकता!</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                रद्द करें
              </button>
              <button
                onClick={handleDeleteAccount}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                डिलीट करें
              </button>
            </div>
          </div>
        </div>
      )}

      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaLock className="mr-2" />
              पासवर्ड रीसेट
            </h3>
            <input
              type="email"
              placeholder="ईमेल दर्ज करें"
              className="w-full p-2 border rounded-lg mb-4"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowResetModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                रद्द करें
              </button>
              <button
                onClick={handlePasswordReset}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                भेजें
              </button>
            </div>
          </div>
        </div>
      )}

      {/* प्रोफ़ाइल सेक्शन */}
      <div className="h-48 bg-blue-100 relative overflow-visible">
        <img
          src={profile.coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
        />
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-32 overflow-hidden rounded-full border-4 border-white shadow-lg hover:shadow-xl transition-all duration-300">
          <img
            src={profile.profilePic}
            alt="Profile"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto pt-20 pb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* प्रोफ़ाइल हेडर */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              {editMode ? (
                <input
                  value={profile.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="text-3xl font-bold text-center border-b-2 border-blue-500"
                />
              ) : (
                <h1 className="text-3xl font-bold text-gray-800">
                  {/* <FaUser className="inline mr-2 text-blue-600" /> */}
                  {profile.name}
                </h1>
              )}
            </div>

            {/* सोशल मीडिया आइकन्स */}
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* डिटेल सेक्शन */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <DetailField
              icon={<MdEmail />}
              label="ईमेल"
              value={profile.email}
              editMode={editMode}
              onChange={(v) => handleChange("email", v)}
            />

            <DetailField
              icon={<MdPhone />}
              label="फ़ोन"
              value={profile.phone}
              editMode={editMode}
              onChange={(v) => handleChange("phone", v)}
            />

            <DetailField
              icon={<MdLocationOn />}
              label="स्थान"
              value={profile.location}
              editMode={editMode}
              onChange={(v) => handleChange("location", v)}
            />

            <DetailField
              icon={<FaBirthdayCake />}
              label="जन्मतिथि"
              value={profile.dob}
              type="date"
              editMode={editMode}
              onChange={(v) => handleChange("dob", v)}
            />
          </div>

          {/* स्टोरी सेक्शन */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaEdit className="mr-2 text-blue-600" />
              मेरी कहानी
            </h3>
            {editMode ? (
              <textarea
                value={profile.story}
                onChange={(e) => handleChange("story", e.target.value)}
                className="w-full p-4 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-600 italic">{profile.story}</p>
            )}
          </div>

          {/* एक्शन बटन्स */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleEditToggle}
              className={`px-6 py-2 rounded-lg transition-all ${
                editMode
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {editMode ? "सुरक्षित करें" : "संपादित करें"}
            </button>
          </div>

          {/* डेंजर जोन */}
          <div className="mt-12 border-t border-red-200 pt-6">
            <h3 className="text-xl font-semibold text-red-600 mb-4">⚠️ खतरनाक कार्य</h3>
            <div className="space-y-4">
              <button
                onClick={() => setShowResetModal(true)}
                className="w-full bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center"
              >
                <FaLock className="mr-2" />
                पासवर्ड रीसेट करें
              </button>
              
              <button
                onClick={() => setShowDeleteModal(true)}
                className="w-full bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <FaTrash className="mr-2" />
                अकाउंट डिलीट करें
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// रीयूजेबल फील्ड कंपोनेंट
const DetailField = ({
  icon,
  label,
  value,
  editMode,
  onChange,
  type = "text",
}) => (
  <div className="border-b pb-4">
    <div className="flex items-center mb-2 text-gray-600">
      <span className="mr-2 text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
    {editMode ? (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />
    ) : (
      <p className="text-gray-800 font-medium">{value}</p>
    )}
  </div>
);

export default ProfileUser;