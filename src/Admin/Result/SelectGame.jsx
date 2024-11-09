import React, { useState } from 'react';
import Listing from '../Api/Listing';
import toast from 'react-hot-toast';

function SelectGame({ listing }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    betdate: new Date().toISOString().slice(0, 10), // Default to today's date
    marketId: '',
    session: '',
    number: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const main = new Listing();
        const response = await main.ResultRate(formData);
        console.log("response", response)
        if (response?.data) {
            toast.success(response.data.message);
        } else {
            toast.error(response.data.message);
        }
    } catch (error) {
        console.error("Error", error?.response?.data?.message);
        toast.error(error?.response?.data?.message)
    } finally {
        setLoading(false);
    }
};

  return (
    <div className="card bg-white rounded-md px-4 py-2 lg:px-10 lg:py-2.5">
      <div className="card-body">
        <h4 className="card-title text-lg font-semibold mb-4">Select Game</h4>
        <form name="gameSrchFrm" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Result Date */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Result Date</label>
              <div className="date-picker">
                <input
                  required
                  className="form-control digits border rounded-md p-2 w-full"
                  type="date"
                  name="betdate"
                  id="betdate"
                  value={formData.betdate}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Game Name */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Game Name</label>
              <select
                required
                className="form-control select2 border rounded-md p-2 w-full"
                name="marketId"
                id="marketid"
                value={formData.marketId}
                onChange={handleInputChange}
              >
                <option value="">Select Name</option>
                {listing && listing.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Select Session */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Session</label>
              <select
                required
                className="form-control select2 border rounded-md p-2 w-full"
                name="session"
                id="session"
                value={formData.session}
                onChange={handleInputChange}
              >
                <option value="">Select Session</option>
                <option value="open">Open</option>
                <option value="close">Close</option>
              </select>
            </div>

            {/* Number */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Number</label>
              <select
                required
                className="form-control select2 border rounded-md p-2 w-full"
                name="number"
                id="number"
                value={formData.number}
                onChange={handleInputChange}
              >
                <option value="">Select Number</option>
                <option value="000">000</option>
                {[...Array(900).keys()].map((num) => (
                  <option key={num + 100} value={num + 100}>
                    {num + 100}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Second row with buttons */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            {/* Declare Result Button */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
              <button
              onSubmit={handleSubmit}
                type="submit"
                className="btn btn-primary bg-blue-500 text-white font-semibold py-2 px-4 w-full rounded-md"
                name="update"
                id="update"
              >
                {loading ? "Loading..." : "Declare Result"}
                
              </button>
            </div>

            {/* Declare Allot Button */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
              <button
                type="submit"
                className="btn btn-primary bg-blue-500 text-white font-semibold py-2 px-4 w-full rounded-md"
                name="update-allot"
                id="update-allot"
              >
                Declare Allot
              </button>
            </div>

            {/* Winner List Button */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
              <button
                type="button"
                className="btn btn-primary bg-blue-500 text-white font-semibold py-2 px-4 w-full rounded-md"
              >
                Winner List
              </button>
            </div>

            {/* Error Message */}
            <div className="form-group">
              <div id="error" className="text-red-500 text-sm"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SelectGame;
