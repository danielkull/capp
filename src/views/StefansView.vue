<template>
  <h1>Hallo Stefan, viel Spaß beim Programieren</h1>

  <UserEvaluation />

  <!-- <UserQuestionMenueVue /> -->
</template>

<script>
import CheckBox from "@/components/input-elements/CheckBox.vue";
import RadioButton from "@/components/input-elements/RadioButton.vue";
import UserEvaluation from "@/components/UserEvaluation.vue";
import UserQuestionMenueVue from "@/components/UserQuestionMenue.vue";

export default {
  components: { CheckBox, RadioButton, UserQuestionMenueVue, UserEvaluation },
};
</script>

<style scoped></style>
