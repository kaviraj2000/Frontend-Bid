import React, { useEffect, useState } from 'react';
import Listing from '../Api/Listing';
import toast from 'react-hot-toast';
import AdminLayout from '../Layout/AdminLayout';

const AdminForm = () => {
    const [listing, setListing] = useState([]);
    const [Regs, setRegs] = useState({
        Profile_name: '',
        Upi_id: '',
        whatapps: '',
        phone: '',
        profile_email: '',
        marchant_id: '',
        min_widthrawal_rate: '',
        min_desposite_rate: '',
        min_bid_amount: '',
        welcome_bouns: '',
        Withrawal: '',
        App_link: '',
        message: '',
        Video_link: '',
        user_id: '66fc2486a4bd806bfdfefb0b'
    });

    const [loading, setLoading] = useState(false);

    const fetchMarketList = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.userProfiledata();
            console.log("responsefetchMarketList", response);
            setListing(response?.data?.data);
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMarketList();
    }, []);

    // Update Regs when listing changes
    useEffect(() => {
        if (listing?.length > 0) {
            // Assuming you want to show the first profile in the listing
            const firstProfile = listing[0]; // You can modify this logic to select the right profile
            setRegs({
                Profile_name: firstProfile.Profile_name || '',
                Upi_id: firstProfile.Upi_id || '',
                whatapps: firstProfile.whatapps || '',
                phone: firstProfile.phone || '',
                profile_email: firstProfile.profile_email || '',
                marchant_id: firstProfile.marchant_id || '',
                min_widthrawal_rate: firstProfile.min_widthrawal_rate || '',
                min_desposite_rate: firstProfile.min_desposite_rate || '',
                min_bid_amount: firstProfile.min_bid_amount || '',
                welcome_bouns: firstProfile.welcome_bouns || '',
                Withrawal: firstProfile.Withrawal || '',
                App_link: firstProfile.App_link || '',
                message: firstProfile.message || '',
                Video_link: firstProfile.Video_link || '',
                user_id: "66fc2486a4bd806bfdfefb0b" || '' // Ensure you get the user ID if necessary
            });
        }
    }, [listing]);

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleForms = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        const main = new Listing();
        try {
            const response = await main.userProfile(Regs); 
            if (response?.data?.status === true) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("error", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AdminLayout>
            <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Name */}
                            <div>
                                <label htmlFor="Profile_name" className="block font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    id="Profile_name"
                                    name="Profile_name"
                                    className="form-control border rounded-md p-2 w-full"
                                    value={Regs.Profile_name}
                                    onChange={handleInputs}
                                    placeholder="Name"
                                />
                            </div>

                            {/* UPI ID */}
                            <div>
                                <label htmlFor="Upi_id" className="block font-medium mb-1">UPI ID</label>
                                <input
                                    type="text"
                                    id="Upi_id"
                                    name="Upi_id"
                                    className="form-control border rounded-md p-2 w-full"
                                    value={Regs.Upi_id}
                                    onChange={handleInputs}
                                    placeholder="UPI ID"
                                />
                            </div>

                            {/* WhatsApp */}
                            <div>
                                <label htmlFor="whatapps" className="block font-medium mb-1">WhatsApp</label>
                                <input
                                    type="text"
                                    id="whatapps"
                                    name="whatapps"
                                    className="form-control border rounded-md p-2 w-full"
                                    value={Regs.whatapps}
                                    onChange={handleInputs}
                                    placeholder="WhatsApp"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block font-medium mb-1">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    className="form-control border rounded-md p-2 w-full"
                                    value={Regs.phone}
                                    onChange={handleInputs}
                                    placeholder="Phone"
                                />
                            </div>

                            {/* Profile Email */}
                            <div>
                                <label htmlFor="profile_email" className="block font-medium mb-1">Profile Email</label>
                                <input
                                    type="email"
                                    id="profile_email"
                                    name="profile_email"
                                    className="form-control border rounded-md p-2 w-full"
                                    value={Regs.profile_email}
                                    onChange={handleInputs}
                                    placeholder="Profile Email"
                                />
                            </div>

                            {/* Merchant ID */}
                            <div>
                                <label htmlFor="marchant_id" className="block font-medium mb-1">Merchant ID</label>
                                <input
                                    type="text"
                                    id="marchant_id"
                                    name="marchant_id"
                                    className="form-control border rounded-md p-2 w-full"
                                    value={Regs.marchant_id}
                                    onChange={handleInputs}
                                    placeholder="Merchant ID"
                                />
                            </div>

                            {/* Min Withdrawal Rate */}
                            <div>
                                <label htmlFor="min_widthrawal_rate" className="block font-medium mb-1">Min Withdrawal Rate</label>
                                <input
                                    type="text"
                                    id="min_widthrawal_rate"
                                    name="min_widthrawal_rate"
                                    className="form-control border rounded-md p-2 w-full"
                                    value={Regs.min_widthrawal_rate}
                                    onChange={handleInputs}
                                    placeholder="Min Withdrawal Rate"
                                />
                            </div>

                            {/* Min Deposit Rate */}
                            <div>
                                <label htmlFor="min_desposite_rate" className="block font-medium mb-1">Min Deposit Rate</label>
                                <input
                                    type="text"
                                    id="min_desposite_rate"
                                    name="min_desposite_rate"
                                    className="form-control border rounded-md p-2 w-full"
                                    value={Regs.min_desposite_rate}
                                    onChange={handleInputs}
                                    placeholder="Min Deposit Rate"
                                />
                            </div>

                            {/* Minimum Bid Amount */}
                            <div>
                                <label htmlFor="min_bid_amount" className="block font-medium mb-1">Min Bid Amount</label>
                                <input
                                    type="text"
                                    id="min_bid_amount"
                                    name="min_bid_amount"
                                    className="form-control border rounded-md p-2 w-full"
                                    value={Regs.min_bid_amount}
                                    onChange={handleInputs}
                                    placeholder="Min Bid Amount"
                                />
                            </div>

                            {/* Welcome Bonus */}
                            <div>
                                <label htmlFor="welcome_bouns" className="block font-medium mb-1">Welcome Bonus</label>
                                <input
                                    type="text"
                                    id="welcome_bouns"
                                    name="welcome_bouns"
                                    className="form-control border rounded-md p-2 w-full"
                                    value={Regs.welcome_bouns}
                                    onChange={handleInputs}
                                    placeholder="Welcome Bonus"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="Withrawal" className="block font-medium mb-1">Withdrawal On/Off</label>
                            <select
                                name="Withrawal"
                                id="Withrawal"
                                className="form-control border rounded-md p-2 w-full"
                                value={Regs.Withrawal}
                                onChange={handleInputs}
                            >
                                <option value="Activate">Activate</option>
                                <option value="Deactivate">Deactivate</option>
                            </select>
                        </div>

                        {/* App Link */}
                        <div className="form-group">
                            <label htmlFor="App_link" className="block font-medium mb-1">App Link</label>
                            <input
                                className="form-control border rounded-md p-2 w-full"
                                type="text"
                                name="App_link"
                                id="App_link"
                                value={Regs.App_link}
                                onChange={handleInputs}
                                placeholder="Enter App Link"
                            />
                        </div>

                        {/* Share Message */}
                        <div className="form-group">
                            <label htmlFor="message" className="block font-medium mb-1">Share Message</label>
                            <textarea
                                className="form-control border rounded-md p-2 w-full"
                                name="message"
                                id="message"
                                value={Regs.message}
                                onChange={handleInputs}
                                placeholder="Enter Share Message"
                            />
                        </div>

                        {/* Video Link */}
                        <div className="form-group">
                            <label htmlFor="Video_link" className="block font-medium mb-1">Video Link</label>
                            <input
                                className="form-control border rounded-md p-2 w-full"
                                type="text"
                                name="Video_link"
                                id="Video_link"
                                value={Regs.Video_link}
                                onChange={handleInputs}
                                placeholder="Enter Video Link"
                            />
                        </div>

                        <button type="submit" 
                        onClick={handleForms}
                        className="bg-blue-600 p-4 rounded-md mt-4" disabled={loading}>
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
            </div>
        </AdminLayout>
    );
};

export default AdminForm;
