import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";

export const useCarStore = defineStore("car", {
  state: () => ({
    cars: [],
    userCar: [],
  }),

  actions: {
    async getCarData() {
      try {
        let { data, error, status } = await supabase.from("cars").select();

        if (error && status) throw error;

        if (data) {
          this.cars = data;
        }
      } catch (error) {
        alert(error.message);
      }
    },
    async getUserCar(activeUser) {
      try {
        let { data, error } = await supabase.from("cars").select().eq("user_id", activeUser);

        if (error) throw error;
        if (data) {
          this.userCar = data;
        }
      } catch (error) {
        alert(error.message);
      }
    },
  },
});
