<template>
  <body :class="{ active: currenState }">
    <div class="wrapper">
      <span class="theme-toogle__wrapper">
        <input
          id="theme-toogle-btn"
          type="button"
          value="OFF"
          class="toggle-btn"
          @click="currenState = !currenState"
        />
        <label for="theme-toogle-btn" class="theme-toogle-switch">
          <span class="icon-wrapper">
            <div class="sun">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                class="bi bi-cloud-sun-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"
                />
                <path
                  d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"
                />
              </svg>
            </div>
            <div class="moon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                class="bi bi-cloud-moon-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"
                />
                <path
                  d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"
                />
              </svg>
            </div>
          </span>
        </label>
      </span>

      <!-- <input
      type="button"
      value="OFF"
      class="toggle-btn"
      @click="currenState = !currenState"
    /> -->

      <p>testetxt</p>
      <div>gebdfjfjj</div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      currenState: false,
    };
  },
  toggle() {
    const bkg = document.querySelector("body");
    this.currenState = this.currenState ? false : true;
    if (true) {
      document.body.classList("active");
    } else {
    }
  },
};
</script>

<style scoped>
p {
  color: var(--primary-dark);
}
div {
  border: 1px solid var(--error-color);
  width: 10rem;
  height: 7rem;
  background: var(--secondary-dark);
  color: var(--font-color-light);
}
/*=========*/
.wrapper {
  display: grid;
  place-content: center;
}
.theme-toogle__wrapper {
  width: 3rem;
  height: 3rem;
  background: lightgrey;
  /* overflow: hidden; */
  outline: 3px solid grey;
  outline-offset: 0px;
  border-radius: 100%;
}

#theme-toogle-btn {
  appearance: none;
  display: block;
  position: absolute;
  top: -99999px;
}
.theme-toogle__wrapper:has(#theme-toogle-btn:checked) {
  background: lightgrey;
  outline-color: red;
}

#theme-toogle-btn:checked + .theme-toogle-switch .icon-wrapper {
  background: lightgrey;
  translate: 200px 0;
}
.icon-wrapper {
  display: flex;
  align-items: center;

  transition: translate 0.3s ease-in-out;
}
.sun,
.moon {
  display: grid;
  place-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  padding: 0.5rem;
}
.sun {
  background: white;
}
.moon {
  background: darkgrey;
}

.moon > svg,
.sun > svg {
  width: 100%;
  height: 100%;
  translate: 0 -3px;
}
.moon > svg {
  fill: black;
}
.sun > svg {
  fill: green;
}
.theme-toogle-switch {
  width: 4rem;
  height: 4rem;

  display: flex;
  align-items: center;
  position: relative;

  width: 6rem;
  height: 3rem;
}
</style>
