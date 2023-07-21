<template>
  <article class="commentar-section__customer-review">
    <header class="customer-review__header">
      <section class="customer-review__header-profil-wrapper">
        <article class="user-profile__image-small">
          <span class="user-profile__image-small__wrapper"> </span>
        </article>
        <h3 class="customer-review__header-username">Msg from Username</h3>
      </section>
    </header>

    <p class="customer-review-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto
      dolorum aut autem ad, neque molestias necessitatibus accusamus? Assumenda
      porro quasi soluta blanditiis quae, debitis voluptate laborum quos dicta
      at.
    </p>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
.commentar-section__customer-review {
  width: 90%;
  margin-inline: auto;
  background: var(--surface-light);
  margin-top: 1rem;
  border-radius: var(--s-brd-rad);
  padding-inline: 1rem;
  padding-block: 0.2rem 0.4rem;
}

.customer-review__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.customer-review__header-profil-wrapper {
  display: inherit;
  align-items: center;
}

.customer-review__header-username {
  font-weight: bold;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}
.customer-review-text {
  font-size: 0.9rem;
  padding-bottom: 0.5rem;
  width: 100%;
  text-align: start;
}
/* Customer Image Profil same as UserProfileView.vue Img */

/*==================Profilbild-Klein-===============================*/
.user-profile__image-small {
  width: 2.5rem;
  aspect-ratio: 1;
  margin-inline: auto;
  /* margin-top: 7rem; */
  aspect-ratio: 1;
  border-radius: 100%;
  display: grid;
  place-items: center;
}
.user-profile__image-small__wrapper {
  overflow: hidden;
  display: block;
  width: 100%;
  border: 3px solid var(--primary-dark);
  aspect-ratio: 1;
  border-radius: 100%;
}

.user-profile__image-small__wrapper > img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center center;
  position: relative;
}
/*========================================================*/
/*==================Profilbilder-Ende===============================*/
</style>
