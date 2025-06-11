import { useEffect, useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import Listing from "../Api/Listing";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import NoData from "../components/NoData";
import Delete from "../components/Delete";
import moment from "moment";
import Modal from "react-modal"; // Assuming you are using this library
import { AiOutlineClose } from "react-icons/ai"; // For close icon
import { MdModeEdit } from "react-icons/md";

function Index() {
    const navigate = useNavigate();
    const [record, setRecord] = useState({
        name: "",
        open_time: "",
        close_time: "",
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setRecord((prevState) => ({ ...prevState, [name]: value }));
    };

    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);

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

    const handleForms = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.marketAdd(record);
            if (response?.data?.status === true) {
                toast.success(response.data.message);
                fetchMarketList(); // Refresh the listing
                setRecord({ name: "", open_time: "", close_time: "" }); // Clear the form
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error", error);
        } finally {
            setLoading(false);
        }
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        open_time: "",
        close_time: "",
        Id: ""
    });


    const openModal = (item) => {
        setFormData({
            name: item.name,
            open_time: item.open_time,
            close_time: item.close_time,
            Id: item._id
        });
        setModalIsOpen(true);
    };

    const closeModal = () => setModalIsOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.marketEdit(formData);
            if (response?.data?.status) {
                toast.success(response.data.message);
                fetchMarketList(); // Refresh the listing
                closeModal();
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
            <div className=" card bg-white p-4 shadow-lg rounded-lg">
                <div className="card-body">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Add Market</h4>
                    <form onSubmit={handleForms} className="space-y-4">
                        <div className="flex flex-wrap gap-4">
                            {/* Market Name Field */}
                            <div className="form-group w-full md:w-1/4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Market Name
                                </label>
                                <input
                                    required
                                    className="form-control border border-gray-300 rounded-md p-2 w-full"
                                    type="text"
                                    name="name"
                                    value={record.name}
                                    onChange={handleInputs}
                                />
                            </div>

                            {/* Open Time Field */}
                            <div className="form-group w-full md:w-1/4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Open Time
                                </label>
                                <input
                                    required
                                    className="form-control border border-gray-300 rounded-md p-2 w-full"
                                    type="time"
                                    name="open_time"
                                    value={record.open_time}
                                    onChange={handleInputs}
                                />
                            </div>

                            {/* Close Time Field */}
                            <div className="form-group w-full md:w-1/4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Close Time
                                </label>
                                <input
                                    required
                                    className="form-control border border-gray-300 rounded-md p-2 w-full"
                                    type="time"
                                    name="close_time"
                                    value={record.close_time}
                                    onChange={handleInputs}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="form-group w-full md:w-1/4 flex items-end">
                                <button
                                    type="submit"
                                    className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 w-full rounded-md"
                                >
                                    {loading ? "Loading..." : "Add Market"}
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

            <div className="mt-8">
                <div className="overflow-x-auto w-full">
                    <table className="min-w-full bg-white shadow-lg rounded-lg">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">#</th>
                                <th className="py-3 px-6 text-left">Market Name</th>
                                <th className="py-3 px-6 text-left">Open Time</th>
                                <th className="py-3 px-6 text-left">Close Time</th>
                                <th className="py-3 px-6 text-left">Market Status</th>
                                <th className="py-3 px-6 text-left">Edit</th>
                                <th className="py-3 px-6 text-left">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {loading ? (
                                <Loading />
                            ) : listing && listing.length === 0 ? (
                                <NoData />
                            ) : (
                                listing.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-200 hover:bg-gray-100"
                                    >
                                        <td className="py-3 px-6 text-left">{index + 1}</td>
                                        <td className="py-3 px-6 text-left">{item?.name}</td>
                                        <td className="py-3 px-6 text-left">
                                            {moment(item?.open_time, 'HH:mm').format('hh:mm A')}
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            {moment(item?.close_time, 'HH:mm').format('hh:mm A')}
                                        </td>
                                        <td
                                            className={`capitalize	 py-3 px-6 font-bold text-left ${item?.status === "active" ? "text-green-500" : "text-red-500"
                                                }`}
                                        >
                                            {item?.status}
                                        </td>

                                        <td className="py-3 px-6 text-left">
                                            <button
                                                className="bg-green-500 text-white px-2 py-2 rounded hover:bg-green-600"
                                                onClick={() => openModal(item)}
                                            >
                                                <MdModeEdit size={24} />
                                            </button>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <Delete Id={item?._id} step={1} fetchMarketList={fetchMarketList} />
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <>
                {modalIsOpen && (
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                        className="max-w-md mx-auto"
                        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                    >
                        {/* Modal Content */}
                        <div className="relative bg-white rounded-lg shadow-lg w-full">
                            <div className="flex justify-between items-center border-b border-gray-200 py-4 px-6">
                                <h2 id="modal-title" className="text-xl font-semibold text-gray-800">
                                    Edit Market
                                </h2>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="text-gray-700 hover:text-gray-900"
                                >
                                    <AiOutlineClose className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="py-6 px-6">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Market Name
                                        </label>
                                        <input
                                            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Open Time
                                        </label>
                                        <input
                                            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
                                            type="time"
                                            name="open_time"
                                            value={formData.open_time}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Close Time
                                        </label>
                                        <input
                                            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
                                            type="time"
                                            name="close_time"
                                            value={formData.close_time}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition duration-200"
                                    >
                                        {loading ? "Saving..." : "Save Changes"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </Modal>
                )}
            </>
        </AdminLayout>
    );
}

export default Index;
