<template>
  <form>
    <section class="question-list__wrapper">
      <!-- Filtern nach Car Type -->
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="car-types"
          class="question-list__btn"
        /><label class="question-list__header" for="car-types">{{
          h2filterCarType
        }}</label>
        <section class="question-list__list">
          <div>
            <ul class="question-list">
              <li
                class="question-list__item"
                v-for="carType in carTypes"
                :key="carType.id"
              >
                <input
                  type="checkbox"
                  class="capp-btn__default"
                  :name="`carType-${carType.id}`"
                  :id="`carType-${carType.id}`"
                  v-model="carType.checked"
                  @change="
                    chooseCarTypes(),
                      filterCarsByCarType(),
                      $emit('sendFilteredCars')
                  "
                />
                <label :for="`carType-${carType.id}`">{{ carType.name }}</label>
              </li>
            </ul>
            <p hidden>{{ chosenCarTypes }}</p>
          </div>
        </section>
      </article>
      <!-- Filtern nach Treibstoff-Arten -->
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="fuel-types"
          class="question-list__btn"
        /><label class="question-list__header" for="fuel-types">{{
          h2filterFuelType
        }}</label>
        <section class="question-list__list">
          <div>
            <ul class="question-list">
              <li
                class="question-list__item"
                v-for="fuelType in fuelTypes"
                :key="fuelType.id"
              >
                <input
                  type="checkbox"
                  class="capp-btn__default"
                  :name="`fuelType-${fuelType.id}`"
                  :id="`fuelType-${fuelType.id}`"
                  v-model="fuelType.checked"
                  @change="
                    chooseFuelTypes(),
                      filterCarsByFuelType(),
                      $emit('sendFilteredCars')
                  "
                />
                <label :for="`fuelType-${fuelType.id}`">{{
                  fuelType.name
                }}</label>
              </li>
            </ul>
            <p hidden>{{ chosenFuelTypes }}</p>
          </div>
        </section>
      </article>
      <!-- Filtern nach Getriebeart -->
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="allgemein"
          class="question-list__btn"
        />
        <label class="question-list__header" for="allgemein">Allgemeines</label>
        <section class="question-list__list">
          <div>
            <ul class="question-list radio-list">
              <h4>{{ h2filterGears }}</h4>
              <li
                class="question-list__item"
                v-for="gear in gears"
                :key="gear.id"
              >
                <input
                  type="radio"
                  name="filter-gear"
                  :id="gear.id"
                  :value="gear.name"
                  v-model="chosenGear"
                  class="capp-radio__default"
                  @change="filterCarsByGear(), $emit('sendFilteredCars')"
                />
                <label :for="gear.id">{{ gear.name }}</label>
              </li>
            </ul>
            <!----------------------Raucher----------------------------------->
            <ul class="radio-list question-list radio-list">
              <h4>{{ h2smoker }}</h4>
              <li class="radio-list question-list__item">
                <input
                  type="radio"
                  class="capp-radio__default"
                  name="smoker"
                  id="smoker-true"
                  value="true"
                  v-model="isSmoker"
                  @change="filterCarsBySmoking(), $emit('sendFilteredCars')"
                />
                <label for="smoker-true">Ja</label>
              </li>
              <li class="question-list__item">
                <input
                  type="radio"
                  class="capp-radio__default"
                  name="smoker"
                  id="smoker-false"
                  value="false"
                  v-model="isSmoker"
                  @change="filterCarsBySmoking(), $emit('sendFilteredCars')"
                />
                <label for="smoker-false">Nein</label>
              </li>
            </ul>
            <!----------------------Iso----------------------------------->
            <ul class="question-list">
              <h4>{{ h2isofix }}</h4>
              <li class="question-list__item">
                <input
                  type="radio"
                  class="capp-radio__default"
                  name="isofix"
                  id="isofix-true"
                  value="true"
                  v-model="hasIsofix"
                  @change="filterCarsByIsofix(), $emit('sendFilteredCars')"
                />
                <label for="isofix-true"> Ja </label>
              </li>
              <li class="question-list__item">
                <input
                  type="radio"
                  class="capp-radio__default"
                  name="isofix"
                  id="isofix-false"
                  value="false"
                  v-model="hasIsofix"
                  @change="filterCarsByIsofix(), $emit('sendFilteredCars')"
                />
                <label for="isofix-false">Nein</label>
              </li>
            </ul>
            <!----------------------Iso----------------------------------->
          </div>
        </section>
      </article>
      <!-- Filtern nach Anzahl der freien Sitze -->
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="filter-seat-count"
          class="question-list__btn"
        /><label class="question-list__header" for="filter-seat-count">{{
          h2filterSeats
        }}</label>
        <section class="question-list__list">
          <div>
            <ul class="question-list">
              <li
                class="question-list__item"
                v-for="seatCount in seatCounts"
                :key="seatCount.id"
              >
                <input
                  type="checkbox"
                  :name="seatCount.id"
                  :id="seatCount.id"
                  v-model="seatCount.checked"
                  @change="
                    chooseSeatCounts(),
                      filterCarsBySeatCount(),
                      $emit('sendFilteredCars')
                  "
                  class="capp-btn__default"
                />
                <label :for="seatCount.id">{{ seatCount.name }}</label>
              </li>
            </ul>
            <p hidden>{{ chosenSeatCounts }}</p>
          </div>
        </section>
      </article>
      <!-- Filtern ob Raucher oder Nichtraucher -->
      <!-- <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="filter-smoker"
          class="question-list__btn"
        />
        <label class="question-list__header" for="filter-smoker">{{
          h2smoker
        }}</label>
        <section class="question-list__list">
          <div>
            <ul class="radio-list question-list radio-list">
              <li class="radio-list question-list__item">
                <input
                  type="radio"
                  class="capp-radio__default"
                  name="smoker"
                  id="smoker-true"
                  value="true"
                  v-model="isSmoker"
                  @change="filterCarsBySmoking()"
                />
                <label for="smoker-true">Ja</label>
              </li>
              <li class="question-list__item">
                <input
                  type="radio"
                  class="capp-radio__default"
                  name="smoker"
                  id="smoker-false"
                  value="false"
                  v-model="isSmoker"
                  @change="filterCarsBySmoking()"
                />
                <label for="smoker-false">Nein</label>
              </li>
            </ul>
          </div>
        </section>
      </article> -->
      <!-- Filtern nach Isofix-Kindersitz-Halterung -->
      <!-- <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="filter-isofix"
          class="question-list__btn"
        />
        <label class="question-list__header" for="filter-isofix">{{
          h2isofix
        }}</label>
        <section class="question-list__list">
          <div>
            <ul class="question-list">
              <li class="question-list__item">
                <input
                  type="radio"
                  class="capp-radio__default"
                  name="isofix"
                  id="isofix-true"
                  value="true"
                  v-model="hasIsofix"
                  @change="filterCarsByIsofix()"
                />
                <label for="isofix-true"> Ja </label>
              </li>
              <li class="question-list__item">
                <input
                  type="radio"
                  class="capp-radio__default"
                  name="isofix"
                  id="isofix-false"
                  value="false"
                  v-model="hasIsofix"
                  @change="filterCarsByIsofix()"
                />
                <label for="isofix-false"> Nein</label>
              </li>
            </ul>
          </div>
        </section>
      </article> -->
      <!-- Filtern nach Mindest-Alter -->
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="filter-min-age"
          class="question-list__btn"
        /><label class="question-list__header" for="filter-min-age">{{
          h2minAge
        }}</label>
        <section class="question-list__list">
          <div>
            <ul class="question-list">
              <li
                class="question-list__item"
                v-for="minAge in minAges"
                :key="minAge.id"
              >
                <input
                  type="checkbox"
                  :name="minAge.id"
                  :id="minAge.id"
                  v-model="minAge.checked"
                  @change="
                    chooseMinAges(),
                      filterCarsByMinAge(),
                      $emit('sendFilteredCars')
                  "
                  class="capp-btn__default"
                />
                <label :for="minAge.id" class="capp-label__default">{{
                  minAge.name
                }}</label>
              </li>
            </ul>
            <p hidden>{{ chosenMinAges }}</p>
          </div>
        </section>
      </article>
      <!-- Filtern nach Kofferaum-Größe -->
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="filter-trunk-size"
          class="question-list__btn"
        /><label class="question-list__header" for="filter-trunk-size">{{
          h2filterTrunkSize
        }}</label>
        <section class="question-list__list">
          <div>
            <ul class="question-list radio-list">
              <li
                class="question-list__item"
                v-for="trunkSize in trunkSizes"
                :key="trunkSize.id"
              >
                <input
                  type="radio"
                  name="trunk-size"
                  :id="trunkSize.id"
                  :value="[trunkSize.id, trunkSize.min, trunkSize.max]"
                  v-model="chosenTrunkSize"
                  @change="filterCarsByTrunkSize(), $emit('sendFilteredCars')"
                  class="capp-radio__default"
                />
                <label :for="trunkSize.id">{{ trunkSize.id }}</label>
              </li>

              <!---------------------------------------------------------->
              <!-----------------------Helb putt---------------------------->
              <div class="capp-input__help-wrapper">
                <!-- Start: Help/Question Button -->
                <label for="help-trunk">
                  <input
                    type="checkbox"
                    name=""
                    id="help-trunk"
                    class="capp-input__help"
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-question-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
                    />
                  </svg>
                </label>
                <!-- End: Help/Question Button -->

                <!-- Start: Help/Question Information Text -->

                <!-- End: Help/Question Information Text -->
              </div>

              <!---------------------------------------------------------->
            </ul>
            <article class="helper-text">
              <ul>
                <li>
                  <p>S</p>
                  <p>170-250 Liter</p>
                </li>
                <li>
                  <p>M</p>
                  <p>251-450 Liter</p>
                </li>
                <li>
                  <p>L</p>
                  <p>451-550 Liter</p>
                </li>
                <li>
                  <p>XL</p>
                  <p>551-800 Liter</p>
                </li>
                <li>
                  <p>XXL</p>
                  <p>801-1600 Liter</p>
                </li>
                <li></li>
              </ul>
            </article>
          </div>
        </section>
      </article>
      <!-- Filtern nach Features -->
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="car-furnishing"
          class="question-list__btn"
        /><label class="question-list__header" for="car-furnishing">{{
          h2features
        }}</label>
        <section class="question-list__list">
          <div>
            <ul class="mulit-choice-list">
              <li
                class="question-list__item"
                v-for="feature in features"
                :key="feature.id"
              >
                <input
                  type="checkbox"
                  class="capp-btn__default"
                  :name="`feature-${feature.id}`"
                  :id="`feature-${feature.id}`"
                  v-model="feature.checked"
                  @change="chooseFeatures()"
                />
                <label :for="`feature-${feature.id}`">{{ feature.name }}</label>
              </li>
            </ul>
            <p hidden>{{ chosenFeatures }}</p>
          </div>
        </section>
      </article>
      <!-- Filtern nach Postleitzahl (zipcode) -->
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="filter-zipcode"
          class="question-list__btn"
        /><label class="question-list__header" for="filter-zipcode">{{
          h2zipcode
        }}</label>
        <section class="question-list__list">
          <div>
            <ul class="question-list radio-list">
              <li
                class="question-list__item"
                v-for="zipcode in zipcodes"
                :key="zipcode"
              >
                <input
                  type="radio"
                  name="zipcode"
                  :id="`zipcode-${zipcode}`"
                  :value="zipcode"
                  v-model="chosenZipCode"
                  class="capp-radio__default"
                  @change="filterCarsByZipCode(), $emit('sendFilteredCars')"
                />
                <label :for="`zipcode-${zipcode}`" class="capp-label__default"
                  >{{ zipcode }}xxxx</label
                >
              </li>
            </ul>
          </div>
        </section>
      </article>
    </section>
  </form>

  <!-- 
  <ul>
    <li
      v-for="filteredCar in filteredCars"
      :key="filteredCar.id"
      style="margin-bottom: 2rem"
    >
      {{ filteredCar.car_types.brands.brand_name }}
      {{ filteredCar.car_types.car_type_name }} <br />
      {{ filteredCar.car_types.category }} <br />
      {{ filteredCar.users.address }}, {{ filteredCar.users.zipcode }}
      {{ filteredCar.users.city }} <br />
      Kofferraum-Volumen: {{ filteredCar.trunk_volume_in_liters }} l<br />
      Anzahl Sitze: {{ filteredCar.count_of_seats }}<br />
      Getriebe: {{ filteredCar.gear }}<br />
      Treibstoff: {{ filteredCar.fuel_type }}<br />
      Rauchen erlaubt: {{ filteredCar.is_smoker }}<br />
      Isofix vorhanden: {{ filteredCar.has_isofix }}<br />
      Mindestalter: {{ filteredCar.min_age }}
    </li>
  </ul>
  -->
