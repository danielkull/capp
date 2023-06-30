<script>
import { supabase } from "./lib/supabaseClient";
export default {
  data() {
    return {
      h2brands: "Auto Marken",
      h2types: "Auto Typen",
      h2cars: "Verfügbare Autos",
      h2users: "Angemeldete User",
      newBrand: "",
      brands: [],
      carTypes: [],
      cars: [],
      users: [],
    };
  },
  components: {},
  mounted() {
    this.getBrands();
    this.getCarTypes();
    this.getCars();
    this.getUsers();
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
        .select(`id, car_type_name, brand_id, brands ( brand_name )`)
        .order("brand_id", { ascending: true })
        .order("id", { ascending: true });
      this.carTypes = data;
      console.log(this.carTypes);
    },
    async getCars() {
      const { data } = await supabase
        .from("cars")
        .select(
          `id, type_id, kw, year_of_construction, max_speed, trunk_volume_in_liters, img_source, count_of_seats, car_types ( id, car_type_name, brand_id, brands ( id, brand_name ) ), cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
        );
      this.cars = data;
      console.log(this.cars);
    },
    async getUsers() {
      const { data } = await supabase
        .from("users")
        .select(`id, username, firstname, lastname, email, phone, mobile`);
      this.users = data;
      console.log(this.users);
    },
    async addNewBrand(brandName) {
      const { data, error } = await supabase
        .from("brands")
        .insert({ brand_name: brandName })
        .select();

      this.getBrands();
      this.newBrand = "";
    },
  },
};
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/logView">Log View</router-link> |
    <router-link to="/stefansView">Stefans View</router-link> |
    <router-link to="/calendar">Kalender</router-link> |
    <router-link to="/danielView">Daniels View</router-link>|
    <router-link to="/mainView">Main Page</router-link>|
  </nav>
  <router-view />

  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h2>{{ h2brands }}</h2>

  <form @submit.prevent="addNewBrand(this.newBrand)">
    <div class="input-wrapper">
      <label for="new-brand">Neue Marke</label>
      <input
        type="text"
        name="new-brand"
        id="new-brand"
        v-model="this.newBrand"
      />
    </div>
    <button>Neue Marke speichern</button>
  </form>
  <ul class="brands">
    <li v-for="brand in brands" :key="brand.id">
      {{ brand.id }} - {{ brand.brand_name }}
    </li>
  </ul>
  <h2>{{ h2types }}</h2>
  <ul class="types">
    <li v-for="carType in carTypes" :key="carType.id">
      {{ carType.brand_id }}.{{ carType.id }})
      <span>{{ carType.brands.brand_name }}</span>
      {{ carType.car_type_name }}
    </li>
  </ul>
  <h2>{{ h2cars }}</h2>
  <ul class="cars">
    <li class="car" v-for="car in cars" :key="car.id">
      <div class="img-container">
        <img
          :src="car.img_source"
          alt="car.car_types.brands.brand_name + ' ' + car.car_types.car_type_name"
        />
      </div>
      <div class="details-container">
        <h4>
          {{ car.car_types.brands.brand_name }}
          {{ car.car_types.car_type_name }}
        </h4>
        <ul class="details-list">
          <li>
            <span>Kofferraum:</span>
            <span>{{ car.trunk_volume_in_liters }} l</span>
          </li>
          <li>
            <span>Anzahl Sitze:</span> <span>{{ car.count_of_seats }}</span>
          </li>
          <li>
            <span>PS:</span> <span>{{ car.kw }}</span>
          </li>
          <li>
            <span>Höchst-Tempo:</span>
            <span>{{ car.max_speed }} km/h</span>
          </li>
          <li>
            <span>Baujahr:</span> <span>{{ car.year_of_construction }}</span>
          </li>
          <li>
            <span>Merkmale:</span>
            <span>
              <div v-for="carFeature in car.cars_features" :key="carFeature.id">
                {{ carFeature.features.feature_name }}
              </div>
            </span>
          </li>
        </ul>
      </div>
    </li>
  </ul>
  <!-- <p v-for="car in cars" :key="car.id">{{ car }}</p> -->
  <h2>{{ h2users }}</h2>
  <ul class="users">
    <li v-for="user in users" :key="user.id" class="user-card">
      <h4>{{ user.firstname }} {{ user.lastname }} ({{ user.username }})</h4>
      <p>
        <span>E-Mail: </span>
        <span
          ><a :href="user.email">{{ user.email }}</a></span
        >
      </p>
      <p>
        <span>Telefon: </span> <span>{{ user.phone }}</span>
      </p>
      <p>
        <span>Mobil: </span> <span>{{ user.mobile }}</span>
      </p>
    </li>
  </ul>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

form > .input-wrapper {
  display: grid;
  grid-template-columns: 1fr;
}

form > .input-wrapper > label {
  text-align: left;
  font-weight: 600;
  color: hsl(141.3, 45.1%, 47.8%);
}

form > .input-wrapper > input {
  padding: 0.25rem 0.35rem;
  font-size: 1.25rem;
  color: darkgrey;
  border: 1px solid lightgrey;
  border-radius: 5px;
}

form > button {
  background-color: hsl(141.3, 45.1%, 47.8%);
  color: white;
}

h2 {
  text-align: left;
}

ul {
  list-style-type: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: 1fr;
}

ul.brands {
  grid-template-columns: repeat(2, 1fr);
}

ul li {
  text-align: left;
}

ul li .details-container {
  padding-inline: 1rem;
}

ul li .details-container h4 {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
  color: hsl(141.3, 45.1%, 47.8%);
  margin-block: 12px;
  text-shadow: 1px 1px 0px lightgrey;
}

ul > li > span {
  font-weight: 600;
  color: hsl(141.3, 45.1%, 35.5%);
}

ul.cars,
ul.users {
  gap: 1.5rem;
}

/* Cars List */

ul.cars > li.car {
  background-color: whitesmoke;
  padding-bottom: 1rem;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 2px 2px 8px lightgray;
}

ul.details-list {
  display: block;
}

ul.details-list li {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

ul.details-list > li > span:first-child {
  color: unset;
}

ul.details-list > li > span:last-child {
  _text-align: right;
}

ul.details-list > li > span:last-child > div {
  font-weight: 500;
}

ul.details-list > li > span:last-child > div::before {
  content: "+ ";
  color: hsl(141.3, 45.1%, 47.8%);
  font-weight: 700;
}

.img-container > img {
  width: 100%;
  aspect-ratio: 400 / 275;
  border-radius: 10px;
  border-bottom: 2px solid hsl(141.3, 45.1%, 47.8%);
}

/* Users List */

ul.users > li.user-card {
  padding-inline: 0.5rem;
  border: 1px solid lightgrey;
  border-radius: 10px;
  background-color: whitesmoke;
  box-shadow: 2px 2px 5px lightgrey;
}

ul.users > li.user-card > p {
  display: grid;
  grid-template-columns: 1fr 4fr;
}

ul.users > li.user-card a,
ul.users > li.user-card > h4 {
  color: hsl(141.3, 45.1%, 35.5%);
}

ul.users > li.user-card a:hover {
  color: hsl(141.3, 45.1%, 47.8%);
}

@media screen and (min-width: 768px) {
  ul {
    grid-template-columns: repeat(2, 1fr);
  }

  ul.brands {
    grid-template-columns: repeat(4, 1fr);
  }

  ul.types {
    grid-template-columns: repeat(3, 1fr);
  }

  form {
    grid-template-columns: 2fr 1fr;
  }

  form > button {
    height: 65%;
    align-self: flex-end;
  }
}

@media screen and (min-width: 992px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }

  ul.users {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1280px) {
  ul {
    grid-template-columns: repeat(4, 1fr);
  }

  ul.users {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
