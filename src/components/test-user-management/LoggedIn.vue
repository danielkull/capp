<!-- This "LoggedIn.vue" is part of "TestUserManagementView.vue" and only for test purpose, -->
<!-- before building it in the main part of the app -->

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
  <h3 class="header-3">Aktiver User</h3>
  <pre>
    {{ this.authenticationStore.activeUser }}
  </pre>

  <h3 class="header-3">Das Auto des Users</h3>
  <pre>
    {{ userCarData }}
    {{ this.carStore.userCar }}
  </pre>
  <input
    type="button"
    value="User Car"
    @click="showUserCar(this.authenticationStore.activeUser[0].id)"
  />

  <h3 class="header-3">Liste von allen Autos</h3>
  <pre>
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
      userCarData: "",
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
    async showUserCar(activeUser) {
      //   const activeUserID = this.authenticationStore.activeUser[0].id;

      this.userCarData = await this.carStore.getUserCar(activeUser);
      //   return this.carStore.userCar;
    },
  },
  async mounted() {
    await this.authenticationStore.getProfileData();
    await this.carStore.getCarData();
    const activeUserID = await this.authenticationStore.activeUser[0].id;
    await this.carStore.getUserCar(activeUserID);
    this.userCarData = this.carStore.userCar;
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
}

.header-3 {
  font-size: 1.2rem;
  font-weight: bold;
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
