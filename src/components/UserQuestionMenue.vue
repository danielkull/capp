<template>
  <section class="question-list__wrapper">
    <article class="question-list__categorie">
      <input
        type="checkbox"
        name="question"
        id="bogen1"
        class="question-list__btn"
      /><label class="question-list__header" for="bogen1"
        >Persönliche Informationen</label
      >
      <section class="question-list__list">
        <ul>
          <li>Platzhalter</li>
          <li>Platzhalter</li>
          <li>Platzhalter</li>
          <li>Platzhalter</li>
          <li>Platzhalter</li>
        </ul>
      </section>
    </article>
    <!------------------------------------------------------------>
    <article class="question-list__categorie">
      <input
        type="checkbox"
        name="question"
        id="bogen4"
        class="question-list__btn"
      /><label class="question-list__header" for="bogen4"
        >Angaben zum Fahrzeug</label
      >
      <section class="question-list__list question-list__car-info">
        <ul>
          <h3>Typ</h3>

          <li id="" class="question-list__item">
            <input type="radio" name="" id="" /><label for=""
              >Kleinwagen
            </label>
          </li>
          <li id="" class="question-list__item">
            <input type="radio" name="" id="" /><label for="">Kombi </label>
          </li>
          <li id="" class="question-list__item">
            <input type="radio" name="" id="" /><label for="">Cabrio </label>
          </li>
          <li id="" class="question-list__item">
            <input type="radio" name="" id="" /><label for="">SUV </label>
          </li>
          <li id="" class="question-list__item">
            <input type="radio" name="" id="" /><label for="">Van </label>
          </li>
          <li id="" class="question-list__item">
            <input type="radio" name="" id="" /><label for="">Limousine </label>
          </li>

          <h3>Treibstoff</h3>
          <li id="" class="question-list__item">
            <input type="radio" name="fuel-type" id="fuel-gas" /><label for=""
              >Benzin
            </label>
          </li>
          <li id="" class="question-list__item">
            <input type="radio" name="fuel-type" id="fuel-diesel" /><label
              for=""
              >Diesel
            </label>
          </li>
          <li id="" class="question-list__item">
            <input type="radio" name="fuel-type" id="fuel-electric" /><label
              for=""
              >Elektro
            </label>
          </li>

          <h3>Schaltung</h3>
          <li id="" class="question-list__item">
            <input
              type="radio"
              name="transmission-type"
              id="trans-schaltung"
            /><label for="">Manuell </label>
          </li>
          <li id="" class="question-list__item">
            <input
              type="radio"
              name="transmission-type"
              id="trans-automatic"
            /><label for="">Automatik </label>
          </li>

          <h3>Sitze</h3>

          <li id="" class="question-list__item">
            <input type="radio" name="car-seats" id="seats-value-2" /><label
              for=""
              >2
            </label>
          </li>
          <li id="" class="question-list__item">
            <input type="radio" name="car-seats" id="seats-value-2" /><label
              for=""
              >4
            </label>
          </li>
          <li id="" class="question-list__item">
            <input type="radio" name="car-seats" id="seats-value-2" /><label
              for=""
              >5
            </label>
          </li>
          <li id="" class="question-list__item">
            <input type="radio" name="car-seats" id="seats-value-2" /><label
              for=""
              >6 oder mehr
            </label>
          </li>
        </ul>
      </section>
    </article>

    <!------------------------------------------------------------>
    <article class="question-list__categorie">
      <input
        type="checkbox"
        name="question"
        id="car-furnishing"
        class="question-list__btn"
      /><label class="question-list__header" for="car-furnishing"
        >Ausstattung</label
      >
      <section class="question-list__list">
        <ul>
          <li id="" class="question-list__item">
            <input type="checkbox" name="" id="" /><label for=""
              >Dachträger</label
            >
          </li>
          <li id="" class="question-list__item">
            <input type="checkbox" name="" id="" /><label for=""
              >Handyhalterung</label
            >
          </li>
          <li id="" class="question-list__item">
            <CheckBox /><label for="">Internes Navi</label
            ><label for=""></label>
          </li>
          <li id="" class="question-list__item">
            <input type="checkbox" name="" id="" /><label for=""
              >Ladegurte</label
            >
          </li>

          <li id="" class="question-list__item">
            <input type="checkbox" name="" id="" /><label for=""
              >Fahrradträger</label
            >
          </li>
          <li id="" class="question-list__item">
            <input type="checkbox" name="" id="" /><label for=""
              >Platzhalter</label
            >
          </li>
          <li id="" class="question-list__item">
            <input type="checkbox" name="" id="" /><label for=""
              >Platzhalter</label
            >
          </li>
        </ul>
      </section>
    </article>
    <!------------------------------------------------------------>
    <article class="question-list__categorie">
      <input
        type="checkbox"
        name="question"
        id="car-trunk"
        class="question-list__btn"
      /><label class="question-list__header" for="car-trunk">Kofferraum</label>
      <section class="question-list__list">
        <ul>
          <li id="" class="question-list__item">
            <input type="radio" name="" id="" />S 170-250 Liter<label
              for=""
            ></label>
          </li>
          <li id="" class="question-list__item">
            <input type="radio" name="" id="" />M 350 - 500 Liter<label
              for=""
            ></label>
          </li>
          <li id="" class="question-list__item">
            <input type="radio" name="" id="" />L 450 - 550 Liter<label
              for=""
            ></label>
          </li>
          <li id="" class="question-list__item">
            <input type="radio" name="" id="" />XL 380 - 80 Liter<label
              for=""
            ></label>
          </li>
          <li id="" class="question-list__item">
            <input type="radio" name="" id="" />XXL bis zu 1600 Liter<label
              for=""
            ></label>
          </li>
          <li id="" class="question-list__item">
            <input type="text" name="" id="" placeholder="Eigene Angaben" />
          </li>
        </ul>
      </section>
    </article>
    <!------------------------------------------------------------>
    <article class="question-list__categorie">
      <input
        type="checkbox"
        name="question"
        id="bogen5"
        class="question-list__btn"
      /><label class="question-list__header" for="bogen5">Platzhalter</label>
      <section class="question-list__list">
        <ul>
          <li id="" class="question-list__item">
            <input type="checkbox" name="" id="" /><label for=""
              >Platzhalter</label
            >
          </li>
          <li id="" class="question-list__item">
            <input type="checkbox" name="" id="" /><label for=""
              >Platzhalter</label
            >
          </li>
          <li id="" class="question-list__item">
            <input type="checkbox" name="" id="" /><label for=""
              >Platzhalter</label
            >
          </li>
        </ul>
      </section>
    </article>
  </section>
