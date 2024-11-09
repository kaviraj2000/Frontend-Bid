import React from "react";
import Loading from "../components/Loading";
import moment from "moment";

const WalletTransactionHistory = ({ payment, loading, username }) => {
  return (
    <div className="col-span-12">
      <div className="card bg-white shadow-lg">
        <div className="card-body p-6">
          <h4 className="card-title text-xl font-semibold mb-4">
            Wallet Transaction History
          </h4>
          {loading ? (
            <Loading />
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2 text-left">#</th>
                    <th className="border border-gray-300 p-2 text-left">Member Name</th>
                    <th className="border border-gray-300 p-2 text-left">Wallet Balance</th>
                    <th className="border border-gray-300 p-2 text-left">Date</th>
                    <th className="border border-gray-300 p-2 text-left">Status</th>
                    <th className="border border-gray-300 p-2 text-left">Transaction ID</th>
                  </tr>
                </thead>
                <tbody>
                  {payment && payment.map((user, index) => (
                    <tr key={user._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-300 p-2">{index + 1}</td>
                      <td className="border border-gray-300 p-2 capitalize">
                        {username}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {user?.amount}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {moment(user.created_at).format('DD MMM YYYY hh:mm A')}
                      </td>
                      <td className="border border-gray-300 p-2 text-green-500">
                        {user?.payment_status === 1 ? "Active" : "Inactive"}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {user?.transcation_id}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletTransactionHistory;
