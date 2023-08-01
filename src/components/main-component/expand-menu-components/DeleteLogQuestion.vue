<template>
  <!-- Window for Deleting the Profil -->
  <section class="question-frame" v-if="deleteLogProfil === 'profil-delete'">
    <p>Willst Du Dein Konto wirklich löschen?</p>

    <span class="quest-answer">
      <button><p>Ja</p></button>
      <a href="#">Nein</a>
    </span>
  </section>
  <!-- Window for Logging out -->
  <section class="question-frame" v-if="deleteLogProfil === 'profil-logout'">
    <p>Willst Du Dich wirklich abmelden?</p>
    <span class="quest-answer">
      <button @click.prevent="logOut"><p>Ja</p></button>
      <a href="#">Nein</a>
    </span>
  </section>
  <!-- Window for Booking confirmation -->
  <section
    class="question-frame"
    v-if="deleteLogProfil === 'booking-confirmation'"
  >
    <p>Deine Buchungsanfrage wurde abgeschickt.</p>
    <span class="quest-answer single-choice">
      <button @click.prevent="closePage"><p>Ja</p></button>
    </span>
  </section>
  <!-- Window for changing User Setttings Data -->
  <section
    class="question-frame"
    v-if="deleteLogProfil === 'user-settings-confirmation'"
  >
    <p>Möchtest du deine Änderungen speichern?</p>
    <span class="quest-answer">
      <button @click.prevent="closePage"><p>Ja</p></button>
      <button @click.prevent="closePage"><p>Nein</p></button>
    </span>
  </section>
</template>

<script>
import { useAuthenticationStore } from "@/stores/useAuthenticationStore";
import { useGlobalStateStore } from "@/stores/useGlobalStateStore";

export default {
  props: ["deleteLogProfil"],
  setup() {
    const authenticationStore = useAuthenticationStore();
    const globalStateStore = useGlobalStateStore();

    return { authenticationStore, globalStateStore };
  },
  methods: {
    async logOut() {
      await this.authenticationStore.logOut();
      location.reload();
    },
    closePage() {
      this.globalStateStore.translateCard = "-100% 0%";
      this.$router.go(-2);
    },
  },
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
.single-choice {
  justify-content: center;
}

button:active {
  border-color: var(--primary-middle);
  color: var(--primary-middle);
}
</style>
