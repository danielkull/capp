<template>
  <section class="menue-expand__outer-wrapper" id="booking-page">
    <header>
      <a href="#" class="back-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-caret-left-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
          />
        </svg>
      </a>
      <h2 class="menue-expand__site-header">Buche deine Fahrt</h2>
    </header>
    <div class="menue-expand__inner-wrapper">
      <section class="menue-expand__site-main">
        <!-------------------------------------------------------------------->

        <!----------Hier Content--------->
        <form>
          <InputText
            v-model:inputData="bookStartDate"
            :inputId="'book-start-date'"
            :inputType="'datetime-local'"
            ><h3>Buchungsstart</h3>
          </InputText>
          <InputText
            v-model:inputData="bookEndDate"
            :inputId="'book-end-date'"
            :inputType="'datetime-local'"
            ><h3>Buchungsende</h3>
          </InputText>
          <DropDownTwoColumns
            v-model:selectedData="purposeSelected"
            :selectId="'select-purpose'"
            :givenData="purposeData"
            :defaultText="'-- Bitte hier auswählen'"
            :isRequired="true"
          >
            <h3>Wähle deinen Grund für die Fahrt</h3>
          </DropDownTwoColumns>
          <TextAreaWithoutButton
            v-model:inputData="bookingMsg"
            id="booking-text"
            name="booking-text"
            placeholder="Bitte schreibe eine kurze Nachricht..."
            cols="10"
            rows="5"
          >
          </TextAreaWithoutButton>

          <p
            v-if="inputIsInValid"
            class="capp-input__invalid-input"
            :class="{
              input__valid: !inputIsInValid,
              input__invalid: inputIsInValid,
            }"
          >
            {{ invalidInputMsg }}
          </p>
          <Button
            id="booking-btn"
            :value="loading ? 'Loading...' : 'Send Request'"
            :disabled="loading"
            class="booking-btn-distance"
            @click.prevent="handleBooking"
          ></Button>
          <!-- Zwischen Lösung, führt eine getter funktion bei pinia aus und updated die Daten -->
          {{ checkForData }}
        </form>
        <!-------------------------------------------------------------------->
      </section>
    </div>
  </section>
</template>

<script>
import InputText from "@/components/input-elements/InputText.vue";
import DropDownTwoColumns from "@/components/input-elements/DropDownTwoColumns.vue";
import TextAreaWithoutButton from "@/components/input-elements/TextAreaWithoutButton.vue";
import Button from "@/components/input-elements/Button.vue";

import { useGlobalStateStore } from "@/stores/useGlobalStateStore";
import { useAuthenticationStore } from "@/stores/useAuthenticationStore";
import { supabase } from "@/lib/supabaseClient";

