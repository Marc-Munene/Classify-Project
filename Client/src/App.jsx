import { CgProfile, CgLogOut } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaBookReader, FaHistory } from "react-icons/fa";
import { useState } from "react"; // For mobile menu toggle

const App = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        ☰
      </button>

      <div className="flex flex-col md:flex-row text-primary mt-5 md:mt-0">
        {/* Navigation Sidebar - Hidden on mobile unless toggled */}
        <nav
          className={`aside bg-white fixed md:static inset-y-0 left-0 z-40 w-64 md:w-1/5 transform ${
            showMobileMenu
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          } transition-transform duration-300 ease-in-out shadow-lg md:shadow-none`}
        >
          <div className="p-4">
            <img
              src="/white-logo.png"
              alt="Classify Logo"
              className="w-3/4 mx-auto md:w-full animate-pulse"
            />
          </div>
          {/* 
          <div className="flex items-center justify-around py-3">
            <span className="font-semibold text-2xl">Classes</span>
            <SiGoogleclassroom size={30} />
          </div>
          <div className="flex items-center justify-around py-3">
            <span className="font-semibold text-2xl">Bookings</span>
            <CiBookmarkCheck size={30} />
          </div> 
          <div className="flex items-center justify-around py-3">
            <span className="font-semibold text-2xl">Booked</span>
            <FaBookReader size={30} />
          </div>
          <div className="flex items-center justify-around py-3">
            <span className="font-semibold text-2xl">History</span>
            <FaHistory size={30} />
          </div>
          <div className="flex items-center justify-around py-3 mt-5">
            <span className="font-semibold text-2xl">Logout</span>
            <CgLogOut size={30} />
          </div>
           */}

          {/* Navigation Items */}
          {[
            { text: "Classes", icon: <SiGoogleclassroom size={24} /> },
            { text: "Bookings", icon: <CiBookmarkCheck size={24} /> },
            { text: "Booked", icon: <FaBookReader size={24} /> },
            { text: "History", icon: <FaHistory size={24} /> },
            { text: "Logout", icon: <CgLogOut size={24} />, isLast: true },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center p-4 hover:bg-gray-200 transform transform-fill duration-300 ease-in-out hover:scale-[1.06] rounded-lg  ${
                item.isLast ? "mt-8 text-red-500" : ""
              }`}
            >
              <span className="font-semibold text-lg md:text-xl flex-grow">
                {item.text}
              </span>
              {item.icon}
            </div>
          ))}
        </nav>

        {/* Main Content */}
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
              <CgProfile className="cursor-pointer" size={24} />
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
            <button className="mt-3 sm:mt-0 sm:ml-4 bg-btn p-3 w-[40%] hover:text-white text-white rounded-lg hover:bg-primary cursor-pointer  sm:w-auto px-6">
              Search
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto p-4">
            <table className="w-full text-left text-base">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3  hover:bg-primary hover:text-white">
                    ROOM
                  </th>
                  <th className="p-3 sm:table-cell hover:bg-primary hover:text-white">
                    BUILDING
                  </th>
                  <th className="p-3  hover:bg-primary hover:text-white">
                    STATUS
                  </th>
                  <th className="p-3  hover:bg-primary hover:text-white">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>{/* Your table data will go here */}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export { App };
