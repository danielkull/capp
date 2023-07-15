<template>
  <section class="log-view-wrapper">
    <main>
      <article
        class="logIn-card__wrapper"
        :class="{ 'in-motion': motionActive }"
      >
        <section class="logIn-card__logo-capp">
          <svg
            class="capp-logo"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0, 0, 249.449, 249.449"
          >
            <g id="Layer_4_I">
              <path
                d="M91.294,98.606 C121.02,81.432 167.366,41.609 224.974,61.158"
                fill-opacity="0"
                stroke-width="15"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M212.808,118.212 C213.36,118.212 213.808,118.749 213.808,119.412 L213.808,122.222 C213.808,122.885 213.36,123.423 212.808,123.423 L190.926,123.423 C190.374,123.423 189.926,122.885 189.926,122.222 L189.926,119.412 C189.926,118.749 190.374,118.212 190.926,118.212 L212.808,118.212 z"
                fill-opacity="0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M87.466,97.08 C71.411,103.961 55.255,108.417 41.629,119.661"
                fill-opacity="0"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M94.377,97.08 C89.444,108.654 106.613,111.289 121.809,109.316"
                fill-opacity="0"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M72.778,185.276 C59.708,185.276 49.113,174.681 49.113,161.611 C49.113,148.541 59.708,137.946 72.778,137.946 C85.848,137.946 96.443,148.541 96.443,161.611 C96.443,174.681 85.848,185.276 72.778,185.276 z"
                fill-opacity="0"
                stroke-width="8"
                stroke-linecap="round"
              />
              <path
                d="M40.341,116.651 C30.533,124.623 23.598,161.584 41.629,164.044"
                fill-opacity="0"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g>
                <path
                  d="M222.884,98.119 C225.561,109.912 225.735,105.596 226.498,121.965 C226.537,136.654 219.105,164.044 202.053,165.562 L104.733,164.951 L104.851,163.685 C104.852,144.666 90.624,129.248 73.073,129.248 C55.522,129.248 41.478,144.666 41.478,163.685 L39.762,163.335 C33.727,158.812 32.824,157.586 31.897,151.159 L32.086,140.753 C32.966,136.326 37.207,117.686 39.788,117.686 L53.23,116.249 L74.408,105.749 L83.588,102.952 L92.746,100.77 L93.953,104.393 L96.752,106.957 L101.563,109.057 L109.287,110.258 L222.884,98.119 z M212.808,118.212 L190.926,118.212 C190.374,118.212 189.926,118.749 189.926,119.412 L189.926,122.222 C189.926,122.885 190.374,123.423 190.926,123.423 L212.808,123.423 C213.36,123.423 213.808,122.885 213.808,122.222 L213.808,119.412 C213.808,118.749 213.36,118.212 212.808,118.212 z"
                />
                <path
                  d="M222.884,98.119 C225.561,109.912 225.735,105.596 226.498,121.965 C226.537,136.654 219.105,164.044 202.053,165.562 L104.733,164.951 L104.851,163.685 C104.852,144.666 90.624,129.248 73.073,129.248 C55.522,129.248 41.478,144.666 41.478,163.685 L39.762,163.335 C33.727,158.812 32.824,157.586 31.897,151.159 L32.086,140.753 C32.966,136.326 37.207,117.686 39.788,117.686 L53.23,116.249 L74.408,105.749 L83.588,102.952 L92.746,100.77 L93.953,104.393 L96.752,106.957 L101.563,109.057 L109.287,110.258 L222.884,98.119 z M212.808,118.212 L190.926,118.212 C190.374,118.212 189.926,118.749 189.926,119.412 L189.926,122.222 C189.926,122.885 190.374,123.423 190.926,123.423 L212.808,123.423 C213.36,123.423 213.808,122.885 213.808,122.222 L213.808,119.412 C213.808,118.749 213.36,118.212 212.808,118.212 z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <g>
                <g>
                  <path
                    d="M15.434,15.835 L72.126,15.835"
                    fill-opacity="0"
                    stroke-width="13"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M72.126,72.527 L72.126,15.835"
                    fill-opacity="0"
                    stroke-width="13"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <path
                  d="M127.154,232.43 C63.795,232.43 12.432,181.067 12.432,117.708 C12.471,75.256 34.701,42.151 69.739,19.836"
                  fill-opacity="0"
                  stroke-width="13"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M224.974,61.158 C237.587,76.529 240.907,96.309 241.875,117.708 C241.875,181.067 190.513,232.43 127.154,232.43"
                  fill-opacity="0"
                  stroke-width="13"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>

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
                v-if="InputIsInValid"
                class="capp-input__invalid-input"
                :class="{
                  input__valid: !InputIsInValid,
                  input__invalid: InputIsInValid,
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
                  >Password</InputText
                >
              </form>
            </div>
            <!-- Msg for the User if input is in any way invalid after cklicking the LogIn/Sign in button -->
            <div>
              <p
                v-if="InputIsInValid"
                class="capp-input__invalid-input"
                :class="{
                  input__valid: !InputIsInValid,
                  input__invalid: InputIsInValid,
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
  </section>
