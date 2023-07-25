<template>
  <section class="log-view-wrapper">
    <main>
      <!--------------------------------------------------------------------->
      <!------------------------Nur fürs coden------------------------------------->

      <article>
        <section class="logIn-card__logo-capp">
          <span class="theme-btn-holder">
            <DarkModeButton class="dm-btn"
          /></span>
          <h1>CAPP</h1>
          <!-- === Start Page Section for Log In und Sign In === -->
        </section>
        <Transition name="slide">
          <section v-if="startPage" class="login-card__start-page">
            <div class="login-card__btn-wrapper">
              <LogButton
                value="Log In"
                id="log-in-page-btn"
                :disabled="loading"
                @click.prevent="changePage('logIn')"
              />
              <LogButton
                value="Sign In"
                id="sign-in-page-btn"
                :disabled="loading"
                @click.prevent="changePage('signIn')"
              />
            </div>
          </section>
        </Transition>
        <!-- ============== End of Start Page ==================== -->

        <!-- ============== Log In Page Section  ============== -->
        <Transition name="slide">
          <section v-if="logInPage" class="logIn-card__logIn-page">
            <div class="logIn-card__logIn-input">
              <form action="#" autocomplete="on">
                <InputText
                  v-model:inputData="email"
                  :inputId="'email-log-in'"
                  :inputType="'email'"
                  :inputPlaceholder="'beispiel@provider.com'"
                  @is-valid="checkValidEmail"
                  >Email
                </InputText>
                <InputText
                  v-model:inputData="password"
                  :inputId="'log-in-password'"
                  :inputType="'password'"
                  @is-valid="checkValidPassword"
                  >Password</InputText
                >
              </form>
            </div>
            <!-- Msg for the User if input is in any way invalid after cklicking the LogIn/Sign in button -->
            <div>
              <p
                v-if="inputIsInValid"
                class="capp-input__invalid-input"
                :class="{
                  input__valid: !inputIsInValid,
                  input__invalid: inputIsInValid,
                }"
              >
                {{ invalidInputMsg }}
              </p>
            </div>
            <!-- ==============End of msg for the User ==============-->
            <div class="logIn-card__login-btn-wrapper">
              <BackButton @click.prevent="changePage('logIn')" />

              <LogButton
                :value="loading ? 'Loading...' : 'Log In'"
                :disabled="loading"
                id="log-in-btn"
                @click.prevent="handleLogIn"
              />
            </div>
          </section>
        </Transition>
        <!-- ============== End of Log In Page ==================== -->

        <!-- ============== Sign In Page Section  ============== -->
        <Transition name="slide">
          <section v-if="signInPage" class="logIn-card__logIn-page">
            <div class="logIn-card__logIn-input">
              <form action="#" autocomplete="on">
                <InputText
                  v-model:inputData="username"
                  :inputId="'sign-in-username'"
                  :inputType="'text'"
                  :inputPlaceholder="'Ein beliebiger Username'"
                  >Username</InputText
                >
                <InputText
                  v-model:inputData="email"
                  :inputId="'sign-in-email'"
                  :inputType="'email'"
                  :inputPlaceholder="'beispiel@provider.com'"
                  @is-valid="checkValidEmail"
                  >Email
                </InputText>

                <InputText
                  v-model:inputData="password"
                  :inputId="'sign-in-password'"
                  :inputType="'password'"
                  @is-valid="checkValidPassword"
                  >Passwort</InputText
                >
              </form>
            </div>
            <!-- Msg for the User if input is in any way invalid after cklicking the LogIn/Sign in button -->
            <div>
              <p
                v-if="inputIsInValid"
                class="capp-input__invalid-input"
                :class="{
                  input__valid: !inputIsInValid,
                  input__invalid: inputIsInValid,
                }"
              >
                {{ invalidInputMsg }}
              </p>
            </div>
            <!-- ==============End of msg for the User ==============-->
            <div class="logIn-card__login-btn-wrapper">
              <BackButton @click.prevent="changePage('signIn')" />

              <LogButton
                :value="loading ? 'Loading...' : 'Sign In'"
                :disabled="loading"
                id="sign-in-btn"
                @click.prevent="handleSignIn"
              />
            </div>
          </section>
        </Transition>
        <!-- ============== End of Sign In Page ==================== -->
      </article>
    </main>
    <ImpressumFooter />
  </section>
