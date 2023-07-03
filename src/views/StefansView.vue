<template>
  <h1>Hallo Stefan, viel Spaß beim Programieren</h1>
 <UserEvaluation />
 <UserQuestionMenueVue /> 
  <CheckBox />
  <RadioButton />
  <RadioButton />
  <RadioButton />
  <UserQuestionMenueVue />
  <span class="car-icon__holder">
    <IconType :carType="'Kleinwagen'"></IconType>
    <IconType :carType="'Bus'"> </IconType>
    <IconType :carType="'SUV'"> </IconType>
    <IconType :carType="'Cabrio'"></IconType>
    <IconType :carType="'Pickup'"> </IconType>
    <IconType :carType="'Transporter'"> </IconType>
  </span>
  <span class="car-icon__holder">
    <IconType :fuelType="'Gas'"></IconType>
    <IconType :fuelType="'Diesel'"> </IconType>
    <IconType :fuelType="'Electro'"> </IconType>
    <IconType :fuelType="'Autogas'"></IconType>
    <IconType :fuelType="'Hybrid'"> </IconType>
    <IconType :fuelType="'Wasserstoff'"> </IconType>
  </span>
</template>

<script>
import CheckBox from "@/components/input-elements/CheckBox.vue";
import RadioButton from "@/components/input-elements/RadioButton.vue";
import UserEvaluation from "@/components/UserEvaluation.vue";
import UserQuestionMenueVue from "@/components/UserQuestionMenue.vue";
import IconType from "@/components/icon-type/IconType.vue";
import FuelType from "@/components/icon-type/fuelType.vue";

export default {
  components: {
    CheckBox,
    RadioButton,
    UserQuestionMenueVue,
    IconType,
    FuelType,
  },
};
</script>

<style scoped>
.car-icon__holder {
  display: flex;
  gap: 2rem;
}
</style>
