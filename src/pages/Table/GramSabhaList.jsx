import React from "react";

const GramSabhaList = () => {
  const data = [
    { id: 1, name: "कहिंजर", villages: 6, voters: 9000, contacts: 7000 },
    { id: 2, name: "लालपुर", villages: 5, voters: 6000, contacts: 5200 },
    { id: 3, name: "जरवल", villages: 5, voters: 2000, contacts: 1000 },
    { id: 4, name: "भोजपुर", villages: 2, voters: 2000, contacts: 1000 },
    { id: 5, name: "रानीबगिया", villages: 3, voters: 3000, contacts: 2000 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Gram Sabha Table Start */}
      <h2 className="text-2xl font-bold mb-6 text-center">ग्राम सभा की सूची</h2>
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full table-auto border-collapse text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">क्रम संख्या</th>
              <th className="p-3 border">ग्राम सभा</th>
              <th className="p-3 border">कुल गाँवों की संख्या</th>
              <th className="p-3 border">कुल वोटर</th>
              <th className="p-3 border">सम्पर्क</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 mt-">
                <td className="p-3 border">{item.id}</td>
                <td className="p-3 border text-blue-600 font-semibold">{item.name}</td>
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

export default GramSabhaList;
