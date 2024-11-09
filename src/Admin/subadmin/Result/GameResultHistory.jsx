import React, { useEffect, useState } from 'react';
import Listing from '../../Api/Listing';


const GameResultHistory = ({fetchMarketList}) => {

  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState([]);

  console.log("listing", listing)

  const fetchMarketLists = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.ResultGet();
      console.log("response", response)
      setListing(response?.data?.data);
      fetchMarketList();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketLists();
  }, []);
  console.log()

  return (
    <>
      <div className="card-body">
        <h4 className="card-title text-lg font-bold mb-4">Game Result History</h4>
        <span id="deleteBetListMsg"></span>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200 ">
                <th className="px-2 py-4 text-left">S. No.</th>
                <th className="px-2 py-4 text-left">Market Name</th>
                <th className="px-2 py-4 text-left">Open Panna</th>
                <th className="px-2 py-4 text-left">Close Panna</th>
                <th className="px-2 py-4 text-left">Open Action </th>
                <th className="px-2 py-4 text-left">Close Action </th>
              </tr>
            </thead>
            <tbody>
              {listing?.map((item, index) => (
                <tr key={item._id} className="text-gray-600 text-sm font-light">
                  <td className=" text-left  px-2 py-4">{index + 1}</td>

                  <td className="  text-left px-2 py-4">{item?.marketId?.name}</td>

                  <td className="  text-left px-2 py-4">
                    {
                      item?.panaaModal?.map((panaa) => (
                        <div key={panaa._id}>
                          {panaa.point}
                        </div>
                      ))
                    }
                    {
                      item?.sangamModal?.map((sangam) => (
                        <div key={sangam._id}>
                          {sangam.bid_point}
                        </div>
                      ))
                    }
                  </td>
                  <td className=" text-left  px-2 py-4">
                    {
                      item?.panaaModal?.map((panaa) => (
                        <div key={panaa._id}>
                          {panaa.point}
                        </div>
                      ))
                    }
                    {
                      item?.sangamModal?.map((sangam) => (
                        <div key={sangam._id}>
                          {sangam.bid_point}
                        </div>
                      ))
                    }
                  </td>
                  <td className="  text-left px-2 py-4">
                    {
                      item?.panaaModal?.map((panaa) => (
                        <div key={panaa._id}>
                          {panaa.status === true && "Open"}
                        </div>
                      ))
                    }
                    {
                      item?.sangamModal?.map((sangam) => (
                        <div key={sangam._id}>
                          {sangam.status === true && "Open"}
                        </div>
                      ))
                    }
                  </td>
                  <td className=" text-left  px-2 py-4">
                    {
                      item?.panaaModal?.map((panaa) => (
                        <div key={panaa._id}>
                          {panaa.status === false && "Close"}
                        </div>
                      ))
                    }
                    {
                      item?.sangamModal?.map((sangam) => (
                        <div key={sangam._id}>
                          {sangam.status === false && "Close"}
                        </div>
                      ))
                    }
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default GameResultHistory;
