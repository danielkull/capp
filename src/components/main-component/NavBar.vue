<template>
  <nav class="nav-bar__wrapper">
    <input
      type="checkbox"
      name="nav-menue"
      id="user-icon"
      class="nav-bar__btn-icons"
    /><label class="nav-bar__icon-frame" for="user-icon"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        class="bi bi-person-square"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"
        /></svg
    ></label>
    <input
      type="checkbox"
      name="nav-menue"
      id="calendar-icon"
      class="nav-bar__btn-icons"
    /><label class="nav-bar__icon-frame" for="calendar-icon"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        class="bi bi-calendar3-week"
        viewBox="0 0 16 16"
      >
        <path
          d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
        />
        <path
          class="calender-path"
          d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        /></svg
    ></label>
    <input
      type="checkbox"
      name="nav-menue"
      id="message-icon"
      class="nav-bar__btn-icons"
      @toggle="testToggle"
    /><label class="nav-bar__icon-frame" for="message-icon"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        class="bi bi-chat-right-dots"
        viewBox="0 0 16 16"
      >
        <path
          d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"
        />
        <path
          class="path"
          d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
        /></svg
    ></label>
    <input
      type="checkbox"
      name="nav-menue"
      id="menue-icon"
      class="nav-bar__btn-icons"
      @click="testItem"
    /><label class="nav-bar__icon-frame" for="menue-icon">
      <div class="menue-wrapper">
        <span class="menue-strip menue-strip1"></span
        ><span class="menue-strip menue-strip2"></span
        ><span class="menue-strip menue-strip1"></span>
      </div>
    </label>
  </nav>
  <article class="nav-bar__menu-wrapper">
    <section class="nav-bar__menu-user menue-cards"></section>
    <section class="nav-bar__menu-calender menue-cards"></section>
    <section class="nav-bar__menu-message menue-cards"></section>
    <section class="nav-bar__menu-main menue-cards">
      <section class="menu-main__wrapper">
        <MainMenue />
      </section>
    </section>
  </article>
</template>

<script>
import MainMenue from "@/components/main-component/MainMenue.vue";
const btn = document.querySelector("menue-icon");

export default {
  components: {
    MainMenue,
  },

  methods: {
    testItem() {
      this.$emit("toggle", this.item);
      console.log("halloo");
    },
    testToggle() {
      console.log("geklappt");
    },
  },
};
</script>

<style scoped>
/*==========================================================*/
/*    Icons gedrückt halten       */

/*==========================================================*/
/* section:target {
  translate: 0% 0;
} */
.nav-bar__wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100vw;

  height: 4.5rem;
  border-top: var(--m-brd) solid var(--clr-prime-l);
  background: linear-gradient(to top, var(--clr-prime-vd), var(--clr-prime-m));
  border-radius: calc(var(--s-brd-rad) + 0.2rem) calc(var(--s-brd-rad) + 0.2rem)
    0 0;
  box-shadow: 0 -5px 30px var(--nav-shadow);
}

.nav-bar__btn-icons {
  appearance: none;
  width: 0rem;
  aspect-ratio: 1;
  position: absolute;
  top: -99999px;
}
label {
  display: grid;
  place-content: center;
  width: 4rem;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  padding: 0.4rem;
  border: solid;
  border-width: var(--s-brd);
  border-color: var(--clr-trans);
}
svg {
  width: 90%;
  margin-inline: auto;
  aspect-ratio: 1;
  fill: var(--nav-icon-def);
}

/*========== Animate icon backgound =================*/

#user-icon:checked + label,
#message-icon:checked + label,
#calendar-icon:checked + label,
#menue-icon:checked + label {
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2),
    inset -5px -5px 10px rgba(255, 255, 255, 0.2);
}
/*===================================================*/
/*========== Animate message Icon=================*/
.path,
.calender-path {
  opacity: 1;
  transition: all 0.2s ease-in-out;
}
#message-icon:active + label svg > .path {
  opacity: 0;
  translate: 0px -10px;
}

#calendar-icon:active + label svg > .calender-path {
  opacity: 0;
  translate: 0px -10px;
}

/*===================================================*/
/*========== Color checked icon svg =================*/

#user-icon:checked + label svg,
#message-icon:checked + label svg,
#calendar-icon:checked + label svg {
  fill: var(--nav-icon-act);
}
#menue-icon:checked + label .menue-strip2 {
  width: 100%;
  background: var(--nav-icon-act);
}
#menue-icon:checked + label .menue-strip1 {
  width: 70%;
  background: var(--nav-icon-act);
}
/*===================================================*/
/*========== Menue Icon =================*/
.menue-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 3rem;
  aspect-ratio: 1;
  padding: 0.2rem;
}
.menue-strip {
  width: 100%;
  height: 0.25rem;
  background: var(--nav-icon-def);
  border-radius: 0.6rem;
  transition: width 0.2s ease-in-out;
}
.menue-strip2 {
  width: 70%;
  align-self: end;
}

/*==================================================*/

.menue-cards {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: red;
  position: fixed;
  z-index: 8;
  margin-top: 220%;
  margin-top: 25%;

  transition: margin 0.5s ease-in-out;
  border-radius: 2rem;
}
.nav-bar__menu-user {
  z-index: 9;
  border-radius: 0;

  margin-top: 220%;
}

.nav-bar__menu-main {
  background: var(--menue-bg);
  padding: var(--m-pad) var(--s-pad);
  border-top: 2px solid var(--list-color);
  margin-top: 220%;
}
.nav-bar__menu-calender {
  background: olive;
  margin-top: 220%;
}
.nav-bar__menu-message {
  background: dodgerblue;

  margin-top: 220%;
}

:has(#user-icon:checked) .nav-bar__menu-user {
  margin-top: 0%;
}
:has(#calendar-icon:checked) .nav-bar__menu-calender {
  margin-top: 16.1%;
}
:has(#message-icon:checked) .nav-bar__menu-message {
  margin-top: 16.1%;
}
:has(#menue-icon:checked) .nav-bar__menu-main {
  margin-top: 16.1%;
}

/*=============================================================*/

.menu-main__wrapper {
  width: 100%;
  height: 100%;
  margin-inline: auto;
  background: var(--surface-light);
  /* margin-top: 0%; */
}
</style>
