<template>
  <section>
    <article>
      <QuestionMenueFrame />
    </article>
  </section>
</template>

<script>
import QuestionMenueFrame from "@/components/UserQuestionMenue.vue";

export default {
  components: {
    QuestionMenueFrame,
  },
};
</script>

<style scoped>
section {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  display: block;
  width: 100vw;
  height: 100vh;
  background: blue;
  translate: 0% 0;
}
article {
  background: var(--quest-menu-bg);
  height: 90vh;
  margin-top: 10vh;
  padding-inline: 1rem;
  overflow: scroll;
}
</style>
