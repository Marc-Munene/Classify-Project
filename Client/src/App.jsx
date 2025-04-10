import { CgProfile } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="flex text-primary mt-5">
        {/* Navigation side bar */}
        <nav className="aside w-1/5 space-y-5 cursor-pointer">
          <div className="flex items-center justify-around py-3">
            <span className="font-semibold">Classes</span>
            <SiGoogleclassroom />
          </div>
          <div className="flex items-center justify-around py-3">
            <span className="font-semibold">Your Bookings</span>
            <CiBookmarkCheck />
          </div>
          <div className="flex items-center justify-around py-3">
            <span className="font-semibold">Booked</span>
            <FaBookReader />
          </div>
          <div className="flex items-center justify-around py-3">
            <span className="font-semibold">History</span>
            <FaHistory />
          </div>
          <div className="flex items-center justify-around py-3">
            <span className="font-semibold">Logout</span>
            <CgLogOut />
          </div>
        </nav>

        {/* Main content */}
        <div className="w-full ">
          <div className="flex relative justify-between items-center pr-10 ">
            <h1 className="font-bold text-3xl text-center flex-grow tracking-wide ">
              Find Vacant rooms
            </h1>
            <span className="mr-2">Your profile</span>
            <CgProfile className="cursor-pointer" size={30} />
          </div>
          <div className="flex justify-center items-center mt-4">
            <input
              autofocus
              type="text"
              className="border-black placeholder-black shadow-md px-5 py-4 rounded-lg w-[37%]"
              placeholder="Search for classes.."
            />
            <button className="ml-5 bg-btn p-3 text-white rounded-lg hover:bg-primary cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { App };
