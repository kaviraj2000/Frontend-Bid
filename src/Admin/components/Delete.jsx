import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import Listing from '../Api/Listing';
import toast from 'react-hot-toast';
import { MdDeleteOutline } from "react-icons/md";


function Delete({ Id, fetchMarketList, step ,fetchData}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleSubmit = async (e) => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.marketDelete({ Id: Id });
            if (response?.data?.status) {
                toast.success(response.data.message);
                fetchMarketList(); // Refresh the listing
                closeModal();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error", error);
            toast.error("Error deleting market.");
        } finally {
            setLoading(false);
        }
    };


    const handleUserSubmit = async (e) => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.userDelete({ Id: Id });
            if (response?.data?.status) {
                toast.success(response.data.message);
                fetchData(); // Refresh the listing
                closeModal();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error", error);
            toast.error("Error deleting market.");
        } finally {
            setLoading(false);
        }
    };


    const handleClick = () => {
        if (step === 1) {
            handleSubmit();
        } else if (step === 2) {
            handleUserSubmit();
        } else {
            console.warn('Invalid step');
        }
    };

    return (
        <>
            <div className="flex justify-center items-center">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={openModal}
                >
                    <MdDeleteOutline size={24} />
                </button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    className="max-w-md mx-auto"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                >
                    <div className="relative bg-white w-full rounded-[30px] lg:rounded-[40px] m-auto">
                        <div className="flex justify-between items-center border-b border-black border-opacity-10 pt-6 pb-5 px-6 lg:pt-8 lg:pb-6 lg:px-10">
                            <h2 id="modal-title" className="text-xl lg:text-2xl text-[#212121] font-semibold mb-0">
                                Confirm Delete
                            </h2>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="text-gray-700 hover:text-gray-900"
                            >
                                <AiOutlineClose className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="py-6 lg:py-8">
                            <div className="max-h-[60vh] overflow-y-auto customscroll px-6 lg:px-10">
                                <p id="modal-description">Are you sure you want to delete this service? This action cannot be undone.</p>
                            </div>

                            <div className="flex justify-end px-6 lg:px-10 py-4 space-x-4">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleClick}
                                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700"
                                    disabled={loading}
                                >
                                    {loading ? "Processing..." : "Delete"}
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
}

export default Delete;
