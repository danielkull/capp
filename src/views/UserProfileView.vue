<template>
  <body>
    <main>
      <div class="user-profile__frame" id="user-profile-frame">
        <article class="user-profile__wrapper">
          <span class="user-profile__image-wrapper">
            <span class="image-filter"></span>
            <img
              src="https://ais-cf.tvnow.de/tvnow/movie/5429467/1800x0/folge-vom-23042023.jpg"
              alt="Das Auto des Users"
            />
          </span>
          <section class="user-profile__information-wrapper">
            <article class="user-profile__image-small">
              <span class="user-profile__image-small__wrapper">
                <img
                  src="https://ais-cf.tvnow.de/tvnow/movie/5429467/1800x0/folge-vom-23042023.jpg"
                  alt="Das Auto des Users"
                />
              </span>
            </article>
            <!----------------------------------------------------------------->
            <section class="user-profile__user-info">
              <div class="user-info__wrapper">
                <span class="user-info__city">
                  <span class="user-info__plz-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                      />
                    </svg>
                  </span>
                  <p class="user-info__city-plz">01097</p>
                  <p>/</p>
                  <p class="user-info__city-name">Dresden,</p>
                  <p class="user-info__city-disrict">Neustadt</p>
                </span>
                <article class="user-info__favorite-choice">
                  <input
                    type="checkbox"
                    name="favorite-star"
                    id="favorite-star"
                  />
                  <label for="favorite-star"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-star"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                      /></svg
                  ></label>
                </article>
              </div>
              <span class="user-info__header"
                ><h2>Username</h2>
                <article class="user-info__seat-icons">
                  <SeatIconsFrame /></article
              ></span>
            </section>
            <!----------------------------------------------------------------->
            <section class="user-profile__user-icons">
              <article class="user-info__important-icons">
                <section
                  class="car-card__icon-wrapper"
                  style="--svg-width: 2.4rem"
                >
                  <IconType :carType="'Kleinwagen'" class="icon"></IconType>
                  <FuelType :fuelType="'Gas'" class="icon"></FuelType>
                  <TrunkType :trunkType="'S'" class="icon"></TrunkType>
                  <DifferentType
                    :differentType="'Isofix'"
                    class="icon"
                  ></DifferentType>
                  <DifferentType :differentType="'Nicht-Raucher'" class="icon">
                  </DifferentType>
                  <DifferentType :differentType="'Tiere'" class="icon">
                  </DifferentType>
                </section>
              </article>
            </section>
            <!----------------------------------------------------------------->
            <section class="user-profile__equipment-wrapper">
              <h2>Ausstattung</h2>
              <ul class="user-profile__equipment-itemlist">
                <li class="user-profile__equi-item">Lorems</li>
                <li class="user-profile__equi-item">Loremswdt4t</li>
                <li class="user-profile__equi-item">Loremswf</li>
                <li class="user-profile__equi-item">Loremswf</li>
                <li class="user-profile__equi-item">Lortehthtemswf</li>
                <li class="user-profile__equi-item">Loreeeeemswf</li>
                <li class="user-profile__equi-item">Loreeeeemswf</li>
                <li class="user-profile__equi-item">eeee</li>
                <li class="user-profile__equi-item">Loreeeewf</li>
                <li class="user-profile__equi-item">Loreewf</li>
                <li class="user-profile__equi-item">Loreewf</li>
                <li class="user-profile__equi-item">Loreeeewfewrrzwer</li>
              </ul>
            </section>
          </section>
        </article>

        <article class="user-profile__commentar-wrapper">
          <section class="commentar-section__wrapper-head">
            <input
              type="checkbox"
              name="commentar-check"
              id="commentar-section-check"
              class="commentar-section__btn"
            />
            <label for="commentar-section-check">
              Waren sie mit <span>USERNAME</span> zufrieden ?
            </label>
            <section class="commentar-section__rating-bar">
              <RatingBar :ratingGroup="'userChoice'"></RatingBar>
            </section>
          </section>
          <AverageRating></AverageRating>
          <section class="customer-wrapper">
            <CustomerReviews></CustomerReviews>
            <CustomerReviews></CustomerReviews>
            <CustomerReviews></CustomerReviews>
            <CustomerReviews></CustomerReviews>
            <CustomerReviews></CustomerReviews>
            <CustomerReviews></CustomerReviews>
          </section>
        </article>
      </div>
    </main>
  </body>
