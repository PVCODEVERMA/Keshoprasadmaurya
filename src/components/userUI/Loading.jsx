// components/Loading.js
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600"></div>
        
        {/* Text with pulse animation */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 dark:text-gray-300 font-medium animate-pulse">
            लोड हो रहा है...
          </span>
        </div>

        {/* Optional progress bar */}
        <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;