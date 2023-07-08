<script>
import { supabase } from "@/lib/supabaseClient";
import CarCard from "../components/cars-components/CarCard.vue";
export default {
  data() {
    return {
      title: "Übersicht über unsere verfügbaren Autos",
      brands: null,
      carTypes: null,
      cars: null,
    };
  },
  components: {
    CarCard,
  },
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
          `id, 
          type_id, 
          user_id, 
          kw, 
          year_of_construction, 
          max_speed, 
          trunk_volume_in_liters, 
          img_source, 
          count_of_seats, 
          users ( id, username, firstname, lastname, address, zipcode, city ), 
          car_types ( id, car_type_name, category, brand_id, brands ( id, brand_name ) ), 
          cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
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
    <div class="cars-container" v-if="cars">
      <CarCard
        v-for="car in cars"
        :key="car.id"
        :brandName="car.car_types.brands.brand_name"
        :carTypeCategory="car.car_types.category"
        :carTypeName="car.car_types.car_type_name"
        :carUserID="car.users.id"
        :carUserZipCode="car.users.zipcode"
        :carUserCity="car.users.city"
        :imgSource="car.img_source"
        :seatsCount="car.count_of_seats"
      >
        <router-link
          class="more-info"
          :to="{ name: 'carView', params: { id: car.id } }"
          >mehr Info</router-link
        >
      </CarCard>
    </div>

    <div v-else><p>Loading Cars...</p></div>
  </main>
</template>

<style scoped>
main {
  background-color: var(--secondary-mid);
  padding: 1.5rem 0.75rem;
}

h1 {
  font-size: 2rem;
  color: var(--primary-dark);
  text-align: center;
}

.cars-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding-block: 2rem;
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
  main {
    background-color: var(--secondary-mid);
    padding: 1.5rem 1.25rem;
  }
}

@media screen and (min-width: 992px) {
  .cars-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
