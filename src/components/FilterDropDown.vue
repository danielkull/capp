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
                  @change="chooseCarTypes()"
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
                  @change="chooseFuelTypes()"
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
          id="gears"
          class="question-list__btn"
        /><label class="question-list__header" for="gears">{{
          h2filterGears
        }}</label>
        <section class="question-list__list">
          <div>
            <p>&nbsp;</p>
            <ul class="question-list">
              <li
                class="question-list__item"
                v-for="gear in gears"
                :key="gear.id"
              >
                <input
                  type="radio"
                  name="filter-gear"
                  :id="gear.id"
                  :value="gear.id"
                  v-model="chosenGear"
                  class="capp-radio__default"
                />
                <label :for="gear.id">{{ gear.name }}</label>
              </li>
            </ul>
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
                  @change="chooseSeatCounts()"
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
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="filter-smoker"
          class="question-list__btn"
        /><label class="question-list__header" for="filter-smoker">{{
          h2smoker
        }}</label>
        <section class="question-list__list">
          <div>
            <ul class="question-list">
              <li class="question-list__item">
                <input
                  type="radio"
                  class="capp-radio__default"
                  name="smoker"
                  id="smoker-yes"
                  value="yes"
                  v-model="isSmoker"
                />
                <label for="smoker-yes">Ja</label>
              </li>
              <li class="question-list__item">
                <input
                  type="radio"
                  class="capp-radio__default"
                  name="smoker"
                  id="smoker-no"
                  value="no"
                  v-model="isSmoker"
                />
                <label for="smoker-no">Nein</label>
              </li>
            </ul>
          </div>
        </section>
      </article>
      <!-- Filtern nach Isofix-Kindersitz-Halterung -->
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="filter-isofix"
          class="question-list__btn"
        /><label class="question-list__header" for="filter-isofix">{{
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
                  id="isofix-yes"
                  value="yes"
                  v-model="hasIsofix"
                />
                <label for="isofix-yes">Ja</label>
              </li>
              <li class="question-list__item">
                <input
                  type="radio"
                  class="capp-radio__default"
                  name="isofix"
                  id="isofix-no"
                  value="no"
                  v-model="hasIsofix"
                />
                <label for="isofix-no">Nein</label>
              </li>
            </ul>
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
            <ul class="question-list">
              <li
                class="question-list__item"
                v-for="trunkSize in trunkSizes"
                :key="trunkSize.id"
              >
                <input
                  type="checkbox"
                  :name="trunkSize.id"
                  :id="trunkSize.id"
                  v-model="trunkSize.checked"
                  @change="chooseTrunkSizes()"
                  class="capp-btn__default"
                />
                <label :for="trunkSize.id"
                  >{{ trunkSize.id }} {{ trunkSize.min }}-{{
                    trunkSize.max
                  }}
                  Liter</label
                >
              </li>
            </ul>
            <p hidden>{{ chosenTrunkSizes }}</p>
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
          <ul class="question-list">
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
        </section>
      </article>
    </section>
  </form>
</template>

<script>
import { supabase } from "../lib/supabaseClient";
import CheckBox from "./input-elements/CheckBox.vue";
import RadioButton from "./input-elements/RadioButton.vue";
export default {
  components: { CheckBox, RadioButton },
  data() {
    return {
      title: "Filtern nach...",
      h2filterCarType: "Auto-Typen",
      h2filterFuelType: "Treibstoff-Arten",
      h2filterGears: "Getriebe-Art",
      h2filterTrunkSize: "Kofferraum-Größe",
      h2filterSeats: "Anzahl an freien Sitzen",
      h2features: "Ausstattung",
      h2smoker: "Raucher oder Nichtraucher?",
      h2isofix: "Isofix Kindersitz-Halterung vorhanden?",
      isSmoker: "",
      hasIsofix: "",
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
          iconSource: "Suv.svg",
          checked: false,
        },
        {
          id: 5,
          name: "Limousine",
          iconSource: "Suv.svg",
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
          iconSource: "Transporter.svg",
          checked: false,
        },
      ],
      chosenCarTypes: [],
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
          name: "6 und mehr Sitze",
          checked: false,
        },
      ],
      chosenSeatCounts: [],
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
      chosenTrunkSizes: [],
      features: [],
      chosenFeatures: [],
    };
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
    },
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
    },
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
    },
    chooseTrunkSizes() {
      this.trunkSizes.forEach((trunkSize) => {
        trunkSize.checked != trunkSize.checked;
        if (
          trunkSize.checked === true &&
          !this.chosenTrunkSizes.includes(trunkSize)
        ) {
          this.chosenTrunkSizes.push(trunkSize);
        }
      });
      this.chosenTrunkSizes = this.chosenTrunkSizes.filter((trunkSize) => {
        return trunkSize.checked === true;
      });
    },
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
    chooseItems(items, chosenItems) {
      items.forEach((item) => {
        item.checked != item.checked;
        if (item.checked === true && !chosenItems.includes(item)) {
          chosenItems.push(item);
        }
      });
      chosenItems = chosenItems.filter((item) => {
        return item.checked === true;
      });
    },
  },
};
</script>

