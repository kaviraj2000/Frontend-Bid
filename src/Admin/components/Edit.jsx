import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { MdModeEdit } from "react-icons/md";

function Edit() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        console.log('Edited form data:', Object.fromEntries(data));
        closeModal();
    };

    return (
        <>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={openModal}
                >
                 <MdModeEdit  size={24} />

                </button>
                <div className="relative bg-white w-full rounded-[30px] lg:rounded-[40px] h-auto m-auto">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="absolute top-5 md:top-6 lg:top-9 right-6 lg:right-10 text-gray-700 hover:text-gray-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="border-b border-black border-opacity-10 pt-6 pb-5 px-6 lg:pt-8 lg:pb-6 lg:px-10">
                            <h2 className="text-xl lg:text-2xl text-[#212121] tracking-[-0.04em] font-semibold mb-0">
                                Delete
                            </h2>
                        </div>

                        <div className="py-6 lg:py-8">
                        <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full border rounded-md p-2 mt-1"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="w-full border rounded-md p-2 mt-1"
                                required
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Save
                            </button>
                        </div>
                    </form>



                            <div className="flex justify-end px-6 lg:px-10 py-4 space-x-4">
                                <button
                                    onClick={handleClose}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleClick}
                                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700"
                                >
                                    {processing ? "Processing..." : "Delete"}
                                </button>

                            </div>
                        </div>
                    </div>
        </>
    );
}

export default Edit;
