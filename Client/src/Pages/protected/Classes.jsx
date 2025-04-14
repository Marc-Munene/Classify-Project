import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Modal } from "../../components/Modal";
import { FormModal } from "../../components/FormModal";

const Classes = () => {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      {/* Main/Classes Content */}
      <div className="w-full md:w-4/5 pl-0 md:pl-4 overflow-hidden">
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
          <table className="w-full text-left text-base overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-sm md:text-xl">ROOM</th>
                <th className="p-3 text-sm md:text-xl">BUILDING</th>
                <th className="p-3 text-sm md:text-xl">CPTY</th>
                <th className="p-3 text-sm md:text-xl">STATUS</th>
                <th className="p-3 text-sm md:text-xl">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* hard coded tbody */}
              {/* remove all, map from database */}
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2 sm:py-3">SPA 101</td>
                <td className="px-3 py-2 sm:py-3 text-sm ">NEW COHRED</td>
                <td className="px-3 py-2 sm:py-3">55</td>
                <td className="px-3 py-2 sm:py-3">Vacant</td>
                <td className="px-3 py-2 sm:py-3">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600 transition-colors duration-200"
                    onClick={() => setModal(true)}
                  >
                    BOOK
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal openModal={modal} closeModal={closeModal}>
        <FormModal />
      </Modal>
    </>
  );
};

export { Classes };
