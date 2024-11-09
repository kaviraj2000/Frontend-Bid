import React, { useEffect, useState } from 'react';
import Listing from '../../Api/Listing';

const WinMember = ({fetchMarketList}) => {

  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState([]);

  console.log("listing", listing)

  const fetchMarketLists = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.ResultGet();
      console.log("response", response)
      fetchMarketList();
      setListing(response?.data?.data);
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
    <div className="card-body">
      <h4 className="card-title text-lg font-bold mb-4">Win Member</h4>
      <span id="deleteBetListMsg"></span>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-6 px-3 text-center border-b-2 border-gray-300">#</th>
              <th className="py-6 px-3 text-center  border-b-2 border-gray-300">Member</th>
              <th className="py-6 px-3 text-center border-b-2 border-gray-300">Game Name</th>
              <th className="py-6 px-3 text-center border-b-2 border-gray-300">Bet Digit</th>
              <th className="py-6 px-3 text-center border-b-2 border-gray-300">Bet Amount</th>
            </tr>
          </thead>
          <tbody>
            {listing?.map((item, index) => (
              <tr key={item._id} className="text-gray-600 text-sm font-light">
                <td className=" px-3 text-center py-6">{index + 1}</td>
                <td className=" px-3 text-center py-6">{item?.userId?.username}</td>
                <td className=" px-3 text-center py-6">{item?.marketId?.name}</td>
                <td className=" px-3 text-center  py-6">
                  {
                    item?.panaaModal?.map((panaa) => (
                      <div key={panaa._id}>
                        Panna:   {panaa?.digit}
                      </div>
                    ))
                  }
                  {
                    item?.sangamModal?.map((sangam) => (
                      <div key={sangam._id}>
                        Sangam:{sangam?.open_panna}, {sangam?.close_panna}
                      </div>
                    ))
                  }
                </td>
                <td className="text-center px-3 py-6">
                  {item?.panaaModal && (
                    item?.panaaModal?.map((panaa) => (
                      <div key={panaa._id}>
                        Panna:   {panaa?.point}
                      </div>
                    ))
                  )
                  }
                  {item?.sangamModal && (
                    item?.sangamModal?.map((panaa) => (
                      <div key={panaa._id}>
                        Sangam:   {panaa?.bid_point}
                      </div>
                    ))
                  )
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WinMember;
