import { useEffect, useState } from "react";
import Listing from "../Api/Listing";
import Loading from "../components/Loading";
import moment from "moment";
import NoData from "../components/NoData";
import toast from "react-hot-toast";

function List() {

    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);

    const fetchMarketList = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.marketlist();
            console.log("responsefetchMarketList", response)
            setListing(response?.data?.data);
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.data)
        } finally {
            setLoading(false);
        }
    };
    console.log("marketadd", listing)

    useEffect(() => {
        fetchMarketList();
    }, []);
    return (  
        <div className="mt-8">
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg">
                <thead>
                    <tr className="">
                        <th className="py-3 px-3 text-center">#</th>
                        <th className="py-3 px-3 text-center">User Mobile</th>
                        <th className="py-3 px-3 text-center">Game Name</th>
                        <th className="py-3  px-3 text-center">Panna and Digit</th>
                        <th className="py-3 px-3 text-center">Point</th>
                        <th className="py-3 px-3 text-center">Date</th>
                        <th className="py-3 px-3 text-center">Time</th>
                        <th className="py-3 px-3 text-center">Market Name</th>
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
                                    <td className="py-3 px-3 text-center">{item?.userId.phone}</td>
                                    <td className="py-3 px-3 text-center">
                                        {item?.type?.replace("_", " ")}
                                    </td>
                                    <td className="py-3 px-3 text-center">{item?.digit}</td>
                                    <td className="py-3 px-3 text-center">{item?.point}</td>
                                    <td className="py-3 px-3 text-center">
                                        {moment(item?.date).format("DD MMMM YYYY")}
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        {moment(item?.date).format("hh:mm A")}
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        {item?.marketId?.name}
                                    </td>
                                </tr>
                            ))}

                        </>
                    )}
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default List;