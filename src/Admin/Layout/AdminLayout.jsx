import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Listing from '../Api/Listing';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBarAdmin from '../components/AdminSideBar';

export default function AdminLayout({ children, title, subhead }) {
    const navigate = useNavigate();
    const [Loading, setLoading] = useState(false)
    const [content, setContent] = useState([]);
    const fetchData = () => {
        const main = new Listing();
        const response = main.Profile();
        response
            .then((res) => {
                if (res.data) {
                    setContent(res.data.data);
                } else {
                }
            }).catch((error) => {
                console.log("error", error);
                localStorage && localStorage.removeItem("token");
                navigate("/");
                toast.error("Please log in first.");
            });
    }

    useEffect(() => {
        fetchData()
    }, []);


    //   useEffect(() => {
    //     const controller = new AbortController();
    //     const { signal } = controller;
    //     fetchData(signal);
    //     return () => controller.abort();
    //   }, []);
    return (
        <div className="md:flex flex-wrap bg-[#F5F6FB] items-start">
        <div className="w-[304px] flex-shrink-0 md:w-[304px] lg:w-[304px]"> 
          <SideBarAdmin />
        </div>
        <div className="flex-grow">
          <Header title={"Admin"} />
          <div className="px-4 py-2 lg:px-10 lg:py-2.5">
            {children}
          </div>
        </div>
      </div>
      
    );
}