<template>
  <!-- Filter -->
  <section class="msg-filter__section">
    <label for="msg-filter-all" class="msg-filter__label"
      >Zeige alle
      <input
        class="msg-filter__input"
        type="checkbox"
        name="all"
        id="msg-filter-all"
        @change="createFilter"
        v-model="checkBoxAll"
        checked
      />
    </label>
    <label for="msg-filter-sent" class="msg-filter__label"
      >Gesendete
      <input
        class="msg-filter__input"
        type="checkbox"
        name="sent"
        id="msg-filter-sent"
        @change="createFilter"
        v-model="checkBoxSent"
      />
    </label>
    <label for="msg-filter-received" class="msg-filter__label"
      >Erhaltende
      <input
        class="msg-filter__input"
        type="checkbox"
        name="received"
        id="msg-filter-received"
        @change="createFilter"
        v-model="checkBoxReceived"
      />
    </label>
    <label for="msg-filter-accepted" class="msg-filter__label"
      >Bestätigte
      <input
        class="msg-filter__input"
        type="checkbox"
        name="accepted"
        id="msg-filter-accepted"
        @change="createFilter"
        v-model="checkBoxAccepted"
      />
    </label>
    <label for="msg-filter-pending" class="msg-filter__label"
      >Ausstehnde
      <input
        class="msg-filter__input"
        type="checkbox"
        name="pending"
        id="msg-filter-pending"
        @change="createFilter"
        v-model="checkBoxPending"
      />
    </label>
    <label for="msg-filter-declined" class="msg-filter__label"
      >Abgelehnte
      <input
        class="msg-filter__input"
        type="checkbox"
        name="declined"
        id="msg-filter-declined"
        @change="createFilter"
        v-model="checkBoxDeclined"
      />
    </label>
  </section>
  <!-- End of Filter -->
  <section v-if="routeData">
    <ul>
      <li v-for="item in filterRouteRequests" :key="item.id">
        <MessageBox
          :routeData="item"
          :period="convertTime(item.start_time, item.end_time)"
          :activeUser="activeUser"
          @update-route-status="updateRouteStatus"
        ></MessageBox>
      </li>
    </ul>
  </section>
  <section v-else>Loadding....</section>
</template>

<script>
import { useAuthenticationStore } from "@/stores/useAuthenticationStore";
import { supabase } from "@/lib/supabaseClient.js";
import MessageBox from "@/components/messenger/MessageBox.vue";

