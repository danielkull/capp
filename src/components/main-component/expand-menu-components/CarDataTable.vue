<template>
  <section class="site__wrapper">
    <article
      class="user-table__wrapper"
      :class="{ 'change-btn__active': !notEditableInsuranceInfo }"
    >
      <table width="100%">
        <thead>
          <tr>
            <th width="40%">Versicherung</th>
            <th width="60%">
              <label for="change-btn__insurance-info"
                ><input
                  type="button"
                  value=""
                  class="change-btn"
                  :class="{ 'change-btn__active': !notEditableInsuranceInfo }"
                  id="change-btn__insurance-info"
                  @click.prevent="editInsuranceInfo"
                /><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <!-- At the moment ther exist no driving license number in the database -->
            <td>Führerschein- <br />nummer</td>
            <td>
              <input
                v-model="drivingLicenseNo"
                class="car-settings__form-text-input"
                type="text"
                :disabled="true"
              />
            </td>
          </tr>
          <tr>
            <td>Versicherung</td>
            <td>
              <select
                class="car-settings__form-text-input car-settings__drop-down-menu"
                name="insuranceDropDown"
                id="insuranceDropDown"
                :value="insuranceTyp"
                v-model="insuranceTyp"
                :disabled="notEditableInsuranceInfo"
              >
                <option disabled value="">{{ insuranceTyp }}</option>
                <option
                  v-for="insurance in insuranceData"
                  :value="insurance"
                  :key="insurance"
                >
                  {{ insurance }}
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              Versicherungs- <br />
              nummer
            </td>
            <td>
              <input
                v-model="insuranceNumber"
                class="car-settings__form-text-input"
                type="text"
                :disabled="notEditableInsuranceInfo"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </article>

    <!-------------------------------------------------------------->
    <article
      class="user-table__wrapper"
      :class="{ 'change-btn__active': !notEditableCarInfo }"
    >
      <table width="100%">
        <thead>
          <tr>
            <th width="40%">Fahrzeug Info</th>
            <th width="60%">
              <label for="change-btn__car-info"
                ><input
                  type="button"
                  value=""
                  class="change-btn"
                  :class="{ 'change-btn__active': !notEditableCarInfo }"
                  id="change-btn__car-info"
                  @click.prevent="editCarInfo"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Automarke</td>
            <td>
              <input
                v-model="carBrand"
                class="car-settings__form-text-input"
                type="text"
                :disabled="true"
              />
            </td>
          </tr>
          <tr>
            <td>Modell</td>
            <td>
              <input
                v-model="carModel"
                class="car-settings__form-text-input"
                type="text"
                :disabled="true"
              />
            </td>
          </tr>
          <tr>
            <td>Kennzeichen</td>
            <td>
              <input
                v-model="licensePlate"
                class="car-settings__form-text-input"
                type="text"
                :disabled="notEditableCarInfo"
              />
            </td>
          </tr>
          <tr>
            <td>Baujahr</td>
            <td>
              <input
                v-model="manufactureYear"
                class="car-settings__form-text-input"
                type="number"
                :disabled="notEditableCarInfo"
              />
            </td>
          </tr>
          <tr>
            <td>Ladevolumen</td>
            <td>
              <input
                v-model="trunkSize"
                class="car-settings__form-text-input"
                type="number"
                :disabled="notEditableCarInfo"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </article>
    <!-------------------------------------------------------------->
    <article
      class="user-table__wrapper"
      :class="{ 'change-btn__active': !notEditableCarPerformanceInfo }"
    >
      <table width="100%">
        <thead>
          <tr>
            <th width="40%">Leistung</th>
            <th width="60%">
              <label for="change-btn_car-performance-info"
                ><input
                  type="button"
                  value=""
                  class="change-btn"
                  :class="{
                    'change-btn__active': !notEditableCarPerformanceInfo,
                  }"
                  id="change-btn_car-performance-info"
                  @click.prevent="editCarPerformanceInfo"
                /><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Getriebe</td>
            <td>
              <select
                class="car-settings__form-text-input car-settings__drop-down-menu"
                name="gearBoxDropDown"
                id="gearBoxDropDown"
                :value="gearBox"
                v-model="gearBox"
                :disabled="notEditableCarPerformanceInfo"
              >
                <option disabled value="">{{ gearBox }}</option>
                <option v-for="gear in gearData" :value="gear" :key="gear">
                  {{ gear }}
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Verbrauch / km</td>
            <td>
              <input
                v-model="carConsumption"
                class="car-settings__form-text-input"
                type="number"
                :disabled="notEditableCarPerformanceInfo"
              />
            </td>
          </tr>
          <tr>
            <td>PS</td>
            <td>
              <input
                v-model="horsePower"
                class="car-settings__form-text-input"
                type="number"
                :disabled="notEditableCarPerformanceInfo"
              />
            </td>
          </tr>
          <tr>
            <td>Höchst-<br />geschwind.</td>
            <td>
              <input
                v-model="topSpeed"
                class="car-settings__form-text-input"
                type="number"
                :disabled="notEditableCarPerformanceInfo"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  </section>
