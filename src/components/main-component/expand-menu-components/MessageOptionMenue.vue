<template>
  <section class="site__wrapper">
    <article class="setting-content__wrapper">
      <section class="setting-content__question">
        <p>
          Zu welchen Neuigkeiten möchtest du eine Sofort-Benachrichtigung per
          Mail erhalten ?
        </p>
      </section>
      <section class="setting-content__options">
        <h3 class="options-header">Push-Benachrichtigungen</h3>
        <ul>
          <li>
            <label for="privat-push">Neue Private Nachrichten im Postfach</label
            ><CheckBox :checkId="'privat-push'" />
          </li>
          <li>
            <label for="group-push">Neue Gruppen Nachrichten im Postfach</label
            ><CheckBox :checkId="'group-push'" />
          </li>
          <li>
            <label for="review-msg">Neue Bewertungen</label
            ><CheckBox :checkId="'review-push'" />
          </li>
        </ul>
      </section>
    </article>
    <!------------------------------------------------------------------------->
    <article class="setting-content__wrapper">
      <section class="setting-content__question">
        <p>
          Zu welchen Neuigkeiten möchtest du eine Sofort-Benachrichtigung per
          Mail erhalten ?
        </p>
      </section>
      <section class="setting-content__options">
        <h3 class="options-header">Persöhnliche Nachrichten</h3>
        <ul>
          <li>
            <label for="privat-msg">Neue persöhnliche Nachricht</label>
            <CheckBox :checkId="'privat-msg'" />
          </li>
          <li>
            <label for="new-date-msg">Neue Terminanfrage</label
            ><CheckBox :checkId="'new-date-msg'" />
          </li>
          <li>
            <label for="date-cancel-msg">Termin Absage</label
            ><CheckBox :checkId="'date-cancel-msg'" />
          </li>
          <li>
            <label for="new-review-msg">Neue Bewertung</label
            ><CheckBox :checkId="'new-review-msg'" />
          </li>
        </ul>
      </section>
    </article>
    <!------------------------------------------------------------------------->
    <article class="setting-content__wrapper">
      <section class="setting-content__question">
        <p>
          Zu welchen Gruppennachrichten möchtest du eine Sofort-Benachrichtigung
          per Mail erhalten ?
        </p>
      </section>
      <section class="setting-content__options">
        <h3 class="options-header">Gruppen Aktivitäten</h3>
        <ul>
          <li>
            <label for="my-group-msg">Neue Gruppe</label
            ><CheckBox :checkId="'my-group-msg'" />
          </li>
          <li>
            <label for="join-groupmsg">Einladung in Gruppe</label
            ><CheckBox :checkId="'join-group-msg'" />
          </li>
          <li>
            <label for="my-group-msg">Neuigkeiten aus eigener Gruppe</label
            ><CheckBox :checkId="'my-group-msg'" />
          </li>
          <li>
            <label for="other-group-msg">Neuigkeiten aus meinen Gruppe</label
            ><CheckBox :checkId="'other-group-msg'" />
          </li>
        </ul>
      </section>
    </article>
  </section>
</template>

<script>
import CheckBox from "@/components/input-elements/CheckBox.vue";
export default {
  components: {
    CheckBox,
  },
};
</script>

<style scoped>
section :is(ul, li) {
  list-style-type: none;
  width: 100%;
}

section :is(li) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 0.7rem;
  width: 95%;
  margin-inline: auto;
  padding-bottom: 0.7rem;
  padding-top: 0.3rem;
  border-bottom: var(--s-brd) solid var(--clr-brd-top);
}

li label {
  width: 80%;
  font-size: clamp(0.9rem, 4vw, 1.3rem);
  height: max-content;
  line-height: 1.4rem;
  color: var(--text-mid);
}
section :is(p) {
  font-size: clamp(0.9rem, 3vw, 1.3rem);
  font-weight: 500;
  color: var(--text-light);
  padding-bottom: 0.5rem;
}
section :is(h3) {
  width: 100%;
  font-size: calc(var(--s-font) * 1.2);
  font-weight: 400;
  text-align: center;
  color: var(--text-dark);
  padding-bottom: var(--s-pad);
  margin-bottom: var(--s-marg);
  border-bottom: var(--m-brd) solid var(--check-checked);
}
.site__wrapper {
  width: 100%;
  height: 100%;
}
.setting-content__wrapper {
  display: block;
  width: 100%;
  height: max-content;
  padding-block: 0.5rem;
  background: var(--sec-bg);
  box-shadow: 0px 0px 15px var(--shd-single-cards);
  border-radius: 2rem;
  padding: 1rem;
  margin-bottom: 1rem;
}
.setting-content__question {
  border-bottom: var(--m-brd) solid var(--check-checked);
  padding-block: calc(var(--s-pad) / 2);
  margin-block: calc(var(--s-marg) * 1.8) calc(var(--s-marg) * 1.2);
}
</style>
