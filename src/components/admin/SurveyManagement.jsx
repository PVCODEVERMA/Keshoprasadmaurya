import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SurveyManagement = () => {
  const [villages, setVillages] = useState([
    { 
      id: 1, 
      village: "Sirahi (Prayagraj)", 
      status: "Completed", 
      report: new File(['content'], 'keshav_sirahi_report.pdf', { type: 'application/pdf' })
    },
    { 
      id: 2, 
      village: "Phoolpur (Prayagraj)", 
      status: "In Progress", 
      report: new File(['content'], 'keshav_phoolpur_report.pdf', { type: 'application/pdf' })
    },
    { 
      id: 3, 
      village: "Kaushambi", 
      status: "Not Started", 
      report: null 
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVillage, setEditingVillage] = useState(null);
  const [formData, setFormData] = useState({
    village: '',
    status: 'Not Started',
    report: null
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const statusStyles = {
    'Completed': 'bg-green-100 text-green-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    'Not Started': 'bg-red-100 text-red-800'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.village) return;

    if (editingVillage) {
      const updatedVillages = villages.map(v => 
        v.id === editingVillage.id ? { ...v, ...formData } : v
      );
      setVillages(updatedVillages);
      toast('village updated successfully!');
    } else {
      const newVillage = {
        id: villages.length + 1,
        ...formData
      };
      setVillages([...villages, newVillage]);
      toast('New village added successfully!');
    }
    resetForm();
  };

  const resetForm = () => {
    setIsModalOpen(false);
    setEditingVillage(null);
    setFormData({ village: '', status: 'Not Started', report: null });
    setSelectedFile(null);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file?.type === 'application/pdf') {
      setSelectedFile(file);
      setFormData({ ...formData, report: file });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file?.type === 'application/pdf') {
      setSelectedFile(file);
      setFormData({ ...formData, report: file });
    }
  };

  const deleteVillage = (id) => {
    setVillages(villages.filter(v => v.id !== id));
    toast('Village deleted successfully!');
  };

  const startEditing = (village) => {
    setEditingVillage(village);
    setFormData({
      village: village.village,
      status: village.status,
      report: village.report
    });
    setSelectedFile(village.report);
    setIsModalOpen(true);
  };

  const handleDownload = (report) => {
    return report instanceof File ? URL.createObjectURL(report) : '#';
   
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Village Development Tracker</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg transition-colors shadow-md"
          >
            + Add New Village
          </button>
        </div>

        
        <div className="sm:hidden space-y-4">
          {villages.map((village) => (
            <div key={village.id} className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800">{village.village}</h3>
                  <p className="text-sm text-gray-500 mt-1">ID: {village.id}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${statusStyles[village.status]}`}>
                  {village.status}
                </span>
              </div>
              
              {village.report && (
                <div className="mt-3">
                  <a
                    href={handleDownload(village.report)}
                    download={village.report?.name}
                    className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Report
                  </a>
                </div>
              )}
              
              <div className="flex gap-3 mt-3">
                <button 
                  onClick={() => startEditing(village)}
                  className="text-blue-600 hover:text-blue-800 text-sm px-2 py-1"
                >
                  Edit
                </button>
                <button 
                  onClick={() => deleteVillage(village.id)}
                  className="text-red-600 hover:text-red-800 text-sm px-2 py-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Village List - Desktop View */}
        <div className="hidden sm:block bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Village Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Report</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {villages.map((village) => (
                <tr key={village.id}>
                  <td className="px-4 py-3">{village.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">{village.village}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${statusStyles[village.status]}`}>
                      {village.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {village.report && (
                      <a
                        href={handleDownload(village.report)}
                        download={village.report?.name}
                        className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download
                      </a>
                    )}
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button 
                      onClick={() => startEditing(village)}
                      className="text-blue-600 hover:text-blue-800 text-sm px-2 py-1"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => deleteVillage(village.id)}
                      className="text-red-600 hover:text-red-800 text-sm px-2 py-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto mx-2">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">
                  {editingVillage ? 'Edit Village' : 'Add New Village'}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Village Name *</label>
                  <input
                    type="text"
                    value={formData.village}
                    onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter village name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status *</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {Object.keys(statusStyles).map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {editingVillage ? 'Update Report' : 'PDF Report *'}
                  </label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors
                      ${selectedFile ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-blue-400'}`}
                    onClick={() => document.getElementById('pdfInput').click()}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <input
                      type="file"
                      id="pdfInput"
                      className="hidden"
                      onChange={handleFileSelect}
                      accept="application/pdf"
                    />
                    <div className="space-y-2">
                      <div className="inline-block p-2 bg-white rounded-full shadow">
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      {selectedFile ? (
                        <div className="text-green-600 font-medium">
                          <p className="truncate text-sm">{selectedFile.name}</p>
                          <p className="text-xs mt-1">File selected</p>
                        </div>
                      ) : (
                        <div className="text-gray-600">
                          <p className="text-sm font-medium">Drag PDF or click to upload</p>
                          <p className="text-xs mt-1">Max size: 25MB</p>
                        </div>
                      )}
                    </div>
                  </div>
                  {editingVillage?.report && !selectedFile && (
                    <p className="mt-2 text-xs text-gray-500">
                      Current file: {editingVillage.report.name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="w-full sm:w-auto px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    {editingVillage ? 'Update' : 'Save'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <ToastContainer position='top-center' />
    </div>
  );
};

export default SurveyManagement;