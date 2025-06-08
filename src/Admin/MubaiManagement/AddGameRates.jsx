import React, { useState } from 'react';
import AdminLayout from "../Layout/AdminLayout"
import toast from 'react-hot-toast';
import Listing from '../Api/Listing';

const AddGameRates = () => {

  const [Regs, setRegs] = useState({
    single_digit_rate: "",
    doble_digit_rate: "",
    Single_panna_rate: "",
    Doble_panna_rate: "",
    Triple_panna_rate: "",
    full_sangam: "",
    Half_sangam: "",
    Digit_on: "",
    dp_motors: "",
    _id :"6845df342f7d7cdbcd2db358"
  });
  const handleInputs = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setRegs((prevState) => ({ ...prevState, [name]: value }));
  };

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) {
      return false;
    }
    setLoading(true);
    const main = new Listing();
    try {
      const response = await main.GameRate(Regs);
      if (response?.data?.status === true) {
        toast.success(response.data.message);
        setRegs((prevState) => ({
          ...prevState,
          single_digit_rate: response.data.single_digit_rate || prevState.single_digit_rate,
          doble_digit_rate: response.data.doble_digit_rate || prevState.doble_digit_rate,
          Single_panna_rate: response.data.Single_panna_rate || prevState.Single_panna_rate,
          Doble_panna_rate: response.data.Doble_panna_rate || prevState.Doble_panna_rate,
          Triple_panna_rate: response.data.Triple_panna_rate || prevState.Triple_panna_rate,
          full_sangam: response.data.full_sangam || prevState.full_sangam,
          Half_sangam: response.data.Half_sangam || prevState.Half_sangam,
          Digit_on: response.data.Digit_on || prevState.Digit_on,
          dp_motors: response.data.dp_motors || prevState.dp_motors
        }));
      } else {
        toast.error(response.data.message);
      }
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  }
  return (
    <AdminLayout>

      <div className="px-4 py-2 lg:px-10 lg:py-2.5">

        <div className="container mx-auto p-4">
          <h4 className="text-lg font-semibold mb-4">Add Games Rate</h4>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="hidden" name="game_rate_id" value="1" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="block text-sm font-medium">Single Digit</label>
                <input className="form-control mt-1 block w-full p-2 border rounded" type="text"
                  name="single_digit_rate"
                  onChange={handleInputs}
                  value={Regs?.single_digit_rate}
                />
                <input type="hidden" name="id[]" value="1" />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium">Double Digit</label>
                <input className="form-control mt-1 block w-full p-2 border rounded" type="text"
                  name="doble_digit_rate"
                  onChange={handleInputs}
                  value={Regs?.doble_digit_rate}
                />
                <input type="hidden" name="id[]" value="2" />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium">Single Pana</label>
                <input className="form-control mt-1 block w-full p-2 border rounded" type="text" name="Single_panna_rate"
                  onChange={handleInputs}
                  value={Regs?.Single_panna_rate} />
                <input type="hidden" name="id[]" value="3" />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium">Double Pana</label>
                <input className="form-control mt-1 block w-full p-2 border rounded" type="text"

                  name="Doble_panna_rate"
                  onChange={handleInputs}
                  value={Regs?.Doble_panna_rate}
                />
                <input type="hidden" name="id[]" value="4" />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium">Triple Pana</label>
                <input className="form-control mt-1 block w-full p-2 border rounded" type="text"

                  name="Triple_panna_rate"
                  onChange={handleInputs}
                  value={Regs?.Triple_panna_rate}
                />
                <input type="hidden" name="id[]" value="5" />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium">HALF SANGAM</label>
                <input className="form-control mt-1 block w-full p-2 border rounded" type="text"
                  name="Half_sangam"
                  onChange={handleInputs}
                  value={Regs?.Half_sangam}

                />
                <input type="hidden" name="id[]" value="7" />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium">FULL SANGAM</label>
                <input className="form-control mt-1 block w-full p-2 border rounded" type="text"

                  name="full_sangam"
                  onChange={handleInputs}
                  value={Regs?.full_sangam}
                />
                <input type="hidden" name="id[]" value="8" />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium">Even/Odd</label>
                <input className="form-control mt-1 block w-full p-2 border rounded" type="text"

                  name="Digit_on"
                  onChange={handleInputs}
                  value={Regs?.Digit_on}
                />
                <input type="hidden" name="id[]" value="9" />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium">Dp Motors</label>
                <input className="form-control mt-1 block w-full p-2 border rounded" type="text"
                  name="dp_motors"
                  onChange={handleInputs}
                  value={Regs?.dp_motors}
                />
                <input type="hidden" name="id[]" value="10" />
              </div>
            </div>

            <div className="mt-4">
              <button type="submit" className="btn btn-primary bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                {loading ? "Loading.." : "Update"}
              </button>
            </div>

            <div className="form-group">
              <div id="error"></div>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddGameRates;
