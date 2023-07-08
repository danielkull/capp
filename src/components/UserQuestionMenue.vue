<template>
  <h1>
    <img
      class="capp-logo"
      src="../assets/car-icons/capp-logo.svg"
      alt="CAPP Logo"
      title="CAPP Logo"
    />
    {{ title }}
  </h1>

  <form>
    <section class="question-list__wrapper">
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="bogen1"
          class="question-list__btn"
        /><label class="question-list__header" for="bogen1">{{
          h2personal
        }}</label>
        <section class="question-list__list">
          <ul class="question-list">
            <li class="question-list__item personal-item">
              <label for="username">Nickname</label>
              <input
                type="text"
                class="capp-input__default"
                name="username"
                id="username"
                placeholder="Username"
                v-model="usernameValue"
                :class="{
                  input__invalid:
                    usernameValue.length > 0 && usernameValue.length < 5,
                }"
              />
              <span>Muss mindestens 5 Zeichen enthalten.</span>
            </li>
            <li class="question-list__item personal-item">
              <label for="password"
                >Passwort&nbsp;<span
                  id="password-toggle-text"
                  @click="togglePassword()"
                  >&lt;{{ inputTypeText }}&gt;</span
                ></label
              >
              <input
                :type="inputType"
                class="capp-input__default"
                name="password"
                id="password"
                v-model="passwordValue"
                :class="{
                  input__invalid:
                    passwordValue.length > 0 && passwordValue.length < 10,
                }"
              />
              <span>Muss mindestens 10 Zeichen enthalten.</span>
            </li>
            <li class="question-list__item personal-item">
              <label for="firstname">Vorname</label>
              <input
                type="text"
                class="capp-input__default"
                name="firstname"
                id="firstname"
                placeholder="Vorname"
                v-model="firstnameValue"
                :class="{
                  input__invalid:
                    firstnameValue.length === 1 ||
                    /[0-9!?§$%&(){}€@#]/.test(firstnameValue),
                }"
              />
              <span
                >Muss mindestens 2 Zeichen, darf keine Ziffern oder
                Sonderzeichen enthalten.</span
              >
            </li>
            <li class="question-list__item personal-item">
              <label for="lastname">Nachname</label>
              <input
                type="text"
                class="capp-input__default"
                name="lastname"
                id="lastname"
                placeholder="Nachname"
                v-model="lastnameValue"
                :class="{
                  input__invalid:
                    lastnameValue.length === 1 ||
                    /[0-9!?§$%&(){}€@#]/.test(lastnameValue),
                }"
              />
              <span
                >Muss mindestens 2 Zeichen, darf keine Ziffern oder
                Sonderzeichen enthalten.</span
              >
            </li>
            <li class="question-list__item personal-item">
              <label for="email">E-Mail</label>
              <input
                type="email"
                class="capp-input__default"
                name="email"
                id="email"
                placeholder="E-Mail"
                v-model="emailValue"
                :class="{
                  input__invalid:
                    emailValue !== '' && !emailValue.includes('@'),
                }"
              />
              <span>Muss das @-Zeichen enthalten.</span>
            </li>
            <li class="question-list__item personal-item">
              <label for="phone">Telefon</label>
              <input
                type="tel"
                class="capp-input__default"
                name="phone"
                id="phone"
                placeholder="Telefon"
                v-model="phoneValue"
                :class="{ input__invalid: /[a-zA-Z]/.test(phoneValue) }"
              />
              <span>Darf keine Buchstaben enthalten.</span>
            </li>
            <li class="question-list__item personal-item">
              <label for="address">Straße, Haus-Nr.</label>
              <input
                type="text"
                class="capp-input__default"
                name="address"
                id="address"
                placeholder="Straße, Haus-Nr."
                v-model="addressValue"
                :class="{ input__invalid: addressValue.length === 1 }"
              />
              <span>Muss mindestens 2 Zeichen enthalten.</span>
            </li>
            <li class="question-list__item personal-item">
              <label for="zipcode">PLZ</label>
              <input
                type="text"
                class="capp-input__default"
                name="zipcode"
                id="zipcode"
                placeholder="PLZ"
                v-model="zipcodeValue"
                :class="{
                  input__invalid:
                    zipcodeValue.length > 0 && zipcodeValue.length < 4,
                }"
              />
              <span>Muss mindestens 4 Zeichen enthalten.</span>
            </li>
            <li class="question-list__item personal-item">
              <label for="city">Wohnort</label>
              <input
                type="text"
                class="capp-input__default"
                name="city"
                id="city"
                placeholder="Ort"
                v-model="cityValue"
                :class="{
                  input__invalid:
                    cityValue.length === 1 ||
                    /[0-9!?§$%&(){}€@#]/.test(cityValue),
                }"
              />
              <span
                >Muss mindestens 2 Zeichen, darf keine Ziffern oder
                Sonderzeichen enthalten.</span
              >
            </li>
          </ul>
        </section>
      </article>
      <!------------------------------------------------------------>
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="bogen4"
          class="question-list__btn"
        /><label class="question-list__header" for="bogen4">{{
          h2textInfo
        }}</label>
        <section class="question-list__list question-list__car-info">
          <div>
            <h3>Typ</h3>
            <ul class="question-list">
              <li
                class="question-list__item"
                v-for="carType in carTypes"
                :key="carType.id"
              >
                <input
                  class="capp-radio__default"
                  type="radio"
                  name="car-type"
                  :id="`car-type-${carType.id}`"
                  :value="carType.name"
                  v-model="chosenCarType"
                />
                <label :for="`car-type-${carType.id}`">{{
                  carType.name
                }}</label>
              </li>
            </ul>

            <h3>Treibstoff</h3>
            <ul class="question-list">
              <li
                class="question-list__item"
                v-for="fuelType in fuelTypes"
                :key="fuelType.id"
              >
                <input
                  type="radio"
                  class="capp-radio__default"
                  name="fuel-type"
                  :id="`fuel-${fuelType.id}`"
                  :value="fuelType.id"
                  v-model="chosenFuelType"
                />
                <label :for="`fuel-${fuelType.id}`">{{ fuelType.name }}</label>
              </li>
            </ul>

            <h3>Schaltung</h3>
            <ul class="question-list">
              <li
                class="question-list__item"
                v-for="gear in gears"
                :key="gear.id"
              >
                <input
                  type="radio"
                  class="capp-radio__default"
                  name="transmission-type"
                  :id="`trans-${gear.id}`"
                  :value="gear.id"
                  v-model="chosenGear"
                />
                <label :for="`trans-${gear.id}`">{{ gear.name }}</label>
              </li>
            </ul>

            <h3>Sitze</h3>
            <ul class="question-list">
              <li
                class="question-list__item"
                v-for="seatCount in seatCounts"
                :key="seatCount.id"
              >
                <input
                  type="radio"
                  class="capp-radio__default"
                  name="car-seats"
                  :id="`seats-value-${seatCount.id}`"
                  :value="seatCount.id"
                  v-model="chosenSeatCount"
                />
                <label :for="`seats-value-${seatCount.id}`">{{
                  seatCount.name
                }}</label>
              </li>
            </ul>

            <h3>Raucher</h3>
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

            <h3>Isofix Kindersitz-Halterung</h3>
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

      <!------------------------------------------------------------>
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="car-furnishing"
          class="question-list__btn"
        /><label class="question-list__header" for="car-furnishing">{{
          h2textFeatures
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
            <!-- Sonstiges -->
            <li class="question-list__item">
              <p>&nbsp;</p>
              <label for="misc">Sonstiges</label>
              <input
                type="text"
                class="capp-input__default"
                name="misc"
                id="misc"
                v-model="miscellaneous"
                placeholder="Sonstiges"
              />
            </li>
          </ul>
          <p hidden>{{ chosenFeatures }}</p>
        </section>
      </article>
      <!------------------------------------------------------------>
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="car-trunk"
          class="question-list__btn"
        /><label class="question-list__header" for="car-trunk">{{
          h2textTrunkSize
        }}</label>
        <section class="question-list__list">
          <ul class="question-list">
            <li
              class="question-list__item"
              v-for="luggageTrunkSize in luggageTrunkSizes"
              :key="luggageTrunkSize.id"
            >
              <input
                class="capp-radio__default"
                type="radio"
                name="trunk-size"
                :id="luggageTrunkSize.id"
                :value="[
                  luggageTrunkSize.id,
                  luggageTrunkSize.min,
                  luggageTrunkSize.max,
                ]"
                v-model="chosenTrunkSize"
              />
              <label :for="luggageTrunkSize.id"
                >{{ luggageTrunkSize.id }} {{ luggageTrunkSize.min }}-{{
                  luggageTrunkSize.max
                }}
                Liter</label
              >
            </li>
            <!-- Eigene Angaben -->
            <li class="question-list__item">
              <label for="own-trunk-size">Eigene Angaben</label>
              <input
                type="text"
                class="capp-input__default"
                name="own-trunk-size"
                id="own-trunk-size"
                v-model="ownTrunkSize"
                placeholder="Eigene Angaben"
              />
            </li>
          </ul>
        </section>
      </article>
      <!------------------------------------------------------------>
      <article class="question-list__categorie">
        <input
          type="checkbox"
          name="question"
          id="bogen5"
          class="question-list__btn"
        /><label class="question-list__header" for="bogen5">{{
          h2textLimitations
        }}</label>
        <section class="question-list__list">
          <div>
            <p>&nbsp;</p>
            <p>
              Gibt es Einschränkungen für die Vermietung Deines Autos? Dann
              kannst Du sie hier auswählen:
            </p>
            <ul class="question-list">
              <li
                class="question-list__item"
                v-for="limitation in limitations"
                :key="limitation.id"
              >
                <input
                  type="checkbox"
                  class="capp-btn__default"
                  :name="`limit-${limitation.id}`"
                  :id="`limit-${limitation.id}`"
                  v-model="limitation.checked"
                  @change="chooseLimitations()"
                />
                <label :for="`limit-${limitation.id}`">
                  {{ limitation.name }}</label
                >
              </li>
              <li class="question-list__item">
                <label for="min-age">Mindestalter</label>
                <select name="min-age" id="min-age" v-model="chosenMinAge">
                  <option
                    v-for="minAge in minAges"
                    :key="minAge.id"
                    :value="minAge.id"
                  >
                    {{ minAge.name }}
                  </option>
                </select>
              </li>
            </ul>
            <p hidden>{{ chosenLimitations }}</p>
          </div>
        </section>
      </article>
    </section>
  </form>
</template>
<script>
import { supabase } from "../lib/supabaseClient";
import CheckBox from "./input-elements/CheckBox.vue";
export default {
  components: { CheckBox },
  data() {
    return {
      title: "CAPP Fragebogen",
      h2personal: "Persönliche Informationen",
      h2textInfo: "Angaben zum Fahrzeug",
      h2textFeatures: "Ausstattung",
      h2textTrunkSize: "Kofferraum-Größen",
      h2textLimitations: "Einschränkungen für die Vermietung",
      inputType: "password",
      inputTypeText: "show Password",
      usernameValue: "",
      passwordValue: "",
      firstnameValue: "",
      lastnameValue: "",
      emailValue: "",
      phoneValue: "",
      addressValue: "",
      zipcodeValue: "",
      cityValue: "",
      chosenCarType: "",
      chosenFuelType: "",
      chosenGear: "",
      chosenSeatCount: "",
      isSmoker: "",
      hasIsofix: "",
      chosenTrunkSize: "",
      ownTrunkSize: "",
      chosenFeatures: [],
      miscellaneous: "",
      chosenLimitations: [],
      chosenMinAge: "",
      carTypes: [
        {
          id: 1,
          name: "Bus",
          iconSource: "Bus.svg",
        },
        {
          id: 2,
          name: "Cabrio",
          iconSource: "Cabrio.svg",
        },
        {
          id: 3,
          name: "Kleinwagen",
          iconSource: "Cabrio.svg",
        },
        {
          id: 4,
          name: "Kombi",
          iconSource: "Suv.svg",
        },
        {
          id: 5,
          name: "Limousine",
          iconSource: "Suv.svg",
        },
        {
          id: 6,
          name: "Pickup",
          iconSource: "Pickup.svg",
        },
        {
          id: 7,
          name: "SUV",
          iconSource: "Suv.svg",
        },
        {
          id: 8,
          name: "Transporter",
          iconSource: "Transporter.svg",
        },
        {
          id: 9,
          name: "Van",
          iconSource: "Transporter.svg",
        },
      ],
      fuelTypes: [
        {
          id: "autogas",
          name: "Autogas",
          iconSource: "Autogas.svg",
        },
        {
          id: "benzin",
          name: "Benzin",
          iconSource: "Gas.svg",
        },
        {
          id: "diesel",
          name: "Diesel",
          iconSource: "Diesel.svg",
        },
        {
          id: "electric",
          name: "Elektro",
          iconSource: "Electro.svg",
        },
        {
          id: "hybrid",
          name: "Hybrid",
          iconSource: "Hybrid.svg",
        },
        {
          id: "h2",
          name: "Wasserstoff",
          iconSource: "Wasserstoff.svg",
        },
      ],
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
      seatCounts: [
        {
          id: 2,
          name: "2 Sitze",
        },
        {
          id: 4,
          name: "4 Sitze",
        },
        {
          id: 5,
          name: "5 Sitze",
        },
        {
          id: 6,
          name: "6 und mehr Sitze",
        },
      ],
      features: [],
      luggageTrunkSizes: [
        {
          id: "S",
          name: "170-250 Liter",
          min: 170,
          max: 250,
          iconSource: "S-trunk.svg",
        },
        {
          id: "M",
          name: "251-450 Liter",
          min: 251,
          max: 450,
          iconSource: "M-trunk.svg",
        },
        {
          id: "L",
          name: "451-550 Liter",
          min: 451,
          max: 550,
          iconSource: "L-trunk.svg",
        },
        {
          id: "XL",
          name: "551-800 Liter",
          min: 551,
          max: 800,
          iconSource: "XL-trunk.svg",
        },
        {
          id: "XXL",
          name: "801-1600 Liter",
          min: 801,
          max: 1600,
          iconSource: "XXL-trunk.svg",
        },
      ],
      limitations: [
        {
          id: 1,
          name: "Kinder im Auto erlauben",
          checked: false,
          iconSource: "Isofix.svg",
        },
        {
          id: 2,
          name: "Haustiere im Auto erlauben",
          checked: false,
          iconSource: "Tiere.svg",
        },
        {
          id: 3,
          name: "Auslandsfahrten erlauben",
          checked: false,
          iconSource: "Car-symbol.svg",
        },
        {
          id: 4,
          name: "Rauchen erlauben",
          checked: false,
          iconSource: "Raucher.svg",
        },
      ],
      minAges: [
        {
          id: 0,
          name: "keine Angabe",
        },
        {
          id: 18,
          name: "18 Jahre",
        },
        {
          id: 21,
          name: "21 Jahre",
        },
        {
          id: 25,
          name: "25 Jahre",
        },
      ],
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
    chooseFeatures() {
      this.features.forEach((feature) => {
        feature.checked != feature.checked;
        if (
          feature.checked === true &&
          !this.chosenFeatures.includes(feature)
        ) {
          console.log(feature.name);
          this.chosenFeatures.push(feature);
        }
      });
      this.chosenFeatures = this.chosenFeatures.filter((feature) => {
        return feature.checked === true;
      });
    },
    chooseLimitations() {
      this.limitations.forEach((limitation) => {
        limitation.checked != limitation.checked;
        if (
          limitation.checked === false &&
          !this.chosenLimitations.includes(limitation)
        ) {
          console.log(limitation.name);
          this.chosenLimitations.push(limitation);
        }
      });
      this.chosenLimitations = this.chosenLimitations.filter((limitation) => {
        return limitation.checked === false;
      });
    },
    togglePassword() {
      if (this.inputType === "password") {
        this.inputType = "text";
        this.inputTypeText = "hide Password";
      } else {
        this.inputType = "password";
        this.inputTypeText = "show Password";
      }
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

.capp-logo {
  width: 5rem;
  aspect-ratio: 1;
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
  font-size: 1.1rem;
  color: var(--font-color-light);
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
