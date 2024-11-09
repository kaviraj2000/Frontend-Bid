import React from 'react';
import SideBarAdmin from '../components/AdminSideBar';
import Header from '../components/Header';
import AdminLayout from '../Layout/AdminLayout';

const SingleDigitNumbers = () => {
  // Handler function to handle button clicks
  const handleButtonClick = (number) => {
    console.log(`Button ${number} clicked`); // Replace with your logic
  };

  return (
   <AdminLayout>
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Single Digit Numbers</h4>
          <div className="grid grid-cols-5 gap-4">
            {[...Array(10)].map((_, index) => (
              <button
                key={index}
                className="digit_num_box w-full h-12 flex items-center justify-center bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={() => handleButtonClick(index)}
              >
                {index}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
   </AdminLayout>
  
  );
};

export default SingleDigitNumbers;
