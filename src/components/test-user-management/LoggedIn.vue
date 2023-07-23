<!-- This "LoggedIn.vue" is part of "TestUserManagementView.vue" and only for test purpose, -->
<!-- before building it in the main part of the app -->

<template>
  <UserEvaluation></UserEvaluation>
  <h1 class="title">You are logged in</h1>
  <div>
    <Button
      @click="logOut"
      :value="loading ? 'Loading...' : 'Log Out'"
      :disabled="loading"
      class="btn-abstand"
    ></Button>
  </div>
  <div>
    <Calendar></Calendar>
    <div>
      <input
        type="datetime-local"
        name="Start"
        id="start-time"
        v-model="requestRouteData.startTime"
      />
      <input
        type="datetime-local"
        name="End"
        id="end-time"
        v-model="requestRouteData.endTime"
      />
    </div>
    <div>
      <label for="route-purpose">Choose the reason for this route:</label>
      <select
        name="purpose"
        id="route-purpose"
        v-model="requestRouteData.purposeId"
      >
        <option disabled value="">--For what do you need the car?</option>
        <option v-for="item in purposesData" :value="item.id" :key="item.id">
          {{ item.purpose_name }}
        </option>
      </select>
    </div>
    <div>
      <label for="additional-infos">Give a personal touch:</label>
      <textarea
        v-model="requestRouteData.destination"
        name="infos"
        id="additional-infos"
        cols="30"
        rows="10"
      >
        Hi, your car looks promising. I like to rent it for the following reasons.
        -Bla
        -Blubb
        -Quick
      </textarea>
    </div>
  </div>
  <h3 class="header-3">Aktiver User</h3>
  <pre>
    {{ this.authenticationStore.activeUser }}
  </pre>

  <h3 class="header-3">Das Auto des Users</h3>
  <pre>
    {{ userCarData }}
    {{ this.carStore.userCar }}
  </pre>
  <input
    type="button"
    value="User Car"
    @click="showUserCar(this.authenticationStore.activeUser[0].id)"
  />

  <h3 class="header-3">Liste von allen Autos</h3>
  <ul>
    <li v-for="car in this.carStore.cars">
      <h3>User: {{ car.user_id }} rents car {{ car.id }}</h3>
      <p>Car License Plate: {{ car.car_license_plate }}</p>
      <input type="button" value="Rent Car" @click="createRoute(car.id)" />
    </li>
  </ul>
  <pre>
    {{ this.carStore.cars }}
  </pre>
</template>

<script>
import UserEvaluation from "@/components/UserEvaluation.vue";
import Calendar from "@/components/Calendar.vue";
import Button from "@/components/input-elements/Button.vue";
import { useAuthenticationStore } from "@/stores/useAuthenticationStore";
import { useCarStore } from "@/stores/useCarStore";
import { supabase } from "@/lib/supabaseClient";

export default {
  components: { Button, Calendar, UserEvaluation },
  data() {
    return {
      loading: false,
      userCarData: "",
      purposesData: null,
      requestRouteData: {
        purposeId: null,
        destination:
          "Hi, your car looks promising. I like to rent it for the following reasons.",
        startTime: "2023-07-11 12:44:23",
        endTime: "2023-07-11 22:44:23",
      },
    };
  },
  setup() {
    const authenticationStore = useAuthenticationStore();
    const carStore = useCarStore();

    return { authenticationStore, carStore };
  },
  methods: {
    logOut() {
      this.authenticationStore.logOut();
    },
    async createRoute(rentCarId) {
      // console.log("Purpose: ",typeof this.requestRouteData.purposeId)
      // console.log("Destination: ",typeof this.requestRouteData.destination)
      try {
        const activeUser = await this.authenticationStore.activeUser[0].id;

        const { data, error } = await supabase.from("routes").insert({
          user_id: activeUser,
          car_id: rentCarId,
          purpose_id: this.requestRouteData.purposeId,
          destination: this.requestRouteData.destination,
          start_time: this.requestRouteData.startTime,
          end_time: this.requestRouteData.endTime,
        });

        /*         const { data, error } = await supabase
          .from("routes")
          .update({
            purpose_id: this.purposeId,
            car_id: rentCarId,
            destination: this.destination,
                        start_time: this.startTime,
            end_time: this.endTime,
          })
          .eq("id", 8); */

        if (error) {
          throw error;
        }
      } catch (error) {
        alert(error.message);
      }
    },
    async showUserCar(activeUser) {
      //   const activeUserID = this.authenticationStore.activeUser[0].id;

      this.userCarData = await this.carStore.getUserCar(activeUser);
      //   return this.carStore.userCar;
    },
    async getPurposes() {
      try {
        const { data, error } = await supabase.from("purposes").select();
        this.purposesData = data;
        if (error) {
          throw error;
        }
      } catch (error) {
        alert(error.message);
      }
    },
  },
  async mounted() {
    this.getPurposes();
    await this.authenticationStore.getProfileData();
    await this.carStore.getCarData();
    const activeUserID = await this.authenticationStore.activeUser[0].id;
    await this.carStore.getUserCar(activeUserID);
    this.userCarData = this.carStore.userCar;
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
}

.header-3 {
  font-size: 1.2rem;
  font-weight: bold;
}

.Log-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  background-color: lightgray;
  outline-color: lightgray;
}
.btn-abstand {
  margin: 1rem;
}

textarea {
  width: 100%;
  font-family: inherit;
  font-weight: medium;
  resize: none;
  overflow: auto;
  overscroll-behavior: contain;
  overscroll-behavior-y: contain;
  padding: calc(var(--padding-default) / 2);
  outline: none;

  border: var(--m-brd) solid var(--area-default);
  border-radius: calc(var(--s-brd-rad) / 2);
  background: var(--bg-txt-field);
  color: var(--font-color-dark);
}
textarea:hover {
  border: var(--m-brd) solid var(--area-hover);
}
textarea::placeholder {
  color: var(--font-color-light);
}

textarea:focus {
  outline: none;
  border: 2px solid var(--area-focus);
  background: var(--secondary-light);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}
</style>
