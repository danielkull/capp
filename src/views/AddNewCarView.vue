<script>
import { supabase } from "@/lib/supabaseClient";
import InputText from "../components/input-elements/InputText.vue";
export default {
  data() {
    return {
      title: "Neues Auto erfassen",
      carTypes: null,
      users: null,
      fuelTypes: [
        "Autogas",
        "Benzin",
        "Diesel",
        "Elektro",
        "Hybrid",
        "Wasserstoff",
      ],
      carTypeValue: "",
      userValue: "",
      licensePlateValue: "",
      imgSourceValue: "",
      insuranceValue: "",
      insuranceNumberValue: "",
      fuelTypeValue: "",
      fuelConsumeValue: 0,
      kwValue: 0,
      maxSpeedValue: 0,
      yearOfConstruction: 0,
      mileageValue: 0,
      trunkVolume: 0,
      seatCount: 0,
      gearValue: "",
    };
  },
  components: { InputText },
  mounted() {
    this.getCarTypes();
    this.getUsers();
  },
  methods: {
    async getCarTypes() {
      const { data } = await supabase
        .from("car_types")
        .select(`id, car_type_name, category, brand_id, brands ( brand_name )`)
        .order("brand_id", { ascending: true })
        .order("id", { ascending: true })
        .order("category", { ascending: true });
      this.carTypes = data;
    },
    async getUsers() {
      const { data } = await supabase
        .from("users")
        .select(`*`)
        .order("id", { ascending: true });
      this.users = data;
    },
  },
};
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <form>
      <div class="form-row">
        <!-- type_id -->
        <div class="capp-input__wrapper">
          <label for="car-model" class="capp-label__default"
            >Auto-Marke/Modell</label
          >
          <select
            name="car-model"
            id="car-model"
            class="capp-select__default"
            v-model="carTypeValue"
          >
            <option value="">--- Marke / Modell</option>
            <option
              v-for="carType in carTypes"
              :key="carType.id"
              :value="carType.id"
            >
              {{ carType.brands.brand_name }} {{ carType.car_type_name }} ({{
                carType.category
              }})
            </option>
          </select>
        </div>
        <!-- user_id -->
        <div class="capp-input__wrapper">
          <label for="user" class="capp-label__default">User</label>
          <select
            name="user"
            id="user"
            class="capp-select__default"
            v-model="userValue"
          >
            <option value="">--- Anbieter</option>
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.firstname }} {{ user.lastname }} ({{ user.username }})
            </option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <!-- car_license_plate -->
        <div class="capp-input__wrapper">
          <label for="license-plate" class="capp-label__default"
            >Kennzeichen</label
          >
          <input
            type="text"
            name="license-plate"
            id="license-plate"
            class="capp-input__default"
            placeholder="z.B. A-BC 123"
            v-model="licensePlateValue"
          />
        </div>
        <!-- img_source -->
        <div class="capp-input__wrapper">
          <label for="img-source" class="capp-label__default">Bildquelle</label>
          <input
            type="text"
            name="img-source"
            id="img-source"
            class="capp-input__default"
            placeholder="z.B. https://bildpfad/bildname.png"
            v-model="imgSourceValue"
          />
        </div>
      </div>
      <div class="form-row">
        <!-- insurance_type -->
        <div class="capp-input__wrapper">
          <label for="insurance-type" class="capp-label__default"
            >Versicherung</label
          >
          <select
            name="insurance-type"
            id="insurance-type"
            class="capp-select__default"
            v-model="insuranceValue"
          >
            <option value="">--- Versicherungs-Art</option>
            <option value="Vollkasko">Vollkasko</option>
            <option value="Teilkasko">Teilkasko</option>
          </select>
        </div>
        <!-- insurance_no -->
        <div class="capp-input__wrapper">
          <label for="insurance-number" class="capp-label__default"
            >Versicherungs-Nr.</label
          >
          <input
            type="text"
            name="insurance-number"
            id="insurance-number"
            class="capp-input__default"
            v-model="insuranceNumberValue"
          />
        </div>
      </div>
      <div class="form-row">
        <!-- fuel_type -->
        <div class="capp-input__wrapper">
          <label for="fuel-type" class="capp-label__default">Kraftstoff</label>
          <select
            name="fuel-type"
            id="fuel-type"
            class="capp-select__default"
            v-model="fuelTypeValue"
          >
            <option value="">--- Kraftstoff</option>
            <option
              v-for="fuelType in fuelTypes"
              :key="fuelType"
              :value="fuelType"
            >
              {{ fuelType }}
            </option>
          </select>
        </div>
        <!-- fuel_consume_per_km -->
        <div class="capp-input__wrapper">
          <label for="fuel-consume" class="capp-label__default"
            >Kraftstoffverbrauch / km</label
          >
          <input
            type="number"
            step="0.01"
            name="fuel-consume"
            id="fuel-consume"
            class="capp-input__default"
            v-model="fuelConsumeValue"
          />
        </div>
      </div>
      <div class="form-row">
        <!-- kw -->
        <div class="capp-input__wrapper">
          <label for="kw" class="capp-label__default">KiloWatt</label>
          <input
            type="number"
            step="1"
            name="kw"
            id="kw"
            class="capp-input__default"
            v-model="kwValue"
          />
        </div>
        <!-- max_speed -->
        <div class="capp-input__wrapper">
          <label for="max-speed" class="capp-label__default"
            >Höchst-Tempo</label
          >
          <input
            type="number"
            step="1"
            name="max-speed"
            id="max-speed"
            class="capp-input__default"
            v-model="maxSpeedValue"
          />
        </div>
      </div>
      <div class="form-row">
        <!-- year_of_construction -->
        <div class="capp-input__wrapper">
          <label for="year" class="capp-label__default">Baujahr</label>
          <input
            type="number"
            step="1"
            name="year"
            id="year"
            class="capp-input__default"
            v-model="yearOfConstruction"
          />
        </div>
        <!-- mileage -->
        <div class="capp-input__wrapper">
          <label for="mileage" class="capp-label__default">gefahrene km</label>
          <input
            type="number"
            step="1"
            name="mileage"
            id="mileage"
            class="capp-input__default"
            v-model="mileageValue"
          />
        </div>
      </div>
      <div class="form-row">
        <!-- trunk_volume_in_liters -->
        <div class="capp-input__wrapper">
          <label for="trunk-volume" class="capp-label__default"
            >Kofferraum-Volumen</label
          >
          <input
            type="number"
            step="1"
            name="trunk-volume"
            id="trunk-volume"
            class="capp-input__default"
            v-model="trunkVolume"
          />
        </div>
        <!-- mileage -->
        <div class="capp-input__wrapper">
          <label for="seat-count" class="capp-label__default"
            >Anzahl Sitze</label
          >
          <input
            type="number"
            step="1"
            name="seat-count"
            id="seat-count"
            class="capp-input__default"
            v-model="seatCount"
          />
        </div>
      </div>
      <div class="form-row">
        <!-- gear -->
        <div class="capp-input__wrapper">
          <label for="gear" class="capp-label__default">Getriebe</label>
          <select
            name="gear"
            id="gear"
            class="capp-select__default"
            v-model="gearValue"
          >
            <option value="">--- Getriebe</option>
            <option value="Automatik">Automatik</option>
            <option value="Schaltung">Schaltung</option>
          </select>
        </div>
        <!-- submit -->
        <div class="capp-input__wrapper">
          <label for="add-car" class="capp-label__default">&nbsp;</label>
          <input
            type="submit"
            name="add-car"
            id="add-car"
            value="Auto speichern"
          />
        </div>
      </div>
    </form>
  </main>