<style scoped>
/* List Elements */
.question-list__wrapper {
  border-radius: 1rem;
  overflow: hidden;
  width: 90%;
  margin-top: 2.5rem;
  margin-inline: auto;
}

h1,
.question-list__wrapper {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  font-size: 2.25rem;
  line-height: 1.75;
  padding-inline: 5rem;
  padding-block: 0 1rem;
  color: var(--primary-mid);
}

.question-list__header,
.question-list__item,
.question-list__header::after {
  cursor: pointer;
}

.question-list__header {
  --header-question-list: clamp(1rem, 2vw, 1.5rem);
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  font-size: var(--header-question-list);
  color: var(--font-color-light);
  background: var(--secondary-light);
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
  width: 0.8rem;
  height: 1.5rem;
  top: 25%;
  right: calc(2% + 1.5vw);
  translate: 0% -50%;
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  transform-origin: center;
  transition: rotate 0.3s ease-out;
  background: var(--secondary-default);
}

.question-list__categorie > .question-list__list > * {
  overflow: hidden;
  width: 100%;
  padding-inline: var(--list-padding);
  list-style-type: none;
  background: var(--secondary-light);
  box-shadow: inset 0px 4px 5px rgba(145, 145, 145, 0.1);
}

ul.question-list {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.padding-top {
  padding-top: 1rem;
}

.question-list__list {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
}

.question-list__car-info {
  transition: grid-template-rows 0.5s ease-in-out;
}

.question-list__car-info ul.question-list {
  padding-bottom: 0.5rem;
  border-bottom: 1px dotted var(--secondary-mid);
}

.question-list__car-info h3 {
  line-height: 1.75;
  margin-top: calc(var(--list-item-padding) * 2);
  font-size: 1.35rem;
  color: var(--primary-dark);
}

.question-list__btn:checked ~ .question-list__list {
  display: grid;
  grid-template-rows: 1fr;
  background: var(--secondary-light);
  padding-block: 0rem 1rem;
}
.question-list__btn:checked ~ .question-list__header::after {
  background: var(--primary-mid);
  rotate: 90deg;
}
.question-list__item {
  padding-block: var(--list-item-padding);
  padding-inline: var(--list-item-padding);
  width: 100%;
  list-style-type: none;
  padding-left: 0;
}

.question-list__item.personal-item > label {
  display: block;
}

.question-list__item:hover,
.question-list__header:hover {
  background: var(--list-hover);
}

label {
  _font-size: 1.1rem;
  _color: var(--font-color-light);
  color: var(--primary-dark);
  padding-block: calc(var(--s-font) / 2);
  font-size: 1.15rem;
  letter-spacing: 0.1rem;
}

label > img {
  align-self: baseline;
}

/* Input Elements */
/* Radio Buttons */
input[type="radio"],
input[type="checkbox"] {
  accent-color: var(--primary-dark);
}

.capp-radio__default {
  all: unset;
  _display: block;
  width: var(--btn-height-default);
  aspect-ratio: 1;
  border-radius: var(--circle-radius);
  margin: var(--margin-default);
  border: 1px solid var(--clr-trans);
  position: relative;
}
.capp-radio__default::after {
  content: "";
  _display: block;
  position: absolute;
  top: 5%;
  left: -0.5rem;
  translate: -50% -50%;
  width: 1rem;
  height: 1rem;
  transition: 0.3s;
  border-radius: var(--circle-radius);
  outline: 2px solid var(--font-color-light);
  outline-offset: 0px;
}
.capp-radio__default:checked::after {
  background: var(--primary-mid);
  outline-offset: 4px;
  outline: 1px solid var(--primary-mid);
}

/* Input Text, Email, Tel, Password */

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"] {
  font-size: 1.1rem;
  color: black;
  padding: 0.25rem 0.35rem;
  border: 1px solid var(--secondary-mid);
  border-radius: 0.35rem;
}

