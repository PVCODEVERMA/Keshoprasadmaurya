
import React from 'react';

const DropdownItem = ({ children, className, onClick }) => {
  return (
    <div
      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DropdownItem;