import Header from "../components/Header";
import SideBarAdmin from "../components/AdminSideBar";
import AddSideBar from "./AddSideBar";

function SideBar() {
    return (
        <>
            <div className="md:flex flex-wrap bg-[#F5F6FB] items-start">
                <div className="w-[304px] flex-shrink-0">
                    <SideBarAdmin />
                </div>
                {/* right sidebar */}
                <div className="flex-grow">
                    <Header title={"slider management"} />
                    {/* Overview */}
                    <div className="px-4 py-2 lg:px-10 lg:py-2.5">


                        <div className="container">
                            <div className="row">
                                    <AddSideBar />
                                <table className="min-w-full bg-white table-auto">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="py-2 px-4 border-b-2 border-gray-300">#</th>
                                            <th className="py-2 px-4 border-b-2 border-gray-300">Image</th>
                                            <th className="py-2 px-4 border-b-2 border-gray-300">Status</th>
                                            <th className="py-2 px-4 border-b-2 border-gray-300">Delete </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2 px-4 border-b" colSpan="7">
                                                No data available in table
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SideBar;