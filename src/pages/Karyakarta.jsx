import React, { useState } from "react";
import { PhoneCall } from "lucide-react";

const Karyakarta = () => {
  const data = [
    {
      id: 1,
      name: "राम लाल",
      caste: "ब्राह्मण",
      contact: "9876543210",
      familyMembers: 5,
      village: "सर्वधर",
    },
    {
      id: 2,
      name: "शिव कुमार",
      caste: "ठाकुर",
      contact: "8765432109",
      familyMembers: 4,
      village: "रामनगर",
    },
    {
      id: 3,
      name: "मोहन यादव",
      caste: "यादव",
      contact: "7654321098",
      familyMembers: 6,
      village: "शिवपुर",
    },
    {
      id: 4,
      name: "सीमा देवी",
      caste: "ब्राह्मण",
      contact: "6543210987",
      familyMembers: 3,
      village: "सर्वधर",
    },
  ];

  const [searchVillage, setSearchVillage] = useState("");
  const [searchCaste, setSearchCaste] = useState("");
  const [searchName, setSearchName] = useState("");

  const villageOptions = [...new Set(data.map((item) => item.village))];
  const casteOptions = [...new Set(data.map((item) => item.caste))];

  const filteredData = data.filter((item) => {
    return (
      (searchVillage ? item.village === searchVillage : true) &&
      (searchCaste ? item.caste === searchCaste : true) &&
      (searchName ? item.name.includes(searchName) : true)
    );
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6 mt-28 text-gray-800 ">
        प्रमुख कार्यकर्ता सूची
      </h1>

      {/* Filters */}
      <div className="flex flex-col gap-4 bg-blue-50 p-4 rounded-lg shadow-sm mb-6">
        <input
          type="text"
          placeholder="🔍 नाम से खोजें..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        />
        <select
          className="p-2 border border-gray-300 rounded-md"
          value={searchVillage}
          onChange={(e) => setSearchVillage(e.target.value)}
        >
          <option value=""> गाँव चुनें</option>
          {villageOptions.map((village, idx) => (
            <option key={idx} value={village}>
              {village}
            </option>
          ))}
        </select>

        <select
          className="p-2 border border-gray-300 rounded-md"
          value={searchCaste}
          onChange={(e) => setSearchCaste(e.target.value)}
        >
          <option value=""> जाति चुनें</option>
          {casteOptions.map((caste, idx) => (
            <option key={idx} value={caste}>
              {caste}
            </option>
          ))}
        </select>
      </div>

      {/* Mobile-Friendly Cards */}
      <div className="space-y-4 mb-10">
        {filteredData.length > 0 ? (
          filteredData.map((karya, index) => (
            <div
              key={karya.id}
              className="bg-white  shadow-lg p-4 rounded-xl border border-gray-100 relative hover:shadow-md transition-shadow"
            >
              {/* Number Badge */}
              <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                क्रम संख्या: {index + 1}
              </div>

              {/* Main Content */}
              <div className="space-y-3">
                {/* Name and Caste */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {karya.name}
                  </h3>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {karya.caste}
                  </span>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">गाँव:</span>
                    <span className="font-medium text-gray-700">
                      {karya.village}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">परिवार:</span>
                    <span className="font-medium text-gray-700">
                      {karya.familyMembers} सदस्य
                    </span>
                  </div>

                  <div className="col-span-2 flex items-center space-x-2">
                    <span className="text-gray-500">संपर्क:</span>
                    <a
                      href={`tel:${karya.contact}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      {karya.contact}
                    </a>
                  </div>
                </div>

                {/* Call Button */}
                <a
                  href={`tel:${karya.contact}`}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  <PhoneCall size={16} />
                  कॉल करें
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="mb-4 text-gray-400 text-4xl">📭</div>
            <p className="text-gray-500">कोई डेटा उपलब्ध नहीं</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Karyakarta;