</template>

<script>
import { useGlobalStateStore } from "@/stores/useGlobalStateStore";
import { useAuthenticationStore } from "@/stores/useAuthenticationStore.js";
import { useCarStore } from "@/stores/useCarStore.js";

export default {
  data() {
    return {
      // Collection of Data to work with
      activeUser: "",
      userCar: null,
      gearData: null,
      insuranceData: null,
      // to Catch and transfer Data to Database
      drivingLicenseNo: null,
      insuranceTyp: null,
      insuranceNumber: null,
      carBrand: null,
      carModel: null,
      licensePlate: null,
      manufactureYear: null,
      trunkSize: null,
      gearBox: null,
      carConsumption: null,
      horsePower: null,
      topSpeed: null,
      // Different status checks for this component
      notEditableInsuranceInfo: true,
      notEditableCarInfo: true,
      notEditableCarPerformanceInfo: true,
      insuranceInfosChanged: false,
      carInfosChanged: false,
      carPerformanceInfosChanged: false,
      notACarOwner: false,
    };
  },
  setup() {
    const globalStateStore = useGlobalStateStore();
    const authenticationStore = useAuthenticationStore();
    const carStore = useCarStore();
    return { globalStateStore, authenticationStore, carStore };
  },
  beforeCreate() {
    // Gets the current User for this component
    this.$watch(
      () => this.authenticationStore.activeUser,
      (activeUser) => {
        this.activeUser = activeUser[0];
      }
    );
  },
  methods: {
    editInsuranceInfo() {
      if (this.notACarOwner) {
        return;
      } else {
        this.notEditableInsuranceInfo = !this.notEditableInsuranceInfo;
        if (this.insuranceInfosChanged) {
          // Data set for the update function
          let dataToUpdate = {
            activeUserCarID: this.userCar[0].id,
            insurance_no: this.insuranceNumber,
            insurance_type: this.insuranceTyp,
          };
          // The update function
          this.carStore.updateCarInsuranceInfo(dataToUpdate);
          // set dataChange back to default
          this.insuranceInfosChanged = false;
        }
      }
    },
    editCarInfo() {
      if (this.notACarOwner) {
        return;
      } else {
        this.notEditableCarInfo = !this.notEditableCarInfo;
        if (this.carInfosChanged) {
          // Data set for the update function
          let dataToUpdate = {
            activeUserCarID: this.userCar[0].id,
            licensePlate: this.licensePlate,
            manufactureYear: this.manufactureYear,
            trunkSize: this.trunkSize,
          };
          // The update function
          this.carStore.updateCarInfo(dataToUpdate);
          // set dataChange back to default
          this.carInfosChanged = false;
        }
      }
    },
    editCarPerformanceInfo() {
      if (this.notACarOwner) {
        return;
      } else {
        this.notEditableCarPerformanceInfo =
          !this.notEditableCarPerformanceInfo;
        if (this.carPerformanceInfosChanged) {
          // Data set for the update function
          let dataToUpdate = {
            activeUserCarID: this.userCar[0].id,
            gearBox: this.gearBox,
            carConsumption: this.carConsumption,
            horsePower: this.horsePower,
            topSpeed: this.topSpeed,
          };
          // The update function
          this.carStore.updateCarPerformanceInfo(dataToUpdate);
          // set dataChange back to default
          this.carPerformanceInfosChanged = false;
        }
      }
    },
    // Gets user car with current User id and update the infos in this component
    async getUserCarFromStore() {
      await this.carStore.getUserCar(this.activeUser.id);
      // Get further data for enum select input
      await this.carStore.getGearData();
      await this.carStore.getInsuranceData();
      // await this.carStore.getUserCar(200);
      this.userCar = await this.carStore.userCar;
      this.gearData = await this.carStore.gearData;
      this.insuranceData = await this.carStore.insuranceData;
    },
  },
  watch: {
    // Checks if current user is loaded, if yes get user car
    activeUser(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.getUserCarFromStore();
      }
    },
    // Checks if user car is loaded
    userCar(newValue) {
      // User has no car? Then put everything to not available (N/A)
      if (newValue.length === 0) {
        this.drivingLicenseNo = "N/A";
        this.insuranceTyp = "N/A";
        this.insuranceNumber = "N/A";
        this.carBrand = "N/A";
        this.carModel = "N/A";
        this.licensePlate = "N/A";
        this.manufactureYear = 0;
        this.trunkSize = 0;
        this.gearBox = "N/A";
        this.carConsumption = 0;
        this.horsePower = 0;
        this.topSpeed = 0;
        this.notACarOwner = true;
      } else {
        this.drivingLicenseNo = "N/A";
        this.insuranceTyp = newValue[0].insurance_type;
        this.insuranceNumber = newValue[0].insurance_no;
        this.carBrand = "N/A";
        this.carModel = "N/A";
        this.licensePlate = newValue[0].car_license_plate;
        this.manufactureYear = newValue[0].year_of_construction;
        this.trunkSize = newValue[0].trunk_volume_in_liters;
        this.gearBox = newValue[0].gear;
        this.carConsumption = newValue[0].fuel_consume_per_km;
        this.horsePower = newValue[0].kw;
        this.topSpeed = newValue[0].max_speed;
      }
    },
    // Watch if any data were changed by user
    drivingLicenseNo(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.insuranceInfosChanged = true;
      }
    },
    insuranceTyp(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.insuranceInfosChanged = true;
      }
    },
    insuranceNumber(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.insuranceInfosChanged = true;
      }
    },
    carBrand(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.carInfosChanged = true;
      }
    },
    carModel(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.carInfosChanged = true;
      }
    },
    licensePlate(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.carInfosChanged = true;
      }
    },
    manufactureYear(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.carInfosChanged = true;
      }
    },
    trunkSize(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.carInfosChanged = true;
      }
    },
    gearBox(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.carPerformanceInfosChanged = true;
      }
    },
    carConsumption(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.carPerformanceInfosChanged = true;
      }
    },
    horsePower(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.carPerformanceInfosChanged = true;
      }
    },
    topSpeed(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.carPerformanceInfosChanged = true;
      }
    },
  },
};
</script>