</template>
<script>
import CheckBox from './input-elements/CheckBox.vue';
export default {
  components: { CheckBox },
};
</script>

<style scoped>
.question-list__wrapper {
  border-radius: 1rem;

  overflow: hidden;
  width: 90%;
  margin-inline: auto;
}

.question-list__header,
.question-list__item,
.question-list__header::after {
  cursor: pointer;
}

.question-list__header {
  --header-question-list: clamp(1rem, 2vw, 1.5rem);
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  font-size: var(--header-question-list);
  color: var(--font-color-light);
  background: var(--secondary-light);
}
.question-list__btn {
  all: unset;
  position: absolute;
  top: -9999px;
}

.question-list__header::after {
  content: "";
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 1.5rem;
  top: 50%;
  right: calc(2% + 1.5vw);
  translate: 0% -50%;
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  transform-origin: center;
  transition: rotate 0.3s ease-out;
  background: var(--secondary-default);
}
.question-list__categorie ul {
  overflow: hidden;
  width: 100%;
  padding-inline: var(--list-padding);
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  place-items: center;
  background: var(--secondary-light);
  box-shadow: inset 0px 4px 5px rgba(145, 145, 145, 0.1);
}

.question-list__list {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
}
.question-list__car-info {
  transition: grid-template-rows 0.5s ease-in-out;
}

.question-list__btn:checked ~ .question-list__list {
  display: grid;
  grid-template-rows: 1fr;
  background: var(--secondary-light);
  padding-block: 0rem 1rem;
}
.question-list__btn:checked ~ .question-list__header::after {
  background: var(--primary-mid);
  rotate: 90deg;
}
.question-list__item {
  padding-block: var(--list-item-padding);
  padding-inline: var(--list-item-padding);
  width: 100%;
}
.question-list__item:hover,
.question-list__header:hover {
  background: var(--list-hover);
}
</style>