</template>

<script>
import InputText from "@/components/input-elements/InputText.vue";
import LogButton from "@/components/input-elements/Button.vue";
import BackButton from "@/components/input-elements/BackButton.vue";
import ImpressumFooter from "@/components/main-component/FooterImpressum.vue";
import router from "../router";
import DarkModeButton from "@/components/input-elements/DarkModeButton.vue";

import { useAuthenticationStore } from "@/stores/useAuthenticationStore";
import { supabase } from "@/lib/supabaseClient.js";

export default {
  components: {
    InputText,
    LogButton,
    BackButton,
    ImpressumFooter,
    DarkModeButton,
  },

  data() {
    return {
      startPage: true,
      logInPage: false,
      signInPage: false,
      loading: false,
      email: null,
      password: null,
      username: null,
      isEmailValid: false,
      isPasswordValid: false,
      inputIsInValid: false,
      invalidInputMsg: "",
    };
  },
  setup() {
    // Initialize the store at the begining
    const authenticationStore = useAuthenticationStore();

    return { authenticationStore };
  },
  async created() {
    // Get all seasion and user data from the auth Store if availabel
    await this.getSessionInfos();
  },
  beforeMount() {
    // Take the data from the auth Store and check if somebody is already logged in
    this.checkForRegisteredUser();
  },
  methods: {
    async getSessionInfos() {
      await this.authenticationStore.getSession();
      await this.authenticationStore.onAuthStateChange();
    },
    checkForRegisteredUser() {
      if (this.authenticationStore.session) {
        router.push({ name: "mainView" });
      }
    },
    emptyFormData() {
      this.email = null;
      this.password = null;
      this.username = null;
    },
    checkValidEmail(currentValidation) {
      this.isEmailValid = currentValidation;
    },
    checkValidPassword(currentValidation) {
      this.isPasswordValid = currentValidation;
      this.isPasswordValid = true;
    },
    checkForEmptyForm() {
      const pasW = this.password;
      const user = this.username;
      const mail = this.email;
      // Checks for LogIn page
      if (this.logInPage) {
        if (mail && pasW) {
          return true;
        } else if (!mail || !pasW) {
          return false;
        }
        // Checks for SignIn page
      } else if (this.signInPage) {
        if (mail && pasW && user) {
          return true;
        } else if (!mail || !pasW || !user) {
          return false;
        }
      }
    },
    dataAreComplete() {
      const isNotEmpty = this.checkForEmptyForm();
      const isPasswordValid = this.isPasswordValid;
      const isEmailValid = this.isEmailValid;
      if (isNotEmpty && isPasswordValid && isEmailValid) {
        return true;
      } else {
        return false;
      }
    },
    // Manages everything when page is changed
    changePage(switchToPage) {
      this.emptyFormData();
      this.loading = true;
      this.invalidInputMsg = "";
      this.inputIsInValid = false;
      if (switchToPage === "logIn") {
        this.logInPage = !this.logInPage;
      } else if (switchToPage === "signIn") {
        this.signInPage = !this.signInPage;
      }
      this.startPage = !this.startPage;
      this.hideSlide();
    },
    hideSlide() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    async handleLogIn() {
      if (this.dataAreComplete()) {
        try {
          this.loading = true;
          const { data, error } = await supabase.auth.signInWithPassword({
            email: this.email,
            password: this.password,
          });

          if (!error) {
            // If everything is fine, send user to next page
            router.push({ name: "mainView" });
          } else {
            throw error;
          }
        } catch (error) {
          if (error instanceof Error) {
            alert(error.message);
          }
        } finally {
          this.loading = false;
        }
      } else {
        this.invalidInputMsg = "Deine Anmeldedaten sind leider unvollständig.";
        this.inputIsInValid = true;
      }
    },
    async handleSignIn() {
      if (this.dataAreComplete()) {
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
            this.invalidInputMsg =
              "Leider gibt es bereits den Usernamen, sowie die Mailadresse";
            this.inputIsInValid = true;
          } else if (duplicateUsername) {
            this.invalidInputMsg = "Leider gibt es bereits den Usernamen";
            this.inputIsInValid = true;
          } else if (duplicateMail) {
            this.invalidInputMsg = "Leider gibt es bereits die Mailadresse";
            this.inputIsInValid = true;
            // If They don't exist, sign Up this new user
          } else if (!duplicateUsername & !duplicateMail) {
            const { error } = await supabase.auth.signUp({
              email: this.toLowerCase(this.email),
              password: this.password,
            });
            if (!error) {
              // Also create a new table row for them.
              const responseInsertNewRow = await supabase.from("users").insert({
                username: this.username,
                email: this.toLowerCase(this.email),
              });
              if (responseInsertNewRow.error) {
                throw error;
              } else {
                this.$router.push({
                  name: "userQuestionView",
                });
              }
            } else {
              throw error;
            }
          }
        } catch (error) {
          if (error instanceof Error) {
            alert(error.message);
          }
        } finally {
          this.loading = false;
        }
      } else {
        this.invalidInputMsg = "Deine Anmeldedaten sind leider unvollständig.";
        this.inputIsInValid = true;
      }
    },
    toLowerCase(value) {
      return value.toLocaleLowerCase();
    },
  },
};
</script>

