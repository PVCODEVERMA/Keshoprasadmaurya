import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaRupeeSign } from "react-icons/fa";
import profile01 from "../../assets/profile/profile_01.jpg";
import profile02 from "../../assets/profile/profile_02.jpg";
import profile03 from "../../assets/profile/profile_03.jpg";

const VillageDetail = () => {
  const { name } = useParams();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [SelectedImg, setSelectedImg] = useState(null);

  const mukhiyaProfiles = [
    { id: 1, name: "राम लाल", caste: "ब्राह्मण", contact: "9876XXXXXX", volunteers: 5, photo: profile01, age: 28, members: 3 },
    { id: 2, name: "शिवम सिंह", caste: "राजपूत", contact: "9123XXXXXX", volunteers: 8, photo: profile02, age: 30, members: 4 },
    { id: 3, name: "मोहन यादव", caste: "यादव", contact: "7012XXXXXX", volunteers: 0, photo: profile03, age: 25, members: 2 },
    { id: 4, name: "मोहन यादव", caste: "यादव", contact: "7012XXXXXX", volunteers: 3, photo: profile03, age: 25, members: 2 },
    { id: 5, name: "मोहन यादव", caste: "यादव", contact: "7012XXXXXX", volunteers: 6, photo: profile03, age: 25, members: 2 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 relative">
      <h2 className="text-2xl font-bold text-center mb-6 mt-28">
        गाँवों की सूची (प्रधान: विमल कुमार)
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto bg-white p-4 rounded-lg shadow">
        <table className="min-w-full border-collapse text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">क्रम संख्या</th>
              <th className="p-2 border">मुखिया का नाम</th>
              <th className="p-2 border">जाति</th>
              <th className="p-2 border">संपर्क नंबर</th>
              <th className="p-2 border">स्वयंसेवकों की संख्या</th>
              <th className="p-2 border">फोटो</th>
            </tr>
          </thead>
          <tbody>
            {mukhiyaProfiles.map((profile) => (
              <tr key={profile.id} className="hover:bg-gray-50">
                <td className="p-2 border">{profile.id}</td>
                <td
                  className={`p-2 border cursor-pointer hover:underline ${
                    profile.volunteers > 5
                      ? "text-green-600"
                      : profile.volunteers > 0
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
                  onClick={() => setSelectedProfile(profile)}
                >
                  {profile.name}
                </td>
                <td className="p-2 border">{profile.caste}</td>
                <td className="p-2 border">{profile.contact}</td>
                <td className="p-2 border">{profile.volunteers}</td>
                <td className="p-2 border">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-10 h-10 rounded-full mx-auto object-cover cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => setSelectedImg(profile.photo)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4 mt-5 mb-20">
        {mukhiyaProfiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-4">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 cursor-pointer"
                onClick={() => setSelectedImg(profile.photo)}
              />
              <div>
                <h3
                  className={`text-lg font-semibold cursor-pointer ${
                    profile.volunteers > 5
                      ? "text-green-600"
                      : profile.volunteers > 0
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
                  onClick={() => setSelectedProfile(profile)}
                >
                  {profile.name}
                </h3>
                <p className="text-sm text-gray-500">{profile.caste}</p>
                <p className="text-sm text-gray-600">📞 {profile.contact}</p>
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-600 pt-2">
              <span>क्रम संख्या: {profile.id}</span>
              <span>स्वयंसेवक: {profile.volunteers}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Profile */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg p-6 max-w-sm w-full">
            <button
              className="absolute top-2 right-2 text-black bg-gray-200 hover:bg-gray-400 rounded-full p-2"
              onClick={() => setSelectedProfile(null)}
            >
              ❌
            </button>
            <div className="flex flex-col items-center">
              <img
                src={selectedProfile.photo}
                alt={selectedProfile.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-pink-300 shadow-md"
              />
              <div className="bg-pink-300 text-white px-4 py-1 rounded-full mb-4">
                समूह (Group)
              </div>
              <div className="text-gray-700 space-y-2 mb-6 text-center">
                <p><strong>मुखिया:</strong> {selectedProfile.name}</p>
                <p><strong>उम्र:</strong> {selectedProfile.age} वर्ष</p>
                <p><strong>सदस्य:</strong> {selectedProfile.members}</p>
                <p><strong>जाति:</strong> {selectedProfile.caste}</p>
              </div>

              {/* Actions */}
              <div className="flex justify-around w-full mt-4">
                <div className="flex flex-col items-center">
                  <button className="bg-green-400 p-3 rounded-full shadow hover:bg-green-500">
                    <FaPhoneAlt className="text-white" size={20} />
                  </button>
                  <span className="mt-1 text-sm">संपर्क</span>
                </div>

                <div className="flex flex-col items-center">
                  <button className="bg-green-500 p-3 rounded-full shadow hover:bg-green-600">
                    <FaWhatsapp className="text-white" size={20} />
                  </button>
                  <span className="mt-1 text-sm">चैट</span>
                </div>

                <div className="flex flex-col items-center">
                  <button className="bg-yellow-400 p-3 rounded-full shadow hover:bg-yellow-500">
                    <FaRupeeSign className="text-white" size={20} />
                  </button>
                  <span className="mt-1 text-sm">Send ₹</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Viewer */}
      {SelectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative">
            <button
              className="absolute top-0 right-0 text-white rounded-full p-2 m-2 hover:text-red-500 hover:bg-gray-700"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
            >
              ❌
            </button>
            <img
              src={SelectedImg}
              alt="Selected Mukhiya"
              className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VillageDetail;
