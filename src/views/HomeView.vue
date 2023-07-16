<template>
  <div>
    <h1>Test von Home View</h1>
    <user-question-menue />
    <p>&nbsp;</p>
    <hr />
    <p>&nbsp;</p>
    <filter-drop-down />
  </div>
</template>

<script>
import FilterDropDown from "../components/FilterDropDown.vue";
import UserQuestionMenue from "../components/UserQuestionMenue.vue";
export default {
  components: { FilterDropDown, UserQuestionMenue },
};
</script>

<style scoped></style>
