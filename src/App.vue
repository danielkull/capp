<script>
import DarkModeButton from "@/components/input-elements/DarkModeButton.vue";
export default {
  components: {
    DarkModeButton,
  },
};
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/logView">Log View</router-link> |
    <router-link to="/stefansView">Stefans View</router-link> |
    <router-link to="/calendar">Kalender</router-link> |
    <router-link to="/danielView">Daniels View</router-link>|
    <router-link to="/mainView">Main Page</router-link>|
    <router-link to="/KirstensView">KirstensView</router-link>|
    <router-link to="/CarsView">Verfügbare Autos</router-link> |
    <router-link to="/AddNewCarView">Neues Auto erfassen</router-link>|
    <router-link to="/testUserManagementView"
      >User/Data Managment Test Bereich</router-link
    >|
    <DarkModeButton />
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
}
</style>
