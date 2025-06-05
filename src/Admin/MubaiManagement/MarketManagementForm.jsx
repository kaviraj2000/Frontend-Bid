import React, { useEffect, useState } from 'react';
import Listing from '../Api/Listing';
import toast from 'react-hot-toast';
import AdminLayout from '../Layout/AdminLayout';

const MarketManagementForm = () => {

    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);

    console.log(listing)
    const fetchMarketList = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.marketlist();
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

    const [formData, setFormData] = useState({
        Id: "",
        market_status: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.marketFormEdit(formData);
            if (response?.data?.status) {
                toast.success(response.data.message);
                fetchMarketList();
                setFormData({
                    market_status: " ",
                    Id: " "
                })
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error", error);
            toast.error("Error updating market.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AdminLayout>
            <div className="w-full  mx-auto">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="border-b pb-4 mb-4">
                        <h2 className="text-xl font-bold">Delhi Market Management</h2>
                        <p className="text-sm text-gray-500">Update All Market</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-1">
                                <label htmlFor="market_name" className="block text-gray-700 font-medium mb-1">
                                    Market Name
                                </label>
                                <select
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    name="Id"
                                    value={formData?.Id}
                                    onChange={handleInputChange}
                                >
                                    <option value="null">-- Please Select Market Name --</option>
                                    {listing && listing?.map((item, index) => (
                                        <option value={item?._id}>{item?.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-span-1">
                                <label htmlFor="market_close" className="block text-gray-700 font-medium mb-1">
                                    Select Status
                                </label>
                                <select
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    name="market_status"
                                    value={formData?.market_status}
                                    onChange={handleInputChange}
                                >
                                    <option value="">-- Please Select Status --</option>
                                    <option value="active">Betting On</option>
                                    <option value="inactive">Betting Off</option>
                                </select>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            name="update"
                            onClick={handleSubmit}
                        >
                            {loading ? "Loading.. " : "Update Market"}
                        </button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default MarketManagementForm;
