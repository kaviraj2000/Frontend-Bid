import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import Listing from '../Api/Listing';
import toast from 'react-hot-toast';

function AddWithdraw({ user_id, fetchUserData }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [Regs, setRegs] = useState({
        user_id: user_id || "",
        amount: "",
    });

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
        if (error) setError(""); // Clear error on input change
    };

    async function handleForms(e) {
        e.preventDefault();
        if (loading) return false;


        setLoading(true);
        const main = new Listing();
        try {
            const response = await main.userwithdrawal(Regs);
            if (response?.data?.status === true) {
                toast.success(response.data.message);
                closeModal();
                fetchUserData();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Invalid transaction.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <button
                onClick={openModal}
                className="bg-red-400 font-semibold text-white text-[12px] py-2 px-2 rounded-md hover:bg-red-600 transition w-full">
                Withdrawal Fund
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                className="max-w-lg mx-auto bg-white"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
                <div className=" p-6 lg:p-8">
                    {/* Modal Header */}
                    <div className="flex justify-between items-center border-b pb-4 mb-6">
                        <h2 id="modal-title" className="text-xl font-semibold">
                            Add Withdrawal
                        </h2>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <AiOutlineClose className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Modal Body */}
                    <form onSubmit={handleForms}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Amount
                            </label>
                            <input
                                type="text"
                                name="amount"
                                value={Regs.amount}
                                onChange={handleInputs}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter amount"
                                required
                            />
                            {error && (
                                <p className="mt-2 text-sm text-red-600">
                                    {error}
                                </p>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className={`px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition ${loading ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                disabled={loading}
                            >
                                {loading ? "Processing..." : "Withdraw"}
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
}

export default AddWithdraw;
