import { X } from "lucide-react";

const Modal = ({ openModal, closeModal, children }) => {
  if (!openModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-md  p-6 rounded-xl "
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        {/* Close button inside the modal */}
        <button
          className="absolute top-7 right-10 text-gray-500 cursor-pointer"
          onClick={closeModal}
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
};

export { Modal };
