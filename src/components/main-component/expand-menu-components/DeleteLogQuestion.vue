<template>
  <section class="question-frame">
    <p v-if="deleteLogProfil === 'profil-delete'">
      Willst Du dein Konto wirklich löschen ?
    </p>

    <span class="quest-answer">
      <button><p>Ja</p></button>
      <a href="#">Nein</a>
    </span>
  </section>

  <section class="question-frame" v-if="deleteLogProfil === 'profil-logout'">
    <p>Willst Dich wirklich abmelden ?</p>
    <span class="quest-answer">
      <button><p>Ja</p></button>
      <a href="#">Nein</a>
    </span>
  </section>
</template>

<script>
export default {
  props: ["deleteLogProfil"],
  /*   props: {
    deleteLog: {
      type: String,
      required: true,
    },
  }, */
};
</script>

<style scoped>
.question-frame {
  width: 100%;
  height: auto;
  text-align: center;
  border-radius: var(--s-pad);
  padding-block: var(--m-pad);
  padding-inline: var(--s-pad);
}
p {
  width: 100%;
}
p,
a,
button {
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: var(--text-light);
}
a {
  text-decoration: none;
}
button {
  all: unset;
  background: none;
}
button,
a {
  border: 1px solid var(--text-light);
  width: 6rem;
  padding-block: 0.7rem;
}
.quest-answer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 3rem;
  padding-inline: var(--s-pad);
}
button:active {
  border-color: var(--primary-middle);
  color: var(--primary-middle);
}
</style>
