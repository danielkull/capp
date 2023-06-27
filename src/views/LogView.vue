<template>
  <body>
    <svg
      class="wave"
      viewBox="0 0 1439 381"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1441 0.0378418C1296.9 64.4485 1008.7 301.626 720.5 322.091C432.3 342.556 144.1 146.308 7.24792e-05 102.362V381.332H1441V0.0378418Z"
      />
    </svg>

    <main>
      <article class="logIn-card__wrapper">
        <section class="logIn-card__logo-capp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-1-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z"
            />
          </svg>

          <h1>CAPP</h1>
        </section>
        <section class="login-card__start-page">
          <div class="login-card__btn-wrapper">
            <input
              type="button"
              value="Log In"
              class="LogIn-btn btn-font"
              id="LogIn-btn"
            />
            <input
              type="button"
              value="Sign In"
              class="Sign-btn btn-font"
              id="Sign-btn"
            />
          </div>
        </section>
        <section class="logIn-card__logIn-page">
          <div class="logIn-card__logIn-inpue">
            <input type="text" />
            <input type="text" />
          </div>
          <div class="logIn-card__login-btn-wrapper">
            <button class="logIn-card__login-back">
              <span class="logIn-card__back-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-caret-left-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
                  />
                </svg>
              </span>
            </button>
            <input type="button" value="Log In" class="LogIn-card__btn" />
          </div>
        </section>
      </article>
    </main>
  </body>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  background: linear-gradient(
    to right,
    var(--primary-mid),
    var(--primary-veryDark)
  );
  width: 100vw;
  height: 100vh;
}

.wave {
  position: absolute;
  top: 40%;
  left: 0;

  width: 100%;
  fill: var(--secondary-light);
}

main {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    var(--secondary-light) 46%,
    transparent 46%
  );
}

.logIn-card__wrapper {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid yellow;
  /* overflow: hidden; */
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
}
.logIn-card__logo-capp > h1 {
  font-size: var(--font-logo-size);
  color: var(--secondary-light);
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
  margin-bottom: 3rem;
}

.Sign-btn,
.LogIn-btn {
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
}

.btn-font {
  color: var(--primary-mid);
  font-size: clamp(1.5rem, 10vw, 1.8vw);
  font-family: monospace;
  font-weight: bold;
}
.LogIn-btn:focus,
.Sign-btn:focus {
  background: var(--primary-mid);
  color: var(--secondary-light);
}
.LogIn-btn:active,
.Sign-btn:active {
  transition-duration: 0s, 0s;
  transition-property: box-shadow, color;
  background: var(--primary-dark);
  border: 3px solid var(--primary-dark);
  color: var(--primary-light);
}
/*===================================================*/
/*            Login Page                      */
/*===================================================*/
.logIn-card__logIn-page {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-inline: auto;
  border-radius: 2rem;
  width: 25vw;
  height: 80vh;
  /* background: rgba(0, 0, 0, 0.2); */
  position: absolute;
  z-index: 10;
  top: 0;
  left: 600px;
}
.logIn-card__logIn-inpue {
  display: flex;
  flex-direction: column;
}
.logIn-card__login-btn-wrapper {
  margin-bottom: 4rem;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid red;
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
  font-family: monospace;
  font-weight: bold;
}

.logIn-card__login-back {
  all: unset;
  height: 5rem;
  aspect-ratio: 1;
  background: var(--secondary-mid);
  display: grid;
  place-content: center;
  border-radius: 100%;
  outline: 2px solid var(--secondary-mid);
  outline-offset: 0.4rem;
}
.logIn-card__back-arrow {
  display: grid;
  place-content: center;
}
.logIn-card__back-arrow > svg {
  display: block;
  height: 100%;
  width: 3rem;
  fill: var(--secondary-light);
  rotate: Y 0deg;
  transition: rotate 0.4s ease-out;
  perspective: 2px;
}
.logIn-card__back-arrow > svg:hover {
  fill: red;
  rotate: Y 360deg;
  perspective: 2px;
}

@media screen and (min-width: 900px) {
  .wave {
    position: absolute;
    top: 85px;
    left: 0;

    width: 100%;
    fill: var(--secondary-light);
  }
  .Sign-btn:hover,
  .LogIn-btn:hover,
  .LogIn-card__btn:hover {
    cursor: pointer;
    box-shadow: 20rem 0 0 0 var(--primary-mid) inset;
    color: var(--secondary-light);
    outline: 2px solid var(--secondary-dark);
  }
  .LogIn-btn:active,
  .Sign-btn:active,
  .LogIn-card__btn:active {
    transition-duration: 0s, 0s;
    transition-property: box-shadow, color;
    box-shadow: 20rem 0 0 0 var(--primary-dark) inset;
    border: 3px solid var(--primary-dark);
    color: var(--primary-light);
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
    cursor: pointer;
  }
}
</style>
