<template>
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
            <!-- Vorname -->
            <input-text
              :inputId="'firstname'"
              :inputType="'text'"
              :inputPlaceholder="'Vorname'"
              v-model:inputData="firstnameValue"
              >Vorname</input-text
            >
            <!-- Nachname -->
            <input-text
              :inputId="'lastname'"
              :inputType="'text'"
              :inputPlaceholder="'Nachname'"
              v-model:inputData="lastnameValue"
              >Nachname</input-text
            >
            <!-- Telefon -->
            <input-text
              :inputId="'phone'"
              :inputType="'tel'"
              :inputPlaceholder="'e.g. +49 231 33005318'"
              v-model:inputData="phoneValue"
              >Telefon</input-text
            >
            <!-- Adresse - Straße, Hausnummer -->
            <input-text
              :inputId="'address'"
              :inputType="'text'"
              :inputPlaceholder="'Straße, Hausnummer'"
              v-model:inputData="addressValue"
              >Straße, Haus-Nr.</input-text
            >
            <!-- PLZ / zipcode -->
            <input-text
              :inputId="'zipcode'"
              :inputType="'text'"
              :inputPlaceholder="'PLZ'"
              v-model:inputData="zipcodeValue"
              >PLZ</input-text
            >
            <!-- Wohnort / Stadt / City -->
            <input-text
              :inputId="'city'"
              :inputType="'text'"
              :inputPlaceholder="'Ort'"
              v-model:inputData="cityValue"
              >Wohnort</input-text
            >
          </ul>
        </section>
      </article>
      <section class="question-list__info-section">
        <p class="question-list__info-text">
          Du willst nur User sein? Fülle bitte die "{{ h2personal }}" .
        </p>
        <Button
          class="question-list__update-data-btn"
          :value="loading ? 'Loading...' : 'User daten hinzufügen'"
          :disabled="loading"
          id="sign-in-as-user-btn"
          @click.prevent="handleUserRegistration"
        ></Button>
        <p
          v-if="inputIsInValidUser"
          class="capp-input__invalid-input"
          :class="{
            input__valid: !inputIsInValidUser,
            input__invalid: inputIsInValidUser,
          }"
        >
          Leider fehlt eine der folgende Angaben:
          {{ invalidInputMsg }}
        </p>
      </section>
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
            <ul class="question-list radio-list">
              <li
                class="question-list__item"
                v-for="carType in carTypes"
                :key="carType.id"
              >
                <label :for="`car-type-${carType.id}`">
                  <input
                    class="capp-radio__default"
                    type="radio"
                    name="car-type"
                    :id="`car-type-${carType.id}`"
                    :value="carType.name"
                    v-model="chosenCarType"
                  />
                  {{ carType.name }}</label
                >
              </li>
            </ul>

            <h3>Treibstoff</h3>
            <ul class="question-list radio-list">
              <li
                class="question-list__item"
                v-for="fuelType in fuelTypes"
                :key="fuelType.id"
              >
                <label :for="`fuel-${fuelType.id}`">
                  <input
                    type="radio"
                    class="capp-radio__default"
                    name="fuel-type"
                    :id="`fuel-${fuelType.id}`"
                    :value="fuelType.name"
                    v-model="chosenFuelType"
                  />
                  {{ fuelType.name }}</label
                >
              </li>
            </ul>

            <h3>Schaltung</h3>
            <ul class="question-list radio-list">
              <li
                class="question-list__item"
                v-for="gear in gears"
                :key="gear.id"
              >
                <label :for="`trans-${gear.id}`">
                  <input
                    type="radio"
                    class="capp-radio__default"
                    name="transmission-type"
                    :id="`trans-${gear.id}`"
                    :value="gear.name"
                    v-model="chosenGear"
                  />
                  {{ gear.name }}</label
                >
              </li>
            </ul>

            <h3>Sitze</h3>
            <ul class="question-list radio-list">
              <li
                class="question-list__item"
                v-for="seatCount in seatCounts"
                :key="seatCount.id"
              >
                <label :for="`seats-value-${seatCount.id}`">
                  <input
                    type="radio"
                    class="capp-radio__default"
                    name="car-seats"
                    :id="`seats-value-${seatCount.id}`"
                    :value="seatCount.id"
                    v-model="chosenSeatCount"
                  />
                  {{ seatCount.name }}</label
                >
              </li>
            </ul>

            <h3>Raucher</h3>
            <ul class="question-list radio-list">
              <li class="question-list__item">
                <label for="smoker-yes">
                  <input
                    type="radio"
                    class="capp-radio__default"
                    name="smoker"
                    id="smoker-yes"
                    value="true"
                    v-model="isSmoker"
                  />
                  Ja</label
                >
              </li>

              <li class="question-list__item">
                <label for="smoker-no">
                  <input
                    type="radio"
                    class="capp-radio__default"
                    name="smoker"
                    id="smoker-no"
                    value="false"
                    v-model="isSmoker"
                  />
                  Nein</label
                >
              </li>
            </ul>

            <h3>Isofix Kindersitz-Halterung</h3>
            <ul class="question-list radio-list">
              <li class="question-list__item">
                <label for="isofix - yes">
                  <input
                    type="radio"
                    class="capp-radio__default"
                    name="isofix"
                    id="isofix-yes"
                    value="true"
                    v-model="hasIsofix"
                  />
                  Ja</label
                >
              </li>
              <li class="question-list__item">
                <label for="isofix - no">
                  <input
                    type="radio"
                    class="capp-radio__default"
                    name="isofix"
                    id="isofix-no"
                    value="false"
                    v-model="hasIsofix"
                  />
                  Nein</label
                >
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
              <label :for="`feature-${feature.id}`">
                <input
                  type="checkbox"
                  class="capp-btn__default"
                  :name="`feature-${feature.id}`"
                  :id="`feature-${feature.id}`"
                  v-model="feature.checked"
                  @change="chooseFeatures()"
                />
                {{ feature.name }}</label
              >
            </li>
            <!-- Sonstiges -->
            <!-- Wird erstmal nicht benutzt -->
            <!--           <input-text
              :inputId="'misc'"
              :inputType="'text'"
              :inputPlaceholder="'Sonstiges'"
              v-model:inputData="miscellaneous"
              >Sonstiges</input-text
            > -->
            <!-- ========================== -->
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
        /><label class="question-list__header" for="car-trunk">
          {{ h2textTrunkSize }}</label
        >
        <section class="question-list__list">
          <div>
            <ul
              class="question-list radio-list ul-input__text trunk-size__list"
            >
              <li
                class="question-list__item trunk__list"
                v-for="luggageTrunkSize in luggageTrunkSizes"
                :key="luggageTrunkSize.id"
              >
                <label :for="luggageTrunkSize.id">
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
                  {{ luggageTrunkSize.id }} {{ luggageTrunkSize.min }}-{{
                    luggageTrunkSize.max
                  }}
                  L</label
                >
              </li>
              <!-- Eigene Angaben -->
            </ul>

            <input-text
              :inputId="'own-trunk-size'"
              :inputType="'text'"
              :inputPlaceholder="'Eigene Angaben'"
              v-model:inputData="ownTrunkSize"
              >Eigene Angaben</input-text
            >
          </div>
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
            <p>
              Gibt es Einschränkungen für die Vermietung Deines Autos? Dann
              kannst Du sie hier auswählen:
            </p>
            <p>
              Gibt es Einschränkungen für die Vermietung Deines Autos? <br />
              Dann kannst Du sie hier auswählen:
            </p>
            <ul class="question-list">
              <li
                class="question-list__item"
                v-for="limitation in limitations"
                :key="limitation.id"
              >
                <label :for="`limit-${limitation.id}`">
                  <input
                    type="checkbox"
                    class="capp-btn__default"
                    :name="`limit-${limitation.id}`"
                    :id="`limit-${limitation.id}`"
                    v-model="limitation.checked"
                    @change="chooseLimitations()"
                  />

                  {{ limitation.name }}</label
                >
              </li>

              <select-drop-down
                :selectId="'min-age'"
                :givenData="minAges"
                :defaultText="'--- keine Angabe'"
                v-model:selectedData="chosenMinAge"
                >Mindestalter</select-drop-down
              >
            </ul>
            <p hidden>{{ chosenLimitations }}</p>
          </div>
        </section>
      </article>
      <section class="question-list__info-section">
        <p class="question-list__info-text">
          Du möchtest ein Auto registieren? Fülle bitte das gesamte Formular.
        </p>
        <Button
          class="question-list__update-data-btn"
          :value="loading ? 'Loading...' : 'Anmelden als Car Owner'"
          :disabled="loading"
          id="sign-in-as-user-btn"
          @click.prevent="handleCarOwnerRegistration"
        ></Button>
        <p
          v-if="inputIsInValidOwner"
          class="capp-input__invalid-input"
          :class="{
            input__valid: !inputIsInValidOwner,
            input__invalid: inputIsInValidOwner,
          }"
        >
          Leider fehlt eine der folgende Angaben:
          {{ invalidInputMsg }}
        </p>
      </section>
    </section>
  </form>
