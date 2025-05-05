import { useEffect } from "react";
import { useBookingsStore } from "../../store/Bookings";

const Bookings = () => {
  const { bookingsData, bookings } = useBookingsStore();

  useEffect(() => {
    bookingsData();
  }, []);

  return (
    <div className=" p-4 w-full md:w-4/5 ">
      <div className="mb-10">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-center md:text-left mb-4 md:mb-0 w-full md:w-auto">
          Your Bookings
        </h1>
      </div>
      <table className="w-full text-left text-base overflow-hidden ">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-sm md:text-xl">ROOM</th>
            <th className="p-3 text-sm md:text-xl">BUILDING</th>
            <th className="p-3 text-sm md:text-xl">UNIT</th>

            <th className="p-3 text-sm md:text-xl">TIME START</th>
            <th className="p-3 text-sm md:text-xl">TIME END</th>
          </tr>
        </thead>
        <tbody>
          {/* hard coded tbody */}
          {/* remove all, map from database */}
          {bookings.map((element, i) => (
            <tr className="border-b border-gray-300" key={i}>
              <td className="px-3 py-2 sm:py-3">{element.classId.name}</td>
              <td className="px-3 py-2 sm:py-3">{element.buildingId.name}</td>
              <td className="px-3 py-2 sm:py-3">{element.unit}</td>
              <td className="px-3 py-2 sm:py-3">{element.timeStart}</td>
              <td className="px-3 py-2 sm:py-3">{element.timeEnd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Bookings };
