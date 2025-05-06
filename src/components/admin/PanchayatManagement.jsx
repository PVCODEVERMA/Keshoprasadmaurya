import { useState } from 'react';
import { Link } from 'react-router-dom';

const PanchayatManagement = () => {
  const [panchayats, setPanchayats] = useState(() => {
    const saved = localStorage.getItem('panchayats');
    return saved ? JSON.parse(saved) : [];
  });

  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    villages: '',
    population: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPanchayat = {
      id: editId || Date.now(),
      name: formData.name,
      villages: parseInt(formData.villages),
      population: parseInt(formData.population),
    };

    let updatedPanchayats;
    if (editId) {
      updatedPanchayats = panchayats.map((p) =>
        p.id === editId ? newPanchayat : p
      );
    } else {
      updatedPanchayats = [...panchayats, newPanchayat];
    }

    setPanchayats(updatedPanchayats);
    localStorage.setItem('panchayats', JSON.stringify(updatedPanchayats));
    setShowModal(false);
    resetForm();
  };

  const handleDelete = (id) => {
    const updated = panchayats.filter((p) => p.id !== id);
    setPanchayats(updated);
    localStorage.setItem('panchayats', JSON.stringify(updated));
  };

  const resetForm = () => {
    setFormData({ name: '', villages: '', population: '' });
    setEditId(null);
  };

  const Modal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {editId ? 'पंचायत संपादित करें' : 'नई पंचायत जोड़ें'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">पंचायत नाम</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block mb-2">गाँवों की संख्या</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={formData.villages}
              onChange={(e) =>
                setFormData({ ...formData, villages: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block mb-2">जनसंख्या</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={formData.population}
              onChange={(e) =>
                setFormData({ ...formData, population: e.target.value })
              }
              required
            />
          </div>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={() => {
                setShowModal(false);
                resetForm();
              }}
              className="px-4 py-2 bg-gray-200 rounded flex-1"
            >
              रद्द करें
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded flex-1 hover:bg-purple-700"
            >
              {editId ? 'सुरक्षित करें' : 'जोड़ें'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold text-center mb-6 mt-5 ">
            पंचायत प्रबंधन डैशबोर्ड
      </h1>
        
        <div className="flex  flex-col sm:flex-row justify-between items-end sm:items-center gap-4 mb-6">
          
          <button
            onClick={() => setShowModal(true)}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 flex items-center"
          >
            <span className="mr-2">+</span> नई पंचायत जोड़ें
          </button>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white text-center p-6 rounded-xl shadow-md">
            <h3 className="text-gray-500 text-sm">कुल पंचायतें</h3>
            <p className="text-3xl font-bold text-purple-600">
              {panchayats.length}
            </p>
          </div>
          <div className="bg-white text-center p-6 rounded-xl shadow-md">
            <h3 className="text-gray-500 text-sm">कुल गाँव</h3>
            <p className="text-3xl font-bold text-green-600">
              {panchayats.reduce((sum, p) => sum + p.villages, 0)}
            </p>
          </div>
          <div className="bg-white text-center p-6 rounded-xl shadow-md">
            <h3 className="text-gray-500 text-sm">कुल जनसंख्या</h3>
            <p className="text-3xl font-bold text-blue-600">
              {panchayats
                .reduce((sum, p) => sum + p.population, 0)
                .toLocaleString()}
            </p>
          </div>
        </div>

       
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full">
            <thead className="bg-purple-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-purple-600 whitespace-nowrap">
                  पंचायत नाम
                </th>
                <th className="px-4 py-3 text-center text-xs sm:text-sm font-semibold text-purple-600 whitespace-nowrap">
                  गाँव
                </th>
                <th className="px-4 py-3 text-center text-xs sm:text-sm font-semibold text-purple-600 whitespace-nowrap">
                  जनसंख्या
                </th>
                <th className="px-4 py-3 text-center text-xs sm:text-sm font-semibold text-purple-600 whitespace-nowrap">
                  कार्यवाही
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {panchayats.map((panchayat) => (
                <tr key={panchayat.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-xs sm:text-sm whitespace-nowrap">
                    <Link
                      to={`/panchayat/${panchayat.id}`}
                      className="text-purple-600 hover:underline"
                    >
                      {panchayat.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-center text-xs sm:text-sm whitespace-nowrap">
                    {panchayat.villages}
                  </td>
                  <td className="px-4 py-3 text-center text-xs sm:text-sm whitespace-nowrap">
                    {panchayat.population.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                      <button
                        onClick={() => {
                          setFormData(panchayat);
                          setEditId(panchayat.id);
                          setShowModal(true);
                        }}
                        className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm"
                      >
                        संपादित
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm('क्या आप वाकई हटाना चाहते हैं?')) {
                            handleDelete(panchayat.id);
                          }
                        }}
                        className="text-red-600 hover:text-red-800 text-xs sm:text-sm"
                      >
                        हटाएं
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && <Modal />}
      </div>
    </div>
  );
};

export default PanchayatManagement;
