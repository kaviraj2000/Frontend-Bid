import SelectGame from "./SelectGame";
import GameResultHistory from "./GameResultHistory";
import WinMember from "./WinMember";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Listing from "../Api/Listing";
import AdminLayout from "../Layout/AdminLayout";


function Result() {

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
    return (<>
        <AdminLayout>

            <div className="px-4 py-2 lg:px-10 lg:py-2.5">

                <div className="mb-5">
                    <SelectGame listing={listing} fetchMarketList={fetchMarketList} />
                </div>
                <div className="mb-5">
                    <WinMember fetchMarketList={fetchMarketList} />
                </div>
                <div className="mb-5">
                    <GameResultHistory fetchMarketList={fetchMarketList} />
                </div>
            </div>
        </AdminLayout>
    </>);
}

export default Result;