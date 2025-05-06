import React from 'react';
import { Link } from 'react-router-dom';

const Notifications = () => {
  

  const notifications = [
    { 
      id: 1, 
      message: 'नई योजना "योग स्वास्थ्य मिशन" शुरू की गई है।',
      date: '6 मई 2025',
      category: 'update',
      unread: true
    },
    { 
      id: 2, 
      message: 'आपके वार्ड में स्वच्छता अभियान 8 मई को चलेगा।',
      date: '5 मई 2025',
      category: 'urgent',
      unread: true
    },
    { 
      id: 3, 
      message: 'जनगणना सर्वेक्षण का अगला चरण कल से शुरू होगा।',
      date: '4 मई 2025',
      category: 'info',
      unread: false
    },
  ];


  const categoryColors = {
    urgent: 'red-500',
    update: 'blue-500',
    info: 'green-500'
  };

  return (
    <div className="p-4  animate-fade-in">
      <div className="max-w-2xl mx-auto mt-28">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <i className="fa-solid fa-bell mr-3 text-blue-600"></i>
            सूचनाएं
          </h1>
          <Link to="/settings" className="text-blue-600 hover:text-blue-700 transition-colors">
            <i className="fa-solid fa-gear text-xl"></i>
          </Link>
        </div>

      
        <div className="space-y-4">
          {notifications.map((note, index) => (
            <div 
              key={note.id}
              className={`bg-white rounded-lg shadow-md p-4 border-l-4 border-${categoryColors[note.category]}
                transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer
                relative overflow-hidden animate-slide-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
             
              {note.unread && (
                <div className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              )}
              
              <div className="flex items-start">
              
                <div className={`mr-3 text-${categoryColors[note.category]}`}>
                  {note.category === 'urgent' && <i className="fa-solid fa-circle-exclamation text-xl"></i>}
                  {note.category === 'update' && <i className="fa-solid fa-arrow-trend-up text-xl"></i>}
                  {note.category === 'info' && <i className="fa-solid fa-circle-info text-xl"></i>}
                </div>

              
                <div className="flex-1">
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {note.message}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-500">{note.date}</span>
                    <span className={`px-2 py-1 text-xs rounded-full bg-${categoryColors[note.category]} bg-opacity-20
                      text-${categoryColors[note.category]} font-medium`}>
                      {note.category === 'urgent' && 'अत्यावश्यक'}
                      {note.category === 'update' && 'अपडेट'}
                      {note.category === 'info' && 'सूचना'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        {[1,2,3].map((i) => (
          <div key={i} className="bg-gray-100 animate-pulse rounded-lg p-4 mt-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}

     
        <div className="text-center py-12 opacity-0 animate-fade-in-up">
          <i className="fa-regular fa-bell-slash text-4xl text-gray-300 mb-4"></i>
          <p className="text-gray-500">कोई नई सूचना नहीं है</p>
        </div>

        
        <button className="w-full mt-6 bg-blue-100 text-blue-600 py-2 rounded-lg hover:bg-blue-200
          transition-colors duration-300 transform hover:scale-95">
          और सूचनाएं लोड करें
        </button>
      </div>

     
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Notifications;