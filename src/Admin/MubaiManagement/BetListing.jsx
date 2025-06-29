import { useEffect, useState } from "react";
import Listing from "../Api/Listing";
import moment from "moment";
import Loading from "../components/Loading";
import NoData from "../components/NoData";
import AdminLayout from "../Layout/AdminLayout";

function BetListing() {
    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);
    const fetchMarketList = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.ResultGet();
            setListing(response?.data?.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMarketList();
    }, []);

    return (
        <AdminLayout>

            <div className="mt-8">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-lg rounded-lg">
                        <thead>
                            <tr className="">
                                <th className="py-3 px-3 text-center">#</th>
                                <th className="py-3 px-3 text-center">Memeber Name</th>
                                <th className="py-3  px-3 text-center">Market Name</th>
                                <th className="py-3 px-3 text-center">Memeber Mobile</th>
                                <th className="py-3 px-3 text-center">Amount</th>
                                <th className="py-3 px-3 text-center">Date and Time</th>
                                <th className="py-3 px-3 text-center"> Type</th>
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
                                            <td className="py-3 px-3 text-center">{item?.userId?.username}</td>
                                            <td className="py-3 px-3 text-center">
                                                {item?.marketId?.name}
                                            </td>
                                            <td className="py-3 px-3 text-center">{item?.userId?.phone}</td>
                                            <td className="py-3 px-3 text-center">{item?.userId?.amount}</td>
                                            <td className="py-3 px-3 text-center">{
                                                moment(item?.betdate)
                                                    .format("DD-MMM-YYYY hh:mma")
                                            }</td>

                                            <td className="py-3 px-3 text-center">
                                                {
                                                    item?.panaaModal?.map((panaa) => (
                                                        <div key={panaa._id}>
                                                            {panaa.type}
                                                        </div>
                                                    ))
                                                }
                                                {
                                                    item?.sangamModal?.map((sangam) => (
                                                        <div key={sangam._id}>
                                                            {sangam.type}
                                                        </div>
                                                    ))
                                                }
                                            </td>


                                        </tr>
                                    ))}
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}

export default BetListing;
