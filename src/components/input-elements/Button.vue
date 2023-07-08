<template>
  <input
    type="button"
    :value="`${log_in}`"
    class="Log-btn btn-font"
    id="LogIn-btn"
  />
</template>

<script>
export default {
  // data: () => ({
  //   log_in: "Log in",
  //   sign_in: "Sign In",
  // }),
};
</script>

<style scoped>
.Log-btn {
  all: unset;
  cursor: pointer;
  padding: calc(0.2rem + 1vh) calc(1.5rem + 1vw);
  border-radius: calc(var(--s-brd-rad) + 2rem);
  border: calc(var(--m-brd) + 1px) solid var(--primary-mid);
  box-shadow: 0 0 0 0 var(--primary-mid) inset;
  transition-duration: 0.5s, 0.2s;
  transition-property: box-shadow, color;
  background: var(--secondary-light);
  outline: var(--m-brd) solid var(--secondary-mid);
  outline-offset: clamp(0.3rem, 2vw, 0.5rem);
  text-align: center;
}

.btn-font {
  color: var(--primary-mid);
  font-size: clamp(1rem, 5vw, 1.2rem);
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.05em;
}
.Log-btn:focus {
  outline-color: var(--primary-light);
}
.Log-btn:active {
  transition: none;
  background: var(--primary-dark);
  color: var(--primary-light);
}

@media screen and (min-width: 900px) {
  .Log-btn:hover,
  .LogIn-card__btn:hover {
    box-shadow: 20rem 0 0 0 var(--primary-mid) inset;
    color: var(--secondary-light);
    outline-color: var(--secondary-dark);
  }
  .Log-btn:active {
    transition-property: box-shadow, color;
    box-shadow: 20rem 0 0 0 var(--primary-dark) inset;
    color: var(--primary-light);
  }
}
</style>