</template>

<script>
import { supabase } from "../lib/supabaseClient";
import CheckBox from "./input-elements/CheckBox.vue";
import RadioButton from "./input-elements/RadioButton.vue";
export default {
  emits: ["sendFilteredCars"],
  components: { CheckBox, RadioButton },
  data() {
    return {
      title: "Filtern nach...",
      h2filterCarType: "Auto-Typen",
      h2filterFuelType: "Treibstoff-Arten",
      h2filterGears: "Getriebe-Art",
      h2minAge: "Mindest-Alter",
      h2filterTrunkSize: "Kofferraum-Größe",
      h2filterTrunkSizes: "Kofferraum-Größen",
      h2filterSeats: "Anzahl Sitze",
      h2features: "Ausstattung",
      h2smoker: "Ist Rauchen im Auto erlaubt?",
      h2isofix: "Isofix Kindersitz-Halterung vorhanden?",
      h2zipcode: "Postleitzahl",
      isSmoker: "",
      hasIsofix: "",
      //(filtered) cars -------------------------------
      cars: null,
      filteredCars: null,
      filteredCarTypes: null,
      filteredUsers: null,
      //carTypes -------------------------------
      carTypes: [
        {
          id: 1,
          name: "Bus",
          iconSource: "Bus.svg",
          checked: false,
        },
        {
          id: 2,
          name: "Cabrio",
          iconSource: "Cabrio.svg",
          checked: false,
        },
        {
          id: 3,
          name: "Kleinwagen",
          iconSource: "Kleinwagen.svg",
          checked: false,
        },
        {
          id: 4,
          name: "Kombi",
          iconSource: "Combi.svg",
          checked: false,
        },
        {
          id: 5,
          name: "Limousine",
          iconSource: "Limousine.svg",
          checked: false,
        },
        {
          id: 6,
          name: "Pickup",
          iconSource: "Pickup.svg",
          checked: false,
        },
        {
          id: 7,
          name: "SUV",
          iconSource: "Suv.svg",
          checked: false,
        },
        {
          id: 8,
          name: "Transporter",
          iconSource: "Transporter.svg",
          checked: false,
        },
        {
          id: 9,
          name: "Van",
          iconSource: "Bus.svg",
          checked: false,
        },
      ],
      chosenCarTypes: [],
      chosenCarTypeNames: [],
      //fuelTypes -------------------------------
      fuelTypes: [
        {
          id: "autogas",
          name: "Autogas",
          iconSource: "Autogas.svg",
          checked: false,
        },
        {
          id: "benzin",
          name: "Benzin",
          iconSource: "Gas.svg",
          checked: false,
        },
        {
          id: "diesel",
          name: "Diesel",
          iconSource: "Diesel.svg",
          checked: false,
        },
        {
          id: "electric",
          name: "Elektro",
          iconSource: "Electro.svg",
          checked: false,
        },
        {
          id: "hybrid",
          name: "Hybrid",
          iconSource: "Hybrid.svg",
          checked: false,
        },
        {
          id: "h2",
          name: "Wasserstoff",
          iconSource: "Wasserstoff.svg",
          checked: false,
        },
      ],
      chosenFuelTypes: [],
      chosenFuelTypeNames: [],
      //gear -------------------------------
      gears: [
        {
          id: "automatic",
          name: "Automatik",
        },
        {
          id: "schaltung",
          name: "Schaltung",
        },
      ],
      chosenGear: "",
      //seatCounts -------------------------------
      seatCounts: [
        {
          id: 2,
          name: "2 Sitze",
          checked: false,
        },
        {
          id: 4,
          name: "4 Sitze",
          checked: false,
        },
        {
          id: 5,
          name: "5 Sitze",
          checked: false,
        },
        {
          id: 6,
          name: "6 und mehr",
          checked: false,
        },
      ],
      chosenSeatCounts: [],
      chosenSeatCountIDs: [],
      //minAges -------------------------------
      minAges: [
        {
          id: 18,
          name: "18 Jahre",
          checked: false,
        },
        {
          id: 21,
          name: "21 Jahre",
          checked: false,
        },
        {
          id: 25,
          name: "25 Jahre",
          checked: false,
        },
      ],
      chosenMinAges: [],
      chosenMinAgeIDs: [],
      //trunkSizes -------------------------------
      trunkSizes: [
        {
          id: "S",
          name: "170-250 Liter",
          min: 170,
          max: 250,
          iconSource: "S-trunk.svg",
          checked: false,
        },
        {
          id: "M",
          name: "251-450 Liter",
          min: 251,
          max: 450,
          iconSource: "M-trunk.svg",
          checked: false,
        },
        {
          id: "L",
          name: "451-550 Liter",
          min: 451,
          max: 550,
          iconSource: "L-trunk.svg",
          checked: false,
        },
        {
          id: "XL",
          name: "551-800 Liter",
          min: 551,
          max: 800,
          iconSource: "XL-trunk.svg",
          checked: false,
        },
        {
          id: "XXL",
          name: "801-1600 Liter",
          min: 801,
          max: 1600,
          iconSource: "XXL-trunk.svg",
          checked: false,
        },
      ],
      chosenTrunkSize: "",
      //zipcodes -------------------------------
      zipcodes: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      chosenZipCode: "",
      //features -------------------------------
      features: [],
      chosenFeatures: [],
    };
  },
  watch: {
    filteredCars(newFilteredData) {
      const checkChosenCarTypes = this.chosenCarTypes;
      const checkChosenFuelTypes = this.chosenFuelTypes;
      const checkChosenSeatCounts = this.chosenSeatCounts;
      const checkChosenZipCode = this.chosenZipCode;
      this.$emit("sendFilteredCars", {
        newFilteredData,
        checkChosenCarTypes,
        checkChosenFuelTypes,
        checkChosenSeatCounts,
        checkChosenZipCode,
      });
    },
  },
  mounted() {
    this.getFeatures();
  },
  methods: {
    async getFeatures() {
      const { data } = await supabase.from("features").select();
      const carFeaturesFromDB = data;
      for (const item of carFeaturesFromDB) {
        this.features.push({
          id: item.id,
          name: item.feature_name,
          checked: false,
        });
      }
    },
    //Choose Functions
    //Choose Car Types
    chooseCarTypes() {
      this.carTypes.forEach((carType) => {
        carType.checked != carType.checked;
        if (
          carType.checked === true &&
          !this.chosenCarTypes.includes(carType)
        ) {
          this.chosenCarTypes.push(carType);
        }
      });
      this.chosenCarTypes = this.chosenCarTypes.filter((carType) => {
        return carType.checked === true;
      });
      this.chosenCarTypeNames = this.chosenCarTypes.map((chosenCarType) => {
        return chosenCarType.name;
      });
    },
    //Choose Fuel Types
    chooseFuelTypes() {
      this.fuelTypes.forEach((fuelType) => {
        fuelType.checked != fuelType.checked;
        if (
          fuelType.checked === true &&
          !this.chosenFuelTypes.includes(fuelType)
        ) {
          this.chosenFuelTypes.push(fuelType);
        }
      });
      this.chosenFuelTypes = this.chosenFuelTypes.filter((fuelType) => {
        return fuelType.checked === true;
      });
      this.chosenFuelTypeNames = this.chosenFuelTypes.map((chosenFuelType) => {
        return chosenFuelType.name;
      });
    },
    //Choose Seat Counts
    chooseSeatCounts() {
      this.seatCounts.forEach((seatCount) => {
        seatCount.checked != seatCount.checked;
        if (
          seatCount.checked === true &&
          !this.chosenSeatCounts.includes(seatCount)
        ) {
          this.chosenSeatCounts.push(seatCount);
        }
      });
      this.chosenSeatCounts = this.chosenSeatCounts.filter((seatCount) => {
        return seatCount.checked === true;
      });
      this.chosenSeatCountIDs = this.chosenSeatCounts.map((chosenSeatCount) => {
        return chosenSeatCount.id;
      });
    },
    //Choose MinAges
    chooseMinAges() {
      this.minAges.forEach((minAge) => {
        minAge.checked != minAge.checked;
        if (minAge.checked === true && !this.chosenMinAges.includes(minAge)) {
          this.chosenMinAges.push(minAge);
        }
      });
      this.chosenMinAges = this.chosenMinAges.filter((minAge) => {
        return minAge.checked === true;
      });
      this.chosenMinAgeIDs = this.chosenMinAges.map((chosenMinAge) => {
        return chosenMinAge.id;
      });
    },
    //Choose Features
    chooseFeatures() {
      this.features.forEach((feature) => {
        feature.checked != feature.checked;
        if (
          feature.checked === true &&
          !this.chosenFeatures.includes(feature)
        ) {
          this.chosenFeatures.push(feature);
        }
      });
      this.chosenFeatures = this.chosenFeatures.filter((feature) => {
        return feature.checked === true;
      });
    },
    //Filter Functions
    //chosenFuelTypeNames
    async filterCarsByFuelType() {
      const { data } = await supabase
        .from("cars")
        .select(
          `*,
          users (id, username, firstname, lastname, address, zipcode, city),
          car_types ( id, car_type_name, category, brand_id, brands ( id, brand_name ) ),
          cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
        )
        .in("fuel_type", this.chosenFuelTypeNames);
      this.filteredCars = data;
    },
    //chosenGear
    async filterCarsByGear() {
      const { data } = await supabase
        .from("cars")
        .select(
          `*,
          users (id, username, firstname, lastname, address, zipcode, city),
          car_types ( id, car_type_name, category, brand_id, brands ( id, brand_name ) ),
          cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
        )
        .eq("gear", this.chosenGear);
      this.filteredCars = data;
    },
    //hasIsofix
    async filterCarsByIsofix() {
      const { data } = await supabase
        .from("cars")
        .select(
          `*,
          users (id, username, firstname, lastname, address, zipcode, city),
          car_types ( id, car_type_name, category, brand_id, brands ( id, brand_name ) ),
          cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
        )
        .eq("has_isofix", this.hasIsofix);
      this.filteredCars = data;
    },
    //isSmoker
    async filterCarsBySmoking() {
      const { data } = await supabase
        .from("cars")
        .select(
          `*,
          users (id, username, firstname, lastname, address, zipcode, city),
          car_types ( id, car_type_name, category, brand_id, brands ( id, brand_name ) ),
          cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
        )
        .eq("is_smoker", this.isSmoker);
      this.filteredCars = data;
    },
    //chosenSeatCountIDs
    async filterCarsBySeatCount() {
      if (this.chosenSeatCountIDs.includes(6)) {
        const { data } = await supabase
          .from("cars")
          .select(
            `*,
          users (id, username, firstname, lastname, address, zipcode, city),
          car_types ( id, car_type_name, category, brand_id, brands ( id, brand_name ) ),
          cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
          )
          .or(
            "count_of_seats.in.(" +
              this.chosenSeatCountIDs +
              "), count_of_seats.gte.6"
          );
        this.filteredCars = data;
      } else {
        const { data } = await supabase
          .from("cars")
          .select(
            `*,
          users (id, username, firstname, lastname, address, zipcode, city),
          car_types ( id, car_type_name, category, brand_id, brands ( id, brand_name ) ),
          cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
          )
          .in("count_of_seats", this.chosenSeatCountIDs);
        this.filteredCars = data;
      }
    },
    //chosenMinAgeIDs
    async filterCarsByMinAge() {
      const { data } = await supabase
        .from("cars")
        .select(
          `*,
          users (id, username, firstname, lastname, address, zipcode, city),
          car_types ( id, car_type_name, category, brand_id, brands ( id, brand_name ) ),
          cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
        )
        .in("min_age", this.chosenMinAgeIDs);
      this.filteredCars = data;
    },
    //chosenTrunkSize
    async filterCarsByTrunkSize() {
      const { data } = await supabase
        .from("cars")
        .select(
          `*,
          users (id, username, firstname, lastname, address, zipcode, city),
          car_types ( id, car_type_name, category, brand_id, brands ( id, brand_name ) ),
          cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
        )
        .gte("trunk_volume_in_liters", this.chosenTrunkSize[1])
        .lte("trunk_volume_in_liters", this.chosenTrunkSize[2]);
      this.filteredCars = data;
    },
    //chosenCarTypeNames
    async filterCarsByCarType() {
      const { data } = await supabase
        .from("car_types")
        .select(
          `*, brands(brand_name), 
          cars(
            *, 
            users(id, username, firstname, lastname, address, zipcode, city), 
            car_types(car_type_name, category, brands(brand_name)), 
            cars_features(id, car_id, feature_id, features(id, feature_name))
          )`
        )
        .in("category", this.chosenCarTypeNames);

      this.filteredCarTypes = data;

      this.filteredCarTypes = this.filteredCarTypes.filter(
        (filteredCarType) => {
          return filteredCarType.cars.length > 0;
        }
      );

      this.filteredCars = [];

      this.filteredCarTypes.forEach((filteredCarType) => {
        filteredCarType.cars.forEach((car) => {
          this.filteredCars.push(car);
        });
      });
    },
    //chosenZipCode
    async filterCarsByZipCode() {
      const { data } = await supabase
        .from("users")
        .select(
          `*, 
          cars(
            *, 
            users(username, firstname, lastname, address, zipcode, city), 
            car_types(car_type_name, category, brands(brand_name)), 
            cars_features(id, car_id, feature_id, features(id, feature_name))
          )`
        )
        .like("zipcode", `${this.chosenZipCode}%`);
      this.filteredUsers = data;

      this.filteredUsers = this.filteredUsers.filter((filteredUser) => {
        return filteredUser.cars.length > 0;
      });

      this.filteredCars = [];

      this.filteredUsers.forEach((filteredUser) => {
        filteredUser.cars.forEach((car) => {
          this.filteredCars.push(car);
        });
      });
    },
  },
};
</script>

