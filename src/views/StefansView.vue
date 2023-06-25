<template>
  <h1>Hallo</h1>
  <CheckBox />
  <RadioButton />
  <RadioButton />
  <RadioButton />
  <UserQuestionMenueVue />
</template>

<script>
import CheckBox from "./input-elements/CheckBox.vue";
import RadioButton from "./input-elements/RadioButton.vue";
import UserQuestionMenueVue from "./UserQuestionMenue.vue";

export default {
  components: { CheckBox, RadioButton, UserQuestionMenueVue },
};
</script>

<style scoped></style>
