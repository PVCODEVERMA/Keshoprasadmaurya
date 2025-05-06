import React, { useState } from 'react';

const SurveyorTracker = () => {
  
  const [surveyors, setSurveyors] = useState([
    { id: 1, name: "केशव यादव", caste: "यादव", contact: "9456321870", family: 7 },
    { id: 2, name: "मुकेश कुर्मी", caste: "कुर्मी", contact: "8876543219", family: 5 },
    { id: 3, name: "रामअवतार पटेल", caste: "पटेल", contact: "7654321890", family: 6 },
    { id: 4, name: "गीता निषाद", caste: "निषाद", contact: "6543210987", family: 4 },
    { id: 5, name: "राजेश लोधी", caste: "लोधी", contact: "9234567810", family: 8 },
    { id: 6, name: "सुनीता राजभर", caste: "राजभर", contact: "8321456709", family: 5 },
    { id: 7, name: "अजय मौर्य", caste: "मौर्य", contact: "7210986534", family: 6 },
    { id: 8, name: "नीतू कुशवाहा", caste: "कुशवाहा", contact: "6109875423", family: 3 },
    { id: 9, name: "विकास गौतम", caste: "ब्राह्मण", contact: "5998765312", family: 7 },
    { id: 10, name: "प्रिया पाल", caste: "पाल", contact: "4887654123", family: 4 }
  ]);


  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCaste, setSelectedCaste] = useState('सभी');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSurveyor, setEditingSurveyor] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    caste: 'यादव',
    contact: '',
    family: ''
  });


  const filteredSurveyors = surveyors.filter(surveyor => {
    const matchesSearch = surveyor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCaste = selectedCaste === 'सभी' || surveyor.caste === selectedCaste;
    
    return matchesSearch && matchesCaste;
  });

  const castes = ['सभी', ...new Set(surveyors.map(s => s.caste))];

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;

    const newSurveyor = {
      id: surveyors.length + 1,
      ...formData,
      family: parseInt(formData.family)
    };

    if (editingSurveyor) {
      setSurveyors(surveyors.map(s => s.id === editingSurveyor.id ? newSurveyor : s));
    } else {
      setSurveyors([...surveyors, newSurveyor]);
    }
    resetForm();
  };

  const resetForm = () => {
    setIsModalOpen(false);
    setEditingSurveyor(null);
    setFormData({ name: '', caste: 'यादव', contact: '', family: '' });
  };

  const deleteSurveyor = (id) => {
    setSurveyors(surveyors.filter(s => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
       
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="सर्वेयर खोजें..."
              className="p-2 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <select 
              className="p-2 border rounded"
              value={selectedCaste}
              onChange={(e) => setSelectedCaste(e.target.value)}
            >
              {castes.map(caste => (
                <option key={caste} value={caste}>{caste}</option>
              ))}
            </select>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
            >
              + नया सर्वेयर जोड़ें
            </button>
          </div>
        </div>

       
        <div className="bg-white rounded-lg shadow overflow-hidden">
          
          <table className="hidden md:table w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left">क्र.</th>
                <th className="p-3 text-left">नाम</th>
                <th className="p-3 text-left">जाति</th>
                <th className="p-3 text-left">संपर्क</th>
                <th className="p-3 text-left">परिवार</th>
                <th className="p-3 text-left">कार्य</th>
              </tr>
            </thead>
            <tbody>
              {filteredSurveyors.map((surveyor, index) => (
                <tr key={surveyor.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 font-medium">{surveyor.name}</td>
                  <td className="p-3">{surveyor.caste}</td>
                  <td className="p-3">{surveyor.contact}</td>
                  <td className="p-3">{surveyor.family}</td>
                  <td className="p-3 space-x-2">
                    <button 
                      onClick={() => {
                        setEditingSurveyor(surveyor);
                        setFormData({...surveyor, family: surveyor.family.toString()});
                        setIsModalOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      संपादित
                    </button>
                    <button 
                      onClick={() => deleteSurveyor(surveyor.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      हटाएं
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

      
          <div className="md:hidden p-4 space-y-4">
            {filteredSurveyors.map((surveyor) => (
              <div key={surveyor.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-lg">{surveyor.name}</h3>
                    <p className="text-gray-600">{surveyor.caste}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {surveyor.family} सदस्य
                  </span>
                </div>
                
                <div className="space-y-1">
                  <p>संपर्क: {surveyor.contact}</p>
                </div>
                
                <div className="flex space-x-3 mt-2">
                  <button
                    onClick={() => {
                      setEditingSurveyor(surveyor);
                      setFormData({...surveyor, family: surveyor.family.toString()});
                      setIsModalOpen(true);
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    संपादित
                  </button>
                  <button
                    onClick={() => deleteSurveyor(surveyor.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    हटाएं
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
              <h2 className="text-xl font-bold mb-4">
                {editingSurveyor ? 'सर्वेयर संपादित करें' : 'नया सर्वेयर जोड़ें'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1">नाम *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1">जाति *</label>
                  <select
                    value={formData.caste}
                    onChange={(e) => setFormData({...formData, caste: e.target.value})}
                    className="w-full p-2 border rounded"
                  >
                    {castes.filter(c => c !== 'सभी').map(caste => (
                      <option key={caste} value={caste}>{caste}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-1">संपर्क नंबर *</label>
                  <input
                    type="tel"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    className="w-full p-2 border rounded"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1">परिवार सदस्य *</label>
                  <input
                    type="number"
                    value={formData.family}
                    onChange={(e) => setFormData({...formData, family: e.target.value})}
                    className="w-full p-2 border rounded"
                    min="1"
                    required
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    रद्द करें
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    {editingSurveyor ? 'अपडेट करें' : 'सुरक्षित करें'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        
        {filteredSurveyors.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            कोई डेटा उपलब्ध नहीं है
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyorTracker;