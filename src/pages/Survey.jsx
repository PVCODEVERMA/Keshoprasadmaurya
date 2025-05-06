import React from "react";
import StarBorder from "../Btn/StarBorder";

const Survey = () => {
  const SurveyData = [
    {
      id: 1,
      village: "सर्वधर",
      status: "कार्य प्रगति पर",
      reportLink: "रिपोर्ट_1.pdf",
    },
    {
      id: 2,
      village: "रामनगर",
      status: "प्रारंभिक अवस्था",
      reportLink: "रिपोर्ट_2.pdf",
    },
    {
      id: 3,
      village: "शिवपुर",
      status: "नहीं हुआ",
      reportLink: "रिपोर्ट_3.pdf",
    },
  ];


  const getStatusColor = (status) => {
    if (status === "कार्य प्रगति पर") {
      return "text-green-600 font-semibold"; // हरा
    } else if (status === "प्रारंभिक अवस्था") {
      return "text-blue-600 font-semibold"; // नीला
    } else {
      return "text-red-600 font-semibold"; // लाल
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-5 mt-28 text-gray-800">
        सर्वेयर सूची
      </h1>

      <div className="overflow-x-auto bg-white  shadow-md ">
        {/* Header Section */}
        <div className="flex justify-between items-center p-4 bg-[#0A2459] rounded-t-lg border-t  mt-2">
          
          <a href="/karyakarta">
          <StarBorder
            as="button"
            className="custom-class"
            color=""
            speed="5s"
            
          >
             सर्वेयर सूची
          </StarBorder>
          </a>
          
          <a href="/surveyor">
          <StarBorder
            as="button"
            className="custom-class"
            color=""
            speed="5s"
            
          >
             जातिगत सर्व
          </StarBorder>
          </a>
        </div>

        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300">क्रम संख्या</th>
              <th className="px-4 py-2 border border-gray-300">गाँव का नाम</th>
              <th className="px-4 py-2 border border-gray-300">
                कार्य की स्थिति
              </th>
              <th className="px-4 py-2 border border-gray-300">
                रिपोर्ट (PDF)
              </th>
            </tr>
          </thead>
          <tbody>
            {SurveyData.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {item.village}
                </td>
                <td
                  className={`px-4 py-2 border border-gray-300 text-center ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  <a
                    href={item.reportLink}
                    className="text-blue-600 hover:underline"
                    download
                  >
                    डाउनलोड
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Survey;