</template>
<script>
import { supabase } from "../lib/supabaseClient";
import { useAuthenticationStore } from "@/stores/useAuthenticationStore";

import CheckBox from "./input-elements/CheckBox.vue";
import RadioButton from "./input-elements/RadioButton.vue";
import InputText from "./input-elements/InputText.vue";
import SelectDropDown from "./input-elements/SelectDropDown.vue";
import Button from "@/components/input-elements/Button.vue";

export default {
  components: { CheckBox, InputText, SelectDropDown, RadioButton, Button },
  data() {
    return {
      // === General data pairs for this side ===
      activeUser: null,
      loading: false,
      inputIsInValidUser: false,
      inputIsInValidOwner: false,
      invalidInputMsg: "",
      // = End of General data pairs =
      // === Naming of accordion category rows ===
      h2personal: "Persönliche Informationen",
      h2textInfo: "Angaben zum Fahrzeug",
      h2textFeatures: "Ausstattung",
      h2textTrunkSize: "Kofferraum-Größen",
      h2textLimitations: "Einschränkungen für die Vermietung",
      // = End of Naming =
      // === User Data ===
      firstnameValue: "",
      lastnameValue: "",
      phoneValue: "",
      addressValue: "",
      zipcodeValue: "",
      cityValue: "",
      // = End of User Data =
      // === Car Owner Data ===
      chosenCarType: "",
      chosenFuelType: "",
      chosenGear: "",
      chosenSeatCount: "",
      isSmoker: "",
      hasIsofix: "",
      chosenTrunkSize: "",
      ownTrunkSize: "",
      chosenFeatures: [],
      // Wird erstmal nicht benutzt
      miscellaneous: "",
      // ==============
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
          iconSource: "Kleinwagen.svg",
        },
        {
          id: 4,
          name: "Kombi",
          iconSource: "Combi.svg",
        },
        {
          id: 5,
          name: "Limousine",
          iconSource: "Limousine.svg",
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
          iconSource: "Bus.svg",
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
      minAges: [18, 21, 25],
    };
  },
  setup() {
    // Initialize the store at the begining
    const authenticationStore = useAuthenticationStore();

    return { authenticationStore };
  },
  created() {
    // Get all seasion and user data from the auth Store if availabel
    this.getSessionInfos();
  },
  mounted() {
    this.getFeatures();
  },
  methods: {
    async getSessionInfos() {
      await this.authenticationStore.getSession();
      await this.authenticationStore.onAuthStateChange();
    },
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
          this.chosenLimitations.push(limitation);
        }
      });
      this.chosenLimitations = this.chosenLimitations.filter((limitation) => {
        return limitation.checked === false;
      });
    },
    userFormIsFilled() {
      if (
        this.firstnameValue !== "" &&
        this.lastnameValue !== "" &&
        this.phoneValue !== "" &&
        this.addressValue !== "" &&
        this.zipcodeValue !== "" &&
        this.cityValue !== ""
      ) {
        return true;
      } else {
        // Feedback what is missing
        return false;
      }
    },
    carOwnerFormIsFilled() {
      if (
        this.chosenCarType !== "" &&
        this.chosenFuelType !== "" &&
        this.chosenGear !== "" &&
        this.chosenSeatCount !== "" &&
        this.isSmoker !== "" &&
        this.hasIsofix !== "" &&
        (this.chosenTrunkSize !== "" || this.ownTrunkSize !== "")
      ) {
        return true;
      } else {
        // Feedback what is missing
        return false;
      }
    },
    invalidInputFeedback(value) {
      // First if checks gives feedback what in User Form is empty
      const userFeedbackArr = [];
      const ownerFeedbackArr = [];
      if (value === "user" || value === "carOwner") {
        this.inputIsInValidUser = true;
        if (this.firstnameValue === "") {
          ownerFeedbackArr.push("Vorname");
        }
        if (this.lastnameValue === "") {
          ownerFeedbackArr.push("Nachname");
        }
        if (this.phoneValue === "") {
          ownerFeedbackArr.push("Telefon Nummer");
        }
        if (this.addressValue === "") {
          ownerFeedbackArr.push("Adresse");
        }
        if (this.zipcodeValue === "") {
          ownerFeedbackArr.push("Postleitzahl");
        }
        if (this.cityValue === "") {
          ownerFeedbackArr.push("Stadt");
        }
        // Second checks gives feedback what in Car Owner Form is empty
      }
      if (value === "carOwner") {
        this.inputIsInValidUser = false;
        this.inputIsInValidOwner = true;
        if (this.chosenCarType === "") {
          ownerFeedbackArr.push("Auto Typ");
        }
        if (this.chosenFuelType === "") {
          ownerFeedbackArr.push("Treibstoff");
        }
        if (this.chosenGear === "") {
          ownerFeedbackArr.push("Schaltung");
        }
        if (this.chosenSeatCount === "") {
          ownerFeedbackArr.push("Sitz Anzahl");
        }
        if (this.isSmoker === "") {
          ownerFeedbackArr.push("Raucher Status");
        }
        if (this.hasIsofix === "") {
          ownerFeedbackArr.push("Isofix Vorhanden");
        }
        if (this.chosenTrunkSize === "" && this.ownTrunkSize === "") {
          ownerFeedbackArr.push("Kofferraum Größe");
        }
      }
      this.invalidInputMsg = ` ${userFeedbackArr.join(
        ", "
      )} ${ownerFeedbackArr.join(", ")}`;
    },
    defineTrunkVolumn() {
      if (this.ownTrunkSize !== "") {
        return Number(this.ownTrunkSize);
      } else if (this.chosenTrunkSize !== "") {
        return this.chosenTrunkSize[2];
      }
    },
    async handleUserRegistration() {
      // Get the active user for the update process
      this.activeUser = await this.authenticationStore.activeUser[0].id;
      if (this.userFormIsFilled()) {
        this.loading = true;
        // Performe update of User Data
        this.addUpdateUserInSupabase();
        // Send the new user on its way
        this.$router.push({
          name: "mainView",
        });
      } else {
        this.invalidInputFeedback("user");
      }
    },
    async handleCarOwnerRegistration() {
      this.activeUser = await this.authenticationStore.activeUser[0].id;

      if (this.carOwnerFormIsFilled() && this.userFormIsFilled()) {
        this.loading = true;
        let trunkVolumn = this.defineTrunkVolumn();
        let carTypeId = 0;
        let carId = 0;
        // Performe update of User Data
        this.addUpdateUserInSupabase();
        //Create first Car Typ entrie to get it's Id
        try {
          const { data, error } = await supabase
            .from("car_types")
            .insert({
              car_type_name: "",
              brand_id: 57,
              category: this.chosenCarType,
            })
            .select();

          if (data) {
            carTypeId = data[0].id;
          }
          if (error) {
            throw error;
          } else {
          }
        } catch (error) {
          alert(error.message);
        }

        try {
          // Update the respective data from the active User
          const { data, error } = await supabase
            .from("cars")
            .insert({
              type_id: carTypeId,
              user_id: this.activeUser,
              trunk_volume_in_liters: trunkVolumn,
              fuel_type: this.chosenFuelType,
              gear: this.chosenGear,
              count_of_seats: this.chosenSeatCount,
              is_smoker: this.isSmoker,
              has_isofix: this.hasIsofix,
            })
            .select();
          if (data) {
            carId = data[0].id;
            // After car is created, use Id to create its features
            this.addFeaturesToCarInSupabase(carId);
          }
          if (error) throw error;
        } catch (error) {
          alert(error.message);
        } finally {
          this.loading = false;
        }
      } else {
        this.invalidInputFeedback("carOwner");
      }
    },
    async addUpdateUserInSupabase() {
      try {
        // Update the respective data from the active User
        const { error } = await supabase
          .from("users")
          .update({
            firstname: this.firstnameValue,
            lastname: this.lastnameValue,
            phone: this.phoneValue,
            address: this.addressValue,
            zipcode: this.zipcodeValue,
            city: this.cityValue,
          })
          .eq("id", this.activeUser);
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      } finally {
        this.loading = false;
      }
    },
    async addFeaturesToCarInSupabase(carId) {
      if (this.chosenFeatures.length > 0) {
        for (let i = 0; i < this.chosenFeatures.length; i++) {
          try {
            const { error } = await supabase
              .from("cars_features")
              .insert({ car_id: carId, feature_id: this.chosenFeatures[i].id });
            if (error) throw error;
          } catch (error) {
            alert(error.message);
          }
        }
      }
      // Send the new Owner on its way
      this.$router.push({
        name: "mainView",
      });
    },
  },
};
</script>