<style scoped>
/* List Elements */
.question-list__wrapper {
  /* border-radius: 1rem; */
  overflow: hidden;
  width: 95%;
  margin-top: 1.5rem;
  margin-inline: auto;
  background: var(--filter-menue-bg);
}

.question-list__header,
.question-list__item,
.question-list__header::after {
  cursor: pointer;
}

.question-list__header {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: var(--xs-pad);
  padding-inline: 1rem;
  font-size: var(--font-list-label-s);
  color: var(--text-light);
  background: var(--filter-menue-bg);
  border-bottom: 1px solid var(--clr-brd);
}

.question-list__btn {
  all: unset;
  position: absolute;
  top: -9999px;
}

.question-list__header::after {
  content: "";
  position: absolute;
  display: block;
  width: 0.4rem;
  height: 1.1rem;
  top: 50%;
  right: calc(2% + 1.5vw);
  translate: 0% -50%;
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  transform-origin: center;
  transition: rotate 0.3s ease-out;
  background: var(--list-default);
}

.question-list__categorie > .question-list__list > * {
  overflow: hidden;
  width: 100%;
  list-style-type: none;
  background: var(--clr-sur-d);
  border-radius: 0 0 2rem 2rem;
  padding-inline: var(--xs-marg);
}

ul.question-list {
  position: relative;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding-bottom: 0.5rem;
}
ul h4 {
  color: var(--primary-middle);
  border-bottom: 1px solid var(--primary-middle);
  padding-bottom: 0.3rem;
  padding-top: 0.3rem;
  opacity: 0.7;
  text-align: center;
  grid-column: 1/4;
  font-size: var(--font-list-label-xs);
}

