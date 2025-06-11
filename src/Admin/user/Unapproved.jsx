import React, { useEffect, useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import Listing from "../Api/Listing";
import moment from "moment";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrFormView } from "react-icons/gr";


const Unapproved = () => {


  const [users, setUsers] = useState([

  ]);


  const fetchData = () => {
    const main = new Listing();
    const response = main.userListStatus();
    response
      .then((res) => {
        if (res.data) {
          setUsers(res.data.data);
        } else {
        }
      }).catch((error) => {
        console.log("error", error);
      });
  }

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <AdminLayout>
      <div className="table-responsive">
        <div className="w-full dataTables_wrapper dt-bootstrap4">
          <div className="w-full">
            <table className="min-w-full bg-white table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">#</th>
                  <th className="border border-gray-300 p-2">Member Name</th>
                  <th className="border border-gray-300 p-2">Whatsapp</th>
                  <th className="border border-gray-300 p-2">Mobile No</th>
                  <th className="border border-gray-300 p-2">Wallet Balance</th>
                  <th className="border border-gray-300 p-2">Date</th>
                  <th className="border border-gray-300 p-2">Status</th>
                  <th className="border border-gray-300 p-2">Option</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Data Rows */}
                {users.map((user, index) => (
                  <tr key={user.id} className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}>
                    <td className="border border-gray-300 p-2">{user.id}</td>
                    <td className="border border-gray-300 p-2 capitalize">
                      <Link
                        to={`view-user.php?member_id=${user.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {user.username}
                      </Link>
                    </td>
                    <td className="border border-gray-300 p-2">
                      <Link
                        to={`https://wa.me/${user.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex  flex-wrap justify-center"
                      >
                        <FaWhatsapp className="text-center" size={24} />
                      </Link>
                    </td>
                    <td className="border border-gray-300 p-2">
                      <Link to={`tel:${user.phone}`}>
                        {user.phone}
                      </Link>
                    </td>
                    <td className="border border-gray-300 p-2">{user.amount}</td>
                    <td className="border border-gray-300 p-2">{
                      moment(user.created_at).format("DD MMM YYYY")
                    }</td>
                    <td className="border border-gray-300 p-2">
                      <div className="checkbox_select">
                        <input
                          type="checkbox"
                          id={`softstatus${user.id}`}
                          className="hidden"
                          onChange={() => console.log(`Status changed for user ${user.id}`)}
                        />
                        <label htmlFor={`softstatus${user.id}`}>{user.user_status}</label>
                      </div>
                    </td>

                    <td className="border border-gray-300 p-2">
                      <Link
                        to={`/user/${user._id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        <GrFormView size={24} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Unapproved;
