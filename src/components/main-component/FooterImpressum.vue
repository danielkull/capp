<template>
  <footer role="App Impressum">
    <article class="article__wrapper">
      <address aria-name="Adresse des Unternehmens">
        <ul class="adress-list" role="Anschrift des Unternehmens">
          <li>CAPP Carsharing</li>
        </ul>
      </address>
    </article>

    <article class="article__wrapper">
      <ul class="link-wrapper" role="Liste der Links des Footers">
        <li><a @click="goToPage" href="#impressum">Impressum</a></li>
        |
        <li><a href="#data-sec">Datenschutz</a></li>
        |
        <li><a href="#team">Über uns</a></li>
        |
        <li><a href="http://">Referenzen</a></li>
      </ul>
    </article>
  </footer>
  <Impressum></Impressum>
  <Datasafty></Datasafty>
  <Team></Team>
</template>

<script>
import Impressum from "@/components/main-component/expand-site-cards/ImpressumExpandCard.vue";
import Datasafty from "@/components/main-component/expand-site-cards/DataSafetyExpandCard.vue";
import Team from "@/components/main-component/expand-site-cards/TeamExpandCard.vue";

export default {
  components: {
    Impressum,
    Datasafty,
    Team,
  },
};
</script>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: auto;
  border-radius: var(--m-brd-rad) var(--m-brd-rad) 0 0;
  box-shadow: 0 0 15px var(--foot-shd);
  background: var(--foot-bg);
  backdrop-filter: var(--foot-filter);
  padding-top: calc(var(--s-pad) / 2);
  border-top: var(--s-brd) solid var(--foot-brd);
}
article :is(ul, li, a) {
  text-decoration: none;
  list-style-type: none;
  font-size: var(--font-list-label-s);
  color: var(--text-light);
}
article :is(a:hover) {
  border-bottom: var(--m-brd) solid var(--text-light);
}
article :is(a:visited) {
  color: var(--text-mid);
}
article :is(a:active) {
  color: var(--text-dark);
}
article :is(ul) {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  margin-inline: auto;
}
.adress-list {
  display: block;
  width: 70%;
  margin-inline: auto;
}
.adress-list li:nth-child(2),
.adress-list li:nth-child(3) {
  text-align: center;
  padding-top: calc(var(--s-pad) / 2);
}
.adress-list li:first-of-type {
  line-height: 1.3rem;
  text-align: center;
  padding-bottom: calc(var(--s-pad) / 2);
  font-size: var(--font-list-header);
  border-bottom: var(--s-brd) solid var(--primary-middle);
}
.article__wrapper {
  padding-bottom: calc(var(--s-pad) - 0.2rem);
  margin-top: calc(var(--s-marg) - 0.8rem);
  display: block;
  align-items: center;
  width: 100%;
  height: auto;
}

@media screen and (min-width: 900px) {
  footer {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: max-content;
    padding-block: 1rem 0.6rem;
    border-top: var(--s-brd) solid var(--foot-brd);
  }
  .adress-list li:first-of-type {
    text-align: start;
    padding: 0;
    border-bottom: var(--s-brd) solid none;
  }
}
</style>