</template>

<script>
import RatingBar from "@/components/messenger/RatingBar.vue";
import AverageRating from "@/components/messenger/AverageRating.vue";
import CustomerReviews from "@/components/messenger/CustomerReviews.vue";
import IconType from "@/components/icon-type/IconType.vue";
import FuelType from "@/components/icon-type/fuelType.vue";
import TrunkType from "@/components/icon-type/TrunkType.vue";
import DifferentType from "@/components/icon-type/DifferentTypes.vue";
import SeatIconsFrame from "@/components/icon-type/SeatIcons.vue";

export default {
  components: {
    RatingBar,
    AverageRating,
    CustomerReviews,
    IconType,
    FuelType,
    TrunkType,
    DifferentType,
    SeatIconsFrame,
  },
};
</script>

<style scoped>
body {
  background: lightgray;
  width: 100vw;
  height: 100vh;
}

main,
.user-profile__frame,
.user-profile__wrapper {
  width: 100%;
  height: 100%;
}

/*========================================================*/
/*==================Profilbild-BG===============================*/
/*========================================================*/
.user-profile__image-wrapper {
  display: block;
  width: 100%;
  height: 30%;
}
.image-filter {
  position: absolute;
  display: block;
  width: 100%;
  height: 30%;
  inset: 0;
  z-index: 1;
  background: var(--img-sh-filter, rgba(255, 255, 255, 0.2));
  backdrop-filter: blur(6px);
}
.user-profile__image-wrapper > img,
.user-profile__image-small__wrapper > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
.user-profile__information-wrapper {
  background: var(--clr-sur-d);
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 79vh;
  padding-inline: var(--padding-default);
  border-radius: var(--m-brd-rad) var(--m-brd-rad) 0 0;
}
/*==================Profilbild-Klein-===============================*/
.user-profile__image-small {
  display: grid;
  place-items: center;
  width: 10rem;
  aspect-ratio: 1;
  margin-inline: auto;
  margin-top: -7rem;
  border-radius: 100%;
  background: var(--clr-sur-d);
}
.user-profile__image-small__wrapper {
  overflow: hidden;
  display: block;
  width: 95%;
  border: calc(var(--l-brd) * 2) solid var(--clr-prime-d);
  aspect-ratio: 1;
  border-radius: inherit;
}
/*========================================================*/
/*========================================================*/
/*==================User Profil===============================*/
/*--------------User info------------------------*/
.user-profile__user-info {
  width: 100%;
  height: auto;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--clr-brd-top);
  margin-inline: auto;
}
.user-info__wrapper,
.user-info__city {
  display: flex;
  align-items: center;
}

.user-info__wrapper {
  width: 100%;
  height: 2rem;
  justify-content: space-between;
  margin-top: -0.3rem;
}

.user-info__plz-icon {
  width: 1.5rem;
  aspect-ratio: 1;
  margin-right: 0.2rem;
  display: grid;
  place-items: center;
}
.user-info__plz-icon svg {
  fill: var(--clr-plz);
}
.user-info__plz-icon ~ p {
  color: var(--clr-plz);
  font-size: 0.8rem;
  margin-inline: 0.1rem;
}
.user-info__favorite-choice {
  width: 2.5rem;
  aspect-ratio: 1;
  border-radius: 100%;
  display: block;
  margin-top: -3rem;
  outline: var(--s-brd) solid var(--clr-like-def);
  outline-offset: 3px;
}

.user-info__favorite-choice svg {
  width: 100%;

  aspect-ratio: 1;
  fill: var(--clr-like-def);
}

