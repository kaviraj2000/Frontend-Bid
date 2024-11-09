import React, { useState } from 'react';
import History from './History';
import AdminLayout from '../Layout/AdminLayout';

const BidHistoryReport = () => {
    const [formData, setFormData] = useState({
        betdate: '',
        market_id: '',
        game_id: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form submitted with data:', formData);
    };

    return (
        <>
            <AdminLayout>

                <div className="w-full max-w-7xl mx-auto p-4">
                    <div className="bg-white shadow-md rounded-lg">
                        <div className="p-6">
                            <h4 className="text-xl font-semibold mb-4">Bid History Report</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Date Input */}
                                    <div className="w-full">
                                        <label htmlFor="betdate" className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                                        <input
                                            type="date"
                                            value={formData.betdate}
                                            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            id="betdate"
                                            name="betdate"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Market Name Select */}
                                    <div className="w-full">
                                        <label htmlFor="market_id" className="block text-sm font-medium text-gray-700 mb-1">Market Name</label>
                                        <select
                                            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            id="market_id"
                                            name="market_id"
                                            value={formData.market_id}
                                            onChange={handleChange}
                                        >
                                            <option value="">- Please Select Market Name -</option>
                                            <option value="1">MILAN MORNING</option>
                                            <option value="2">KALYAN MORNING</option>
                                            <option value="3">MADHUR MORNING</option>
                                            <option value="4">SRIDEVI</option>
                                            <option value="5">TIME BAZAR</option>
                                            <option value="6">MADHUR DAY</option>
                                            <option value="7">MILAN DAY</option>
                                            <option value="8">RAJDHANI DAY</option>
                                            <option value="9">SUPREME DAY</option>
                                            <option value="10">KALYAN</option>
                                            <option value="11">SRIDEVI NIGHT</option>
                                            <option value="12">MADHUR NIGHT</option>
                                            <option value="18">SUPREME NIGHT</option>
                                            <option value="19">MILAN NIGHT</option>
                                            <option value="20">KALYAN NIGHT</option>
                                            <option value="21">RAJDHANI NIGHT</option>
                                            <option value="24">MAIN BAZAR</option>
                                            <option value="40">KALYAN EVENING</option>
                                        </select>
                                    </div>

                                    {/* Game Name Select */}
                                    <div className="w-full">
                                        <label htmlFor="game_id" className="block text-sm font-medium text-gray-700 mb-1">Game Name</label>
                                        <select
                                            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            id="game_id"
                                            name="game_id"
                                            value={formData.game_id}
                                            onChange={handleChange}
                                        >
                                            <option value="">- Please Select Game Name -</option>
                                            <option value="All">All</option>
                                            <option value="1">Single Digit</option>
                                            <option value="2">Jodi Digit</option>
                                            <option value="3">Single Pana</option>
                                            <option value="4">Double Pana</option>
                                            <option value="5">Triple Pana</option>
                                            <option value="6">Half Sangam</option>
                                            <option value="7">Full Sangam</option>
                                            <option value="9">Odds/Even</option>
                                            <option value="10">Sp/Dp/Tp</option>
                                        </select>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-span-1 md:col-span-3">
                                        <button
                                            type="submit"
                                            className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                                            id="getsubmit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <History />

            </AdminLayout>
        </>
    );
};

export default BidHistoryReport;
