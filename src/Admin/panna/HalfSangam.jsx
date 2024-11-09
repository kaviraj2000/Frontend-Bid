import AdminLayout from "../Layout/AdminLayout";

// Reusable Button Component
const DigitButton = ({ number }) => {
    return (
        <button className="digit_num_box px-2 py-1 sm:px-4 sm:py-2 bg-gray-200 hover:bg-gray-300 text-xs sm:text-sm font-semibold rounded-lg shadow">
            {number}
        </button>
    );
};

function HalfSangam() {
    // Arrays for Open Ank and Close Ank Numbers
    const openAnkNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const closeAnkNumbers = [
        "000", "100", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "122", "123", "124", "125", "126", "127", "128", "129", "130", "133", "134", "135", "136", "137", "138", "139", "140", "144", "145", "146", "147", "148", "149", "150", "155", "156", "157", "158", "159", "160", "166", "167", "168", "169", "170", "177", "178", "179", "180", "188", "189", "190", "199", "200", "220", "222", "223", "224", "225", "226", "227", "228", "229", "230", "233", "234", "235", "236", "237", "238", "239", "240", "244", "245", "246", "247", "248", "249", "250", "255", "256", "257", "258", "259", "260", "277", "278", "279", "280", "288", "289", "290", "299", "300", "330", "333", "334", "335", "336", "337", "338", "339", "340", "344", "345", "346", "347", "348", "349", "350", "355", "356", "357", "358", "359", "360", "366", "367", "368", "369", "370", "377", "378", "379", "380", "388", "389", "390", "440", "444", "445", "446", "447", "448", "449", "450", "455", "456", "457", "458", "459", "460", "466", "467", "468", "469", "470", "477", "478", "479", "480", "488", "489", "490", "499", "500", "550", "555", "556", "557", "558", "559", "560", "566", "567", "568", "569", "570", "577", "578", "579", "580", "588", "589", "590", "599", "600", "660", "666", "667", "668", "669", "670", "677", "678", "679", "680", "688", "689", "690", "699", "700", "770", "777", "778", "779", "780", "799", "800", "880", "888", "889", "890", "899", "900", "990", "999"
    ];

    return (
        <AdminLayout>
            <div className="px-4 py-6 md:px-10 md:py-6">
                <div className="container mx-auto">
                    <div className="bg-white shadow-lg rounded-lg">
                        <div className="p-4 md:p-6">
                            <h4 className="text-lg font-semibold mb-4">Half Sangam Numbers</h4>

                            {/* Open Ank Section */}
                            <h5 className="text-md font-medium mb-4">Open Ank</h5>
                            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-12 gap-2">
                                {openAnkNumbers.map((num) => (
                                    <DigitButton key={num} number={num} />
                                ))}
                            </div>

                            {/* Close Ank Section */}
                            <h5 className="text-md font-medium mb-4 mt-4">Close Ank</h5>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
                                {closeAnkNumbers.map((num) => (
                                    <DigitButton key={num} number={num} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default HalfSangam;
