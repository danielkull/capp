<template>
  <section class="menue-expand__outer-wrapper" id="logout-user">
    <article class="question-card">
      <DeleteLogCard :deleteLog="'profil-logout'" />
    </article>
  </section>
</template>

<script scoped>
import DeleteLogCard from "@/components/main-component/expand-menu-components/DeleteLogQuestion.vue";
export default {
  components: {
    DeleteLogCard,
  },
};
</script>

<style scoped>
section:target {
  translate: 0% 0%;
}
.menue-expand__outer-wrapper {
  height: 100vh;
  min-width: 100vw;
  min-width: 100dvw;
  display: block;
  overflow: hidden;
  position: absolute;
  z-index: 15;
  top: 0%;
  left: 0%;
  translate: -100% 0;
  transition: 0s;
  display: grid;
  place-content: center;
  align-items: center;
  background: var(--shd-log-delete);
  backdrop-filter: blur(4px);
}
.question-card {
  display: block;
  width: 85vw;
  height: 30vh;
  background: var(--clr-sur-d);

  padding-top: 1rem;
  border-radius: var(--s-pad);
  box-shadow: 0px 0px 20px var(--card-shd-d), 0px 0px 40px 2px var(--card-shd-l);
}