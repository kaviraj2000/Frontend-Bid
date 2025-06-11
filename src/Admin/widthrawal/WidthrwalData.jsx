import { useEffect, useState } from "react";
import Listing from "../Api/Listing";
import Loading from "../components/Loading";
import moment from "moment";
import NoData from "../components/NoData";
import toast from "react-hot-toast";
import AdminLayout from "../Layout/AdminLayout";

function WidthrwalData() {

    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);

    const fetchMarketList = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.WidthrawalList();
            setListing(response?.data?.data);
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.data)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMarketList();
    }, []);
    return (
        <AdminLayout>
            <div className="px-4 py-2 lg:px-10 lg:py-2.5">

                <div className="mt-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-lg rounded-lg">
                            <thead>
                                <tr className="">
                                    <th className="py-3 px-3 text-center">#</th>
                                    <th className="py-3 px-3 text-center">User Name</th>
                                    <th className="py-3 px-3 text-center">UPI ID</th>
                                    <th className="py-3  px-3 text-center">Amount</th>
                                    <th className="py-3 px-3 text-center">Payment Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {loading ? (
                                    <Loading />
                                ) : listing && listing.length === 0 ? (
                                    <NoData />
                                ) : (
                                    <>
                                        {listing.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="border-b border-gray-200 hover:bg-gray-100"
                                            >
                                                <td className="py-3 px-3 text-center">{index + 1}</td>
                                                <td className="py-3 px-3 text-center">
                                                    {item?.userId?.username}
                                                </td>
                                                <td className="py-3 px-3 text-center">{item?.upi_id}</td>

                                                <td className="py-3 px-3 text-center">{item?.amount}</td>
                                                <td className="py-3 px-3 text-center">
                                                    {item?.payment_status === 0 && "Widthrawal"}
                                                </td>
                                            </tr>
                                        ))}
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default WidthrwalData;