</template>

<style scoped>
main {
  margin: 0;
  padding: 5rem 2.5rem;
}

h1 {
  font-size: 2.5rem;
  color: var(--primary-dark);
}

.capp-input__wrapper {
  width: 100%;
  _display: flex;
  _justify-content: space-evenly;
  _align-items: center;
  _gap: 1rem;
}
.capp-input__wrapper span {
  width: 100%;
}
.capp-label__default {
  display: block;
  color: var(--primary-dark);

  padding-block: calc(var(--s-font) / 2);
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
}

.capp-input__default,
.capp-select__default {
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

.capp-input__default:hover,
.capp-select__default:hover {
  cursor: pointer;
}
.capp-input__default::placeholder {
  opacity: 0.5;
}

.capp-input__default:focus,
.capp-select__default:focus {
  outline-color: var(--primary-light);
}

/* ====== Invalid and Valid Styling ====== */
.capp-input__invalid-input {
  font-size: var(--s-font);
  width: 100%;
  height: max-content;
  text-align: right;
  padding-right: calc(var(--s-font) / 2);
  margin-top: calc(var(--s-font) / 1.5);
}
.input__valid {
  color: transparent;
}
.input__invalid {
  color: var(--error-color);
}

#add-car {
  color: var(--primary-mid);
  background-color: transparent;
  font-size: clamp(1rem, 5vw, 1.2rem);
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.05em;
  display: block;
  width: 100%;
  border: 2px solid var(--primary-light);
  border-radius: 0.5rem;
  padding-inline: 0.5rem;
  padding-block: 1rem;
  transition: all 0.75s steps(5);
}

#add-car:hover {
  background-color: var(--primary-mid);
  color: white;
  border-color: var(--primary-mid);
}

/* =========== Media Queries ============ */
@media screen and (min-width: 768px) {
  .form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
}
</style>
