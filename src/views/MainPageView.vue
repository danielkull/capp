<template>
  <header class="capp-mainpage__header">
    <article class="capp-mainpage__logo-font"><h1>CAPP</h1></article>
    <article class="filter-icon__aricle">
      <span class="filter-icon__frame">
        <input type="checkbox" class="filter-icon__wrapper" id="filter-box" />
        <label for="filter-box" class="filter-box">
          <span class="filter-icon__line">
            <span class="filter-icon__ball ball-1"></span>
          </span>
          <span class="filter-icon__line line-small">
            <span class="filter-icon__ball ball-2"></span>
          </span>
          <span class="filter-icon__line">
            <span class="filter-icon__ball ball-3"></span>
          </span>
        </label>
      </span>
    </article>
    <!-- <div class="main-page__shadow"></div> -->
  </header>

  <main class="app-mainpage__main-page main-page-style">
    <section class="filter-choice"><filter-drop-down /></section>
    <section class="mainpage__card-page" v-if="cars">
      <SmallCarCard
        v-for="car in cars"
        :key="car.id"
        :brandName="car.car_types.brands.brand_name"
        :carTypeCategory="car.car_types.category"
        :carTypeName="car.car_types.car_type_name"
        :fuelTypeName="car.fuel_type"
        :trunkVolume="car.trunk_volume_in_liters"
        :carUserID="car.users.id"
        :carUserZipCode="car.users.zipcode"
        :carUserCity="car.users.city"
        :imgSource="car.img_source"
        :seatsCount="car.count_of_seats"
        :carHasIsofix="car.has_isofix"
        :carIsSmoker="car.is_smoker"
      >
        <router-link
          class="more-info"
          :to="{ name: 'carProfile', params: { id: car.id } }"
          >mehr Info</router-link
        >
      </SmallCarCard>
    </section>
    <div v-else><p>Loading Cars...</p></div>
  </main>
  <ExpandMenue />
  <MessageSettingsCard />
  <UserDataCard />
  <CarDataCard />
  <DataSafety />
  <FaqClient />
  <FaqOwner />
  <Impressum />
  <TeamSite />
  <UserRules />
  <UserData />
  <DeleteCard />
  <LogoutCard />
  <footer>
    <NavBarMenue />
  </footer>
</template>

<script>
import FilterDropDown from "@/components/FilterDropDown.vue";
import NavBarMenue from "@/components/main-component/NavBar.vue";
import SmallCarCard from "@/components/main-component/SmallCarCard.vue";
import IconType from "@/components/icon-type/IconType.vue";
import FuelType from "@/components/icon-type/fuelType.vue";
import TrunkType from "@/components/icon-type/TrunkType.vue";
import DifferentType from "@/components/icon-type/DifferentTypes.vue";
import ExpandMenue from "@/components/main-component/ExpandMenueFrame.vue";
import MessageSettingsCard from "@/components/main-component/expand-site-cards/MessageSettingsExpandCard.vue";
import UserDataCard from "@/components/main-component/expand-site-cards/UserDataExpandCard.vue";
import CarDataCard from "@/components/main-component/expand-site-cards/CarDataExpandCard.vue";
import DataSafety from "@/components/main-component/expand-site-cards/DataSafetyExpandCard.vue";
import FaqClient from "@/components/main-component/expand-site-cards/FaqClientExpandCard.vue";
import FaqOwner from "@/components/main-component/expand-site-cards/FaqOwnerExpandCard.vue";
import Impressum from "@/components/main-component/expand-site-cards/ImpressumExpandCard.vue";
import TeamSite from "@/components/main-component/expand-site-cards/TeamExpandCard.vue";
import UserRules from "@/components/main-component/expand-site-cards/UseExpandCard.vue";
import UserData from "@/components/main-component/expand-site-cards/UserDataExpandCard.vue";
import DeleteCard from "@/components/main-component/expand-site-cards/DeleteExpandCard.vue";
import LogoutCard from "@/components/main-component/expand-site-cards/DeleteExpandCard.vue";
import { supabase } from "@/lib/supabaseClient";
import { useAuthenticationStore } from "@/stores/useAuthenticationStore";

