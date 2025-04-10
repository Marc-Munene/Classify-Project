import { CgProfile } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
const App = () => {
  return (
    <div>
      <div className="aside">
        <div>
          <span>Classes</span>
          <SiGoogleclassroom />
        </div>
        <div>
          <span>Your Bookings</span>
          <CiBookmarkCheck />
        </div>
        <div>
          <span>Booked</span>
          <FaBookReader />
        </div>
        <div>
          <span>History</span>
          <FaHistory />
        </div>
        <div>
          <span>Logout</span>
          <CgLogOut />
        </div>
      </div>
      <div className="header">
        <h1>Find Vacant Classrooms</h1>
        <CgProfile />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for classes" />
        <button>Search</button>
      </div>
    </div>
  );
};

export { App };
