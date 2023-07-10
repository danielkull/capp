<template>
  <label for=""></label>
  <input type="radio" id="" name="filter" class="capp-radio__default" />
</template>

<script>
export default {
  // props: {
  //   radioSelector: "Test",
  //   radioWidth: "1rem",
  // },
};
</script>

<style scoped>
.capp-radio__default {
  all: unset;
  display: block;
  width: var(--btn-height-default);
  aspect-ratio: 1;
  border-radius: var(--circle-radius);
  margin: var(--margin-default);
  border: 1px solid var(--clr-trans);

  position: relative;
}
.capp-radio__default::after {
  width: var(--radio-Width, 1rem);
  aspect-ratio: 1;
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  transition: all 0.2s;
  border-radius: var(--circle-radius);
  outline: 2px solid var(--radio-def);
  outline-offset: 0px;
}
.capp-radio__default:checked::after {
  background: var(--radio-act);
  outline-offset: 7px;
  outline: 1px solid var(--radio-act);
}
</style>
