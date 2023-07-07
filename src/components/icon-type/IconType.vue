<template>
  <article id="icon__car-type">
    <button class="icon-btn">
      <span class="icon-tooltip"
        ><p>{{ carType }}</p></span
      >
      <!-- <div class="svg-holder"></div> -->

      <svg
        v-if="carType === 'Kleinwagen'"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        width="100%"
        height="100%"
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

      <!-- Pic SUV -->

      <svg
        v-if="carType === 'SUV'"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0, 0, 30, 28.346"
      >
        <g id="SUV">
          <path
            d="M6.095,12.376 L21.392,13.106 C22.036,13.106 26.894,13.802 26.894,14.431 L26.907,17.228 C26.907,17.857 26.386,18.367 25.742,18.367 L24.357,18.359"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.85,18.154 L9.478,17.866"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.047,17.866 L3.822,17.854 C3.178,17.854 2.439,17.16 2.439,16.531 L2.478,12.854"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.193,9.482 C17.279,9.445 19.043,11.316 21.062,13.022"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.278,9.649 L13.324,12.577"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.673,9.481 C5.747,10.092 6.27,11.393 6.095,12.376"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.594,13.156 L3.582,13.15"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.533,15.116 L26.77,15.106"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.243,19.899 C6.149,19.899 5.261,19.012 5.261,17.917 C5.261,16.823 6.149,15.936 7.243,15.936 C8.337,15.936 9.225,16.823 9.225,17.917 C9.225,19.012 8.337,19.899 7.243,19.899 z"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.119,19.899 C21.025,19.899 20.137,19.012 20.137,17.917 C20.137,16.823 21.025,15.936 22.119,15.936 C23.213,15.936 24.101,16.823 24.101,17.917 C24.101,19.012 23.213,19.899 22.119,19.899 z"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.746,9.481 L13.991,9.481"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.746,9.481 C2.914,9.649 2.726,11.337 2.478,12.854"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            id="Shape"
          />
        </g>
      </svg>
      <!-- Pic Bus -->
      <svg
        v-if="carType === 'Bus'"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0, 0, 30, 28.346"
      >
        <g id="Bus">
          <path
            d="M6.381,12.95 L23.064,13.312 C23.707,13.312 24.889,13.696 25.688,14.453 L25.731,18.491 C25.731,19.12 24.83,18.862 24.187,18.862 L25.165,18.947"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.224,18.666 L9.511,18.491"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.547,18.491 L4.709,18.491 C4.066,18.491 3.615,18.031 3.615,17.402 L3.655,13.724"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.333,9.099 L18.616,13.085"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.062,8.884 C6.135,9.951 6.556,11.966 6.381,12.95"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.721,13.73 L4.709,13.724"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.494,15.247 L25.731,15.247"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.529,20.473 C6.435,20.473 5.547,19.586 5.547,18.491 C5.547,17.397 6.435,16.51 7.529,16.51 C8.623,16.51 9.511,17.397 9.511,18.491 C9.511,19.586 8.623,20.473 7.529,20.473 z"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.205,20.473 C21.111,20.473 20.224,19.586 20.224,18.491 C20.224,17.397 21.111,16.51 22.205,16.51 C23.3,16.51 24.187,17.397 24.187,18.491 C24.187,19.586 23.3,20.473 22.205,20.473 z"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.106,8.884 C3.661,8.668 3.969,11.995 3.721,13.512"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.638,8.991 L11.347,12.842"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.973,8.884 C23.016,9.305 23.256,11.804 23.759,13.312"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            id="Shape"
          />
          <path
            d="M20.973,8.884 L6.628,8.884"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            id="Shape"
          />
        </g>
      </svg>
      <!-- Pic Cabrio -->
      <svg
        v-if="carType === 'Cabrio'"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0, 0, 28.346, 28.346"
      >
        <g id="Cabrio">
          <path
            d="M19.308,12.76 L21.062,12.952 C21.705,12.952 26.755,13.756 26.755,14.385 L26.907,16.507 C26.907,17.136 26.386,17.646 25.742,17.646 L24.101,17.625"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.137,17.442 L9.519,17.29"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.1,17.196 L3.822,17.132 C3.178,17.132 2.439,16.439 2.439,15.81 L2.439,14.079"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.139,10.168 C17.2,10.636 17.795,10.593 19.308,12.76"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.527,11.3 L13.164,12.76"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.425,11.953 C5.873,12.114 2.884,12.699 2.439,14.079"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.612,14.391 L3.6,14.385"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.518,14.803 L26.755,14.793"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.243,19.178 C6.149,19.178 5.261,18.291 5.261,17.196 C5.261,16.102 6.149,15.215 7.243,15.215 C8.337,15.215 9.225,16.102 9.225,17.196 C9.225,18.291 8.337,19.178 7.243,19.178 z"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.119,19.178 C21.025,19.178 20.137,18.291 20.137,17.196 C20.137,16.102 21.025,15.215 22.119,15.215 C23.213,15.215 24.101,16.102 24.101,17.196 C24.101,18.291 23.213,19.178 22.119,19.178 z"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.425,11.953 C9.699,13.033 11.288,12.971 19.308,12.76"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
      <svg
        v-if="carType === 'Pickup'"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0, 0, 28.346, 28.346"
      >
        <g id="Pick_up">
          <path
            d="M2.752,13.358 L21.816,13.358 C22.459,13.358 26.755,13.836 26.755,14.466 L26.907,17.732 C26.907,18.361 26.386,18.871 25.742,18.871 L24.355,18.851"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.137,18.647 L9.518,18.421"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.935,18.421 L3.822,18.357 C3.178,18.357 2.439,17.664 2.439,17.035 L2.57,13.358"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.383,8.949 C20.512,8.799 20.868,11.834 21.917,13.358"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.525,14.853 L3.513,14.848"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.477,15.36 L26.714,15.351"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.243,20.403 C6.149,20.403 5.261,19.516 5.261,18.421 C5.261,17.327 6.149,16.44 7.243,16.44 C8.337,16.44 9.225,17.327 9.225,18.421 C9.225,19.516 8.337,20.403 7.243,20.403 z"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.119,20.403 C21.025,20.403 20.137,19.516 20.137,18.421 C20.137,17.327 21.025,16.44 22.119,16.44 C23.213,16.44 24.101,17.327 24.101,18.421 C24.101,19.516 23.213,20.403 22.119,20.403 z"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.872,8.943 L14.872,18.421"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.872,8.943 L18.057,8.943"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
      <svg
        v-if="carType === 'Transporter'"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0, 0, 28.346, 28.346"
      >
        <g id="Transporter">
          <path
            d="M5.264,13.539 L15.775,13.67"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.394,13.67 L22.982,13.76 C23.625,13.76 25.881,14.494 26.471,15.261 L26.431,18.938 C26.431,19.567 25.024,19.41 24.381,19.41 L25.649,19.404"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.968,19.268 L9.627,19.11"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.466,19.11 L4.041,19.048 C3.398,19.048 2.876,18.505 2.876,17.876 L3.053,9.893"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.109,8.617 L17.394,13.539"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.053,14.281 L4.041,14.275"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.233,15.753 L26.471,15.753"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.447,20.92 C6.353,20.92 5.466,20.033 5.466,18.938 C5.466,17.844 6.353,16.957 7.447,16.957 C8.542,16.957 9.429,17.844 9.429,18.938 C9.429,20.033 8.542,20.92 7.447,20.92 z"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.124,20.92 C21.029,20.92 20.142,20.033 20.142,18.938 C20.142,17.844 21.029,16.957 22.124,16.957 C23.218,16.957 24.105,17.844 24.105,18.938 C24.105,20.033 23.218,20.92 22.124,20.92 z"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.466,8.426 C3.67,8.426 3.23,8.426 3.053,9.893"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.312,8.426 C20.572,9.331 22.479,12.251 22.982,13.76"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.312,8.426 L4.967,8.426"
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
export default {
  props: {
    carType: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.icon-btn {
  all: unset;

  aspect-ratio: 1;
  padding: 0.2rem;
  border-radius: 0.5rem;
  display: grid;
  place-content: center;
  background: var(--primary-veryDark);
  cursor: pointer;
  position: relative;
  border: var(--icon-brd);
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
  left: 25%;
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
  width: 3rem;
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
