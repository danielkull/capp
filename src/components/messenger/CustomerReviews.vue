<template>
  <article class="commentar-section__customer-review">
    <header class="customer-review__header">
      <section class="customer-review__header-profil-wrapper">
        <article class="user-profile__image-small">
          <span class="user-profile__image-small__wrapper">
            <img
              src="https://ais-cf.tvnow.de/tvnow/movie/5429467/1800x0/folge-vom-23042023.jpg"
              alt="Das Auto des Users"
            />
          </span>
        </article>
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
  align-items: center;
}

.customer-review__header--username {
  font-weight: bold;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}
/* Customer Image Profil same as UserProfileView.vue Img */

/*==================Profilbild-Klein-===============================*/
.user-profile__image-small {
  width: 2.5rem;
  height: 2.5rem;
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
  width: 95%;
  border: 3px solid var(--primary-dark);
  aspect-ratio: 1;
  border-radius: 100%;
}

.user-profile__image-small__wrapper > img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-origin: border-box;
  position: relative;
}
/*========================================================*/
/*==================Profilbilder-Ende===============================*/
</style>
