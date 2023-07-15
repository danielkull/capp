<template>
  <body>
    <main>
      <article
        class="logIn-card__wrapper"
        :class="{ 'in-motion': motionActive }"
      >
        <section class="logIn-card__logo-capp">
          <h1>CAPP</h1>
          <!-- === Start Page Section for Log In und Sign In === -->
        </section>
        <Transition name="slide">
          <section v-if="startPage" class="login-card__start-page">
            <div class="login-card__btn-wrapper">
              <LogButton
                value="Log In"
                id="LogIn-btn"
                @click.prevent="changePage('logIn')"
              />
              <LogButton
                value="Sign In"
                id="Sign-btn"
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
                  :inputId="'email'"
                  :inputType="'email'"
                  :inputPlaceholder="'beispiel@provider.com'"
                  >Email
                </InputText>

                <InputText :inputId="'first-password'" :inputType="'password'"
                  >Password</InputText
                >
              </form>
            </div>
            <div class="logIn-card__login-btn-wrapper">
              <BackButton @click.prevent="changePage('logIn')" />

              <LogButton value="Log In" />
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
                  :inputId="'username'"
                  :inputType="'text'"
                  :inputPlaceholder="'Ein beliebiger Username'"
                  >Username</InputText
                >
                <InputText
                  :inputId="'email'"
                  :inputType="'email'"
                  :inputPlaceholder="'beispiel@provider.com'"
                  >Email
                </InputText>

                <InputText :inputId="'first-password'" :inputType="'password'"
                  >Password</InputText
                >
              </form>
            </div>
            <div class="logIn-card__login-btn-wrapper">
              <BackButton @click.prevent="changePage('signIn')" />

              <LogButton value="Sign In" />
            </div>
          </section>
        </Transition>
        <!-- ============== End of Sign In Page ==================== -->
      </article>
    </main>
  </body>
</template>

<script>
import InputText from "@/components/input-elements/InputText.vue";
import LogButton from "@/components/input-elements/Button.vue";
import BackButton from "@/components/input-elements/BackButton.vue";
export default {
  components: { InputText, LogButton, BackButton },
  data() {
    return {
      startPage: true,
      logInPage: false,
      signInPage: false,
      motionActive: false,
    };
  },
  methods: {
    changePage(switchToPage) {
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
      }, 1000);
    },
  },
};
</script>

<style scoped>
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
  width: 100%;
  height: 100%;

  background: radial-gradient(
    circle at 50% 15vw,
    transparent 40%,
    var(--bg-log) 40.1%
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
  display: grid;
  place-content: center;
  text-align: center;
  gap: 1rem;
  width: 100%;
  height: 30%;
}

.logIn-card__logo-capp > h1 {
  font-size: clamp(4rem, 10vw, 6rem);
  color: var(--clr-logo);
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
  background-color: var(--bg-log);
  border-radius: 2rem;
  padding-top: 2rem;
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
      var(--bg-log) 40.1%
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
