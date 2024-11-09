function DashboardSidebar({ listing }) {

    return (
        <div className="card overflow-hidden shadow-lg rounded-lg">
            <div className="bg-blue-100">
                <div className="flex">
                    <div className="w-7/12 p-4 text-blue-600">
                        <p className="text-lg font-semibold">Admin Dashboard</p>
                    </div>
                    <div className="w-5/12 self-end">
                        <img src="adminassets/images/profile-img.png" alt="" className="w-full" />
                    </div>
                </div>
            </div>
            {listing?.ProfileData?.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="flex flex-col items-center">
                            <p className="text-lg font-semibold">{item?.Profile_name}</p>
                            <p className="text-gray-500">Admin</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h5 className="text-lg font-semibold">{item?.phone}</h5>
                            <p className="text-gray-600">Phone</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h5 className="text-lg font-semibold">{item?.profile_email}</h5>
                            <p className="text-gray-600">Email</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h5 className="text-lg font-semibold">{item?.marchant_id}</h5>
                            <p className="text-gray-500">Merchant Id</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h5 className="text-lg font-semibold">{item?.whatapps}</h5>
                            <p className="text-gray-600">WhatsApp Number</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h5 className="text-lg font-semibold">{item?.Upi_id}</h5>
                            <p className="text-gray-600">UPI Id</p>
                        </div>
                    </div>
                </div>
            ))}

            {listing?.UserData?.map((item, index) => (
                <div key={index} className="p-4 border mt-5 rounded-lg shadow-sm bg-white">

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                        <div className="flex flex-col items-center">
                            <p className="text-lg font-semibold">{item?.role}</p>
                            <p className="text-gray-500">Role</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h5 className="text-lg font-semibold">{item?.username}</h5>
                            <p className="text-gray-600">Username</p>
                        </div>


                        <div className="flex flex-col items-center">
                            <h5 className="text-lg font-semibold">{item?.phone}</h5>
                            <p className="text-gray-600">Phone</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h5 className="text-lg font-semibold">{item?.mpin}</h5>
                            <p className="text-gray-600">Password</p>
                        </div>




                    </div>
                </div>
            ))}
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white">
                    <p className="text-lg font-semibold">{listing?.totalUsers}</p>
                    <p className="text-gray-600">Total Users</p>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white">
                    <p className="text-lg font-semibold">{listing?.unapprovedUsers}</p>
                    <p className="text-gray-600">Unapproved Users</p>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white">
                    <p className="text-lg font-semibold">{listing?.approvedUsers}</p>
                    <p className="text-gray-600">Approved Users</p>
                </div>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white">
                    <p className="text-lg font-semibold">{listing?.widthrwalModels}</p>
                    <p className="text-gray-600">Payment History</p>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white">
                    <p className="text-lg font-semibold">{listing?.paymentwidthrwal}</p>
                    <p className="text-gray-600">Transaction Withdrawal</p>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white">
                    <p className="text-lg font-semibold">{listing?.paymentsucees}</p>
                    <p className="text-gray-600">Transaction Success</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardSidebar;
