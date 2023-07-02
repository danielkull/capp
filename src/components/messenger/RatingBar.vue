<template>
  <div class="commentar__rating-bar">
    <RatingIcon
      v-for="n in ratingRange"
      :ratingId="n + ratingGroup"
      :ratingGroup="ratingGroup"
    ></RatingIcon>
  </div>
</template>

<script>
import RatingIcon from "@/components/messenger/RatingIcon.vue";

export default {
  name: "RatingBar",
  components: { RatingIcon },
  props: {
    ratingGroup: {
            type: String,
            required: true,
          },
  },
  data() {
    return {
      // Must be in decending order (CSS use reverse)
      ratingRange: [5 ,4 , 3, 2, 1],
    }
  }
};
</script>

<style scoped>
.commentar__rating-bar {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}
</style>
