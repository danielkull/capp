import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";

export const useCarStore = defineStore("car", {
  state: () => ({
    cars: [],
    userCar: [],
    gearData: null,
    insuranceData: null,
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
        let { data, error } = await supabase
          .from("cars")
          .select()
          .eq("user_id", activeUser);

        if (error) throw error;
        if (data) {
          this.userCar = data;
        }
      } catch (error) {
        alert(error.message);
      }
    },
    async updateCarInsuranceInfo(dataToUpdate) {
      try {
        const { error } = await supabase
          .from("cars")
          .update({
            insurance_no: dataToUpdate.insurance_no,
            insurance_type: dataToUpdate.insurance_type,
          })
          .eq("id", dataToUpdate.activeUserCarID);
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      }
    },
    async updateCarInfo(dataToUpdate) {
      try {
        const { error } = await supabase
          .from("cars")
          .update({
            car_license_plate: dataToUpdate.licensePlate,
            year_of_construction: dataToUpdate.manufactureYear,
            trunk_volume_in_liters: dataToUpdate.trunkSize,
          })
          .eq("id", dataToUpdate.activeUserCarID);
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      }
    },
    async updateCarPerformanceInfo(dataToUpdate) {
      try {
        const { error } = await supabase
          .from("cars")
          .update({
            gear: dataToUpdate.gearBox,
            fuel_consume_per_km: dataToUpdate.carConsumption,
            kw: dataToUpdate.horsePower,
            max_speed: dataToUpdate.topSpeed,
          })
          .eq("id", dataToUpdate.activeUserCarID);
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      }
    },
    async getGearData() {
      try {
        const { data, error } = await supabase.rpc("get_gear");

        if (error) throw error;

        if (data) {
          this.gearData = data;
        }
      } catch (error) {
        alert(error.message);
      }
    },
    async getInsuranceData() {
      try {
        const { data, error } = await supabase.rpc("get_insurance");

        if (error) throw error;

        if (data) {
          this.insuranceData = data;
        }
      } catch (error) {
        alert(error.message);
      }
    },
  },
});
