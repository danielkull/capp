import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";

export const useAuthenticationStore = defineStore("authentication", {
  state: () => ({
    activeUser: [],
    session: {},
  }),

  actions: {
    getSession() {
      supabase.auth.getSession().then(({ data }) => {
        this.session.value = data.session;
      });
    },
    onAuthStateChange() {
      supabase.auth.onAuthStateChange((event, session) => {
        this.session.value = session;
      });
    },
    async logOut() {
      try {
        this.loading = true;
        const { error } = supabase.auth.signOut();
      } catch (error) {
        alert(error.message);
      } finally {
        this.loading = false;
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
        alert(error.message);
      } finally {
        this.loading = false;
      }
    },
  },
});
