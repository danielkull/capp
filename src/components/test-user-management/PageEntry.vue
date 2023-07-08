<template>
    <!-- Sign In Formular -->
    <h2 class="subtitle">Sign In</h2>
    <form class="formular">
      <InputText
        v-model:inputData="username"
        :inputId="'text'"
        :inputType="'text'"
        >Username</InputText
      >
      <InputText v-model:inputData="email" :inputId="'emailSignIn'" :inputType="'email'"
        >Mail</InputText
      >
      <InputText
        v-model:inputData="password"
        :inputId="'passwordSignIn'"
        :inputType="'password'"
        >Password</InputText
      >
      <Button :value="'Sign in'" :id="'SignIn-btn'" class="btn-abstand"></Button>
    </form>
    <!-- Log in Formular -->
    <h2 class="subtitle">Log In</h2>
    <form class="formular">
      <InputText v-model:inputData="email" :inputId="'emailLogIn'" :inputType="'email'"
        >Mail</InputText
      >
      <InputText
        v-model:inputData="password"
        :inputId="'passwordLogIn'"
        :inputType="'password'"
        >Password</InputText
      >
      <Button :value="'Log in'" class="btn-abstand"></Button>
    </form>
  </template>
  
  <script>
  import Button from "@/components/input-elements/Button.vue";
  import InputText from "@/components/input-elements/InputText.vue";
  
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
      };
    },
    components: { Button, InputText },
  };
  </script>
  
  <style scoped>
  
  .subtitle {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration-line: underline;
  }
  
  .formular {
    width: 80%;
    border-bottom: 3px grey solid;
    padding: 0.2rem;
    margin-bottom: 1rem;
  }
  .btn-abstand {
    margin: 1rem;
  }
  </style>
  