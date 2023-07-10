<template>
  <section class="question-list__wrapper">
    <article class="question-list__categorie">
      <input
        type="checkbox"
        name="hier Namen für Kategorie eintragen"
        id="card1"
        class="question-list__btn"
      /><label class="question-list__header" for="card1">Kategorie Text</label>
      <section class="question-list__list">
        <section class="placeholder">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          maxime alias ea aut placeat. Commodi a voluptatibus, repellendus quia
          quam, eius tempora facilis nihil velit voluptate sunt ut eaque
          excepturi. Debitis nihil iure, ut non dicta dolor eaque temporibus
          accusamus, at mollitia saepe dolore quisquam aliquam provident unde
          quam corporis consequatur ad autem, suscipit similique numquam
          adipisci! A, suscipit aspernatur. Adipisci, minima dicta. Sed ut a
          earum et, obcaecati recusandae porro non eveniet necessitatibus id
          fugiat inventore dignissimos facere quis fuga reprehenderit dolorem
          dolore. Alias assumenda officia neque veritatis voluptatem! Architecto
          provident repudiandae doloremque incidunt suscipit nam illum nostrum
          quo tempore est officiis ipsam labore ullam nisi omnis culpa quos
        </section>
      </section>
    </article>
    <!------------------------------------------------------------>
    <article class="question-list__categorie">
      <input
        type="checkbox"
        name="hier Namen für Kategorie eintragen"
        id="card2"
        class="question-list__btn"
      /><label class="question-list__header" for="card2">Kategorie Text</label>
      <section class="question-list__list">
        <section class="placeholder">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          maxime alias ea aut placeat. Commodi a voluptatibus, repellendus quia
          quam, eius tempora facilis nihil velit voluptate sunt ut eaque
          excepturi. Debitis nihil iure, ut non dicta dolor eaque temporibus
          accusamus, at mollitia saepe dolore quisquam aliquam provident unde
          quam corporis consequatur ad autem, suscipit similique numquam
          adipisci! A, suscipit aspernatur. Adipisci, minima dicta. Sed ut a
          earum et, obcaecati recusandae porro non eveniet necessitatibus id
          fugiat inventore dignissimos facere quis fuga reprehenderit dolorem
          dolore. Alias assumenda officia neque veritatis voluptatem! Architecto
          provident repudiandae doloremque incidunt suscipit nam illum nostrum
          quo tempore est officiis ipsam labore ullam nisi omnis culpa quos
        </section>
      </section>
    </article>

    <!------------------------------------------------------------>
    <article class="question-list__categorie">
      <input
        type="checkbox"
        name="hier Namen für Kategorie eintragen"
        id="card3"
        class="question-list__btn"
      /><label class="question-list__header" for="card3">Kategorie Text</label>
      <section class="question-list__list">
        <section class="placeholder">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          maxime alias ea aut placeat. Commodi a voluptatibus, repellendus quia
          quam, eius tempora facilis nihil velit voluptate sunt ut eaque
          excepturi. Debitis nihil iure, ut non dicta dolor eaque temporibus
          accusamus, at mollitia saepe dolore quisquam aliquam provident unde
          quam corporis consequatur ad autem, suscipit similique numquam
          adipisci! A, suscipit aspernatur. Adipisci, minima dicta. Sed ut a
          earum et, obcaecati recusandae porro non eveniet necessitatibus id
          fugiat inventore dignissimos facere quis fuga reprehenderit dolorem
          dolore. Alias assumenda officia neque veritatis voluptatem! Architecto
          provident repudiandae doloremque incidunt suscipit nam illum nostrum
          quo tempore est officiis ipsam labore ullam nisi omnis culpa quos
        </section>
      </section>
    </article>
    <!------------------------------------------------------------>
    <article class="question-list__categorie">
      <input
        type="checkbox"
        name="hier Namen für Kategorie eintragen"
        id="card4"
        class="question-list__btn"
      /><label class="question-list__header" for="card4">Kategorie Text</label>
      <section class="question-list__list">
        <section class="placeholder">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          maxime alias ea aut placeat. Commodi a voluptatibus, repellendus quia
          quam, eius tempora facilis nihil velit voluptate sunt ut eaque
          excepturi. Debitis nihil iure, ut non dicta dolor eaque temporibus
          accusamus, at mollitia saepe dolore quisquam aliquam provident unde
          quam corporis consequatur ad autem, suscipit similique numquam
          adipisci! A, suscipit aspernatur. Adipisci, minima dicta. Sed ut a
          earum et, obcaecati recusandae porro non eveniet necessitatibus id
          fugiat inventore dignissimos facere quis fuga reprehenderit dolorem
          dolore. Alias assumenda officia neque veritatis voluptatem! Architecto
          provident repudiandae doloremque incidunt suscipit nam illum nostrum
          quo tempore est officiis ipsam labore ullam nisi omnis culpa quos
        </section>
      </section>
    </article>
    <!------------------------------------------------------------>
  </section>
</template>
<script></script>

<style scoped>
/* List Elements */
.question-list__wrapper {
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
  color: var(--main-font-color-light);
  background: var(--surface-light);
}
.question-list__btn {
  all: unset;
  position: absolute;
  top: -9999px;
}

/*====================== dreieck ===================================*/
.question-list__header::after {
  content: "";
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 1.5rem;
  top: 45%;
  right: calc(2% + 1.5vw);
  translate: 0% -50%;
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  transform-origin: center;
  transition: rotate 0.3s ease-out;
  background: var(--list-default);
}
/*====================== dreieck = Ende==================================*/
.question-list__categorie > .question-list__list > * {
  overflow: hidden;
  width: 100%;
  padding-inline: var(--list-padding);
  list-style-type: none;
  background: var(--surface-light);
  box-shadow: inset 0px 3px 5px var(--box-shadow-light);
}

ul.question-list {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.question-list__list {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
}

.question-list__btn:checked ~ .question-list__list {
  display: grid;
  grid-template-rows: 1fr;
  background: var(--surface-dark);
  padding-block: 0rem 1rem;
}
.question-list__btn:checked ~ .question-list__header::after {
  background: var(--list-actv);
  rotate: 90deg;
}
.question-list__item {
  padding-block: var(--list-item-padding);
  padding-inline: var(--list-item-padding);
  width: 100%;
  list-style-type: none;
  padding-left: 0;
}

.question-list__item:hover,
.question-list__header:hover {
  background: var(--surface-hover);
  color: var(--main-font-color-dark);
}

label > img {
  align-self: baseline;
}
</style>
