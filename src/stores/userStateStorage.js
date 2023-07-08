// =====================================================
// ====== Das ist erstmal nur ein Beispiel ==============
// =====================================================

// So könnte ein Storage benannt und aufgesetzt werden
import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";

export const userStateStore = defineStore("userState", {
  state: () => ({
    users: [
      {
        id: 1,
        username: "brandMatthes95",
        password: "brandMatt95EAZ",
        firstname: "Matthias",
        lastname: "Brandmüller",
        email: "matthes@brandmail.com",
        phone: "0201 532698",
        mobile: "0174 9396748",
        address: "Brandstraße 5",
        zipcode: "45137",
        city: "Essen",
        date_of_birth: "1995-03-02T00:00:00",
        count_of_accidents: 1,
      },
      {
        id: 2,
        username: "hDimpfelmoser49",
        password: "dimpfMoos49MDM",
        firstname: "Heinrich",
        lastname: "Dimpfelmoser",
        email: "h-dimpfelmoser@moosmail.com",
        phone: "089 745628",
        mobile: "0157 2234568",
        address: "Moosweg 59",
        zipcode: "81203",
        city: "München",
        date_of_birth: "1949-10-05T00:00:00",
        count_of_accidents: 0,
      },
    ],
  }),

  actions: {
    async getUser() {
      const { data } = await supabase.from("users").select();
      this.users = data;
    },
  },
});
