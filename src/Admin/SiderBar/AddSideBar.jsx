import React, { useState } from 'react';

const AddSideBar = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);

    const imagePreviews = files.map(file => URL.createObjectURL(file));
    setPreviewImages([...previewImages, ...imagePreviews]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(images);
  };

  return (
    <div className="bg-white mx-auto mt-8 p-4 mb-4 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Slider Image Management</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Select Images</label>
          <input 
            type="file" 
            multiple 
            accept="image/*" 
            onChange={handleImageChange} 
            className="mt-2 border rounded-md p-2" 
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary bg-blue-500 text-white font-semibold py-2 px-4 rounded-md">
          Upload Images
        </button>
      </form>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {previewImages.map((image, index) => (
          <div key={index} className="relative">
            <img 
              src={image} 
              alt={`Preview ${index + 1}`} 
              className="w-full h-[200px] object-cover rounded-lg shadow-lg" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddSideBar;
