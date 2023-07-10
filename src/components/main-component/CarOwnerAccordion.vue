<template>
  <section class="car-info__wrapper">
    <article class="car-info__categorie">
      <input
        type="checkbox"
        name="hier Namen für Kategorie eintragen"
        id="equipment-1"
        class="car-info__btn"
      /><label class="car-info__header" for="equipment-1"
        >Ausstattung<svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="currentColor"
          class="bi bi-clipboard2-check"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"
          />
          <path
            d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"
          />
          <path
            d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"
          /></svg
      ></label>
      <section class="car-info__list">
        <section class="placeholder">
          <EquipmentList />
        </section>
      </section>
    </article>
    <!-------------------------------------------------------------------------------------->
    <article class="car-info__categorie">
      <input
        type="checkbox"
        name="hier Namen für Kategorie eintragen"
        id="equipment-2"
        class="car-info__btn"
      /><label class="car-info__header" for="equipment-2"
        >Weitere Angaben<svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="currentColor"
          class="bi bi-info-square"
          viewBox="0 0 16 16"
        >
          <path
            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
          />
          <path
            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
          /></svg
      ></label>
      <section class="car-info__list">
        <section class="placeholder">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          maxime alias ea aut placeat. Commodi a voluptatibus, repellendus quia
          quam, eius tempora facilis nihil velit voluptate sunt ut eaque
        </section>
      </section>
    </article>
    <!-------------------------------------------------------------------------------------->
    <article class="car-info__categorie">
      <input
        type="checkbox"
        name="hier Namen für Kategorie eintragen"
        id="equipment-3"
        class="car-info__btn"
      /><label class="car-info__header" for="equipment-3"
        >Kalender<svg
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
            d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          /></svg
      ></label>
      <section class="car-info__list">
        <section class="placeholder">
          ssssssssssssssssssssssssssssssssssssssssssssssss
        </section>
      </section>
    </article>
    <!-------------------------------------------------------------------------------------->
    <article class="car-info__categorie">
      <input
        type="checkbox"
        name="hier Namen für Kategorie eintragen"
        id="equipment-4"
        class="car-info__btn"
      /><label class="car-info__header" for="equipment-4"
        >Kontakt<svg
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
            d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
          /></svg
      ></label>
      <section class="car-info__list">
        <section class="placeholder"><MessageField /></section>
      </section>
    </article>
    <!-------------------------------------------------------------------------------------->
  </section>
</template>
<script>
import EquipmentList from "@/components/car-equipment/car-equipment.vue";
import MessageField from "@/components/input-elements/TextArea.vue";
export default {
  components: {
    EquipmentList,
    MessageField,
  },
};
</script>

<style scoped>
.car-info__wrapper {
  overflow: hidden;
  width: 100%;
  margin-inline: auto;
}

.car-info__header,
.car-info__item {
  cursor: pointer;
}

.car-info__header {
  --header-car-info: clamp(1rem, 2vw, 1.5rem);
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;
  font-size: var(--header-car-info);
  color: var(--main-font-color-dark);
  background: var(--clr-sur-d);
  font-weight: 500;
}
.car-info__btn {
  all: unset;
  position: absolute;
  top: -9999px;
}
.car-info__header > svg {
  fill: var(--menue-icon-def);
  width: 1.5rem;
  aspect-ratio: 1;
}
.car-info__btn:checked ~ .car-info__header svg {
  fill: var(--menue-icon-act);
}

.car-info__categorie > .car-info__list > * {
  overflow: hidden;
  width: 100%;
  padding-inline: var(--list-padding);
  list-style-type: none;
  padding-inline: 0.5rem;
  background: var(--clr-sur-l);
  border-bottom: 1px solid var(--clr-brd-top);
}

ul.car-info {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.car-info__list {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
}

.car-info__btn:checked ~ .car-info__list {
  display: grid;
  grid-template-rows: 1fr;
}

.car-info__item {
  padding-block: var(--list-item-padding);
  padding-inline: var(--list-item-padding);
  width: 100%;
  list-style-type: none;
  padding-left: 0;
}

label > img {
  align-self: baseline;
}

@media screen and (min-width: 1000px) {
  .car-info__item:hover,
  .car-info__header:hover {
    background: var(--surface-hover);
    color: var(--main-font-color-dark);
  }
}
</style>