.mulit-choice-list {
  display: grid;
  list-style-type: none;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* .padding-top {
  padding-top: 1rem;
} */

.question-list__list {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
}

.question-list__btn:checked ~ .question-list__list {
  display: grid;
  grid-template-rows: 1fr;
  background: var(--clr-sur-d);

  padding-bottom: var(--xs-pad);
  border-radius: 0 0 var(--m-brd-rad) var(--m-brd-rad);
}
.question-list__btn:checked ~ .question-list__header {
  border: none;
}
.question-list__btn:checked ~ .question-list__header::after {
  background: var(--primary-middle);
  rotate: 90deg;
}
.question-list__item {
  padding-block: var(--xs-marg);
  margin-inline: auto;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;

  padding-inline: 1rem;
}

/* .question-list__item.personal-item > label {
  display: block;
} */

label {
  color: var(--text-light);
  font-size: var(--font-list-label-s);
  transition: color 0.2s ease-in-out;
  letter-spacing: 0.05rem;
  width: max-content;
}
label:has(.capp-radio__default:checked) {
  color: var(--text-light);
  font-size: var(--font-list-label-s);
  transition: color 0.2s ease-in-out;
  letter-spacing: 0.05rem;
  width: max-content;
}

/* Input Elements */
/* Radio Buttons */
input[type="radio"],
input[type="checkbox"] {
  accent-color: var(--primary-dark);
}

.capp-radio__default {
  all: unset;
  appearance: none;
  width: 0;
  height: 0;
  border-radius: var(--circle-radius);
  margin: var(--xs-marg);
  border: var(--s-brd) solid var(--clr-trans);
  position: relative;
}
.capp-radio__default::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 0rem;
  translate: -50% -50%;
  width: var(--btn-height-s);
  height: var(--btn-height-s);
  transition: 0.2s;
  border-radius: var(--circle-radius);
  outline: var(--s-brd) solid var(--text-light);
  outline-offset: 0px;
}
.capp-radio__default:checked::after {
  background: var(--primary-mid);
  outline-offset: 4px;
  outline: 1px solid var(--primary-mid);
}
.capp-radio__default:checked + label {
  color: var(--text-mid);
}

