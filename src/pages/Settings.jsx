import React, { useState } from 'react';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled(prev => !prev);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-blue-700 mt-28">सेटिंग्स</h1>

      <div className="flex items-center justify-between bg-white p-4 rounded shadow">
         {/* Status Text with color */}
      <div className={`mt-4 text-lg font-medium ${
        notificationsEnabled ? 'text-green-600' : 'text-red-600'
      }`}>
        सूचनाएं {notificationsEnabled ? "चालू" : "बंद"} हैं।
      </div>

        {/* Toggle Switch */}
        <div
          onClick={toggleNotifications}
          className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
            notificationsEnabled ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              notificationsEnabled ? 'translate-x-6' : 'translate-x-0'
            }`}
          ></div>
        </div>
      </div>

     
    </div>
  );
};

export default Settings;
