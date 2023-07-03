<!-- How To use this Component -->
<!-- After Importing and register you can use the tag <RatingBar :ratingGroup="'username'"></RatingBar> -->
<!-- You have to at least define the ratingGroup, which is used for the connection, -->
<!-- between the input and the label -->

<template>
  <div class="commentar__rating-bar">
    <RatingIcon
      v-for="n in ratingRange"
      :ratingId="n + ratingGroup"
      :ratingGroup="ratingGroup"
      :scalingIsActive="scalingIsActive"
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
    scalingIsActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // Must be in decending order (CSS use reverse)
      ratingRange: [5, 4, 3, 2, 1],
    };
  },
};
</script>

<style scoped>
.commentar__rating-bar {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}
</style>
