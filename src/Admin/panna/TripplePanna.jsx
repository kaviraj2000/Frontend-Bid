import AdminLayout from "../Layout/AdminLayout";

function Tripplepanna() {
    return (

        <AdminLayout>
            <div className="card-body p-4 bg-white shadow-md rounded-lg">
                <h4 className="card-title text-lg font-semibold mb-4">Tripple Pana Numbers</h4>

                <div className="grid grid-cols-5 gap-4">
                    <button className="digit_num_box bg-gray-200 text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-300">
                        000
                    </button>

                    <button className="digit_num_box bg-gray-200 text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-300">
                        111
                    </button>

                    <button className="digit_num_box bg-gray-200 text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-300">
                        222
                    </button>

                    <button className="digit_num_box bg-gray-200 text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-300">
                        333
                    </button>

                    <button className="digit_num_box bg-gray-200 text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-300">
                        444
                    </button>

                    <button className="digit_num_box bg-gray-200 text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-300">
                        555
                    </button>

                    <button className="digit_num_box bg-gray-200 text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-300">
                        666
                    </button>

                    <button className="digit_num_box bg-gray-200 text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-300">
                        777
                    </button>

                    <button className="digit_num_box bg-gray-200 text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-300">
                        888
                    </button>

                    <button className="digit_num_box bg-gray-200 text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-300">
                        999
                    </button>
                </div>
            </div>

        </AdminLayout>
    );
}

export default Tripplepanna;