/* ================  Checkboxen ====================*/
.capp-btn__default {
  --after-heigth: 1.2rem;
  cursor: pointer;
  appearance: none;
  display: block;
  position: relative;
  width: clamp(2.5rem, 10vw, 3rem);

  height: calc(var(--after-heigth) + 0.3rem);
  border-radius: var(--m-brd-rad);

  background: var(--check-default);
  transition: background-color 0.1s ease-out;
}

.capp-btn__default::after {
  content: "";
  position: absolute;
  display: block;
  top: 50%;
  left: 3%;
  translate: 10% -50%;
  height: var(--after-heigth);
  aspect-ratio: 1;
  border-radius: var(--circle-radius);
  background: var(--clr-after-btn);
  transition-duration: 0.2s, 0.2s;
  transition-property: background-color, translate;
}
.capp-btn__default:checked {
  background-color: var(--check-checked);
}
.capp-btn__default:checked::after {
  translate: 90% -50%;
  transition: 0.3s ease-out;
  background-color: var(--clr-after-btn);
}
.capp-btn__default:checked + label {
  color: var(--text-mid);
}
/*================================================*/
.capp-input__help-wrapper {
  position: absolute;

  top: 60%;
  left: 78%;
  display: grid;
  width: 4rem;
  height: 4rem;
  place-content: center;
  margin-left: 1rem;
}
.capp-input__help {
  width: calc(var(--s-font) * 2);
  height: calc(var(--s-font) * 2);
  padding-top: 0.5rem;
  all: unset;
}
#help-trunk.label {
  display: block;
}
#help-trunk:checked ~ svg {
  fill: var(--primary-middle);
}
.capp-input__help ~ svg {
  fill: var(--list-default);
  /* position: relative; */
  width: 1.8rem;
  height: 1.8rem;
}
form:has(#help-trunk:checked) .helper-text {
  translate: 160% 0%;
}
.helper-text {
  position: absolute;
  top: 30%;
  left: -90%;

  display: block;
  background: var(--clr-sur-l);
  color: var(--text-light);
  border-radius: var(--s-brd-rad);
  width: 65vw;
  height: max-content;
  padding: var(--s-pad);
  text-align: start;
  z-index: 15;
  transition: translate 0.3s ease-in-out;
  box-shadow: 0 0 10px var(--foot-shd-d), 0 0 50px var(--foot-shd-d);
}
.helper-text ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
}
.helper-text ul li {
  display: inline-flex;
  gap: 1rem;
  width: 100%;
  padding-inline: 1rem;
  font-size: var(--font-list-label);
  padding-block: 0.2rem;
}
.helper-text ul li:nth-child(1),
.helper-text ul li:nth-child(2),
.helper-text ul li:nth-child(3),
.helper-text ul li:nth-child(4) {
  border-bottom: 1px solid var(--clr-brd);
}
.helper-text ul li p:first-of-type {
  width: 20%;
}
.helper-text ul li p:last-of-type {
  width: 80%;
  text-align: end;
}

@media screen and (min-width: 900px) {
  .question-list__item:hover,
  .question-list__header:hover {
    background: var(--list-hover);
  }
  .capp-btn__default:checked::after {
    translate: 127% -50%;
  }
}
</style>
