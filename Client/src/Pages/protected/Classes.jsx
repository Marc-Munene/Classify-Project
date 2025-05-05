import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Modal } from "../../components/Modal";
import { useClassStore } from "../../store/ClassStore";
import { BookingForm } from "../../Forms/BookingForm";

const Classes = () => {
  const [modal, setModal] = useState(false);

  //Hook
  const { classData, classes } = useClassStore();

  useEffect(() => {
    classData();
  }, []);

  // console.log(classes);

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
            type="text"
            className="border rounded-full shadow-md sm:shadow-xl py-2 px-6 w-72 sm:w-100 placeholder:text-gray-700 text-sm sm:text-base"
            placeholder="Search for classes..."
            autoFocus
          />
        </div>

        {/* Table */}
        <div className="p-4 ">
          <table className="w-full text-left text-base overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-sm md:text-xl text-center">ROOM</th>
                <th className="p-3 text-sm md:text-xl text-center">BUILDING</th>
                <th className="p-3 text-sm md:text-xl text-center">CPTY</th>
                <th className="p-3 text-sm md:text-xl text-center">STATUS</th>
                <th className="p-3 text-sm md:text-xl text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* hard coded tbody */}
              {/* remove all, map from database */}
              {classes.map((element, i) => (
                <tr className="border-b border-gray-300" key={i}>
                  <td className="py-3 text-center">{element.name}</td>
                  <td className="py-3 text-center">{element.building.name}</td>
                  <td className="py-3 text-center">{element.capacity}</td>
                  <td className="text-center">
                    <button className="bg-green-400 text-base md:text-xl font-medium px-3 py-1 rounded">
                      {element.status}
                    </button>
                  </td>
                  <td className="py-3 text-center">
                    <button
                      className="bg-red-500 text-white  px-3 py-1 rounded cursor-pointer hover:bg-red-600 transition-colors duration-200"
                      onClick={() => setModal(true)}
                    >
                      BOOK
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal openModal={modal} closeModal={closeModal}>
        <BookingForm />
      </Modal>
    </>
  );
};

export { Classes };
