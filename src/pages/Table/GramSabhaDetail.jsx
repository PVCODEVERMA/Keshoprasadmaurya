import { Link, useParams } from "react-router-dom";

const GramSabhaDetail = () => {
  const { id } = useParams();

  const villageData = {
    1: [
      {
        id: 1,
        name: "विडोली",
        voters: 1500,
        permanentVoters: 1100,
        supporters: 1000,
        pdfLink: "/pdfs/vidoli.pdf",
      },
      {
        id: 2,
        name: "रानीखेडा",
        voters: 1100,
        permanentVoters: 800,
        supporters: 770,
        pdfLink: "/pdfs/ranikheda.pdf",
      },
      {
        id: 3,
        name: "कौरँग",
        voters: 400,
        permanentVoters: 250,
        supporters: 230,
        pdfLink: "/pdfs/kaurang.pdf",
      },
      {
        id: 4,
        name: "भटगाँव",
        voters: 700,
        permanentVoters: 600,
        supporters: 550,
        pdfLink: "/pdfs/bhatgaon.pdf",
      },
      {
        id: 5,
        name: "दूबियापुर",
        voters: 950,
        permanentVoters: 700,
        supporters: 680,
        pdfLink: "/pdfs/doobiyapur.pdf",
      },
      {
        id: 6,
        name: "शंकरपुर",
        voters: 1200,
        permanentVoters: 950,
        supporters: 900,
        pdfLink: "/pdfs/shankarpur.pdf",
      },
      {
        id: 7,
        name: "कमियारी",
        voters: 800,
        permanentVoters: 600,
        supporters: 580,
        pdfLink: "/pdfs/kamiyari.pdf",
      },
      {
        id: 8,
        name: "रुपापुर",
        voters: 650,
        permanentVoters: 500,
        supporters: 470,
        pdfLink: "/pdfs/rupapur.pdf",
      },
      {
        id: 9,
        name: "गोधना",
        voters: 550,
        permanentVoters: 400,
        supporters: 380,
        pdfLink: "/pdfs/godhana.pdf",
      },
      {
        id: 10,
        name: "टिकरोल",
        voters: 1000,
        permanentVoters: 750,
        supporters: 720,
        pdfLink: "/pdfs/tikarol.pdf",
      },
    ],
    2: [
      {
        id: 1,
        name: "विडोली",
        voters: 1500,
        permanentVoters: 1100,
        supporters: 1000,
        pdfLink: "/pdfs/vidoli.pdf",
      },
      {
        id: 2,
        name: "रानीखेडा",
        voters: 1100,
        permanentVoters: 800,
        supporters: 770,
        pdfLink: "/pdfs/ranikheda.pdf",
      },
      {
        id: 3,
        name: "कौरँग",
        voters: 400,
        permanentVoters: 250,
        supporters: 230,
        pdfLink: "/pdfs/kaurang.pdf",
      },
      {
        id: 4,
        name: "भटगाँव",
        voters: 700,
        permanentVoters: 600,
        supporters: 550,
        pdfLink: "/pdfs/bhatgaon.pdf",
      },
      {
        id: 5,
        name: "दूबियापुर",
        voters: 950,
        permanentVoters: 700,
        supporters: 680,
        pdfLink: "/pdfs/doobiyapur.pdf",
      },
      {
        id: 6,
        name: "शंकरपुर",
        voters: 1200,
        permanentVoters: 950,
        supporters: 900,
        pdfLink: "/pdfs/shankarpur.pdf",
      },
      {
        id: 7,
        name: "कमियारी",
        voters: 800,
        permanentVoters: 600,
        supporters: 580,
        pdfLink: "/pdfs/kamiyari.pdf",
      },
      {
        id: 8,
        name: "रुपापुर",
        voters: 650,
        permanentVoters: 500,
        supporters: 470,
        pdfLink: "/pdfs/rupapur.pdf",
      },
      {
        id: 9,
        name: "गोधना",
        voters: 550,
        permanentVoters: 400,
        supporters: 380,
        pdfLink: "/pdfs/godhana.pdf",
      },
      {
        id: 10,
        name: "टिकरोल",
        voters: 1000,
        permanentVoters: 750,
        supporters: 720,
        pdfLink: "/pdfs/tikarol.pdf",
      },
    ],
    3: [
      {
        id: 1,
        name: "विडोली",
        voters: 1500,
        permanentVoters: 1100,
        supporters: 1000,
        pdfLink: "/pdfs/vidoli.pdf",
      },
      {
        id: 2,
        name: "रानीखेडा",
        voters: 1100,
        permanentVoters: 800,
        supporters: 770,
        pdfLink: "/pdfs/ranikheda.pdf",
      },
      {
        id: 3,
        name: "कौरँग",
        voters: 400,
        permanentVoters: 250,
        supporters: 230,
        pdfLink: "/pdfs/kaurang.pdf",
      },
      {
        id: 4,
        name: "भटगाँव",
        voters: 700,
        permanentVoters: 600,
        supporters: 550,
        pdfLink: "/pdfs/bhatgaon.pdf",
      },
      {
        id: 5,
        name: "दूबियापुर",
        voters: 950,
        permanentVoters: 700,
        supporters: 680,
        pdfLink: "/pdfs/doobiyapur.pdf",
      },
      {
        id: 6,
        name: "शंकरपुर",
        voters: 1200,
        permanentVoters: 950,
        supporters: 900,
        pdfLink: "/pdfs/shankarpur.pdf",
      },
      {
        id: 7,
        name: "कमियारी",
        voters: 800,
        permanentVoters: 600,
        supporters: 580,
        pdfLink: "/pdfs/kamiyari.pdf",
      },
      {
        id: 8,
        name: "रुपापुर",
        voters: 650,
        permanentVoters: 500,
        supporters: 470,
        pdfLink: "/pdfs/rupapur.pdf",
      },
      {
        id: 9,
        name: "गोधना",
        voters: 550,
        permanentVoters: 400,
        supporters: 380,
        pdfLink: "/pdfs/godhana.pdf",
      },
      {
        id: 10,
        name: "टिकरोल",
        voters: 1000,
        permanentVoters: 750,
        supporters: 720,
        pdfLink: "/pdfs/tikarol.pdf",
      },
    ],
    4: [
      {
        id: 1,
        name: "विडोली",
        voters: 1500,
        permanentVoters: 1100,
        supporters: 1000,
        pdfLink: "/pdfs/vidoli.pdf",
      },
      {
        id: 2,
        name: "रानीखेडा",
        voters: 1100,
        permanentVoters: 800,
        supporters: 770,
        pdfLink: "/pdfs/ranikheda.pdf",
      },
      {
        id: 3,
        name: "कौरँग",
        voters: 400,
        permanentVoters: 250,
        supporters: 230,
        pdfLink: "/pdfs/kaurang.pdf",
      },
      {
        id: 4,
        name: "भटगाँव",
        voters: 700,
        permanentVoters: 600,
        supporters: 550,
        pdfLink: "/pdfs/bhatgaon.pdf",
      },
      {
        id: 5,
        name: "दूबियापुर",
        voters: 950,
        permanentVoters: 700,
        supporters: 680,
        pdfLink: "/pdfs/doobiyapur.pdf",
      },
      {
        id: 6,
        name: "शंकरपुर",
        voters: 1200,
        permanentVoters: 950,
        supporters: 900,
        pdfLink: "/pdfs/shankarpur.pdf",
      },
      {
        id: 7,
        name: "कमियारी",
        voters: 800,
        permanentVoters: 600,
        supporters: 580,
        pdfLink: "/pdfs/kamiyari.pdf",
      },
      {
        id: 8,
        name: "रुपापुर",
        voters: 650,
        permanentVoters: 500,
        supporters: 470,
        pdfLink: "/pdfs/rupapur.pdf",
      },
      {
        id: 9,
        name: "गोधना",
        voters: 550,
        permanentVoters: 400,
        supporters: 380,
        pdfLink: "/pdfs/godhana.pdf",
      },
      {
        id: 10,
        name: "टिकरोल",
        voters: 1000,
        permanentVoters: 750,
        supporters: 720,
        pdfLink: "/pdfs/tikarol.pdf",
      },
    ],
    5: [
      {
        id: 1,
        name: "विडोली",
        voters: 1500,
        permanentVoters: 1100,
        supporters: 1000,
        pdfLink: "/pdfs/vidoli.pdf",
      },
      {
        id: 2,
        name: "रानीखेडा",
        voters: 1100,
        permanentVoters: 800,
        supporters: 770,
        pdfLink: "/pdfs/ranikheda.pdf",
      },
      {
        id: 3,
        name: "कौरँग",
        voters: 400,
        permanentVoters: 250,
        supporters: 230,
        pdfLink: "/pdfs/kaurang.pdf",
      },
      {
        id: 4,
        name: "भटगाँव",
        voters: 700,
        permanentVoters: 600,
        supporters: 550,
        pdfLink: "/pdfs/bhatgaon.pdf",
      },
      {
        id: 5,
        name: "दूबियापुर",
        voters: 950,
        permanentVoters: 700,
        supporters: 680,
        pdfLink: "/pdfs/doobiyapur.pdf",
      },
      {
        id: 6,
        name: "शंकरपुर",
        voters: 1200,
        permanentVoters: 950,
        supporters: 900,
        pdfLink: "/pdfs/shankarpur.pdf",
      },
      {
        id: 7,
        name: "कमियारी",
        voters: 800,
        permanentVoters: 600,
        supporters: 580,
        pdfLink: "/pdfs/kamiyari.pdf",
      },
      {
        id: 8,
        name: "रुपापुर",
        voters: 650,
        permanentVoters: 500,
        supporters: 470,
        pdfLink: "/pdfs/rupapur.pdf",
      },
      {
        id: 9,
        name: "गोधना",
        voters: 550,
        permanentVoters: 400,
        supporters: 380,
        pdfLink: "/pdfs/godhana.pdf",
      },
      {
        id: 10,
        name: "टिकरोल",
        voters: 1000,
        permanentVoters: 750,
        supporters: 720,
        pdfLink: "/pdfs/tikarol.pdf",
      },
    ],
  };



  const villages = villageData[id] || [];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center mt-28">
        ग्राम सभा की सूची - ID: {id}
      </h2>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full table-auto border-collapse text-center text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr className="">
              <th className="p-3 border">क्रम संख्या</th>
              <th className="p-3 border">गाँव का नाम</th>
              <th className="p-3 border">कुल वोटर</th>
              <th className="p-3 border">स्थायी वोटर</th>
              <th className="p-3 border">समर्थक</th>
              <th className="p-3 border">वॉटर लिस्ट</th>
            </tr>
          </thead>
          <tbody>
            {villages.map((village) => (
              <tr key={village.id} className="hover:bg-gray-50">
                <td className="p-3 border">{village.id}</td>
                <td className="p-3 border">
                  <Link
                    to={`/village/${village.name}`}
                    className="text-blue-600 hover:underline"
                  >
                    {village.name}
                  </Link>
                </td>
                <td className="p-3 border">{village.voters}</td>
                <td className="p-3 border">{village.permanentVoters}</td>
                <td className="p-3 border">{village.supporters}</td>
                <td className="p-3 border">
                  <a
                    href={village.pdfLink}
                    download
                    className="text-blue-500 hover:underline"
                  >
                    डाउनलोड PDF
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View - Improved */}
<div className="md:hidden space-y-3">
  {villages.map((village) => (
    <div
      key={village.id}
      className="bg-white shadow-sm rounded-lg p-4 border border-gray-100"
    >
      <div className="space-y-3">
        {/* Village Header */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">क्रम संख्या:
          <span className="font-bold">{village.id}</span>
          
          </span>
          <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
            {village.voters} वोटर
          </span>
        </div>

        {/* Village Name */}
        <h3 className="text-lg font-semibold text-gray-800">
          <Link
            to={`/village/${village.name}`}
            className="text-blue-600 font-semibold text-base block mb-2 hover:underline 
                  transform transition-all duration-300 
                  hover:scale-105 
                  active:scale-95 
                  active:bg-blue-50 
                  active:rounded-lg 
                  active:px-2"
          >
            {village.name}
          </Link>
        </h3>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="space-y-1">
            <p className="text-gray-500">स्थायी वोटर</p>
            <p className="font-medium">{village.permanentVoters}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">समर्थक</p>
            <p className="font-medium text-green-600">{village.supporters}</p>
          </div>
        </div>

        {/* PDF Download Button */}
        <a
          href={village.pdfLink}
          download
          className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md text-sm font-medium transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          PDF डाउनलोड करें
        </a>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default GramSabhaDetail;
