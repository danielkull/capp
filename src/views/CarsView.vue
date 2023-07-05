<script>
import { supabase } from "@/lib/supabaseClient";
export default {
  data() {
    return {
      title: "Übersicht über unsere verfügbaren Autos",
      brands: [],
      carTypes: [],
      cars: [],
    };
  },
  components: {},
  mounted() {
    this.getBrands();
    this.getCarTypes();
    this.getCars();
  },
  methods: {
    async getBrands() {
      const { data } = await supabase.from("brands").select();
      this.brands = data;
      console.log(this.brands);
    },
    async getCarTypes() {
      const { data } = await supabase
        .from("car_types")
        .select(`id, car_type_name, category, brand_id, brands ( brand_name )`)
        .order("brand_id", { ascending: true })
        .order("id", { ascending: true })
        .order("category", { ascending: true });
      this.carTypes = data;
      console.log(this.carTypes);
    },
    async getCars() {
      const { data } = await supabase
        .from("cars")
        .select(
          `id, type_id, user_id, kw, year_of_construction, max_speed, trunk_volume_in_liters, img_source, count_of_seats, users (id, username, firstname, lastname), car_types ( id, car_type_name, category, brand_id, brands ( id, brand_name ) ), cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
        )
        .order("id", { ascending: true });
      this.cars = data;
      console.log(this.cars);
    },
  },
};
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <div class="cars-container">
      <div class="car" v-for="car in cars" :key="car.id">
        <div class="car-img">
          <img
            :src="car.img_source"
            :alt="
              car.car_types.brands.brand_name + '' + car.car_types.car_type_name
            "
            :title="
              car.car_types.brands.brand_name + '' + car.car_types.car_type_name
            "
          />
        </div>
        <div class="car-details">
          <h4>
            {{ car.car_types.brands.brand_name }}
            {{ car.car_types.car_type_name }}
          </h4>
          <p>
            <span class="label">Sitze</span>
            <span class="seats-count">{{ car.count_of_seats }}</span>
          </p>
          <p>
            <span class="label">Typ</span>
            <span class="car-type">{{ car.car_types.category }}</span>
          </p>
          <p>
            <span class="label"></span>
            <span class="user">000{{ car.users.id }}</span>
          </p>

          <router-link
            class="more-info"
            :to="{ name: 'carView', params: { id: car.id } }"
            >mehr Info</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: var(--secondary-mid);
  padding: 1.5rem 2rem;
}

h1 {
  font-size: 2rem;
  color: var(--primary-dark);
  text-align: center;
}

h4 {
  font-size: 1.25rem;
  color: var(--primary-dark);
  margin-bottom: 0.35rem;
}

.cars-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding-block: 2rem;
}

.car {
  display: grid;
  grid-template-columns: 3fr 4fr;
  column-gap: 1.25rem;
  padding: 0.5rem 0.75rem;
  background-color: white;
  border-radius: 0.5rem;
  align-items: center;
  box-shadow: 2px 2px 10px var(--secondary-dark);
}

.car-img {
  width: 100%;
  aspect-ratio: 400 / 350;
  border-radius: 1.5rem;
  padding: 0;
  margin: 0;
}

.car-img > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 400 / 350;
  border-radius: 1.5rem;
  box-shadow: 2px 2px 5px var(--secondary-dark);
}

.car-details > p {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.car-details > p + p {
  margin-top: 0.25rem;
}

.car-details > p:last-of-type {
  padding-top: 0.5rem;
}

.car-details > p > span.label {
  font-weight: 300;
  color: var(--primary-dark);
}

.car-details > p > span.seats-count {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-dark);
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
  font-weight: 300;
}

.car-details > p:last-of-type > span.label::before {
  content: "";
  width: 20px;
  aspect-ratio: 1;
  display: inline-block;
  background-color: var(--primary-dark);
  border: 6px solid white;
  border-radius: 50%;
  outline: 1px solid var(--primary-dark);
}

a.more-info {
  font-size: 0.85rem;
  text-decoration: none;
  color: var(--primary-dark);
}

a.more-info:hover {
  color: var(--primary-mid);
}

@media screen and (min-width: 768px) {
  .cars-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