</template>

<script>
import InputText from "@/components/input-elements/InputText.vue";
import LogButton from "@/components/input-elements/Button.vue";
import BackButton from "@/components/input-elements/BackButton.vue";
import { useAuthenticationStore } from "@/stores/useAuthenticationStore";
import { supabase } from "@/lib/supabaseClient.js";
import router from "../router";

export default {
  components: { InputText, LogButton, BackButton },
  data() {
    return {
      startPage: true,
      logInPage: false,
      signInPage: false,
      motionActive: false,
      loading: false,
      email: null,
      password: null,
      username: null,
      isEmailValid: false,
      isPasswordValid: false,
      InputIsInValid: false,
      invalidInputMsg: "",
    };
  },
  setup() {
    // Initialize the store at the begining
    const authenticationStore = useAuthenticationStore();

    return { authenticationStore };
  },
  created() {
    // Get all seasion and user data from the auth Store if availabel
    this.getSessionInfos();
  },
  beforeMount() {
    // Take the data from the auth Store and check if somebody is already logged in
    this.checkForRegisteredUser();
  },
  methods: {
    getSessionInfos() {
      this.authenticationStore.getSession();
      this.authenticationStore.onAuthStateChange();
    },
    checkForRegisteredUser() {
      // Benötige diesen Consoel.log später für die entwicklung
      // console.log("Check this: ", this.authenticationStore.session);
      // If somebody is logged in send the user to the mainView
      // Das MUSS für die Entwicklung ausgeklammert werden. Für die Build version
      // wird es wieder eingeklammert.
      /* if (this.authenticationStore.session) {
        router.push({ name: "mainView" });
      } */
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
      this.InputIsInValid = false;
      if (switchToPage === "logIn") {
        this.logInPage = !this.logInPage;
      } else if (switchToPage === "signIn") {
        this.signInPage = !this.signInPage;
      }
      this.startPage = !this.startPage;
      this.hideSlide();
    },
    hideSlide() {
      this.motionActive = true;
      setTimeout(() => {
        this.motionActive = false;
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
        this.InputIsInValid = true;
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
            this.InputIsInValid = true;
          } else if (duplicateUsername) {
            this.invalidInputMsg = "Leider gibt es bereits den Usernamen";
            this.InputIsInValid = true;
          } else if (duplicateMail) {
            this.invalidInputMsg = "Leider gibt es bereits die Mailadresse";
            this.InputIsInValid = true;
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
                router.push({ name: "addNewCarView" });
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
        this.InputIsInValid = true;
      }
    },
    toLowerCase(value) {
      return value.toLocaleLowerCase();
    },
  },
};
</script>

<style scoped>
.capp-logo {
  fill: var(--secondary-light);
  stroke: var(--secondary-light);
  width: 100%;
  aspect-ratio: 1;
}
.log-view-wrapper {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to right,

    var(--primary-mid) 20%,
    var(--primary-veryDark) 100%
  );
}

main {
  width: 100%;
  height: 100%;

  background: radial-gradient(
    circle at 50% 15vw,
    transparent 40%,
    var(--secondary-light) 40.1%
  );
}

.logIn-card__wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.in-motion {
  overflow: hidden;
}

/*================================================*/
/*                  Logo                          */
/*================================================*/
.logIn-card__logo-capp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: auto;

  margin-top: 5rem;
}
.logIn-card__logo-capp > svg {
  width: var(--font-logo-size);
  aspect-ratio: 1;
  fill: var(--secondary-light);
  display: none;
}
.logIn-card__logo-capp > h1 {
  margin-top: 3rem;
  font-size: var(--font-logo-size);
  color: var(--secondary-light);
  font-family: var(--font-logo);
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
  translate: 0 0;
  z-index: 11;
  background-color: var(--secondary-light);
  border-radius: 2rem;
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
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  border-radius: 2rem;
  width: 100%;
  height: 85vh;
  position: absolute;
  z-index: 10;
  top: -1px;
  left: -1px;
}
.logIn-card__logIn-input {
  width: 80%;
  margin-inline: auto;
}
.logIn-card__login-btn-wrapper {
  margin-bottom: 3rem;
  margin-top: 1.5rem;
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
/* ============================== */

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
  main {
    background: radial-gradient(
      circle at 50vw -7vw,
      transparent 40%,
      var(--secondary-light) 40.1%
    );
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
}
</style>
