<template>
  <body>
    <header class="capp-mainpage__header">
      <article><h1>CAPP</h1></article>
      <article>
        <span>
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
      <section class="test">
        <SmallCarCard />
        <SmallCarCard />
        <SmallCarCard />
        <!-- <p>
          distinctio quis quaerat eum nobis magni alias quo earum iure hic vel
          quidem eius assumenda odio eaque? Quasi incidunt sequi quis laborum
          cum. Sed commodi quo eius aut consequatur id natus a voluptate ullam,
          aliquam veritatis tenetur qui praesentium non ut ex esse adipisci.
          Dignissimos aliquam quisquam magni dolorem quam illum, non ad. Tempore
          et velit vel. Ea possimus totam adipisci incidunt necessitatibus
          inventore maiores deserunt voluptas alias dolor, nemo repellendus
          eaque est ipsum modi corrupti vero impedit similique. Magni incidunt
          facere ab. Mollitia deserunt velit at magnam, quod nisi corrupti
          deleniti sit excepturi reprehenderit hic officiis et, explicabo
          repellendus a qui eligendi id sequi maiores cupiditate. Voluptates
          culpa quisquam corporis saepe odio. Quis vitae repellat quae, corrupti
          consectetur officiis corporis aspernatur adipisci vel cum ab qui error
          totam quia dolorem quibusdam maxime dolore facere tempora ut id, dolor
          eos incidunt? A, exercitationem. Ipsam aliquid illo libero amet
          suscipit voluptas culpa animi quo nemo vitae dolore fugiat recusandae
          eius quia maiores. Voluptate maxime accusantium nisi non eaque dolore.
          Cum quae accusantium placeat dolorum quo natus, possimus ducimus alias
          ex minus ipsam recusandae saepe distinctio labore perferendis,
          voluptas repellendus earum sapiente itaque blanditiis quam! Deleniti
          quam maxime praesentium molestiae. Repellendus amet aut voluptatum
          tempore quis numquam ut aperiam eveniet vero voluptatibus eos porro
          earum fugit, adipisci corporis deleniti ducimus ad iure laudantium
          facere? Molestiae quos repellat alias expedita sunt? Aspernatur ullam
          qui, pariatur facere ab delectus maxime architecto sit aut deserunt
          quam quaerat reprehenderit doloremque corporis cum totam inventore
        </p> -->
      </section>
    </main>
    <footer>Footer</footer>
    <nav class="nav-placeholder"></nav>
  </body>
</template>

<script>
import FilterDropDown from "@/components/FilterDropDown.vue";
import SmallCarCard from "@/components/SmallCarCard.vue";
import IconType from "@/components/icon-type/IconType.vue";
import FuelType from "@/components/icon-type/fuelType.vue";
import TrunkType from "@/components/icon-type/TrunkType.vue";
import DifferentType from "@/components/icon-type/DifferentTypes.vue";
export default {
  components: {
    FilterDropDown,
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
  width: 100%;
  height: 20rem;
  background: linear-gradient(
    to right,
    var(--primary-mid),
    var(--primary-veryDark)
  );
  padding-inline: 2rem;
  position: absolute;
  display: flex;
  justify-content: space-between;

  top: 0;
  left: 0;
}
.capp-mainpage__header article {
  height: 100%;
  width: 5rem;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.capp-mainpage__header article > h1 {
  text-align: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: var(--l-font);
  font-family: var(--font-logo);
  color: var(--secondary-light);
}

.app-mainpage__main-page {
  width: 100%;
  height: 100%;
  padding-inline: 0rem;
  border-radius: 2rem 2rem 0 0;
  margin-top: 1.5rem;
  overflow: scroll;
  position: fixed;
}
.main-page-style {
  background: var(--secondary-default);
  box-shadow: inset 10px 0px 10px rgba(0, 0, 0, 0.2);
}

main::-webkit-scrollbar {
  display: none;
}
.main-page__shadow {
  width: 100%;
  height: 30%;

  position: absolute;
  z-index: 10;
  border-radius: 2rem 2rem 0 0;
  top: 60px;
  left: 0;

  box-shadow: inset 0px 15px 15px rgba(0, 0, 0, 0.4);
}
.test {
  width: 90%;
  margin-inline: auto;

  /* background: var(--secondary-light); */
}

/*=================================================================*/
/*=====================nav-placeholder=======================================*/

.nav-placeholder {
  background: linear-gradient(
    to right,
    var(--primary-mid),
    var(--primary-veryDark)
  );
  display: block;
  position: absolute;
  border-radius: 1.5rem 1.5rem 0 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  z-index: 20;
}
/*==============================================*/
/*===============footer - placegolder==========================*/
footer {
  display: none;
}

/*===============================================*/
.filter-icon__wrapper {
  position: absolute;
  top: -50%;
}
.filter-box {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  width: 2.5rem;
  height: 3rem;
  margin-right: 1rem;
}
.filter-icon__line {
  display: block;
  width: 100%;
  border: 1px solid white;
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
  background: white;
  position: absolute;
  top: -4px;
  transition: 0.2s ease-in-out;
}
.ball-2 {
  border: 1px solid white;
  background: var(--primary-dark);
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
  .nav-placeholder {
    background: linear-gradient(
      to right,
      var(--primary-mid),
      var(--primary-veryDark)
    );
    display: block;
    position: absolute;
    border-radius: 0rem 1.5rem 1.5rem 0;
    top: 15%;
    left: 0;
    width: 5rem;
    height: 80%;
    z-index: 20;
  }

  footer {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    font-size: 3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background: red;
    height: 5rem;
    width: 100vw;
  }
}
</style>
