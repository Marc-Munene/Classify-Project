import { useState } from "react"; // For mobile menu toggle
import { CgLogOut } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaBookReader, FaHistory } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        ☰
      </button>
      {/* Navigation Sidebar - Hidden on mobile unless toggled */}
      <nav
        className={`aside bg-white fixed md:static inset-y-0 left-0 z-40 w-64 md:w-1/5 transform ${
          showMobileMenu
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        } transition-transform duration-300 ease-in-out shadow-lg md:shadow-none`}
      >
        {/* logo link */}
        <NavLink to={"/"} className="p-4" onClick={closeMobileMenu}>
          <img
            src="/white-logo.png"
            alt="Classify Logo"
            className="w-3/4 mx-auto md:w-full animate-pulse"
          />
        </NavLink>

        {/* classes link */}
        <NavLink
          to={"/"}
          className="flex items-center justify-around py-3 hover:bg-gray-200 transform transform-fill duration-300 ease-in-out hover:scale-[1.06] "
          onClick={closeMobileMenu}
        >
          <span className="font-semibold text-2xl">Classes</span>
          <SiGoogleclassroom size={30} />
        </NavLink>

        {/* bookings link */}
        <NavLink
          to={"/bookings"}
          className="flex items-center justify-around py-3 hover:bg-gray-200 transform transform-fill duration-300 ease-in-out hover:scale-[1.06] "
          onClick={closeMobileMenu}
        >
          <span className="font-semibold text-2xl">Bookings</span>
          <CiBookmarkCheck size={30} />
        </NavLink>

        {/* booked link */}
        <NavLink
          to={"/booked"}
          className="flex items-center justify-around py-3 hover:bg-gray-200 transform transform-fill duration-300 ease-in-out hover:scale-[1.06] "
          onClick={closeMobileMenu}
        >
          <span className="font-semibold text-2xl">Booked</span>
          <FaBookReader size={30} />
        </NavLink>

        {/*  history link*/}
        <NavLink
          to={"/history"}
          className="flex items-center justify-around py-3 hover:bg-gray-200 transform transform-fill duration-300 ease-in-out hover:scale-[1.06] "
          onClick={closeMobileMenu}
        >
          <span className="font-semibold text-2xl">History</span>
          <FaHistory size={30} />
        </NavLink>

        {/* logout */}
        <NavLink
          className="flex items-center justify-around py-3 mt-5 hover:bg-gray-200 transform transform-fill duration-300 ease-in-out hover:scale-[1.06]  text-red-500"
          onClick={closeMobileMenu}
        >
          <span className="font-semibold text-2xl ">Logout</span>
          <CgLogOut size={30} />
        </NavLink>

        {/* Navigation Items */}
        {/* {[
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
        ))} */}
      </nav>
    </>
  );
};

export { SideBar };
