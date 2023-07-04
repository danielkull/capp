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
    </form>
    <pre>
      {{ userState }}
    </pre>
  </div>
</template>

<script>
import InputText from "@/components/input-elements/InputText.vue";
import { userStateStore } from "@/stores/userStateStorage";

export default {
  components: { InputText },
  setup() {
    const userState = userStateStore();
    userState.getUser();
    return { userState };
  },
};
</script>

<style scoped></style>
