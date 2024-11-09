import React from "react";
import AdminLayout from "../Layout/AdminLayout";

const SinglePanaNumbers = () => {
  return (
    <AdminLayout>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h4 className="text-lg font-bold mb-4">Single Pana Numbers</h4>

        {/* Single Ank Section for 0 */}
        <h5 className="text-md font-semibold mb-2">Single Ank</h5>
        <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">0</button>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-6">
          {["127", "136", "145", "190", "235", "280", "370", "479", "460", "569", "389", "578"].map((number) => (
            <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
          ))}
        </div>

        {/* Single Ank Section for 1 */}
        <h5 className="text-md font-semibold mb-2">Single Ank</h5>
        <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">1</button>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-6">
          {["128", "137", "146", "236", "245", "290", "380", "470", "489", "560", "678", "579"].map((number) => (
            <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
          ))}
        </div>

        {/* Single Ank Section for 2 */}
        <h5 className="text-md font-semibold mb-2">Single Ank</h5>
        <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">2</button>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-6">
          {["129", "138", "147", "156", "237", "246", "345", "390", "480", "570", "679", "589"].map((number) => (
            <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
          ))}
        </div>

        {/* Single Ank Section for 3 */}
        <h5 className="text-md font-semibold mb-2">Single Ank</h5>
        <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">3</button>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-6">
          {["120", "139", "148", "157", "238", "247", "256", "346", "490", "580", "670", "689"].map((number) => (
            <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
          ))}
        </div>

        {/* Single Ank Section for 4 */}
        <h5 className="text-md font-semibold mb-2">Single Ank</h5>
        <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">4</button>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-6">
          {["130", "149", "158", "167", "239", "248", "257", "347", "356", "590", "680", "789"].map((number) => (
            <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
          ))}
        </div>

        {/* Single Ank Section for 5 */}
        <h5 className="text-md font-semibold mb-2">Single Ank</h5>
        <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">5</button>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-6">
          {["140", "159", "168", "230", "249", "258", "267", "348", "357", "456", "690", "780"].map((number) => (
            <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
          ))}
        </div>

        {/* Single Ank Section for 6 */}
        <h5 className="text-md font-semibold mb-2">Single Ank</h5>
        <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">6</button>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-6">
          {["123", "150", "169", "178", "240", "259", "268", "349", "358", "457", "367", "790"].map((number) => (
            <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
          ))}
        </div>

        {/* Single Ank Section for 7 */}
        <h5 className="text-md font-semibold mb-2">Single Ank</h5>
        <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">7</button>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-6">
          {["124", "160", "179", "250", "269", "278", "340", "359", "368", "458", "467", "890"].map((number) => (
            <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
          ))}
        </div>

        {/* Single Ank Section for 8 */}
        <h5 className="text-md font-semibold mb-2">Single Ank</h5>
        <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">8</button>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-6">
          {["125", "134", "170", "189", "260", "279", "350", "369", "378", "459", "567", "468"].map((number) => (
            <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
          ))}
        </div>

        {/* Single Ank Section for 9 */}
        <h5 className="text-md font-semibold mb-2">Single Ank</h5>
        <button className="ank_box p-2 bg-blue-500 text-white rounded mb-4">9</button>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-6">
          {["126", "135", "180", "234", "270", "289", "360", "379", "450", "469", "469", "568"].map((number) => (
            <button key={number} className="digit_num_box p-2 bg-gray-200 rounded">{number}</button>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default SinglePanaNumbers;
