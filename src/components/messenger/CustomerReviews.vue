<template>
  <article class="commentar-section__customer-review">
    <header class="customer-review__header">
      <section class="customer-review__header-profil-wrapper">
        <img src="" alt="" class="customer-review__header--image"/>
        <h3 class="customer-review__header--username">Reviewer Username</h3>
      </section>
      <RatingBar
        :ratingGroup="'Reviewer Username'"
        :scalingIsActive="true"
      ></RatingBar>
    </header>
    <main>
      <p class="customer-review--text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        iusto dolorum aut autem ad, neque molestias necessitatibus accusamus?
        Assumenda porro quasi soluta blanditiis quae, debitis voluptate laborum
        quos dicta at.
      </p>
    </main>
  </article>
</template>

<script>
import RatingBar from "@/components/messenger/RatingBar.vue";

export default {
  name: "CustomerReviews",
  components: { RatingBar },
};
</script>

<style scoped>
.commentar-section__customer-review {
  width: 90%;
  margin-inline: auto;
}

.customer-review__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.customer-review__header-profil-wrapper {
    display: inherit;
}

</style>