<style scoped>
/* List Elements */
.question-list__wrapper {
  overflow: hidden;
  width: 100%;
  margin-inline: auto;
}

.question-list__header,
.question-list__item,
.question-list__header::after {
  cursor: pointer;
}

.question-list__header {
  position: relative;
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: calc(var(--s-pad) * 1.5);
  padding-inline: var(--s-pad);
  font-size: var(--font-list-header);
  color: var(--text-light);
  font-weight: var(--f-weight-m);
  background: var(--menue-bg);
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
  top: 50%;
  right: calc(2% + 1.5vw);
  translate: 0% -50%;
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  transform-origin: center;
  transition: rotate 0.3s ease-out;
  background: var(--list-default);
}
.question-list__categorie {
  border-bottom: var(--s-brd) solid var(--clr-brd);
}

.question-list__categorie > .question-list__list > * {
  overflow: hidden;
  width: 100%;
  padding-inline: var(--list-padding);
  list-style-type: none;
  background: var(--clr-sur-d);
  border-radius: var(--m-brd-rad);
}

ul.question-list {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.75rem;
}
.question-list__list {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
}
.question-list__list p {
  padding-block: var(--s-pad);
  padding-left: 0.5rem;
  line-height: 1.4rem;
  margin-bottom: var(--s-marg);
  font-weight: var(--f-weight-light);
  width: 90%;
  margin-inline: auto;
  border-radius: 0 0 var(--m-brd-rad) var(--m-brd-rad);
  text-align: center;
  color: var(--text-light);

  border-bottom: 1px solid var(--primary-middle);
  border-radius: 0 0 1.5rem 1.5rem;
}

