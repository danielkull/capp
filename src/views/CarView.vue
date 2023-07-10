<script>
import { supabase } from "@/lib/supabaseClient";
import IconType from "@/components/icon-type/IconType.vue";
import fuelType from "@/components/icon-type/fuelType.vue";
import TrunkType from "@/components/icon-type/TrunkType.vue";
import IconSeatsCount from "@/components/icon-type/IconSeatsCount.vue";
export default {
  data() {
    return {
      carID: this.$route.params.id,
      car: null,
    };
  },
  components: { IconType, IconSeatsCount, fuelType, TrunkType },
  mounted() {
    this.getCar();
  },
  methods: {
    async getCar() {
      const { data } = await supabase
        .from("cars")
        .select(
          `*, users ( id, username, firstname, lastname, address, zipcode, city ), 
          car_types ( id, car_type_name, category, brand_id, brands ( id, brand_name ) ), 
          cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
        )
        .eq("id", this.carID);
      this.car = data[0];
      console.log(this.car);
    },
  },
};
</script>

<template>
  <main v-if="car">
    <div class="single-car">
      <div class="img-wrapper">
        <img
          :src="car.img_source"
          :alt="
            car.car_types.brands.brand_name + ' ' + car.car_types.car_type_name
          "
          :title="
            car.car_types.brands.brand_name + ' ' + car.car_types.car_type_name
          "
        />
      </div>
      <div class="car-details">
        <h1>
          {{ car.car_types.brands.brand_name }}
          {{ car.car_types.car_type_name }}
        </h1>
        <div class="col">
          <p>
            <span class="label user-label"></span>
            <span
              >{{ car.users.firstname }} {{ car.users.lastname }}<br />{{
                car.users.address
              }}<br />{{ car.users.zipcode }} {{ car.users.city }}</span
            >
          </p>
          <p>
            <span class="label">Typ</span>
            <span><IconType :carType="car.car_types.category" /></span>
          </p>
          <p>
            <span class="label">Sitze</span>
            <span>
              <IconSeatsCount :countOfSeats="car.count_of_seats" />
            </span>
          </p>
          <p>
            <span class="label">Getriebe</span> <span>{{ car.gear }}</span>
          </p>
          <p>
            <span class="label">Kofferraum</span>
            <span
              ><TrunkType :trunkVolumeLiters="car.trunk_volume_in_liters" />
              {{ car.trunk_volume_in_liters }} l</span
            >
          </p>
        </div>
        <div class="col">
          <p>
            <span class="label">Kraftstoff</span>
            <span><fuelType :fuelType="car.fuel_type" /></span>
          </p>
          <p>
            <span class="label">Verbrauch</span>
            <span>{{ car.fuel_consume_per_km }} l/km</span>
          </p>

          <p>
            <span class="label">PS</span> <span>{{ car.kw }}</span>
          </p>
          <p>
            <span class="label">max. Tempo</span>
            <span>{{ car.max_speed }} km/h</span>
          </p>
          <p>
            <span class="label">Kilometerstand</span>
            <span>{{ car.mileage }} km</span>
          </p>
          <p>
            <span class="label">Baujahr</span>
            <span>{{ car.year_of_construction }}</span>
          </p>
          <p>
            <span class="label">Versicherung</span>
            <span>{{ car.insurance_type }}</span>
          </p>
          <p>
            <span class="label">Merkmale</span>
            <span>
              <ul>
                <li v-for="(feature, index) in car.cars_features" :key="index">
                  {{ feature.features.feature_name }}
                </li>
              </ul>
            </span>
          </p>
        </div>
      </div>
    </div>
  </main>
  <div v-else>
    <p>Loading Car Nr. {{ this.carID }}</p>
  </div>
</template>

<style scoped>
main {
  padding: 2rem 1.5rem;
}

.single-car {
  display: grid;
  grid-template-columns: 1fr;
}

.single-car > .img-wrapper,
.single-car > .img-wrapper > img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.single-car > .car-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding-block: 1.25rem;
  padding-inline: 1rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 10px var(--secondary-dark);
  margin-top: -1.25rem;
}

.single-car > .car-details > .col > p {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-weight: 400;
  font-size: 1.15rem;
}

.single-car > .car-details > .col > p + p {
  margin-top: 0.75rem;
}

.single-car > .car-details > .col > p > span.label {
  color: var(--primary-dark);
}

.single-car > .car-details > .col > p > span.label.user-label::before {
  content: "";
  display: inline-block;
  width: 18px;
  aspect-ratio: 1;
  background-color: var(--primary-dark);
  border: 5px solid white;
  border-radius: 100%;
  outline: 2px solid var(--primary-mid);
}

.single-car > .car-details > .col > p > span.car-type {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--primary-dark);
  background-color: var(--secondary-mid);
  padding: 2px 5px;
  border-radius: 5px;
  text-align: center;
}

.single-car > .car-details > .col > p > span.seats-count {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-dark);
}

.single-car > .car-details > .col > p > span.seats-count.seats-2::before {
  content: "* *";
}

.single-car > .car-details > .col > p > span.seats-count.seats-4::before {
  content: "* * * *";
}

.single-car > .car-details > .col > p > span.seats-count.seats-5::before {
  content: "* * * * *";
}

.single-car > .car-details > .col > p > span.seats-count.seats-6::before {
  content: "* * * * * *";
}

.single-car > .car-details > .col > p > span.seats-count.seats-8::before {
  content: "* * * * * * * *";
}

.single-car > .car-details > .col > p > span > ul {
  list-style-type: none;
}

.single-car > .car-details > .col > p > span > ul > li::before {
  content: "+ ";
  font-weight: 500;
  color: var(--primary-mid);
}

h1 {
  font-size: 2rem;
  color: var(--primary-mid);
  margin-bottom: 0.75rem;
}

@media screen and (min-width: 768px) {
  .single-car > .car-details {
    grid-template-columns: repeat(2, 1fr);
  }

  .single-car > .car-details > h1 {
    grid-column: span 2;
  }
}

@media screen and (min-width: 992px) {
  .single-car > .img-wrapper,
  .single-car > .img-wrapper > img {
    aspect-ratio: 400 / 215;
    object-fit: cover;
  }

  .single-car > .car-details > .col > p {
    grid-template-columns: 2fr 3fr;
  }
}
</style>
