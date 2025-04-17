import { create } from "zustand";

const useClassStore = create((set) => ({
  classes: [],

  classData: async () => {
    try {
      const response = await fetch("http://localhost:8008/api/classes");

      //   const json = await response.json();

      const { data } = await response.json();

      // console.log(data);

      set({
        classes: data,
      });
    } catch (error) {
      console.log(error);
    }
  },
}));

export { useClassStore };
