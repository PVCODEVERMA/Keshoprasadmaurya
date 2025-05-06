import React from "react";
import { Link } from "react-router-dom";

const PanchayatDetails = () => {
  const data = [
    {
      id: 1,
      name: "सरेनी प्रथम",
      gramSabha: 12,
      villages: 24,
      voters: 4000,
      contacts: 2800,
    },
    {
      id: 2,
      name: "सरेनी द्वितीय",
      gramSabha: 16,
      villages: 48,
      voters: 9000,
      contacts: 8700,
    },
    {
      id: 3,
      name: "सरेनी तृतीय",
      gramSabha: 3,
      villages: 6,
      voters: 3300,
      contacts: 1000,
    },
    {
      id: 4,
      name: "सरेनी चतुर्थ",
      gramSabha: 5,
      villages: 21,
      voters: 22000,
      contacts: 16200,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center mt-12 md:mt-28">
        जिला पंचायत सूची
      </h2>

      {/* मोबाइल व्यू (कार्ड लेआउट) */}
      <div className="md:hidden space-y-4 mt-10 mb-16">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-100"
          >
            <div className="space-y-2">
              <Link
                to={`/panchayat/${item.id}`}
                className="text-blue-600 font-semibold text-base block mb-2 hover:underline 
                  transform transition-all duration-300 
                  hover:scale-105 
                  active:scale-95 
                  active:bg-blue-50 
                  active:rounded-lg 
                  active:px-2"
              >
                {item.name}
              </Link>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between items-center border-b pb-1">
                  <span className="text-gray-600">
                    क्रम संख्या: <span className="font-medium">{item.id}</span>
                  </span>
                </div>

                <div className="flex justify-between items-center border-b pb-1">
                  <span className="text-gray-600">
                    ग्राम सभा:{" "}
                    <span className="font-medium">{item.gramSabha}</span>
                  </span>
                </div>

                <div className="flex justify-between items-center border-b pb-1">
                  <span className="text-gray-600">
                    गाँव: <span className="font-medium">{item.villages}</span>
                  </span>
                </div>

                <div className="flex justify-between items-center border-b pb-1">
                  <span className="text-gray-600">
                    वोटर:<span className="font-medium">{item.voters}</span>
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">
                    सम्पर्क:{" "}
                    <span className="font-medium text-green-600">
                      {item.contacts}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* डेस्कटॉप व्यू (टेबल) */}
      <div className="hidden md:block bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              {[
                "क्रम संख्या",
                "जिला पंचायत",
                "कुल ग्राम सभा",
                "कुल गाँव",
                "कुल वोटर",
                "कुल सम्पर्क",
              ].map((header) => (
                <th
                  key={header}
                  className="p-3 border text-sm md:text-base whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-3 border">{item.id}</td>
                <td className="p-3 border">
                  <Link
                    to={`/panchayat/${item.id}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    {item.name}
                  </Link>
                </td>
                <td className="p-3 border">{item.gramSabha}</td>
                <td className="p-3 border">{item.villages}</td>
                <td className="p-3 border">{item.voters}</td>
                <td className="p-3 border">{item.contacts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PanchayatDetails;
