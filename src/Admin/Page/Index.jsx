import Header from "../components/Header";
import SideBarAdmin from "../components/AdminSideBar";
import AdminLayout from "../Layout/AdminLayout";
import DashboardSidebar from "./DashboardSidebar";
import DashboardContent from "./DashboardContent";
import Listing from "../Api/Listing";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";

function Index() {


    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);

    const fetchMarketList = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.Dashboard();
            setListing(response?.data);
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
    return (<>
        <AdminLayout>
            <DashboardSidebar listing={listing} />
        </AdminLayout>

    </>);
}

export default Index;