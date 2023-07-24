<script>
export default {};
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
    <router-link to="/AddNewCarView">Neues Auto erfassen</router-link>|
    <router-link to="/testUserManagementView"
      >User/Data Managment Test Bereich</router-link
    >|
    <router-link :to="{ name: 'userQuestionView' }"
      >User Question Form</router-link
    >|
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  /* display: none; */
}
</style>
