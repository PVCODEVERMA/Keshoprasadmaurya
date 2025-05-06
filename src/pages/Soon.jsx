import React from 'react';

const Soon = () => {
  const surveyors = [
    { id: 1, name: "राहुल कुमार", address: "लखनऊ, उत्तर प्रदेश", caste: "कुशवाहा", contact: "9876543210" },
    { id: 2, name: "सीमा देवी", address: "वाराणसी, उत्तर प्रदेश", caste: "यादव", contact: "9876543211" },
    { id: 3, name: "अर्जुन सिंह", address: "प्रयागराज, उत्तर प्रदेश", caste: "ठाकुर", contact: "9876543212" }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-5 mt-28 text-gray-800">अगामी कार्यकर्ता सूची</h1>

      {/* Mobile View - Cards */}
      <div className="md:hidden grid gap-6 mb-20">
        {surveyors.map((surveyor, index) => (
          <div key={surveyor.id} className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              {/* Name and Index */}
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <h3 className="font-semibold text-xl text-gray-800">{surveyor.name}</h3>
                <span className="text-sm text-gray-500">
                  क्रम संख्या: <span className="font-bold text-gray-700">{index + 1}</span>
                </span>
              </div>

              {/* Address */}
              <div className="text-gray-600 flex justify-between items-center">
                <p className="font-medium text-gray-700">पता:</p>
                <p className="pl-4 font-bold">{surveyor.address}</p>
              </div>

              {/* Caste */}
              <div className="text-gray-600 flex justify-between items-center">
                <p className="font-medium text-gray-700">जाति:</p>
                <p className="pl-4 font-bold">{surveyor.caste}</p>
              </div>

              {/* Contact */}
              <div className="text-gray-600 flex justify-between items-center">
                <p className="font-medium text-gray-700">संपर्क:</p>
                <a
                  href={`tel:${surveyor.contact}`}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded-lg transition-all duration-300 text-sm"
                >
                  संपर्क करें
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Table */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300">क्रम</th>
              <th className="px-4 py-2 border border-gray-300">कार्यकर्ता का नाम</th>
              <th className="px-4 py-2 border border-gray-300">पता / संपर्क सूत्र</th>
              <th className="px-4 py-2 border border-gray-300">जाति</th>
              <th className="px-4 py-2 border border-gray-300">संदेश</th>
            </tr>
          </thead>
          <tbody>
            {surveyors.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-4 py-2 border border-gray-300 text-center">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-300 text-center">{item.name}</td>
                <td className="px-4 py-2 border border-gray-300 text-center">{item.address}</td>
                <td className="px-4 py-2 border border-gray-300 text-center">{item.caste}</td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  <a 
                    href={`tel:${item.contact}`}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded-lg transition-all duration-300 text-sm"
                  >
                    संपर्क करें
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer Section */}
        <div className="flex justify-between items-center p-4 bg-gray-100 rounded-b-lg border-t border-gray-300 mt-2">
          <h2 className="text-lg font-semibold text-gray-700">कार्यकर्ता सूची</h2>
          
          {/* Tag Button */}
          <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
            जल्द आ रहा है
          </span>
        </div>
      </div>
    </div>
  );
};

export default Soon;
