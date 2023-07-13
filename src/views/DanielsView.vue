<template>
  <div>
    <!-- Standard Input Feld benötigt mindestens eine :inputID -->
    <!-- Das InputText hat ein Fallback slot mit einem default Text -->
    <InputText :inputId="'you-need-an-ID'"></InputText>

    <!-- Wenn man ein anderes Input Feld haben möchte dann kann man noch den :inputTypen -->
    <!-- festlegen und z.B. auch den :inputPlaceholder -->
    <!-- Der :inputTyp liegt als Standard auf "text", man kann aber auch noch "password" und "email" auswählen-->
    <!-- Wenn man weitere besondere Input Elemente haben möchte, dann müssen die erst in die Komponente eingebaut werden. -->
    <!-- Die Auswahl der passenden Typen, sorgt dafür das die entsprechenden Hilfstexte oder zusatz Symbole richtig angezeigt werden. -->
    <!-- Zudem haben diese auch eine passende Formvalidierung! -->
    <InputText
      :inputId="'email'"
      :inputType="'email'"
      :inputPlaceholder="'beispiel@provider.com'"
      >Email</InputText
    >

    <!-- Hier wurde als Beispiel der slot mit dem default Text überschrieben mit "Another Mail"-->
    <InputText
      :inputId="'another-mail'"
      :inputType="'email'"
      :inputPlaceholder="'dontTrust@Rabbits.com'"
      >Another Mail</InputText
    >

    <!-- Wenn man ein Password input element benutz ohne es in ein <form></form> tag einzubinden,  -->
    <!-- dann gibt er eine Warnmeldung.  -->
    <form action="#">
      <InputText :inputId="'first-password'" :inputType="'password'"
        >Password</InputText
      >

      <InputText
        v-model:inputData="test"
        :inputType="'datetime-local'"
        :inputId="'start-period'"
        >Start Date/Time</InputText
      >
      <SelectDropDown
        v-model:selectedData="purposeSelected"
        :selectId="'select-purpose'"
        :givenData="purposeData"
      ></SelectDropDown>
      {{ purposeSelected }}
    </form>
    <!-- Test von Pinia mit der Option API -->
    <!-- <button @click.prevent="getUser()">Get new State</button>
    <pre>
      {{ users }}
    </pre> -->
  </div>
  <p>{{ test }}</p>
</template>

<script>
import InputText from "@/components/input-elements/InputText.vue";
import SelectDropDown from "@/components/input-elements/SelectDropDown.vue";
import { supabase } from "@/lib/supabaseClient.js";
// Holt uns den passenden Store
import { userStateStore } from "@/stores/userStateStorage";
// mapState und mapActions sind teile der Pinia Options API
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      test: null,
      purposeSelected: null,
      purposeData: null,
    };
  },
  components: { InputText, SelectDropDown },
  // Die Actions von Pina werden mit den methods ausgeführt in der Option API
  methods: {
    ...mapActions(userStateStore, { getUser: "getUser" }),
  },
  // Hier als Beispiel wird der normale State von Pina mit computed geladen
  // Kann auch anders genutzt werden z.B. data()...
  computed: {
    ...mapState(userStateStore, ["users"]),
  },
  mounted() {
    this.getPurposes();
  },
  methods: {
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
  },
};
</script>

<style scoped></style>
