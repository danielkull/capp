<template>
  <div class="theme-btn__wrapper">
    <input type="checkbox" @change="switchTheme" id="theme-btn" />
    <label
      for="theme-btn"
      class="theme-btn__label"
      :class="{ 'theme-btn__label:checked': currentState === 'dark-theme' }"
    >
      <div id="test">
        <span class="switch-mode light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="currentColor"
            class="bi bi-cloud-sun-fill light"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"
            />
            <path
              d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"
            />
          </svg>
        </span>
        <span class="switch-mode dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="currentColor"
            class="bi bi-cloud-moon-fill dark"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"
            />
            <path
              d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"
            />
          </svg>
        </span>
      </div>
    </label>
  </div>
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
        wrapper.style.setProperty("translate", "-50%");
      } else {
        this.setTheme("light-theme");
        wrapper.style.setProperty("translate", "0%");
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
input[type="checkbox"] {
  appearance: none;
  width: 0;
  height: 0;
  position: absolute;

  top: -99999px;
}

.theme-btn__wrapper {
  --wrapper-size: 2rem;
  display: flex;
  align-items: center;
  width: var(--wrapper-size);
  aspect-ratio: 1;
  margin-inline: auto;

  border-radius: 100%;
  overflow: hidden;
  outline: 3px solid var(--primary-dark);
}

.theme-btn__label {
  display: flex;
  width: var(--rd-circle);
  aspect-ratio: 1;
  border-radius: 100%;
}

#test {
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.2s;
}

.switch-mode {
  display: grid;
  place-content: center;
  width: max-content;
  aspect-ratio: 1;
  border-radius: 100%;
}
span > svg {
  height: var(--wrapper-size);
  aspect-ratio: 1;
  padding: calc(var(--wrapper-size) / 6);
}
.light {
  background: var(--secondary-dark);
  fill: var(--font-color-dark);
}
.dark {
  background: var(--secondary-dark);
  fill: var(--font-color-light);
}
</style>
