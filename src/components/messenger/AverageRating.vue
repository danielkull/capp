<template>
  <section class="commentar-section__average-rating">
    <div class="commentar-section__average-rating--text">
      <h3>
        Durchschnitt (<span class="average-rating--value">4</span> Capp Points)
      </h3>
    </div>
    <div class="commentar-section__average-rating--rating-bar">
      <RatingBar :ratingGroup="'ExampleUserName'"></RatingBar>
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

<style scoped></style>
