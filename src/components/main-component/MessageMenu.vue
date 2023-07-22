<template>
  <!-- Filter -->
  <section class="msg-filter__section">
    <label for="msg-filter-all" class="msg-filter__label">Zeige alle
      <input class="msg-filter__input" type="checkbox" name="msg-filter-all" id="msg-filter-all">
    </label>
    <label for="msg-filter-accepted" class="msg-filter__label">Bestätigte
      <input class="msg-filter__input" type="checkbox" name="msg-filter-accepted" id="msg-filter-accepted">
    </label>
    <label for="msg-filter-pending" class="msg-filter__label">Ausstehnde
      <input class="msg-filter__input" type="checkbox" name="msg-filter-pending" id="msg-filter-pending">
    </label>
    <label for="msg-filter-declined" class="msg-filter__label">Abgelehnte
      <input class="msg-filter__input" type="checkbox" name="msg-filter-declined" id="msg-filter-declined">
    </label>
    <label for="msg-filter-sent" class="msg-filter__label">Gesendete
      <input class="msg-filter__input" type="checkbox" name="msg-filter-sent" id="msg-filter-sent">
    </label>
    <label for="msg-filter-received" class="msg-filter__label">Erhaltende
      <input class="msg-filter__input" type="checkbox" name="msg-filter-received" id="msg-filter-received">
    </label>
  </section>
  <!-- End of Filter -->
  <section v-if="routeData">
    <ul>
      <li v-for="item in routeData" :key="item.id">
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
    };
  },
  components: { MessageBox },
  setup() {
    const authenticationStore = useAuthenticationStore();
    return { authenticationStore };
  },
  mounted() {
    // Vorrübergehene Lösung...
    setTimeout(() => {
      this.activeUser = this.authenticationStore.activeUser;
      this.getRoutes();
    }, 500);
  },
  methods: {
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
          .select("*, user_id(username), car_id(id, user_id(username)), purpose_id(purpose_name)")
          // Bei Mehreren Autos für einen User muss hier noch etwas gemacht werden
          .or(
            `user_id.eq.${this.activeUser[0].id},and(car_id.in.(${this.userCar}))`
          );
        // console.log("routes: ", data);
        this.routeData = data;
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      }
    },
    updateRouteStatus(value) {
      const newStatus = value[0]
      this.routeData.forEach((item) => {
        if(item.id === newStatus.id)
        item.status = newStatus.status
      })
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
  grid-template-columns: repeat(3, 1fr);
}
.msg-filter__label {
 outline: 1px solid red;
 padding-block: 0.5rem;
 background: var(--surface-light);
 text-align: center;
 font-weight: 600;
 color: var(--clr-font-lightest);
}
.msg-filter__input{

}
</style>
