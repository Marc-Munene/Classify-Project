import { CgProfile } from "react-icons/cg";

const Classes = () => {
  return (
    <>
      {/* Main/Classes Content */}
      <div className="w-full md:w-4/5 pl-0 md:pl-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4 md:pr-10">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-center md:text-left mb-4 md:mb-0 w-full md:w-auto ">
            Find Vacant Rooms
          </h1>
          <div className="flex items-center">
            <span className="hidden sm:inline mr-2 text-sm md:text-base">
              Your profile
            </span>

            <CgProfile className="cursor-pointer animate-bounce" size={24} />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-center items-center p-4">
          <input
            autoFocus
            type="text"
            className="border border-black placeholder-black shadow-lg px-4 py-3 rounded-lg w-full sm:w-2/3 md:w-[37%]"
            placeholder="Search for classes.."
          />
          <button className="mt-3 sm:mt-0 sm:ml-4 bg-btn p-3 w-[40%] hover:text-white text-white rounded-lg hover:bg-primary cursor-pointer sm:w-auto px-6 ">
            Search
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto p-4">
          <table className="w-full text-left text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3  hover:bg-primary hover:text-white transform transform-fill duration-300 ease-in-out hover:scale-[1.06] ">
                  ROOM
                </th>
                <th className="p-3 hover:bg-primary hover:text-white transform transform-fill duration-300 ease-in-out hover:scale-[1.06] ">
                  BUILDING
                </th>
                <th className="p-3  hover:bg-primary hover:text-white transform transform-fill duration-300 ease-in-out hover:scale-[1.06] ">
                  STATUS
                </th>
                <th className="p-3  hover:bg-primary hover:text-white transform transform-fill duration-300 ease-in-out hover:scale-[1.06] ">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>{/* Your table data will go here */}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export { Classes };
