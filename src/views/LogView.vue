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
  border: 1px solid red;
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

@media screen and (min-width: 900px) {
  .wave {
    position: absolute;
    top: 85px;
    left: 0;

    width: 100%;
    fill: var(--secondary-light);
  }
  .Sign-btn:hover,
  .LogIn-btn:hover {
    cursor: pointer;
    box-shadow: 20rem 0 0 0 var(--primary-mid) inset;
    color: var(--secondary-light);
    outline: 2px solid var(--secondary-dark);
  }
  .LogIn-btn:active,
  .Sign-btn:active {
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
