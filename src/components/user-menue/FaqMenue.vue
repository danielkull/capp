<template>
  <section class="faq-list__wrapper">
    <!------------------------------------------------------------------------------------------->
    <!-----------------------------der Artikel ist je eine Frage------------------------------------------------------->
    <article class="faq-question">
      <input
        type="checkbox"
        name="hier Namen für Kategorie eintragen"
        id="faq-question-1"
        class="faq-list-check"
      /><label class="faq-question__header" for="faq-question-1"
        >Kategorie Text</label
      >
      <section class="faq-answer__holder">
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            maxime alias ea aut placeat. Commodi a voluptatibus, repellendus
            quia quam, eius tempora facilis nihil velit voluptate sunt ut eaque
            excepturi. Debitis nihil iure, ut non dicta dolor eaque temporibus
            accusamus, at mollitia saepe dolore quisquam aliquam provident unde
            quam corporis consequatur ad autem, suscipit similique numquam
            adipisci! A, suscipit aspernatur. Adipisci, minima dicta. Sed ut a
            earum et, obcaecati recusandae porro non eveniet necessitatibus id
            fugiat inventore dignissimos facere quis fuga reprehenderit dolorem
            dolore. Alias assumenda officia neque veritatis voluptatem!
            Architecto provident repudiandae doloremque incidunt suscipit nam
            illum nostrum quo tempore est officiis ipsam labore ullam nisi omnis
            culpa quos
          </p>
        </section>
      </section>
    </article>
    <!------------------------------------------------------------------------------------------->
    <!-----------------------------neuen Artikel hier drunter setzen------------------------------------------------------->
    <article class="faq-question">
      <input
        type="checkbox"
        name="hier Namen für Kategorie eintragen"
        id="faq-question-2"
        class="faq-list-check"
      /><label class="faq-question__header" for="faq-question-2"
        >Kategorie Text</label
      >
      <section class="faq-answer__holder">
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            maxime alias ea aut placeat. Commodi a voluptatibus, repellendus
            quia quam, eius tempora facilis nihil velit voluptate sunt ut eaque
            excepturi. Debitis nihil iure, ut non dicta dolor eaque temporibus
            accusamus, at mollitia saepe dolore quisquam aliquam provident unde
            quam corporis consequatur ad autem, suscipit similique numquam
            adipisci! A, suscipit aspernatur. Adipisci, minima dicta. Sed ut a
            earum et, obcaecati recusandae porro non eveniet necessitatibus id
            fugiat inventore dignissimos facere quis fuga reprehenderit dolorem
            dolore. Alias assumenda officia neque veritatis voluptatem!
            Architecto provident repudiandae doloremque incidunt suscipit nam
            illum nostrum quo tempore est officiis ipsam labore ullam nisi omnis
            culpa quos
          </p>
        </section>
      </section>
    </article>
    <!------------------------------------------------------------------------------------------->
    <!-----------------------------neuen Artikel hier drunter setzen------------------------------------------------------->
    <article class="faq-question">
      <input
        type="checkbox"
        name="hier Namen für Kategorie eintragen"
        id="faq-question-3"
        class="faq-list-check"
      /><label class="faq-question__header" for="faq-question-3"
        >Kategorie Text</label
      >
      <section class="faq-answer__holder">
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            maxime alias ea aut placeat. Commodi a voluptatibus, repellendus
            quia quam, eius tempora facilis nihil velit voluptate sunt ut eaque
            excepturi. Debitis nihil iure, ut non dicta dolor eaque temporibus
            accusamus, at mollitia saepe dolore quisquam aliquam provident unde
            quam corporis consequatur ad autem, suscipit similique numquam
            adipisci! A, suscipit aspernatur. Adipisci, minima dicta. Sed ut a
            earum et, obcaecati recusandae porro non eveniet necessitatibus id
            fugiat inventore dignissimos facere quis fuga reprehenderit dolorem
            dolore. Alias assumenda officia neque veritatis voluptatem!
            Architecto provident repudiandae doloremque incidunt suscipit nam
            illum nostrum quo tempore est officiis ipsam labore ullam nisi omnis
            culpa quos
          </p>
        </section>
      </section>
    </article>
    <!------------------------------------------------------------------------------------------->
    <!-----------------------------neuen Artikel hier drunter setzen------------------------------------------------------->
  </section>
</template>
<script></script>

<style scoped>
/* List Elements */
.faq-list__wrapper {
  overflow: hidden;
  width: 90%;
  margin-inline: auto;
}

.faq-question__header,
.question-list__item,
.faq-question__header::after {
  cursor: pointer;
}

.faq-question__header {
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
.faq-list-check {
  appearance: none;
  width: 0;
  height: 0;
  position: absolute;
  top: -9999px;
}

/*====================== dreieck ===================================*/
.faq-question__header::after {
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
.faq-question > .faq-answer__holder > * {
  overflow: hidden;
  width: 100%;
  padding-inline: var(--list-padding);
  list-style-type: none;
  background: var(--clr-sur-d);
}

ul.question-list {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.faq-answer__holder {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
  background: var(--clr-sur-d);
  border-bottom: 1px solid var(--list-default);
}
.faq-answer__holder p {
  font-size: clamp(0.5rem, 4vw, 1.3rem);
  width: 95%;
  font-weight: 300;
  margin-inline: auto;
  margin-block: 1rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  color: var(--text-mid);
  background: var(--clr-sur-l);
}
.faq-list-check:checked ~ .faq-answer__holder {
  display: grid;
  grid-template-rows: 1fr;
  background: var(--surface-dark);
  /* padding: 1rem; */
}

.faq-list-check:checked ~ .faq-question__header::after {
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

@media screen and (min-width: 900px) {
  .question-list__item:hover,
  .faq-question__header:hover {
    background: var(--surface-hover);
    color: var(--main-font-color-dark);
  }
}
</style>
