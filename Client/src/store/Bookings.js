import { create } from "zustand";

const useBookingsStore = create((set) => ({
  bookings: [],

  bookingsData: async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER}/api/bookings`,
        {
          credentials: "include",
        }
      );

      if (response.ok) {
        const { data } = await response.json();

        console.log({ data });
        set({
          bookings: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));

export { useBookingsStore };
