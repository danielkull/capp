// =====================================================
// ====== Das ist erstmal nur ein Beispiel ==============
// =====================================================

// So könnte ein Storage benannt und aufgesetzt werden
import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";

export const userStateStore = defineStore("userState", {
  state: () => ({
    users: null,
  }),

  actions: {
    async getUser() {
      const { data } = await supabase.from("users").select();
      this.users = data;
    },
  },
});
