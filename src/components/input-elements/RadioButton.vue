<template>
  <label for=""></label>
  <input type="radio" id="" name="" class="capp-radio__default" />
</template>

<script>
export default {
  // props: {
  //   radioId: {
  //     type: String,
  //     required: true,
  //   },
  //   radioName: {
  //     type: String,
  //     required: true,
  //   },
  // },
};
</script>

<style scoped>
.capp-radio__default {
  all: unset;
  display: block;
  width: var(--btn-height-default);
  height: var(--btn-height-default);
  border-radius: var(--circle-radius);
  margin: var(--margin-default);
  border: 1px solid var(--clr-trans);
  position: relative;
}
.capp-radio__default::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 1rem;
  height: 1rem;
  transition: 0.3s;
  border-radius: var(--circle-radius);
  outline: 2px solid var(--font-color-light);
  outline-offset: 0px;
}
.capp-radio__default:checked::after {
  background: var(--primary-mid);
  outline-offset: 7px;
  outline: 1px solid var(--primary-mid);
}
</style>
