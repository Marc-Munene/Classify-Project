import { useState } from "react";
import { toast } from "react-toastify";

const BookingForm = ({ closeModal }) => {
  const [unitName, setUnitName] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        buildingId,
        classId,
        unit: unitName,
        timeStart,
        timeEnd,
      };

      const response = await fetch(
        `${import.meta.env.VITE_SERVER}/api/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to book a class!");
      }

      toast.success("Class Booked Successfully!");
      closeModal();
    } catch (error) {
      toast.error("Booking Failed!");
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-0">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 sm:p-8 md:p-10 rounded-xl mx-auto shadow-md"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Book Room
          </h2>
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter unit name"
            value={unitName}
            onChange={(e) => setUnitName(e.target.value)}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={timeStart}
            onChange={(e) => setTimeStart(e.target.value)}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={timeEnd}
            onChange={(e) => setTimeEnd(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-end space-x-3">
          {/* Optional cancel button */}
          {/* <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button> */}
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export { BookingForm };
