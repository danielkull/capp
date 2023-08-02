<template>
  <article class="car-card__wrapper">
    <img
      :src="imgSource"
      :alt="brandName + ' ' + carTypeName"
      :title="brandName + ' ' + carTypeName"
    />

    <section class="car-card__important-info">
      <section class="car-card__basic-information">
        <span class="car-card__adress">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
            />
          </svg>
          <p>{{ carUserZipCode }}</p>
          <p>/</p>
          <p>{{ carUserCity }}</p>
        </span>
        <span class="car-card__seat-icon-wrapper">
          <SeatIconsFrame :countOfSeats="seatsCount" />
        </span>
      </section>
      <section class="car-card__icon-wrapper" style="--svg-width: 2.4rem">
        <IconType :carType="carTypeCategory" class="icon"></IconType>
        <FuelType :fuelType="fuelTypeName" class="icon"></FuelType>
        <TrunkType :trunkVolumeLiters="trunkVolume" class="icon"></TrunkType>
        <DifferentType
          :differentType="'Isofix'"
          class="icon"
          v-if="carHasIsofix === true"
        ></DifferentType>
        <DifferentType
          :differentType="'Nicht-Raucher'"
          class="icon"
          v-if="carIsSmoker === false"
        >
        </DifferentType>
        <DifferentType :differentType="'Tiere'" class="icon"> </DifferentType>
      </section>
      <section class="car-card__router-link">
        <slot></slot>
      </section>
    </section>
  </article>
</template>

<script>
import IconType from "@/components/icon-type/IconType.vue";
import FuelType from "@/components/icon-type/fuelType.vue";
import TrunkType from "@/components/icon-type/TrunkType.vue";
import DifferentType from "@/components/icon-type/DifferentTypes.vue";
import SeatIconsFrame from "@/components/icon-type/SeatIcons.vue";

export default {
  components: {
    IconType,
    FuelType,
    TrunkType,
    DifferentType,
    SeatIconsFrame,
  },
  props: {
    imgSource: {
      type: String,
    },
    brandName: {
      type: String,
      required: true,
    },
    carTypeName: {
      type: String,
      required: true,
    },
    fuelTypeName: {
      type: String,
      required: true,
    },
    trunkVolume: {
      type: Number,
      required: true,
    },
    seatsCount: {
      type: Number,
      required: true,
    },
    carTypeCategory: {
      type: String,
      required: true,
    },
    carUserID: {
      type: Number,
      required: true,
    },
    carUserZipCode: {
      type: String,
      required: true,
    },
    carUserCity: {
      type: String,
      required: true,
    },
    carIsSmoker: {
      type: Boolean,
    },
    carHasIsofix: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.car-card__wrapper {
  width: 100%;
  height: 20em;
  position: relative;
  margin-bottom: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  border-top: 0.125rem solid var(--clr-img-top);
  box-shadow: 10px 10px 10px var(--card-shadow);
}

img {
  border-radius: 1rem 1rem 0 0;
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: center center;
  filter: grayscale(0.5);
}

.car-card__basic-information {
  width: 95%;
  margin-inline: auto;
  display: flex;
}
.car-card__important-info {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding-block: 1.2rem;
  border-top: 1px solid var(--clr-brd-top);
  background: var(--surface-light);
  border-radius: 1rem;

  box-shadow: 0 -10px 15px var(--nav-shadow);
}
.car-card__adress {
  width: 95%;
  margin-inline: auto;
  height: 2rem;
  display: flex;
  align-items: center;
}
.car-card__adress p {
  font-weight: 300;
  font-size: 0.8rem;
  color: var(--clr-plz-car, rgb(179, 179, 179));
}
.car-card__adress > svg {
  width: 1.2rem;
  aspect-ratio: 1;
  fill: var(--clr-plz-car, rgb(179, 179, 179));
  margin-right: 0.5rem;
}
.icon {
  width: 3rem;
  height: 3rem;
}
.car-card__icon-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-block: 0.9rem 0.6rem;
  width: 100%;
  margin-inline: auto;
  margin-top: 0.5rem;
  border-top: 1px solid var(--clr-brd);
}

.car-card__seat-icon-wrapper {
  align-items: center;
  display: flex;
}
.car-card__seat-icon-wrapper > svg {
  fill: var(--clr-seat-def);
  width: 1rem;
}
.car-card__seat-icon-wrapper > .plus {
  fill: var(--clr-state-icons);
  width: 2rem;
  aspect-ratio: 1;
}
.car-card__router-link {
  align-self: right;
  width: 35%;
  margin-inline: auto;

  margin-bottom: -0.2rem;
}
@media screen and (min-width: 900px) {
  .car-card__icon-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    padding-block: 0.9rem 0rem;

    width: max-content;
  }
}
</style>
