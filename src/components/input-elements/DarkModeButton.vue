<template>
  <input
    type="checkbox"
    id="theme-btn"
    @change="switchTheme"
    class="capp-btn__default"
  />
</template>

<script>
export default {
  mounted() {
    const initcurrentState = this.getTheme() || this.getMediaPreference();
    this.setTheme(initcurrentState);
  },

  data() {
    return {
      currentState: "light-theme",
    };
  },

  methods: {
    switchTheme() {
      const wrapper = document.getElementById("test");
      const currentState = localStorage.getItem("current-theme");
      if (currentState === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },

    getTheme() {
      return localStorage.getItem("current-theme");
    },

    setTheme(theme) {
      localStorage.setItem("current-theme", theme);
      this.currentState = theme;
      document.documentElement.className = theme;
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
  },
};
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

  background: var(--check-default);
  transition: background-color 0.2s ease-out;
}
.capp-btn__default::after {
  content: "";
  position: absolute;
  display: block;
  top: 50%;
  left: 6%;
  translate: 83% -50%;
  height: var(--after-heigth);
  aspect-ratio: 1;
  border-radius: var(--circle-radius);
  background: var(--clr-after-btn);
  transition-duration: 0.1s, 0.1s;
  transition-property: background-color, translate;
}
.capp-btn__default:checked {
  background-color: var(--check-checked);
}
.capp-btn__default:checked::after {
  translate: 0% -50%;
  transition: 0.3s ease-out;
  background-color: var(--clr-after-btn);
}

@media screen and (min-width: 1000px) {
  .capp-btn__default:checked::after {
    translate: 127% -50%;
  }
}
</style>
