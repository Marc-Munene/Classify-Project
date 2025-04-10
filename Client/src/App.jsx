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
          <div>
            <img src="/public/Blue logo.png" alt="" />
          </div>
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
              autoFocus
              type="text"
              className="border-black placeholder-black shadow-lg px-5 py-4 rounded-lg w-[37%]"
              placeholder="Search for classes.."
            />
            <button className="ml-5 bg-btn p-3 text-white rounded-lg hover:bg-primary cursor-pointer">
              Search
            </button>
          </div>

          <div>
            <table className="w-full text-left mt-5">
              <thead>
                <tr>
                  <th>ROOM</th>
                  <th>BUILDING</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export { App };
