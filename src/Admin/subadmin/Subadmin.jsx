import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Listing from "../Api/Listing";
import AdminLayout from "../Layout/AdminLayout";

function Subadmin() {
    const navigate = useNavigate();
    const [Regs, setRegs] = useState({
        phone: "",
        mpin: "",
        _id: "6713e7b925edec4b6aef1263"
    });
    const handleInputs = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
    };

    const [loading, setLoading] = useState(false);

    async function handleForms(e) {
        e.preventDefault();
        if (loading) {
            return false;
        }
        setLoading(true);
        const main = new Listing();
        try {
            const response = await main.SubLogin(Regs);
            if (response?.data) {
                localStorage.setItem("token", response?.data?.token);
                navigate("/sub-admin-reult");
                fetchMarketList();
                toast.success(response.data.message);
            } else {
                toast.error("invalid email/password");
            }
            setLoading(false);
        } catch (error) {
            console.log("error", error);
            toast.error("invalid Email/password");
            setLoading(false);
        }
    }

    const [listing, setListing] = useState([]);

    const fetchMarketList = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.userSubAdmin();
            setListing(response?.data?.data);

        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.data)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMarketList();
    }, []);
    return (
        <AdminLayout>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                {listing?.map((item, index) => (
                    <div key={index} className="p-4 border mt-5 rounded-lg shadow-sm bg-white">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="flex flex-col items-center">
                                <h5 className="text-lg font-semibold">{item?.phone}</h5>
                                <p className="text-gray-600">Phone</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <h5 className="text-lg font-semibold">{item?.mpin}</h5>
                                <p className="text-gray-600">Password</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="phone"
                                    value={Regs?.phone}
                                    onChange={handleInputs}
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mpin
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="mpin"
                                    value={Regs?.mpin}
                                    onChange={handleInputs}
                                    type="password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={handleForms}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Update User
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </AdminLayout>
    );
}

export default Subadmin;