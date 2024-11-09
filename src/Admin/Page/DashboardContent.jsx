import React from 'react';

function DashboardContent({listing}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Bid Filter Form */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Total Bids On Single Ank</h4>
        <form className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-5">
            <label className="block text-gray-600">Game Name</label>
            <select className="form-select mt-1 w-full border-gray-300 rounded">
              <option>-Select Game Name-</option>
              <option>All</option>
              <option>MILAN MORNING</option>
              <option>KALYAN MORNING</option>
              {/* Add more options dynamically as needed */}
            </select>
          </div>
          <div className="md:col-span-5">
            <label className="block text-gray-600">Market Time</label>
            <select className="form-select mt-1 w-full border-gray-300 rounded">
              <option>-Select Market Time-</option>
              <option>Open Market</option>
              <option>Close Market</option>
            </select>
          </div>
          <div className="md:col-span-2 flex items-end">
            <button type="button" className="btn btn-primary w-full">Get</button>
          </div>
        </form>
      </div>

      {/* Bids Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {Array.from({ length: 10 }).map((_, idx) => (
          <BidCard key={idx} ank={idx} bidCount={0} bidAmount={0} />
        ))}
      </div>

      {/* Profit Loss Table */}
      <div>
        <h4 className="text-xl font-semibold mb-4">Profit Loss Report</h4>
        <table className="min-w-full border border-gray-200 text-gray-700">
          <thead>
            <tr>
              <th className="py-2 border-b">Deposit</th>
              <th className="py-2 border-b">Withdraw</th>
              <th className="py-2 border-b">Total</th>
              <th className="py-2 border-b">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 text-center">0</td>
              <td className="py-2 text-center">0</td>
              <td className="py-2 text-center">0</td>
              <td className="py-2 text-center bg-blue-500 text-white">No Loss</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Sub-component for individual bid cards
const BidCard = ({ ank, bidCount, bidAmount }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow text-center">
    <h5 className="text-primary mb-1">Total Bids <span>{bidCount}</span></h5>
    <h2 className="text-2xl font-semibold mb-2">{bidAmount}</h2>
    <p className="text-gray-600">Total Bid Amount</p>
    <div className="mt-2 text-gray-700">Ank <span>{ank}</span></div>
  </div>
);

export default DashboardContent;
