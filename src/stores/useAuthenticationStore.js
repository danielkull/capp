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
        console.log("Data: ", data);
        console.log("Session: ", this.session.value);
      });
    },
    onAuthStateChange() {
      supabase.auth.onAuthStateChange((event, session) => {
        session.value = session;
        console.log("AuthState Session: ", session);
        console.log("AuthState event: ", event);
      });
    },
  },
});
