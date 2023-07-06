<template>
  <h1>Hallo Stefan, viel Spaß beim Programieren</h1>
  <UserEvaluation />
  <UserQuestionMenueVue />
  <CheckBox />
  <div class="test-wrapper">
    <ToogleButton :defaultState="true" />
  </div>
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
    <FuelType :fuelType="'Gas'"></FuelType>
    <FuelType :fuelType="'Diesel'"> </FuelType>
    <FuelType :fuelType="'Electro'"> </FuelType>
    <FuelType :fuelType="'Autogas'"></FuelType>
    <FuelType :fuelType="'Hybrid'"> </FuelType>
    <FuelType :fuelType="'Wasserstoff'"> </FuelType>
  </span>
  <span class="car-icon__holder">
    <TrunkType :trunkType="'S'"></TrunkType>
    <TrunkType :trunkType="'M'"> </TrunkType>
    <TrunkType :trunkType="'L'"> </TrunkType>
    <TrunkType :trunkType="'XL'"></TrunkType>
    <TrunkType :trunkType="'XXL'"> </TrunkType>
  </span>
  <span class="car-icon__holder">
    <DifferentType :differentType="'Isofix'"></DifferentType>
    <DifferentType :differentType="'Raucher'"> </DifferentType>
    <DifferentType :differentType="'Nicht-Raucher'"> </DifferentType>
    <DifferentType :differentType="'Tiere'"> </DifferentType>
    <DifferentType :differentType="'Keine Tiere'"> </DifferentType>
  </span>
</template>

<script>
import CheckBox from "@/components/input-elements/CheckBox.vue";
import RadioButton from "@/components/input-elements/RadioButton.vue";
import UserEvaluation from "@/components/UserEvaluation.vue";
import UserQuestionMenueVue from "@/components/UserQuestionMenue.vue";
import IconType from "@/components/icon-type/IconType.vue";
import FuelType from "@/components/icon-type/fuelType.vue";
import TrunkType from "@/components/icon-type/TrunkType.vue";
import DifferentType from "@/components/icon-type/DifferentTypes.vue";
import ToogleButton from "@/components/input-elements/DarkModeButton.vue";

export default {
  components: {
    CheckBox,
    RadioButton,
    UserQuestionMenueVue,
    IconType,
    FuelType,
    TrunkType,
    DifferentType,
    ToogleButton,
  },
};
</script>

<style scoped>
.car-icon__holder {
  display: flex;
  gap: 2rem;
}
.test-wrapper {
  width: 100vw;
  height: 4rem;
  display: grid;
  place-content: center;
}
</style>
