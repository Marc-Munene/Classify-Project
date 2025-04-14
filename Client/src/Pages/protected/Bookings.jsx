const Bookings = () => {
  return (
    <div className=" p-3 w-full md:w-4/5 ">
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
          <tr className="border-b border-gray-300 ">
            <td className="px-3 py-2 sm:py-3">SPA 101</td>
            <td className="px-3 py-2 sm:py-3 text-sm ">NEW COHRED</td>
            <td className="px-3 py-2 sm:py-3">DBMS</td>
            <td className="px-3 py-2 sm:py-3">10:30am</td>
            <td className="px-3 py-2 sm:py-3">12:30pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { Bookings };
