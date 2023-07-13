<template>
  <div class="car">
    <div class="car-img">
      <img
        :src="imgSource"
        :alt="brandName + '' + carTypeName"
        :title="brandName + '' + carTypeName"
      />
    </div>
    <div class="car-details">
      <h4>
        {{ brandName }}
        {{ carTypeName }}
      </h4>
      <p>
        <span class="label user-label"></span>
        <span class="user">{{ carUserZipCode }} {{ carUserCity }}</span>
      </p>
      <p>
        <span class="label">Sitze</span>
        <span>
          <SeatIconsFrame :countOfSeats="seatsCount" />
        </span>
      </p>
      <p>
        <span class="label">Typ</span>
        <span><IconType :carType="carTypeCategory" /></span>
      </p>

      <slot>Router Link to Single Car View</slot>
    </div>
  </div>
</template>

<script>
import IconType from "@/components/icon-type/IconType.vue";
import SeatIconsFrame from "@/components/icon-type/SeatIcons.vue";

export default {
  name: "CarCard",
  components: {
    IconType,
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
  },
};
</script>

<style scoped>
h4 {
  font-size: 1.5rem;
  padding-bottom: 0.75rem;
  color: var(--primary-dark);
  margin-bottom: 0.75rem;
  border-bottom: 1px solid var(--secondary-mid);
}

.car {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.75rem;
  align-items: center;
}

.car-img {
  width: 100%;
  aspect-ratio: 400 / 275;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  padding: 0;
  margin: 0;
}

.car-img > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 400 / 275;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.car-details {
  width: 100%;
  padding: 1.35rem 1.25rem;
  background-color: white;
  border-radius: 0.75rem;
  margin-top: -1.75rem;
  box-shadow: 0 2px 10px var(--secondary-dark);
}

.car-details > p {
  display: grid;
  grid-template-columns: 1fr 3fr;
  font-size: 1.2rem;
}

.car-details > p + p {
  margin-top: 0.35rem;
}

.car-details > p:last-of-type {
  padding-top: 0.5rem;
}

.car-details > p > span.label {
  font-weight: 400;
  color: var(--primary-dark);
}

.car-details > p > span.seats-count {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-dark);
}

.car-details > p > span.seats-count.seats-2::before {
  content: "* *";
}

.car-details > p > span.seats-count.seats-4::before {
  content: "* * * *";
}

.car-details > p > span.seats-count.seats-5::before {
  content: "* * * * *";
}

.car-details > p > span.seats-count.seats-6::before {
  content: "* * * * * *";
}

.car-details > p > span.seats-count.seats-8::before {
  content: "* * * * * * * *";
}

.car-details > p > span.car-type {
  font-size: 0.9rem;
  color: var(--primary-dark);
  background-color: var(--secondary-mid);
  padding: 2px;
  border-radius: 5px;
  text-align: center;
}

.car-details > p > span.user {
  font-weight: 500;
  color: var(--primary-dark);
}

.car-details > p > span.label.user-label::before {
  content: "";
  width: 25px;
  aspect-ratio: 1;
  display: inline-block;
  background-color: var(--primary-dark);
  border: 6px solid white;
  border-radius: 50%;
  outline: 1px solid var(--primary-mid);
}

@media screen and (min-width: 1280px) {
  .car-img,
  .car-img > img {
    aspect-ratio: 400 / 275;
  }
}
</style>