.question-list__car-info {
  transition: grid-template-rows 0.5s ease-in-out;
}

.question-list__car-info ul.question-list {
  padding-bottom: var(--xs-pad);
}

.question-list__car-info h3 {
  line-height: 1.75;
  font-size: var(--font-hr3);
  color: var(--text-light);
  padding-block: var(--s-pad);
  margin-bottom: 2rem;
  text-align: center;
  width: 90%;
  margin-inline: auto;
  border-bottom: 1px solid var(--primary-middle);
  border-radius: 0 0 1.5rem 1.5rem;
}
.question-list__car-info h3:first-of-type {
  border-top: none;
}

.question-list__btn:checked ~ .question-list__list {
  display: grid;
  grid-template-rows: 1fr;
  background: var(--bg-log);
  padding-block: 0rem var(--s-pad);
  background: var(--quest-menu-bg);
}
.question-list__btn:checked ~ .question-list__header::after {
  background: var(--primary-middle);
  rotate: 90deg;
}
.question-list__categorie:has(.question-list__btn:checked) {
  border: none;
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

label {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding-block: var(--xs-pad);
  padding-inline: var(--s-pad);
  font-size: var(--font-list-label);
  color: var(--text-light);
}
.trunk-size__list :is(label) {
  font-size: var(--font-list-label-s);
}
.trunk-size__list li:last-of-type {
  grid-column: 1/3;
  padding-right: 8.7rem;
}

/* Input Elements */

/* Input Text, Email, Tel, Password */

input[type="text"],
input[type="tel"] {
  font-size: var(--s-font);
  color: black;
  padding: 0.25rem 0.35rem;
  border: var(--s-brd) solid var(--secondary-mid);
  border-radius: 0.35rem;
}

input[type="text"]::placeholder,
input[type="tel"]::placeholder {
  color: var(--secondary-mid);
}

input[type="text"]:focus-within,
input[type="tel"]:focus-within {
  outline: var(--m-brd) solid var(--primary-light);
}

/*============== Radio Buttons =============*/

input[type="radio"],
input[type="checkbox"] {
  accent-color: var(--primary-dark);
}

.capp-radio__default {
  all: unset;

  width: var(--btn-height-default);
  height: var(--btn-height-default);
  border-radius: var(--circle-radius);
  margin: var(--margin-default);
  border: var(--s-brd) solid var(--clr-trans);
  position: relative;
}
.capp-radio__default::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: -0.5rem;
  translate: -50% -50%;
  width: var(--btn-height-default);
  height: var(--btn-height-default);
  transition: 0.3s;
  border-radius: var(--circle-radius);
  outline: var(--s-brd) solid var(--text-light);
  outline-offset: 0px;
}
.capp-radio__default:checked::after {
  background: var(--primary-mid);
  outline-offset: 4px;
  outline: 1px solid var(--primary-mid);
}
label:has(.capp-radio__default:checked) {
  color: var(--text-mid);
}
label:has(.capp-btn__default:checked:checked) {
  color: var(--text-mid);
}

