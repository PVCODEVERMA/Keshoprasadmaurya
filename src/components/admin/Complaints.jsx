import React, { useState } from 'react';

const ComplaintManagement = () => {
  // State variables
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      name: 'राहुल शर्मा',
      phone: '9876543210',
      email: 'rahul@example.com',
      description: 'पानी की आपूर्ति में समस्या',
      status: 'pending',
      date: '2023-08-20',
      attachments: [
        { url: 'sample-video.mp4', type: 'video' },
        { url: 'sample-audio.mp3', type: 'audio' }
      ],
      replies: [
        {
          id: 1,
          text: 'आपकी शिकायत पर कार्यवाही की जा रही है',
          timestamp: '2023-08-20 10:30 AM',
          admin: 'सहायता केंद्र'
        }
      ]
    },
    {
      id: 2,
      name: 'नीतू वर्मा',
      phone: '9876543211',
      email: 'neetu@example.com',
      description: 'बिजली की समस्या',
      status: 'in-progress',
      date: '2023-08-21',
      attachments: [],
      replies: []
    }
  ]);

  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [replyText, setReplyText] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState(null);

  // Safe media handler
  const openMedia = (url) => {
    try {
      const mediaUrl = String(url || '');
      if (mediaUrl.match(/\.(mp4|mp3)$/i)) {
        setSelectedMedia(mediaUrl);
        setShowMediaModal(true);
      }
    } catch (error) {
      console.error('Media open error:', error);
    }
  };

  // Safe complaint filtering
  const filteredComplaints = complaints.filter(complaint => {
    const safeSearch = String(searchTerm).toLowerCase();
    const safeId = String(complaint?.id || '').toLowerCase();
    const safeName = String(complaint?.name || '').toLowerCase();
    const safeStatus = String(complaint?.status || '');

    const matchesSearch = safeId.includes(safeSearch) || safeName.includes(safeSearch);
    const matchesStatus = filterStatus === 'all' || safeStatus === filterStatus;

    return matchesSearch && matchesStatus;
  });

  // Safe file upload handler
  const handleFileUpload = (e) => {
    try {
      const files = Array.from(e.target.files || []);
      if (files.length > 0) {
        setAttachments(files);
        simulateUpload(files);
      }
    } catch (error) {
      console.error('File upload error:', error);
    }
  };

  // Simulate upload progress
  const simulateUpload = (files) => {
    setIsUploading(true);
    setUploadStatus(null);
    let progress = 0;
    
    const interval = setInterval(() => {
      progress = Math.min(progress + Math.random() * 20, 100);
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        setUploadStatus('success');
        setTimeout(() => setUploadStatus(null), 3000);
      }
    }, 200);
  };

  // Safe reply submission
  const handleSubmitReply = (e) => {
    try {
      e.preventDefault();
      if (!selectedComplaint?.id) return;

      const newReply = {
        id: Date.now(),
        text: String(replyText || ''),
        timestamp: new Date().toLocaleString(),
        admin: 'Admin'
      };

      setComplaints(prev => prev.map(complaint => 
        complaint.id === selectedComplaint.id ? {
          ...complaint,
          replies: [...(complaint.replies || []), newReply],
          status: 'in-progress'
        } : complaint
      ));

      setReplyText('');
      setAttachments([]);
    } catch (error) {
      console.error('Reply submission error:', error);
    }
  };

  // Safe media modal
  const renderMediaModal = () => {
    if (!showMediaModal) return null;

    const mediaUrl = String(selectedMedia || '');
    const isVideo = mediaUrl.endsWith('.mp4');
    const isAudio = mediaUrl.endsWith('.mp3');

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fadeIn">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
          {isVideo ? (
            <video controls className="w-full">
              <source src={mediaUrl} type="video/mp4" />
            </video>
          ) : isAudio ? (
            <audio controls className="w-full">
              <source src={mediaUrl} type="audio/mpeg" />
            </audio>
          ) : (
            <p className="text-red-500 p-4">असमर्थित मीडिया प्रारूप</p>
          )}
          
          <button
            onClick={() => setShowMediaModal(false)}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 w-full"
          >
            बंद करें
          </button>
        </div>
      </div>
    );
  };

  // Safe status badge
  const renderStatusBadge = (status) => {
    const safeStatus = String(status || 'pending');
    
    const statusConfig = {
      pending: { text: 'लंबित', color: 'bg-yellow-100 text-yellow-800' },
      'in-progress': { text: 'प्रगति में', color: 'bg-blue-100 text-blue-800' },
      resolved: { text: 'हल हो गया', color: 'bg-green-100 text-green-800' }
    };

    return (
      <span className={`px-2 py-1 text-sm rounded-full ${statusConfig[safeStatus]?.color || 'bg-gray-100'}`}>
        {statusConfig[safeStatus]?.text || 'अज्ञात'}
      </span>
    );
  };

  // Complaint List UI
  const renderComplaintList = () => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">शिकायत सूची</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="खोजें (नाम/शिकायत ID)"
          className="p-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select 
          className="p-2 border rounded-lg"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">सभी स्थिति</option>
          <option value="pending">लंबित</option>
          <option value="in-progress">प्रगति में</option>
          <option value="resolved">हल हो गया</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredComplaints.map(complaint => (
          <div 
            key={complaint.id}
            onClick={() => setSelectedComplaint(complaint)}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedComplaint?.id === complaint.id 
                ? 'border-blue-500 bg-blue-50' 
                : 'hover:border-blue-300'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">
                  {String(complaint.name || 'अज्ञात उपयोगकर्ता')}
                </p>
                <p className="text-sm text-gray-600 truncate">
                  {String(complaint.description || 'कोई विवरण नहीं')}
                </p>
              </div>
              {renderStatusBadge(complaint.status)}
            </div>
            <div className="mt-2 flex justify-between items-center">
              <p className="text-sm text-gray-500">
                {String(complaint.date || 'तिथि उपलब्ध नहीं')}
              </p>
              <p className="text-sm text-blue-600">
                #{String(complaint.id || '').padStart(3, '0')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Complaint Details UI
  const renderComplaintDetails = () => {
    if (!selectedComplaint) return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
        कृपया सूची से शिकायत चुनें
      </div>
    );

    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">शिकायत विवरण</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">नाम: 
              <span className="font-normal ml-2">
                {String(selectedComplaint.name || 'अज्ञात')}
              </span>
            </p>
            <p className="font-semibold">फ़ोन: 
              <a href={`tel:${selectedComplaint.phone}`} className="text-blue-600 ml-2">
                {String(selectedComplaint.phone || 'उपलब्ध नहीं')}
              </a>
            </p>
            <p className="font-semibold">ईमेल: 
              <a href={`mailto:${selectedComplaint.email}`} className="text-blue-600 ml-2">
                {String(selectedComplaint.email || 'उपलब्ध नहीं')}
              </a>
            </p>
          </div>
          
          <div>
            <p className="font-semibold">समस्या विवरण:</p>
            <p className="mt-2 text-gray-700">
              {String(selectedComplaint.description || 'कोई विवरण नहीं')}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold mb-2">संलग्नक:</h3>
          <div className="flex gap-4 flex-wrap">
            {selectedComplaint.attachments?.map((file, index) => {
              const mediaUrl = String(file?.url || '');
              const isValid = /\.(mp4|mp3)$/i.test(mediaUrl);

              return (
                <button 
                  key={index}
                  onClick={() => isValid && openMedia(mediaUrl)}
                  className={`px-4 py-2 rounded-md flex items-center ${
                    isValid ? 'bg-blue-100 hover:bg-blue-200' : 'bg-gray-100 cursor-not-allowed'
                  }`}
                  disabled={!isValid}
                >
                  <span className="mr-2">▶</span>
                  {file.type === 'video' ? 'वीडियो' : 'ऑडियो'} {index + 1}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">प्रतिक्रियाएं</h2>
          
          {selectedComplaint.replies?.map(reply => (
            <div key={reply.id} className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <p className="font-semibold text-blue-600">
                  {String(reply.admin || 'अज्ञात')}
                </p>
                <span className="text-sm text-gray-500">
                  {String(reply.timestamp || '')}
                </span>
              </div>
              <p className="text-gray-700">
                {String(reply.text || 'कोई विवरण नहीं')}
              </p>
            </div>
          ))}

          <form onSubmit={handleSubmitReply} className="mt-8">
            <div className="mb-4">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="प्रतिक्रिया लिखें..."
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows="4"
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-semibold">फ़ाइल संलग्न करें</label>
              
              <div 
                className={`relative border-2 border-dashed rounded-lg p-8 ${
                  dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleFileUpload({ target: { files: e.dataTransfer.files } });
                }}
              >
                <div className="text-center">
                  <svg 
                    className="w-12 h-12 mx-auto text-blue-500 mb-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                    />
                  </svg>
                  <p className="text-gray-600 mb-2">
                    फ़ाइलें यहां खींचें या <span className="text-blue-600 cursor-pointer">ब्राउज़ करें</span>
                  </p>
                  <p className="text-sm text-gray-500">अधिकतम फ़ाइल आकार: 50MB</p>
                </div>

                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                {attachments.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {attachments.map((file, index) => (
                      <div 
                        key={index}
                        className="flex items-center bg-white p-2 rounded-md shadow-sm border"
                      >
                        <span className="text-blue-500 mr-2">✓</span>
                        <span className="text-sm truncate">
                          {String(file.name || 'अज्ञात फ़ाइल')}
                        </span>
                        <span className="text-xs text-gray-500 ml-auto">
                          {file.size ? `${(file.size / 1024 / 1024).toFixed(2)}MB` : '0MB'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {isUploading && (
                  <div className="mt-4 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-blue-500 rounded-full" 
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                )}

                {uploadStatus && (
                  <div className={`mt-4 p-3 rounded-md ${
                    uploadStatus === 'success' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {uploadStatus === 'success' ? '✅ अपलोड सफल!' : '❌ अपलोड विफल!'}
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full"
              disabled={!replyText && attachments.length === 0}
            >
              प्रतिक्रिया भेजें
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {renderComplaintList()}
      {renderComplaintDetails()}
      {renderMediaModal()}
    </div>
  );
};

export default ComplaintManagement;