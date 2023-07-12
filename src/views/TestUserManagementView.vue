<template>
  <h1 class="title">Test Bereich für das User/Data Management</h1>
  <LoggedIn v-if="authenticationStore.session.value"></LoggedIn>
  <PageEntry v-else></PageEntry>
  <button @click.prevent="getSessionInfos()">Test</button>
</template>

<script>
import PageEntry from "@/components/test-user-management/PageEntry.vue";
import LoggedIn from "@/components/test-user-management/LoggedIn.vue";
import { useAuthenticationStore } from "@/stores/useAuthenticationStore";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  components: { PageEntry, LoggedIn },
  setup() {
    const authenticationStore = useAuthenticationStore();

    return { authenticationStore };
  },
  methods: {
    getSessionInfos() {
      this.authenticationStore.getSession();
      this.authenticationStore.onAuthStateChange();
    },
  },
  created() {
    this.getSessionInfos();
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
}
</style>