export default {
  data() {
    return {
      routeData: null,
      // Needs to be 0 for all users, who have no car
      userCar: 0,
      activeUser: null,
      startTime: null,
      startEnd: null,
      checkBoxValue: 0,
      currentFilter: ["all"],
      checkBoxAll: true,
      checkBoxSent: false,
      checkBoxReceived: false,
      checkBoxAccepted: false,
      checkBoxPending: false,
      checkBoxDeclined: false,
    };
  },
  components: { MessageBox },
  async setup() {
    const authenticationStore = await useAuthenticationStore();
    return { authenticationStore };
  },
  async mounted() {
    // Vorrübergehene Lösung...
    this.activeUser = this.authenticationStore.activeUser;
    await this.getRoutes();
  },
  computed: {
    filterRouteRequests() {
      // Gives everything if all is in the currentFilter
      if (this.currentFilter.includes("all")) {
        return this.routeData;
        // Check for Multicombinations if one of the two gropus is together active (or more)
      } else if (
        (this.checkBoxReceived || this.checkBoxSent) &&
        (this.checkBoxAccepted || this.checkBoxDeclined || this.checkBoxPending)
      ) {
        return this.routeData.filter((item) => {
          const arrayToCheck = [];
          arrayToCheck.push(item.status, item.msgStatus);
          // Use .every in this combination and all items (status, msgStatus) in array for this combination
          return arrayToCheck.every((i) => this.currentFilter.includes(i));
        });
      } else {
        // For everything in which no combination is slected use single selection
        return this.routeData.filter((item) => {
          const arrayToCheck = [];
          arrayToCheck.push(item.status, item.msgStatus);
          // Single slection with some and the arry here is the currentFilter (which can contain one single filter, while the arrayToCheck has always two)
          return this.currentFilter.some((i) => arrayToCheck.includes(i));
        });
      }
    },
  },
  methods: {
    createFilter(event) {
      const filterName = event.target.name;
      // filterStatus = truthy/falsy
      const filterStatus = event.target.checked;
      // 'All' active means everything else deactivaed
      if (filterName === "all" && filterStatus) {
        this.currentFilter = ["all"];
        this.checkBoxSent = false;
        this.checkBoxReceived = false;
        this.checkBoxAccepted = false;
        this.checkBoxPending = false;
        this.checkBoxDeclined = false;
        // If anything is activaed, add it to the filter, but remove 'all'
      } else if (filterStatus) {
        this.currentFilter = this.currentFilter.filter((filterItem) => {
          return filterItem !== "all";
        });
        this.checkBoxAll = false;
        this.currentFilter.push(filterName);
        // If anything is deactivaed remove it from the filter
      } else if (filterStatus === false) {
        this.currentFilter = this.currentFilter.filter((filterItem) => {
          return filterItem !== filterName;
        });
      }
    },
    async getRoutes() {
      try {
        const { data, error } = await supabase
          .from("cars")
          .select("id")
          .eq("user_id", this.activeUser[0].id);
        if (error) {
          throw error;
        } else if (data.length) {
          this.userCar = data[0].id;
        }
      } catch (error) {
        alert(error);
      }

      try {
        const { data, error } = await supabase
          .from("routes")
          .select(
            "*, user_id(username), car_id(id, user_id(username)), purpose_id(purpose_name)"
          )
          // Bei Mehreren Autos für einen User muss hier noch etwas gemacht werden
          .or(
            `user_id.eq.${this.activeUser[0].id},and(car_id.in.(${this.userCar}))`
          );
        // console.log("routes: ", data);
        this.routeData = data;
        this.addSenderOrReceiver(this.routeData);
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      }
    },
    addSenderOrReceiver(newRouteData) {
      // Gives each route an additonal attribute "msgStatus".
      // Each msgStatus gets the value sender or reciver accordingly to the active User (For the Filter Function)
      newRouteData.forEach((item) => {
        if (this.activeUser[0].username === item.user_id.username) {
          item.msgStatus = "sent";
        } else if (this.activeUser[0].username !== item.user_id.username) {
          item.msgStatus = "received";
        }
      });
    },
    updateRouteStatus(value) {
      const newStatus = value[0];
      this.routeData.forEach((item) => {
        if (item.id === newStatus.id) item.status = newStatus.status;
      });
    },
    convertTime(firstDate, secondDate) {
      const startDate = new Date(firstDate);
      const endDate = new Date(secondDate);
      const option = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      const dateTimeFormat = new Intl.DateTimeFormat("de", option);
      return dateTimeFormat.formatRange(startDate, endDate);
    },
  },
};
</script>

<style scoped>
.msg-filter__section {
  display: grid;
  column-gap: 0.5rem;
  row-gap: 0.2rem;
  grid-template-columns: repeat(3, 1fr);
  width: 95%;
  margin-inline: auto;
}
.msg-filter__label {
  padding-block: 0.5rem;
  /* background: var(--surface-light); */
  text-align: center;
  font-weight: 600;
  color: var(--clr-font-lightest);
  border-bottom: 2px solid transparent;
}
/* .msg-filter__input:checked */
.msg-filter__label:has(.msg-filter__input:checked) {
  /* background: var(--surface-light); */
  border-bottom: 2px solid green;
}
.msg-filter__input {
  appearance: none;
  width: 0;
  position: absolute;
  top: -99999px;
}
</style>
