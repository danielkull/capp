<template>
  <div class="test">
    <span class="theme-toogle__wrapper">
      <input
        type="checkbox"
        name="theme-toogle-btn"
        id="theme-toogle-btn"
        @click="dark == 'no' ? (dark = 'yes') : (dark = 'no')"
      />
      <label for="theme-toogle-btn" class="theme-toogle-switch">
        <span class="icon-wrapper">
          <div class="sun"></div>
          <div class="moon"></div>
        </span>
      </label>
    </span>
  </div>
</template>

<script>
export default {
  name: "#app",
  data() {
    return {
      dark: "no",
    };
  },
};
</script>

<style scoped>
.test {
  width: 10rem;
  height: 10rem;
  display: grid;
  place-content: center;
}
.theme-toogle__wrapper {
  width: 3rem;
  height: 3rem;
  background: green;
  /* outline: 5px solid black; */
  outline-offset: 0px;
  border-radius: 100%;
  border: 2px solid red;
  overflow: hidden;
}

#theme-toogle-btn {
  appearance: none;
  display: block;
  position: absolute;
  top: -99999px;
}
#theme-toogle-btn:checked {
  background: green;
}

#theme-toogle-btn:checked + .theme-toogle-switch .icon-wrapper {
  background: red;
  translate: -50% 0;
}
.icon-wrapper {
  display: flex;
  align-items: center;
  background: grey;
  transition: translate 0.3s ease-in-out;
}
.sun,
.moon {
  display: block;
  width: 3rem;
  height: 3rem;
  background: violet;
  border-radius: 100%;
}

.moon {
  background: black;
}
.theme-toogle-switch {
  width: 4rem;
  height: 4rem;
  background: yellow;
  display: flex;
  align-items: center;

  width: 6rem;
  height: 3rem;
}
</style>