export default {
  data() {
    return {
      carId: null,
      store: null,
      purposeData: null,
      bookStartDate: null,
      bookEndDate: null,
      purposeSelected: null,
      bookingMsg: null,
      loading: false,
      invalidInputMsg: "",
      inputIsInValid: false,
    };
  },
  components: {
    InputText,
    DropDownTwoColumns,
    TextAreaWithoutButton,
    Button,
  },
  setup() {
    // Initialize the store at the begining
    const globalStateStore = useGlobalStateStore();
    const authenticationStore = useAuthenticationStore();
    return { globalStateStore, authenticationStore };
  },
  created() {
    const emptySession = this.checkForEmptyObject(
      this.authenticationStore.session
    );
    if (emptySession) {
      this.getSessionInfos();
    }
  },
  mounted() {
    this.getPurposes();
  },
  beforeUpdate() {
    this.store = this.globalStateStore.currentDate;
    this.carId = this.globalStateStore.currentCarId;
  },
  computed: {
    checkForData() {
      this.globalStateStore.updateCurrentData;
      this.bookStartDate = this.globalStateStore.currentDate;
      this.bookEndDate = this.globalStateStore.currentDate;
    },
  },
  methods: {
    checkForValidDate() {
      // Converts Date to Number in Milliseconds
      const currentStartDate = Date.parse(this.bookStartDate);
      const currentEndDate = Date.parse(this.bookEndDate);
      // Defince 30 Minutes
      const setTimeDiffernce = 30;
      // Adds the allowed time differents (in Milliseconds)
      let allowedTimeDifference = currentStartDate + setTimeDiffernce * 60000;
      return currentEndDate >= allowedTimeDifference ? true : false;
    },
    getSessionInfos() {
      this.authenticationStore.getSession();
      this.authenticationStore.onAuthStateChange();
    },
    checkForEmptyObject(objectName) {
      return (
        objectName &&
        Object.keys(objectName).length === 0 &&
        objectName.constructor === Object
      );
    },
    async getPurposes() {
      try {
        const { data, error } = await supabase.from("purposes").select();
        if (error) throw error;
        if (data) {
          this.purposeData = data;
        }
      } catch (error) {
        alert(error.message);
      }
    },
    handleBooking() {
      if (this.bookingFormComplete()) {
        this.createRoute();
        this.globalStateStore.translateCard = "0% 0%";
      }
    },
    bookingFormComplete() {
      // Hier zuvor noch das Datum Prüfen
      // Beide Zeitangaben dürfen nicht exakt gleich sein (Vielleicht gibt man default dem end noch 30 Minuten)
      // Die EndZeit darf vom Datum nicht vor der Start liegen und wenn beide Datums gleich sind. Darf die Zeit nicht davor liegen
      let dateValid = this.checkForValidDate();

      if (
        this.purposeSelected &&
        this.bookingMsg &&
        this.bookStartDate &&
        this.bookEndDate &&
        dateValid
      ) {
        this.inputIsInValid = false;
        return true;
      } else if (dateValid === false) {
        this.invalidInputMsg =
          "Deine Zeitangabe passt leider nicht. Bitte plane für das Buchungsende mindesten 30 Minuten Abstand ein.";
        this.inputIsInValid = true;
        return false;
      } else {
        this.invalidInputMsg = "Leider sind deine Buchungsdaten unvollständig";
        this.inputIsInValid = true;
        return false;
      }
    },
    async createRoute() {
      try {
        this.loading = true;
        const activeUser = await this.authenticationStore.activeUser[0].id;

        const { error } = await supabase.from("routes").insert({
          user_id: activeUser,
          car_id: this.carId,
          purpose_id: this.purposeSelected,
          booking_msg: this.bookingMsg,
          start_time: this.bookStartDate,
          end_time: this.bookEndDate,
        });
        if (error) {
          throw error;
        }
      } catch (error) {
        alert(error.message);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
section:target {
  translate: 0% 0;
}
.menue-expand__inner-wrapper,
.menue-expand__outer-wrapper {
  min-width: 100vw;
  min-width: 100dvw;
}

.menue-expand__outer-wrapper {
  display: block;
  overflow: hidden;
  position: absolute;
  z-index: 15;
  top: 0%;
  left: 0%;
  translate: -100% 0;
  min-height: 100vh;
  min-height: 100dvh;
  background: linear-gradient(
    to right,
    var(--clr-prime-m) 40%,
    var(--clr-prime-vd)
  );
  width: 0;
  transition: 0.2s;
}
.menue-expand__inner-wrapper {
  min-height: 95.5vh;
  min-height: 90.5dvh;
  display: flex;
  flex-direction: column;
  background: var(--clr-bg);
  margin-top: -1vh;
  border-radius: var(--m-brd-rad) var(--m-brd-rad) 0 0;
  box-shadow: inset 0 10px 20px var(--box-shd);
  border-top: 1px solid var(--clr-sur-l);
}
.menue-expand__outer-wrapper header {
  width: 90%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--s-pad);
  margin-inline: auto;
}
header h2 {
  font-weight: var(--f-expand-header);
  color: var(--logo-font-color);
  letter-spacing: 0.05em;
  font-size: var(--m-font);
  height: 100%;
}
h3 {
  color: var(--primary-middle);
  font-size: clamp(0.9rem, 3vw, 2rem);
  font-weight: var(--f-weight-m);
  margin-top: var(--xs-marg);
  padding-bottom: var(--xs-pad);

  line-height: 1.5em;
}
.back-btn {
  width: max-content;
  height: max-content;
  translate: -20px 2px;
}
.back-btn > svg {
  width: 2rem;
  aspect-ratio: 1;
  fill: var(--clr-like-def);
}

.menue-expand__site-main {
  /*============Hintergund für DarkMode============*/
  display: block;
  width: 95%;
  height: 90.5vh;
  margin-top: 0.2rem;
  margin-inline: auto;
  padding-inline: var(--s-pad);
  border-radius: var(--s-brd-rad) var(--s-brd-rad) 0 0;
  background: var(--bg-content);

  overflow: scroll;
}

/* ==== Input is Invalid CSS ==== */
.capp-input__invalid-input {
  font-size: var(--font-list-label-s);
  width: 100%;
  height: auto;
  text-align: center;
  padding-right: calc(var(--s-font) / 2);
}
.input__valid {
  color: transparent;
}

.input__invalid {
  color: var(--accent-color-dark);
}
/* =============================== */
.booking-btn-distance {
  margin-block: 1.5rem;
}
</style>
