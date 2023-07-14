<template>
  <input
    type="checkbox"
    name="filter"
    id=""
    class="capp-btn__default"
    style="--after-heigth: 1.7rem"
  />
</template>

<script>
export default {};
</script>

<style scoped>
.capp-btn__default {
  --after-heigth: 1.7rem;
  cursor: pointer;
  appearance: none;
  display: block;
  position: relative;
  width: clamp(3.5rem, 10vw, 4rem);

  height: calc(var(--after-heigth) + 0.3rem);
  border-radius: var(--m-brd-rad);
  /* margin-block: var(--margin-default); */
  background: var(--check-default);
  transition: background-color 0.2s ease-out;
  /* padding-block: calc(var(--after-heigth) - 0.7rem); */
}
.capp-btn__default::after {
  content: "";
  position: absolute;
  display: block;
  top: 50%;
  left: 0%;
  translate: 10% -50%;
  height: var(--after-heigth);
  aspect-ratio: 1;
  border-radius: var(--circle-radius);
  background: var(--clr-after-btn);
  transition-duration: 0.2s, 0.2s;
  transition-property: background-color, translate;
  /* transition: background-color 0.2s ease-out; */
}
.capp-btn__default:checked {
  background-color: var(--check-checked);
}
.capp-btn__default:checked::after {
  translate: 95% -50%;
  transition: 0.3s ease-out;
  background-color: var(--clr-after-btn);
}

@media screen and (min-width: 1000px) {
  .capp-btn__default:checked::after {
    translate: 127% -50%;
  }
}
</style>