<style scoped>
.site__wrapper {
  width: 100%;
  height: 100%;
}
.user-table__wrapper {
  display: block;
  width: 100%;
  height: max-content;
  padding-block: calc(var(--s-pad) / 2);
  background: var(--sec-bg);
  box-shadow: 0px 0px 15px var(--shd-single-cards);
  border-radius: var(--m-brd-rad);
  padding: var(--s-pad);
  margin-bottom: var(--s-marg);
}

table {
  border-collapse: collapse;
}
/*===================================*/
input[type="button"] {
  appearance: none;
  position: absolute;
  width: 0;
  height: 0;
  top: -99999px;
}

/*===================================*/
label {
  display: block;
  height: 100%;
  width: 100%;
  text-align: end;
  padding-block: calc(var(--s-pad) - 0.7rem);
}
label svg {
  width: var(--m-font);
  height: var(--m-font);
  fill: var(--text-light);
}
/* Styling after edit button is pressed */
.change-btn:active ~ svg {
  fill: var(--check-checked);
}
.change-btn__active,
.change-btn__active ~ svg {
  fill: var(--secondary-color);
  box-shadow: 0px 0px 15px var(--secondary-color);
}
/* end of edit button styling */
table :is(td, input, p) {
  font-size: clamp(0.9rem, 3vw, 1.3rem);
}
table :is(th) {
  font-size: calc(var(--s-font) * 1.2);
  font-weight: var(--f-weight-reg);
  text-align: left;
  color: var(--text-dark);
  border-bottom: var(--m-brd) solid var(--check-checked);
  padding-bottom: calc(var(--s-pad) / 2);
}
table :is(td) {
  font-weight: var(--f-weight-m);
  color: var(--text-light);
  text-align: left;
  padding-inline: calc(var(--s-pad) / 2);
  word-break: break-all;
  word-wrap: break-word;
  padding-block: calc(var(--s-pad) - 0.3rem);
}

td:nth-child(odd) {
  text-align: left;
  color: var(--text-mid);
  font-weight: var(--f-weight-m);
}
td:nth-child(even) {
  text-align: right;
}
tr:nth-child(even) {
  border-bottom: var(--s-brd) solid var(--clr-brd-top);
  border-top: var(--s-brd) solid var(--clr-brd-top);
}

/*===============================================*/
/* === Styling of Input Elements === */
.car-settings__form-text-input,
.car-settings__form-text-input:focus {
  font-family: var(--def-font-style);
  border: none;
  color: var(--text-light);
  font-weight: var(--f-weight-m);
  text-align: right;
  background: transparent;
  outline-offset: var(--xs-pad);
  outline-color: var(--shd-single-cards);
}
.car-settings__form-text-input:focus {
  box-shadow: 0 0 20px 1px var(--shd-single-cards);
  background: rgba(102, 100, 100, 0.08);
  color: var(--text-mid);
}

/* .car-settings__drop-down-menu {
  background-color: transparent;
} */
select {
  color: var(--text-mid);
  background: var(--sur-dark-shd);
  border-radius: 0.05rem;
}

option {
  color: var(--text-mid);
  background: var(--sur-dark-shd);
}

/* === End of Styling of Input Elements === */
</style>
