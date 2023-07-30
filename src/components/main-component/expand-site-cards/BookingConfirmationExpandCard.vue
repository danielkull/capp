<template>
  <section
    :style="{
      translate: changePage,
    }"
    class="menue-expand__outer-wrapper"
    id="booking-confirmation"
  >
    <article class="question-card">
      <DeleteLogCard deleteLogProfil="booking-confirmation" />
    </article>
  </section>
</template>

<script scoped>
import DeleteLogCard from "@/components/main-component/expand-menu-components/DeleteLogQuestion.vue";
import { useGlobalStateStore } from "@/stores/useGlobalStateStore"; 
import { watch } from "vue";

export default {
  components: {
    DeleteLogCard,
  },
  data() {
    return {
      changePage: "-100% 0%",
    };
  },
  setup() {
    // Initialize the store at the begining
    const globalStateStore = useGlobalStateStore();
    return { globalStateStore};
  },
  mounted() {
    // This watch must be imported and can be used to look for changes in the pinia store.
    watch(
      () => this.globalStateStore.translateCard,
      (translateValue) => {
        this.changePage = translateValue
      }
    )
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
  translate: 0% 0;
  /* translate: -100% 0; */
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
</style>
