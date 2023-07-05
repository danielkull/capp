<script>
import { supabase } from "@/lib/supabaseClient";
export default {
  data() {
    return {
      brands: [],
      carTypes: [],
      car: {},
    };
  },
  components: {},
  mounted() {
    this.getBrands();
    this.getCarTypes();
    this.getCar();
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
    async getCar() {
      const { data } = await supabase
        .from("cars")
        .select(
          `id, type_id, user_id, kw, year_of_construction, max_speed, trunk_volume_in_liters, img_source, count_of_seats, users (id, username, firstname, lastname), car_types ( id, car_type_name, category, brand_id, brands ( id, brand_name ) ), cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
        )
        .eq("id", this.$route.params.id);
      this.car = data[0];
      console.log(this.car);
    },
  },
};
</script>

<template>
  <!--
  <h1>Auto Nr. {{ this.$route.params.id }}</h1>
  <pre>{{ car }}</pre>
-->
  <main>
    <div class="single-car">
      <img
        :src="car.img_source"
        :alt="'Auto Nr. ' + car.id"
        :title="'Auto Nr. ' + car.id"
      />
      <div class="car-details">
        <h1>Marke - {{ car.type_id }}</h1>
        <p><span>Typ</span> <span>Kategorie</span></p>
        <p>
          <span>User</span> <span>000{{ car.user_id }}</span>
        </p>
        <p>
          <span>Sitze</span> <span>{{ car.count_of_seats }}</span>
        </p>
        <p>
          <span>Baujahr</span> <span>{{ car.year_of_construction }}</span>
        </p>
        <p>
          <span>PS</span> <span>{{ car.kw }}</span>
        </p>
        <p>
          <span>max. Tempo</span> <span>{{ car.max_speed }} km/h</span>
        </p>
        <p>
          <span>Kofferraum</span>
          <span>{{ car.trunk_volume_in_liters }} l</span>
        </p>
        <p>
          <span>Merkmale</span>
          <span>
            <ul>
              <li v-for="(feature, index) in car.cars_features" :key="index">
                {{ feature.features.feature_name }}
              </li>
            </ul>
          </span>
        </p>
        <!--
        <p>{{ car.car_types }}</p>
        -->
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 2rem 1.5rem;
}

.single-car {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.single-car > img {
  width: 100%;
  border-radius: 1rem;
}

.single-car > .car-details > p {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-weight: 300;
}

.single-car > .car-details > p + p {
  margin-top: 0.5rem;
}

.single-car > .car-details > p > span:first-of-type {
  color: var(--primary-dark);
}

.single-car > .car-details > p > span > ul {
  list-style-type: none;
}

.single-car > .car-details > p > span > ul > li::before {
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
  .single-car {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .single-car > .car-details > p {
    grid-template-columns: 2fr 3fr;
  }
}
</style>
