<template>
  <!-- <AccordionDefault />
  <UserEvaluation /> -->
  <!-- <UserQuestionMenueVue /> -->
  <!-- <CheckBox /> -->
  <!-- <FAQ /> -->
  <MainMenue />
</template>

<script>
import CheckBox from "@/components/input-elements/CheckBox.vue";
import RadioButton from "@/components/input-elements/RadioButton.vue";
import UserEvaluation from "@/components/UserEvaluation.vue";
import UserQuestionMenueVue from "@/components/UserQuestionMenue.vue";
import FAQ from "@/components/user-menue/FaqMenue.vue";

import AccordionDefault from "@/components/main-component/AccordionDefault.vue";
import MainMenue from "@/components/main-component/MainMenue.vue";

export default {
  components: {
    CheckBox,
    RadioButton,
    UserQuestionMenueVue,
    AccordionDefault,
    FAQ,
    MainMenue,
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
