<template>
  <section v-if="routeData">
    <ul>
      <li v-for="items in routeData" :key="items.id">
        <MessageBox></MessageBox>
        <pre>
                {{ items }}
            </pre
        >
      </li>
    </ul>
  </section>
  <section v-else>Loadding....</section>
</template>

<script>
import { useAuthenticationStore } from "@/stores/useAuthenticationStore";
import { supabase } from "@/lib/supabaseClient.js";
import MessageBox from "@/components/messenger/MessageBox.vue";

export default {
  data() {
    return {
      routeData: null,
    };
  },
  components: { MessageBox },
  setup() {
    const authenticationStore = useAuthenticationStore();
    return { authenticationStore };
  },
  mounted() {
    this.getRoutes();
  },
  methods: {
    async getRoutes() {
      // Buggy
      // const activeUser = await this.authenticationStore.activeUser[0].id;
      const activeUser = 18;
      try {
        const { data, error } = await supabase
          .from("routes")
          .select()
          .eq("user_id", activeUser);
        console.log(data);
        this.routeData = data;
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style scoped></style>