input[type="text"]::placeholder,
input[type="email"]::placeholder,
input[type="password"]::placeholder,
input[type="tel"]::placeholder {
  color: var(--secondary-mid);
}

input[type="text"]:focus-within,
input[type="email"]:focus-within,
input[type="password"]:focus-within,
input[type="tel"]:focus-within {
  outline: 2px solid var(--primary-light);
}

.capp-input__default {
  display: block;
  width: 100%;
  border: 2px solid var(--clr-trans);
  border-radius: 0.5rem;
  padding-inline: 0.5rem;
  padding-block: 1rem;
  font-size: var(--m-font);
  background: var(--clr-bg-main);
  box-shadow: inset 0 5px 5px -2px var(--secondary-dark);
  color: var(--font-color-dark);
}
.capp-input__default:hover {
  cursor: pointer;
}
.capp-input__default::placeholder {
  opacity: 0.5;
}

.capp-input__default:focus {
  outline-color: var(--primary-light);
}

.capp-input__default.input__invalid {
  color: var(--error-color);
}

.capp-input__default.input__invalid:focus {
  outline-color: var(--error-color);
}

.capp-input__default ~ span {
  display: none;
}

.capp-input__default.input__invalid ~ span {
  display: block;
  color: var(--error-color);
}

span#password-toggle-text {
  font-size: 0.75rem;
  color: var(--primary-dark);
}

/* Checkboxen */
.capp-btn__default {
  cursor: pointer;
  appearance: none;
  display: block;
  position: relative;
  width: calc(var(--btn-height-default) * 1.5);
  height: calc(var(--btn-height-default) * 0.75);
  border-radius: var(--btn-height-default);
  margin-block: var(--margin-default) 5px;
  background: var(--secondary-mid);
}
.capp-btn__default::after {
  content: "";
  position: absolute;
  display: block;
  top: -2%;
  left: -10%;
  width: calc(var(--btn-height-default) * 0.75);
  aspect-ratio: 1;
  border-radius: var(--circle-radius);
  background: var(--secondary-dark);
  transition: 0.3s ease-out;
}
.capp-btn__default:checked {
  background: var(--primary-light);
}
.capp-btn__default:checked::after {
  left: 50.2%;
  transition: 0.3s ease-out;
  background: var(--primary-dark);
}

/* Select */
select {
  padding: 0.35rem 0.5rem;
  font-size: 1.1rem;
  margin-left: 0.35rem;
  border-radius: 0.25rem;
  border: 1px solid var(--secondary-mid);
  color: var(--font-color-dark);
}

select:focus-within {
  outline-color: var(--primary-mid);
}
</style>
