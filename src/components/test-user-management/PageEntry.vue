<template>
  <!-- Sign In Formular -->
  <h2 class="subtitle">Sign In</h2>
  <form class="formular" @submit.prevent="handleSignIn">
    <InputText
      v-model:inputData="username"
      :inputId="'text'"
      :inputType="'text'"
      >Username</InputText
    >
    <InputText
      v-model:inputData="email"
      :inputId="'emailSignIn'"
      :inputType="'email'"
      >Mail</InputText
    >
    <InputText
      v-model:inputData="password"
      :inputId="'passwordSignIn'"
      :inputType="'password'"
      >Password</InputText
    >
    <Button
      type="submit"
      id="'SignIn-btn'"
      class="btn-abstand"
      :value="loading ? 'Loading...' : 'Sign in'"
      :disabled="loading"
    ></Button>
  </form>

  <!-- Log in Formular -->
  <h2 class="subtitle">Log In</h2>
  <form class="formular" @submit.prevent="handleLogIn">
    <InputText
      v-model:inputData="email"
      :inputId="'emailLogIn'"
      :inputType="'email'"
      >Mail</InputText
    >
    <InputText
      v-model:inputData="password"
      :inputId="'passwordLogIn'"
      :inputType="'password'"
      >Password</InputText
    >
    <Button
      type="submit"
      id="LogIn-btn"
      class="btn-abstand"
      :value="loading ? 'Loading...' : 'Log in'"
      :disabled="loading"
    ></Button>
  </form>
</template>

<script>
import Button from "@/components/input-elements/Button.vue";
import InputText from "@/components/input-elements/InputText.vue";
import { supabase } from "@/lib/supabaseClient";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      loading: false,
    };
  },
  components: { Button, InputText },
  methods: {
    toLowerCase(value) {
      return value.toLocaleLowerCase();
    },
    async handleSignIn() {
      try {
        this.loading = true;
        // Get Username and Mail from Superbase if the already exist
        const responsUsername = await supabase
          .from("users")
          .select("username")
          .eq("username", this.username);
        const responsMail = await supabase
          .from("users")
          .select("email")
          .eq("email", this.toLowerCase(this.email));

        const duplicateUsername = responsUsername.data.length;
        const duplicateMail = responsMail.data.length;
        // If Username/Mail exist, give feedback
        if (duplicateUsername & duplicateMail) {
          console.log(
            "Leider gibt es bereits den Usernamen, sowie die Mailadresse"
          );
        } else if (duplicateUsername) {
          console.log("Leider gibt es bereits den Usernamen");
        } else if (duplicateMail) {
          console.log("Leider gibt es bereits die Mailadresse");
          // If They don't exist, sign Up this new user
        } else if (!duplicateUsername & !duplicateMail) {
          const { data, error } = await supabase.auth.signUp({
            email: this.toLowerCase(this.email),
            password: this.password,
          });
          if (error) throw error;
          // console.log(`Check this out: ${data} and ${error}`);
          // console.log(data);
          // Also create a new table row for them
          const responseInsertNewRow = await supabase.from("users").insert({
            username: this.username,
            email: this.toLowerCase(this.email),
          });
          if (responseInsertNewRow.error) throw error;
        }
      } catch (error) {
        // Normaly the if cases should catch anything bevor this alert ocurs.
        if (error instanceof Error) {
          alert(error.message);
        }
      } finally {
        this.loading = false;
      }
    },
    async handleLogIn () {
      try {
        this.loading = true;
        const { data, error } = await supabase.auth.signInWithPassword({
          email: this.email,
          password: this.password,
        });
        /*         if (error) throw error;
        console.log(`Log in/Check this out: ${error}`);
        console.log(data); */
      } catch (error) {
        if (error instanceof Error) {
          // alert(error.message);
          console.log(error);
          console.log(error.message);
        }
      } finally {
        this.loading = false;
      }
    }
  },
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

.Log-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  background-color: lightgray;
  outline-color: lightgray;
}
</style>
