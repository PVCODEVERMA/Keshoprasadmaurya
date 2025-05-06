import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import profile from '../../assets/profile/owner.jpg'

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  
  // डमी डेटा
  const users = [
    {
      id: 1,
      name: 'राहुल शर्मा',
      role: 'Officer',
      email: 'rahul@example.com',
      phone: '+919876543210',
      lastLogin: '2023-08-25 10:30 AM',
      profilePic: profile,
      active: true
    },
    {
      id: 2,
      name: 'प्रिया सिंह',
      role: 'Supervisor',
      email: 'priya@example.com',
      phone: '+919876543211',
      lastLogin: '2023-08-24 02:45 PM',
      profilePic: profile,
      active: false
    }
  ];

  // फ़िल्टर किए गए उपयोगकर्ता
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm);
    
    const matchesRole = filterRole === 'all' || user.role.toLowerCase() === filterRole;
    
    return matchesSearch && matchesRole;
  });

  // एक्शन हैंडलर्स
  const handleCall = (phone) => {
    toast.info(`कॉल प्रारंभ की जा रही है: ${phone}`);
    window.open(`tel:${phone}`);
  };

  const handleChat = (phone) => {
    toast.info(`संदेश भेजा जा रहा है: ${phone}`);
    window.open(`sms:${phone}`);
  };

  const handleDelete = (userId) => {
    if(window.confirm('क्या आप वाकई इस उपयोगकर्ता को हटाना चाहते हैं?')) {
      toast.success(`उपयोगकर्ता ID ${userId} सफलतापूर्वक हटाया गया`);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <ToastContainer position="bottom-right" autoClose={3000} />

      {/* स्टैटिस्टिक्स ग्रिड */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-white p-3 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
          <div className="flex flex-col items-center">
            <div className="p-2 bg-blue-100 rounded-lg mb-2">
              <span className="text-blue-600 text-2xl">👥</span>
            </div>
            <h3 className="text-gray-500 text-xs sm:text-sm text-center">कुल उपयोगकर्ता</h3>
            <p className="text-xl sm:text-2xl font-bold mt-1 text-blue-600">1,234</p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-lg border border-green-100 hover:shadow-xl">
          <div className="flex flex-col items-center">
            <div className="p-2 bg-green-100 rounded-lg mb-2">
              <span className="text-green-600 text-2xl">✅</span>
            </div>
            <h3 className="text-gray-500 text-xs sm:text-sm text-center">सक्रिय उपयोगकर्ता</h3>
            <p className="text-xl sm:text-2xl font-bold mt-1 text-green-600">892</p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl">
          <div className="flex flex-col items-center">
            <div className="p-2 bg-purple-100 rounded-lg mb-2">
              <span className="text-purple-600 text-2xl">👮♂️</span>
            </div>
            <h3 className="text-gray-500 text-xs sm:text-sm text-center">अधिकारी</h3>
            <p className="text-xl sm:text-2xl font-bold mt-1 text-purple-600">456</p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-lg border border-pink-100 hover:shadow-xl">
          <div className="flex flex-col items-center">
            <div className="p-2 bg-pink-100 rounded-lg mb-2">
              <span className="text-pink-600 text-2xl">💼</span>
            </div>
            <h3 className="text-gray-500 text-xs sm:text-sm text-center">सुपरवाइजर</h3>
            <p className="text-xl sm:text-2xl font-bold mt-1 text-pink-600">78</p>
          </div>
        </div>
      </div>

      {/* सर्च और फिल्टर */}
      <div className="bg-indigo-50 p-4 rounded-2xl shadow-sm mb-6 border border-indigo-100">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="उपयोगकर्ता खोजें..."
            className="p-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            className="p-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="all">सभी भूमिकाएं</option>
            <option value="officer">अधिकारी</option>
            <option value="supervisor">सुपरवाइजर</option>
          </select>
        </div>
      </div>

      {/* डेस्कटॉप टेबल */}
      <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-x-auto border border-gray-100">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-indigo-50 to-blue-50">
            <tr>
              <th className="p-4 text-left text-sm text-indigo-800 font-semibold border-b-2 border-indigo-100">नाम</th>
              <th className="p-4 text-left text-sm text-indigo-800 font-semibold border-b-2 border-indigo-100">फ़ोन</th>
              <th className="p-4 text-left text-sm text-indigo-800 font-semibold border-b-2 border-indigo-100">भूमिका</th>
              <th className="p-4 text-left text-sm text-indigo-800 font-semibold border-b-2 border-indigo-100">अंतिम लॉगिन</th>
              <th className="p-4 text-left text-sm text-indigo-800 font-semibold border-b-2 border-indigo-100">कार्य</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="border-b border-gray-100 hover:bg-indigo-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center">
                    <img 
                      src={user.profilePic} 
                      className="w-10 h-10 rounded-xl border-2 border-white shadow-sm"
                      alt="प्रोफ़ाइल"
                    />
                    <div className="ml-3">
                      <p className="font-medium text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-sm">{user.phone}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium 
                    ${user.role === 'Officer' ? 
                      'bg-blue-100 text-blue-800' : 
                      'bg-purple-100 text-purple-800'}`}>
                    {user.role === 'Officer' ? '👮♂️ ' : '💼 '}{user.role}
                  </span>
                </td>
                <td className="p-4 text-sm">{user.lastLogin}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleCall(user.phone)}
                      className="p-2 bg-green-50 hover:bg-green-100 rounded-lg text-green-600 transition-colors"
                    >
                      <span className="text-xl">📞</span>
                    </button>
                    <button
                      onClick={() => handleChat(user.phone)}
                      className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-600 transition-colors"
                    >
                      <span className="text-xl">💬</span>
                    </button>
                    <button 
                      onClick={() => handleDelete(user.id)}
                      className="p-2 bg-red-50 hover:bg-red-100 rounded-lg text-red-600 transition-colors"
                    >
                      <span className="text-xl">🗑️</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* मोबाइल व्यू */}
      <div className="md:hidden space-y-4">
        {filteredUsers.map(user => (
          <div key={user.id} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <img 
                  src={user.profilePic} 
                  className="w-12 h-12 rounded-xl border-2 border-white shadow-sm"
                  alt="प्रोफ़ाइल"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
              </div>
              <span className={`text-2xl ${user.active ? 'text-green-500' : 'text-gray-400'}`}>
                ●
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="p-2 bg-gray-50 rounded-lg">
                <p className="text-gray-500">फ़ोन</p>
                <p className="text-gray-800 font-medium">{user.phone}</p>
              </div>
              <div className="p-2 bg-gray-50 rounded-lg">
                <p className="text-gray-500">ईमेल</p>
                <p className="text-gray-800 font-medium truncate">{user.email}</p>
              </div>
              <div className="p-2 bg-gray-50 rounded-lg">
                <p className="text-gray-500">अंतिम लॉगिन</p>
                <p className="text-gray-800 font-medium">{user.lastLogin}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-end space-x-2">
              <button 
                onClick={() => handleCall(user.phone)}
                className="p-2 bg-green-50 hover:bg-green-100 rounded-lg text-green-600"
              >
                📞
              </button>
              <button
                onClick={() => handleChat(user.phone)}
                className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-600"
              >
                💬
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="p-2 bg-red-50 hover:bg-red-100 rounded-lg text-red-600"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;