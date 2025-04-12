import SideBar from "./components/SideBar";
import { Classes } from "./Pages/protected/Classes";

// import { CgProfile } from "react-icons/cg";

const App = () => {
  return (
    // Main Div
    <div className="min-h-screen">
      {/* Inner Div */}
      <div className="flex flex-col md:flex-row text-primary mt-5 md:mt-0">
        <SideBar />

        <Classes />
      </div>
    </div>
  );
};

export { App };
