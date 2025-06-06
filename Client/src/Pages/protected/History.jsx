const History = () => {
  return (
    <div className="p-4 w-full md:w-4/5 ">
      <div className="mb-10">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-center md:text-left mb-4 md:mb-0 w-full md:w-auto">
          History
        </h1>
      </div>
      <table className="w-full text-left text-base">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-sm md:text-xl">ROOM</th>
            <th className="p-3 text-sm md:text-xl">BUILDING</th>
            <th className="p-3 text-sm md:text-xl">TIME END</th>

            <th className="p-3 text-sm md:text-xl">CLASS REP</th>
            <th className="p-3 text-sm md:text-xl">UNIT</th>
          </tr>
        </thead>
        <tbody>
          {/* hard coded tbody */}
          {/* remove all, map from database */}
          <tr className="border-b border-gray-300 ">
            <td className="px-3 py-2 sm:py-3">SPA 101</td>
            <td className="px-3 py-2 sm:py-3 text-sm ">NEW COHRED</td>
            <td className="px-3 py-2 sm:py-3">12:30pm</td>
            <td className="px-3 py-2 sm:py-3">MUNENE</td>
            <td className="px-3 py-2 sm:py-3">DBMS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { History };
