import React, { useEffect, useState } from 'react';
import Listing from '../Api/Listing';
import AdminLayout from '../Layout/AdminLayout';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import toast from 'react-hot-toast';
import Loaidng from "../components/Loading";
import { GrFormView } from "react-icons/gr";
import Delete from '../components/Delete';

const UserListTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState({}); // Track loading state per user

  const fetchData = () => {
    setLoading(true);
    const main = new Listing();
    const response = main.userList();
    response
      .then((res) => {
        if (res.data) {
          setUsers(res.data.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log('error', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleUserStatus = async (id, currentStatus) => {
    setLoadingUsers((prev) => ({ ...prev, [id]: true })); // Start loading for this user

    const newStatus = currentStatus === 'active' ? 'inactive' : 'active'; // Determine new status
    try {
      const main = new Listing();
      const response = await main.userStatus({ _id: id, user_status: newStatus });

      if (response.data) {
        toast.success(response?.data?.message);
        fetchData(); // Re-fetch the updated list after status change
      } else {
        toast.error('Failed to update user status.');
      }
    } catch (error) {
      console.error('Error updating user status:', error);
      toast.error('Error updating user status.');
    } finally {
      setLoadingUsers((prev) => ({ ...prev, [id]: false })); // Stop loading for this user
    }
  };


  return (
    <AdminLayout>
      <div className="overflow-x-auto">
        {loading ? (
          <Loaidng />
        ) : (
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">#</th>
                <th className="border border-gray-300 p-2 text-left">Member Name</th>
                <th className="border border-gray-300 p-2 text-left">Whatsapp</th>
                <th className="border border-gray-300 p-2 text-left">Mobile No</th>
                <th className="border border-gray-300 p-2 text-left">Wallet Balance</th>
                <th className="border border-gray-300 p-2 text-left">Date</th>
                <th className="border border-gray-300 p-2 text-left">Status</th>
                <th className="border border-gray-300 p-2 text-left">Option</th>
                <th className="border border-gray-300 p-2 text-left">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2 capitalize">
                    <Link
                      to={`view-user.php?member_id=${user.member_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="capitalize text-blue-600 hover:underline"
                    >
                      {user.username}
                    </Link>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <Link to={`https://wa.me/${user.phone}`} target="blank" className="text-green-600">
                      <FaWhatsapp className="text-center" size={24} />
                    </Link>
                  </td>
                  <td className="border border-gray-300 p-2">
                    {user.phone}
                    <Link to={`tel:${user.phone}`} className="ml-2 text-blue-600 hover:underline">
                      <i className="mdi mdi-cellphone-iphone"></i>
                    </Link>
                  </td>
                  <td className="border border-gray-300 p-2">{user.amount}</td>
                  <td className="border border-gray-300 p-2">
                    {moment(user.created_at).format('DD MMM YYYY')}
                  </td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex items-center">
                      <button
                        onClick={() => toggleUserStatus(user._id, user.user_status)}
                        className={`px-4 py-2 text-white font-semibold rounded-lg transition-all ${
                          user.user_status === 'active' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                        }`}
                        disabled={loadingUsers[user._id]} // Disable button when loading
                      >
                        {loadingUsers[user._id] ? 'Loading...' : user.user_status === 'active' ? 'Active' : 'Inactive'}
                      </button>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <Link
                      to={`/user/${user._id}`}
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <GrFormView size ={24} />
                    </Link>
                  </td>
                  <td className="border border-gray-300 p-2">

                    <Delete Id= {user?._id} step={2} fetchData={fetchData}/>
                  </td>


                  
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  );
};

export default UserListTable;
