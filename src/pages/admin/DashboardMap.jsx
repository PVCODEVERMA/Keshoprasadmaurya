import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// मार्कर आइकन सेटअप
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const initialVillages = [
    {
      id: 1,
      name: 'रामपुर',
      totalVoters: 1200,
      activeWorkers: 45,
      supporters: 800,
      coordinates: [26.8467, 80.9462],
    },
    {
      id: 2,
      name: 'श्यामनगर',
      totalVoters: 850,
      activeWorkers: 32,
      supporters: 400,
      coordinates: [26.8567, 80.9562],
    },
    {
      id: 3,
      name: 'गोपालपुर',
      totalVoters: 1500,
      activeWorkers: 60,
      supporters: 1100,
      coordinates: [26.8667, 80.9662],
    },
    {
      id: 4,
      name: 'कृष्णानगर',
      totalVoters: 950,
      activeWorkers: 28,
      supporters: 500,
      coordinates: [26.8767, 80.9762],
    },
    {
      id: 5,
      name: 'हनुमानगढ़',
      totalVoters: 1800,
      activeWorkers: 75,
      supporters: 1500,
      coordinates: [26.8867, 80.9862],
    },
    {
      id: 6,
      name: 'लक्ष्मीपुर',
      totalVoters: 700,
      activeWorkers: 22,
      supporters: 300,
      coordinates: [26.8967, 80.9962],
    },
    {
      id: 7,
      name: 'शिवनगर',
      totalVoters: 1300,
      activeWorkers: 50,
      supporters: 900,
      coordinates: [26.9067, 81.0062],
    },
    {
      id: 8,
      name: 'गंगापुर',
      totalVoters: 1600,
      activeWorkers: 65,
      supporters: 1200,
      coordinates: [26.9167, 81.0162],
    },
    {
      id: 9,
      name: 'सरस्वती नगर',
      totalVoters: 1100,
      activeWorkers: 40,
      supporters: 700,
      coordinates: [26.9267, 81.0262],
    },
    {
      id: 10,
      name: 'दुर्गापुर',
      totalVoters: 1400,
      activeWorkers: 55,
      supporters: 950,
      coordinates: [26.9367, 81.0362],
    },
  ];

export default function DashboardMap() {
  const [villages] = useState(initialVillages);
  const [selectedVillage, setSelectedVillage] = useState(null);
  const [mapCenter] = useState([26.8467, 80.9462]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const calculateSupport = (village) => {
    return Math.round((village.supporters / village.totalVoters) * 100);
  };

  return (
    <div className=" md:p-4  min-h-screen  max-w-6xl rounded-xl bg-gray-50 mt-5 mx-auto">
      
      
      <h1 className="text-center text-lg md:text-2xl font-bold text-purple-700 mb-3 md:mb-6">
        डैशबोर्ड
      </h1>

      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
        {[
          { label: "कुल वोटर", value: "38,300" },
          { label: "स्थायी वोटर", value: "28,700" },
          { label: "कुल समर्थक", value: "20,000" },
          { label: "जिम्मेदार", value: "10" },
          { label: "कवर गांव", value: "752" },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-2 md:p-3 text-center rounded-lg shadow-xs border border-purple-100">
            <h3 className="text-[10px] md:text-sm font-medium text-gray-600 leading-tight">
              {stat.label}
            </h3>
            <p className="mt-1 text-sm md:text-xl font-bold text-green-600">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

     
      <div className="bg-white rounded-lg shadow-sm mb-4">
        <div className="p-2 md:p-4">
          <h2 className="text-sm md:text-lg font-semibold text-gray-700 mb-2 text-center">
            क्षेत्रीय मानचित्र
          </h2>
          <div className="h-48 md:h-80 rounded-md overflow-hidden">
            <MapContainer
              center={mapCenter}
              zoom={isMobile ? 10 : 11}
              className="h-full w-full"
              touchZoom={true}
              doubleClickZoom={!isMobile}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap'
              />
              {villages.map((village) => (
                <Marker
                  key={village.id}
                  position={village.coordinates}
                  eventHandlers={{
                    click: () => setSelectedVillage(village),
                  }}
                >
                  <Popup className="text-xs md:text-sm">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{village.name}</h3>
                      <p>वोटर: {village.totalVoters}</p>
                      <p>समर्थक: {calculateSupport(village)}%</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>

      
      <div className="bg-white rounded-lg shadow-sm p-2 md:p-4">
        <h2 className="text-sm md:text-lg font-semibold text-gray-700 mb-2 text-center">
          गाँववार विश्लेषण
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[300px]">
            <thead>
              <tr className="bg-purple-50 text-[10px] md:text-sm">
                <th className="p-1 md:p-2 text-left">गाँव</th>
                <th className="p-1 md:p-2 text-center">वोटर</th>
                <th className="p-1 md:p-2 text-center">समर्थक%</th>
                <th className="p-1 md:p-2 text-center">स्थिति</th>
              </tr>
            </thead>
            <tbody>
              {villages.map((village) => {
                const supportPercent = calculateSupport(village);
                return (
                  <tr
                    key={village.id}
                    className="border-t hover:bg-gray-50 text-[10px] md:text-sm"
                    onClick={() => setSelectedVillage(village)}
                  >
                    <td className="p-1 md:p-2 font-medium">{village.name}</td>
                    <td className="p-1 md:p-2 text-center">{village.totalVoters}</td>
                    <td className="p-1 md:p-2 text-center font-semibold">
                      {supportPercent}%
                    </td>
                    <td className="p-1 md:p-2 text-center">
                      <span className={`inline-block px-1.5 py-0.5 rounded-full text-xs ${
                        supportPercent >= 60 ? "bg-green-100 text-green-800" :
                        supportPercent >= 40 ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {supportPercent >= 60 ? "मजबूत" : 
                         supportPercent >= 40 ? "मध्यम" : "कमजोर"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    
      <div className="grid grid-cols-1 gap-2 mt-4">
        {["कार्य करता", "समर्थक", "नहीं हुआ"].map((category, index) => (
          <div key={index} className="bg-white p-2 rounded-lg shadow-xs">
            <h3 className="text-xs md:text-sm font-medium text-gray-700 mb-1 text-center">
              {category}
            </h3>
            <div className="relative">
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-purple-600 transition-all duration-500 rounded-full"
                  style={{ width: `${Math.random()*100}%` }}
                ></div>
              </div>
              <div className="text-right mt-0.5">
                <span className="text-[10px] md:text-xs text-purple-600">
                  {Math.floor(Math.random()*100)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}