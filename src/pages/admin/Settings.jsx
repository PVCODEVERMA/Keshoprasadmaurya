import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    currentPassword: '',
    newPassword: '',
    notifications: true,
    twoFactorAuth: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(window.confirm('क्या आप सेटिंग्स अपडेट करना चाहते हैं?')) {
      // Add settings update logic here
      console.log('Settings updated:', settings);
        toast.success('सेटिंग्स सफलतापूर्वक अपडेट की गईं!');
    }
  };

  const handleDeleteAccount = () => {
    if(window.confirm('क्या आप वाकई अपना अकाउंट डिलीट करना चाहते हैं?\nयह एक्शन पूर्ववत नहीं किया जा सकता!')) {
      // Add account deletion logic here
      toast.success('अकाउंट सफलतापूर्वक डिलीट कर दिया गया!');
    }
  };

  return (
    <div className="max-w-4xl  mx-auto p-6 mt-10 mb-10 rounded-lg bg-white  shadow dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white ">
        अकाउंट सेटिंग्स
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Password Settings */}
        <div className="mb-4 border-b pb-6 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-2 dark:text-gray-200">
            पासवर्ड और सुरक्षा
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                वर्तमान पासवर्ड
              </label>
              <input
                type="password"
                value={settings.currentPassword}
                onChange={(e) => setSettings({...settings, currentPassword: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                नया पासवर्ड
              </label>
              <input
                type="password"
                value={settings.newPassword}
                onChange={(e) => setSettings({...settings, newPassword: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="mb-8 border-b pb-6 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">
            नोटिफिकेशन
          </h2>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg dark:bg-gray-700">
            <div>
              <h3 className="font-medium dark:text-gray-200">ईमेल नोटिफिकेशन</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                महत्वपूर्ण अपडेट ईमेल के माध्यम से प्राप्त करें
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={settings.notifications}
                onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">
            सुरक्षा
          </h2>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg dark:bg-gray-700">
            <div>
              <h3 className="font-medium dark:text-gray-200">टू-फैक्टर ऑथेंटिकेशन</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                अतिरिक्त सुरक्षा परत जोड़ें
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={settings.twoFactorAuth}
                onChange={(e) => setSettings({...settings, twoFactorAuth: e.target.checked})}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <button 
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            सेटिंग्स सेव करें
          </button>
        </div>

        {/* Danger Zone */}
        <div className="mt-8 border-t pt-6 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">
            खतरा क्षेत्र
          </h2>

          <div className="p-4 mb-20 bg-red-50 rounded-lg dark:bg-red-900/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-red-700 dark:text-red-400">
                  अकाउंट डिलीट करें
                </h3>
                <p className="text-sm text-red-600 dark:text-red-300">
                  अपना अकाउंट और सभी डेटा स्थायी रूप से हटाएं
                </p>
              </div>
              <button
                type="button"
                onClick={handleDeleteAccount}
                className="px-4 py-2 text-red-700 border border-red-700 rounded-lg 
                  hover:bg-red-700 hover:text-white dark:border-red-400 dark:text-red-400 
                  dark:hover:bg-red-400 dark:hover:text-white"
              >
                अकाउंट डिलीट करें
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}