import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";

export const useAuthenticationStore = defineStore("authentication", {
  state: () => ({
    activeUser: [],
    session: {},
  }),

  actions: {
    async getSession() {
      await supabase.auth.getSession().then(({ data }) => {
        this.session.value = data.session;
        // Simple check for not being null
        if (data.session) {
          this.getProfileData();
        }
      });
    },
    async onAuthStateChange() {
      await supabase.auth.onAuthStateChange((_, _session) => {
        this.session.value = _session;
      });
    },
    async logOut() {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      }
    },
    async getProfileData() {
      try {
        const { user } = this.session.value;
        // At the moment we get all user data, later it should select only the necessary one
        let { data, error, status } = await supabase
          .from("users")
          .select()
          .eq("email", user.email);

        if (error && status) throw error;

        if (data) {
          this.activeUser = data;
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
