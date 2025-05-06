import React, { useState, useEffect } from 'react';
import { FaPlus, FaFileAudio, FaFileVideo, FaSearch, FaTimes, FaLock } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from 'react-responsive';

const getFileTypeLabel = (mimeType) => {
  const typeMap = {
    'audio/mpeg': 'MP3',
    'audio/wav': 'WAV',
    'video/mp4': 'MP4',
    'video/quicktime': 'MOV',
    'audio/ogg': 'OGG',
    'video/x-msvideo': 'AVI',
    'audio/aac': 'AAC',
    'video/webm': 'WEBM'
  };
  return typeMap[mimeType] || mimeType.split('/')[1].toUpperCase();
};

const formatFileSize = (bytes) => {
  if (bytes > 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }
  return `${(bytes / 1024).toFixed(1)} KB`;
};

const dummyData = [
  {
    id: 1,
    name: 'राम कुमार',
    phone: '9876543210',
    email: 'ram@example.com',
    address: 'लखनऊ',
    description: 'पानी की समस्या है',
    file: null,
    date: new Date().toLocaleString(),
    status: 'Pending'
  },
  {
    id: 2,
    name: 'सीता देवी',
    phone: '9876501234',
    email: 'sita@example.com',
    address: 'कानपुर',
    description: 'बिजली नहीं है 2 दिनों से',
    file: null,
    date: new Date().toLocaleString(),
    status: 'Resolved'
  }
];

const Shikayat = () => {
  const [complaints, setComplaints] = useState(() => {
    const saved = localStorage.getItem('complaints');
    if (saved) {
      return JSON.parse(saved);
    } else {
      localStorage.setItem('complaints', JSON.stringify(dummyData));
      return dummyData;
    }
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    description: '',
    file: null
  });

  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isAdmin, setIsAdmin] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 640 });

  useEffect(() => {
    localStorage.setItem('complaints', JSON.stringify(complaints));
  }, [complaints]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 50 * 1024 * 1024) {
      setFormData({
        ...formData,
        file: {
          name: file.name,
          type: file.type,
          size: file.size
        }
      });
    } else {
      toast.error('फ़ाइल का आकार 50MB से अधिक नहीं होना चाहिए');
    }
  };

  const removeFile = () => {
    setFormData({ ...formData, file: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.description) {
      toast.error('कृपया आवश्यक फ़ील्ड भरें');
      return;
    }

    const newComplaint = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleString(),
      status: 'Pending'
    };

    setComplaints([...complaints, newComplaint]);
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      description: '',
      file: null
    });
    setShowForm(false);
    toast.success('शिकायत सफलतापूर्वक दर्ज की गई');
  };

  const toggleStatus = (id) => {
    if (!isAdmin) {
      const password = prompt("कृपया एडमिन पासवर्ड दर्ज करें");
      if (password !== "admin123") {
        toast.error("गलत पासवर्ड");
        return;
      }
      setIsAdmin(true);
      toast.success("एडमिन एक्सेस सक्रिय");
    }

    setComplaints(complaints.map(complaint =>
      complaint.id === id ? {
        ...complaint,
        status: complaint.status === 'Pending' ? 'Resolved' :
          complaint.status === 'Resolved' ? 'Rejected' : 'Pending'
      } : complaint
    ));
  };

  const filteredComplaints = complaints.filter(complaint => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      complaint.name.toLowerCase().includes(searchLower) ||
      complaint.address.toLowerCase().includes(searchLower) ||
      complaint.description.toLowerCase().includes(searchLower) ||
      complaint.phone.includes(searchQuery);

    const matchesStatus = statusFilter === 'all' ||
      complaint.status.toLowerCase() === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <ToastContainer />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 mt-32">
        <button onClick={() => setShowForm(!showForm)} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
          <FaPlus /> शिकायत जोड़ें
        </button>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="खोजें..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="all">सभी</option>
            <option value="pending">Pending</option>
            <option value="resolved">Resolved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded mb-4">
          <input type="text" placeholder="नाम" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required className="p-2 border rounded" />
          <input type="text" placeholder="फ़ोन" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required className="p-2 border rounded" />
          <input type="email" placeholder="ईमेल (ऐच्छिक)" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="p-2 border rounded" />
          <input type="text" placeholder="पता (ऐच्छिक)" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} className="p-2 border rounded" />
          <textarea placeholder="समस्या का विवरण" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} required className="p-2 border rounded col-span-full" />
          <div className="flex items-center gap-3 col-span-full">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="file" accept="audio/*,video/*" onChange={handleFileUpload} hidden />
              <FaFileAudio />/ <FaFileVideo />
              फ़ाइल जोड़ें
            </label>
            {formData.file && (
              <div className="flex items-center gap-1 text-sm">
                <span>{formData.file.name} ({formatFileSize(formData.file.size)})</span>
                <button type="button" onClick={removeFile}><FaTimes /></button>
              </div>
            )}
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded col-span-full">जमा करें</button>
        </form>
      )}

      {/* Responsive Table and Card View */}
      {!isMobile ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-2 py-1">नाम</th>
                <th className="border px-2 py-1">फ़ोन</th>
                <th className="border px-2 py-1">पता</th>
                <th className="border px-2 py-1">विवरण</th>
                <th className="border px-2 py-1">फ़ाइल</th>
                <th className="border px-2 py-1">दिनांक</th>
                <th className="border px-2 py-1">स्थिति</th>
              </tr>
            </thead>
            <tbody>
              {filteredComplaints.map((complaint) => (
                <tr key={complaint.id} className="hover:bg-gray-100 text-sm">
                  <td className="border px-2 py-1">{complaint.name}</td>
                  <td className="border px-2 py-1">{complaint.phone}</td>
                  <td className="border px-2 py-1">{complaint.address}</td>
                  <td className="border px-2 py-1">{complaint.description}</td>
                  <td className="border px-2 py-1">{complaint.file ? `${getFileTypeLabel(complaint.file.type)} - ${formatFileSize(complaint.file.size)}` : '—'}</td>
                  <td className="border px-2 py-1">{complaint.date}</td>
                  <td
                    className={`border px-2 py-1 cursor-pointer ${complaint.status === 'Pending' ? 'text-yellow-600' : complaint.status === 'Resolved' ? 'text-green-600' : 'text-red-600'}`}
                    onClick={() => toggleStatus(complaint.id)}
                  >
                    {complaint.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="space-y-4 mb-20">
          {filteredComplaints.map((complaint) => (
            <div key={complaint.id} className="border rounded p-4 shadow bg-white text-sm">
              <p className='flex justify-between '><strong>नाम:-</strong> {complaint.name}</p>
              <p className='flex justify-between '><strong>फ़ोन:-</strong> {complaint.phone}</p>
              <p className='flex justify-between '><strong>पता:-</strong> {complaint.address}</p>
              <p className='flex justify-between '><strong>विवरण:-</strong> {complaint.description}</p>
              <p className='flex justify-between '><strong>फ़ाइल:-</strong> {complaint.file ? `${getFileTypeLabel(complaint.file.type)} - ${formatFileSize(complaint.file.size)}` : '—'}</p>
              <p className='flex justify-between '><strong>दिनांक:-</strong> {complaint.date}</p>
              <p className='flex justify-between '>
                <strong>स्थिति:-</strong>{' '}
                <span
                  className={`cursor-pointer ${complaint.status === 'Pending' ? 'text-yellow-600' : complaint.status === 'Resolved' ? 'text-green-600' : 'text-red-600'}`}
                  onClick={() => toggleStatus(complaint.id)}
                >
                  {complaint.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shikayat;
