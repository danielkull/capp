<template>
  <input type="button" value="value" class="Log-btn btn-font" id="LogIn-btn" />
</template>

<script>
export default {};
</script>

<style scoped>
.Log-btn {
  all: unset;
  cursor: pointer;
  padding: calc(0.2rem + 1vh) calc(1.5rem + 1vw);
  border-radius: calc(var(--s-brd-rad) + 2rem);
  border: calc(var(--m-brd) + 1px) solid var(--btn-brd-clr);
  box-shadow: 0 0 0 0 var(--primary-middle) inset;
  transition-duration: 0.5s, 0.2s;
  transition-property: box-shadow, color;
  background: transparent;
  outline: var(--m-brd) solid var(--btn-outl);
  outline-offset: clamp(0.3rem, 2vw, 0.5rem);
  text-align: center;
}

.btn-font {
  color: var(--clr-f);
  font-size: clamp(1rem, 5vw, 1.4rem);
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
  color: var(--clr-f-act);
  outline-color: var(--btn-outl-act);
}

.Log-btn:disabled {
  pointer-events: not-allowed;
  color: var(--font-disabled);
  border-color: var(--font-disabled);
}

@media screen and (min-width: 900px) {
  .Log-btn:hover,
  .LogIn-card__btn:hover {
    box-shadow: 20rem 0 0 0 var(--primary-middle) inset;
    color: var(--clr-f-act);
    outline-color: var(--btn-outl-act);
  }
  .Log-btn:active {
    transition-property: box-shadow, color;
    box-shadow: 20rem 0 0 0 var(--primary-middle) inset;
    outline-color: var(--btn-outl-act);
  }
}
</style>
