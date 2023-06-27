<template>
  <h1>Hallo Stefan, viel Spaß beim Programieren</h1>
  <CheckBox />
  <RadioButton />
  <RadioButton />
  <RadioButton />
  <UserQuestionMenueVue />
</template>

<script>
import CheckBox from "@/components/input-elements/CheckBox.vue";
import RadioButton from "@/components/input-elements/RadioButton.vue";
import UserQuestionMenueVue from "@/components/UserQuestionMenue.vue";

export default {
  components: { CheckBox, RadioButton, UserQuestionMenueVue },
};
</script>

<style scoped></style>