export default {
  components: {
    FilterDropDown,
    NavBarMenue,
    SmallCarCard,
    IconType,
    FuelType,
    TrunkType,
    DifferentType,
    ExpandMenue,
    MessageSettingsCard,
    UserDataCard,
    CarDataCard,
    DataSafety,
    FaqClient,
    FaqOwner,
    Impressum,
    TeamSite,
    UserRules,
    UserData,
    DeleteCard,
    LogoutCard,
  },
  data() {
    return {
      title: "Übersicht über unsere verfügbaren Autos",
      brands: null,
      carTypes: null,
      cars: null,
    };
  },
  setup() {
    const authenticationStore = useAuthenticationStore();
    return { authenticationStore };
  },
  async created() {
    await this.getSessionInfos();
  },
  mounted() {
    this.getBrands();
    this.getCarTypes();
    this.getCars();
  },
  methods: {
    async getSessionInfos() {
      await this.authenticationStore.getSession();
      await this.authenticationStore.onAuthStateChange();
    },
    async getBrands() {
      const { data } = await supabase.from("brands").select();
      this.brands = data;
    },
    async getCarTypes() {
      const { data } = await supabase
        .from("car_types")
        .select(`id, car_type_name, category, brand_id, brands ( brand_name )`)
        .order("brand_id", { ascending: true })
        .order("id", { ascending: true })
        .order("category", { ascending: true });
      this.carTypes = data;
    },
    async getCars() {
      const { data } = await supabase
        .from("cars")
        .select(
          `*, users ( id, username, firstname, lastname, address, zipcode, city ),
          car_types ( id, car_type_name, category, brand_id, brands ( id, brand_name ) ),
          cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
        )
        .order("id", { ascending: true });
      this.cars = data;
    },
  },
};
</script>

<style scoped>
/* section:target {
  translate: 10% 0;
} */
:root {
  height: 100vh;
  width: 100vw;
}

.capp-mainpage__header {
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  top: 0;
  left: 0;
  background: linear-gradient(
    to right,
    var(--clr-prime-m) 40%,
    var(--clr-prime-vd)
  );
  padding-inline: 1.2rem;
}

.capp-mainpage__header article {
  display: block;
  height: 100%;
  width: max-content;
  margin-top: 1rem;
}

.filter-icon__frame {
  display: grid;
  place-content: center;
  width: max-content;
  height: max-content;
  padding-inline: 0.5rem;
}
.capp-mainpage__logo-font {
  margin-bottom: 1.8rem;
  align-items: center;
}
.capp-mainpage__logo-font h1 {
  height: 100%;
  font-size: var(--l-font);
  font-family: var(--font-logo);
  color: var(--logo-font-color);
  font-weight: 500;
}

.app-mainpage__main-page {
  width: 100%;
  height: 100%;
  padding-inline: 0rem;
  border-radius: var(--m-brd-rad) var(--m-brd-rad) 0 0;
  margin-top: 3.8rem;
  padding-top: 2rem;
  overflow: scroll;
  position: fixed;
}
.main-page-style {
  background: var(--clr-bg);
  box-shadow: inset 10px 0px 10px rgba(0, 0, 0, 0.2);
}

main::-webkit-scrollbar {
  appearance: none;
  width: 0;
}
.main-page__shadow {
  position: absolute;
  z-index: 9;
  top: 60px;
  left: 0;
  width: 100%;
  height: 30%;
  border-radius: var(--m-brd-rad) var(--m-brd-rad) 0 0;
  /* box-shadow: inset 0px 15px 15px rgba(0, 0, 0, 0.4); */
}
.mainpage__card-page {
  width: 90%;
  margin-bottom: 5rem;
  margin-inline: auto;
}

/*=================================================================*/

/*===============footer - placegolder==========================*/

/*===============================================*/
.filter-icon__wrapper {
  position: absolute;
  top: -50%;
}
.filter-box {
  cursor: pointer;
  display: flex;
  width: 2.5rem;
  height: 3rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}
.filter-icon__line {
  display: block;
  width: 100%;
  border: 1px solid var(--clr-iconsvg);
  opacity: 0.84;

  position: relative;
}
.line-small {
  width: 80%;
  align-self: end;
}
.filter-icon__ball {
  display: block;
  width: 0.5rem;
  aspect-ratio: 1;
  border-radius: 100%;
  background: var(--clr-iconsvg);
  position: absolute;
  top: -4px;
  transition: 0.2s ease-in-out;
}
.ball-2 {
  border: 1px solid var(--clr-iconsvg);
  background: var(--clr-prime-vd);
  left: 10%;
}
.ball-1,
.ball-3 {
  left: 70%;
}

#filter-box:checked + .filter-box .ball-1,
#filter-box:checked + .filter-box .ball-3 {
  left: 10%;
}
#filter-box:checked + .filter-box .ball-2 {
  left: 70%;
}

:has(#filter-box:checked) .filter-choice {
  translate: 0 -17px;
}
/*====================================================*/

.filter-choice {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 12;
  height: max-content;
  padding-bottom: 1.5rem;
  padding-top: 0.2rem;
  width: 100%;
  translate: 0 -650px;
  transition: 0.6s ease-in-out;
  background: var(--filter-menue-bg);
  border-bottom: 2px solid var(--filter-brd);
  box-shadow: 0 0 20px var(--shd-f-h-dark), 0 0 40px var(--shd-f-h-light);
  border-radius: 0 0 1.2rem 1.2rem;
}

/* ===== Router link ===== */
a.more-info {
  display: block;
  font-size: 1rem;
  margin-top: 0.75rem;
  padding: 0.35rem 0.5rem;
  background-color: transparent;
  border: 1px solid var(--primary-dark);
  border-radius: 15px;
  text-decoration: none;
  text-align: center;
  color: var(--primary-dark);
  transition: all 0.5s steps(5);
}

a.more-info:hover {
  _color: white;
  background-color: var(--secondary-mid);
  border-color: transparent;
}
/* ======================== */

@media screen and (min-width: 900px) {
  .app-mainpage__main-page {
    width: 100%;
    height: 100%;
    padding-inline: 1rem;
    border-radius: 2rem 2rem 0 0;
    margin-top: 5rem;
  }
  .main-page__shadow {
    width: 100%;
    height: 50%;
    top: 99px;
    left: 0;
  }

  /*========================================*/
}
</style>
