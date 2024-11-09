import React, { useState } from 'react';

const GameRateForm = () => {
  const [gameAmount, setGameAmount] = useState([{ value: '950', id: '6' }]);

  const handleChange = (index, e) => {
    const updatedGameAmount = [...gameAmount];
    updatedGameAmount[index].value = e.target.value;
    setGameAmount(updatedGameAmount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(gameAmount);
  };

  return (
    <div className="col-sm-12 col-12">
      <div className="card shadow-lg rounded-lg p-6 bg-white">
        <div className="card-body">
          <h4 className="text-xl font-semibold mb-4">Add Games Rate</h4>
          <form className="theme-form mega-form" onSubmit={handleSubmit}>
            <input type="hidden" name="game_rate_id" value="1" />
            <div className="grid grid-cols-1 gap-6">
              {gameAmount.map((game, index) => (
                <div className="form-group" key={index}>
                  <label className="block text-sm font-medium text-gray-700">
                    Delhi Jodi
                  </label>
                  <input
                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    name="game_amount[]"
                    value={game.value}
                    onChange={(e) => handleChange(index, e)}
                  />
                  <input type="hidden" name="id[]" value={game.id} />
                </div>
              ))}
            </div>

            {/* Submit button */}
            <div className="mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Update
              </button>
            </div>

            {/* Error message */}
            <div className="form-group mt-4">
              <div id="error" className="text-red-500"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GameRateForm;
