import { defineStore } from "pinia";

export const useGlobalStateStore = defineStore("globalState", {
  state: () => ({
    currentDate: null,
    currentCarId: null,
  }),

  actions: {
    saveCurrentDate(value) {
      this.currentDate = value;
    },
    saveCurrentCarId(value) {
      this.currentCarId = value;
    },
  },

  getters: {
    updateCurrentData() {
      return this.currentDate !== null;
    },
  },
});
