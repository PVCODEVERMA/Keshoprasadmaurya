import { Link, useParams } from "react-router-dom";

const PanchayatDetail = () => {
  const { id } = useParams();

  const gramSabhaData = {
    1: [
      { id: 1, name: "कहिंजर", villages: 6, voters: 9000, contacts: 7000 },
      { id: 2, name: "लालपुर", villages: 5, voters: 6000, contacts: 5200 },
      { id: 3, name: "जरवल", villages: 5, voters: 2000, contacts: 1000 },
      { id: 4, name: "भोजपुर", villages: 2, voters: 2000, contacts: 1000 },
      { id: 5, name: "रानीबगिया", villages: 3, voters: 3000, contacts: 2000 },
    ],
    2: [
      { id: 1, name: "कहिंजर", villages: 6, voters: 9000, contacts: 7000 },
      { id: 2, name: "लालपुर", villages: 5, voters: 6000, contacts: 5200 },
      { id: 3, name: "जरवल", villages: 5, voters: 2000, contacts: 1000 },
      { id: 4, name: "भोजपुर", villages: 2, voters: 2000, contacts: 1000 },
      { id: 5, name: "रानीबगिया", villages: 3, voters: 3000, contacts: 2000 },
    ], 
    3: [
      { id: 1, name: "कहिंजर", villages: 6, voters: 9000, contacts: 7000 },
      { id: 2, name: "लालपुर", villages: 5, voters: 6000, contacts: 5200 },
      { id: 3, name: "जरवल", villages: 5, voters: 2000, contacts: 1000 },
      { id: 4, name: "भोजपुर", villages: 2, voters: 2000, contacts: 1000 },
      { id: 5, name: "रानीबगिया", villages: 3, voters: 3000, contacts: 2000 },
    ],
    4: [
      { id: 1, name: "कहिंजर", villages: 6, voters: 9000, contacts: 7000 },
      { id: 2, name: "लालपुर", villages: 5, voters: 6000, contacts: 5200 },
      { id: 3, name: "जरवल", villages: 5, voters: 2000, contacts: 1000 },
      { id: 4, name: "भोजपुर", villages: 2, voters: 2000, contacts: 1000 },
      { id: 5, name: "रानीबगिया", villages: 3, voters: 3000, contacts: 2000 },
    ],
  };

  const currentGramSabhas = gramSabhaData[id] || [];

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center mt-12 md:mt-28">
        जिला पंचायत की सूची - ID: {id}
      </h2>

      {/* मोबाइल व्यू (कार्ड लेआउट) */}
      <div className="md:hidden space-y-4 mt-10 mb-16">
        {currentGramSabhas.length > 0 ? (
          currentGramSabhas.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
              <div className="space-y-2">
                <Link
                  to={`/gramSabha/${item.id}`}
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
                  <div className="flex justify-between items-center border-b pb-1 ">
                    <span className="text-gray-600">क्रम संख्या: <span className="font-medium">{item.id}</span></span>
                   
                  </div>
                  
                  <div className="flex justify-between items-center border-b pb-1">
                    <span className="text-gray-600">गाँव: <span className="font-medium">{item.villages}</span></span>
                   
                  </div>

                  <div className="flex justify-between items-center border-b pb-1">
                    <span className="text-gray-600">वोटर:<span className="font-medium">{item.voters}</span></span>
                    
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">सम्पर्क:<span className="font-medium text-green-600">{item.contacts}</span></span>
                    
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-5 text-sm">
            इस पंचायत के लिए कोई ग्राम सभा डाटा नहीं मिला।
          </p>
        )}
      </div>

      {/* डेस्कटॉप व्यू (टेबल) */}
      <div className="hidden md:block bg-white shadow rounded-lg overflow-x-auto">
        {currentGramSabhas.length > 0 ? (
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 md:p-3 border text-sm md:text-base">क्रम संख्या</th>
                <th className="p-2 md:p-3 border text-sm md:text-base">ग्राम सभा</th>
                <th className="p-2 md:p-3 border text-sm md:text-base">कुल गाँव</th>
                <th className="p-2 md:p-3 border text-sm md:text-base">कुल वोटर</th>
                <th className="p-2 md:p-3 border text-sm md:text-base">सम्पर्क</th>
              </tr>
            </thead>
            <tbody>
              {currentGramSabhas.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="p-2 md:p-3 border text-sm md:text-base">{item.id}</td>
                  <td className="p-2 md:p-3 border">
                    <Link
                      to={`/gramSabha/${item.id}`}
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
                  </td>
                  <td className="p-2 md:p-3 border text-sm md:text-base">{item.villages}</td>
                  <td className="p-2 md:p-3 border text-sm md:text-base">{item.voters}</td>
                  <td className="p-2 md:p-3 border text-sm md:text-base">{item.contacts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 py-5">इस पंचायत के लिए कोई ग्राम सभा डाटा नहीं मिला।</p>
        )}
      </div>
    </div>
  );
};

export default PanchayatDetail;