<template>
  <input
    class="commentar__rating-radio"
    type="radio"
    :id="ratingId"
    :name="ratingGroup"
  />
  <label
    class="commentar__rating-icon"
    :class="{ 'responsive-scaling': scalingIsActive }"
    :for="ratingId"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      width="28.346"
      height="28.346"
      viewBox="0, 0, 28.346, 28.346"
    >
      <g id="Layer_30">
        <g>
          <path d="M9.249,3.918 L14.673,3.918" />
          <path
            d="M9.249,3.918 L14.673,3.918"
            fill-opacity="0"
            stroke-width="1.2"
            stroke-linecap="round"
          />
        </g>
        <g>
          <path d="M20.098,3.918 L14.673,3.918" />
          <path
            d="M20.098,3.918 L14.673,3.918"
            fill-opacity="0"
            stroke-width="1.2"
            stroke-linecap="round"
          />
        </g>
        <g>
          <path
            d="M8.566,21.865 L8.566,23.523 C8.566,24.63 8.078,25.528 7.475,25.528 L5.019,25.528 C4.417,25.528 3.929,24.63 3.929,23.523 L3.929,21.697"
          />
          <path
            d="M8.566,21.865 L8.566,23.523 C8.566,24.63 8.078,25.528 7.475,25.528 L5.019,25.528 C4.417,25.528 3.929,24.63 3.929,23.523 L3.929,21.697"
            fill-opacity="0"
            stroke-width="0.5"
            stroke-linecap="round"
          />
        </g>
        <g>
          <path d="M26.749,12.288 L25.522,12.774" />
          <path
            d="M26.749,12.288 L25.522,12.774"
            fill-opacity="0"
            stroke-width="1.2"
            stroke-linecap="round"
          />
        </g>
        <path
          d="M10.518,3.918 C5.685,3.918 5.826,5.126 3.824,13.368"
          fill-opacity="0"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.829,3.918 C23.661,3.918 23.521,5.126 25.522,13.368"
          fill-opacity="0"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <g>
          <path
            d="M25.672,13.367 C26,13.368 26.266,13.633 26.266,13.961 L26.266,21.103 C26.266,21.431 26,21.697 25.673,21.697 L3.674,21.697 C3.346,21.697 3.08,21.431 3.08,21.103 L3.08,13.961 C3.08,13.633 3.346,13.368 3.674,13.368 L25.672,13.367 z M8.806,15.17 L4.635,15.17 C4.245,15.17 3.929,15.487 3.929,15.877 L3.929,17.412 C3.929,17.802 4.245,18.119 4.635,18.118 L8.806,18.118 C9.197,18.119 9.513,17.802 9.513,17.412 L9.513,15.877 C9.513,15.487 9.197,15.17 8.806,15.17 z M24.711,15.17 L20.54,15.17 C20.15,15.17 19.833,15.487 19.833,15.877 L19.833,17.412 C19.833,17.802 20.15,18.119 20.54,18.119 L24.711,18.118 C25.101,18.119 25.418,17.802 25.418,17.412 L25.418,15.877 C25.418,15.487 25.101,15.17 24.711,15.17 z"
          />
          <path
            d="M25.672,13.367 C26,13.368 26.266,13.633 26.266,13.961 L26.266,21.103 C26.266,21.431 26,21.697 25.673,21.697 L3.674,21.697 C3.346,21.697 3.08,21.431 3.08,21.103 L3.08,13.961 C3.08,13.633 3.346,13.368 3.674,13.368 L25.672,13.367 z M8.806,15.17 L4.635,15.17 C4.245,15.17 3.929,15.487 3.929,15.877 L3.929,17.412 C3.929,17.802 4.245,18.119 4.635,18.118 L8.806,18.118 C9.197,18.119 9.513,17.802 9.513,17.412 L9.513,15.877 C9.513,15.487 9.197,15.17 8.806,15.17 z M24.711,15.17 L20.54,15.17 C20.15,15.17 19.833,15.487 19.833,15.877 L19.833,17.412 C19.833,17.802 20.15,18.119 20.54,18.119 L24.711,18.118 C25.101,18.119 25.418,17.802 25.418,17.412 L25.418,15.877 C25.418,15.487 25.101,15.17 24.711,15.17 z"
            fill-opacity="0"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g>
          <path
            d="M20.781,21.865 L20.781,23.523 C20.781,24.63 21.269,25.528 21.871,25.528 L24.327,25.528 C24.93,25.528 25.418,24.63 25.418,23.523 L25.418,21.697"
          />
          <path
            d="M20.781,21.865 L20.781,23.523 C20.781,24.63 21.269,25.528 21.871,25.528 L24.327,25.528 C24.93,25.528 25.418,24.63 25.418,23.523 L25.418,21.697"
            fill-opacity="0"
            stroke-width="0.5"
            stroke-linecap="round"
          />
        </g>
        <g>
          <path d="M2.597,12.288 L3.824,12.774" />
          <path
            d="M2.597,12.288 L3.824,12.774"
            fill-opacity="0"
            stroke-width="1.2"
            stroke-linecap="round"
          />
        </g>
      </g>
    </svg>
  </label>
</template>

<script>
export default {
  name: "RatingIcon",
  props: {
    ratingId: {
      type: String,
      required: true,
    },
    ratingGroup: {
      type: String,
      required: true,
    },
    scalingIsActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
/* Defines the basic properties */
.commentar__rating-icon svg {
  width: 2rem;
  aspect-ratio: 1;
  cursor: pointer;
  margin-inline: 0.3rem;
}

.commentar__rating-radio {
  all: unset;
}

/* Default deative state, if not hover or in focus */
.commentar__rating-icon:not(:hover) > svg,
.commentar__rating-icon:not(:focus) > svg {
  fill: var(--clr-like-def);
  stroke: var(--clr-like-def);
}

/* If "active", give current and its siblings this color */
.commentar__rating-icon:active > svg,
.commentar__rating-icon:active ~ label > svg {
  fill: var(--clr-like-act);
  stroke: var(--clr-like-act);
}

/* If "checked", give current and its siblings this color */
.commentar__rating-radio:checked ~ label > svg {
  fill: var(--clr-like-act);
  stroke: var(--clr-like-act);
}

.responsive-scaling > svg {
  width: clamp(1rem, 2vw, 2.5rem);
  height: clamp(1rem, 2vw, 2.5rem);
  margin-left: 0.001rem;
}

/*===================================================*/
/*===================Media Queries===================*/
/*===================================================*/

@media screen and (min-width: 600px) {
  /* If "hover", give current and its siblings this color */
  .commentar__rating-icon:hover > svg,
  .commentar__rating-icon:hover ~ label > svg {
    fill: var(--clr-like-act);
    stroke: var(--clr-like-act);
  }

  /* After a selection was made  */
  .commentar__rating-radio:checked ~ label:hover > svg,
  .commentar__rating-radio:checked ~ label:hover ~ label > svg,
  label:hover ~ .commentar__rating-radio:checked ~ label > svg {
    fill: var(--clr-like-act);
    stroke: var(--clr-like-act);
  }

  /* If "checked", give current and its siblings this color */
  .commentar__rating-radio:checked ~ label > svg {
    fill: var(--clr-like-act);
    stroke: var(--clr-like-act);
  }
}
</style>
