<template>
  <article class="commentar-section__customer-review">
    <header class="customer-review__header">
      <section class="customer-review__header-profil-wrapper">
        <article class="user-profile__image-small">
          <span class="user-profile__image-small__wrapper">
            <!-- Die :alt und :title Daten müssen noch überarbeitet werden -->
            <!-- Nicht jeder User hat auch einen brand Naame und CarType -->
            <!-- Die Werte müssten auch eher aus den Rout Infos geholt werden, statt als props übertragen zu werden -->
            <!-- Für die CustomerReviews Daten muss wahrscheinlich noch eine Tabelle angelegt werden, in der die Rewiew-Daten über ein entsprechendes Formular gespeichert werden. -->
            <!-- Aus der Reviews Tabelle werden die Daten dann individuell für das jeweilige Auto in den reviewers state geladen -->
            <img
              :src="imgSource"
              :alt="firstName + ' ' + lastName + ' (' + userName + ')'"
              :title="firstName + ' ' + lastName + ' (' + userName + ')'"
            />
          </span>
        </article>
        <h3 class="customer-review__header-username">
          Reviewer {{ userName }}
        </h3>
      </section>
      <RatingBar
        :ratingGroup="'Reviewer ' + userName"
        :scalingIsActive="true"
      ></RatingBar>
    </header>

    <p class="customer-review-text">
      {{ userMsg }}
      <!--
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto
      dolorum aut autem ad, neque molestias necessitatibus accusamus? Assumenda
      porro quasi soluta blanditiis quae, debitis voluptate laborum quos dicta
      at.
      -->
    </p>
  </article>
</template>

<script>
import RatingBar from "@/components/messenger/RatingBar.vue";

export default {
  name: "CustomerReviews",
  components: { RatingBar },
  props: {
    imgSource: {
      type: String,
      required: false,
    },
    userName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    userMsg: {
      type: String,
      required: false,
    },
  },
};
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
