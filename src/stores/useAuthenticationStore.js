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
        // Benötige diesen Consoel.log später für die entwicklung
        // console.log("GetSesstion Data: ",data)
        this.session.value = data.session;
        // Simple check for not being null
        if(!data){
          this.getProfileData();
        }
      });
    },
    async onAuthStateChange() {
      await supabase.auth.onAuthStateChange((_, _session) => {
        // Benötige diesen Consoel.log später für die entwicklung
        // console.log("Auth State Change event: ", _)
        // console.log("Auth State Change session: ", _session)
        this.session.value = _session;
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
