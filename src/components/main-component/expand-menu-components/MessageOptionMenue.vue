<template>
  <section class="site__wrapper">
    <article class="setting-content__wrapper">
      <section class="setting-content__question">
        <p>
          Zu welchen Neuigkeiten möchtest du eine Sofort-Benachrichtigung per
          E-Mail erhalten?
        </p>
      </section>
      <section class="setting-content__options">
        <h3 class="options-header">Push-Benachrichtigungen</h3>
        <ul>
          <li>
            <label for="privat-push">Neue private Nachrichten im Postfach</label
            ><CheckBox id="privat-push" />
          </li>
          <li>
            <label for="group-push">Neue Gruppen-Nachrichten im Postfach</label
            ><CheckBox id="group-push" />
          </li>
          <li>
            <label for="review-msg">Neue Bewertungen</label
            ><CheckBox id="review-push" />
          </li>
        </ul>
      </section>
    </article>
    <!------------------------------------------------------------------------->
    <article class="setting-content__wrapper">
      <section class="setting-content__question">
        <p>
          Zu welchen Neuigkeiten möchtest du eine Sofort-Benachrichtigung per
          E-Mail erhalten?
        </p>
      </section>
      <section class="setting-content__options">
        <h3 class="options-header">Persönliche Nachrichten</h3>
        <ul>
          <li>
            <label for="privat-msg">Neue persönliche Nachricht</label>
            <CheckBox id="privat-msg" />
          </li>
          <li>
            <label for="new-date-msg">Neue Termin-Anfrage</label
            ><CheckBox id="new-date-msg" />
          </li>
          <li>
            <label for="date-cancel-msg">Termin-Absage</label
            ><CheckBox id="date-cancel-msg" />
          </li>
          <li>
            <label for="new-review-msg">Neue Bewertung</label
            ><CheckBox id="new-review-msg" />
          </li>
        </ul>
      </section>
    </article>
    <!------------------------------------------------------------------------->
    <article class="setting-content__wrapper">
      <section class="setting-content__question">
        <p>
          Zu welchen Gruppen-Nachrichten möchtest du eine
          Sofort-Benachrichtigung per E-Mail erhalten?
        </p>
      </section>
      <section class="setting-content__options">
        <h3 class="options-header">Gruppen-Aktivitäten</h3>
        <ul>
          <li>
            <label for="my-group-msg">Neue Gruppe</label
            ><CheckBox id="my-group-msg" />
          </li>
          <li>
            <label for="join-groupmsg">Einladung in Gruppe</label
            ><CheckBox id="join-group-msg" />
          </li>
          <li>
            <label for="my-group-msg">Neuigkeiten aus meiner Gruppe</label
            ><CheckBox id="my-group-msg" />
          </li>
          <li>
            <label for="other-group-msg">Neuigkeiten aus anderen Gruppen</label
            ><CheckBox id="other-group-msg" />
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
  border-radius: var(--m-brd-rad);
  padding: var(--s-pad);
  margin-bottom: var(--s-marg);
}
.setting-content__question {
  border-bottom: var(--m-brd) solid var(--check-checked);
  padding-block: calc(var(--s-pad) / 2);
  margin-block: calc(var(--s-marg) * 1.8) calc(var(--s-marg) * 1.2);
}
</style>
