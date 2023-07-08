<template>
  <article id="icon__trunk-type">
    <button class="icon-btn">
      <span class="icon-tooltip"
        ><p>{{ trunkType }}</p></span
      >
      <svg
        v-if="
          trunkType === 'S' ||
          (trunkVolumeLiters >= 170 && trunkVolumeLiters <= 250)
        "
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0, 0, 28.346, 28.346"
      >
        <g id="Layer_27">
          <path
            class="stroke"
            d="M13.327,6.487 L16.019,6.487 C16.906,6.487 17.625,7.464 17.625,8.67 L17.625,8.67 L17.622,8.749"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M11.726,8.783 L11.722,8.67 L11.722,8.67 C11.722,7.464 12.44,6.487 13.327,6.487"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M7.363,8.151 L7.363,8.624"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M21.983,8.151 L21.983,8.624"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g>
            <path
              d="M24.87,8.783 C25.5,8.783 26.012,9.289 26.012,9.913 L26.012,21.729 C26.012,22.353 25.5,22.86 24.87,22.86 L4.477,22.86 C3.846,22.86 3.335,22.353 3.335,21.729 L3.335,9.913 C3.335,9.289 3.846,8.783 4.477,8.783 L24.87,8.783 z M14.53,10.408 Q13.374,10.408 12.557,10.757 Q11.741,11.106 11.307,11.772 Q10.872,12.439 10.872,13.204 Q10.872,14.394 11.795,15.221 Q12.452,15.809 14.078,16.212 Q15.343,16.526 15.699,16.649 Q16.218,16.834 16.427,17.083 Q16.635,17.333 16.635,17.688 Q16.635,18.242 16.139,18.656 Q15.644,19.069 14.666,19.069 Q13.744,19.069 13.2,18.604 Q12.657,18.14 12.479,17.149 L10.51,17.34 Q10.708,19.022 11.727,19.9 Q12.745,20.778 14.646,20.778 Q15.952,20.778 16.826,20.413 Q17.702,20.047 18.18,19.295 Q18.659,18.543 18.659,17.682 Q18.659,16.732 18.259,16.086 Q17.859,15.44 17.151,15.067 Q16.444,14.694 14.967,14.346 Q13.491,13.997 13.108,13.676 Q12.807,13.423 12.807,13.067 Q12.807,12.678 13.128,12.445 Q13.627,12.083 14.509,12.083 Q15.364,12.083 15.791,12.421 Q16.218,12.76 16.348,13.532 L18.371,13.443 Q18.324,12.063 17.37,11.235 Q16.416,10.408 14.53,10.408 z"
            />
            <path
              d="M24.87,8.783 C25.5,8.783 26.012,9.289 26.012,9.913 L26.012,21.729 C26.012,22.353 25.5,22.86 24.87,22.86 L4.477,22.86 C3.846,22.86 3.335,22.353 3.335,21.729 L3.335,9.913 C3.335,9.289 3.846,8.783 4.477,8.783 L24.87,8.783 z M14.53,10.408 Q13.374,10.408 12.557,10.757 Q11.741,11.106 11.307,11.772 Q10.872,12.439 10.872,13.204 Q10.872,14.394 11.795,15.221 Q12.452,15.809 14.078,16.212 Q15.343,16.526 15.699,16.649 Q16.218,16.834 16.427,17.083 Q16.635,17.333 16.635,17.688 Q16.635,18.242 16.139,18.656 Q15.644,19.069 14.666,19.069 Q13.744,19.069 13.2,18.604 Q12.657,18.14 12.479,17.149 L10.51,17.34 Q10.708,19.022 11.727,19.9 Q12.745,20.778 14.646,20.778 Q15.952,20.778 16.826,20.413 Q17.702,20.047 18.18,19.295 Q18.659,18.543 18.659,17.682 Q18.659,16.732 18.259,16.086 Q17.859,15.44 17.151,15.067 Q16.444,14.694 14.967,14.346 Q13.491,13.997 13.108,13.676 Q12.807,13.423 12.807,13.067 Q12.807,12.678 13.128,12.445 Q13.627,12.083 14.509,12.083 Q15.364,12.083 15.791,12.421 Q16.218,12.76 16.348,13.532 L18.371,13.443 Q18.324,12.063 17.37,11.235 Q16.416,10.408 14.53,10.408 z"
              fill-opacity="0"
              stroke-width="0.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
      <svg
        v-if="
          trunkType === 'M' ||
          (trunkVolumeLiters >= 251 && trunkVolumeLiters <= 450)
        "
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0, 0, 28.346, 28.346"
      >
        <g id="Layer_27">
          <path
            class="stroke"
            d="M13.327,6.487 L16.019,6.487 C16.906,6.487 17.625,7.464 17.625,8.67 L17.625,8.67 L17.622,8.749"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M11.726,8.783 L11.722,8.67 L11.722,8.67 C11.722,7.464 12.44,6.487 13.327,6.487"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M7.363,8.151 L7.363,8.624"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M21.983,8.151 L21.983,8.624"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g>
            <path
              d="M24.87,8.783 C25.5,8.783 26.012,9.289 26.012,9.913 L26.012,21.729 C26.012,22.353 25.5,22.86 24.87,22.86 L4.477,22.86 C3.846,22.86 3.335,22.353 3.335,21.729 L3.335,9.913 C3.335,9.289 3.846,8.783 4.477,8.783 L24.87,8.783 z M12.862,10.773 L9.833,10.773 L9.833,20.795 L11.713,20.795 L11.713,12.906 L13.696,20.795 L15.644,20.795 L17.633,12.906 L17.633,20.795 L19.513,20.795 L19.513,10.773 L16.478,10.773 L14.68,17.609 L12.862,10.773 z"
            />
            <path
              d="M24.87,8.783 C25.5,8.783 26.012,9.289 26.012,9.913 L26.012,21.729 C26.012,22.353 25.5,22.86 24.87,22.86 L4.477,22.86 C3.846,22.86 3.335,22.353 3.335,21.729 L3.335,9.913 C3.335,9.289 3.846,8.783 4.477,8.783 L24.87,8.783 z M12.862,10.773 L9.833,10.773 L9.833,20.795 L11.713,20.795 L11.713,12.906 L13.696,20.795 L15.644,20.795 L17.633,12.906 L17.633,20.795 L19.513,20.795 L19.513,10.773 L16.478,10.773 L14.68,17.609 L12.862,10.773 z"
              fill-opacity="0"
              stroke-width="0.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
      <svg
        v-if="
          trunkType === 'L' ||
          (trunkVolumeLiters >= 451 && trunkVolumeLiters <= 550)
        "
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0, 0, 28.346, 28.346"
      >
        <g id="Layer_27">
          <path
            class="stroke"
            d="M13.327,6.487 L16.019,6.487 C16.906,6.487 17.625,7.464 17.625,8.67 L17.625,8.67 L17.622,8.749"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M11.726,8.783 L11.722,8.67 L11.722,8.67 C11.722,7.464 12.44,6.487 13.327,6.487"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M7.363,8.151 L7.363,8.624"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M21.983,8.151 L21.983,8.624"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g>
            <path
              d="M24.87,8.783 C25.5,8.783 26.012,9.289 26.012,9.913 L26.012,21.729 C26.012,22.353 25.5,22.86 24.87,22.86 L4.477,22.86 C3.846,22.86 3.335,22.353 3.335,21.729 L3.335,9.913 C3.335,9.289 3.846,8.783 4.477,8.783 L24.87,8.783 z M13.494,10.662 L11.47,10.662 L11.47,20.602 L18.525,20.602 L18.525,18.913 L13.494,18.913 L13.494,10.662 z"
            />
            <path
              d="M24.87,8.783 C25.5,8.783 26.012,9.289 26.012,9.913 L26.012,21.729 C26.012,22.353 25.5,22.86 24.87,22.86 L4.477,22.86 C3.846,22.86 3.335,22.353 3.335,21.729 L3.335,9.913 C3.335,9.289 3.846,8.783 4.477,8.783 L24.87,8.783 z M13.494,10.662 L11.47,10.662 L11.47,20.602 L18.525,20.602 L18.525,18.913 L13.494,18.913 L13.494,10.662 z"
              fill-opacity="0"
              stroke-width="0.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
      <svg
        v-if="
          trunkType === 'XL' ||
          (trunkVolumeLiters >= 551 && trunkVolumeLiters <= 800)
        "
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0, 0, 28.346, 28.346"
      >
        <g id="Layer_27">
          <path
            class="stroke"
            d="M13.327,6.487 L16.019,6.487 C16.906,6.487 17.625,7.464 17.625,8.67 L17.625,8.67 L17.622,8.749"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M11.726,8.783 L11.722,8.67 L11.722,8.67 C11.722,7.464 12.44,6.487 13.327,6.487"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M7.363,8.151 L7.363,8.624"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M21.983,8.151 L21.983,8.624"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g>
            <path
              d="M24.87,8.783 C25.5,8.783 26.012,9.289 26.012,9.913 L26.012,21.729 C26.012,22.353 25.5,22.86 24.87,22.86 L4.477,22.86 C3.846,22.86 3.335,22.353 3.335,21.729 L3.335,9.913 C3.335,9.289 3.846,8.783 4.477,8.783 L24.87,8.783 z M18.966,10.661 L16.942,10.661 L16.942,20.601 L23.997,20.601 L23.997,18.912 L18.966,18.912 L18.966,10.661 z M9.218,10.579 L6.852,10.579 L9.956,15.371 L6.531,20.601 L8.958,20.601 L11.186,17.135 L13.408,20.601 L15.849,20.601 L12.424,15.446 L15.541,10.579 L13.196,10.579 L11.227,13.799 L9.218,10.579 z"
            />
            <path
              d="M24.87,8.783 C25.5,8.783 26.012,9.289 26.012,9.913 L26.012,21.729 C26.012,22.353 25.5,22.86 24.87,22.86 L4.477,22.86 C3.846,22.86 3.335,22.353 3.335,21.729 L3.335,9.913 C3.335,9.289 3.846,8.783 4.477,8.783 L24.87,8.783 z M18.966,10.661 L16.942,10.661 L16.942,20.601 L23.997,20.601 L23.997,18.912 L18.966,18.912 L18.966,10.661 z M9.218,10.579 L6.852,10.579 L9.956,15.371 L6.531,20.601 L8.958,20.601 L11.186,17.135 L13.408,20.601 L15.849,20.601 L12.424,15.446 L15.541,10.579 L13.196,10.579 L11.227,13.799 L9.218,10.579 z"
              fill-opacity="0"
              stroke-width="0.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
      <svg
        v-if="
          trunkType === 'XXL' ||
          (trunkVolumeLiters >= 801 && trunkVolumeLiters <= 1600)
        "
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0, 0, 28.346, 28.346"
      >
        <g id="Layer_27">
          <path
            class="stroke"
            d="M13.327,6.487 L16.019,6.487 C16.906,6.487 17.625,7.464 17.625,8.67 L17.625,8.67 L17.622,8.749"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M11.726,8.783 L11.722,8.67 L11.722,8.67 C11.722,7.464 12.44,6.487 13.327,6.487"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M7.363,8.151 L7.363,8.624"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="stroke"
            d="M21.983,8.151 L21.983,8.624"
            fill-opacity="0"
            stroke="#C7C2C2"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g>
            <path
              d="M24.87,8.783 C25.551,8.805 25.888,9.308 26.012,9.913 L26.012,21.729 C26.012,22.353 25.5,22.86 24.87,22.86 L4.477,22.86 C3.846,22.86 3.335,22.353 3.335,21.729 L3.335,9.913 C3.481,9.194 3.318,9.579 4.032,8.872 L4.477,8.783 L24.87,8.783 z M14.673,10.554 L10.593,17.62 L12.818,17.62 L12.818,21.089 L16.528,21.089 L16.528,17.62 L18.753,17.62 L14.673,10.554 z"
            />
            <path
              d="M24.87,8.783 C25.551,8.805 25.888,9.308 26.012,9.913 L26.012,21.729 C26.012,22.353 25.5,22.86 24.87,22.86 L4.477,22.86 C3.846,22.86 3.335,22.353 3.335,21.729 L3.335,9.913 C3.481,9.194 3.318,9.579 4.032,8.872 L4.477,8.783 L24.87,8.783 z M14.673,10.554 L10.593,17.62 L12.818,17.62 L12.818,21.089 L16.528,21.089 L16.528,17.62 L18.753,17.62 L14.673,10.554 z"
              fill-opacity="0"
              stroke-width="0.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
    </button>
  </article>
</template>

<script>
export default {
  props: {
    trunkType: {
      type: String,
      required: true,
    },
    trunkVolumeLiters: {
      type: Number,
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
  width: 3rem;
  margin-inline: auto;
  aspect-ratio: 1;
  fill: var(--secondary-light);
}
.stroke {
  stroke: var(--secondary-light);
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
