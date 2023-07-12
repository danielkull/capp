<template>
  <h1>Hallo Stefan, viel Spaß beim Programieren</h1>
  <AccordionDefault />
  <UserEvaluation />
  <UserQuestionMenueVue />
  <CheckBox />
  <MainButton />
  <RadioButton :style="{ '--radio-Width': radioWidth }" />
  <RadioButton />
  <RadioButton />
</template>

<script>
import CheckBox from "@/components/input-elements/CheckBox.vue";
import RadioButton from "@/components/input-elements/RadioButton.vue";
import UserEvaluation from "@/components/UserEvaluation.vue";
import UserQuestionMenueVue from "@/components/UserQuestionMenue.vue";

import AccordionDefault from "@/components/main-component/AccordionDefault.vue";

export default {
  components: {
    CheckBox,
    RadioButton,
    UserQuestionMenueVue,
    AccordionDefault,
  },
};
</script>

<style scoped>
.test-wrapper {
  width: 100vw;
  height: 4rem;
  display: grid;
  place-content: center;
}
h1 {
  margin-bottom: 3rem;
}
</style>
