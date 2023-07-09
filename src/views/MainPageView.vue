<template>
  <body>
    <header class="capp-mainpage__header">
      <article class="capp-mainpage__logo-font"><h1>CAPP</h1></article>
      <article class="filter-icon__aricle">
        <span class="filter-icon__frame">
          <input type="checkbox" class="filter-icon__wrapper" id="filter-box" />
          <label for="filter-box" class="filter-box">
            <span class="filter-icon__line">
              <span class="filter-icon__ball ball-1"></span>
            </span>
            <span class="filter-icon__line line-small">
              <span class="filter-icon__ball ball-2"></span>
            </span>
            <span class="filter-icon__line">
              <span class="filter-icon__ball ball-3"></span>
            </span>
          </label>
        </span>
      </article>
      <div class="main-page__shadow"></div>
    </header>

    <main class="app-mainpage__main-page main-page-style">
      <section class="filter-choice-frame"></section>
      <section class="filter-choice"><filter-drop-down /></section>
      <section class="mainpage__card-page">
        <SmallCarCard />
        <SmallCarCard />
        <SmallCarCard />
        <SmallCarCard />
        <SmallCarCard />
        <SmallCarCard />
      </section>
    </main>
    <footer>
      <NavBarMenue />
    </footer>
  </body>
</template>

<script>
import FilterDropDown from "@/components/FilterDropDown.vue";
import NavBarMenue from "@/components/main-component/NavBar.vue";
import SmallCarCard from "@/components/SmallCarCard.vue";
import IconType from "@/components/icon-type/IconType.vue";
import FuelType from "@/components/icon-type/fuelType.vue";
import TrunkType from "@/components/icon-type/TrunkType.vue";
import DifferentType from "@/components/icon-type/DifferentTypes.vue";

export default {
  components: {
    FilterDropDown,
    NavBarMenue,
    SmallCarCard,
    IconType,
    FuelType,
    TrunkType,
    DifferentType,
  },
};
</script>

<style scoped>
:root {
  height: 100vh;
  width: 100vw;
}

.capp-mainpage__header {
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  top: 0;
  left: 0;
  background: linear-gradient(
    to right,
    var(--clr-prime-m) 40%,
    var(--clr-prime-vd)
  );
  padding-inline: 1.2rem;
}

.capp-mainpage__header article {
  display: block;
  height: 100%;
  width: max-content;
  margin-top: 1rem;
}

.filter-icon__frame {
  display: grid;
  place-content: center;
  width: max-content;
  height: max-content;
  padding-inline: 0.5rem;
}
.capp-mainpage__logo-font {
  margin-bottom: 1.8rem;
  align-items: center;
}
.capp-mainpage__logo-font h1 {
  height: 100%;
  font-size: var(--l-font);
  font-family: var(--font-logo);
  color: var(--logo-font-color);
  font-weight: 500;
}

.app-mainpage__main-page {
  width: 100%;
  height: 100%;
  padding-inline: 0rem;
  border-radius: var(--m-brd-rad) var(--m-brd-rad) 0 0;
  margin-top: 3.8rem;
  overflow: scroll;
  position: fixed;
}
.main-page-style {
  background: var(--clr-bg);
  box-shadow: inset 10px 0px 10px rgba(0, 0, 0, 0.2);
}

main::-webkit-scrollbar {
  appearance: none;
  width: 0;
}
.main-page__shadow {
  position: absolute;
  z-index: 9;
  top: 60px;
  left: 0;
  width: 100%;
  height: 30%;
  border-radius: var(--m-brd-rad) var(--m-brd-rad) 0 0;
  box-shadow: inset 0px 15px 15px rgba(0, 0, 0, 0.4);
}
.mainpage__card-page {
  width: 90%;
  margin-inline: auto;
}

/*=================================================================*/

/*===============footer - placegolder==========================*/

/*===============================================*/
.filter-icon__wrapper {
  position: absolute;
  top: -50%;
}
.filter-box {
  cursor: pointer;
  display: flex;
  width: 2.5rem;
  height: 3rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}
.filter-icon__line {
  display: block;
  width: 100%;
  border: 1px solid var(--clr-iconsvg);
  opacity: 0.84;

  position: relative;
}
.line-small {
  width: 80%;
  align-self: end;
}
.filter-icon__ball {
  display: block;
  width: 0.5rem;
  aspect-ratio: 1;
  border-radius: 100%;
  background: var(--clr-iconsvg);
  position: absolute;
  top: -4px;
  transition: 0.2s ease-in-out;
}
.ball-2 {
  border: 1px solid var(--clr-iconsvg);
  background: var(--clr-prime-vd);
  left: 10%;
}
.ball-1,
.ball-3 {
  left: 70%;
}

#filter-box:checked + .filter-box .ball-1,
#filter-box:checked + .filter-box .ball-3 {
  left: 10%;
}
#filter-box:checked + .filter-box .ball-2 {
  left: 70%;
}

:has(#filter-box:checked) .filter-choice {
  translate: 0 0px;
}
/*====================================================*/

.filter-choice {
  background: var(--secondray-ligth);
  height: 40rem;
  width: 100%;
  translate: 0 -650px;
  transition: 0.6s ease-in-out;
  background: var(--secondary-light);
  position: absolute;
  border-radius: 0 0 1.5rem 1.5rem;
  top: 0;
  left: 0;
}
.filter-choice-frame {
  position: absolute;
  transition: 0.8s ease-in-out;
  border-radius: 0 0 1.5rem 1.5rem;
  top: 0;
  left: 0;
  height: 30rem;
  width: 100%;
  translate: 0 -650px;
  background-color: rgb(255 255 255 / 0);
  backdrop-filter: blur(2px);
}
:has(#filter-box:checked) .filter-choice-frame {
  translate: 0 600px;
  background-color: rgb(255 255 255 / 0.3);
  backdrop-filter: blur(2px);
}
@media screen and (min-width: 900px) {
  .app-mainpage__main-page {
    width: 100%;
    height: 100%;
    padding-inline: 1rem;
    border-radius: 2rem 2rem 0 0;
    margin-top: 5rem;
  }
  .main-page__shadow {
    width: 100%;
    height: 50%;
    top: 99px;
    left: 0;
  }

  /*========================================*/
}
</style>