<style scoped>
/*==============================*/
.quest-tbn {
  display: block;
  position: absolute;
  top: 30%;
  left: 20%;
  width: 10rem;
  height: 3rem;

  z-index: 15;
}
.log-view-wrapper {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to right,

    var(--bg-shd-l) 20%,
    var(--bg-shd-d) 100%
  );
}

main {
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  overflow: hidden;
  background: linear-gradient(
    to right,

    var(--bg-shd-l) 20%,
    var(--bg-shd-d) 100%
  );
}
/*================================================*/
/*                  Logo                          */
/*================================================*/
.logIn-card__logo-capp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 30%;
}
.logIn-card__logo-capp > h1 {
  font-size: clamp(4rem, 10vw, 6rem);
  color: var(--clr-logo);
  font-family: var(--font-logo);
  padding-bottom: 5rem;
}
.theme-btn-holder {
  display: flex;
  flex-direction: row-reverse;
  width: 95%;
  margin-inline: auto;
  margin-top: 5%;
}
.capp-btn__default {
  background: none;
  border: 1px solid var(--check-default);
}
.capp-btn__default::after {
  top: 50%;
  left: 4%;
  translate: 88% -50%;
}
.capp-btn__default:checked::after {
  translate: 0% -50%;
  transition: 0.3s ease-out;
  background-color: var(--clr-after-btn);
}
/* .capp-btn__default:checked::after {
  background: radial-gradient(
    circle at 20%,
    transparent 40%,
    var(--check-default) 41% 40%,
    var(--check-default)
  );
}

.capp-btn__default::after {
  background: var(--check-default);
  transition: 0.1s ease-in;
} */
.capp-btn__default::after {
  background: radial-gradient(
    circle at 20%,
    transparent 40%,
    var(--check-default) 41% 40%,
    var(--check-default)
  );
}

.capp-btn__default:checked::after {
  background: var(--check-default);
  background: radial-gradient(
    circle at center,
    var(--check-default) 0% 39%,
    transparent 40% 49%,
    var(--check-default) 55%
  );
  transition: 0.1s ease-in;
}