/* ===================Select=================== */
select {
  padding: 0.35rem 0.5rem;
  font-size: 1.1rem;
  margin-left: 0.35rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  border: 1px solid var(--secondary-mid);
  color: var(--font-color-dark);
}

select:focus-within {
  outline-color: var(--primary-mid);
}

/* ==== Input is Invalid CSS ==== */
.capp-input__invalid-input {
  font-size: var(--s-font);
  width: 100%;
  height: max-content;
  text-align: center;
  padding-right: calc(var(--s-font) / 2);
}
.input__valid {
  color: transparent;
}
.input__invalid {
  color: var(--error-color);
}
/* === Info text area === */
.question-list__info-text {
  width: 100%;
  text-align: center;
  font-size: var(--font-list-header);
  color: var(--text-light);
  font-weight: var(--f-weight-m);
}

/*  ===== Button for inserting the Data ===== */
.question-list__update-data-btn {
  margin-block: 1.5rem;
  font-size: 0.8rem;
  width: 70%;
  margin-inline: auto;
}

.question-list__info-section {
  display: grid;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
  margin-block: 1rem;
}

@media screen and (max-width: 400px) {
  ul.radio-list {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
@media screen and (min-width: 900px) {
  .question-list__item:hover,
  .question-list__header:hover {
    background: var(--list-hover);
  }
}
</style>
