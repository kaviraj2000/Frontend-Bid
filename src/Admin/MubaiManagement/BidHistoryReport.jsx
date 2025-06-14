import React, { useEffect, useState } from 'react';
import History from './History';
import AdminLayout from '../Layout/AdminLayout';
import Listing from '../Api/Listing';
import moment from 'moment';
import Loading from '../components/Loading';
import NoData from '../components/NoData';

const BidHistoryReport = () => {
    const [formData, setFormData] = useState({
        betdate: '',
        market_id: '',
        game_id: '',
    });

    const [loading, setLoading] = useState(false);
    const [rawListing, setRawListing] = useState([]);
    const [rawSangam, setRawSangam] = useState([]);
    const [listing, setListing] = useState([]);
    const [sangam, setSangam] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        filterData();
    };

    const filterData = () => {
        const { betdate, market_id } = formData;
        const filteredListing = rawListing.filter((item) => {
            const matchesDate = !betdate || moment(item.date).format("YYYY-MM-DD") === betdate;
            const matchesMarket = !market_id || String(item.marketId?.name) === market_id;
            return matchesDate && matchesMarket;
        });

        const filteredSangam = rawSangam.filter((item) => {
            const matchesDate = !betdate || moment(item.date).format("YYYY-MM-DD") === betdate;
            const matchesMarket = !market_id || String(item.marketId?.name) === market_id;
            return matchesDate && matchesMarket;
        });

        setListing(filteredListing);
        setSangam(filteredSangam);
    };


    const fetchMarketList = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.BidHistory();
            const data = response?.data?.data || [];
            const sangamData = response?.data?.sangam || [];
            setRawListing(data);
            setRawSangam(sangamData);
            setListing(data);
            setSangam(sangamData);
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
            <div className="w-full max-w-7xl mx-auto p-4">
                <div className="bg-white shadow-md rounded-lg">
                    <div className="p-6">
                        <h4 className="text-xl font-semibold mb-4">Bid History Report</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Date */}
                                <div>
                                    <label htmlFor="betdate" className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                                    <input
                                        type="date"
                                        name="betdate"
                                        id="betdate"
                                        value={formData.betdate}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                {/* Market */}
                                <div>
                                    <label htmlFor="market_id" className="block text-sm font-medium text-gray-700 mb-1">Market Name</label>
                                    <select
                                        name="market_id"
                                        id="market_id"
                                        value={formData.market_id}
                                        onChange={handleChange}
                                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">- Please Select Market -</option>
                                        <option value="TIME BAZAR">TIME BAZAR</option>
                                        <option value="MADHUR DAY">MADHUR DAY</option>
                                        <option value="MILAN DAY">MILAN DAY</option>
                                        <option value="SRIDEVI NIGHT">SRIDEVI NIGHT</option>
                                        <option value="MILAN NIGHT">MILAN NIGHT</option>
                                        <option value="RAJDHANI NIGHT">RAJDHANI NIGHT</option>
                                        <option value="MAIN BAJAR">MAIN BAJAR</option>
                                        <option value="KALYAN">KALYAN</option>
                                        <option value="whire">whire</option>
                                    </select>
                                </div>
                                {/* Submit */}
                                <div className="col-span-1 md:col-span-3">
                                    <button
                                        type="submit"
                                        className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-lg rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-3 px-3 text-center">#</th>
                                <th className="py-3 px-3 text-center">User Mobile</th>
                                <th className="py-3 px-3 text-center">Game Name</th>
                                <th className="py-3 px-3 text-center">Panna and Digit</th>
                                <th className="py-3 px-3 text-center">Point</th>
                                <th className="py-3 px-3 text-center">Date</th>
                                <th className="py-3 px-3 text-center">Market Name</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {loading ? (
                                <Loading />
                            ) : listing.length === 0 && sangam.length === 0 ? (
                                <NoData />
                            ) : (
                                <>
                                    {listing.map((item, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-3 text-center">{index + 1}</td>
                                            <td className="py-3 px-3 text-center">{item?.userId?.phone}</td>
                                            <td className="py-3 px-3 text-center">{item?.type?.replace("_", " ")}</td>
                                            <td className="py-3 px-3 text-center">{item?.digit}</td>
                                            <td className="py-3 px-3 text-center">{item?.point}</td>
                                            <td className="py-3 px-3 text-center">{moment(item?.date).format("DD MMMM YYYY")}</td>
                                            <td className="py-3 px-3 text-center">{item?.marketId?.name}</td>
                                        </tr>
                                    ))}

                                    {sangam.map((item, index) => (
                                        <tr key={index + listing.length} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-3 text-center">{index + 1}</td>
                                            <td className="py-3 px-3 text-center">{item?.userId?.phone}</td>
                                            <td className="py-3 px-3 text-center">{item?.type?.replace("_", " ")}</td>
                                            <td className="py-3 px-3 text-center">{item?.open_panna} || {item?.close_panna}</td>
                                            <td className="py-3 px-3 text-center">{item?.bid_point}</td>
                                            <td className="py-3 px-3 text-center">{moment(item?.date).format("DD MMMM YYYY")}</td>
                                            <td className="py-3 px-3 text-center">{item?.marketId?.name}</td>
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
};

export default BidHistoryReport;