.capp-btn__default:checked {
  background: none;
}
/*================================================*/
/*                  Logo-Ende                     */
/*================================================*/
/*                  Buttons                     */
/*================================================*/
.login-card__btn-wrapper {
  width: 100%;
  height: auto;
  display: grid;
  place-content: center;
  gap: clamp(1.6rem, 5vw, 3rem);
  margin-bottom: 2rem;
}
/*===================================================*/
/*            Start Page                      */
/*===================================================*/

.login-card__start-page {
  translate: 0 0px;
  z-index: 2;
  background-color: var(--bg-log);
  border-radius: 2rem 2rem 0 0;
  padding-top: 10vh;
  padding-bottom: 12vh;
  box-shadow: 0px 0px 25px var(--foot-shd-d);
  border-top: var(--s-brd) solid var(--foot-brd);
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}

.slide-enter-active {
  animation: 1s 1 forwards slider;
}
.slide-leave-active {
  animation: 1s 1 reverse slider;
}

@keyframes slider {
  0% {
    translate: 0 600px;
  }
  100% {
    translate: 0 0px;
  }
}
/*===================================================*/
/*            Login Page:       ;                    */
/*===================================================*/
.logIn-card__logIn-page {
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  border-radius: 2rem 2rem 0 0;
  width: 100%;
  height: max-content;
  background: var(--bg-log);
  box-shadow: 0px 0px 25px var(--foot-shd-d);
  border-top: var(--s-brd) solid var(--foot-brd);
  padding-top: 5vh;
  padding-bottom: 15vh;
}
.logIn-card__logIn-input {
  width: 80%;
  margin-inline: auto;
}
.logIn-card__login-btn-wrapper {
  margin-bottom: 3rem;
  margin-top: 3rem;
  margin-inline: 2rem;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.LogIn-card__btn {
  all: unset;

  padding-block: 0.8rem;
  padding-inline: 3rem;
  border-radius: 2.5rem;
  margin-block: 1.2rem;
  border: 3px solid var(--primary-mid);
  box-shadow: 0 0 0 0 var(--primary-mid) inset;
  transition-duration: 0.5s, 0.2s;
  transition-property: box-shadow, color;
  background-image: white;
  outline: 2px solid var(--secondary-mid);
  outline-offset: 0.4rem;
  color: var(--primary-mid);
  font-size: clamp(1rem, 10vw, 1.4vw);
}

/* ==== Input is Invalid CSS ==== */
.capp-input__invalid-input {
  font-size: var(--s-font);
  width: 100%;
  height: max-content;
  text-align: center;
  padding-right: calc(var(--s-font) / 2);
  margin-top: calc(var(--s-font) / 1.5);
}
.input__valid {
  color: transparent;
}
.input__invalid {
  color: var(--error-color);
}

@media screen and (min-width: 500px) {
  main {
    background: radial-gradient(
      circle at 50vw 0vw,
      transparent 40%,
      var(--secondary-light) 40.1%
    );
  }
}

@media screen and (min-width: 900px) {
  body {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      to right,

      var(--bg-shd-l) 20%,
      var(--bg-shd-d) 100%
    );
  }
  main {
    background: linear-gradient(to bottom, transparent 60%, var(--bg-log) 60%);
  }

  .logIn-card__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;

    border-radius: 2rem;
    width: 25vw;
    height: 80vh;
    transition: box-shadow 0.3s;
  }

  .logIn-card__wrapper:hover {
    box-shadow: 13px 13px 20px rgba(95, 95, 95, 0.3),
      -13px -13px 20px rgba(95, 95, 95, 0.3);
  }
  .logIn-card__logIn-page {
    left: -1px;
    width: 100%;

    bottom: 20px;
    background: var(--surface-light);
    padding-top: 4rem;
    left: 0px;
  }
}
</style>
