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

      <InputText :inputType="'datetime-local'" :inputId="'start-period'">Start Date/Time</InputText>
    </form>
    <!-- Test von Pinia mit der Option API -->
    <!-- <button @click.prevent="getUser()">Get new State</button>
    <pre>
      {{ users }}
    </pre> -->
  </div>
</template>

<script>
import InputText from "@/components/input-elements/InputText.vue";
// Holt uns den passenden Store
import { userStateStore } from "@/stores/userStateStorage";
// mapState und mapActions sind teile der Pinia Options API
import { mapState, mapActions } from "pinia";

export default {
  components: { InputText },
  // Die Actions von Pina werden mit den methods ausgeführt in der Option API
  methods: {
    ...mapActions(userStateStore, { getUser: "getUser" }),
  },
  // Hier als Beispiel wird der normale State von Pina mit computed geladen
  // Kann auch anders genutzt werden z.B. data()...
  computed: {
    ...mapState(userStateStore, ["users"]),
  },
};
</script>

<style scoped></style>
