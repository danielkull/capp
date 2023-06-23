<template>
  <input type="checkbox" name="filter" id="" class="capp-btn__default" />
</template>

<script>
export default {};
</script>

<style scoped>
.capp-btn__default {
  cursor: pointer;
  appearance: none;
  display: block;
  position: relative;
  width: calc(var(--btn-height-default) * 2);
  height: var(--btn-height-default);
  border-radius: var(--btn-height-default);
  margin-block: var(--margin-default);
  background: var(--secondary-mid);
}
.capp-btn__default::after {
  content: "";
  position: absolute;
  display: block;
  top: -2.3%;
  left: -3%;
  width: var(--btn-height-default);
  aspect-ratio: 1;
  border-radius: var(--circle-radius);
  background: var(--secondary-dark);
  transition: 0.3s ease-out;
}
.capp-btn__default:checked {
  background: var(--primary-light);
}
.capp-btn__default:checked::after {
  left: 50.2%;
  transition: 0.3s ease-out;
  background: var(--primary-dark);
}
</style>
