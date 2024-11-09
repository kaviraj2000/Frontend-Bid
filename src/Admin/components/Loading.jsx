import React from 'react';

const Loading = ({ message = 'Loading...', size = 'md' }) => {
  // Define size classes based on the size prop
  const sizeClasses = {
    sm: 'h-6 w-6 border-2',
    md: 'h-10 w-10 border-4',
    lg: 'h-16 w-16 border-8',
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div
        className={`${sizeClasses[size]} border-t-blue-500 border-solid rounded-full animate-spin`}
      ></div>
      <p className="mt-4 text-gray-600 text-lg font-semibold">{message}</p>
    </div>
  );
};

export default Loading;
