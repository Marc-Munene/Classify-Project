const BookingForm = ({ closeModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    closeModal();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg mx-auto"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold ">Book Room</h2>
        </div>
        <div className="mb-4">
          <label
            htmlFor="unit"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Unit
          </label>
          <input
            type="text"
            id="unit"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter unit name"
            autoFocus
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="timeStart"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Time Start
          </label>
          <input
            type="time"
            id="timeStart"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="timeEnd"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Time End
          </label>
          <input
            type="time"
            id="timeEnd"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={closeModal}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export { BookingForm };
