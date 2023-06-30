<template>
  <article id="icon__car-type">
    <button class="icon-btn">
      <span class="icon-tooltip"><p>Car-type</p></span>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        viewBox="0, 0, 30, 28.346"
      >
        <g id="Kleinwagen">
          <path
            d="M19.581,18.158 L9.72,17.943"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.897,17.85 L5.756,17.901 C4.795,18.174 3.707,17.055 3.707,16.425 L3.707,13.437"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.636,9.465 C16.722,9.429 18.486,11.299 20.505,13.005"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.722,9.632 L12.914,12.669"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.707,13.956 L4.795,13.929"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.962,15.507 L26.199,15.498"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.738,19.882 C6.644,19.882 5.756,18.995 5.756,17.901 C5.756,16.806 6.644,15.919 7.738,15.919 C8.832,15.919 9.72,16.806 9.72,17.901 C9.72,18.995 8.832,19.882 7.738,19.882 z"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.562,19.882 C20.468,19.882 19.581,18.995 19.581,17.901 C19.581,16.806 20.468,15.919 21.562,15.919 C22.657,15.919 23.544,16.806 23.544,17.901 C23.544,18.995 22.657,19.882 21.562,19.882 z"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.636,9.465 C9.748,9.464 6.028,10.41 3.707,13.437"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.691,12.837 L20.836,13.089 C21.479,13.089 26.299,14.3 26.299,14.93 L26.351,17.211 C26.351,17.84 25.854,18.158 25.21,18.158 L23.544,18.158"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.691,12.837 C7.381,11.537 8.293,10.424 9.997,9.83"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </button>
  </article>
</template>

<script>
export default {};
</script>
<style scoped>
.icon-btn {
  all: unset;
  /* width: 4rem; */
  aspect-ratio: 1;
  padding: 0.1rem;
  border-radius: 0.5rem;
  display: grid;
  place-content: center;
  background: var(--primary-veryDark);
  cursor: pointer;
  position: relative;
}

.icon-btn:active {
  background: var(--primary-veryDark);
}
.icon-btn:active svg {
  stroke: var(--secondary-mid);
}
.icon-btn:hover {
  background: var(--primary-dark);
}

/*===============*/
.icon-tooltip,
.icon-tooltip::after {
  position: absolute;
  display: inline-block;
  background: var(--primary-veryDark);
}

.icon-tooltip {
  width: max-content;
  height: auto;
  top: 0;
  left: 50%;
  translate: -50% -90%;
  border-radius: 0.3rem;

  padding: 1rem 1rem;
  pointer-events: none;
  transition: all 0.5s;
  opacity: 0;
}
.icon-tooltip::after {
  content: "";
  top: 90%;
  left: 0;
  width: 4rem;
  height: 1rem;
  clip-path: polygon(10% 0%, 50% 0%, 30% 100%);
}
.icon-tooltip > p {
  text-align: center;
  color: var(--secondary-light);
}

.icon-btn:active.icon-tooltip {
  translate: -50% -140%;
  opacity: 1;
}

svg {
  stroke: var(--secondary-light);
  width: 6rem;
  aspect-ratio: 1;
}

@media screen and (min-width: 900px) {
  .icon-btn:hover .icon-tooltip {
    translate: -50% -140%;
    opacity: 1;
  }
  .icon-btn:hover {
    background: var(--primary-dark);
  }
  .icon-btn:focus {
    background: var(--primary-dark);
  }
}
</style>
