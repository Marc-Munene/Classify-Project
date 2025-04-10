import { CgProfile } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="flex">

        {/* Navigation side bar */}
        <nav className="aside w-1/5 space-y-5">
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
        <div className="header flex ">
          <h1>Find Vacant Classrooms</h1>
          <CgProfile />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for classes" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export { App };
