import React from 'react';

const NoData = ({ message = 'No data available', icon = null }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-gray-100 border border-gray-200 rounded-lg">
      {icon && <div className="mb-4">{icon}</div>}
      <p className="text-gray-600 text-lg font-semibold">{message}</p>
    </div>
  );
};

export default NoData;
