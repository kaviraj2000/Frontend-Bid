import React from "react";
import AdminLayout from "../Layout/AdminLayout";

const DoblePannaNumber = () => {
    return (
        <AdminLayout>

            <div className="p-4 md:p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-lg md:text-xl font-bold mb-4">Double Pana Numbers</h4>

                {/* Single Ank Section for 0 */}
                <h5 className="text-md md:text-lg font-semibold mb-2">Single Ank</h5>
                <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">0</button>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-6">
                    {["550", "668", "244", "299", "266", "448", "677", "118", "334"].map((number) => (
                        <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
                    ))}
                </div>

                {/* Single Ank Section for 1 */}
                <h5 className="text-md md:text-lg font-semibold mb-2">Single Ank</h5>
                <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">1</button>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-6">
                    {["100", "119", "155", "217", "335", "344", "399", "588", "669"].map((number) => (
                        <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
                    ))}
                </div>

                {/* Single Ank Section for 2 */}
                <h5 className="text-md md:text-lg font-semibold mb-2">Single Ank</h5>
                <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">2</button>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-6">
                    {["200", "110", "228", "255", "336", "499", "660", "688", "778"].map((number) => (
                        <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
                    ))}
                </div>

                {/* Single Ank Section for 3 */}
                <h5 className="text-md md:text-lg font-semibold mb-2">Single Ank</h5>
                <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">3</button>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-6">
                    {["300", "166", "229", "337", "355", "445", "599", "779", "788"].map((number) => (
                        <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
                    ))}
                </div>

                {/* Single Ank Section for 4 */}
                <h5 className="text-md md:text-lg font-semibold mb-2">Single Ank</h5>
                <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">4</button>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-6">
                    {["400", "112", "220", "266", "338", "446", "455", "699", "770"].map((number) => (
                        <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
                    ))}
                </div>

                {/* Single Ank Section for 5 */}
                <h5 className="text-md md:text-lg font-semibold mb-2">Single Ank</h5>
                <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">5</button>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-6">
                    {["500", "113", "122", "177", "339", "366", "447", "779", "899"].map((number) => (
                        <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
                    ))}
                </div>

                {/* Single Ank Section for 6 */}
                <h5 className="text-md md:text-lg font-semibold mb-2">Single Ank</h5>
                <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">6</button>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-6">
                    {["600", "114", "277", "330", "448", "466", "556", "349", "880", "899"].map((number) => (
                        <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
                    ))}
                </div>

                {/* Single Ank Section for 7 */}
                <h5 className="text-md md:text-lg font-semibold mb-2">Single Ank</h5>
                <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">7</button>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-6">
                    {["700", "115", "133", "188", "223", "377", "449", "557", "566"].map((number) => (
                        <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
                    ))}
                </div>

                {/* Single Ank Section for 8 */}
                <h5 className="text-md md:text-lg font-semibold mb-2">Single Ank</h5>
                <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">8</button>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-6">
                    {["800", "116", "224", "233", "288", "440", "447", "558", "990"].map((number) => (
                        <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
                    ))}
                </div>

                {/* Single Ank Section for 9 */}
                <h5 className="text-md md:text-lg font-semibold mb-2">Single Ank</h5>
                <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">9</button>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-6">
                    {["900", "117", "144", "199", "225", "388", "559", "577", "667"].map((number) => (
                        <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default DoblePannaNumber;
