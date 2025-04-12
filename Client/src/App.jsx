import SideBar from "./components/SideBar";
// import { CgProfile } from "react-icons/cg";

const App = () => {
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

        <SideBar />

        {/* Main Content */}
      </div>
    </div>
  );
};

export { App };
