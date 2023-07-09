<template>
  <h1 class="title">You are logged in</h1>
  <div>
    <Button
      @click="logOut"
      :value="loading ? 'Loading...' : 'Log Out'"
      :disabled="loading"
      class="btn-abstand"
    ></Button>
  </div>
  <pre>
    {{ this.authenticationStore.activeUser }}
    {{ this.carStore.cars }}
  </pre>
</template>

<script>
import Button from "@/components/input-elements/Button.vue";
import { useAuthenticationStore } from "@/stores/useAuthenticationStore";
import { useCarStore } from "@/stores/useCarStore";

export default {
  components: { Button },
  data() {
    return {
      loading: false,
    };
  },
  setup() {
    const authenticationStore = useAuthenticationStore();
    const carStore = useCarStore();

    return { authenticationStore, carStore };
  },
  methods: {
    logOut() {
      this.authenticationStore.logOut();
    },
  },
  mounted() {
    this.authenticationStore.getProfileData();
    this.carStore.getCarData();
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
}

.Log-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  background-color: lightgray;
  outline-color: lightgray;
}
.btn-abstand {
  margin: 1rem;
}
</style>
