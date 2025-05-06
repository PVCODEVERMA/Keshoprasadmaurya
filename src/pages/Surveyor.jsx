import React, { useState } from 'react';

const Surveyor = () => {
  const [expandedContacts, setExpandedContacts] = useState({});

  const surveyors = [
    { id: 1, name: 'आशीष', contact: '9918001927', address: 'जमीपुर', currentWorkLocation: 'विठोली' },
    { id: 2, name: 'जय', contact: '9918001927', address: 'लहईखेड़ा', currentWorkLocation: 'दुन्दपुर' },
    { id: 3, name: 'रोहित', contact: '767xxxxxxx', address: 'लालपुर', currentWorkLocation: 'नबरखेड़ा' },
    { id: 4, name: 'अभिनव', contact: '201xxxxxxx', address: 'बक्सर', currentWorkLocation: 'अभी नहीं' },
    { id: 5, name: 'सुमित', contact: '78xxxxxxx9', address: 'रामपुर', currentWorkLocation: 'धनुपुर' },
    { id: 6, name: 'नीरज', contact: '95xxxxxxx5', address: 'कुशीनगर', currentWorkLocation: 'नया टोला' },
    { id: 7, name: 'विकास', contact: '82xxxxxxx7', address: 'मिर्जापुर', currentWorkLocation: 'बरहज' },
    { id: 8, name: 'प्रीति', contact: '99xxxxxxx1', address: 'देवरिया', currentWorkLocation: 'महुआडीह' },
    { id: 9, name: 'मनीष', contact: '88xxxxxxx3', address: 'आजमगढ़', currentWorkLocation: 'सदर बाजार' },
    { id: 10, name: 'अंकित', contact: '93xxxxxxx2', address: 'बलिया', currentWorkLocation: 'भीटा बाजार' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-5 mt-28 text-gray-800">सर्वेयर सूची</h1>

      {/* Mobile View - Cards */}
      <div className="md:hidden grid gap-4 mb-20">
        {surveyors.map((surveyor, index) => {
          const phoneNumbers = surveyor.contact.split(',').map(num => num.trim());
          const isExpanded = expandedContacts[surveyor.id] || false;

          return (
            <div key={surveyor.id} className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="space-y-3 ">
                {/* Header */}
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <h3 className="font-semibold text-lg text-gray-800">{surveyor.name}</h3>
                  <span className="text-sm text-gray-500">
                    क्रम संख्या: <span className="font-bold text-gray-700">{index + 1}</span>
                  </span>
                </div>

                {/* Phone Numbers */}
                <div
                  onMouseEnter={() => setExpandedContacts(prev => ({ ...prev, [surveyor.id]: true }))}
                  onMouseLeave={() => setExpandedContacts(prev => ({ ...prev, [surveyor.id]: false }))}
                  className="text-gray-600 space-y-2 "
                >
                  {phoneNumbers.slice(0, isExpanded ? phoneNumbers.length : 2).map((num, idx) => (
                    <div key={idx} className="flex justify-between gap-2">
                      <span className="text-gray-500">संपर्क:</span>
                      <a href={`tel:+91${num}`} className="hover:text-blue-600 transition-colors"> +91{num}</a>
                    </div>
                  ))}
                </div>

                {/* Address */}
                <div className="text-gray-600 flex justify-between items-center">
                  <p className="font-medium text-gray-700 flex items-center gap-2">पता:</p>
                  <p className="pl-6 font-bold">{surveyor.address}</p>
                </div>

                {/* Work Location */}
                <div className={`space-y-1 flex justify-between ${surveyor.currentWorkLocation === 'अभी नहीं' ? 'text-red-500' : 'text-gray-600'}`}>
                  <p className="font-medium text-gray-700 flex items-center gap-2">वर्तमान कार्य पता:</p>
                  <p className="pl-6 font-bold">{surveyor.currentWorkLocation}</p>
                </div>

                
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop View - Table */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300">क्रम संख्या</th>
              <th className="px-4 py-2 border border-gray-300">नाम</th>
              <th className="px-4 py-2 border border-gray-300">संपर्क सूत्र</th>
              <th className="px-4 py-2 border border-gray-300">पता</th>
              <th className="px-4 py-2 border border-gray-300">वर्तमान कार्य पता</th>
              <th className="px-4 py-2 border border-gray-300">एक्शन</th>
            </tr>
          </thead>
          <tbody>
            {surveyors.map((surveyor, index) => (
              <tr key={surveyor.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-4 py-2 border border-gray-300 text-center">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-300 text-center">{surveyor.name}</td>
                <td className="px-4 py-2 border border-gray-300 text-center">{surveyor.contact}</td>
                <td className="px-4 py-2 border border-gray-300 text-center">{surveyor.address}</td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  <span className={surveyor.currentWorkLocation === 'अभी नहीं' ? 'text-red-500 font-semibold' : ''}>
                    {surveyor.currentWorkLocation}
                  </span>
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Surveyor;
