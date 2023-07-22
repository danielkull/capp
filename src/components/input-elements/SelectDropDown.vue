<!-- ================================================== -->
<!-- ========= Einführung in diese Komponente ========= -->
<!-- ================================================== -->

<!-- Die Select Komponente benötigt mindestens eine :selectId-->
<!-- Zudem benötigt es noch ein v-model:selectedData="AusgewählteDatei" -->
<!-- Deine "AusgewählteDatei" kannst du in data() auffangen -->
<!-- Um der Select Komponent daten zu geben musst du :givenData="DataPackage" mit deinen Daten befüllen  -->
<!-- Ein Datenpacket kann ein enum sein (mit nur einer Daten Spalte) wie "fuel_type" oder "category"-->
<!-- Oder auch zwei Spaltige Daten mit Id und name wie "purpose" oder "brands" -->

<!-- Das ist ein beispiel wie man DatenPackete mit zwei Spalten aus Supabase holt -->
<!-- async getPurposes() {
  try {
    const { data, error } = await supabase.from("purposes").select();
    if (error) throw error;
    if (data) {
      this.purposeData = data;
    }
  } catch (error) {
    alert(error.message);
  }
}, -->
<!-- Bei enum Werten muss man allerdings das etwas anders machen:-->
<!-- async getCategorys() {
  try {
    const { data, error } = await supabase.rpc("get_category");

    if (error) throw error;

    if (data) {
      this.categoryData = data;
    }
  } catch (error) {
    alert(error.message);
  }
}, -->
<!-- mit .rpc() kann man eine Supabase Funktion aufrufen die man davor erstellen muss -->
<!-- Folgende Funktionen wurden bereits erstellt und können genutzt werden: -->
<!-- get_category -->
<!-- get_fuel -->
<!-- get_gear -->
<!-- get_insurance -->
<!-- get_route_status -->

<!-- Hier ein Beispiel wie eine Komponente Aussehen könnte -->
<!-- <SelectDropDown
        v-model:selectedData="purposeSelected"
        :selectId="'select-purpose'"
        :givenData="purposeData"
        :defaultText="'Klicke auf mich und wähle deinen Grund aus.'"
        :isRequired="true"
      >
        Dein Grund fürs Ausleihen</SelectDropDown -->

<template>
  <div class="capp-input__wrapper">
    <span>
      <label class="capp-label__default" :for="selectId">
        <slot>Drop Down Menu</slot>
      </label>
      <select
        class="capp-input__default"
        :name="selectId"
        :id="selectId"
        :value="selectedData"
        @input="$emit('update:selectedData', $event.target.value)"
        :required="isRequired"
      >
        <option disabled value="">{{ defaultText }}</option>
        <option v-for="name in givenData" :value="name.id" :key="name.id">
          <p v-if="multiColumn">
            <span v-if="Object.keys(name)[1] === 'car_type_name'">{{
              Object.values(name)[4]["brand_name"]
            }}</span>
            {{ Object.values(name)[1] }}
            <span v-if="Object.keys(name)[1] === 'car_type_name'"
              >( {{ Object.values(name)[2] }} )</span
            >
            <span v-if="Object.keys(name)[1] === 'username'">
              <span
                v-if="
                  Object.values(name)[3] !== null &&
                  Object.values(name)[4] !== null
                "
              >
                -
              </span>
              {{ Object.values(name)[3] }} {{ Object.values(name)[4] }}
            </span>
          </p>
          <p v-else>{{ name }}</p>
        </option>
      </select>
    </span>
    <div class="capp-input__help-wrapper">
      <!-- Start: Help/Question Button -->
      <button class="capp-input__btn" @click.prevent="showHelp = !showHelp">
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
      </button>
      <!-- End: Help/Question Button -->

      <!-- Start: Help/Question Information Text -->
      <Transition>
        <article class="capp-input__help" v-if="showHelp">
          <p>Klicke auf das Dropdown-Menü und triff Deine Auswahl</p>
        </article>
      </Transition>
      <!-- End: Help/Question Information Text -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectDropDown",
  props: {
    selectId: {
      type: String,
      default: "dropdown",
      required: true,
    },
    selectedData: {
      type: String,
      default: null,
    },
    givenData: {
      type: Array,
    },
    defaultText: {
      type: String,
      default: "--For what do you need the car?",
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:selectedData"],
  data() {
    return {
      multiColumn: null,
      showHelp: false,
    };
  },
  methods: {
    givenDataCorrection() {
      this.givenData.filter((item) => {
        if (item.id !== undefined) {
          this.multiColumn = true;
        } else {
          this.multiColumn = false;
        }
      });
    },
  },
  beforeUpdate() {
    this.givenDataCorrection();
  },
};
</script>

<style scoped>
.capp-input__wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  padding-top: 1rem;
}
.capp-input__wrapper span {
  width: 100%;
}
.capp-label__default {
  display: block;
  color: var(--primary-dark);

  padding-block: var(--s-font);
  font-size: clamp(1rem, 2vw, 1.5rem);
  letter-spacing: 0.1rem;
}

.capp-input__default {
  display: block;
  width: 80%;
  border: 2px solid var(--clr-trans);
  border-radius: 0.5rem;
  padding-inline: 0.5rem;
  padding-block: 0.5rem;
  font-size: inherit;
  background: var(--clr-sur-l);
  color: var(--text-light);
  outline: none;
  border: 1px solid transparent;
}
.capp-input__default:hover {
  cursor: pointer;
}
.capp-input__default::placeholder {
  opacity: 0.5;
}

.capp-input__default:focus {
  border: 1px solid var(--primary-dark);
}

.capp-input__help-wrapper {
  position: relative;
}
.capp-input__btn {
  all: unset;
  width: calc(var(--s-font) * 2);
  aspect-ratio: 1;
  position: absolute;
  top: 50%;
  right: 10%;
}

.capp-input__btn svg {
  fill: var(--secondary-default);
  position: relative;
}

.capp-input__help {
  position: absolute;
  top: -60px;
  left: -300px;
  display: block;
  font-size: var(--s-font);
  background: var(--clr-sur-l);
  color: var(--text-light);
  border-radius: 1rem;
  width: 80vw;
  height: auto;
  padding: var(--s-pad);
  text-align: start;
  z-index: 10;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.4), 0 0 60px rgb(0, 0, 0, 0.4);
}
/*=================Helper Text show/hide Transition (works with <Transition> from vue) =================*/

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
