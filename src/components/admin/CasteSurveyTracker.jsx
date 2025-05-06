import React, { useState } from 'react';

const CasteSurveyTracker = () => {
  // जातिगत सर्वे डेटा
  const [casteSurveys, setCasteSurveys] = useState([
    { id: 1, name: "रामकिशोर यादव", contact: "9456321870", address: "फूलपुर", work: "किसान सम्मान योजना" },
    { id: 2, name: "सुनील कुर्मी", contact: "8876543219", address: "कौशांबी", work: "सड़क निर्माण" },
    { id: 3, name: "रामसेवक निषाद", contact: "7654321890", address: "श्रृंगवेरपुर", work: "नौका विहार विकास" },
    { id: 4, name: "गंगा सिंह लोधी", contact: "6543210987", address: "हंडिया", work: "गंगा क्लीन प्रोजेक्ट" },
    { id: 5, name: "माया देवी राजभर", contact: "9234567810", address: "मेजा", work: "महिला सशक्तिकरण" },
    { id: 6, name: "रामप्रसाद पाल", contact: "8321456709", address: "चिल्लापुर", work: "शैक्षणिक संस्थान" },
    { id: 7, name: "लक्ष्मी कुशवाहा", contact: "7210986534", address: "करछना", work: "कृषि तकनीकी केंद्र" },
    { id: 8, name: "सुरेश चंद्र मौर्य", contact: "6109875423", address: "सिराथू", work: "राम मंदिर परियोजना" },
    { id: 9, name: "राधेश्याम पटेल", contact: "5998765312", address: "प्रतापगढ़", work: "किसान मार्केट योजना" },
    { id: 10, name: "अंजू गौतम", contact: "4887654123", address: "कौड़िहार", work: "स्वास्थ्य केंद्र निर्माण" }
  ]);

  // फिल्टर और सर्च स्टेट
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('सभी');
  const [selectedWork, setSelectedWork] = useState('सभी');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSurvey, setEditingSurvey] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: 'फूलपुर',
    work: 'किसान सम्मान योजना'
  });

  // फिल्टर किए गए डेटा
  const filteredSurveys = casteSurveys.filter(survey => {
    const matchesSearch = survey.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAddress = selectedAddress === 'सभी' || survey.address === selectedAddress;
    const matchesWork = selectedWork === 'सभी' || survey.work === selectedWork;
    
    return matchesSearch && matchesAddress && matchesWork;
  });

  // ड्रॉपडाउन ऑप्शन
  const addresses = ['सभी', ...new Set(casteSurveys.map(s => s.address))];
  const works = ['सभी', ...new Set(casteSurveys.map(s => s.work))];

  // CRUD ऑपरेशन
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;

    const newSurvey = {
      id: casteSurveys.length + 1,
      ...formData
    };

    if (editingSurvey) {
      setCasteSurveys(casteSurveys.map(s => s.id === editingSurvey.id ? newSurvey : s));
    } else {
      setCasteSurveys([...casteSurveys, newSurvey]);
    }
    resetForm();
  };

  const resetForm = () => {
    setIsModalOpen(false);
    setEditingSurvey(null);
    setFormData({ name: '', contact: '', address: 'फूलपुर', work: 'किसान सम्मान योजना' });
  };

  const deleteSurvey = (id) => {
    setCasteSurveys(casteSurveys.filter(s => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* फिल्टर सेक्शन */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="नाम से खोजें..."
              className="p-2 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <select 
              className="p-2 border rounded"
              value={selectedAddress}
              onChange={(e) => setSelectedAddress(e.target.value)}
            >
              {addresses.map(address => (
                <option key={address} value={address}>{address}</option>
              ))}
            </select>

            <select 
              className="p-2 border rounded"
              value={selectedWork}
              onChange={(e) => setSelectedWork(e.target.value)}
            >
              {works.map(work => (
                <option key={work} value={work}>{work}</option>
              ))}
            </select>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
            >
              + नया सर्वे जोड़ें
            </button>
          </div>
        </div>

        {/* डेटा टेबल */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* डेस्कटॉप व्यू */}
          <table className="hidden md:table w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left">क्र.</th>
                <th className="p-3 text-left">नाम</th>
                <th className="p-3 text-left">संपर्क</th>
                <th className="p-3 text-left">पता</th>
                <th className="p-3 text-left">कार्य</th>
                <th className="p-3 text-left">प्रबंधन</th>
              </tr>
            </thead>
            <tbody>
              {filteredSurveys.map((survey, index) => (
                <tr key={survey.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 font-medium">{survey.name}</td>
                  <td className="p-3">{survey.contact}</td>
                  <td className="p-3">{survey.address}</td>
                  <td className="p-3">{survey.work}</td>
                  <td className="p-3 space-x-2">
                    <button 
                      onClick={() => {
                        setEditingSurvey(survey);
                        setFormData(survey);
                        setIsModalOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      संपादित
                    </button>
                    <button 
                      onClick={() => deleteSurvey(survey.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      हटाएं
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* मोबाइल व्यू */}
          <div className="md:hidden p-4 space-y-4">
            {filteredSurveys.map((survey) => (
              <div key={survey.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-2">
                  <h3 className="font-medium text-lg">{survey.name}</h3>
                  <p className="text-gray-600">{survey.contact}</p>
                </div>
                
                <div className="space-y-1">
                  <p>पता: {survey.address}</p>
                  <p>कार्य: {survey.work}</p>
                </div>
                
                <div className="flex space-x-3 mt-2">
                  <button
                    onClick={() => {
                      setEditingSurvey(survey);
                      setFormData(survey);
                      setIsModalOpen(true);
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    संपादित
                  </button>
                  <button
                    onClick={() => deleteSurvey(survey.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    हटाएं
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* मोडल फॉर्म */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
              <h2 className="text-xl font-bold mb-4">
                {editingSurvey ? 'सर्वे संपादित करें' : 'नया सर्वे जोड़ें'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1">पूरा नाम *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                  />
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
                  <label className="block mb-1">पता *</label>
                  <select
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full p-2 border rounded"
                  >
                    {addresses.filter(a => a !== 'सभी').map(address => (
                      <option key={address} value={address}>{address}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-1">कार्य योजना *</label>
                  <select
                    value={formData.work}
                    onChange={(e) => setFormData({...formData, work: e.target.value})}
                    className="w-full p-2 border rounded"
                  >
                    {works.filter(w => w !== 'सभी').map(work => (
                      <option key={work} value={work}>{work}</option>
                    ))}
                  </select>
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
                    {editingSurvey ? 'अपडेट करें' : 'सुरक्षित करें'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* खाली स्टेट */}
        {filteredSurveys.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            कोई सर्वे डेटा उपलब्ध नहीं है
          </div>
        )}
      </div>
    </div>
  );
};

export default CasteSurveyTracker;