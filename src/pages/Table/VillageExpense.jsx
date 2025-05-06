import React from "react";

const VillageExpense = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">ग्राम सभा की खर्ची</h2>

      {/* First Table */}
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400 w-full text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-400 px-4 py-2">क्रमांक</th>
              <th className="border border-gray-400 px-4 py-2">ग्राम सभा</th>
              <th className="border border-gray-400 px-4 py-2">खर्च</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">1</td>
              <td className="border border-gray-400 px-4 py-2">महेशपुर</td>
              <td className="border border-gray-400 px-4 py-2">7000</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">2</td>
              <td className="border border-gray-400 px-4 py-2">लालपुर</td>
              <td className="border border-gray-400 px-4 py-2">5200</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">3</td>
              <td className="border border-gray-400 px-4 py-2">जनकपुर</td>
              <td className="border border-gray-400 px-4 py-2">6000</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">4</td>
              <td className="border border-gray-400 px-4 py-2">जगतपुर</td>
              <td className="border border-gray-400 px-4 py-2">2000</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">5</td>
              <td className="border border-gray-400 px-4 py-2">शिवपुर</td>
              <td className="border border-gray-400 px-4 py-2">1000</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">6</td>
              <td className="border border-gray-400 px-4 py-2">कुंवरपुर</td>
              <td className="border border-gray-400 px-4 py-2">2000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Second Table (Indicators) */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">रंग द्वारा संकेत:</h3>
        <ul className="list-disc pl-5">
          <li className="text-red-500">Red → माह के बाद हुआ</li>
          <li className="text-green-500">Green → माह के भीतर हुआ</li>
        </ul>
      </div>
    </div>
  );
};

export default VillageExpense;
