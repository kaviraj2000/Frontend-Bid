import React, { useEffect, useState } from 'react';
import Listing from '../Api/Listing';
import AdminLayout from '../Layout/AdminLayout';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { FaUserCircle } from "react-icons/fa";
import WalletTransactionHistory from './WalletTransactionHistory';
import AddWithdraw from './AddWithdraw';
import AddSuucess from './AddSuucess';
import Widtrawal from './Widtrawal';

const UserCard = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [payment, setPayment] = useState([]);
    const [userpayment, setUserPayment] = useState([]);


    const [loading, setLoading] = useState(false);

    const fetchUserData = () => {
        setLoading(true);
        const main = new Listing();
        main.userListId(id)
            .then((res) => {
                if (res.data) {
                    setUser(res.data.data);
                    setPayment(res?.data?.payment
                    )
                    setUserPayment(res?.data?.userpayment  )
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchUserData();
    }, [id]);

    return (
        <AdminLayout>
            {loading ? (
                <Loading />
            ) : (
                <>

                    <div className="flex flex-wrap mx-4">
                        <div className="w-full xl:w-1/3 px-4 mb-4 xl:mb-0">
                            <div className="card h-full overflow-hidden shadow-lg rounded-lg">
                                <div className="bg-blue-100">
                                    <div className="flex">
                                        <div className="w-2/4 p-3">
                                            <h5 className="text-indigo-500 capitalize ">{user?.username || 'N/A'}</h5>
                                            <p>
                                                {user?.phone}
                                                <a href={`tel:${user?.phone}`} className="ml-2">
                                                    <i className="mdi mdi-cellphone-iphone"></i>
                                                </a>
                                                <a href={`https://wa.me/${user?.phone}`} target="_blank" rel="noopener noreferrer" className="ml-2">
                                                    <i className="mdi mdi-whatsapp"></i>
                                                </a>
                                            </p>
                                        </div>
                                        <div className="w-2/4 text-right p-3">
                                            <div className="mb-2">
                                                Active : &nbsp;
                                                <span className={`badge ${user?.user_status === 'active' ? 'bg-green-500' : 'bg-red-500'} text-white px-1 py-1 rounded-md`}>
                                                    {user?.user_status === 'active' ? 'Yes' : 'No'}
                                                </span>
                                            </div>
                                            <div className="mb-2">
                                                Banned : &nbsp;
                                                <span className="badge bg-red-500 text-white px-2 py-1 rounded-md">
                                                    {user?.banned ? 'Yes' : 'No'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-6">
                                    <div className="flex mb-4">
                                        <div className="w-1/3">
                                            <FaUserCircle size={24} className="w-24 h-24 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="border-t pt-4">
                                        <p className="text-gray-600 mb-2">Available Balance</p>
                                        <h5>{user?.amount || 'N/A'}</h5>
                                        <div className="flex mt-3 space-x-2">
                                            <AddSuucess user_id={user?._id} fetchUserData={fetchUserData} />
                                            <AddWithdraw user_id={user?._id} fetchUserData={fetchUserData} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full xl:w-2/3 px-4 mb-4 xl:mb-0">
                            <div className="card h-full shadow-lg rounded-lg">
                                <div className="card-body p-6">
                                    <h4 className="card-title text-lg font-semibold mb-4">Personal Information</h4>
                                    <div className="overflow-x-auto">
                                        <table className="table-auto w-full text-left">
                                            <tbody>
                                                <tr>
                                                    <th className="py-2">Full Name :</th>
                                                    <td className="py-2 capitalize ">{user?.username || 'N/A'}</td>
                                                    <th className="py-2">Security Pin :</th>
                                                    <td className="py-2">{user?.mpin || 'N/A'}</td>
                                                </tr>
                                                <tr>
                                                    <th className="py-2">Mobile :</th>
                                                    <td className="py-2">
                                                        {user?.phone}
                                                        <a href={`tel:${user?.phone}`} className="ml-2">
                                                            <i className="mdi mdi-cellphone-iphone"></i>
                                                        </a>
                                                        <a href={`https://wa.me/${user?.phone}`} target="_blank" rel="noopener noreferrer" className="ml-2">
                                                            <i className="mdi mdi-whatsapp"></i>
                                                        </a>
                                                    </td>
                                                    <th className="py-2">Password :</th>
                                                    <td className="py-2">{user?.mpin || 'N/A'}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h4 className="card-title text-lg font-semibold mt-6 mb-4">Payment Information</h4>
                                    <div className="overflow-x-auto">
                                        <table className="table-auto w-full text-left">
                                            <tbody>
                                                <tr>
                                                    <th className="py-2">Bank Name :</th>
                                                    <td className="py-2">{user?.bank_name || 'N/A'}</td>
                                                    <th className="py-2">A/c Holder Name :</th>
                                                    <td className="py-2">{user?.account_holder_name || 'N/A'}</td>
                                                </tr>
                                                <tr>
                                                    <th className="py-2">A/c Number :</th>
                                                    <td className="py-2">{user?.account_number || 'N/A'}</td>
                                                    <th className="py-2">IFSC Code :</th>
                                                    <td className="py-2">{user?.ifsc || 'N/A'}</td>
                                                </tr>
                                                <tr>
                                                    <th className="py-2">PhonePe No. :</th>
                                                    <td className="py-2">{user?.phonepe || 'N/A'}</td>
                                                    <th className="py-2">Google Pay No. :</th>
                                                    <td className="py-2">{user?.googlepay || 'N/A'}</td>
                                                    <th className="py-2">Paytm No. :</th>
                                                    <td className="py-2">{user?.paytm || 'N/A'}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
 
<Widtrawal userpayment={userpayment} username={user?.username}/>
                    <WalletTransactionHistory payment={payment} username={user?.username} />
                </>
            )}
        </AdminLayout>
    );
};

export default UserCard;
