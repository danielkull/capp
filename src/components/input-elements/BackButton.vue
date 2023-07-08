<template>
  <article class="log-area__back-btn-wrapper">
    <input type="button" value="" class="login__back-btn" id="back-btn" />

    <span class="login__back-arrow">
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
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
.log-area__back-btn-wrapper {
  position: relative;
  width: max-content;
  aspect-ratio: 1;
  cursor: pointer;
}
.login__back-btn,
.login__back-arrow {
  display: grid;
  place-content: center;
}

.login__back-btn {
  all: unset;
  height: clamp(2rem, 10vw, 3rem);
  aspect-ratio: 1;
  background: var(--secondary-mid);

  padding: calc(0.2rem + 0.5vw);
  border-radius: 100%;
  outline: var(--m-brd) solid var(--secondary-mid);
  outline-offset: clamp(0.3rem, 2vw, 0.5rem);
  transition-duration: 0.3s, 0.3s;
  transition-property: background-color, outline-color;
}

.login__back-arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}
.login__back-arrow > svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: white;
}

#back-btn:active {
  background: var(--primary-dark);
}
.login__back-btn:focus {
  outline-color: var(--primary-dark);
}
@media screen and (min-width: 900px) {
  .login__back-btn:hover {
    outline-color: var(--secondary-dark);
    background: var(--primary-mid);
  }
  .login__back-btn:active {
    background: var(--primary-dark);
  }
}
</style>
