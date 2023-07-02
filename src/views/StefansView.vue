<template>
  <h1>Hallo Stefan, viel Spaß beim Programieren</h1>
  <CheckBox />
  <RadioButton />
  <RadioButton />
  <RadioButton />
  <UserQuestionMenueVue />
  <IconType :carType="'Kleinwagen'"></IconType>
  <IconType :carType="'Bus'"> </IconType>
  <IconType :carType="'SUV'"> </IconType>
</template>

<script>
import CheckBox from "@/components/input-elements/CheckBox.vue";
import RadioButton from "@/components/input-elements/RadioButton.vue";
import UserQuestionMenueVue from "@/components/UserQuestionMenue.vue";
import IconType from "@/components/icon-type/IconType.vue";

export default {
  components: { CheckBox, RadioButton, UserQuestionMenueVue, IconType },
};
</script>

<style scoped></style>
