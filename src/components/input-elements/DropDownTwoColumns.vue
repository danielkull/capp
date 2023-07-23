<!-- ================================================== -->
<!-- ========= Einführung in diese Komponente ========= -->
<!-- ================================================== -->

<!-- Die Select Komponente benötigt mindestens eine :selectId-->
<!-- Zudem benötigt es noch ein v-model:selectedData="AusgewählteDatei" -->
<!-- Deine "AusgewählteDatei" kannst du in data() auffangen -->
<!-- Um der Select Komponent daten zu geben musst du :givenData="DataPackage" mit deinen Daten befüllen  -->
<!-- Ein Datenpacket muss zwei Spaltige sein. Mit Id und name wie "purpose" oder "brands" -->

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
        <option v-for="item in givenData" :value="item.id" :key="item.id">
          <p>
            {{ Object.values(item)[1] }}
          </p>
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
      default: "--Click me",
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:selectedData"],
  data() {
    return {
      showHelp: false,
    };
  },
};
</script>

<style scoped>
.capp-input__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: calc(2rem + 1vh);
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

.capp-input__default {
  display: block;
  width: 100%;
  border: var(--m-brd) solid var(--clr-trans);
  border-radius: 0.5rem;
  padding-inline: var(--xs-pad);
  padding-block: var(--s-pad);

  font-size: var(--font-list-label-s);
  background: var(--clr-sur-l);
  color: var(--text-light);
  outline: none;
  border: 1px solid transparent;
}
.capp-input__default:hover {
  cursor: pointer;
}

.capp-input__default:focus {
  border-color: var(--primary-middle);
}
.capp-input__help-wrapper {
  position: relative;
}
.capp-input__btn {
  all: unset;
  width: calc(var(--s-font) * 2);
  aspect-ratio: 1;
}
.capp-input__btn:active > svg {
  fill: var(--primary-middle);
}
.capp-input__btn svg {
  fill: var(--list-default);
  position: relative;
}
.capp-input__help-wrapper {
  translate: 0 100%;
  margin-left: 1rem;
}
.capp-input__help {
  position: absolute;
  top: 60px;
  left: -300px;
  display: block;
  font-size: var(--font-list-label);
  background: var(--clr-sur-l);
  color: var(--text-mid);
  border-radius: var(--s-brd-rad);
  width: 18rem;
  height: auto;
  padding: var(--s-pad);
  text-align: start;
  z-index: 10;
  box-shadow: 0 0 20px var(--foot-shd-d), 0 0 50px var(--foot-shd-d);
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
