<template>
  <section class="commentar-section__average-rating">
    <div class="commentar-section__average-rating--text">
      <h3 class="average-rating--text">
        Durchschnitt ( <span class="average-rating--value">4</span> Capp Points )
      </h3>
    </div>
    <div class="commentar-section__average-rating--rating-bar">
      <RatingBar :ratingGroup="'ExampleUserName'" :scalingIsActive="true" class="responsive-scaling"></RatingBar>
      <p class="average-rating--text"><span class="average-rating--value">4</span> / 5</p>
    </div>
  </section>
</template>

<script>
import RatingBar from "@/components/messenger/RatingBar.vue";
export default {
  name: "AverageRating",
  components: { RatingBar },
};
</script>

<style scoped>

.commentar-section__average-rating {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 1rem;
    border-bottom: 1px solid var(--user-border);
    width: 90%;
    margin-inline: auto;
}

.average-rating--text {
    font-size: clamp(0.8rem, 10vw, 1.2vw);
    font-weight: bold;
}

.commentar-section__average-rating--rating-bar {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 0.5rem;
}

.commentar-section__average-rating--rating-bar {
    margin-left: 0.5rem;
}

@media screen and (min-width: 400px) {
    .commentar-section__average-rating {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.commentar-section__average-rating--rating-bar {
    margin-left: 0;
}
}

</style>