#favorite-star {
  all: unset;
}
#favorite-star + label {
  display: block;
  width: 2.5rem;
  aspect-ratio: 1;
  border-radius: 100%;
}
.user-info__favorite-choice:has(#favorite-star:checked) {
  outline-color: var(--clr-like-act);
}
#favorite-star:checked + label svg {
  fill: var(--clr-like-act);
}
/*===================Header===================================*/
.user-info__header {
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-info__header > h2 {
  font-size: var(--m-font);
  color: var(--clr-font-commentar);
  font-weight: 400;
  font-style: normal;
}
/*--------------User Icons------------------------*/
.user-profile__user-icons {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: calc(var(--margin-default) / 2);
}

.car-card__icon-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--clr-brd-top);
  padding-block: 0.8rem;
  width: 100%;
}
/*--------------User Ausstattung------------------------*/
.user-profile__equipment-wrapper {
  text-align: center;
}
.user-profile__equipment-wrapper h2 {
  width: 100%;
  font-size: calc(var(--s-font) + 0.4rem);
  color: var(--main-font-color-light);
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.user-profile__equipment-itemlist {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  color: var(--clr-font-list);
  margin-bottom: calc(var(--margin-default) / 2);
}
.user-profile__equi-item {
  background: var(--surface-hover);
  padding-inline: calc(var(--s-font) - 0.4rem);
  padding-block: calc(var(--s-font) - 0.6rem);
  border-radius: calc(var(--s-font) - 0.6rem);
  font-weight: 300;
  font-size: calc(var(--s-font) - 0.2rem);
}
/*===================================================*/
/*===============  Commentar Section====================*/
/*===================================================*/

.user-profile__commentar-wrapper {
  position: absolute;
  z-index: 8;
  display: block;
  bottom: 0px;
  background: var(--clr-sur-d);
  height: 10rem;
  width: 100%;
  border-radius: var(--m-brd-rad) var(--m-brd-rad) 0 0;
  translate: 0px 0px;
  box-shadow: 0px -5px 20px var(--clr-shadow-top, rgba(148, 148, 148, 0.4));
  border-top: 1px solid var(--clr-brd-top);
  transition: height 0.2s ease-out;
  color: var(--clr-font-commentar);
}

.commentar-section__wrapper-head {
  display: block;
  height: 5.5rem;
  border-radius: inherit;
  border-bottom: 1px solid var(--clr-brd-top);
  width: 90%;
  margin-inline: auto;
  padding-top: 1.5rem;
  margin-top: calc(var(--s-font) / 2);
}

.commentar-section__btn {
  display: none;
}
.commentar-section__btn ~ label,
.commentar-section__rating-bar {
  display: block;
  text-align: center;
  font-size: var(--s-font);
  font-weight: 500;
  padding-bottom: 0.5rem;
}
.commentar-section__btn ~ label span {
  color: var(--clr-prime-d);
  font-weight: 700;
}
.commentar-section__btn + label::after {
  content: "";
  position: absolute;
  display: block;
  top: 8px;
  left: 50%;
  translate: -50% 0;
  width: 5rem;
  height: 0.4rem;
  border-radius: var(--s-brd-rad);
  background: var(--clr-like-def);
}

.user-profile__commentar-wrapper:has(#commentar-section-check:checked) {
  height: 30rem;
}

.customer-wrapper {
  margin-top: 1rem;
  overflow: scroll;
  height: 50vh;
}
.customer-wrapper::-webkit-scrollbar {
  appearance: none;
  width: 0;
}

/*======Media Queries================================*/
@media screen and (min-width: 1000px) {
  .user-profile__frame {
    /* background: blue; */
    width: 39.5%;
    height: 100%;
    overflow: hidden;
    border-radius: 0rem 2rem 2rem 0;
  }
  .image-filter {
    width: 40%;
    border-radius: 0rem 2rem 2rem 0;
  }

  .user-profile__wrapper,
  .user-profile__information-wrapper {
    width: 40.1%;
    background: var(--light-bg);
  }
  .user-profile__image-wrapper img {
    width: 40vw;
    height: 100%;
  }
  .nav-bar__wrapper {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    bottom: 0;
    left: 0;
    width: 4rem;
    height: 100%;
    background: linear-gradient(
      to top,
      var(--primary-dark),
      var(--primary-mid)
    );
    border-radius: 0rem 1.2rem 1.2rem 0;
    padding-inline: 1rem;
    padding-block: 2rem;
  }
}
</style>
