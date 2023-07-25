<template>
  <main class="error-page">
    <h1 class="error-page__error-header">
      Uuppsy.... Da is wohl was schiefgegangen mit der URL.
    </h1>
    <router-link :to="{ name: 'logView' }" class="error-page__error-link"
      >Hier gehts zurück zur CAPP App</router-link
    >
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.error-page {
  height: 100vh;
  display: grid;
  place-content: center;
  background: var(--surface-dark);
}
.error-page__error-header,
.error-page__error-link {
  text-align: center;
  margin-bottom: 2rem;
}
.error-page__error-header {
  font-size: var(--m-font);
  color: var(--text-dark);
}
.error-page__error-link {
  font-size: var(--m-font);
  font-weight: 600;
}
</style>
