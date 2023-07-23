<template>
  <div>
    <h1>Test von Home View</h1>
    <filter-drop-down />
    <div class="img-container">
      <div class="img-wrapper">
        <img src="../assets/img/car-img/02-renault-twingo.jpg" />
      </div>
      <div class="img-wrapper">
        <img src="../assets/img/car-img/03-opel-vectra.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import FilterDropDown from "../components/FilterDropDown.vue";
export default {
  components: { FilterDropDown },
};
</script>

<style scoped>
.img-container {
  width: 100%;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

.img-container > .img-wrapper > img {
  width: 100%;
}
</style>
